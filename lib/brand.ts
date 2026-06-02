/**
 * Brand constants — single source of truth.
 * Update here and the change propagates across every page.
 *
 * If any of these values change (especially the FCA FRN, ICO number, or
 * registered office), notify the FCA and update Companies House first,
 * then update this file.
 */
export const brand = {
  // Trading name
  name: 'Motor Accident Line',
  domain: 'motor-accident-line.co.uk',
  tagline: 'Road traffic accident claims',

  // Legal entity
  legalEntity: 'Venture Marketing North West Ltd',
  companyNumber: '10608067',
  registeredOffice: '4 Hattersley Court, Ormskirk, England, L39 2AY',

  // Regulatory
  fcaFRN: '838123',
  icoNumber: 'ZC009231',

  // Contact
  phone: '0303 003 2160',
  phoneIntl: '+443030032160',
  emailGeneral: 'enquiries@motor-accident-line.co.uk',
  emailComplaints: 'info@vmnw.co.uk',

  // Document versions
  policiesLastUpdated: 'May 2026',
  policiesVersion: '1.0',
} as const;

// Convenience helpers
export const phoneHref = `tel:${brand.phoneIntl}`;
export const emailGeneralHref = `mailto:${brand.emailGeneral}`;
export const emailComplaintsHref = `mailto:${brand.emailComplaints}`;
