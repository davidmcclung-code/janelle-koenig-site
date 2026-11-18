import type { ImageMetadata } from 'astro';

import img01 from '../assets/photos/janelle-01-astor-theatre.webp';
import img02 from '../assets/photos/janelle-02-bunnings-dress.webp';
import img03 from '../assets/photos/janelle-06-sequin-guitar.webp';
import img04 from '../assets/photos/janelle-07-pawa-awards.webp';
import img05 from '../assets/photos/janelle-04-one-night-band-stage.webp';
import img06 from '../assets/photos/janelle-05-priscilla-stage.webp';
import img07 from '../assets/photos/janelle-13-telethon-panel.webp';
import img08 from '../assets/photos/janelle-08-kais-gold-ball.webp';
import img09 from '../assets/photos/janelle-09-comedy-lounge.webp';
import img10 from '../assets/photos/janelle-11-pretty-woman-red.webp';
import img11 from '../assets/photos/janelle-10-gold-sequins-stage.webp';
import img12 from '../assets/photos/janelle-12-malaysian-tourism.webp';
import img13 from '../assets/photos/janelle-03-liberty-theatre.webp';
import img14 from '../assets/photos/janelle-14-matching-blouse-shoes.webp';
import img15 from '../assets/photos/janelle-15-wicked-premiere.webp';
import img16 from '../assets/photos/janelle-16-rise-up-gala.webp';

import img17 from '../assets/photos/janelle-17-poster-one-night-band.webp';
import img18 from '../assets/photos/janelle-18-poster-joker-and-queen.webp';
import img19 from '../assets/photos/janelle-19-poster-stories-to-tell.webp';
import img20 from '../assets/photos/janelle-20-poster-suburban-hymns.webp';
import img21 from '../assets/photos/janelle-21-poster-daddys-girl.webp';

export interface GalleryItem {
  id: string;
  badge: string;
  image: ImageMetadata;
  category: string;
  title: string;
  caption: string;
  alt: string;
  objectPosition?: string;
  isFeature?: boolean;
  isWideMobile?: boolean;
  isPoster?: boolean;
}

export interface GalleryRow {
  cols: string;
  height: string;
  items: GalleryItem[];
}

export interface IndexedGalleryItem extends GalleryItem {
  globalIndex: number;
  staggerDelay: number;
}

export interface IndexedGalleryRow {
  cols: string;
  height: string;
  items: IndexedGalleryItem[];
}

export const mainRows: GalleryRow[] = [
  {
    cols: '2fr 1fr 1fr',
    height: 'clamp(270px, 26vw, 340px)',
    items: [
      {
        id: 'astor-theatre',
        badge: '01',
        image: img01,
        category: 'On Stage',
        title: 'Astor Theatre, Perth',
        caption: 'Me onstage at the beautiful Astor Theatre in Perth, just after someone asked me where my career was going.',
        alt: 'Janelle Koenig performing onstage at the Astor Theatre in Perth',
        objectPosition: 'center center',
        isFeature: true,
        isWideMobile: true,
      },
      {
        id: 'bunnings-dress',
        badge: '02',
        image: img02,
        category: 'On Stage',
        title: 'Bunnings Environmental Couture',
        caption: 'Nobody wears a dress made of Bunnings environmental bags like me. NO-ONE.',
        alt: 'Janelle Koenig onstage wearing a dress made from green Bunnings environmental bags',
        objectPosition: 'center top',
      },
      {
        id: 'sequin-guitar',
        badge: '03',
        image: img03,
        category: 'Musical Comedy',
        title: 'Stage Lighting Co-ordination',
        caption: 'Whenever possible – I prefer to co-ordinate my outfits with the stage lighting.',
        alt: 'Janelle Koenig playing acoustic guitar onstage in a green and purple sequined dress',
        objectPosition: 'center top',
      },
    ],
  },
  {
    cols: '1fr 1fr 2fr',
    height: 'clamp(250px, 24vw, 310px)',
    items: [
      {
        id: 'pawa-awards',
        badge: '04',
        image: img04,
        category: 'MC & Hosting',
        title: 'Performing Arts W.A. Awards',
        caption: 'Here I am hosting the Performing Arts W.A. Awards. Possibly wondering whether I had left the hair irons on at home.',
        alt: 'Janelle Koenig hosting at the lectern for the Performing Arts WA Awards',
        objectPosition: 'center top',
      },
      {
        id: 'one-night-band-stage',
        badge: '05',
        image: img05,
        category: 'WA Comedy Week',
        title: 'One Night Band Live',
        caption: 'My magnificent show ‘One Night Band’ during WA Comedy Week. Me, my songs and an actual band. It completely sold out. I am yet to.',
        alt: 'Wide auditorium view of Janelle Koenig performing One Night Band on stage with a live band',
        objectPosition: 'center center',
      },
      {
        id: 'priscilla-stage',
        badge: '06',
        image: img06,
        category: 'On Stage',
        title: 'Priscilla Queen of the Desert',
        caption: 'Onstage as Shirl in Priscilla Queen of the Desert with Pete Rowsthorn as Bernadette. I will forever cherish Pete telling me to set my tampon on fire because it would be the only bang I was going to get every night',
        alt: 'Janelle Koenig as Shirl onstage with Pete Rowsthorn as Bernadette in Priscilla Queen of the Desert',
        objectPosition: 'center center',
        isWideMobile: true,
      },
    ],
  },
  {
    cols: '2fr 1fr 1fr 0.95fr',
    height: 'clamp(250px, 24vw, 310px)',
    items: [
      {
        id: 'telethon-panel',
        badge: '07',
        image: img07,
        category: 'TV & Media',
        title: 'Live on Telethon',
        caption: 'Ohh here I am on the telly for Telethon.',
        alt: 'Janelle Koenig on the broadcast panel desk for Telethon',
        objectPosition: 'center center',
        isWideMobile: true,
      },
      {
        id: 'kais-gold-ball',
        badge: '08',
        image: img08,
        category: 'Ambassador & MC',
        title: 'Kai’s Big Gold Ball',
        caption: 'Here I am performing at the Kai’s Big Gold Ball. It is one of the honours of my life to be an ambassador for the Kids Cancer Support Group.',
        alt: "Janelle Koenig performing at Kai's Big Gold Ball for the Kids Cancer Support Group",
        objectPosition: 'center top',
      },
      {
        id: 'comedy-lounge',
        badge: '09',
        image: img09,
        category: 'Stand-Up',
        title: 'Comedy Lounge, Perth',
        caption: 'At my home club - Perth’s iconic Comedy Lounge. I really wish I still fit into that skirt.',
        alt: 'Janelle Koenig performing with her guitar at Comedy Lounge Perth',
        objectPosition: 'center top',
      },
      {
        id: 'pretty-woman-red',
        badge: '10',
        image: img10,
        category: 'Red Carpet',
        title: 'Pretty Woman Red Carpet',
        caption: 'When the theme is red…I can absolutely commit.',
        alt: 'Janelle Koenig in a floor-length red dress on the Pretty Woman media wall',
        objectPosition: 'center top',
      },
    ],
  },
  {
    cols: '1.5fr 1fr 1.9fr',
    height: 'clamp(250px, 24vw, 310px)',
    items: [
      {
        id: 'gold-sequins-stage',
        badge: '11',
        image: img11,
        category: 'On Stage',
        title: 'Gold Sequins & Spotlight',
        caption: 'Where the hell did my legs go?',
        alt: 'Janelle Koenig performing on stage in a gold sequined outfit',
        objectPosition: 'center top',
      },
      {
        id: 'malaysian-tourism',
        badge: '12',
        image: img12,
        category: 'Corporate MC',
        title: 'Malaysian Tourism Board Night',
        caption: 'Here I am hosting the Malaysian Tourism Board’s information night. They had Malaysian snacks. It was awesome.',
        alt: 'Janelle Koenig in front of the Consulate General of Malaysia banner',
        objectPosition: 'center top',
      },
      {
        id: 'liberty-theatre',
        badge: '13',
        image: img13,
        category: 'Fringe World',
        title: 'Liberty Theatre, Fringe World',
        caption: 'Onstage at the Liberty Theatre during Fringe World.',
        alt: 'Janelle Koenig performing onstage at the Liberty Theatre during Fringe World',
        objectPosition: 'center 74%',
      },
    ],
  },
  {
    cols: '1fr 1.8fr 1.65fr',
    height: 'clamp(260px, 25vw, 344px)',
    items: [
      {
        id: 'matching-blouse-shoes',
        badge: '14',
        image: img14,
        category: 'Events',
        title: 'Red Carpet Arrival',
        caption: 'Another lovely event. Please pay particular attention to the fact my blouse and my shoes match. Also are there any words that immediately age a person the way that the word ‘blouse’ does? See also ‘serviette’ and ‘windcheater’.',
        alt: 'Janelle Koenig smiling on a media wall in a patterned blouse, black skirt, and matching shoes',
        objectPosition: 'center top',
      },
      {
        id: 'wicked-premiere',
        badge: '15',
        image: img15,
        category: 'Premiere Host',
        title: 'Wicked: For Good Premiere',
        caption: 'Here I am hosting the Wicked – For Good premiere in Perth for Universal Pictures. On my resume I am going to say I was the opening act for Ariana Grande…it’s technically true, right?',
        alt: 'Janelle Koenig hosting the Wicked: For Good premiere in Perth',
        objectPosition: 'center top',
      },
      {
        id: 'rise-up-gala',
        badge: '16',
        image: img16,
        category: 'Charity Gala',
        title: 'Rise-Up Gala',
        caption: 'Here I am at the annual Rise-Up Gala where the waiters are all celebrities. People kept trying to tell me about their food allergies and drink orders because they thought I was a real waiter. I still don’t know if that’s a compliment or an insult. Ha ha.',
        alt: 'Janelle Koenig with fellow celebrity waiters at the annual Rise-Up Gala',
        objectPosition: 'center 15%',
        isWideMobile: true,
      },
    ],
  },
];

export const posterItems: GalleryItem[] = [
  {
    id: 'poster-one-night-band',
    badge: '17',
    image: img17,
    category: 'Show Poster',
    title: 'One Night Band – Sold Out',
    caption: 'Oh remember that pic from earlier? This is the poster. Isn’t it cool? And I especially love how the sold-out sign covers my gut.',
    alt: 'Sold-out poster for Janelle Koenig: One Night Band',
    isPoster: true,
  },
  {
    id: 'poster-joker-and-queen',
    badge: '18',
    image: img18,
    category: 'Show Poster',
    title: 'The Joker and the Queen',
    caption: 'Dean Misdale and I did this show for Fringe World. I’m the joker part.',
    alt: 'Fringe World show poster for The Joker and the Queen with Janelle Koenig and Dean Misdale',
    isPoster: true,
  },
  {
    id: 'poster-stories-to-tell',
    badge: '19',
    image: img19,
    category: 'Show Poster',
    title: 'Joel & Janelle Have Stories To Tell',
    caption: 'One of my favourite shows to do – Joel and Janelle Have Stories To Tell. Two mates having a chat in front of an audience. The first time we did it I was worried we hadn’t done enough time, then I looked at the clock and we’d done 2 hours and 15 minutes. No breaks.',
    alt: 'Show poster for Joel & Janelle Have Stories To Tell',
    isPoster: true,
  },
  {
    id: 'poster-suburban-hymns',
    badge: '20',
    image: img20,
    category: 'Show Poster',
    title: 'Suburban Hymns',
    caption: 'Bless you, Bitch.',
    alt: 'Illustrated show poster for Janelle Koenig: Suburban Hymns',
    isPoster: true,
  },
  {
    id: 'poster-daddys-girl',
    badge: '21',
    image: img21,
    category: 'Throwback Poster',
    title: 'Daddy’s Girl',
    caption: 'I turned 18 the day this photo was taken and thought this was the epitome of glamour. Check the eyebrows!',
    alt: "Show poster for Janelle Koenig: Daddy's Girl featuring her 18th birthday portrait",
    isPoster: true,
  },
];

let runningIndex = 0;
export const indexedMainRows: IndexedGalleryRow[] = mainRows.map((row) => ({
  ...row,
  items: row.items.map((item, colIdx) => ({
    ...item,
    globalIndex: runningIndex++,
    staggerDelay: colIdx * 55,
  })),
}));

export const indexedPosters: IndexedGalleryItem[] = posterItems.map((item, colIdx) => ({
  ...item,
  globalIndex: runningIndex++,
  staggerDelay: colIdx * 55,
}));
