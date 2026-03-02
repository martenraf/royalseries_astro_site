export type LangCode = 'en' | 'nl';

export type MarketCode =
  | 'NL'
  | 'US'
  | 'UK'
  | 'DE'
  | 'FR'
  | 'ES'
  | 'IT'
  | 'CA'
  | 'AU'
  | 'SE'
  | 'PL'
  | 'BE'
  | 'MX'
  | 'BR'
  | 'IN';

export const MARKETS: Record<MarketCode, { label: string; tld: string } > = {
  NL: { label: 'Netherlands', tld: 'amazon.nl' },
  US: { label: 'United States', tld: 'amazon.com' },
  UK: { label: 'United Kingdom', tld: 'amazon.co.uk' },
  DE: { label: 'Germany', tld: 'amazon.de' },
  FR: { label: 'France', tld: 'amazon.fr' },
  ES: { label: 'Spain', tld: 'amazon.es' },
  IT: { label: 'Italy', tld: 'amazon.it' },
  CA: { label: 'Canada', tld: 'amazon.ca' },
  AU: { label: 'Australia', tld: 'amazon.com.au' },
  SE: { label: 'Sweden', tld: 'amazon.se' },
  PL: { label: 'Poland', tld: 'amazon.pl' },
  BE: { label: 'Belgium', tld: 'amazon.com.be' },
  MX: { label: 'Mexico', tld: 'amazon.com.mx' },
  BR: { label: 'Brazil', tld: 'amazon.com.br' },
  IN: { label: 'India', tld: 'amazon.in' },
};

/**
 * Central registry for all Amazon destinations.
 *
 * Rules of the road:
 * - Amazon handles ebook/paperback selection.
 * - We only route to the correct marketplace + ASIN for the chosen language edition.
 * - If a market is missing for an edition, it simply won't be shown.
 */
export const BOOKS = {
  royalLife: {
    label: { en: 'A Royal Life', nl: 'A Royal Life' },
    languages: {
      en: {
        label: 'English',
        // NOTE: Replace ASINs with your definitive values as they become available.
        // If the English ASIN is identical across markets, you may repeat it.
        stores: {
          NL: 'B0GMYH1WDF',
          US: 'B0GMYH1WDF',
          UK: 'B0GMYH1WDF',
          DE: 'B0GMYH1WDF',
          FR: 'B0GMYH1WDF',
          ES: 'B0GMYH1WDF',
          IT: 'B0GMYH1WDF',
          CA: 'B0GMYH1WDF',
          AU: 'B0GMYH1WDF',
          SE: 'B0GMYH1WDF',
          PL: 'B0GMYH1WDF',
          BE: 'B0GMYH1WDF',
          MX: 'B0GMYH1WDF',
          BR: 'B0GMYH1WDF',
          IN: 'B0GMYH1WDF',
        } as Partial<Record<MarketCode, string>>,
      },
      nl: {
        label: 'Nederlands',
        // Placeholder: set to your Dutch ASIN when published.
        stores: {
          NL: 'B0GMYH1WDF',
        } as Partial<Record<MarketCode, string>>,
      },
    },
  },
  // Future book placeholder
  royalChurch: {
    label: { en: 'A Royal Church', nl: 'A Royal Church' },
    languages: {
      en: { label: 'English', stores: {} as Partial<Record<MarketCode, string>> },
      nl: { label: 'Nederlands', stores: {} as Partial<Record<MarketCode, string>> },
    },
  },
} as const;

export type BookKey = keyof typeof BOOKS;

export function amazonUrl(market: MarketCode, asin: string) {
  const { tld } = MARKETS[market];
  return `https://${tld}/dp/${asin}`;
}
