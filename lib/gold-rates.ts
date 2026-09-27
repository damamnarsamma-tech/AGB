export interface PurityStandard {
  id: string;
  name: string;
  shortLabel: string;
  metal: 'gold' | 'silver' | 'platinum';
  purityPercent: number; // e.g. 91.6 for 22K
  fineness: string; // e.g. "916"
  description: string;
  typicalUsage: string;
  popular?: boolean;
}

export const PURITY_STANDARDS: Record<string, PurityStandard> = {
  '22k': {
    id: '22k',
    name: '22 Karat (BIS 916 Hallmark)',
    shortLabel: '22K (916)',
    metal: 'gold',
    purityPercent: 91.67,
    fineness: '916',
    description: 'Standard purity for hallmarked gold jewellery and bridal ornaments across India.',
    typicalUsage: 'Bangles, necklaces, chains, rings, traditional jewellery',
    popular: true
  },
  '24k': {
    id: '24k',
    name: '24 Karat Pure Bullion Gold',
    shortLabel: '24K (999)',
    metal: 'gold',
    purityPercent: 99.9,
    fineness: '999',
    description: 'Fine gold purity standard for investment bars, minted coins, and biscuits.',
    typicalUsage: 'Bank gold coins, MMTC-PAMP bars, Swiss mint bars, refinery biscuits'
  },
  '20k': {
    id: '20k',
    name: '20 Karat Gold',
    shortLabel: '20K (833)',
    metal: 'gold',
    purityPercent: 83.33,
    fineness: '833',
    description: 'Traditional karat composition often found in ancestral or vintage Indian jewellery.',
    typicalUsage: 'Ancestral ornaments, vintage jewellery, custom crafted items'
  },
  '18k': {
    id: '18k',
    name: '18 Karat Gold',
    shortLabel: '18K (750)',
    metal: 'gold',
    purityPercent: 75.0,
    fineness: '750',
    description: 'Popular purity for modern diamond, ruby, and precious gemstone studded jewellery.',
    typicalUsage: 'Diamond rings, designer earrings, Italian chains, luxury watches'
  },
  '14k': {
    id: '14k',
    name: '14 Karat Gold',
    shortLabel: '14K (585)',
    metal: 'gold',
    purityPercent: 58.33,
    fineness: '585',
    description: 'Durable gold composition utilized for lightweight contemporary daily-wear jewellery.',
    typicalUsage: 'Modern daily wear jewellery, lightweight pendants and bracelets'
  },
  'silver999': {
    id: 'silver999',
    name: '999 Fine Silver',
    shortLabel: 'Silver 999',
    metal: 'silver',
    purityPercent: 99.9,
    fineness: '999',
    description: 'Highest purity bullion silver for bars, minted medallions, and coins.',
    typicalUsage: 'Fine silver bars, pooja coins, investment silver ingots'
  },
  'silver925': {
    id: 'silver925',
    name: '925 Sterling Silver',
    shortLabel: 'Silver 925',
    metal: 'silver',
    purityPercent: 92.5,
    fineness: '925',
    description: 'International benchmark for silver articles, silverware, and sterling jewellery.',
    typicalUsage: 'Silver pooja vessels, dinner plates, payals (anklets), silverware'
  }
};

export type PurityKey = '24k' | '22k' | '20k' | '18k' | '14k' | 'silver999' | 'silver925';

export function calculateFineMetalContent(grams: number, purityKey: PurityKey | string) {
  const standard = PURITY_STANDARDS[purityKey] || PURITY_STANDARDS['22k'];
  const validGrams = Math.max(0, isNaN(grams) ? 0 : grams);
  const fineGrams = (validGrams * standard.purityPercent) / 100;

  return {
    grossGrams: validGrams,
    fineGrams: parseFloat(fineGrams.toFixed(3)),
    purityPercent: standard.purityPercent,
    fineness: standard.fineness,
    standard
  };
}

export function formatGrams(grams: number): string {
  return `${grams.toFixed(grams % 1 === 0 ? 0 : 2)}g`;
}
