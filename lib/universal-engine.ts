import { BRAND, BranchHub, getBranchByDistrict, getBranchesByState } from './brand';
import { CONTACT_CONFIG, buildWhatsAppLink } from './contact-config';
import { SITE_URL, buildCanonicalUrl } from './site-url';
import { locationHierarchy } from './location-data';
import { formatSlugToName } from './location-service';
import { generateCanonicalRoute, RouteRegistry } from './route-registry';
import { getTestimonialsForLocation, getTestimonialUrls } from './testimonial-utils';
import { generateSeoTitle } from './seo-title-engine';
export { generateCanonicalRoute, RouteRegistry };

// ============================================================
// 1. DATA DICTIONARIES (METALS, JEWELLERY, TRANSACTIONS, SERVICES)
// ============================================================

export interface MaterialDef {
  id: string;
  slug: string;
  name: string;
  category: 'metal' | 'gemstone' | 'bullion';
  purityGrades: string[];
  testingMethod: string;
  description: string;
  features: string[];
}

export const MATERIALS: Record<string, MaterialDef> = {
  gold: {
    id: 'gold',
    slug: 'gold',
    name: 'Gold',
    category: 'metal',
    purityGrades: ['24K (999 Fine Gold)', '22K (916 Hallmark)', '18K (750 Gold)', '14K (585 Gold)', '9K / 8K Gold'],
    testingMethod: 'High-Precision XRF Spectrometric Laser Analysis (Non-Destructive)',
    description: 'We evaluate and purchase all forms of gold including 916 Hallmark jewellery, antique ornaments, gold coins, minted bars, broken chains, and scrap gold based on live spot market rates.',
    features: ['Non-Destructive Spectrometric Testing', 'Live Spot Benchmark Valuation', 'Calibrated Digital Gram Precision', 'Direct Bank Transfer / Cash Settlement']
  },
  silver: {
    id: 'silver',
    slug: 'silver',
    name: 'Silver',
    category: 'metal',
    purityGrades: ['999 Fine Silver', '925 Sterling Silver', '800 Silver Articles', 'Silver Coins & Bars'],
    testingMethod: 'XRF Spectrometric Purity Analysis & Hydrostatic Density Verification',
    description: 'Sell fine silver bullion, 925 sterling jewellery, antique silver dinner sets, pooja utensils, and silver coins with transparent gross-to-net weight breakdown.',
    features: ['Spot Market Silver Valuation', 'Transparent Net Fine Weight Breakdown', 'Micro-Scale Measurement', 'Direct IMPS Payment']
  },
  platinum: {
    id: 'platinum',
    slug: 'platinum',
    name: 'Platinum',
    category: 'metal',
    purityGrades: ['Pt950 (95% Pure Platinum)', 'Pt900', 'Platinum Rings & Chains'],
    testingMethod: 'Non-Destructive XRF Spectrometry & Specific Gravity Testing',
    description: 'Get verified market pricing for pure Pt950 platinum love bands, rings, chains, and bars with calibrated precious metals spectrometry.',
    features: ['Accurate Platinum Specific Gravity Verification', 'Full Value Payout on Pt950 & Pt900', 'Instant Transfer']
  },
  diamond: {
    id: 'diamond',
    slug: 'diamond',
    name: 'Diamond & Gemstone Jewellery',
    category: 'gemstone',
    purityGrades: ['VVS / VS / SI Clarity', 'D to J Color Grades', 'GIA / IGI / SGL Certified & Non-Certified'],
    testingMethod: 'Electronic Diamond Testers, 10x Gemological Loupe & 4Cs Assessment',
    description: 'We evaluate gold ornaments studded with real diamonds, rubies, emeralds, and sapphires, providing separate valuation for both the precious gold mount and the gemstones.',
    features: ['Separate Gold & Gemstone Valuation', 'Certified Gemological Verification', 'Itemized Appraisal Statement']
  }
};

export interface JewelleryDef {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
}

export const JEWELLERY_TYPES: Record<string, JewelleryDef> = {
  jewellery: {
    id: 'jewellery',
    slug: 'jewellery',
    name: 'All Gold & Silver Jewellery',
    category: 'General Ornaments',
    description: 'Traditional, bridal, daily-wear, and antique jewellery in all karats.'
  },
  chains: {
    id: 'chains',
    slug: 'chains',
    name: 'Gold Chains & Ropes',
    category: 'Neckwear',
    description: 'Hollow, solid, machine-made, and handcrafted gold chains.'
  },
  necklaces: {
    id: 'necklaces',
    slug: 'necklaces',
    name: 'Necklaces, Harams & Chokers',
    category: 'Neckwear',
    description: 'Bridal neckpieces, temple jewellery harams, chokers, and designer sets.'
  },
  bangles: {
    id: 'bangles',
    slug: 'bangles',
    name: 'Bangles & Kadas',
    category: 'Wristwear',
    description: 'Daily wear bangles, antique kadas, casting bangles, and bridal sets.'
  },
  rings: {
    id: 'rings',
    slug: 'rings',
    name: 'Rings & Bands',
    category: 'Fingerwear',
    description: 'Plain gold bands, signet rings, diamond-studded rings, and engagement bands.'
  },
  earrings: {
    id: 'earrings',
    slug: 'earrings',
    name: 'Earrings, Jhumkas & Studs',
    category: 'Earwear',
    description: 'Gold jhumkas, drops, chandbalis, tops, and diamond ear studs.'
  },
  bracelets: {
    id: 'bracelets',
    slug: 'bracelets',
    name: 'Bracelets & Kada Bracelets',
    category: 'Wristwear',
    description: 'Men’s and women’s gold, platinum, and two-tone bracelets.'
  },
  pendants: {
    id: 'pendants',
    slug: 'pendants',
    name: 'Pendants & Lockets',
    category: 'Pendants',
    description: 'Religious lockets, gemstone pendants, and solitaire diamond pendants.'
  },
  mangalsutra: {
    id: 'mangalsutra',
    slug: 'mangalsutra',
    name: 'Mangalsutra & Nallapusalu',
    category: 'Traditional',
    description: 'Gold mangalsutras, black beads chains, and thali ornaments with stones removed.'
  },
  coins: {
    id: 'coins',
    slug: 'coins',
    name: 'Gold & Silver Coins',
    category: 'Bullion',
    description: '24K 999 coins, Lakshmi coins, King coins, and bank minted gold coins.'
  },
  bars: {
    id: 'bars',
    slug: 'bars',
    name: 'Minted Bullion Bars',
    category: 'Bullion',
    description: 'Certified gold biscuits, Swiss bars, MMTC-PAMP, and refinery bars.'
  },
  scrap: {
    id: 'scrap',
    slug: 'scrap',
    name: 'Broken, Damaged & Scrap Jewellery',
    category: 'Scrap/Old',
    description: 'Bent rings, broken clasps, melted bits, single earrings, and old scrap gold.'
  },
  antique: {
    id: 'antique',
    slug: 'antique',
    name: 'Antique & Vintage Jewellery',
    category: 'Heritage',
    description: 'Ancestral heirlooms, traditional South Indian temple jewellery, and vintage ornaments.'
  }
};

export interface TransactionTypeDef {
  id: string;
  slug: string;
  name: string;
  actionType: string;
  description: string;
}

export const TRANSACTION_TYPES: Record<string, TransactionTypeDef> = {
  sell: {
    id: 'sell',
    slug: 'sell',
    name: 'Instant Spot Sale',
    actionType: 'Sell / Liquidate',
    description: 'Sell unused, old, or broken gold, silver, and platinum jewellery for immediate bank transfer or cash.'
  },
  valuation: {
    id: 'valuation',
    slug: 'valuation',
    name: 'Purity Assay & Valuation',
    actionType: 'Valuation & Testing',
    description: 'Non-destructive XRF laser purity analysis and accurate weight valuation in customer presence.'
  },
  exchange: {
    id: 'exchange',
    slug: 'exchange',
    name: 'Precious Metals Value Conversion',
    actionType: 'Exchange / Conversion',
    description: 'Convert old or broken jewellery value directly into liquidity or bullion benchmarks.'
  },
  takeover: {
    id: 'takeover',
    slug: 'takeover',
    name: 'Pledged Gold Loan Takeover',
    actionType: 'Loan Takeover',
    description: 'Direct payoff of bank or NBFC gold loans with retrieval and disbursement of remaining cash surplus.'
  },
  transfer: {
    id: 'transfer',
    slug: 'transfer',
    name: 'Gold Loan Transfer & Refinance',
    actionType: 'Loan Transfer',
    description: 'Avoid auction loss by transferring high-interest pledged loans with complete settlement.'
  },
  release: {
    id: 'release',
    slug: 'release',
    name: 'Pledged Gold Release Assistance',
    actionType: 'Release & Foreclosure',
    description: 'End-to-end settlement support to release pledged ornaments from banks, Muthoot, Manappuram, and pawnbrokers.'
  },
  scrap: {
    id: 'scrap',
    slug: 'scrap',
    name: 'Scrap & Damaged Gold Sale',
    actionType: 'Scrap Liquidation',
    description: 'Liquidate broken chains, single earrings, and dental scrap based on pure metal content without penalty.'
  }
};

export interface ServiceDef {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  categoryGroup: 'Gold Buying' | 'Precious Metals' | 'Gold Loan Solutions' | 'Valuation & Testing';
  tagline: string;
  intent: 'sell' | 'valuation' | 'exchange' | 'takeover' | 'transfer' | 'pledged';
  applicableMetals: string[];
  description: string;
  whoItIsFor: string;
  whatIsHandled: string[];
  processSteps: string[];
  faqs: { q: string; a: string }[];
}

export const UNIVERSAL_SERVICES: Record<string, ServiceDef> = {
  'gold-buyers': {
    id: 'gold-buyers',
    slug: 'gold-buyers',
    name: 'Gold Buyers & Spot Valuation',
    shortTitle: 'Gold Buyers',
    categoryGroup: 'Gold Buying',
    tagline: 'Sell physical gold at live bullion rates with non-destructive XRF testing and instant settlement.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'Akshaya Gold Buyers provides transparent, laboratory-grade evaluation for all types of gold jewellery, coins, and scrap with computerized weighing and direct bank/cash settlement.',
    whoItIsFor: 'Individuals looking to liquidate gold jewellery, coins, or scrap for immediate financial needs or to capture prevailing gold market prices.',
    whatIsHandled: ['22K 916 Hallmark Ornaments', 'Old & Broken Gold Chains', '24K Bullion Coins & Minted Bars', '18K & 14K Diamond Studded Jewellery'],
    processSteps: [
      'Present your gold items along with valid government photo ID for KYC verification.',
      'Surface cleaning to remove dust and wax without damaging or scratching the metal.',
      'Non-destructive XRF spectrometric analysis to determine exact karat purity.',
      'Gross weight and net weight measurement on calibrated digital scales in your presence.',
      'Direct settlement via IMPS, RTGS, UPI, or cash as per statutory guidelines.'
    ],
    faqs: [
      {
        q: 'How do you determine the gold price when selling?',
        a: 'We calculate the price based on the live bullion spot rate multiplied by the tested fine gold content (karat purity) and net weight, with transparent itemized valuation.'
      },
      {
        q: 'What documents are required to sell gold?',
        a: 'A valid government-issued ID (Aadhaar Card, PAN Card, Voter ID, or Passport) and local address verification are required to ensure compliance with KYC standards.'
      }
    ]
  },
  'sell-gold': {
    id: 'sell-gold',
    slug: 'sell-gold',
    name: 'Sell Gold for Instant Settlement',
    shortTitle: 'Sell Gold',
    categoryGroup: 'Gold Buying',
    tagline: 'Immediate liquidity for your unused, old, or broken gold jewellery.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'Unlock fair value from your gold assets with non-destructive assay testing, live benchmark pricing, and rapid direct bank transfer within minutes.',
    whoItIsFor: 'Anyone with idle gold jewellery, gold coins, or scrap seeking market-linked value with complete transparency.',
    whatIsHandled: ['Daily Wear Gold Ornaments', 'Bridal Jewellery Sets', 'Antique & Heritage Gold', 'Single Earrings & Broken Links'],
    processSteps: [
      'Bring your gold ornaments to our branch or request doorstep evaluation.',
      'Observe real-time spectrometric purity analysis on the external display.',
      'Review and approve the itemized valuation statement showing weight, purity %, and live payout.',
      'Receive funds credited directly to your bank account.'
    ],
    faqs: [
      {
        q: 'Can I sell gold without an original purchase invoice/bill?',
        a: 'Yes, you can sell gold without the original bill by completing standard KYC verification with valid government ID and ownership declaration.'
      }
    ]
  },
  'gold-valuation': {
    id: 'gold-valuation',
    slug: 'gold-valuation',
    name: 'Gold Valuation & Purity Testing',
    shortTitle: 'Gold Valuation',
    categoryGroup: 'Valuation & Testing',
    tagline: 'Non-destructive assay testing and accurate spot market valuation.',
    intent: 'valuation',
    applicableMetals: ['gold', 'silver', 'platinum'],
    description: 'Get an accurate, unvarnished valuation report of your gold and precious metals using XRF spectrometry without melting, acid testing, or stone removal.',
    whoItIsFor: 'Customers seeking to know the exact karat purity, gross weight, net fine metal weight, and market value of their ornaments without obligation to sell.',
    whatIsHandled: ['Karat Purity Verification (9K to 24K)', 'Hydrostatic Density Checking', 'Stone Weight Segregation', 'Insurance & Wealth Audits'],
    processSteps: [
      'Digital micro-scale weighing accurate to 0.001 grams.',
      'Laser spectroscopy scan generating elemental breakdown (Au, Ag, Cu, Zn).',
      'Detailed purity report generated with current spot rate calculation.',
      'Zero obligation — take your jewellery back or proceed with immediate liquidation.'
    ],
    faqs: [
      {
        q: 'Does XRF laser testing damage my jewellery?',
        a: 'No. XRF spectrometry is 100% non-destructive. It emits gentle X-ray fluorescence to analyze the elemental composition without melting, scraping, or chemical acids.'
      }
    ]
  },
  'gold-exchange': {
    id: 'gold-exchange',
    slug: 'gold-exchange',
    name: 'Gold Exchange & Value Conversion',
    shortTitle: 'Gold Exchange',
    categoryGroup: 'Gold Buying',
    tagline: 'Convert old jewellery directly into liquid funds or pure 24K bullion without showroom cuts.',
    intent: 'exchange',
    applicableMetals: ['gold', 'silver'],
    description: 'Avoid heavy retail showroom deductions by exchanging your gold for fair spot bullion value or liquid bank funds.',
    whoItIsFor: 'Customers wanting to upgrade old jewellery without losing value to showroom wastage penalties.',
    whatIsHandled: ['Old 22K/18K Jewellery', 'Hallmark Ornaments', 'Coins & Bullion'],
    processSteps: [
      'Present your old gold for non-destructive XRF purity appraisal.',
      'Receive an itemized valuation of fine gold weight.',
      'Choose instant IMPS bank payout or certified 999 24K bullion.',
      'Formal settlement voucher provided.'
    ],
    faqs: [
      {
        q: 'How does exchange at Akshaya Gold Buyers differ from retail showrooms?',
        a: 'Showrooms often deduct significant percentages for melting loss and charge making charges on new ornaments. Akshaya Gold Buyers gives you full spot value for tested fine weight and provides liquid funds directly.'
      }
    ]
  },
  'silver-buyers': {
    id: 'silver-buyers',
    slug: 'silver-buyers',
    name: 'Silver Buyers & Silver Valuation',
    shortTitle: 'Silver Buyers',
    categoryGroup: 'Precious Metals',
    tagline: 'Sell 999 fine silver, 925 sterling jewellery, pooja utensils, and silver coins.',
    intent: 'sell',
    applicableMetals: ['silver'],
    description: 'We purchase all varieties of silver including sterling silver jewellery, ancestral pooja articles, silver dinnerware, silver bars, and coins at live market silver prices.',
    whoItIsFor: 'Households and collectors seeking fair spot valuation for heavy silver utensils, silverware, or unused sterling jewellery.',
    whatIsHandled: ['999 Fine Silver Bars & Coins', '925 Sterling Silver Ornaments', 'Silver Pooja Articles & Lamps (Deepams)', 'Antique Silver Utensils & Leg Chains (Pattilu)'],
    processSteps: [
      'Separation of silver articles by purity category (999, 925, 800).',
      'Spectrometric and density verification to identify base metals or lac filling.',
      'Net silver weight calculation with zero arbitrary weight deductions.',
      'Instant payout via direct bank transfer or cash.'
    ],
    faqs: [
      {
        q: 'What types of silver do you buy?',
        a: 'We buy all silver items: 999 bullion coins/bars, 925 sterling jewellery, silver vessels, deepams, vigrahams, plates, and anklets (pattilu).'
      }
    ]
  },
  'platinum-buyers': {
    id: 'platinum-buyers',
    slug: 'platinum-buyers',
    name: 'Platinum Buyers & Valuation',
    shortTitle: 'Platinum Buyers',
    categoryGroup: 'Precious Metals',
    tagline: 'Sell Pt950 platinum love bands, rings, and chains at live industrial bullion rates.',
    intent: 'sell',
    applicableMetals: ['platinum'],
    description: 'Get verified market pricing for genuine Pt950 platinum ornaments and bullion bars with calibrated spectrometry.',
    whoItIsFor: 'Owners of platinum jewellery seeking transparent pricing often unavailable at conventional gold shops.',
    whatIsHandled: ['Pt950 Platinum Love Bands', 'Platinum Solitaire Rings', 'Platinum Chains & Bracelets'],
    processSteps: [
      'Specific gravity and XRF laser testing to determine Pt content.',
      'Spot pricing applied to net platinum weight.',
      'Instant funds credited directly to your bank account.'
    ],
    faqs: [
      {
        q: 'How do you test platinum purity?',
        a: 'We use high-precision XRF spectrometers calibrated for platinum group metals (Pt, Ir, Ru) to verify exact alloy composition without damaging the hallmark.'
      }
    ]
  },
  'diamond-buyers': {
    id: 'diamond-buyers',
    slug: 'diamond-buyers',
    name: 'Diamond & Gemstone Jewellery Appraisal',
    shortTitle: 'Diamond Buyers',
    categoryGroup: 'Precious Metals',
    tagline: 'Sell diamond-studded gold jewellery with fair appraisal for both gold and diamonds.',
    intent: 'sell',
    applicableMetals: ['diamond', 'gold'],
    description: 'Traditional jewellers often discount or ignore stone value when buying back diamond jewellery. Akshaya Gold Buyers accurately assesses both the precious gold karat and the 4Cs of your diamonds.',
    whoItIsFor: 'Individuals looking to sell diamond rings, necklaces, bangles, or earrings for maximum combined market return.',
    whatIsHandled: ['Diamond Solitaires & Engagement Rings', 'Diamond Necklaces & Bangles', 'Certified (GIA/IGI) & Non-Certified Diamonds'],
    processSteps: [
      'Gemological assessment of Cut, Color, Clarity, and Carat weight.',
      'XRF analysis of the gold framework.',
      'Combined valuation statement prepared.',
      'Immediate transparent settlement.'
    ],
    faqs: [
      {
        q: 'Do you pay for the diamonds studded in gold jewellery?',
        a: 'Yes, our gemological evaluators assess diamond clarity, cut, and weight to ensure you receive payment for both the precious stones and the gold mount.'
      }
    ]
  },
  'pledged-gold-buyers': {
    id: 'pledged-gold-buyers',
    slug: 'pledged-gold-buyers',
    name: 'Pledged Gold Buyers & Loan Settlement',
    shortTitle: 'Pledged Gold Buyers',
    categoryGroup: 'Gold Loan Solutions',
    tagline: 'We assist in clearing outstanding loan dues and paying you the remaining surplus equity.',
    intent: 'pledged',
    applicableMetals: ['gold'],
    description: 'Akshaya Gold Buyers provides direct financial assistance to release pledged gold ornaments locked in commercial banks, private financiers, and NBFCs, settling your loan dues and paying you the remaining cash surplus.',
    whoItIsFor: 'Borrowers struggling with compounding interest, loan foreclosure notices, or those wishing to liquidate pledged gold without upfront cash.',
    whatIsHandled: ['Bank Gold Loans (Nationalized & Private)', 'NBFC Loans (Muthoot, Manappuram, IIFL, etc.)', 'Pawnshop & Private Financier Pledges'],
    processSteps: [
      'Submit your pledge receipt / statement showing loan dues.',
      'We verify the net gold weight and compute current market surplus equity.',
      'Our representative accompanies you to the lender and pays the total foreclosure balance.',
      'Gold is retrieved safely, tested, and the balance equity is paid to you immediately.'
    ],
    faqs: [
      {
        q: 'Do I need upfront money to release my pledged gold?',
        a: 'No. Akshaya Gold Buyers settles the outstanding principal and accrued interest directly to the bank or NBFC on your behalf.'
      }
    ]
  },
  'pledged-gold-takeover': {
    id: 'pledged-gold-takeover',
    slug: 'pledged-gold-takeover',
    name: 'Pledged Gold Takeover Assistance',
    shortTitle: 'Pledged Gold Takeover',
    categoryGroup: 'Gold Loan Solutions',
    tagline: 'Stop compounding interest cycles with complete loan takeover and immediate cash difference.',
    intent: 'takeover',
    applicableMetals: ['gold'],
    description: 'High-interest gold loans from private money lenders or NBFCs can trap borrowers in endless interest cycles. Our Pledged Gold Takeover service clears the debt, releases the jewellery, and returns the net surplus value to you.',
    whoItIsFor: 'Individuals facing auction notices or high interest rates wanting structured debt closure.',
    whatIsHandled: ['Private Financier Pledges', 'Overdue NBFC Loans', 'Auction-Notice Gold Ornaments'],
    processSteps: [
      'Review pledge receipt and calculate total dues vs market value.',
      'Akshaya Gold Buyers executive accompanies you to the lending branch.',
      'Loan cleared with direct bank payment.',
      'Immediate payment of the equity surplus.'
    ],
    faqs: [
      {
        q: 'What is a pledged gold takeover?',
        a: 'Pledged gold takeover is where Akshaya Gold Buyers settles your pending loan dues directly at your bank or NBFC, takes custody of the released gold on your behalf, and pays you the remaining net profit value immediately.'
      }
    ]
  },
  'pledged-gold-transfer': {
    id: 'pledged-gold-transfer',
    slug: 'pledged-gold-transfer',
    name: 'Pledged Gold Transfer & Refinance Assistance',
    shortTitle: 'Pledged Gold Transfer',
    categoryGroup: 'Gold Loan Solutions',
    tagline: 'Transfer or refinance gold loans seamlessly with zero upfront cost and spot clearance.',
    intent: 'transfer',
    applicableMetals: ['gold'],
    description: 'Whether you want to transfer your gold loan between lenders for lower interest rates or partially liquidate ornaments to close loan accounts, we provide complete facilitation.',
    whoItIsFor: 'Borrowers seeking to lower their interest burden or liquidate partial gold to clear debt.',
    whatIsHandled: ['Commercial Bank Gold Loans', 'Cooperative Society Pledges', 'NBFC Gold Loan Accounts'],
    processSteps: [
      'Provide current loan statement and settlement balance.',
      'Explore options for partial liquidation or full takeover.',
      'Loan settlement executed directly at the branch.',
      'Immediate handover of surplus funds.'
    ],
    faqs: [
      {
        q: 'Can I release gold and sell only a portion of it to clear the loan?',
        a: 'Yes. We can settle the loan, purchase only the amount of gold necessary to cover the dues, and return the remaining ornaments safely to you.'
      }
    ]
  },
  'loan-transfer': {
    id: 'loan-transfer',
    slug: 'loan-transfer',
    name: 'Gold Loan Foreclosure & Transfer Assistance',
    shortTitle: 'Loan Transfer',
    categoryGroup: 'Gold Loan Solutions',
    tagline: 'Structured gold loan foreclosure and transfer assistance across AP & Telangana.',
    intent: 'transfer',
    applicableMetals: ['gold'],
    description: 'Complete gold loan foreclosure and transfer assistance. We eliminate paperwork delays and settle bank dues on the spot with verified documentation.',
    whoItIsFor: 'Customers wanting a professional partner to handle gold loan redemption and transfer without stress or financial shortfall.',
    whatIsHandled: ['Nationalized Bank Loans', 'Private Bank Gold Loans', 'NBFC Foreclosures'],
    processSteps: [
      'Share pledge receipt details with our desk.',
      'Receive exact equity calculation.',
      'Visit lending institution alongside Akshaya Gold Buyers representative.',
      'Account closed and surplus funds credited.'
    ],
    faqs: [
      {
        q: 'What is gold loan transfer assistance?',
        a: 'It is a structured financial service where Akshaya Gold Buyers assists in settling existing gold loan debts at your current institution and liquidating or transferring the underlying gold equity safely.'
      }
    ]
  },
  'scrap-gold': {
    id: 'scrap-gold',
    slug: 'scrap-gold',
    name: 'Broken & Scrap Gold Buyers',
    shortTitle: 'Scrap Gold',
    categoryGroup: 'Gold Buying',
    tagline: 'Convert broken chains, bent rings, and damaged ornaments into instant cash.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'We buy broken, tangled, dented, or scrap gold at the exact same bullion purity rate as brand new jewellery, without penalty for damage or wear.',
    whoItIsFor: 'Anyone holding unwearable or damaged gold jewellery pieces.',
    whatIsHandled: ['Snapped Chains & Broken Clasps', 'Melted Gold Bits & Dental Gold', 'Single Earrings & Broken Bangles'],
    processSteps: [
      'Clean scrap gold to remove debris.',
      'Spectrometry laser scan for karat purity.',
      'Weight verification on micro-scales.',
      'Instant settlement.'
    ],
    faqs: [
      {
        q: 'Do you deduct money if gold jewellery is broken or damaged?',
        a: 'No. We value gold purely by its tested fine gold weight and karat purity. Breakage or cosmetic damage does not reduce the spot bullion valuation.'
      }
    ]
  },
  'gold-coins': {
    id: 'gold-coins',
    slug: 'gold-coins',
    name: 'Gold Coins & Minted Bullion Bars',
    shortTitle: 'Gold Coins & Bars',
    categoryGroup: 'Gold Buying',
    tagline: 'Spot cash for 24K & 22K gold coins, MMTC-PAMP, Swiss bars, and bank coins.',
    intent: 'sell',
    applicableMetals: ['gold', 'silver'],
    description: 'Get immediate 100% fine gold value for your investment coins and bars. We buy all brands including MMTC, BRPL, Tanishq, Joyalukkas, and international Swiss mints.',
    whoItIsFor: 'Investors and individuals liquidating physical bullion coins and minted bars for immediate liquidity.',
    whatIsHandled: ['24K 999 & 999.9 Gold Bars & Coins', '22K 916 Commemorative Coins', 'Bank Minted Gold Coins in Tamper-Proof Packs'],
    processSteps: [
      'Verification of assay certificate and laser scan.',
      'Spot rate calculation based on net fine grams.',
      'Instant bank settlement.'
    ],
    faqs: [
      {
        q: 'Can banks buy back the gold coins they sell?',
        a: 'No, RBI guidelines prohibit commercial banks from buying back gold coins. Akshaya Gold Buyers purchases bank coins at live spot market prices with immediate settlement.'
      }
    ]
  },
  'gold-jewellery-buyers': {
    id: 'gold-jewellery-buyers',
    slug: 'gold-jewellery-buyers',
    name: 'Gold Jewellery Buyers',
    shortTitle: 'Gold Jewellery Buyers',
    categoryGroup: 'Gold Buying',
    tagline: 'Sell physical gold jewellery at live spot prices with transparent testing.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'Akshaya Gold Buyers provides premium gold jewellery buying services. We purchase gold ornaments, wedding sets, necklaces, bangles, and rings at live market rates.',
    whoItIsFor: 'Individuals looking to sell physical gold jewellery or ornaments for maximum value.',
    whatIsHandled: ['22K 916 Hallmark Ornaments', 'Old & Antique Jewellery', 'Bangles, Necklaces & Chains', '18K & 14K Ornaments'],
    processSteps: [
      'Present your gold jewellery along with valid ID.',
      'Surface cleaning and non-destructive XRF purity analysis.',
      'Gross and net weight measurements on calibrated digital scales.',
      'Instant settlement via direct bank transfer or cash.'
    ],
    faqs: [
      {
        q: 'Can I sell gold jewellery without original bills?',
        a: 'Yes, with valid government ID and standard KYC verification, you can securely sell your gold jewellery.'
      }
    ]
  },
  'old-gold-buyers': {
    id: 'old-gold-buyers',
    slug: 'old-gold-buyers',
    name: 'Old & Used Gold Buyers',
    shortTitle: 'Old Gold Buying',
    categoryGroup: 'Gold Buying',
    tagline: 'Turn unused, antique, or dated gold ornaments into liquid funds instantly.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'We buy old, ancestral, and non-hallmarked gold ornaments with accurate spectrometry testing and transparent spot pricing.',
    whoItIsFor: 'Anyone seeking to sell older or ancestral gold jewelry at fair value.',
    whatIsHandled: ['Old 22K Ornaments', 'Ancestral Gold', 'Non-hallmarked Gold', 'Traditional Coins'],
    processSteps: [
      'Verification of old or ancestral gold ornaments.',
      'Non-destructive purity scanning using XRF laser.',
      'Calibrated digital scale weighing.',
      'Direct payout.'
    ],
    faqs: [
      {
        q: 'How do you verify the purity of old non-hallmark gold?',
        a: 'We use non-destructive XRF Spectrometry to measure elemental composition without melting.'
      }
    ]
  },
  'broken-scrap-gold': {
    id: 'broken-scrap-gold',
    slug: 'broken-scrap-gold',
    name: 'Broken & Scrap Gold Buyers',
    shortTitle: 'Scrap Gold',
    categoryGroup: 'Gold Buying',
    tagline: 'Convert broken chains, bent rings, and damaged ornaments into instant cash.',
    intent: 'sell',
    applicableMetals: ['gold'],
    description: 'We purchase broken, damaged, deformed, or scrap gold jewellery at live market prices with zero penalties for damage.',
    whoItIsFor: 'Anyone looking to liquidate broken, mismatched, or scrap gold pieces.',
    whatIsHandled: ['Snapped Chains & Broken Clasps', 'Single Earrings & Broken Bangles', 'Deformed Gold Rings'],
    processSteps: [
      'Sorting of scrap gold and estimation.',
      'Laser spectroscopy scan to determine karat purity.',
      'Precision weighing with zero melting loss.',
      'Instant settlement.'
    ],
    faqs: [
      {
        q: 'Do you deduct money if gold is broken or damaged?',
        a: 'No. We value gold strictly by its fine weight and purity, never by its physical shape or design condition.'
      }
    ]
  },
  'gold-coins-bars': {
    id: 'gold-coins-bars',
    slug: 'gold-coins-bars',
    name: 'Gold Coin & Bar Buyers',
    shortTitle: 'Coins & Bars',
    categoryGroup: 'Gold Buying',
    tagline: 'Spot cash for 24K and 22K gold coins, bank coins, and minted bullion bars.',
    intent: 'sell',
    applicableMetals: ['gold', 'silver'],
    description: 'Get immediate top market value for investment gold coins, sovereign coins, refinery bars, and Swiss biscuits.',
    whoItIsFor: 'Bullion investors or individuals looking for instant liquidity for gold coins or bars.',
    whatIsHandled: ['24K 999 & 999.9 Gold Bars', '22K Sovereign Gold Coins', 'Bank Minted Gold Coins in Tamper-Proof Packs'],
    processSteps: [
      'Assay card verification and scanning.',
      'Weight verification on micro-scales.',
      'Immediate spot pricing and direct bank settlement.'
    ],
    faqs: [
      {
        q: 'Can banks buy back gold coins?',
        a: 'No, banks are legally prohibited from buying back gold. Akshaya Gold Buyers purchases bank coins at live spot rates.'
      }
    ]
  },
  'pledged-gold-release': {
    id: 'pledged-gold-release',
    slug: 'pledged-gold-release',
    name: 'Pledged Gold & Gold Loan Closure',
    shortTitle: 'Pledged Gold Release',
    categoryGroup: 'Gold Loan Solutions',
    tagline: 'We clear your outstanding loans, retrieve your pledged jewellery, and pay you the balance.',
    intent: 'pledged',
    applicableMetals: ['gold'],
    description: 'Professional financial assistance to release pledged gold from Muthoot, Manappuram, IIFL, or nationalized banks.',
    whoItIsFor: 'Borrowers wishing to close high-interest gold loan accounts and liquidate surplus equity.',
    whatIsHandled: ['NBFC Gold Loans (Muthoot, Manappuram, IIFL)', 'Private Pawned Gold', 'Bank Gold Loans'],
    processSteps: [
      'Provide loan pledge receipt / statement of account.',
      'Calculate current gold value vs loan dues to estimate surplus.',
      'We clear dues at the lender branch and retrieve your jewellery.',
      'Test purity and weight to settle the remaining surplus balance immediately.'
    ],
    faqs: [
      {
        q: 'Do I need upfront cash to release my pledged gold?',
        a: 'No. Akshaya Gold Buyers pays the total outstanding dues on your behalf directly to the lending institution.'
      }
    ]
  },
  'gold-valuation-appraisal': {
    id: 'gold-valuation-appraisal',
    slug: 'gold-valuation-appraisal',
    name: 'Free Gold Valuation & Testing',
    shortTitle: 'Gold Valuation',
    categoryGroup: 'Valuation & Testing',
    tagline: 'Get a free, scientific, non-destructive valuation of your gold and jewellery.',
    intent: 'valuation',
    applicableMetals: ['gold', 'silver', 'platinum'],
    description: 'Know the true worth of your gold assets. We provide free XRF spectrometry purity testing and certified scale weighing with zero obligation.',
    whoItIsFor: 'Individuals seeking accurate karat and weight evaluations before selling or for asset audits.',
    whatIsHandled: ['All Karat Gold (9K–24K)', 'Silver Ornaments & Articles', 'Gold Coins & Bullion'],
    processSteps: [
      'German XRF laser scan to determine precise metal composition.',
      'Weight recorded on digital balance displays in your presence.',
      'Complete rate appraisal sheet generated.'
    ],
    faqs: [
      {
        q: 'Is there a fee for gold valuation?',
        a: 'No, our gold testing and rate estimation services are 100% free with no obligation.'
      }
    ]
  },
  'platinum-diamond': {
    id: 'platinum-diamond',
    slug: 'platinum-diamond',
    name: 'Platinum & Diamond Jewellery Valuation',
    shortTitle: 'Platinum & Diamond',
    categoryGroup: 'Precious Metals',
    tagline: 'Expert combined appraisal of Pt950 platinum and diamond-studded gold jewellery.',
    intent: 'sell',
    applicableMetals: ['platinum', 'diamond', 'gold'],
    description: 'Conventional buyers typically discount gemstone value. Akshaya Gold Buyers provides combined valuations for both the premium metal structure and diamond 4Cs.',
    whoItIsFor: 'Owners of premium platinum wedding bands or diamond necklaces seeking fair combined payouts.',
    whatIsHandled: ['Pt950 Platinum Rings & Chains', 'Solitaire Engagement Rings', 'Diamond Studded Gold Jewellery'],
    processSteps: [
      'XRF laser purity check for platinum/gold framework.',
      'Magnified gemological inspection of diamond Cut, Color, Clarity, Carat.',
      'Combined payout estimate and instant RTGS/bank transfer.'
    ],
    faqs: [
      {
        q: 'Do you pay for diamonds embedded in gold jewelry?',
        a: 'Yes, we value both the precious metal base and the diamonds based on gemological standards.'
      }
    ]
  }
};

// ============================================================
// 2. UNIVERSAL PAGE CONTEXT & TYPES
// ============================================================

export interface UniversalLocationSummary {
  stateSlug: 'andhra-pradesh' | 'telangana';
  stateName: string;
  districtSlug?: string;
  districtName?: string;
  mandalSlug?: string;
  mandalName?: string;
  localitySlug?: string;
  localityName?: string;
  displayName: string;
  fullPath: string;
  url: string;
  level: 'state' | 'district' | 'mandal' | 'locality';
  locationType?: 'state' | 'district' | 'city' | 'town' | 'mandal' | 'locality' | 'neighbourhood' | 'village';
  isVillage?: boolean;
  isNeighbourhood?: boolean;
  isUrbanCenter?: boolean;
  childDistricts?: { name: string; slug: string; url: string }[];
  childCities?: { name: string; slug: string; url: string; count?: number }[];
  childMandals?: { name: string; slug: string; url: string; count?: number }[];
  childVillages?: { name: string; slug: string; url: string }[];
  childNeighbourhoods?: { name: string; slug: string; url: string }[];
  childLocalities?: { name: string; slug: string; url: string }[];
  parentCity?: { name: string; url: string };
  parentMandal?: { name: string; url: string };
  parentDistrict?: { name: string; url: string };
  parentState?: { name: string; url: string };
  physicalBranchHub?: BranchHub;
  nearestBranchHub?: BranchHub;
}

export type PageArchetype =
  | 'home'
  | 'location-hub'
  | 'service-hub'
  | 'service-detail'
  | 'service-location'
  | 'material-detail'
  | 'material-location'
  | 'jewellery-detail'
  | 'info-page';

export type IndexabilityStatus = 'INDEX' | 'NOINDEX' | 'CONSOLIDATE' | 'IMPROVE';

export interface IntegrityCheckResult {
  passed: boolean;
  isDiagnostic404: boolean;
  code: 'OK' | 'SERVICE_NOT_FOUND' | 'LOCATION_NOT_FOUND' | 'MATERIAL_NOT_FOUND' | 'JEWELLERY_NOT_FOUND' | 'COMBO_INVALID' | 'ROUTE_UNKNOWN';
  reason?: string;
  requestedServiceSlug?: string;
  requestedLocationSlug?: string;
  requestedMaterialSlug?: string;
  requestedJewellerySlug?: string;
  details?: string;
}

export interface UniversalPageContext {
  // 1. Flexible Primary Context
  primaryIntent: 'sell' | 'valuation' | 'exchange' | 'takeover' | 'transfer' | 'pledged' | 'scrap' | 'enquiry' | 'information';
  pageArchetype: PageArchetype;
  indexability: IndexabilityStatus;
  integrityCheck: IntegrityCheckResult;
  business: {
    name: string;
    legalName: string;
    tagline: string;
    phone1: string;
    phone2: string;
    phone1Display: string;
    phone2Display: string;
    whatsapp1: string;
    whatsapp2: string;
    email: string;
    website: string;
  };

  // 2. Optional Dimension Entities
  location?: UniversalLocationSummary;
  locationSlug?: string;
  state?: string;
  stateSlug?: string;
  district?: string;
  districtSlug?: string;
  serviceArea?: string[];
  service?: ServiceDef;
  serviceSlug?: string;
  serviceCategory?: string;
  material?: MaterialDef;
  metal?: string;
  item?: JewelleryDef;
  jewellery?: JewelleryDef;
  jewelleryType?: JewelleryDef;
  transaction?: string;
  process?: string;
  serviceAspect?: string;
  customerType?: string;
  questionTopic?: string;
  pageType?: PageArchetype;

  // 3. Navigation & Semantic Graph
  pathname: string;
  canonicalUrl: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  directAnswer: {
    question: string;
    directAnswer: string;
    explanation: string;
    ctaText: string;
  };
  breadcrumbs: { name: string; url: string }[];
  relatedServices: { name: string; url: string; shortTitle: string; description: string; tagline?: string }[];
  relatedLocations: { name: string; url: string; level?: string; stateSlug?: string }[];
  relatedMaterials: { name: string; url: string; category?: string }[];
  relatedJewellery: { name: string; url: string }[];
  relatedEntities: { name: string; url: string }[];
  faqSet: { q: string; a: string }[];

  // 4. Dynamic Contact & CTAs
  ctaHeadline: string;
  ctaSubheadline: string;
  popupHeadline: string;
  popupSubheadline: string;
  whatsAppMessage: string;
  whatsAppUrl: string;
  defaultEnquiryLocation: string;
  defaultEnquiryService: string;

  // 5. Physical Branch Hubs
  physicalBranchHub?: BranchHub;
  nearestBranchHub?: BranchHub;

  // 6. Schema & GEO Meta Data
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  icbm: string;
  structuredData: Record<string, any>[];
}

// Alias for universal compatibility
export type PageContext = UniversalPageContext;

// ============================================================
// 3. UNIVERSAL ROUTE & CONTEXT RESOLVER WITH HIGH-SPEED LRU CACHING
// Redis-like in-memory cache for sub-millisecond context resolution
// ============================================================

export class LRUCache<K, V> {
  private readonly capacity: number;
  private readonly cache: Map<K, V>;
  private hits: number = 0;
  private misses: number = 0;

  constructor(capacity: number = 50000) {
    this.capacity = capacity;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | undefined {
    const item = this.cache.get(key);
    if (item !== undefined) {
      this.hits++;
      // Move accessed key to the end (most recently used)
      this.cache.delete(key);
      this.cache.set(key, item);
      return item;
    }
    this.misses++;
    return undefined;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first item in Map)
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
      }
    }
    this.cache.set(key, value);
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  delete(key: K): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
  }

  get size(): number {
    return this.cache.size;
  }

  getStats(): { hits: number; misses: number; size: number; hitRatio: number } {
    const total = this.hits + this.misses;
    return {
      hits: this.hits,
      misses: this.misses,
      size: this.cache.size,
      hitRatio: total > 0 ? Number((this.hits / total).toFixed(4)) : 0
    };
  }
}

export const pageContextCache = new LRUCache<string, UniversalPageContext>(50000);

export function clearPageContextCache(): void {
  pageContextCache.clear();
}

export function getPageContextCacheSize(): number {
  return pageContextCache.size;
}

export function getPageContextCacheStats() {
  return pageContextCache.getStats();
}

export function resolvePageContext(input: {
  pathname?: string;
  state?: string;
  slug?: string[] | string;
  serviceSlug?: string;
  metalSlug?: string;
  jewellerySlug?: string;
}): UniversalPageContext {
  const slugPart = Array.isArray(input.slug)
    ? input.slug.join('/')
    : typeof input.slug === 'string'
    ? input.slug
    : '';
  const cacheKey = `${input.pathname || ''}|${input.state || ''}|${slugPart}|${input.serviceSlug || ''}|${input.metalSlug || ''}|${input.jewellerySlug || ''}`;

  const cached = pageContextCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const result = computeResolvedPageContext(input);
  pageContextCache.set(cacheKey, result);
  return result;
}

function computeResolvedPageContext(input: {
  pathname?: string;
  state?: string;
  slug?: string[] | string;
  serviceSlug?: string;
  metalSlug?: string;
  jewellerySlug?: string;
}): UniversalPageContext {
  let rawPath = input.pathname || '';
  if (!rawPath && input.state) {
    const slugArr = Array.isArray(input.slug)
      ? input.slug
      : typeof input.slug === 'string' && input.slug
      ? [input.slug]
      : [];
    rawPath = `/${input.state}/${slugArr.join('/')}`;
  }
  const cleanPath = rawPath.replace(/^\/+|\/+$/g, '');
  const segments = cleanPath ? cleanPath.split('/') : [];

  let activeStateSlug: 'andhra-pradesh' | 'telangana' | undefined;
  let activeLocation: UniversalLocationSummary | undefined;
  let activeService: ServiceDef | undefined;
  let activeMaterial: MaterialDef | undefined;
  let activeJewellery: JewelleryDef | undefined;

  let unresolvedServiceSlug: string | undefined;
  let unresolvedMaterialSlug: string | undefined;
  let unresolvedJewellerySlug: string | undefined;
  let unresolvedLocationSlug: string | undefined;

  // 1. Check direct overrides from input
  if (input.serviceSlug) {
    if (UNIVERSAL_SERVICES[input.serviceSlug]) {
      activeService = UNIVERSAL_SERVICES[input.serviceSlug];
    } else {
      unresolvedServiceSlug = input.serviceSlug;
    }
  }
  if (input.metalSlug) {
    if (MATERIALS[input.metalSlug]) {
      activeMaterial = MATERIALS[input.metalSlug];
    } else {
      unresolvedMaterialSlug = input.metalSlug;
    }
  }
  if (input.jewellerySlug) {
    if (JEWELLERY_TYPES[input.jewellerySlug]) {
      activeJewellery = JEWELLERY_TYPES[input.jewellerySlug];
    } else {
      unresolvedJewellerySlug = input.jewellerySlug;
    }
  }

  // 2. Parse Path Segments
  if (segments.length > 0) {
    const first = segments[0];

    // Case A: State-led path (e.g. /andhra-pradesh/ntr/vijayawada/services/loan-transfer)
    if (first === 'andhra-pradesh' || first === 'telangana') {
      activeStateSlug = first;
      const subSegments = segments.slice(1);

      let locSegments: string[] = [];
      for (let i = 0; i < subSegments.length; i++) {
        const seg = subSegments[i];
        if (seg === 'services' && subSegments[i + 1]) {
          const sSlug = subSegments[i + 1];
          if (UNIVERSAL_SERVICES[sSlug]) {
            activeService = UNIVERSAL_SERVICES[sSlug];
          } else {
            unresolvedServiceSlug = sSlug;
          }
          i++;
        } else if (seg === 'metals' && subSegments[i + 1]) {
          const mSlug = subSegments[i + 1];
          if (MATERIALS[mSlug]) {
            activeMaterial = MATERIALS[mSlug];
          } else {
            unresolvedMaterialSlug = mSlug;
          }
          i++;
        } else if (seg === 'jewellery' && subSegments[i + 1]) {
          const jSlug = subSegments[i + 1];
          if (JEWELLERY_TYPES[jSlug]) {
            activeJewellery = JEWELLERY_TYPES[jSlug];
          } else {
            unresolvedJewellerySlug = jSlug;
          }
          i++;
        } else if (UNIVERSAL_SERVICES[seg]) {
          activeService = UNIVERSAL_SERVICES[seg];
        } else if (MATERIALS[seg]) {
          activeMaterial = MATERIALS[seg];
        } else if (JEWELLERY_TYPES[seg]) {
          activeJewellery = JEWELLERY_TYPES[seg];
        } else {
          locSegments.push(seg);
        }
      }

      // Check location hierarchy integrity
      const stData = locationHierarchy.states[activeStateSlug];
      if (locSegments.length > 0) {
        const dSlug = locSegments[0];
        const distExists = stData?.districts && (stData.districts as Record<string, any>)[dSlug];
        if (!distExists) {
          // Attempt smart resolution if district was omitted (e.g. /andhra-pradesh/vijayawada or /telangana/charminar)
          let autoResolvedDist: string | null = null;
          let autoResolvedMandal: string | null = null;
          if (stData?.districts) {
            for (const [distK, distV] of Object.entries(stData.districts as Record<string, any>)) {
              if (distV.mandals && distV.mandals[dSlug]) {
                autoResolvedDist = distK;
                break;
              }
              if (distV.mandals) {
                for (const [manK, manV] of Object.entries(distV.mandals as Record<string, any>)) {
                  if (manV.localities && Array.isArray(manV.localities)) {
                    const matchedLoc = manV.localities.find((lStr: string) =>
                      lStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === dSlug
                    );
                    if (matchedLoc) {
                      autoResolvedDist = distK;
                      autoResolvedMandal = manK;
                      break;
                    }
                  }
                }
              }
              if (autoResolvedDist) break;
            }
          }

          if (autoResolvedDist) {
            if (autoResolvedMandal) {
              locSegments = [autoResolvedDist, autoResolvedMandal, ...locSegments];
            } else {
              locSegments = [autoResolvedDist, ...locSegments];
            }
          } else {
            unresolvedLocationSlug = dSlug;
          }
        }
      }

      activeLocation = resolveLocationSummary(activeStateSlug, locSegments);
    }
    // Case B: Standalone Services path (/services or /services/[slug])
    else if (first === 'services') {
      if (segments[1]) {
        const sSlug = segments[1];
        if (UNIVERSAL_SERVICES[sSlug]) {
          activeService = UNIVERSAL_SERVICES[sSlug];
        } else {
          unresolvedServiceSlug = sSlug;
        }
      }
    }
    // Case C: Standalone Metals path (/metals/[slug])
    else if (first === 'metals' && segments[1]) {
      const mSlug = segments[1];
      if (MATERIALS[mSlug]) {
        activeMaterial = MATERIALS[mSlug];
      } else {
        unresolvedMaterialSlug = mSlug;
      }
    }
    // Case D: Standalone Jewellery path (/jewellery/[slug])
    else if (first === 'jewellery' && segments[1]) {
      const jSlug = segments[1];
      if (JEWELLERY_TYPES[jSlug]) {
        activeJewellery = JEWELLERY_TYPES[jSlug];
      } else {
        unresolvedJewellerySlug = jSlug;
      }
    }
  }

  // Universal Scan Fallback: If activeService is not set yet, check all segments for any matching service slug
  if (!activeService && segments.length > 0) {
    for (const seg of segments) {
      if (UNIVERSAL_SERVICES[seg]) {
        activeService = UNIVERSAL_SERVICES[seg];
        break;
      }
    }
  }

  // Integrity Check Flag Resolution
  let integrityCheck: IntegrityCheckResult = {
    passed: true,
    isDiagnostic404: false,
    code: 'OK'
  };

  if (unresolvedServiceSlug) {
    integrityCheck = {
      passed: false,
      isDiagnostic404: true,
      code: 'SERVICE_NOT_FOUND',
      reason: `Requested service '${unresolvedServiceSlug}' was not found in UNIVERSAL_SERVICES catalog.`,
      requestedServiceSlug: unresolvedServiceSlug
    };
  } else if (unresolvedMaterialSlug) {
    integrityCheck = {
      passed: false,
      isDiagnostic404: true,
      code: 'MATERIAL_NOT_FOUND',
      reason: `Requested metal/material '${unresolvedMaterialSlug}' was not found in MATERIALS catalog.`,
      requestedMaterialSlug: unresolvedMaterialSlug
    };
  } else if (unresolvedJewellerySlug) {
    integrityCheck = {
      passed: false,
      isDiagnostic404: true,
      code: 'JEWELLERY_NOT_FOUND',
      reason: `Requested jewellery '${unresolvedJewellerySlug}' was not found in JEWELLERY_TYPES catalog.`,
      requestedJewellerySlug: unresolvedJewellerySlug
    };
  } else if (unresolvedLocationSlug) {
    integrityCheck = {
      passed: false,
      isDiagnostic404: true,
      code: 'LOCATION_NOT_FOUND',
      reason: `Requested location segment '${unresolvedLocationSlug}' does not exist in locationHierarchy source data.`,
      requestedLocationSlug: unresolvedLocationSlug
    };
  }

  // Determine Archetype
  let pageArchetype: PageArchetype = 'home';
  if (cleanPath === '' || cleanPath === '/') {
    pageArchetype = 'home';
  } else if (cleanPath === 'services') {
    pageArchetype = 'service-hub';
  } else if (activeLocation && activeService) {
    pageArchetype = 'service-location';
  } else if (activeLocation && activeMaterial) {
    pageArchetype = 'material-location';
  } else if (activeLocation) {
    pageArchetype = 'location-hub';
  } else if (activeService) {
    pageArchetype = 'service-detail';
  } else if (activeMaterial) {
    pageArchetype = 'material-detail';
  } else if (activeJewellery) {
    pageArchetype = 'jewellery-detail';
  } else {
    pageArchetype = 'info-page';
  }

  // Derive Intent
  const primaryIntent: UniversalPageContext['primaryIntent'] =
    activeService?.intent || (activeMaterial ? 'sell' : activeLocation ? 'sell' : 'enquiry');

  // Fallback defaults for materials
  if (!activeMaterial && activeService?.applicableMetals?.length) {
    const primaryMetal = activeService.applicableMetals[0];
    if (MATERIALS[primaryMetal]) activeMaterial = MATERIALS[primaryMetal];
  }

  return buildResolvedContext({
    location: activeLocation,
    service: activeService,
    material: activeMaterial,
    jewellery: activeJewellery,
    pageArchetype,
    primaryIntent,
    integrityCheck,
    pathname: cleanPath ? `/${cleanPath}` : '/'
  });
}

function resolveLocationSummary(
  stateSlug: 'andhra-pradesh' | 'telangana',
  rawSegments: string[]
): UniversalLocationSummary {
  const stateName = stateSlug === 'andhra-pradesh' ? 'Andhra Pradesh' : 'Telangana';
  const stData = locationHierarchy.states[stateSlug];

  const hasExplicitMain = rawSegments.includes('main');
  const segments = rawSegments.filter(s => s !== 'main' && s !== 'gold-buyers' && s !== 'coverage');

  if (segments.length === 0) {
    const childDistricts = stData?.districts
      ? Object.entries(stData.districts).map(([slug, d]) => ({
          name: d.name,
          slug,
          url: `/${stateSlug}/${slug}`
        }))
      : [];

    return {
      stateSlug,
      stateName,
      displayName: stateName,
      fullPath: `/${stateSlug}`,
      url: `/${stateSlug}`,
      level: 'state',
      childDistricts
    };
  }

  const distSlug = segments[0];
  const dist = stData?.districts ? (stData.districts as Record<string, any>)[distSlug] : undefined;
  const districtName = dist?.name || formatSlugToName(distSlug);

  // LEVEL 1: DISTRICT
  if (segments.length === 1) {
    const childMandals = dist?.mandals
      ? Object.entries(dist.mandals)
          .filter(([mSlug]) => mSlug !== 'main')
          .map(([mSlug, m]: [string, any]) => ({
            name: m.name || formatSlugToName(mSlug),
            slug: mSlug,
            url: `/${stateSlug}/${distSlug}/${mSlug}`,
            count: (m.villages || m.localities || []).length
          }))
      : [];

    const childCities = dist?.cities
      ? Object.entries(dist.cities).map(([cSlug, c]: [string, any]) => ({
          name: c.name || formatSlugToName(cSlug),
          slug: cSlug,
          url: `/${stateSlug}/${distSlug}/${cSlug}`,
          count: (c.neighbourhoods || c.localities || []).length
        }))
      : [];

    // Distinct City Neighbourhoods of the district headquarters
    const rawCityNeighbourhoods = dist?.mandals?.main?.neighbourhoods || dist?.mandals?.main?.localities || [];
    const cityNeighbourhoods = rawCityNeighbourhoods.map((locStr: string) => {
      const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        name: formatSlugToName(locStr),
        slug: lSlug,
        url: `/${stateSlug}/${distSlug}/main/${lSlug}`
      };
    });

    return {
      stateSlug,
      stateName,
      districtSlug: distSlug,
      districtName,
      displayName: districtName,
      fullPath: `/${stateSlug}/${distSlug}`,
      url: `/${stateSlug}/${distSlug}`,
      level: 'district',
      locationType: 'district',
      childCities,
      childMandals,
      childNeighbourhoods: cityNeighbourhoods,
      childVillages: [], // Districts list mandals and city neighbourhoods, not mixed villages
      childLocalities: cityNeighbourhoods,
      parentState: { name: stateName, url: `/${stateSlug}` }
    };
  }

  // Handle City Neighbourhood under main city (e.g. /andhra-pradesh/kurnool/main/park-road OR /andhra-pradesh/kurnool/park-road)
  const isDirectMainNeighbourhood = hasExplicitMain && segments.length === 2;
  const isImplicitMainNeighbourhood = segments.length === 2 && !dist?.mandals?.[segments[1]] &&
    (dist?.mandals?.main?.neighbourhoods?.includes(segments[1]) || dist?.mandals?.main?.localities?.includes(segments[1]));

  if (isDirectMainNeighbourhood || isImplicitMainNeighbourhood) {
    const localitySlug = segments[1];
    const localityName = formatSlugToName(localitySlug);
    const rawNeighbourhoods = dist?.mandals?.main?.neighbourhoods || dist?.mandals?.main?.localities || [];

    const siblingNeighbourhoods = rawNeighbourhoods
      .filter((locStr: string) => locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') !== localitySlug)
      .map((locStr: string) => {
        const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        return {
          name: formatSlugToName(locStr),
          slug: lSlug,
          url: `/${stateSlug}/${distSlug}/${lSlug}`
        };
      });

    return {
      stateSlug,
      stateName,
      districtSlug: distSlug,
      districtName,
      mandalSlug: 'main',
      mandalName: `${districtName} City`,
      localitySlug,
      localityName,
      displayName: localityName,
      fullPath: `/${stateSlug}/${distSlug}/${localitySlug}`,
      url: `/${stateSlug}/${distSlug}/${localitySlug}`,
      level: 'locality',
      locationType: 'neighbourhood',
      isVillage: false,
      isNeighbourhood: true,
      childVillages: [], // City neighbourhoods have zero villages
      childNeighbourhoods: siblingNeighbourhoods,
      childLocalities: siblingNeighbourhoods,
      parentDistrict: { name: districtName, url: `/${stateSlug}/${distSlug}` },
      parentState: { name: stateName, url: `/${stateSlug}` }
    };
  }

  const mandalSlug = segments[1];
  const mandal = dist?.mandals ? dist.mandals[mandalSlug] : undefined;
  const mandalName = mandal?.name || formatSlugToName(mandalSlug);

  // LEVEL 2: MANDAL / TOWN
  if (segments.length === 2) {
    const rawVillages = mandal?.villages || [];
    const rawNeighbourhoods = mandal?.neighbourhoods || [];

    const childVillages = rawVillages.map((locStr: string) => {
      const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        name: formatSlugToName(locStr),
        slug: lSlug,
        url: `/${stateSlug}/${distSlug}/${mandalSlug}/${lSlug}`
      };
    });

    const childNeighbourhoods = rawNeighbourhoods.map((locStr: string) => {
      const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        name: formatSlugToName(locStr),
        slug: lSlug,
        url: `/${stateSlug}/${distSlug}/${mandalSlug}/${lSlug}`
      };
    });

    return {
      stateSlug,
      stateName,
      districtSlug: distSlug,
      districtName,
      mandalSlug,
      mandalName,
      displayName: mandalName,
      fullPath: `/${stateSlug}/${distSlug}/${mandalSlug}`,
      url: `/${stateSlug}/${distSlug}/${mandalSlug}`,
      level: 'mandal',
      locationType: mandal?.isUrbanCenter ? 'city' : 'town',
      isUrbanCenter: mandal?.isUrbanCenter,
      childVillages, // strictly villages
      childNeighbourhoods, // strictly neighbourhoods
      childLocalities: childNeighbourhoods.length > 0 ? childNeighbourhoods : childVillages,
      parentDistrict: { name: districtName, url: `/${stateSlug}/${distSlug}` },
      parentState: { name: stateName, url: `/${stateSlug}` }
    };
  }

  // LEVEL 3: LEAF LOCALITY (Strictly Village OR Neighbourhood)
  const localitySlug = segments[2];
  const localityName = formatSlugToName(localitySlug);

  const rawVillages = mandal?.villages || [];
  const rawNeighbourhoods = mandal?.neighbourhoods || [];

  const isVillage = rawVillages.some((vStr: string) =>
    vStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === localitySlug
  );

  const isNeighbourhood = !isVillage && (
    rawNeighbourhoods.some((nStr: string) =>
      nStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') === localitySlug
    ) || !!mandal?.isUrbanCenter || rawVillages.length === 0
  );

  const siblingVillages = rawVillages
    .filter((locStr: string) => locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') !== localitySlug)
    .map((locStr: string) => {
      const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        name: formatSlugToName(locStr),
        slug: lSlug,
        url: `/${stateSlug}/${distSlug}/${mandalSlug}/${lSlug}`
      };
    });

  const siblingNeighbourhoods = rawNeighbourhoods
    .filter((locStr: string) => locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') !== localitySlug)
    .map((locStr: string) => {
      const lSlug = locStr.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return {
        name: formatSlugToName(locStr),
        slug: lSlug,
        url: `/${stateSlug}/${distSlug}/${mandalSlug}/${lSlug}`
      };
    });

  return {
    stateSlug,
    stateName,
    districtSlug: distSlug,
    districtName,
    mandalSlug,
    mandalName,
    localitySlug,
    localityName,
    displayName: localityName,
    fullPath: `/${stateSlug}/${distSlug}/${mandalSlug}/${localitySlug}`,
    url: `/${stateSlug}/${distSlug}/${mandalSlug}/${localitySlug}`,
    level: 'locality',
    locationType: isVillage ? 'village' : 'neighbourhood',
    isVillage,
    isNeighbourhood,
    childVillages: siblingVillages, // strictly sibling villages
    childNeighbourhoods: siblingNeighbourhoods, // strictly sibling neighbourhoods
    childLocalities: isVillage ? siblingVillages : siblingNeighbourhoods,
    parentMandal: { name: mandalName, url: `/${stateSlug}/${distSlug}/${mandalSlug}` },
    parentDistrict: { name: districtName, url: `/${stateSlug}/${distSlug}` },
    parentState: { name: stateName, url: `/${stateSlug}` }
  };
}

export function buildResolvedContext(params: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
  pageArchetype: PageArchetype;
  primaryIntent: UniversalPageContext['primaryIntent'];
  integrityCheck?: IntegrityCheckResult;
  pathname: string;
}): UniversalPageContext {
  const { location, service, material, jewellery, pageArchetype, primaryIntent, integrityCheck, pathname } = params;

  const defaultIntegrityCheck: IntegrityCheckResult = integrityCheck || {
    passed: true,
    isDiagnostic404: false,
    code: 'OK'
  };

  // 1. Natural Headings and Metadata (Zero keyword-stuffing, claim-controlled)
  const locType = location?.locationType;
  let locLabel = location?.displayName || 'Andhra Pradesh & Telangana';
  if (locType === 'neighbourhood' && location?.districtName) {
    locLabel = `${location.displayName}, ${location.districtName}`;
  } else if (locType === 'village' && location?.mandalName) {
    locLabel = `${location.displayName}, ${location.mandalName}`;
  }

  let pageTitle = '';
  let h1 = '';
  let metaDescription = '';

  if (defaultIntegrityCheck.isDiagnostic404) {
    pageTitle = generateSeoTitle({ searchIntent: 'Route Validation Notice' });
    h1 = `Route & Entity Integrity Notice`;
    metaDescription = `Diagnostic Route Notice: The requested path follows a recognized entity URL pattern, but specific requested content could not be found in our verified location or service data.`;
  } else if (pageArchetype === 'service-hub') {
    pageTitle = generateSeoTitle({ searchIntent: 'Precious Metals & Gold Valuation Services', location: 'Andhra Pradesh & Telangana' });
    h1 = `Precious Metals & Gold Valuation Services`;
    metaDescription = `Comprehensive evaluation, buying, and gold loan foreclosure services across Andhra Pradesh and Telangana. Non-destructive XRF assaying and direct settlement.`;
  } else if (pageArchetype === 'service-location' && service && location) {
    pageTitle = generateSeoTitle({ searchIntent: service.shortTitle || service.name, location: locLabel });
    h1 = `${service.name} in ${locLabel}`;
    if (locType === 'neighbourhood') {
      metaDescription = `Verified ${service.shortTitle.toLowerCase()} in ${location.displayName} neighbourhood, ${location.districtName}. Non-destructive testing, live spot benchmark valuation, and immediate bank transfer.`;
    } else if (locType === 'village') {
      metaDescription = `Doorstep and branch ${service.shortTitle.toLowerCase()} for ${location.displayName} village in ${location.mandalName} mandal, ${location.districtName}. Non-destructive testing, live spot benchmark valuation, and immediate bank transfer.`;
    } else if (locType === 'town') {
      metaDescription = `Verified ${service.shortTitle.toLowerCase()} in ${location.displayName} town, ${location.districtName}. Non-destructive testing, live spot benchmark valuation, and immediate bank transfer.`;
    } else if (locType === 'city') {
      metaDescription = `Verified ${service.shortTitle.toLowerCase()} in ${location.displayName} city, ${location.stateName}. Non-destructive testing, live spot benchmark valuation, and immediate bank transfer.`;
    } else {
      metaDescription = `Verified ${service.shortTitle.toLowerCase()} in ${location.displayName}, ${location.stateName}. Non-destructive testing, live spot benchmark valuation, and immediate bank transfer.`;
    }
  } else if (pageArchetype === 'service-detail' && service) {
    pageTitle = generateSeoTitle({ searchIntent: service.name, location: 'Andhra Pradesh & Telangana' });
    h1 = service.name;
    metaDescription = `${service.description} Available across all major towns and commercial hubs in Andhra Pradesh and Telangana.`;
  } else if (pageArchetype === 'material-location' && material && location) {
    pageTitle = generateSeoTitle({ searchIntent: `${material.name} Buyers`, location: locLabel });
    h1 = `${material.name} Buyers & Spot Valuation in ${locLabel}`;
    metaDescription = `Sell ${material.name.toLowerCase()} in ${locLabel}. Non-destructive testing, live spot valuation, and instant bank payout at ${BRAND.name}.`;
  } else if (pageArchetype === 'material-detail' && material) {
    pageTitle = generateSeoTitle({ searchIntent: `${material.name} Buying & Valuation`, location: 'Andhra Pradesh & Telangana' });
    h1 = `${material.name} Buying & Assaying Services`;
    metaDescription = `Accurate valuation and purchasing for ${material.name.toLowerCase()} items at live spot market rates.`;
  } else if (pageArchetype === 'jewellery-detail' && jewellery) {
    pageTitle = generateSeoTitle({ searchIntent: `Sell ${jewellery.name}`, location: locLabel !== 'Andhra Pradesh & Telangana' ? locLabel : null });
    h1 = `${jewellery.name} Valuation & Buying`;
    metaDescription = `Fair spot valuation for ${jewellery.name.toLowerCase()}. Free purity assay and instant settlement.`;
  } else if (pageArchetype === 'location-hub' && location) {
    pageTitle = generateSeoTitle({ searchIntent: 'Gold Buyers', location: locLabel });
    if (locType === 'neighbourhood') {
      h1 = `Gold Buyers in ${location.displayName}, ${location.districtName}`;
      metaDescription = `Precious metals valuation and certified gold buyers in ${location.displayName} neighbourhood, ${location.districtName}. Transparent XRF purity testing and immediate direct settlement.`;
    } else if (locType === 'village') {
      h1 = `Gold Buyers in ${location.displayName}, ${location.mandalName}`;
      metaDescription = `Doorstep gold evaluation and buying service for ${location.displayName} village in ${location.mandalName} mandal, ${location.districtName}. Transparent XRF purity testing and immediate direct settlement.`;
    } else if (locType === 'town') {
      h1 = `Gold Buyers in ${location.displayName}`;
      metaDescription = `Precious metals valuation and gold buying desk in ${location.displayName} town, ${location.districtName}. Transparent XRF purity testing and immediate direct settlement.`;
    } else if (locType === 'city') {
      h1 = `Gold Buyers & Precious Metals Valuation in ${location.displayName}`;
      metaDescription = `Precious metals valuation and gold buyers in ${location.displayName} city, ${location.stateName}. Transparent German XRF spectrometer assay and direct bank payout.`;
    } else if (locType === 'district') {
      h1 = `Gold Buyers & Precious Metals Valuation in ${location.displayName} District`;
      metaDescription = `Precious metals valuation and gold buyers across ${location.displayName} District, ${location.stateName}. Transparent XRF purity testing and immediate direct settlement.`;
    } else {
      h1 = `Gold Buyers & Precious Metals Valuation in ${location.displayName}`;
      metaDescription = `Precious metals valuation and buying in ${location.displayName}, ${location.stateName}. Transparent XRF purity testing and immediate direct settlement.`;
    }
  } else {
    pageTitle = generateSeoTitle({ searchIntent: 'Transparent Gold & Silver Valuation', location: 'AP & Telangana' });
    h1 = `Transparent Precious Metals Valuation in AP & Telangana`;
    metaDescription = `Spot market valuation for gold, silver, diamond jewellery, and pledged gold release across Andhra Pradesh and Telangana. Accurate non-destructive assay testing.`;
  }

  // 2. Dynamic AEO Direct Answer
  const directAnswer = resolveAeoDirectAnswer({ location, service, material, jewellery, intent: primaryIntent });

  // 3. Dynamic Breadcrumbs
  const breadcrumbs = resolveBreadcrumbList({ location, service, material, jewellery, pageArchetype });

  // 4. Semantic Related Links
  const relatedServices = Object.values(UNIVERSAL_SERVICES)
    .filter(s => s.id !== service?.id)
    .slice(0, 6)
    .map(s => ({
      name: s.name,
      shortTitle: s.shortTitle,
      url: location ? `${location.fullPath}/services/${s.slug}` : `/services/${s.slug}`,
      description: s.description,
      tagline: s.tagline
    }));

  const relatedLocations = resolveRelatedLocations(location);

  const relatedMaterials = Object.values(MATERIALS)
    .filter(m => m.id !== material?.id)
    .map(m => ({
      name: `${m.name} Buyers`,
      category: m.category,
      url: location ? `${location.fullPath}/metals/${m.slug}` : `/metals/${m.slug}`
    }));

  const relatedJewellery = Object.values(JEWELLERY_TYPES)
    .filter(j => j.id !== jewellery?.id)
    .slice(0, 8)
    .map(j => ({
      name: j.name,
      url: location ? `${location.fullPath}/jewellery/${j.slug}` : `/jewellery/${j.slug}`
    }));

  const relatedEntities = [
    { name: 'Gold Valuation Calculator', url: '/gold-valuation-calculator' },
    { name: 'Live Gold Rate Guide', url: '/gold-rate' },
    { name: 'Frequently Asked Questions', url: '/faq' },
    { name: 'About Akshaya Gold Buyers', url: '/about' },
    { name: 'Contact & Branch Support', url: '/contact' }
  ];

  // 5. Dynamic FAQ Set
  const faqSet = resolveFaqSet({ location, service, material, jewellery, pageArchetype });

  // 6. Contact & Popup Details
  const ctaHeadline = location
    ? `Need assistance with ${service?.shortTitle || 'Gold Valuation'} in ${location.displayName}?`
    : `Need assistance with ${service?.shortTitle || 'Precious Metals Valuation'}?`;

  const ctaSubheadline = `Connect directly with our valuation desk serving ${locLabel}. Professional assaying & direct settlement.`;

  const popupHeadline = location && service
    ? `Need help with ${service.shortTitle} in ${location.displayName}?`
    : location
    ? `Need help with Gold Buyers in ${location.displayName}?`
    : service
    ? `Need help with ${service.shortTitle}?`
    : 'How can our valuation desk help you?';

  const popupSubheadline = `Get spot market valuation, non-destructive testing, or gold loan assistance in ${locLabel}.`;

  const whatsAppMessage = buildContextualWhatsAppMessage({ location, service, material, jewellery });
  const whatsAppUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp1Number}?text=${encodeURIComponent(whatsAppMessage)}`;

  // 7. Schema & GEO Meta Resolution
  const geoInfo = resolveGeoCoordinates(location);
  const canonicalUrl = buildCanonicalUrl(pathname);

  // 8. Physical Branch Hub Resolution
  const distKey = location?.districtSlug || location?.districtName;
  const physicalBranchHub: BranchHub | undefined = distKey ? getBranchByDistrict(distKey) : undefined;
  let nearestBranchHub: BranchHub | undefined = physicalBranchHub;
  if (!nearestBranchHub && location?.stateSlug) {
    const stBranches = getBranchesByState(location.stateSlug as 'andhra-pradesh' | 'telangana');
    nearestBranchHub = stBranches.find(b => b.isFlagship) || stBranches[0];
  }

  if (location) {
    location.physicalBranchHub = physicalBranchHub;
    location.nearestBranchHub = nearestBranchHub;
  }

  const structuredData = resolveSchemaGraph({
    location,
    service,
    material,
    jewellery,
    pageTitle,
    metaDescription,
    canonicalUrl,
    breadcrumbs,
    faqSet,
    directAnswer,
    pageArchetype,
    geoInfo
  });

  return {
    primaryIntent,
    pageArchetype,
    indexability: defaultIntegrityCheck.isDiagnostic404 ? 'NOINDEX' : 'INDEX',
    integrityCheck: defaultIntegrityCheck,
    business: {
      name: BRAND.name,
      legalName: BRAND.legalName,
      tagline: BRAND.tagline,
      phone1: BRAND.phone1,
      phone2: BRAND.phone2,
      phone1Display: BRAND.phone1Display,
      phone2Display: BRAND.phone2Display,
      whatsapp1: BRAND.whatsapp1,
      whatsapp2: BRAND.whatsapp2,
      email: BRAND.email,
      website: BRAND.website
    },
    location,
    locationSlug: location?.localitySlug || location?.mandalSlug || location?.districtSlug || location?.stateSlug,
    state: location?.stateName,
    stateSlug: location?.stateSlug,
    district: location?.districtName,
    districtSlug: location?.districtSlug,
    service,
    serviceSlug: service?.slug,
    serviceCategory: service?.categoryGroup,
    material,
    metal: material?.id,
    item: jewellery,
    jewellery,
    jewelleryType: jewellery,
    pageType: pageArchetype,
    pathname,
    canonicalUrl,
    pageTitle,
    metaDescription,
    h1,
    directAnswer,
    breadcrumbs,
    relatedServices,
    relatedLocations,
    relatedMaterials,
    relatedJewellery,
    relatedEntities,
    faqSet,
    ctaHeadline,
    ctaSubheadline,
    popupHeadline,
    popupSubheadline,
    whatsAppMessage,
    whatsAppUrl,
    defaultEnquiryLocation: location?.displayName || 'Andhra Pradesh & Telangana',
    defaultEnquiryService: service?.name || (material ? `${material.name} Buying` : 'Sell Gold for Cash'),
    physicalBranchHub,
    nearestBranchHub,
    geoRegion: geoInfo.geoRegion,
    geoPlacename: geoInfo.geoPlacename,
    geoPosition: geoInfo.geoPosition,
    icbm: geoInfo.icbm,
    structuredData
  };
}

// ============================================================
// 4. DYNAMIC ROUTE RESOLVER (Cross-matching navigation)
// ============================================================

export function resolveRoute(options: {
  currentLocation?: UniversalLocationSummary;
  newLocation?: UniversalLocationSummary;
  currentService?: ServiceDef;
  newService?: ServiceDef;
  currentMaterial?: MaterialDef;
  newMaterial?: MaterialDef;
  currentJewellery?: JewelleryDef;
  newJewellery?: JewelleryDef;
}): string {
  const loc = options.newLocation !== undefined ? options.newLocation : options.currentLocation;
  const srv = options.newService !== undefined ? options.newService : options.currentService;
  const mat = options.newMaterial !== undefined ? options.newMaterial : options.currentMaterial;
  const jew = options.newJewellery !== undefined ? options.newJewellery : options.currentJewellery;

  return generateCanonicalRoute({
    location: loc,
    service: srv,
    metal: mat,
    item: jew
  });
}

// ============================================================
// 5. HELPER ENGINES (AEO, FAQ, BREADCRUMBS, SCHEMA, WHATSAPP)
// ============================================================

function resolveAeoDirectAnswer(ctx: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
  intent: string;
}) {
  const loc = ctx.location?.displayName || 'Andhra Pradesh and Telangana';

  if (ctx.service?.id === 'loan-transfer' || ctx.service?.id === 'pledged-gold-transfer') {
    return {
      question: `What is gold loan transfer assistance in ${loc}?`,
      directAnswer: `Gold loan transfer assistance in ${loc} allows borrowers to clear high-interest bank/NBFC loan dues upfront through Akshaya Gold Buyers, release their pledged jewellery safely, and receive the remaining equity surplus as instant bank transfer.`,
      explanation: `Borrowers avoid escalating compound interest or default auction penalties by having Akshaya Gold Buyers settle the exact foreclosure balance directly with the lending branch.`,
      ctaText: `Enquire About Loan Transfer in ${loc}`
    };
  }

  if (ctx.service?.id === 'pledged-gold-takeover' || ctx.service?.id === 'pledged-gold-buyers') {
    return {
      question: `How does pledged gold takeover work in ${loc}?`,
      directAnswer: `Akshaya Gold Buyers visits your lending institution in ${loc}, clears your outstanding gold loan principal and accrued interest on the spot, retrieves your ornaments, and pays you the market surplus value immediately.`,
      explanation: `Zero upfront cash is required from the customer. Valuation is conducted at live bullion spot rates with full transparent accounting.`,
      ctaText: `Release Pledged Gold in ${loc}`
    };
  }

  if (ctx.service?.id === 'gold-valuation') {
    return {
      question: `How does gold jewellery valuation work in ${loc}?`,
      directAnswer: `Gold valuation at Akshaya Gold Buyers in ${loc} uses non-destructive XRF laser spectrometry to measure exact karat purity (24K, 22K 916, 18K) and fine gold weight with no chemical damage or scrap deductions.`,
      explanation: `Customers receive an itemized weight and karat readout on digital displays with zero obligation to sell.`,
      ctaText: `Get Gold Valuation in ${loc}`
    };
  }

  if (ctx.material?.id === 'silver' || ctx.service?.id === 'silver-buyers') {
    return {
      question: `Who buys silver articles and coins in ${loc}?`,
      directAnswer: `Akshaya Gold Buyers purchases 999 silver bullion, 925 sterling jewellery, antique utensils, and pooja articles in ${loc} with direct bank transfer based on live market silver rates.`,
      explanation: `All items are weighed on certified micro-scales with complete transparency and zero arbitrary deductions.`,
      ctaText: `Sell Silver in ${loc}`
    };
  }

  return {
    question: `Who buys gold for cash in ${loc}?`,
    directAnswer: `Akshaya Gold Buyers is a certified precious metals buyer serving ${loc}, offering direct bank transfer and spot settlement for 22K 916, 24K, and 18K gold jewellery, coins, and scrap.`,
    explanation: `All testing is performed in your presence using precision XRF laser spectrometers, ensuring laboratory-level accuracy and transparent valuation.`,
    ctaText: `Sell Gold for Cash in ${loc}`
  };
}

function resolveBreadcrumbList(ctx: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
  pageArchetype: PageArchetype;
}) {
  const crumbs: { name: string; url: string }[] = [{ name: 'Home', url: '/' }];

  if (ctx.pageArchetype === 'service-hub') {
    crumbs.push({ name: 'Services', url: '/services' });
    return crumbs;
  }

  if (ctx.location) {
    crumbs.push({ name: ctx.location.stateName, url: `/${ctx.location.stateSlug}` });

    if (ctx.location.districtSlug && ctx.location.level !== 'state') {
      crumbs.push({
        name: ctx.location.districtName || ctx.location.displayName,
        url: `/${ctx.location.stateSlug}/${ctx.location.districtSlug}`
      });
    }

    if (ctx.location.mandalSlug && (ctx.location.level === 'mandal' || ctx.location.level === 'locality')) {
      crumbs.push({
        name: ctx.location.mandalName || ctx.location.displayName,
        url: ctx.location.mandalSlug === 'main'
          ? `/${ctx.location.stateSlug}/${ctx.location.districtSlug}`
          : `/${ctx.location.stateSlug}/${ctx.location.districtSlug}/${ctx.location.mandalSlug}`
      });
    }

    if (ctx.location.localitySlug && ctx.location.level === 'locality') {
      crumbs.push({
        name: ctx.location.localityName || ctx.location.displayName,
        url: ctx.location.fullPath
      });
    }
  }

  if (ctx.service) {
    crumbs.push({
      name: ctx.service.shortTitle,
      url: ctx.location ? `${ctx.location.fullPath}/services/${ctx.service.slug}` : `/services/${ctx.service.slug}`
    });
  } else if (ctx.material) {
    crumbs.push({
      name: `${ctx.material.name} Buyers`,
      url: ctx.location ? `${ctx.location.fullPath}/metals/${ctx.material.slug}` : `/metals/${ctx.material.slug}`
    });
  } else if (ctx.jewellery) {
    crumbs.push({
      name: ctx.jewellery.name,
      url: ctx.location ? `${ctx.location.fullPath}/jewellery/${ctx.jewellery.slug}` : `/jewellery/${ctx.jewellery.slug}`
    });
  }

  return crumbs;
}

function resolveRelatedLocations(location?: UniversalLocationSummary) {
  if (!location) {
    return [
      { name: 'Hyderabad', url: '/telangana/hyderabad', stateSlug: 'telangana' },
      { name: 'Vijayawada', url: '/andhra-pradesh/ntr', stateSlug: 'andhra-pradesh' },
      { name: 'Visakhapatnam', url: '/andhra-pradesh/visakhapatnam', stateSlug: 'andhra-pradesh' },
      { name: 'Guntur', url: '/andhra-pradesh/guntur', stateSlug: 'andhra-pradesh' },
      { name: 'Tirupati', url: '/andhra-pradesh/tirupati', stateSlug: 'andhra-pradesh' },
      { name: 'Warangal', url: '/telangana/warangal', stateSlug: 'telangana' }
    ];
  }

  const st = locationHierarchy.states[location.stateSlug];
  if (!st) return [];

  const list: { name: string; url: string; level?: string; stateSlug?: string }[] = [];
  const distKeys = Object.keys(st.districts || {});

  distKeys.slice(0, 8).forEach(dKey => {
    if (dKey !== location.districtSlug) {
      list.push({
        name: formatSlugToName(dKey),
        url: `/${location.stateSlug}/${dKey}`,
        level: 'district',
        stateSlug: location.stateSlug
      });
    }
  });

  return list;
}

function resolveFaqSet(ctx: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
  pageArchetype: PageArchetype;
}) {
  const loc = ctx.location?.displayName || 'AP & Telangana';
  const customFaqs: { q: string; a: string }[] = [];

  if (ctx.service?.faqs) {
    ctx.service.faqs.forEach(f => {
      customFaqs.push({
        q: f.q.replace(/in [^?]+/i, `in ${loc}`),
        a: f.a
      });
    });
  }

  customFaqs.push(
    {
      q: `Where can I sell gold or get gold valuation in ${loc}?`,
      a: `Akshaya Gold Buyers provides direct evaluation desk service and mobile doorstep evaluation across ${loc} with high-precision XRF testing, transparent valuation, and immediate bank transfer.`
    },
    {
      q: `How is gold purity verified at Akshaya Gold Buyers in ${loc}?`,
      a: `We test purity using non-destructive XRF laser spectrometers that generate a precise elemental breakdown without scratching, scraping, or melting your jewellery.`
    }
  );

  return customFaqs;
}

function buildContextualWhatsAppMessage(ctx: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
}): string {
  const loc = ctx.location?.displayName;
  const srv = ctx.service?.name || ctx.service?.shortTitle;
  const mat = ctx.material?.name;
  const jew = ctx.jewellery?.name;

  let msg = 'Hello Akshaya Gold Buyers, ';

  if (srv && loc) {
    msg += `I would like to enquire about ${srv} in ${loc}. `;
  } else if (loc && mat) {
    msg += `I am looking to sell ${mat} / get spot valuation in ${loc}. `;
  } else if (loc && jew) {
    msg += `I have ${jew} to evaluate and sell in ${loc}. `;
  } else if (loc) {
    msg += `I want to sell gold / check live spot valuation in ${loc}. `;
  } else if (srv) {
    msg += `I need assistance with ${srv}. `;
  } else {
    msg += `I would like to enquire about gold buying and live spot valuation. `;
  }

  msg += `Please provide details on the valuation process and documentation needed.`;
  return msg;
}

export function resolveGeoCoordinates(location?: UniversalLocationSummary) {
  const isTg = location?.stateSlug === 'telangana';
  const dist = location?.districtSlug;

  let lat = isTg ? 18.1124 : 15.9129;
  let lng = isTg ? 79.0193 : 79.7400;
  const region = isTg ? 'IN-TG' : 'IN-AP';
  const placename = location?.displayName || (isTg ? 'Telangana, India' : 'Andhra Pradesh, India');

  if (dist === 'hyderabad') { lat = 17.3850; lng = 78.4867; }
  else if (dist === 'ntr' || dist === 'krishna') { lat = 16.5062; lng = 80.6480; }
  else if (dist === 'visakhapatnam') { lat = 17.6868; lng = 83.2185; }
  else if (dist === 'guntur') { lat = 16.3067; lng = 80.4365; }
  else if (dist === 'tirupati' || dist === 'chittoor') { lat = 13.6288; lng = 79.4192; }
  else if (dist === 'warangal' || dist === 'hanumakonda') { lat = 17.9689; lng = 79.5941; }
  else if (dist === 'sri-potti-sriramulu-nellore' || dist === 'nellore') { lat = 14.4426; lng = 79.9865; }
  else if (dist === 'kakinada' || dist === 'east-godavari') { lat = 16.9891; lng = 82.2475; }
  else if (dist === 'kurnool') { lat = 15.8281; lng = 78.0373; }
  else if (dist === 'nizamabad') { lat = 18.6725; lng = 78.0941; }
  else if (dist === 'karimnagar') { lat = 18.4386; lng = 79.1288; }
  else if (dist === 'ysr-kadapa' || dist === 'kadapa') { lat = 14.4673; lng = 78.8242; }

  return {
    geoRegion: region,
    geoPlacename: placename,
    geoPosition: `${lat};${lng}`,
    icbm: `${lat}, ${lng}`,
    latitude: lat,
    longitude: lng
  };
}

function resolveSchemaGraph(ctx: {
  location?: UniversalLocationSummary;
  service?: ServiceDef;
  material?: MaterialDef;
  jewellery?: JewelleryDef;
  pageTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  breadcrumbs: { name: string; url: string }[];
  faqSet: { q: string; a: string }[];
  directAnswer: { question: string; directAnswer: string; explanation: string };
  pageArchetype: PageArchetype;
  geoInfo: ReturnType<typeof resolveGeoCoordinates>;
}): Record<string, any>[] {
  const graph: Record<string, any>[] = [];

  const locName = ctx.location?.displayName || 'Andhra Pradesh & Telangana';

  // 1. Organization / FinancialService / LocalBusiness
  graph.push({
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/icon.png`,
    telephone: [CONTACT_CONFIG.phone1Tel, CONTACT_CONFIG.phone2Tel],
    email: BRAND.email,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Instant Cash, Bank Transfer, IMPS, RTGS, UPI',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:30'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: ctx.geoInfo.geoRegion === 'IN-TG' ? 'Telangana' : 'Andhra Pradesh',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ctx.geoInfo.latitude,
      longitude: ctx.geoInfo.longitude
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: locName
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Andhra Pradesh'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Telangana'
      }
    ],
    knowsAbout: [
      'Cash for Gold',
      'Pledged Gold Loan Release',
      'Gold Loan Takeover',
      'Bank Gold Loan Settlement',
      'German XRF Spectrometer Purity Assay',
      'Silver Buying',
      'Diamond Valuation',
      'Live Gold Rate Calculation AP & TS'
    ],
    knowsLanguage: ['te-IN', 'en-IN', 'hi-IN'],
    award: 'Highest Rated Gold Buyer & Pledged Gold Release Provider in Andhra Pradesh & Telangana',
    slogan: BRAND.tagline,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2480',
      bestRating: '5',
      worstRating: '1'
    }
  });

  // Inject Localized Reviews Array into LocalBusiness & Standalone Review Objects for Google Search Console
  const matchedTestimonials = getTestimonialsForLocation({
    stateSlug: ctx.location?.stateSlug,
    districtSlug: ctx.location?.districtSlug,
    mandalSlug: ctx.location?.mandalSlug,
    limit: 10
  });

  const primaryOrgNode = graph.find(node => node['@type'] === 'FinancialService' || node['@type'] === 'LocalBusiness');
  if (primaryOrgNode && matchedTestimonials.length > 0) {
    primaryOrgNode.review = matchedTestimonials.map(t => {
      const urls = getTestimonialUrls(t);
      return {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: t.author
        },
        datePublished: '2026-01-15',
        reviewBody: t.story,
        name: t.title,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: t.rating,
          bestRating: 5,
          worstRating: 1
        },
        itemReviewed: {
          '@type': 'FinancialService',
          name: `Akshaya Gold Buyers - ${t.location}`,
          url: buildCanonicalUrl(urls.locationUrl)
        }
      };
    });
  }

  // Also push individual Review schema nodes
  matchedTestimonials.slice(0, 5).forEach(t => {
    const urls = getTestimonialUrls(t);
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Review',
      '@id': `${buildCanonicalUrl(urls.locationUrl)}#review-${t.id}`,
      author: {
        '@type': 'Person',
        name: t.author
      },
      datePublished: '2026-01-15',
      reviewBody: t.story,
      name: t.title,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1
      },
      itemReviewed: {
        '@type': 'FinancialService',
        name: `Akshaya Gold Buyers - ${t.location}`,
        url: buildCanonicalUrl(urls.locationUrl)
      }
    });
  });

  // 2. Specific Service Schema (if active service)
  if (ctx.service) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${ctx.canonicalUrl}#service`,
      name: `${ctx.service.name} in ${locName}`,
      serviceType: ctx.service.categoryGroup,
      provider: { '@id': `${SITE_URL}/#organization` },
      description: ctx.service.description,
      areaServed: {
        '@type': 'AdministrativeArea',
        name: locName
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Precious Metals & Gold Loan Release Services',
        itemListElement: (ctx.service.whatIsHandled || []).map((feat: string) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feat
          }
        }))
      }
    });
  }

  // 3. WebPage & Speakable Specification (AEO / Voice Search)
  graph.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': ctx.canonicalUrl,
    url: ctx.canonicalUrl,
    name: ctx.pageTitle,
    description: ctx.metaDescription,
    isPartOf: { '@id': `${SITE_URL}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.direct-answer-summary', '.faq-question', '.faq-answer']
    }
  });

  // 4. BreadcrumbList
  if (ctx.breadcrumbs.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: ctx.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: buildCanonicalUrl(crumb.url)
      }))
    });
  }

  // 5. FAQPage Schema (AEO / Answer Engine Optimization)
  if (ctx.faqSet.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: ctx.faqSet.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    });
  }

  return graph;
}
