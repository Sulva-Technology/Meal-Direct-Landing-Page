// Single source of truth for supported campuses. Populate with REAL data only —
// Google penalizes fabricated LocalBusiness address/geo. Each populated campus
// emits a LocalBusiness node (see buildCampusJsonLd) into the homepage @graph,
// and feeds Service.areaServed. Leave empty until you have verified details.

export interface Campus {
  /** Display name, e.g. "Venite University" */
  name: string;
  /** Optional slug for future per-campus landing pages, e.g. "venite-university" */
  slug?: string;
  /** Street address of the campus / delivery hub */
  streetAddress?: string;
  city?: string;
  /** State / region, e.g. "Ogun" */
  region?: string;
  postalCode?: string;
  /** ISO country code, e.g. "NG" */
  country?: string;
  latitude?: number;
  longitude?: number;
}

export const campuses: Campus[] = [
  // Example shape — replace with verified campuses:
  // {
  //   name: 'Venite University',
  //   slug: 'venite-university',
  //   streetAddress: '<campus address>',
  //   city: '<city>',
  //   region: '<state>',
  //   country: 'NG',
  //   latitude: 0,
  //   longitude: 0,
  // },
];

const ORG_ID = 'https://www.mealdirectly.com/#organization';

/** LocalBusiness nodes (one per campus) for the homepage JSON-LD @graph. */
export function buildCampusJsonLd() {
  return campuses.map((c) => {
    const node: Record<string, unknown> = {
      '@type': ['LocalBusiness', 'FoodEstablishment'],
      '@id': `https://www.mealdirectly.com/#campus-${c.slug ?? c.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `Meal Direct — ${c.name}`,
      parentOrganization: { '@id': ORG_ID },
      servesCuisine: 'Campus meals',
      areaServed: { '@type': 'Place', name: c.name },
      priceRange: '₦₦',
    };
    if (c.streetAddress || c.city || c.region || c.country) {
      node.address = {
        '@type': 'PostalAddress',
        ...(c.streetAddress ? { streetAddress: c.streetAddress } : {}),
        ...(c.city ? { addressLocality: c.city } : {}),
        ...(c.region ? { addressRegion: c.region } : {}),
        ...(c.postalCode ? { postalCode: c.postalCode } : {}),
        ...(c.country ? { addressCountry: c.country } : {}),
      };
    }
    if (typeof c.latitude === 'number' && typeof c.longitude === 'number') {
      node.geo = { '@type': 'GeoCoordinates', latitude: c.latitude, longitude: c.longitude };
    }
    return node;
  });
}

/** Campus names for Service.areaServed; falls back to a generic region when empty. */
export function campusAreaServed() {
  if (campuses.length === 0) return 'University campuses in Nigeria';
  return campuses.map((c) => ({ '@type': 'Place', name: c.name }));
}
