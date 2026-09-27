/**
 * Akshaya Gold Buyers - Competitor Intelligence, Feature Matrix & Market Research Database
 * Researched for Andhra Pradesh & Telangana Gold-Buying, Pledged-Gold & Precious Metal Markets.
 */

export interface CompetitorProfile {
  id: string;
  brand: string;
  website: string;
  businessCategory: 'Category A - Gold Buyer Chain' | 'Category B - Gold-Loan NBFC' | 'Category C - Retail Jeweller' | 'Category D - Local Independent Buyer' | 'Category E - Regional Aggregator';
  state: 'Andhra Pradesh' | 'Telangana' | 'AP & Telangana';
  primaryCities: string[];
  keyLocalities: string[];
  physicalBranches: string;
  serviceAreas: string;
  goldBuying: boolean;
  oldGoldBuying: boolean;
  goldValuation: boolean;
  goldTestingMethod: string;
  pledgedGoldService: boolean;
  goldLoanSettlement: boolean;
  goldLoanTakeover: boolean;
  silverBuying: boolean;
  diamondServices: boolean;
  goldRateProvided: string;
  hasCalculator: boolean;
  appointmentSystem: boolean;
  whatsAppAvailable: boolean;
  phoneContact: string;
  googleBusinessPresence: string;
  reviewCount: string;
  reviewRating: string;
  pricingTransparency: 'High' | 'Moderate' | 'Low / Hidden Deductions' | string;
  uniqueFeatures: string[];
  weaknesses: string[];
  akshayaOpportunities: string[];
}

export const COMPETITOR_DATABASE: CompetitorProfile[] = [
  {
    id: 'attica-gold',
    brand: 'Attica Gold Company',
    website: 'atticagoldcompany.com',
    businessCategory: 'Category A - Gold Buyer Chain',
    state: 'AP & Telangana',
    primaryCities: ['Hyderabad', 'Secunderabad', 'Vijayawada', 'Visakhapatnam', 'Kurnool', 'Guntur'],
    keyLocalities: ['Kukatpally Y Junction', 'Dilsukhnagar Bus Depot', 'Ameerpet', 'Raj Vihar Kurnool', 'Benz Circle Vijayawada'],
    physicalBranches: 'Multiple commercial branches across South India',
    serviceAreas: 'Major urban centres',
    goldBuying: true,
    oldGoldBuying: true,
    goldValuation: true,
    goldTestingMethod: 'German XRF laser testing advertised; fast process',
    pledgedGoldService: true,
    goldLoanSettlement: true,
    goldLoanTakeover: false,
    silverBuying: true,
    diamondServices: false,
    goldRateProvided: 'Live displayed in branch; percentage deductions applied',
    hasCalculator: false,
    appointmentSystem: false,
    whatsAppAvailable: true,
    phoneContact: 'Central toll-free & local branches',
    googleBusinessPresence: 'Strong across major city pins',
    reviewCount: '5,000+ total across branches',
    reviewRating: '4.1 / 5.0',
    pricingTransparency: 'Moderate',
    uniqueFeatures: ['High brand recall in South India', 'Extensive street billboards'],
    weaknesses: [
      'No interactive pledged-gold loan settlement calculator online',
      'Generic website content with minimal localized district information',
      'No transparent fee breakdown explaining net payout before branch visit',
      'Lack of native Telugu educational guides on gold loan auction prevention'
    ],
    akshayaOpportunities: [
      'Provide interactive Pledged Gold Calculator showing exact surplus payout before visiting branch',
      'Publish genuine Rayalaseema hub pages (Kurnool, Nandyal) with verified physical locations',
      'Offer dual-language English + Telugu educational content for local AP/Telangana families'
    ]
  },
  {
    id: 'white-gold',
    brand: 'White Gold',
    website: 'whitegold.money',
    businessCategory: 'Category A - Gold Buyer Chain',
    state: 'AP & Telangana',
    primaryCities: ['Hyderabad', 'Secunderabad', 'Vijayawada'],
    keyLocalities: ['Kukatpally', 'Dilsukhnagar Moosarambagh', 'Madhapur', 'Himayatnagar'],
    physicalBranches: 'Corporate branch network with modern interiors',
    serviceAreas: 'Metropolitan Hyderabad and select AP cities',
    goldBuying: true,
    oldGoldBuying: true,
    goldValuation: true,
    goldTestingMethod: 'Computerized density meter and XRF spectrometer',
    pledgedGoldService: true,
    goldLoanSettlement: true,
    goldLoanTakeover: false,
    silverBuying: true,
    diamondServices: false,
    goldRateProvided: 'Live market rate displayed on site',
    hasCalculator: true,
    appointmentSystem: true,
    whatsAppAvailable: true,
    phoneContact: 'Central corporate helpline',
    googleBusinessPresence: 'Active with branded store photos',
    reviewCount: '3,000+ reviews',
    reviewRating: '4.4 / 5.0',
    pricingTransparency: 'Moderate',
    uniqueFeatures: ['Clean modern retail storefront aesthetic', 'Corporate customer service'],
    weaknesses: [
      'Minimal presence outside Hyderabad in tier-2/tier-3 cities like Kurnool, Nandyal, Kadapa',
      'Online calculator only gives rough gross estimate without loan interest & bank fee modeling',
      'Little to no structured AEO/GEO entity data for modern AI search engines'
    ],
    akshayaOpportunities: [
      'Deep regional presence in Kurnool and Nandyal alongside Hyderabad',
      'Advanced Pledged-Gold Calculator with lender presets (Muthoot, Manappuram, SBI, Grameena Banks)',
      '100% transparent 0% melting loss guarantee with Class II digital gram readouts'
    ]
  },
  {
    id: 'muthoot-gold-point',
    brand: 'Muthoot Gold Point',
    website: 'muthootgoldpoint.com',
    businessCategory: 'Category A - Gold Buyer Chain',
    state: 'AP & Telangana',
    primaryCities: ['Hyderabad', 'Vijayawada'],
    keyLocalities: ['Kukatpally Metro Pillar A825', 'Punjagutta', 'MG Road Vijayawada'],
    physicalBranches: 'Dedicated gold-buying units operated by Muthoot Pappachan Group',
    serviceAreas: 'Major tier-1 cities',
    goldBuying: true,
    oldGoldBuying: true,
    goldValuation: true,
    goldTestingMethod: 'Ultrasonic jewelry cleaning followed by certified XRF laser analysis',
    pledgedGoldService: false,
    goldLoanSettlement: false,
    goldLoanTakeover: false,
    silverBuying: false,
    diamondServices: false,
    goldRateProvided: 'Multi-city spot rates published daily',
    hasCalculator: false,
    appointmentSystem: true,
    whatsAppAvailable: true,
    phoneContact: 'National helpline',
    googleBusinessPresence: 'Strong institutional trust',
    reviewCount: '2,500+ reviews',
    reviewRating: '4.3 / 5.0',
    pricingTransparency: 'High for physical items; does not handle external pledged loans',
    uniqueFeatures: ['Established NBFC conglomerate brand backing', 'Ultrasonic cleaning protocol'],
    weaknesses: [
      'Does NOT assist customers in releasing pledged gold from other banks/NBFCs',
      'Strict corporate bureaucracy; slow turnaround for emergency liquidity',
      'No service in Kurnool, Nandyal, or surrounding Rayalaseema mandals'
    ],
    akshayaOpportunities: [
      'Direct customer assistance to release pledged gold from Muthoot itself and other lenders',
      'Immediate cash or IMPS settlement within 15-20 minutes',
      'Local physical presence in Kurnool (Park Road) and Nandyal (Sanjeeva Nagar)'
    ]
  },
  {
    id: 'andhra-gold-nandyal',
    brand: 'Andhra Gold Nandyal',
    website: 'andhragold.com',
    businessCategory: 'Category D - Local Independent Buyer',
    state: 'Andhra Pradesh',
    primaryCities: ['Nandyal', 'Kurnool', 'Allagadda', 'Banaganapalle'],
    keyLocalities: ['Gandhi Chowk Nandyal', 'Sanjeeva Nagar', 'Atmakur Bus Stand area'],
    physicalBranches: 'Local shop front in Nandyal',
    serviceAreas: 'Nandyal and surrounding towns',
    goldBuying: true,
    oldGoldBuying: true,
    goldValuation: true,
    goldTestingMethod: 'Traditional acid stone testing combined with digital scale',
    pledgedGoldService: true,
    goldLoanSettlement: true,
    goldLoanTakeover: false,
    silverBuying: true,
    diamondServices: false,
    goldRateProvided: 'Quoted on phone/in person',
    hasCalculator: false,
    appointmentSystem: false,
    whatsAppAvailable: true,
    phoneContact: 'Local mobile numbers',
    googleBusinessPresence: 'Local JustDial & Google Maps listings',
    reviewCount: '120+ reviews',
    reviewRating: '4.0 / 5.0',
    pricingTransparency: 'Low / Subjective melting loss deduction',
    uniqueFeatures: ['Local familiar face for Nandyal residents'],
    weaknesses: [
      'Use of outdated destructive touchstone acid testing causing ornament damage',
      'No formal digital purity certificates or live MCX benchmark tracking',
      'Unstructured website without security, modern calculators, or verified corporate compliance'
    ],
    akshayaOpportunities: [
      'Bring German XRF laser spectrometry to Nandyal with zero damage to customer ornaments',
      'Class II certified 0.001g digital scales with visible displays',
      'Professional receipt and computerized purity certificate for every transaction'
    ]
  },
  {
    id: 'vk-gold-kurnool',
    brand: 'VK Gold Buyers',
    website: 'bestgoldbuyersinhyderabad.com/kurnool',
    businessCategory: 'Category D - Local Independent Buyer',
    state: 'AP & Telangana',
    primaryCities: ['Kurnool', 'Hyderabad'],
    keyLocalities: ['Raj Vihar Circle Kurnool', 'Park Road', 'Collectorate Complex area'],
    physicalBranches: 'Small branch in Kurnool & Hyderabad desk',
    serviceAreas: 'Kurnool urban area and Hyderabad',
    goldBuying: true,
    oldGoldBuying: true,
    goldValuation: true,
    goldTestingMethod: 'XRF testing advertised on mobile',
    pledgedGoldService: true,
    goldLoanSettlement: true,
    goldLoanTakeover: false,
    silverBuying: true,
    diamondServices: false,
    goldRateProvided: 'Daily bulletin',
    hasCalculator: false,
    appointmentSystem: false,
    whatsAppAvailable: true,
    phoneContact: 'Mobile phone',
    googleBusinessPresence: 'Basic Google Maps pin',
    reviewCount: '80+ reviews',
    reviewRating: '3.9 / 5.0',
    pricingTransparency: 'Moderate',
    uniqueFeatures: ['Doorstep cash collection advertised'],
    weaknesses: [
      'Weak web presence with poorly structured pages',
      'No clear explanation of statutory KYC and AML compliance',
      'No online estimation tools for loan closure surplus'
    ],
    akshayaOpportunities: [
      'Permanent, verified physical branch on Park Road, Kurnool with customer lounge',
      'Transparent live calculation showing live bullion rate vs weight',
      'Direct official bank escort service with full security'
    ]
  },
  {
    id: 'muthoot-finance-lender',
    brand: 'Muthoot Finance / Manappuram Finance',
    website: 'muthootfinance.com / manappuram.com',
    businessCategory: 'Category B - Gold-Loan NBFC',
    state: 'AP & Telangana',
    primaryCities: ['All 59 Districts of AP & Telangana'],
    keyLocalities: ['Branches in every major town and mandal'],
    physicalBranches: 'Over 2,000 branches across AP & Telangana',
    serviceAreas: 'Statewide',
    goldBuying: false,
    oldGoldBuying: false,
    goldValuation: true,
    goldTestingMethod: 'Internal appraiser stone rub & chemical test for loan LTV (up to 75%)',
    pledgedGoldService: false,
    goldLoanSettlement: false,
    goldLoanTakeover: true,
    silverBuying: false,
    diamondServices: false,
    goldRateProvided: 'LTV rate determined by RBI guidelines',
    hasCalculator: true,
    appointmentSystem: false,
    whatsAppAvailable: false,
    phoneContact: 'Customer care center',
    googleBusinessPresence: 'Extensive branch listings',
    reviewCount: 'Thousands',
    reviewRating: '3.7 / 5.0 (High customer complaints regarding compounding interest and auction notices)',
    pricingTransparency: 'Complex interest slabs ranging from 12% to 28%+ with penal interest',
    uniqueFeatures: ['Quick disbursal of collateralized gold loans'],
    weaknesses: [
      'High monthly compounding interest rates that escalate if unpaid for 6-12 months',
      'Auction notices served when principal + interest exceeds 85-90% of collateral value',
      'Customers lose 20-30% of their equity in distress auctions'
    ],
    akshayaOpportunities: [
      'Save customers from auction risk: Akshaya clears outstanding dues directly at lender branch',
      'Retrieve customer gold ornaments safely, evaluate at full live bullion market rate',
      'Pay remaining surplus amount immediately to customer in cash/IMPS'
    ]
  }
];

export const COMPETITOR_FEATURE_MATRIX = [
  {
    feature: 'German XRF Laser Spectrometry (0% Melting Loss)',
    akshayaGold: 'Standard in all branches (30-sec non-destructive scan)',
    atticaGold: 'Available in major branches',
    whiteGold: 'Available in major branches',
    muthootGoldPoint: 'Available',
    localPawnShops: 'Rare (Destructive touchstone acid test)',
    marketGapImpact: 'CRITICAL: Protects customer ornaments from 10-20% unfair melt deductions'
  },
  {
    feature: 'Interactive Pledged Gold Loan Settlement Calculator',
    akshayaGold: 'Built-in real-time calculator with lender presets & auction risk warning',
    atticaGold: 'Not available online',
    whiteGold: 'Basic gold calculator only',
    muthootGoldPoint: 'Not available',
    localPawnShops: 'None',
    marketGapImpact: 'HIGH: Allows distressed borrowers to calculate cash surplus before visiting'
  },
  {
    feature: 'Physical Branches in Kurnool & Nandyal',
    akshayaGold: 'Verified branches: Park Road (Kurnool) & Sanjeeva Nagar (Nandyal)',
    atticaGold: 'Limited Rayalaseema desks',
    whiteGold: 'Hyderabad only',
    muthootGoldPoint: 'Hyderabad / Vijayawada only',
    localPawnShops: 'Unorganized standalone shops',
    marketGapImpact: 'HIGH: Established organized gold buyer with transparent corporate standards'
  },
  {
    feature: 'Telugu + English Bilingual Content & Support',
    akshayaGold: 'Complete dual-language customer guides, terms & loan foreclosure guidance',
    atticaGold: 'English only with auto-translations',
    whiteGold: 'English only',
    muthootGoldPoint: 'English only',
    localPawnShops: 'Telugu verbal only, no documentation',
    marketGapImpact: 'HIGH: Builds authentic local trust across AP & Telangana districts'
  },
  {
    feature: 'Direct Bank / NBFC Branch Escort Assistance',
    akshayaGold: 'Dedicated executive accompanies customer, settles loan on spot, retrieves gold',
    atticaGold: 'Available upon appointment',
    whiteGold: 'Select areas',
    muthootGoldPoint: 'Does not offer loan clearance',
    localPawnShops: 'Unsafe third-party cash loans',
    marketGapImpact: 'CRITICAL: Eliminates risk of customer handling large settlement cash alone'
  },
  {
    feature: 'AI-Readable Structured Knowledge (llms.txt + Schemas)',
    akshayaGold: 'Complete llms.txt, llms-full.txt & Organization/LocalBusiness/FinancialProduct schema',
    atticaGold: 'None',
    whiteGold: 'Basic Schema only',
    muthootGoldPoint: 'Basic Schema only',
    localPawnShops: 'None',
    marketGapImpact: 'HIGH: Maximum discoverability on Google Gemini, ChatGPT, Perplexity'
  }
];

export const SEARCH_INTENT_MAP = [
  {
    intentCategory: 'Pledged Gold / Loan Foreclosure',
    highIntentKeywords: [
      'pledged gold release in Kurnool',
      'release gold loan Nandyal',
      'gold loan settlement Hyderabad',
      'sell pledged gold Muthoot Manappuram',
      'close gold loan and get cash'
    ],
    customerProblem: 'High interest compounding, fear of auction notice, inability to arrange lumpsum cash to close bank loan.',
    akshayaSolution: 'We calculate net value, accompany customer to bank, pay off lender dues directly, retrieve ornaments, and pay cash surplus.'
  },
  {
    intentCategory: 'Cash for Old / Broken Gold',
    highIntentKeywords: [
      'sell old gold for cash Hyderabad',
      'gold buyers near me Kukatpally',
      'sell broken gold jewellery Kurnool',
      'best gold buyers in Nandyal',
      'cash for gold without bill'
    ],
    customerProblem: 'Traditional jewellers refuse old/broken gold without receipt or deduct 15-25% melting loss.',
    akshayaSolution: 'Instant XRF elemental analysis testing karat with 0% melt loss, digital gram weighing, instant IMPS/cash.'
  },
  {
    intentCategory: 'Live Gold Rate & Valuation Check',
    highIntentKeywords: [
      'today 22k gold rate Kurnool',
      'gold valuation calculator Hyderabad',
      'live 916 gold selling price Nandyal',
      'how much cash will I get for 10 grams gold'
    ],
    customerProblem: 'Discrepancy between retail purchase rate vs actual scrap/buying rate quoted by dealers.',
    akshayaSolution: 'Live bullion spot pricing updated transparently with clear breakdown of purity percentage and net weight.'
  },
  {
    intentCategory: 'Local Branch & Doorstep Assistance',
    highIntentKeywords: [
      'gold buyers Park Road Kurnool',
      'gold buyers Sanjeeva Nagar Nandyal',
      'gold buyers Somajiguda Hyderabad',
      'doorstep gold buyer Visakhapatnam',
      'gold buying service Vijayawada'
    ],
    customerProblem: 'Customer wants a safe, certified, air-conditioned physical branch nearby rather than shady back-alley pawn shops.',
    akshayaSolution: 'Modern corporate branch locations with CCTV, customer-facing digital scales, private cabins, and certified assayers.'
  }
];

export const LENDER_DATABASE = [
  {
    id: 'muthoot-finance',
    name: 'Muthoot Finance',
    category: 'NBFC Gold Loan',
    interestRange: '12% – 27% p.a. (compounding monthly after default)',
    auctionTriggerNotice: 'Notice issued typically after 9-12 months of unpaid interest or LTV breach',
    procedureToRelease: [
      'Obtain official Loan Closure Statement / Foreclosure Slip from lender branch',
      'Verify exact principal + accrued interest + penal charges',
      'Akshaya executive accompanies customer with exact settlement funds',
      'Dues cleared directly at cashier counter with official receipt',
      'Pledged jewellery packet unsealed and verified in customer presence',
      'Final XRF testing at Akshaya branch and instant surplus payout'
    ],
    customerWarning: 'Compounding penal interest can consume 20-30% of gold value if delayed past 12 months.'
  },
  {
    id: 'manappuram-finance',
    name: 'Manappuram Finance',
    category: 'NBFC Gold Loan',
    interestRange: '14% – 28% p.a. (short tenure 3-6 month renewals)',
    auctionTriggerNotice: 'Strict auction alerts starting from 90 days after loan tenure expiry',
    procedureToRelease: [
      'Check loan balance online on lender portal or obtain physical branch ledger',
      'Akshaya team assists customer in scheduling branch closure appointment',
      'Loan closed via instant cashier payment',
      'Jewellery retrieved, weighed on certified balance, and surplus transferred'
    ],
    customerWarning: 'Short-tenure products face rapid auction notices. Immediate closure protects customer equity.'
  },
  {
    id: 'iifl-finance',
    name: 'IIFL Finance',
    category: 'NBFC Gold Loan',
    interestRange: '11% – 24% p.a.',
    auctionTriggerNotice: 'Formal notice after 6-9 months of non-serviced interest',
    procedureToRelease: [
      'Procure foreclosure statement with customer loan number',
      'Accompany customer to IIFL branch for on-counter loan settlement',
      'Packet inspection and direct balance payment to customer'
    ],
    customerWarning: 'Ensure all foreclosure charges are itemized to avoid paying unverified fees.'
  },
  {
    id: 'nationalized-banks',
    name: 'Public & Private Banks (SBI, Canara, Andhra Bank/UBI, HDFC, ICICI)',
    category: 'Commercial Banks',
    interestRange: '8.5% – 14% p.a. (Agricultural / Bullet Repayment Loans)',
    auctionTriggerNotice: 'Notice issued after 12-18 months of agricultural loan non-renewal',
    procedureToRelease: [
      'Visit home branch with customer original loan pawn ticket & KYC',
      'Branch manager verifies loan ledger and issues pay-in slip',
      'Full settlement paid into bank branch account',
      'Bank appraiser returns sealed jewellery packet to customer',
      'Immediate valuation and surplus settlement with Akshaya Gold Buyers'
    ],
    customerWarning: 'Bullet repayment agricultural gold loans must be renewed annually to prevent recovery notices.'
  },
  {
    id: 'grameena-banks',
    name: 'Grameena & Cooperative Banks (Andhra Pragathi, Telangana Grameena)',
    category: 'Regional Rural Banks',
    interestRange: '9% – 16% p.a.',
    auctionTriggerNotice: 'Local recovery committee notices after crop cycle or loan maturity',
    procedureToRelease: [
      'Locate branch pawn ticket and passbook',
      'Akshaya coordinator visits rural branch with customer',
      'Direct counter settlement and prompt retrieval of gold jewellery'
    ],
    customerWarning: 'Cooperative banks hold periodic auctions in village centers; timely release protects family heirloom jewellery.'
  }
];
