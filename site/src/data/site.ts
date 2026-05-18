export const stats = [
  { value: '30+', label: 'Years Active' },
  { value: '10+', label: 'Airline Partners' },
  { value: '2', label: 'Airports', sublabel: 'SKP & OHD' },
  { value: '4', label: 'Countries Served', sublabel: 'Macedonia, Albania, Serbia, Montenegro' },
];

export const contact = {
  phone: '+389 2 3117 009',
  phoneRaw: '+38923117009',
  phones: ['+389 2 3117 009', '+389 2 3229 975', '+389 2 3118 009'],
  email: 'aaminfo@aam.com.mk',
  facebook: 'https://facebook.com/aamairportservices',
  whatsapp: 'https://wa.me/38923117009',
  headOffice: {
    address: 'Dame Gruev 7, local 7, 1000 Skopje, Macedonia',
    hours: 'Mon–Fri 08:00–17:00',
  },
  airportDesk: {
    address: 'Arrivals Hall, Skopje International Airport (SKP)',
    hours: 'During all flight operations',
  },
  registry: {
    embs: '6880347',
    edb: '4080013537923',
    activity: '52.23 — Service activities incidental to air transportation',
  },
};

export const company = {
  fullName: 'AAM DOOEL Skopje',
  tradingName: 'AAM Airport Services',
  shortName: 'AAM',
  founded: 1992,
  operatingSince: 1995,
  country: 'Macedonia',
  website: 'aam.com.mk',
};

export const gm = {
  name: 'Daniel Andonovic',
  title: 'General Manager, AAM DOOEL Skopje',
  linkedin: 'https://www.linkedin.com/in/daniel-andonovic-25525737/',
};

export const partners = [
  // Current airline partners
  { name: 'Edelweiss Air', iata: 'WK', relationship: 'Representation & Supervision', period: '2010–present', website: 'https://flyedelweiss.com', current: true, type: 'airline' as const, logo: '/logos/partners/edelweiss-air-logo.png' },
  { name: 'Air Serbia', iata: 'JU', relationship: 'Supervision & Ticketing', period: '2015–present', website: 'https://airserbia.com', current: true, type: 'airline' as const, logo: '/logos/partners/airserbia-logo.png' },
  { name: 'LOT Polish Airlines', iata: 'LO', relationship: 'Ticketing', period: '2018–present', website: 'https://lot.com', current: true, type: 'airline' as const, logo: '/logos/partners/LOT_Polish_Airlines.svg' },
  { name: 'Turkish Airlines', relationship: 'Ticketing', period: '2023–present', website: 'https://turkishairlines.com', current: true, type: 'airline' as const, logo: '/logos/partners/turkish-airlines-logo.svg' },
  // Vendor partners
  { name: 'Amadeus', relationship: 'GDS Market Support', period: '1998–present', website: 'https://amadeus.com', current: true, type: 'vendor' as const, logo: '/logos/partners/amadeus-logo.svg' },
  { name: 'Jetex Dubai', relationship: 'Airport Support', period: '2008–present', website: 'https://jetex.com', current: true, type: 'vendor' as const, logo: '/logos/partners/Jetex_logo.svg' },
  { name: 'Apogee Dubai', relationship: 'Airport Support', period: '2011–present', website: 'https://apogee.aero', current: true, type: 'vendor' as const, logo: '/logos/partners/apogee-aero-dubai-logo.png' },
  { name: 'Flight Pro International', relationship: 'Airport Support', period: '2019–present', website: 'https://flightprointernational.com', current: true, type: 'vendor' as const, logo: '/logos/partners/FlightProInt-logo.png' },
  { name: 'World Fuel Services', relationship: 'Fuel Arrangements', period: '2015–present', website: 'https://world-kinect.com', current: true, type: 'vendor' as const, logo: '/logos/partners/World_Fuel_Services_logo.svg' },
  { name: 'Rockwell Collins', relationship: 'Airport Support', period: '1998–2019', website: 'https://collinsaerospace.com', current: false, type: 'vendor' as const, logo: '/logos/partners/Rockwell_Collins_logo.svg' },
  // Historical
  { name: 'Swiss International', relationship: 'GSA & Supervision', period: '1997–2006', website: 'https://swiss.com', current: false, type: 'airline' as const, logo: '/logos/partners/swiss-international-logo.svg' },
  { name: 'Adria Airways', relationship: 'GSA & Supervision', period: '1995–2019', website: '', current: false, type: 'airline' as const, logo: '/logos/partners/adria-airways-logo.svg' },
];

export const timeline = [
  { period: '1992–1995', title: 'Founded', text: 'AAM was established with mixed ownership (51% Adria Airways, 49% domestic capital). Flight operations began in September 1995 at Skopje Airport with Adria Airways as the founding airline partner.' },
  { period: '1997–2006', title: 'Swissair & Swiss', text: 'AAM became General Sales Agent for Swissair — and later Swiss International — providing full airport supervision at both SKP and OHD.' },
  { period: '1997–2025', title: 'IATA & Amadeus Training', text: 'AAM operated an IATA training center for tariffs and ticketing, and an Amadeus GDS training center — building the aviation expertise base in Macedonia.' },
  { period: '2006', title: 'Fully Independent', text: 'Following the end of mixed ownership, AAM became a 100% privately owned Macedonian company — the structure it maintains today.' },
  { period: '2008–present', title: 'Regional Expansion', text: 'AAM began supporting JETEX across Macedonia, Albania, Serbia, Montenegro and Slovenia — expanding beyond the two airports into a regional operational network.' },
];
