export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  summary: string;
  description: string;
  targetMetals: string[];
  features: string[];
  processSteps: string[];
  faqs: { q: string; a: string }[];
  searchKeywords: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'sell-gold',
    slug: 'sell-gold',
    name: 'Sell Gold for Instant Cash',
    shortTitle: 'Sell Gold',
    tagline: 'Get maximum market value for your gold with instant spot payment in minutes.',
    iconName: 'Coins',
    summary: 'Direct gold selling service providing live bullion benchmark rates with 100% transparent testing and direct bank transfer or cash payout.',
    description: 'Akshaya Gold Buyers provides a transparent gold selling experience across Andhra Pradesh and Telangana. We evaluate your gold in front of you using advanced XRF Laser Spectrometry without any damaging acid or melting loss. Receive direct settlement directly to your bank account or cash.',
    targetMetals: ['24K Pure Gold', '22K 916 Hallmarked Gold', '20K Gold', '18K Gold', '14K Gold'],
    features: [
      'Live Bullion Market Linked Rate calculation',
      'Non-destructive Precision XRF Purity Testing',
      'Certified high-precision digital weighing scale',
      'Direct payout via IMPS, UPI, NEFT or Cash',
      'Transparent net weight verification'
    ],
    processSteps: [
      'Bring your gold items along with a valid Government ID (Aadhaar/PAN/Voter ID).',
      'Our experts perform laser XRF spectrometer purity analysis right before your eyes.',
      'We measure the net weight on certified digital scales with 0.001g precision.',
      'You receive an itemized valuation report and immediate fund transfer within 5 minutes.'
    ],
    faqs: [
      {
        q: 'What is the current gold selling rate at Akshaya Gold Buyers?',
        a: 'We link our rates directly to live MCX and international bullion market rates updated in real-time for 24K, 22K (916), 18K, and 14K purities to ensure you get the absolute highest payout.'
      },
      {
        q: 'What documents are required to sell gold in Andhra Pradesh and Telangana?',
        a: 'As per statutory compliance and KYC norms, please bring any original Government-issued photo ID (Aadhaar Card, PAN Card, Voter ID, or Passport) and your bank account details for instant electronic transfer.'
      }
    ],
    searchKeywords: ['sell gold', 'gold buyers near me', 'sell gold for cash', 'gold selling', 'best gold buyers', 'cash for gold']
  },
  {
    id: 'gold-jewellery-buyers',
    slug: 'gold-jewellery-buyers',
    name: 'Gold Jewellery Buyers',
    shortTitle: 'Jewellery Buying',
    tagline: 'Sell bangles, necklaces, chains, rings, and antique gold jewellery at top market prices.',
    iconName: 'Gem',
    summary: 'Transparent buying of all types of hallmarked and non-hallmarked gold ornaments with accurate gross vs net weight deduction for embedded stones.',
    description: 'Whether you have 916 KDM jewellery, traditional temple jewellery, ancestral ornaments, bridal sets, or everyday wear gold chains and earrings, Akshaya Gold Buyers offers precise valuation. We accurately calculate net gold weight by deducting enamel and synthetic stones transparently.',
    targetMetals: ['916 KDM Gold Jewellery', 'Hallmark Ornaments', 'Temple Jewellery', 'Chains & Bangles', 'Antique Gold'],
    features: [
      'Transparent stone weight deduction (no unfair heavy deductions)',
      'Accurate carat measurement across 14K to 24K ornaments',
      'Acceptance of all jewellery styles regardless of age or condition',
      'Highest value paid for 916 hallmark gold'
    ],
    processSteps: [
      'Physical inspection of ornaments for hallmarks, stones, and embellishments.',
      'XRF spectrometry scanning to detect precise karat composition.',
      'Gross weight and stone deduction calculations presented openly on screen.',
      'Immediate instant payment clearance.'
    ],
    faqs: [
      {
        q: 'Can I sell gold jewellery without original purchase bills or invoices?',
        a: 'Yes, original purchase bills are helpful but not mandatory. With a valid Government photo ID and proof of ownership/KYC verification, you can sell your personal gold jewellery securely.'
      }
    ],
    searchKeywords: ['gold jewellery buyers', 'sell gold jewellery', 'gold ornament buyers', 'sell old bangles', 'sell gold chain']
  },
  {
    id: 'old-gold-buyers',
    slug: 'old-gold-buyers',
    name: 'Old & Used Gold Buyers',
    shortTitle: 'Old Gold Buying',
    tagline: 'Turn unused, antique, or dated gold ornaments into liquid funds instantly.',
    iconName: 'Sparkles',
    summary: 'Specialized evaluation of heritage, ancestral, and old gold ornaments ensuring you get true gold value regardless of design vintage or hallmark presence.',
    description: 'Old ornaments from decades ago often lack modern BIS hallmark stamps, but they still carry authentic precious gold value. Akshaya Gold Buyers uses laboratory-grade XRF spectrometry to verify exact gold purity without needing to melt or damage your items.',
    targetMetals: ['Old 22K Ornaments', 'Ancestral Gold', 'Non-hallmarked Gold', 'Traditional Gold Coins'],
    features: [
      'No devaluation for outdated or traditional designs',
      'Instant scientific purity detection on non-hallmark gold',
      'Transparent valuation without melting loss',
      'Complete privacy and safe valuation environment'
    ],
    processSteps: [
      'Non-destructive testing of old ornaments.',
      'Detailed karat analysis per item.',
      'Exact weight verification on calibrated digital scales.',
      'Spot settlement.'
    ],
    faqs: [
      {
        q: 'How do you verify the purity of old non-hallmark gold?',
        a: 'We use non-destructive XRF Spectrometry. It analyzes the elemental composition of gold, silver, copper, and zinc with high precision in customer presence without damaging the ornament.'
      }
    ],
    searchKeywords: ['old gold buyers', 'sell old gold', 'used gold buyers', 'old gold jewellery buyers', 'antique gold buyer']
  },
  {
    id: 'broken-scrap-gold',
    slug: 'broken-scrap-gold',
    name: 'Broken & Scrap Gold Buyers',
    shortTitle: 'Broken Gold',
    tagline: 'Broken chains, single earrings, bent rings, and scrap gold purchased at full metal value.',
    iconName: 'ShieldAlert',
    summary: 'Sell broken, damaged, deformed, or scrap gold jewellery without any damage penalties or melting weight loss.',
    description: 'Do you have mismatched earrings, snapped chains, bent rings, or dental/scrap gold? Traditional jewellers often charge heavy melting or wastage fees. Akshaya Gold Buyers pays full spot value based strictly on pure metal content without unfair deductions.',
    targetMetals: ['Broken Chains', 'Single Unmatched Earrings', 'Bent Bangles', 'Scrap Gold Pieces', 'Dental Gold'],
    features: [
      'Zero penalty for broken or deformed condition',
      'No melting loss deduction',
      'Full value based strictly on verified karat and weight',
      'Instant liquidation of scrap gold'
    ],
    processSteps: [
      'We sort your broken items and group them by estimated karat.',
      'XRF spectrometer verifies purity of each piece.',
      'Accurate computerized digital weighing.',
      'Immediate fund transfer directly to your account.'
    ],
    faqs: [
      {
        q: 'Do you cut charges for broken or damaged gold items?',
        a: 'No. Gold value is determined solely by weight and purity. We do not deduct any making charges or damage penalties.'
      }
    ],
    searchKeywords: ['broken gold buyers', 'gold scrap buyers', 'sell damaged gold', 'scrap gold price', 'damaged jewellery buyers']
  },
  {
    id: 'gold-coins-bars',
    slug: 'gold-coins-bars',
    name: 'Gold Coin & Bar / Biscuit Buyers',
    shortTitle: 'Coins & Bars',
    tagline: 'Sell 24K (999 purity) and 22K (916 purity) gold coins, minted bars, and biscuits at live spot rate.',
    iconName: 'Award',
    summary: 'Direct institutional and retail liquidation of gold coins, bank minted bars, Swiss bars, MMTC-PAMP, and refinery biscuits with minimal spread.',
    description: 'Banks in India will sell you gold coins and bars but are legally prohibited from buying them back. Akshaya Gold Buyers provides instant repurchase and liquidity for all minted coins, bank bars, sovereign coins, MMTC-PAMP bars, and gold biscuits at live market rates.',
    targetMetals: ['24K 999.9 Fine Gold Bars', '24K MMTC-PAMP Coins', '22K Sovereign Gold Coins', 'Refinery Gold Biscuits'],
    features: [
      'Highest spot payout for 999 and 999.9 purity fine gold',
      'Instant redemption for bank minted coins and blister-packed bars',
      'Verification without damaging the security blister pack when possible',
      'High transaction volume capacity with immediate RTGS/IMPS'
    ],
    processSteps: [
      'Visual examination of mint marks, weight certificates, and assay packaging.',
      'Purity and weight confirmation on certified laboratory-grade scale.',
      'Rate lock against live bullion ticker.',
      'Instant electronic settlement.'
    ],
    faqs: [
      {
        q: 'Can I sell bank-purchased gold coins at Akshaya Gold Buyers?',
        a: 'Yes! While banks do not buy back coins they sell, Akshaya Gold Buyers purchases all bank-issued and certified gold coins at top market rates with instant payment.'
      }
    ],
    searchKeywords: ['gold coin buyers', 'sell gold bars', 'gold biscuit buyers', 'sell 24k gold coin', 'mmtc gold coin selling']
  },
  {
    id: 'pledged-gold-buyers',
    slug: 'pledged-gold-buyers',
    name: 'Pledged Gold Buyers & Loan Settlement',
    shortTitle: 'Pledged Gold Buyers',
    tagline: 'We clear your outstanding loan with banks or financiers, release your pledged jewellery, and pay you the balance cash.',
    iconName: 'LockKeyhole',
    summary: 'Avoid auction loss or high compounding interest. We assist in closing gold loans from Muthoot, Manappuram, IIFL, SBI, and local pawnbrokers, paying the remaining surplus to you.',
    description: 'If you have pledged gold jewellery in a bank, NBFC (Muthoot Finance, Manappuram Finance, IIFL, Rupeek), or with local financiers, escalating interest can risk auction. Our legal and financial team accompanies you, settles the pending principal and interest directly, safely retrieves your ornaments, evaluates them transparently, and pays you the remaining profit immediately.',
    targetMetals: ['Pledged Ornaments in NBFCs', 'Bank Gold Loans', 'Private Pawned Gold', 'Overdue Loan Jewellery'],
    features: [
      '100% legal, transparent, and hassle-free loan clearance process',
      'Our representative accompanies you to the bank/financier branch',
      'We pay the full loan settlement amount directly to the lender',
      'You get the remaining cash surplus on the spot after fair valuation',
      'Prevent auction and save your credit score'
    ],
    processSteps: [
      'Bring your gold loan pledge receipt/statement showing weight, purity, and outstanding balance.',
      'We calculate the current market value vs outstanding loan and give you an upfront surplus estimate.',
      'Our executive accompanies you to the financial institution and clears the dues.',
      'Once the gold is released, we perform final XRF verification and transfer the remaining balance to you.'
    ],
    faqs: [
      {
        q: 'How does the pledged gold buyers release process work?',
        a: 'We review your pledge receipt, determine the market value of your pledged gold, provide funds to clear the loan at your bank/NBFC branch, collect the gold with you, and pay you the difference immediately.'
      },
      {
        q: 'Which banks and NBFC loans can you help release?',
        a: 'We assist with gold loan closures across Muthoot Finance, Manappuram Finance, IIFL, SBI, HDFC, ICICI, Axis Bank, Andhra Bank/Union Bank, Canara Bank, and authorized cooperative banks.'
      }
    ],
    searchKeywords: ['pledged gold buyers', 'gold loan closure', 'release pledged gold', 'gold loan takeover', 'muthoot gold loan release']
  },
  {
    id: 'pledged-gold-release',
    slug: 'pledged-gold-release',
    name: 'Pledged Gold & Gold Loan Closure Assistance',
    shortTitle: 'Pledged Gold Release',
    tagline: 'We clear your outstanding loan with banks or financiers, release your pledged jewellery, and pay you the balance cash.',
    iconName: 'LockKeyhole',
    summary: 'Avoid auction loss or high compounding interest. We assist in closing gold loans from Muthoot, Manappuram, IIFL, SBI, and local pawnbrokers, paying the remaining surplus to you.',
    description: 'If you have pledged gold jewellery in a bank, NBFC (Muthoot Finance, Manappuram Finance, IIFL, Rupeek), or with local financiers, escalating interest can risk auction. Our legal and financial team accompanies you, settles the pending principal and interest directly, safely retrieves your ornaments, evaluates them transparently, and pays you the remaining profit immediately.',
    targetMetals: ['Pledged Ornaments in NBFCs', 'Bank Gold Loans', 'Private Pawned Gold', 'Overdue Loan Jewellery'],
    features: [
      '100% legal, transparent, and hassle-free loan clearance process',
      'Our representative accompanies you to the bank/financier branch',
      'We pay the full loan settlement amount directly to the lender',
      'You get the remaining cash surplus on the spot after fair valuation',
      'Prevent auction and save your credit score'
    ],
    processSteps: [
      'Bring your gold loan pledge receipt/statement showing weight, purity, and outstanding balance.',
      'We calculate the current market value vs outstanding loan and give you an upfront surplus estimate.',
      'Our executive accompanies you to the financial institution and clears the dues.',
      'Once the gold is released, we perform final XRF verification and transfer the remaining balance to you.'
    ],
    faqs: [
      {
        q: 'How does the pledged gold release process work?',
        a: 'We review your pledge receipt, determine the market value of your pledged gold, provide funds to clear the loan at your bank/NBFC branch, collect the gold with you, and pay you the difference immediately.'
      },
      {
        q: 'Which banks and NBFC loans can you help release?',
        a: 'We assist with gold loan closures across Muthoot Finance, Manappuram Finance, IIFL, SBI, HDFC, ICICI, Axis Bank, Andhra Bank/Union Bank, Canara Bank, and authorized cooperative banks.'
      }
    ],
    searchKeywords: ['pledged gold buyers', 'gold loan closure', 'release pledged gold', 'gold loan takeover', 'muthoot gold loan release']
  },
  {
    id: 'pledged-gold-takeover',
    slug: 'pledged-gold-takeover',
    name: 'Pledged Gold Takeover Service',
    shortTitle: 'Pledged Gold Takeover',
    tagline: 'High interest rate gold loan takeover with instant debt relief and surplus payout.',
    iconName: 'ArrowRightLeft',
    summary: 'Tired of paying exorbitant monthly interest on gold loans? We take over high-interest pledged loans from private financiers, pawnbrokers, and NBFCs.',
    description: 'Gold loans with compounding interest rates from private money lenders or NBFCs can trap borrowers in never-ending EMI cycles. Our Pledged Gold Takeover service steps in to settle the entire debt directly with the lending institution. After safely retrieving the gold ornaments, we value the fine gold content at live bullion rates and pay the entire surplus equity to you immediately.',
    targetMetals: ['High-Interest Private Loans', 'NBFC Overdue Accounts', 'Pawnshop Pledged Ornaments', 'Auction-Notice Gold'],
    features: [
      'Stop compounding interest and avoid default auction penalties',
      'Full outstanding principal + interest cleared directly by Akshaya Gold Buyers team',
      'Immediate cash/IMPS transfer of the equity surplus difference',
      'Doorstep assistance and bank branch accompaniment'
    ],
    processSteps: [
      'Share your pledge receipt or foreclosure balance statement.',
      'We calculate the surplus value based on current live gold prices.',
      'Our officer visits the lender location alongside you to clear the settlement.',
      'Jewellery is released, weighed, verified with German XRF, and balance cash is credited.'
    ],
    faqs: [
      {
        q: 'What is a pledged gold takeover?',
        a: 'Pledged gold takeover is a financial service where Akshaya Gold Buyers settles your pending loan dues directly at your bank or NBFC, takes custody of the released gold on your behalf, and pays you the remaining net profit value immediately.'
      },
      {
        q: 'Can you stop an impending gold loan auction?',
        a: 'Yes, if you have received an auction notice from your lender, contact our helpline immediately. We can fast-track the foreclosure settlement before the auction date.'
      }
    ],
    searchKeywords: ['pledged gold takeover', 'gold loan takeover', 'settle gold loan', 'stop gold auction', 'payoff pledged gold']
  },
  {
    id: 'pledged-gold-transfer',
    slug: 'pledged-gold-transfer',
    name: 'Pledged Gold Transfer & Loan Refinance Assistance',
    shortTitle: 'Pledged Gold Transfer',
    tagline: 'Transfer your gold loan to lower-interest banking institutions or liquidate with top spot valuation.',
    iconName: 'RefreshCw',
    summary: 'Transfer or liquidate gold loans seamlessly across Andhra Pradesh and Telangana with full documentation support.',
    description: 'Whether you want to transfer your gold loan between banks for a lower interest rate or liquidate part of your pledged ornaments to close the loan permanently, Akshaya Gold Buyers provides end-to-end facilitation, spot clearance, and instant liquidity.',
    targetMetals: ['Bank Gold Loans', 'Cooperative Society Pledges', 'NBFC Gold Accounts'],
    features: [
      'Assistance in calculating optimal loan foreclosure vs transfer value',
      'Zero upfront fees — loan dues paid upfront by Akshaya Gold Buyers',
      'Protection against hidden bank foreclosure penalties',
      'Complete legal documentation and official payment vouchers'
    ],
    processSteps: [
      'Bring loan statement showing current principal and daily accrued interest.',
      'Receive transparent options for partial liquidation or total closure.',
      'Bank dues paid on the spot with Akshaya Gold Buyers corporate banking clearance.',
      'Immediate settlement of surplus funds to your bank account.'
    ],
    faqs: [
      {
        q: 'Can I release gold from one bank and sell only a portion of it?',
        a: 'Yes. We can settle the entire loan, buy back only the quantity of gold required to cover the loan amount plus a small fee, and return the remaining gold ornaments to you.'
      }
    ],
    searchKeywords: ['pledged gold transfer', 'gold loan transfer', 'transfer gold loan to bank', 'gold refinance']
  },
  {
    id: 'gold-exchange',
    slug: 'gold-exchange',
    name: 'Instant Gold Exchange & Liquidity',
    shortTitle: 'Gold Exchange',
    tagline: 'Convert old jewellery directly into instant cash or 24K pure bullion coins without retail showroom cuts.',
    iconName: 'Coins',
    summary: 'Avoid heavy retail showroom deductions (20%-35% wastage & making charges) by exchanging your gold for 100% fair bullion value or liquid funds.',
    description: 'When exchanging old jewellery at conventional jewellery shops, jewellers often deduct up to 15-20% for wastage and melting loss. Akshaya Gold Buyers offers 0% melting deduction using German XRF technology, allowing you to convert your old gold directly into bank transfer cash or 999 pure coins at market rates.',
    targetMetals: ['Old 22K/18K Jewellery', 'Hallmark Ornaments', 'Coins & Bullion'],
    features: [
      '0% Melting loss deduction',
      'Pure market value without forced new jewellery purchases',
      'German XRF laser tested for guaranteed karat accuracy',
      'Instant funds directly transferred within minutes'
    ],
    processSteps: [
      'Bring your gold ornaments for laser purity appraisal.',
      'Get an itemized valuation of fine gold weight.',
      'Choose instant cash/IMPS bank transfer or certified 24K bullion.',
      'Instant transaction receipt provided.'
    ],
    faqs: [
      {
        q: 'Why is selling/exchanging gold at Akshaya Gold Buyers better than a jewellery showroom?',
        a: 'Jewellery showrooms typically offer exchange only if you buy new jewellery (charging high making charges of 12-25%), and deduct 10-20% on old gold. We pay you 100% spot market value with zero melting deduction and provide instant cash or bank transfer.'
      }
    ],
    searchKeywords: ['gold exchange', 'exchange old gold', 'gold to cash exchange', 'gold replacement']
  },
  {
    id: 'gold-valuation-appraisal',
    slug: 'gold-valuation-appraisal',
    name: 'Free Gold Valuation & XRF Purity Testing',
    shortTitle: 'Gold Valuation',
    tagline: 'Get a free, scientific valuation of your gold and jewellery with no obligation to sell.',
    iconName: 'Scale',
    summary: 'Professional non-destructive testing utilizing German XRF Spectrometry and high precision weighing with zero obligation.',
    description: 'Know the true worth of your precious metals. Akshaya Gold Buyers provides free appraisal services with complete transparent reporting of purity percentage, karat rating, gross weight, net weight, and live market pricing.',
    targetMetals: ['All Karat Gold (14K–24K)', 'Silver Ornaments', 'Bullion Coins'],
    features: [
      '100% Free valuation with zero obligation to sell',
      'German XRF non-destructive laser technology',
      'Certified Class II electronic balance testing',
      'Transparent live valuation breakdown'
    ],
    processSteps: [
      'Bring your items to our valuation counter.',
      'Laser scan confirms exact elemental purity.',
      'Precision weight recorded on digital display.',
      'Receive verbal and digital valuation report based on current spot rates.'
    ],
    faqs: [
      {
        q: 'Is there any fee for gold valuation at Akshaya Gold Buyers?',
        a: 'No, our gold purity testing and valuation service is 100% free with no obligation to sell.'
      }
    ],
    searchKeywords: ['gold valuation', 'gold appraisal', 'gold purity test', 'gold rate testing', 'xrf gold testing near me']
  },
  {
    id: 'silver-buyers',
    slug: 'silver-buyers',
    name: 'Silver, Silver Articles & Coin Buyers',
    shortTitle: 'Silver Buying',
    tagline: 'Sell silver coins, pooja items, utensils, anklets (payal), and 999 silver bars at live spot rates.',
    iconName: 'CircleDot',
    summary: 'Top market rates paid for 999 fine silver bars, 925 sterling silver items, traditional silver ornaments, and silverware with immediate payment.',
    description: 'Alongside gold, Akshaya Gold Buyers is a leading purchaser of silver articles in Andhra Pradesh and Telangana. We evaluate silver pooja items, glasses, plates, idols, payals, kadas, and 999 silver coins using certified testing methods with instant payout.',
    targetMetals: ['999 Fine Silver Bars & Coins', '925 Sterling Silver', 'Silver Pooja Articles', 'Silver Utensils & Glasses', 'Silver Anklets (Payal)'],
    features: [
      'Live silver market rate benchmarking per gram / kilogram',
      'Purity testing for sterling silver and pooja silver items',
      'No heavy melting deductions',
      'Instant settlement via bank transfer or cash'
    ],
    processSteps: [
      'Inspection and segregation of silver articles by purity.',
      'Accurate digital weight measurement.',
      'Valuation calculated per gram based on live silver rate.',
      'Immediate payment disbursal.'
    ],
    faqs: [
      {
        q: 'Do you buy old or tarnished silver items?',
        a: 'Yes, we buy all types of silver regardless of surface tarnish or age. We test the internal silver purity and pay full metal value.'
      }
    ],
    searchKeywords: ['silver buyers', 'sell silver articles', 'silver coin buyers', 'sell silver utensils', 'silver buyers near me']
  },
  {
    id: 'platinum-diamond',
    slug: 'platinum-diamond',
    name: 'Platinum & Certified Diamond Jewellery Valuation',
    shortTitle: 'Platinum & Diamond',
    tagline: 'Fair, expert evaluation of platinum rings, bands, and diamond-studded gold jewellery.',
    iconName: 'Layers',
    summary: 'Transparent assessment of platinum purity (950 Platinum) and diamond 4Cs with combined metal and gemstone value payout.',
    description: 'Unlike ordinary buyers who only pay for base gold and discard diamonds, Akshaya Gold Buyers assesses both the precious metal and the certified diamonds, ensuring you receive the true intrinsic value for premium jewellery.',
    targetMetals: ['950 Platinum Rings & Chains', 'Solitaire Diamond Rings', 'Diamond Studded Gold Jewellery', 'Polki & Kundan Ornaments'],
    features: [
      '950 Platinum XRF purity verification',
      'Diamond grading for cut, color, clarity, and carat weight',
      'Combined valuation for metal and gemstone',
      'Instant high-value transaction processing'
    ],
    processSteps: [
      'Metal testing for platinum or gold base.',
      'Diamond grading inspection under magnification.',
      'Composite transparent valuation sheet.',
      'Direct IMPS/RTGS bank transfer.'
    ],
    faqs: [
      {
        q: 'Do you pay for diamonds in diamond-studded gold jewellery?',
        a: 'Yes, we evaluate both the gold purity/weight and the quality of diamonds to give you a combined fair value.'
      }
    ],
    searchKeywords: ['platinum buyers', 'diamond jewellery buyers', 'sell diamond ring', 'platinum valuation', 'sell diamond gold']
  }
];

export const PRECIOUS_METALS = [
  {
    id: 'gold',
    name: 'Gold',
    description: 'We purchase all purities and forms of gold including 24K pure bullion, 22K 916 hallmarked jewellery, 18K ornaments, coins, and scrap with 0% melting loss.',
    tagline: 'Highest spot valuation for pure and hallmarked gold in AP & Telangana.',
    purityGrades: ['24 Karat (99.9% Pure)', '22 Karat (91.6% 916 Hallmark)', '20 Karat (83.3%)', '18 Karat (75.0%)', '14 Karat (58.5%)'],
    forms: ['Jewellery', 'Coins', 'Bars / Biscuits', 'Broken & Scrap', 'Pledged Gold Ornaments', 'Old Ancestral Gold'],
    icon: 'Coins'
  },
  {
    id: 'silver',
    name: 'Silver',
    description: 'Instant cash for silver pooja items, utensils, 999 silver coins, 925 sterling silver articles, and antique silverware based on live per-gram rates.',
    tagline: 'Live spot rate valuation for silver articles, coins, and utensils.',
    purityGrades: ['999 Fine Silver', '925 Sterling Silver', '800 Traditional Silver'],
    forms: ['Pooja Articles', 'Utensils & Dinner Sets', 'Coins & Medallions', 'Bars', 'Anklets (Payal) & Bangles'],
    icon: 'CircleDot'
  },
  {
    id: 'platinum',
    name: 'Platinum',
    description: 'Professional appraisal and purchase of 950 platinum rings, wedding bands, chains, and ornaments using non-destructive XRF laser testing.',
    tagline: 'Certified 950 platinum valuation with instant bank payout.',
    purityGrades: ['Pt 950 (95.0% Platinum)', 'Pt 900 (90.0% Platinum)'],
    forms: ['Rings', 'Wedding Bands', 'Chains', 'Pendants', 'Bracelets'],
    icon: 'Layers'
  },
  {
    id: 'diamond',
    name: 'Diamond Jewellery',
    description: 'Fair combined valuation for diamond-studded gold and platinum jewellery, evaluating both carat weight, 4Cs diamond grading, and base metal value.',
    tagline: 'Dual valuation for gold base and certified diamonds.',
    purityGrades: ['VVS/VS Clarity', 'SI/I Clarity', 'Certified GIA/IGI Diamonds'],
    forms: ['Solitaire Rings', 'Necklace Sets', 'Stud Earrings', 'Nose Pins', 'Bangles'],
    icon: 'Gem'
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find(s => s.slug === slug || s.id === slug);
}

export function getMetalBySlug(slug: string) {
  return PRECIOUS_METALS.find(m => m.id === slug || m.name.toLowerCase() === slug.toLowerCase());
}

export const ALL_FAQS = [
  ...SERVICES.flatMap(s => s.faqs),
  {
    q: 'How does Akshaya Gold Buyers determine gold rates in AP & Telangana?',
    a: 'Our rates are strictly linked to live MCX and international bullion benchmarks updated in real time. You get full spot market value with zero arbitrary cuts or making charges.'
  },
  {
    q: 'How does the non-destructive German XRF testing work?',
    a: 'Our certified German XRF spectrometer shoots safe X-ray lasers to measure exact elemental composition (gold, silver, copper, zinc) with 99.9% precision in 30 seconds without melting, cutting, or acid damage.'
  },
  {
    q: 'Can I release pledged gold from Muthoot, Manappuram, or banks?',
    a: 'Yes, our representative accompanies you to your bank or financier branch, clears the full pending loan dues directly, collects your jewellery safely with you, and transfers the remaining surplus amount to you immediately.'
  }
];

