import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export interface ResponsiveSourceSet {
  avifSrcset: string;
  webpSrcset: string;
  fallbackSrcset: string;
  fallbackSrc: string;
  width: number;
  height: number;
}

/**
 * Generates responsive AVIF, WebP, and format-matched fallback image variants
 * for native <picture> elements using Astro's image processing pipeline.
 *
 * Ensures no upscaling beyond original asset dimensions.
 */
export async function createResponsiveSourceSet(
  image: ImageMetadata,
  targetWidths: number[],
  fallbackFormat?: 'png' | 'jpeg' | 'webp' | 'avif'
): Promise<ResponsiveSourceSet> {
  // Capping widths to image's native width so we never upscale
  const validWidths = Array.from(
    new Set(
      targetWidths
        .filter((w) => w <= image.width)
        .concat(targetWidths.some((w) => w >= image.width) ? [image.width] : [])
    )
  ).sort((a, b) => a - b);

  const widths = validWidths.length > 0 ? validWidths : [image.width];

  const avifImages = await Promise.all(
    widths.map((w) => getImage({ src: image, width: w, format: 'avif' }))
  );

  const webpImages = await Promise.all(
    widths.map((w) => getImage({ src: image, width: w, format: 'webp' }))
  );

  const resolvedFallbackFormat = fallbackFormat || (image.format === 'png' ? 'png' : 'jpeg');
  const fallbackImages = await Promise.all(
    widths.map((w) => getImage({ src: image, width: w, format: resolvedFallbackFormat }))
  );

  const avifSrcset = avifImages.map((img) => `${img.src} ${img.attributes.width}w`).join(', ');
  const webpSrcset = webpImages.map((img) => `${img.src} ${img.attributes.width}w`).join(', ');
  const fallbackSrcset = fallbackImages.map((img) => `${img.src} ${img.attributes.width}w`).join(', ');

  const defaultFallback = fallbackImages[fallbackImages.length - 1];

  return {
    avifSrcset,
    webpSrcset,
    fallbackSrcset,
    fallbackSrc: defaultFallback.src,
    width: image.width,
    height: image.height,
  };
}
