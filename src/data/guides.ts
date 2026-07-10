import type { Guide } from '@/types';



export const guides: Guide[] = [
    {
    id: '1',
    title: 'Lær Linux på 30 minutter',
    slug: 'master-linux-30-minutes',
    description: 'Enkle Linux-kommandoer som alle kan lære. Perfekt for nybegynnere.',
    content: 'Enkle Linux-kommandoer...',
    category: 'Linux',
    difficulty: 'beginner',
    estimatedTime: 30,
    author: 'Tech Platform',
    publishedDate: new Date('2024-01-15'),
    updatedDate: new Date('2024-07-08'),
    featured: true,
    image: './linux.webp',
    tags: ['linux', 'terminal', 'beginner'],
    views: 15420,
    likes: 892,
    sections: [
      {
        id: 's0',
        title: 'Video: Introduksjon til Linux',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/sB_tLkhS4FE" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hva er Linux?',
        content: 'Linux er et system som gjør at datamaskinen fungerer. Det er som "hjernen" på datamaskinen din.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Enkle kommandoer du trenger',
        content: `ls = Se hva som er i mappen
cd = Gå inn i en mappe
pwd = Vis hvor du er nå
mkdir = Lag en ny mappe
cp = Kopier en fil
rm = Slett en fil`,
        type: 'code',
        codeLanguage: 'bash',
      },
    ],
    whatYouNeed: ['En datamaskin', 'Vilje til å lære'],
    relatedGuides: [],
    faq: [
      {
        question: 'Er Linux vanskelig?',
        answer: 'Nei! Det er enklere enn du tror. Start med enkle kommandoer og øv deg.',
      },
    ],
  },
  {
    id: '2',
    title: 'Gjør React-nettsider raskere',
    slug: 'react-performance-optimization',
    description: 'Enkle triks for å gjøre nettsidene dine kjappere. Alle kan gjøre dette.',
    content: 'Hvordan gjøre React raskere...',
    category: 'Programmering',
    difficulty: 'beginner',
    estimatedTime: 20,
    author: 'Tech Platform',
    publishedDate: new Date('2024-02-10'),
    updatedDate: new Date('2024-07-08'),
    featured: true,
    image: '/manus-storage/guide-react-code_0710ef26.png',
    tags: ['react', 'rask', 'nettside'],
    views: 12850,
    likes: 756,
    sections: [
      {
        id: 's0',
        title: 'Video: React Performance Tips',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/sFTGQIYoR_I" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hvorfor er det viktig?',
        content: 'Hvis nettsiden din er treg, blir folk irritert og går bort. En rask nettside gjør folk glad.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Tre enkle ting du kan gjøre',
        content: `1. Ikke last inn alt på en gang - last inn bare det folk trenger nå
2. Bruk mindre bilder - små bilder lastes raskere
3. Fjern kode du ikke bruker - mindre kode = raskere nettside`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: ['React installert', 'En teksteditor'],
    relatedGuides: [],
    faq: [
      {
        question: 'Hvordan vet jeg om nettsiden er rask?',
        answer: 'Åpne nettsiden og se hvor lang tid det tar å laste. Under 2 sekunder er bra.',
      },
    ],
  },
  {
    id: '3',
    title: 'Skyen - hvor lagrer jeg filene mine?',
    slug: 'cloud-architecture-essentials',
    description: 'Enkelt forklart: hva er skyen og hvordan bruker du den?',
    content: 'Forklaring av skyen...',
    category: 'Cloud',
    difficulty: 'beginner',
    estimatedTime: 15,
    author: 'Tech Platform',
    publishedDate: new Date('2024-03-05'),
    updatedDate: new Date('2024-07-08'),
    featured: true,
    image: './sky.jpg',
    tags: ['sky', 'lagring', 'backup'],
    views: 8920,
    likes: 542,
    sections: [
      {
        id: 's0',
        title: 'Video: Hva er Cloud Storage?',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/JdhYUE6MebI" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hva er skyen?',
        content: 'Skyen er bare en annen datamaskin langt borte som lagrer filene dine. I stedet for å lagre på din datamaskin, lagrer du på deres datamaskin. Enkelt!',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Populære skytjenester',
        content: `Google Drive - Gratis, 15 GB
OneDrive - Gratis, 5 GB
Dropbox - Gratis, 2 GB

Alle fungerer likt: last opp filer, og de er sikre.`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: ['En Google-konto eller Microsoft-konto', 'Internett'],
    relatedGuides: [],
    faq: [
      {
        question: 'Er det trygt å lagre filene mine i skyen?',
        answer: 'Ja, veldig trygt. Bedriftene som driver skyen bruker sterke låser for å beskytte filene dine.',
      },
    ],
  },
  {
    id: '4',
    title: 'TypeScript - Sikker koding',
    slug: 'typescript-strict-mode-guide',
    description: 'Hvordan skrive kode som ikke får feil. For alle som vil lære.',
    content: 'TypeScript forklart enkelt...',
    category: 'Programmering',
    difficulty: 'beginner',
    estimatedTime: 20,
    author: 'Tech Platform',
    publishedDate: new Date('2024-04-12'),
    updatedDate: new Date('2024-07-08'),
    featured: false,
    image: '/manus-storage/guide-typescript-code_4ae27831.png',
    tags: ['typescript', 'sikkerhet', 'koding'],
    views: 6540,
    likes: 398,
    sections: [
      {
        id: 's0',
        title: 'Video: TypeScript for Beginners',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/BwuLxPH8gKE" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hva er TypeScript?',
        content: 'TypeScript er som en "sjekker" for koden din. Den finner feil før du kjører programmet. Som stavekontroll i Word, men for kode.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Hvorfor bruke det?',
        content: `Færre feil i koden
Lettere å finne problemer
Koden blir tryggere
Du sparer tid på debugging`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: ['Node.js installert', 'En teksteditor'],
    relatedGuides: [],
    faq: [
      {
        question: 'Er det vanskelig å lære?',
        answer: 'Nei, det er som å lære JavaScript, bare med ekstra sikkerhet.',
      },
    ],
  },
  {
    id: '5',
    title: 'Beskytt nettsiden din fra hackers',
    slug: 'web-security-best-practices',
    description: 'Enkle ting du kan gjøre for å holde nettsiden sikker.',
    content: 'Sikkerhet for nettsider...',
    category: 'Sikkerhet',
    difficulty: 'beginner',
    estimatedTime: 20,
    author: 'Tech Platform',
    publishedDate: new Date('2024-05-01'),
    updatedDate: new Date('2024-07-08'),
    featured: false,
    image: '/manus-storage/guide-security-lock_40dd8661.png',
    tags: ['sikkerhet', 'nettside', 'hacker'],
    views: 9870,
    likes: 612,
    sections: [
      {
        id: 's0',
        title: 'Video: Web Security Basics',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/eI8M47JCBAA" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hvorfor er sikkerhet viktig?',
        content: 'Hvis nettsiden din ikke er sikker, kan hackers stjele data fra brukerne dine. Det er som å la døren stå åpen for tyver.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Tre enkle ting du gjør',
        content: `1. Bruk HTTPS - det er som å låse døren
2. Valider all input - sjekk at data er riktig før du bruker det
3. Oppdater programvaren - hold alt oppdatert`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: ['En nettside', 'Vilje til å lære'],
    relatedGuides: [],
    faq: [
      {
        question: 'Hva er HTTPS?',
        answer: 'Det er en sikker måte å sende data på internett. Se på URL-en din - hvis den starter med https:// er den sikker.',
      },
    ],
  },
  {
    id: '6',
    title: 'Docker - Pakk programmet ditt',
    slug: 'docker-for-beginners',
    description: 'Enkelt forklart: hva er Docker og hvorfor bruker folk det?',
    content: 'Docker for nybegynnere...',
    category: 'Servere',
    difficulty: 'beginner',
    estimatedTime: 20,
    author: 'Tech Platform',
    publishedDate: new Date('2024-05-20'),
    updatedDate: new Date('2024-07-08'),
    featured: false,
    image: '/manus-storage/guide-docker-containers_538f99f8.png',
    tags: ['docker', 'pakking', 'server'],
    views: 11230,
    likes: 687,
    sections: [
      {
        id: 's0',
        title: 'Video: Docker Explained',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/Gjnup-PuquQ" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Hva er Docker?',
        content: 'Docker er som en "boks" som inneholder hele programmet ditt. Når du sender boksen til en annen datamaskin, fungerer programmet helt likt. Ingen problemer med at ting mangler.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Hvorfor er det nyttig?',
        content: `Programmet ditt fungerer på alle maskiner
Enklere å dele programmet med andre
Ingen "det fungerer på min maskin"-problemer`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: ['Docker installert', 'En terminal'],
    relatedGuides: [],
    faq: [
      {
        question: 'Er Docker vanskelig?',
        answer: 'Nei, det er enklere enn du tror. Start med små eksempler.',
      },
    ],
  },
  {
    id: '7',
    title: 'Overføre bilder fra Android til PC - Enkelt gjort',
    slug: 'overføre-bilder-android-til-pc',
    description: 'Tre enkle måter å få bildene dine fra telefonen til datamaskinen.',
    content: 'Bildeoverføring fra Android...',
    category: 'Android',
    difficulty: 'beginner',
    estimatedTime: 15,
    author: 'Tech Platform',
    publishedDate: new Date('2024-07-08'),
    updatedDate: new Date('2024-07-08'),
    featured: false,
    image: '/manus-storage/guide-android-transfer_8636c242.png',
    tags: ['android', 'bilder', 'overføring', 'pc'],
    views: 0,
    likes: 0,
    sections: [
      {
        id: 's0',
        title: 'Video: Overføre bilder fra Android',
        content: '<iframe width="100%" height="400" src="www.youtube.com/embed/Z1-Aq_7YZTI" frameborder="0" allowfullscreen></iframe>',
        type: 'text',
      },
      {
        id: 's1',
        title: 'Metode 1: USB-kabel (enkleste måten)',
        content: 'Dette er den enkleste måten. Du trenger bare en USB-kabel som passer til telefonen din.',
        type: 'text',
      },
      {
        id: 's2',
        title: 'Steg-for-steg',
        content: `1. Koble telefonen til PC med USB-kabel
2. Åpne "Filutforsker" på PC
3. Klikk på telefonen i venstre meny
4. Åpne "DCIM" eller "Pictures"
5. Velg bildene du vil kopiere
6. Høyreklikk og velg "Kopier"
7. Gå til en mappe på PC
8. Høyreklikk og velg "Lim inn"
9. Ferdig!`,
        type: 'code',
        codeLanguage: 'text',
      },
      {
        id: 's3',
        title: 'Tips',
        content: 'Hvis PC ikke ser telefonen: Lås opp telefonen og trykk "Tillat" når det spørr. Hvis det fortsatt ikke fungerer, prøv en annen USB-port eller en annen USB-kabel.',
        type: 'tip',
      },
      {
        id: 's4',
        title: 'Metode 2: Google Photos (automatisk backup)',
        content: 'Google Photos er som en "sky" for bildene dine. Bildene dine blir automatisk sikret.',
        type: 'text',
      },
      {
        id: 's5',
        title: 'Steg-for-steg',
        content: `1. Last ned "Google Photos" fra Play Store
2. Åpne appen
3. Logg inn med Google-kontoen din
4. Trykk på innstillinger (tannhjul-ikon)
5. Velg "Backup and sync"
6. Trykk "Slå på"
7. Vent til bildene er lastet opp
8. Åpne photos.google.com på PC
9. Logg inn med samme Google-konto
10. Bildene dine er der!`,
        type: 'code',
        codeLanguage: 'text',
      },
      {
        id: 's6',
        title: 'Fordel med Google Photos',
        content: 'Du får 15 GB gratis plass. Bildene er sikre. Du kan se dem fra hvor som helst. Du trenger ikke USB-kabel.',
        type: 'tip',
      },
      {
        id: 's7',
        title: 'Metode 3: Minnepenn eller ekstern harddisk',
        content: 'Når du har bildene på PC, kan du kopiere dem til minnepenn eller harddisk for ekstra sikkerhet.',
        type: 'text',
      },
      {
        id: 's8',
        title: 'Steg-for-steg',
        content: `1. Koble minnepennen/harddisken til PC
2. Åpne Filutforsker
3. Velg bildene på PC
4. Høyreklikk og velg "Kopier"
5. Åpne minnepennen/harddisken
6. Høyreklikk og velg "Lim inn"
7. Vent til det er ferdig
8. Høyreklikk på minnepennen og velg "Sikker utkobling"
9. Nå kan du trekke den ut`,
        type: 'code',
        codeLanguage: 'text',
      },
      {
        id: 's9',
        title: 'Viktig: Sikker utkobling',
        content: 'ALLTID bruk "Sikker utkobling" før du trekker ut minnepennen eller harddisken. Hvis du trekker den ut mens den jobber, kan bildene bli ødelagt.',
        type: 'warning',
      },
      {
        id: 's10',
        title: 'Sammenligning av metodene',
        content: `USB-kabel: Rask, enkel, ingen ekstra kostnad
Google Photos: Automatisk, sikker, gratis 15 GB
Minnepenn: Permanent backup, du kan ta den med deg`,
        type: 'code',
        codeLanguage: 'text',
      },
    ],
    whatYouNeed: [
      'Android-telefon',
      'PC (Windows eller Mac)',
      'USB-kabel (valgfritt)',
      'Google-konto (valgfritt)',
    ],
    relatedGuides: [],
    faq: [
      {
        question: 'Hvor lagrer Android bildene?',
        answer: 'I mappen "DCIM" eller "Pictures". Du finner dem når du kobler telefonen til PC.',
      },
      {
        question: 'Hvor mye plass trenger jeg?',
        answer: 'Hver foto tar ca. 3-5 MB. 100 bilder tar ca. 300-500 MB plass.',
      },
      {
        question: 'Kan jeg overføre videoer også?',
        answer: 'Ja, på samme måte som bilder. Videoer tar mer plass, så det tar lengre tid.',
      },
      {
        question: 'Hva hvis PC ikke ser telefonen?',
        answer: 'Prøv: 1) Lås opp telefonen, 2) Trykk "Tillat" på telefonen, 3) Bytt USB-port, 4) Bruk Google Photos i stedet.',
      },
      {
        question: 'Er Google Photos sikker?',
        answer: 'Ja, veldig sikker. Google bruker sterke låser for å beskytte bildene dine.',
      },
    ],
  },
];

export const categories = [
  'Windows',
  'Linux',
  'macOS',
  'Android',
  'iPhone',
  'Programmering',
  'AI',
  'Nettverk',
  'Spill',
  'Smarthjem',
  'Sikkerhet',
  'Webutvikling',
  'Servere',
  'Cloud',
] as const;

export type Category = (typeof categories)[number];

