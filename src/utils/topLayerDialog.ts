/**
 * Helpers for native <dialog> top-layer entry/exit animations and light-dismiss fallbacks.
 * Aligns with animate-to-from-top-layer and light-dismiss-a-dialog best practices.
 */

let supportsDisplayTransition: boolean | undefined;

export function canTransitionDisplay(): boolean {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (typeof window === 'undefined' || !window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    return false;
  }

  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  supportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return supportsDisplayTransition;
}

export function supportsTopLayerExit(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.CSS?.supports?.('overlay', 'auto')) && canTransitionDisplay();
}

export async function closeAnimatedDialog(dialog: HTMLDialogElement | null): Promise<void> {
  if (!dialog || !dialog.open) return;

  if (!supportsTopLayerExit()) {
    if (dialog.hasAttribute('data-closing')) return;
    dialog.setAttribute('data-closing', '');
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise<void>((resolve) => window.setTimeout(resolve, 1500)),
      ]);
    }
    if (!dialog.hasAttribute('data-closing')) return;
    dialog.removeAttribute('data-closing');
  }

  dialog.close();
}

export function bindDialogLightDismiss(
  dialog: HTMLDialogElement | null,
  onClose: () => void | Promise<void>
): void {
  if (!dialog) return;

  // Route Esc / cancel requests through animated close when supported
  dialog.addEventListener('cancel', (event) => {
    if (event.cancelable) {
      event.preventDefault();
      void onClose();
    }
  });

  // Fallback for browsers without native <dialog closedby="any"> (e.g. Safari)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isOutsideContent = (e: PointerEvent): boolean => {
      const card = dialog.firstElementChild;
      const targetRect = card ? card.getBoundingClientRect() : dialog.getBoundingClientRect();
      return (
        e.clientX < targetRect.left ||
        e.clientX > targetRect.right ||
        e.clientY < targetRect.top ||
        e.clientY > targetRect.bottom
      );
    };

    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => {
      pressedOutside = e.target === dialog && isOutsideContent(e);
    });

    dialog.addEventListener('pointerup', (e) => {
      if (pressedOutside && e.target === dialog && isOutsideContent(e)) {
        void onClose();
      }
      pressedOutside = false;
    });
  }
}
