export const navLinks = [
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Station Management', path: '/services/station-management' },
      { label: 'Ground Handling Supervision', path: '/services/ground-handling' },
      { label: 'Passenger Services', path: '/services/passenger-services' },
      { label: 'Fuel Services', path: '/services/fuel-services' },
      { label: 'Logistics', path: '/services/cargo-logistics' },
    ],
  },
  {
    label: 'Airports',
    path: '/airports/skp',
    children: [
      { label: 'Skopje — SKP', path: '/airports/skp' },
      { label: 'Ohrid — OHD', path: '/airports/ohd' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const;
