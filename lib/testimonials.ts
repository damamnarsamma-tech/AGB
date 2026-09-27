export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  district: string;
  state: 'Andhra Pradesh' | 'Telangana';
  category: 'pledged-gold' | 'old-jewellery' | 'scrap-gold' | 'silver-diamond';
  categoryLabel: string;
  rating: number;
  date: string;
  title: string;
  story: string;
  transactionDetails: {
    itemType: string;
    weightOrValue: string;
    benefitHighlight: string;
    settlementSpeed: string;
  };
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    "id": "story-1",
    "author": "Satyanarayana V. (Venkata)",
    "role": "Retired Govt Officer",
    "location": "Gajuwaka, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Gajuwaka without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Gajuwaka, Visakhapatnam to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "25 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-2",
    "author": "Gayatri K. (Kakarla)",
    "role": "Software Engineer (MNC)",
    "location": "Dwaraka Nagar, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Dwaraka Nagar at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Dwaraka Nagar, Visakhapatnam to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "26 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-3",
    "author": "Chandra Sekhar G. (Gullapalli)",
    "role": "Paddy & Cotton Farmer",
    "location": "MVP Colony, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in MVP Colony",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in MVP Colony, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "27 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-4",
    "author": "Sailaja M. (Mulpuri)",
    "role": "High School Teacher",
    "location": "Madhurawada, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Madhurawada",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Madhurawada, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "28 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-5",
    "author": "Prasad C. (Chinta)",
    "role": "Textile Merchant",
    "location": "Pendurthi, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Pendurthi without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Pendurthi, Visakhapatnam to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "29 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-6",
    "author": "Prameela N. (Nalluri)",
    "role": "Civil Contractor",
    "location": "Kurmannapalem, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Kurmannapalem at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Kurmannapalem, Visakhapatnam and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "30 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-7",
    "author": "Koteswara Rao Y. (Yalamanchili)",
    "role": "Bank Senior Officer",
    "location": "Anakapalli Town",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Anakapalli Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Anakapalli Town. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "31 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-8",
    "author": "Supriya K. (Kondapalli)",
    "role": "Homemaker",
    "location": "Atchutapuram Industrial Hub, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Atchutapuram Industrial Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Atchutapuram Industrial Hub, Anakapalli. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "32 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-9",
    "author": "Srikanth G. (Garapati)",
    "role": "Retail Pharmacist",
    "location": "Yelamanchili, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Yelamanchili without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Yelamanchili, Anakapalli to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "33 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-10",
    "author": "Sujatha C. (Chowdary)",
    "role": "Rice Mill Owner",
    "location": "Vizianagaram Main Town",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Vizianagaram Main Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Vizianagaram Main Town to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "34 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-11",
    "author": "Vamshi Krishna K. (Kalla)",
    "role": "School Principal",
    "location": "Bobbili Town, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bobbili Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bobbili Town, Vizianagaram. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "35 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-12",
    "author": "Madhavi B. (Bhamidipati)",
    "role": "Automobile Dealer",
    "location": "Salur Road, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Salur Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Salur Road, Vizianagaram. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "36 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-13",
    "author": "Ravindra V. (Vaddi)",
    "role": "Assistant Professor",
    "location": "Srikakulam Town",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Srikakulam Town without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Srikakulam Town to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "37 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-14",
    "author": "Rama Devi V. (Velagapudi)",
    "role": "Poultry Farm Owner",
    "location": "Palasa Cashew Market, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Palasa Cashew Market at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Palasa Cashew Market, Srikakulam to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "38 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-15",
    "author": "Samba Siva Rao M. (Mikkilineni)",
    "role": "Kirana Store Owner",
    "location": "Tekkali Town, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tekkali Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tekkali Town, Srikakulam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "39 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-16",
    "author": "Anitha D. (Denduluri)",
    "role": "Diagnostic Lab Specialist",
    "location": "Parvathipuram Town",
    "district": "parvathipuram-manyam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Parvathipuram Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Parvathipuram Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "40 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-17",
    "author": "Syed Ibrahim R. (Ravipati)",
    "role": "Handloom Weaver",
    "location": "Araku Valley, Alluri Sitharama Raju",
    "district": "alluri-sitharama-raju",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Araku Valley without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Araku Valley, Alluri Sitharama Raju to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "41 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-18",
    "author": "Mercy P. (Penmetsa)",
    "role": "Jewellery Connoisseur",
    "location": "Benz Circle, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Benz Circle at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Benz Circle, Vijayawada and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "42 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-19",
    "author": "Srinivas D. (Datla)",
    "role": "Building Contractor",
    "location": "One Town Commercial Area, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in One Town Commercial Area",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in One Town Commercial Area, Vijayawada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "43 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-20",
    "author": "Bhavani S. (Sagi)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Patamata, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Patamata",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Patamata, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "44 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-21",
    "author": "Harischandra Prasad B. (Bhupathiraju)",
    "role": "Cotton Export Merchant",
    "location": "Governorpet, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Governorpet without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Governorpet, Vijayawada to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "45 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-22",
    "author": "Sandhya Rani A. (Alluri)",
    "role": "Hardware Shop Owner",
    "location": "Gollapudi Market, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Gollapudi Market at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Gollapudi Market, Vijayawada to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "46 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-23",
    "author": "Anil Kumar G. (Gottipati)",
    "role": "Chartered Accountant",
    "location": "Nandigama Town, NTR",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nandigama Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nandigama Town, NTR. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "47 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-24",
    "author": "Divya K. (Karnam)",
    "role": "Real Estate Consultant",
    "location": "Machilipatnam Port Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Machilipatnam Port Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Machilipatnam Port Town, Krishna. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "48 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-25",
    "author": "Rajeshwara Rao M. (Mudragada)",
    "role": "Electrical Engineer",
    "location": "Gudivada Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Gudivada Town without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Gudivada Town, Krishna to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "49 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-26",
    "author": "Fatima Begum V. (Vangaveeti)",
    "role": "Aqua Farmer",
    "location": "Vuyyuru Sugar Factory Road, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Vuyyuru Sugar Factory Road at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Vuyyuru Sugar Factory Road, Krishna to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "50 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-27",
    "author": "Siva Prasad D. (Devineni)",
    "role": "Supermarket Manager",
    "location": "Brodipet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Brodipet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Brodipet, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "51 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-28",
    "author": "Anuradha P. (Parvathaneni)",
    "role": "Hospital Administrator",
    "location": "Lakshmipuram, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Lakshmipuram",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Lakshmipuram, Guntur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "52 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-29",
    "author": "Mahesh T. (Tammineedi)",
    "role": "Senior Advocate",
    "location": "Arundelpet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Arundelpet without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Arundelpet, Guntur to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "53 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-30",
    "author": "Prameela A. (Adusumilli)",
    "role": "Transport Operator",
    "location": "Mangalagiri IT Tower Area, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Mangalagiri IT Tower Area at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Mangalagiri IT Tower Area, Guntur and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "54 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-31",
    "author": "Niranjan K. (Kovelamudi)",
    "role": "Hotel Proprietor",
    "location": "Tenali Gold Market, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tenali Gold Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tenali Gold Market, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "55 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-32",
    "author": "Deepika G. (Golla)",
    "role": "Mechanical Engineer",
    "location": "Narasaraopet Town, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Narasaraopet Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Narasaraopet Town, Palnadu. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "56 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-33",
    "author": "Trinadha Rao R. (Reddy)",
    "role": "Telecom Tower Specialist",
    "location": "Piduguralla Lime Hub, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Piduguralla Lime Hub without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Piduguralla Lime Hub, Palnadu to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "57 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-34",
    "author": "Meenakshi G. (Goud)",
    "role": "Organic Store Owner",
    "location": "Sattenapalle, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Sattenapalle at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Sattenapalle, Palnadu to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "58 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-35",
    "author": "Khaja Moinuddin R. (Rao)",
    "role": "Retired Govt Officer",
    "location": "Chirala Handloom Center, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Chirala Handloom Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Chirala Handloom Center, Bapatla. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "59 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-36",
    "author": "Swathi N. (Naidu)",
    "role": "Software Engineer (MNC)",
    "location": "Bapatla Town Center",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bapatla Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bapatla Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "60 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-37",
    "author": "Venkateswara Rao C. (Choudhary)",
    "role": "Paddy & Cotton Farmer",
    "location": "Repalle, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Repalle without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Repalle, Bapatla to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "61 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-38",
    "author": "Latha V. (Varma)",
    "role": "High School Teacher",
    "location": "Danavaipeta, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Danavaipeta at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Danavaipeta, Rajahmundry to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "62 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-39",
    "author": "Suresh Kumar S. (Sastry)",
    "role": "Textile Merchant",
    "location": "Kotipalli Bus Stand Road, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kotipalli Bus Stand Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kotipalli Bus Stand Road, Rajahmundry. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "63 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-40",
    "author": "Usha Rani S. (Sharma)",
    "role": "Civil Contractor",
    "location": "Kovvur Town, East Godavari",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kovvur Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kovvur Town, East Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "64 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-41",
    "author": "Phani Bhushan J. (Jain)",
    "role": "Bank Senior Officer",
    "location": "Main Road, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Main Road without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Main Road, Kakinada to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "65 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-42",
    "author": "Kavitha Y. (Yadav)",
    "role": "Homemaker",
    "location": "Bhanugudi Junction, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Bhanugudi Junction at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Bhanugudi Junction, Kakinada and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "66 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-43",
    "author": "Kishore S. (Shetty)",
    "role": "Retail Pharmacist",
    "location": "Tuni Town, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tuni Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tuni Town, Kakinada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "67 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-44",
    "author": "Padmaja Rani P. (Pillai)",
    "role": "Rice Mill Owner",
    "location": "Amalapuram Town, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Amalapuram Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Amalapuram Town, Konaseema. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "68 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-45",
    "author": "Murali Krishna A. (Acharya)",
    "role": "School Principal",
    "location": "Ravulapalem Coconut Hub, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Ravulapalem Coconut Hub without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Ravulapalem Coconut Hub, Konaseema to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "69 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-46",
    "author": "Rajyalakshmi S. (Swamy)",
    "role": "Automobile Dealer",
    "location": "Razole, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Razole at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Razole, Konaseema to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "70 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-47",
    "author": "Gopala Krishna R. (Raju)",
    "role": "Assistant Professor",
    "location": "RR Pet, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in RR Pet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in RR Pet, Eluru. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "71 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-48",
    "author": "Radhika M. (Moorthy)",
    "role": "Poultry Farm Owner",
    "location": "Jangareddygudem, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Jangareddygudem",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Jangareddygudem, Eluru. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "72 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-49",
    "author": "Upendra D. (Deshmukh)",
    "role": "Kirana Store Owner",
    "location": "Nuzvid Mango Hub, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Nuzvid Mango Hub without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Nuzvid Mango Hub, Eluru to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "73 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-50",
    "author": "Manjula K. (Kulkarni)",
    "role": "Diagnostic Lab Specialist",
    "location": "Bhimavaram Aqua Market, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Bhimavaram Aqua Market at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Bhimavaram Aqua Market, West Godavari to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "74 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-51",
    "author": "Chaitanya J. (Joshi)",
    "role": "Handloom Weaver",
    "location": "Tadepalligudem Commercial Hub, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tadepalligudem Commercial Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tadepalligudem Commercial Hub, West Godavari. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "75 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-52",
    "author": "Ayesha P. (Patel)",
    "role": "Jewellery Connoisseur",
    "location": "Tanuku Town, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Tanuku Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Tanuku Town, West Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "76 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-53",
    "author": "Mirza Baig V. (Venkata)",
    "role": "Building Contractor",
    "location": "Kurnool Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Kurnool Road without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Kurnool Road, Ongole to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "77 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-54",
    "author": "Vijaya Lakshmi K. (Kakarla)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Trunk Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Trunk Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Trunk Road, Ongole and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "78 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-55",
    "author": "Subba Rao G. (Gullapalli)",
    "role": "Cotton Export Merchant",
    "location": "Markapur Granite Hub, Prakasam",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Markapur Granite Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Markapur Granite Hub, Prakasam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "79 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-56",
    "author": "Kalyani M. (Mulpuri)",
    "role": "Hardware Shop Owner",
    "location": "Trunk Road, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Trunk Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Trunk Road, Nellore. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "80 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-57",
    "author": "Ramesh Babu C. (Chinta)",
    "role": "Chartered Accountant",
    "location": "Dargamitta, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Dargamitta without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Dargamitta, Nellore to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "81 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-58",
    "author": "Haritha N. (Nalluri)",
    "role": "Real Estate Consultant",
    "location": "Gudur Lemon Market, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Gudur Lemon Market at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Gudur Lemon Market, SPSR Nellore to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "82 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-59",
    "author": "Nageswara Rao Y. (Yalamanchili)",
    "role": "Electrical Engineer",
    "location": "Kavali Town, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kavali Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kavali Town, SPSR Nellore. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "83 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-60",
    "author": "Padmavathi K. (Kondapalli)",
    "role": "Aqua Farmer",
    "location": "KT Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in KT Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in KT Road, Tirupati. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "84 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-61",
    "author": "Girish G. (Garapati)",
    "role": "Supermarket Manager",
    "location": "Alipiri Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Alipiri Road without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Alipiri Road, Tirupati to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "85 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-62",
    "author": "Saraswathi C. (Chowdary)",
    "role": "Hospital Administrator",
    "location": "Srikalahasti Temple Area, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Srikalahasti Temple Area at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Srikalahasti Temple Area, Tirupati to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "86 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-63",
    "author": "Ashok Kumar K. (Kalla)",
    "role": "Senior Advocate",
    "location": "Chittoor Town Center",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Chittoor Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Chittoor Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "87 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-64",
    "author": "Revathi B. (Bhamidipati)",
    "role": "Transport Operator",
    "location": "Palamaner, Chittoor",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Palamaner",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Palamaner, Chittoor. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "88 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-65",
    "author": "Sudhakar V. (Vaddi)",
    "role": "Hotel Proprietor",
    "location": "Madanapalle Silk Center, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Madanapalle Silk Center without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Madanapalle Silk Center, Annamayya to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "89 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-66",
    "author": "Jyothi V. (Velagapudi)",
    "role": "Mechanical Engineer",
    "location": "Rayachoti Town, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Rayachoti Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Rayachoti Town, Annamayya and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "90 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-67",
    "author": "Kalyan Chakravarthy M. (Mikkilineni)",
    "role": "Telecom Tower Specialist",
    "location": "Seven Roads Junction, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Seven Roads Junction",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Seven Roads Junction, YSR Kadapa. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "91 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-68",
    "author": "Shalini D. (Denduluri)",
    "role": "Organic Store Owner",
    "location": "Proddatur Gold Market, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Proddatur Gold Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Proddatur Gold Market, YSR Kadapa. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "92 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-69",
    "author": "Sai Kumar R. (Ravipati)",
    "role": "Retired Govt Officer",
    "location": "Pulivendula, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Pulivendula without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Pulivendula, YSR Kadapa to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "93 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-70",
    "author": "Lakshmi Prasanna P. (Penmetsa)",
    "role": "Software Engineer (MNC)",
    "location": "Subhash Road, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Subhash Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Subhash Road, Anantapur to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "94 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-71",
    "author": "John Peter D. (Datla)",
    "role": "Paddy & Cotton Farmer",
    "location": "Clock Tower Area, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Clock Tower Area",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Clock Tower Area, Anantapur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "95 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-72",
    "author": "Kanaka Durga S. (Sagi)",
    "role": "High School Teacher",
    "location": "Guntakal Railway Hub, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Guntakal Railway Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Guntakal Railway Hub, Anantapur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "96 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-73",
    "author": "Ramakrishna B. (Bhupathiraju)",
    "role": "Textile Merchant",
    "location": "Hindupur Industrial Zone, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Hindupur Industrial Zone without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Hindupur Industrial Zone, Sri Sathya Sai to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "97 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-74",
    "author": "Sri Vani A. (Alluri)",
    "role": "Civil Contractor",
    "location": "Puttaparthi, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Puttaparthi at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Puttaparthi, Sri Sathya Sai to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "98 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-75",
    "author": "Praveen Kumar G. (Gottipati)",
    "role": "Bank Senior Officer",
    "location": "Dharmavaram Handloom Market, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dharmavaram Handloom Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dharmavaram Handloom Market, Sri Sathya Sai. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "99 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-76",
    "author": "Sudha K. (Karnam)",
    "role": "Homemaker",
    "location": "Park Road, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Park Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Park Road, Kurnool. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "100 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-77",
    "author": "Madusudhan M. (Mudragada)",
    "role": "Retail Pharmacist",
    "location": "Adoni Cotton Market, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Adoni Cotton Market without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Adoni Cotton Market, Kurnool to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "101 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-78",
    "author": "Grace Mary V. (Vangaveeti)",
    "role": "Rice Mill Owner",
    "location": "Yemmiganur, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Yemmiganur at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Yemmiganur, Kurnool and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "102 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-79",
    "author": "Dileep Kumar D. (Devineni)",
    "role": "School Principal",
    "location": "Nandyal Town Center",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nandyal Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nandyal Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "103 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-80",
    "author": "Sunitha P. (Parvathaneni)",
    "role": "Automobile Dealer",
    "location": "Allagadda Stone Market, Nandyal",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Allagadda Stone Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Allagadda Stone Market, Nandyal. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "104 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-81",
    "author": "Laxman T. (Tammineedi)",
    "role": "Assistant Professor",
    "location": "Kukatpally Housing Board (KPHB), Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Kukatpally Housing Board (KPHB) without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Kukatpally Housing Board (KPHB), Hyderabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "105 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-82",
    "author": "Vasundhara A. (Adusumilli)",
    "role": "Poultry Farm Owner",
    "location": "Ameerpet Metro Hub, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Ameerpet Metro Hub at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Ameerpet Metro Hub, Hyderabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "106 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-83",
    "author": "Sanjeeva Rao K. (Kovelamudi)",
    "role": "Kirana Store Owner",
    "location": "Dilsukhnagar Bus Stand Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dilsukhnagar Bus Stand Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dilsukhnagar Bus Stand Road, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "107 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-84",
    "author": "Sireesha G. (Golla)",
    "role": "Diagnostic Lab Specialist",
    "location": "Madhapur IT Corridor, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Madhapur IT Corridor",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Madhapur IT Corridor, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "108 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-85",
    "author": "Raja Sekhar R. (Reddy)",
    "role": "Handloom Weaver",
    "location": "Gachibowli Financial District, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Gachibowli Financial District without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Gachibowli Financial District, Hyderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "109 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-86",
    "author": "Shabana G. (Goud)",
    "role": "Jewellery Connoisseur",
    "location": "Secunderabad Clock Tower, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Secunderabad Clock Tower at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Secunderabad Clock Tower, Hyderabad to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "110 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-87",
    "author": "Tarun R. (Rao)",
    "role": "Building Contractor",
    "location": "AS Rao Nagar, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in AS Rao Nagar",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in AS Rao Nagar, Secunderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "111 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-88",
    "author": "Gayatri N. (Naidu)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Koti Jewellery Market, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Koti Jewellery Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Koti Jewellery Market, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "112 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-89",
    "author": "David Raju C. (Choudhary)",
    "role": "Cotton Export Merchant",
    "location": "LB Nagar Ring Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in LB Nagar Ring Road without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in LB Nagar Ring Road, Hyderabad to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "113 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-90",
    "author": "Sailaja V. (Varma)",
    "role": "Hardware Shop Owner",
    "location": "Jubilee Hills Road No. 36, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Jubilee Hills Road No. 36 at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Jubilee Hills Road No. 36, Hyderabad and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "114 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-91",
    "author": "Narasimha Rao S. (Sastry)",
    "role": "Chartered Accountant",
    "location": "Mehdipatnam Bus Depot, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Mehdipatnam Bus Depot",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Mehdipatnam Bus Depot, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "115 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-92",
    "author": "Prameela S. (Sharma)",
    "role": "Real Estate Consultant",
    "location": "Uppal Metro Station Area, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Uppal Metro Station Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Uppal Metro Station Area, Medchal-Malkajgiri. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "116 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-93",
    "author": "Vijay Bhaskar J. (Jain)",
    "role": "Electrical Engineer",
    "location": "Kompally NH44 Corridor, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Kompally NH44 Corridor without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Kompally NH44 Corridor, Medchal-Malkajgiri to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "117 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-94",
    "author": "Supriya Y. (Yadav)",
    "role": "Aqua Farmer",
    "location": "Malkajgiri Town, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Malkajgiri Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Malkajgiri Town, Medchal-Malkajgiri to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "118 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-95",
    "author": "Bhanu Prakash S. (Shetty)",
    "role": "Supermarket Manager",
    "location": "Bachupally, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bachupally",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bachupally, Medchal-Malkajgiri. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "119 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-96",
    "author": "Sujatha P. (Pillai)",
    "role": "Hospital Administrator",
    "location": "Kondapur, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kondapur",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kondapur, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "120 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-97",
    "author": "Venkata Ramana A. (Acharya)",
    "role": "Senior Advocate",
    "location": "Himayatnagar Main Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Himayatnagar Main Road without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Himayatnagar Main Road, Hyderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "121 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-98",
    "author": "Madhavi S. (Swamy)",
    "role": "Transport Operator",
    "location": "Begumpet Airport Area, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Begumpet Airport Area at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Begumpet Airport Area, Hyderabad to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "122 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-99",
    "author": "Hanumantha Rao R. (Raju)",
    "role": "Hotel Proprietor",
    "location": "Tarnaka, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tarnaka",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tarnaka, Secunderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "123 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-100",
    "author": "Rama Devi M. (Moorthy)",
    "role": "Mechanical Engineer",
    "location": "Miyapur Junction, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Miyapur Junction",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Miyapur Junction, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "124 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-101",
    "author": "Bhaskar D. (Deshmukh)",
    "role": "Telecom Tower Specialist",
    "location": "Chanda Nagar, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Chanda Nagar without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Chanda Nagar, Hyderabad to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "125 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-102",
    "author": "Anitha K. (Kulkarni)",
    "role": "Organic Store Owner",
    "location": "Manikonda, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Manikonda at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Manikonda, Ranga Reddy and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "126 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-103",
    "author": "Jagadeesh J. (Joshi)",
    "role": "Retired Govt Officer",
    "location": "Attapur Pillar 140, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Attapur Pillar 140",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Attapur Pillar 140, Ranga Reddy. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "127 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-104",
    "author": "Mercy P. (Patel)",
    "role": "Software Engineer (MNC)",
    "location": "Shadnagar Highway Hub, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Shadnagar Highway Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Shadnagar Highway Hub, Ranga Reddy. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "128 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-105",
    "author": "Mohammed Abdul V. (Venkata)",
    "role": "Paddy & Cotton Farmer",
    "location": "Ibrahimpatnam, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Ibrahimpatnam without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Ibrahimpatnam, Ranga Reddy to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "129 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-106",
    "author": "Bhavani K. (Kakarla)",
    "role": "High School Teacher",
    "location": "Subedari, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Subedari at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Subedari, Hanamkonda to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "130 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-107",
    "author": "Satyanarayana G. (Gullapalli)",
    "role": "Textile Merchant",
    "location": "Kazipet Junction, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kazipet Junction",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kazipet Junction, Hanamkonda. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "131 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-108",
    "author": "Sandhya Rani M. (Mulpuri)",
    "role": "Civil Contractor",
    "location": "Hanumakonda Road, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Hanumakonda Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Hanumakonda Road, Warangal. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "132 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-109",
    "author": "Chandra Sekhar C. (Chinta)",
    "role": "Bank Senior Officer",
    "location": "Narsampet Town, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Narsampet Town without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Narsampet Town, Warangal to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "133 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-110",
    "author": "Divya N. (Nalluri)",
    "role": "Homemaker",
    "location": "Tower Circle, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Tower Circle at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Tower Circle, Karimnagar to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "134 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-111",
    "author": "Prasad Y. (Yalamanchili)",
    "role": "Retail Pharmacist",
    "location": "Collectorate Road, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Collectorate Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Collectorate Road, Karimnagar. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "135 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-112",
    "author": "Fatima Begum K. (Kondapalli)",
    "role": "Rice Mill Owner",
    "location": "Huzurabad Town, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Huzurabad Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Huzurabad Town, Karimnagar. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "136 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-113",
    "author": "Koteswara Rao G. (Garapati)",
    "role": "School Principal",
    "location": "Godavarikhani Thermal City, Peddapalli",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Godavarikhani Thermal City without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Godavarikhani Thermal City, Peddapalli to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "137 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-114",
    "author": "Anuradha C. (Chowdary)",
    "role": "Automobile Dealer",
    "location": "Peddapalli Town Center",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Peddapalli Town Center at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Peddapalli Town Center and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "138 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-115",
    "author": "Srikanth K. (Kalla)",
    "role": "Assistant Professor",
    "location": "Jagtial Gold Market",
    "district": "jagtial",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Jagtial Gold Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Jagtial Gold Market. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "139 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-116",
    "author": "Prameela B. (Bhamidipati)",
    "role": "Poultry Farm Owner",
    "location": "Korutla Textile Hub, Jagtial",
    "district": "jagtial",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Korutla Textile Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Korutla Textile Hub, Jagtial. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "140 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-117",
    "author": "Vamshi Krishna V. (Vaddi)",
    "role": "Kirana Store Owner",
    "location": "Sircilla Handloom Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Sircilla Handloom Town without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Sircilla Handloom Town, Rajanna Sircilla to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "141 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-118",
    "author": "Deepika V. (Velagapudi)",
    "role": "Diagnostic Lab Specialist",
    "location": "Vemulawada Temple Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Vemulawada Temple Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Vemulawada Temple Town, Rajanna Sircilla to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "142 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-119",
    "author": "Ravindra M. (Mikkilineni)",
    "role": "Handloom Weaver",
    "location": "Hyderabad Road, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Hyderabad Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Hyderabad Road, Nizamabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "143 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-120",
    "author": "Meenakshi D. (Denduluri)",
    "role": "Jewellery Connoisseur",
    "location": "Armoor Commercial Center, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Armoor Commercial Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Armoor Commercial Center, Nizamabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "144 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-121",
    "author": "Samba Siva Rao R. (Ravipati)",
    "role": "Building Contractor",
    "location": "Bodhan Town, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Bodhan Town without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Bodhan Town, Nizamabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "145 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-122",
    "author": "Swathi P. (Penmetsa)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Kamareddy Town Center",
    "district": "kamareddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Kamareddy Town Center at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Kamareddy Town Center to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "146 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-123",
    "author": "Syed Ibrahim D. (Datla)",
    "role": "Cotton Export Merchant",
    "location": "Adilabad Cotton Hub",
    "district": "adilabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Adilabad Cotton Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Adilabad Cotton Hub. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "147 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-124",
    "author": "Latha S. (Sagi)",
    "role": "Hardware Shop Owner",
    "location": "Nirmal Toys & Craft Town",
    "district": "nirmal",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Nirmal Toys & Craft Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Nirmal Toys & Craft Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "148 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-125",
    "author": "Srinivas B. (Bhupathiraju)",
    "role": "Chartered Accountant",
    "location": "Bhainsa Town, Nirmal",
    "district": "nirmal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Bhainsa Town without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Bhainsa Town, Nirmal to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "149 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-126",
    "author": "Usha Rani A. (Alluri)",
    "role": "Real Estate Consultant",
    "location": "Mancherial Coal Belt Hub",
    "district": "mancherial",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Mancherial Coal Belt Hub at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Mancherial Coal Belt Hub and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "150 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-127",
    "author": "Harischandra Prasad G. (Gottipati)",
    "role": "Electrical Engineer",
    "location": "Bellampally, Mancherial",
    "district": "mancherial",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bellampally",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bellampally, Mancherial. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "151 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-128",
    "author": "Kavitha K. (Karnam)",
    "role": "Aqua Farmer",
    "location": "Asifabad Town",
    "district": "kumuram-bheem-asifabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Asifabad Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Asifabad Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "152 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-129",
    "author": "Anil Kumar M. (Mudragada)",
    "role": "Supermarket Manager",
    "location": "Wyra Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Wyra Road without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Wyra Road, Khammam to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "153 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-130",
    "author": "Padmaja Rani V. (Vangaveeti)",
    "role": "Hospital Administrator",
    "location": "Bus Stand Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Bus Stand Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Bus Stand Road, Khammam to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "154 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-131",
    "author": "Rajeshwara Rao D. (Devineni)",
    "role": "Senior Advocate",
    "location": "Sathupally Coal Hub, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Sathupally Coal Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Sathupally Coal Hub, Khammam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "155 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-132",
    "author": "Rajyalakshmi P. (Parvathaneni)",
    "role": "Transport Operator",
    "location": "Kothagudem Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kothagudem Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kothagudem Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "156 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-133",
    "author": "Siva Prasad T. (Tammineedi)",
    "role": "Hotel Proprietor",
    "location": "Paloncha, Bhadradri Kothagudem",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Paloncha without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Paloncha, Bhadradri Kothagudem to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "157 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-134",
    "author": "Radhika A. (Adusumilli)",
    "role": "Mechanical Engineer",
    "location": "Bhadrachalam Temple Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Bhadrachalam Temple Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Bhadrachalam Temple Town to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "158 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-135",
    "author": "Mahesh K. (Kovelamudi)",
    "role": "Telecom Tower Specialist",
    "location": "Clock Tower, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Clock Tower",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Clock Tower, Nalgonda. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "159 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-136",
    "author": "Manjula G. (Golla)",
    "role": "Organic Store Owner",
    "location": "Miryalaguda Rice Mill Hub, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Miryalaguda Rice Mill Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Miryalaguda Rice Mill Hub, Nalgonda. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "160 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-137",
    "author": "Niranjan R. (Reddy)",
    "role": "Retired Govt Officer",
    "location": "Suryapet Highway Junction",
    "district": "suryapet",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Suryapet Highway Junction without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Suryapet Highway Junction to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "161 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-138",
    "author": "Ayesha G. (Goud)",
    "role": "Software Engineer (MNC)",
    "location": "Kodad Town, Suryapet",
    "district": "suryapet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Kodad Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Kodad Town, Suryapet and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "162 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-139",
    "author": "Trinadha Rao R. (Rao)",
    "role": "Paddy & Cotton Farmer",
    "location": "Bhongir Fort Road, Yadadri Bhuvanagiri",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bhongir Fort Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bhongir Fort Road, Yadadri Bhuvanagiri. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "163 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-140",
    "author": "Vijaya Lakshmi N. (Naidu)",
    "role": "High School Teacher",
    "location": "Yadagirigutta Temple Town",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Yadagirigutta Temple Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Yadagirigutta Temple Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "164 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-141",
    "author": "Khaja Moinuddin C. (Choudhary)",
    "role": "Textile Merchant",
    "location": "Clock Tower, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Clock Tower without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Clock Tower, Mahabubnagar to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "165 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-142",
    "author": "Kalyani V. (Varma)",
    "role": "Civil Contractor",
    "location": "Jadcherla Industrial Area, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Jadcherla Industrial Area at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Jadcherla Industrial Area, Mahabubnagar to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "166 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-143",
    "author": "Venkateswara Rao S. (Sastry)",
    "role": "Bank Senior Officer",
    "location": "Nagarkurnool Town Center",
    "district": "nagarkurnool",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nagarkurnool Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nagarkurnool Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "167 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-144",
    "author": "Haritha S. (Sharma)",
    "role": "Homemaker",
    "location": "Wanaparthy Palace Road",
    "district": "wanaparthy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Wanaparthy Palace Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Wanaparthy Palace Road. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "168 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-145",
    "author": "Suresh Kumar J. (Jain)",
    "role": "Retail Pharmacist",
    "location": "Gadwal Handloom Center, Jogulamba Gadwal",
    "district": "jogulamba-gadwal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Gadwal Handloom Center without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Gadwal Handloom Center, Jogulamba Gadwal to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "169 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-146",
    "author": "Padmavathi Y. (Yadav)",
    "role": "Rice Mill Owner",
    "location": "Narayanpet Silk Town",
    "district": "narayanpet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Narayanpet Silk Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Narayanpet Silk Town to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "170 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-147",
    "author": "Phani Bhushan S. (Shetty)",
    "role": "School Principal",
    "location": "Sangareddy District HQ",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Sangareddy District HQ",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Sangareddy District HQ. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "171 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-148",
    "author": "Saraswathi P. (Pillai)",
    "role": "Automobile Dealer",
    "location": "Patancheru Industrial Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Patancheru Industrial Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Patancheru Industrial Hub, Sangareddy. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "172 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-149",
    "author": "Kishore A. (Acharya)",
    "role": "Assistant Professor",
    "location": "Zaheerabad Mahindra Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Zaheerabad Mahindra Hub without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Zaheerabad Mahindra Hub, Sangareddy to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "173 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-150",
    "author": "Revathi S. (Swamy)",
    "role": "Poultry Farm Owner",
    "location": "Siddipet Town Center",
    "district": "siddipet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Siddipet Town Center at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Siddipet Town Center and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "174 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-151",
    "author": "Murali Krishna R. (Raju)",
    "role": "Kirana Store Owner",
    "location": "Gajwel, Siddipet",
    "district": "siddipet",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gajwel",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gajwel, Siddipet. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "175 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-152",
    "author": "Jyothi M. (Moorthy)",
    "role": "Diagnostic Lab Specialist",
    "location": "Medak Church Road",
    "district": "medak",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Medak Church Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Medak Church Road. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "176 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-153",
    "author": "Gopala Krishna D. (Deshmukh)",
    "role": "Handloom Weaver",
    "location": "Tandur Stone Hub, Vikarabad",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Tandur Stone Hub without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Tandur Stone Hub, Vikarabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "177 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-154",
    "author": "Shalini K. (Kulkarni)",
    "role": "Jewellery Connoisseur",
    "location": "Vikarabad Town Center",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Vikarabad Town Center at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Vikarabad Town Center to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "178 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-155",
    "author": "Upendra J. (Joshi)",
    "role": "Building Contractor",
    "location": "Gajuwaka, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gajuwaka",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gajuwaka, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "179 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-156",
    "author": "Lakshmi Prasanna P. (Patel)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Dwaraka Nagar, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Dwaraka Nagar",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Dwaraka Nagar, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "180 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-157",
    "author": "Chaitanya V. (Venkata)",
    "role": "Cotton Export Merchant",
    "location": "MVP Colony, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in MVP Colony without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in MVP Colony, Visakhapatnam to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "181 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-158",
    "author": "Kanaka Durga K. (Kakarla)",
    "role": "Hardware Shop Owner",
    "location": "Madhurawada, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Madhurawada at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Madhurawada, Visakhapatnam to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "182 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-159",
    "author": "Mirza Baig G. (Gullapalli)",
    "role": "Chartered Accountant",
    "location": "Pendurthi, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Pendurthi",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Pendurthi, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "183 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-160",
    "author": "Sri Vani M. (Mulpuri)",
    "role": "Real Estate Consultant",
    "location": "Kurmannapalem, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kurmannapalem",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kurmannapalem, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "184 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-161",
    "author": "Subba Rao C. (Chinta)",
    "role": "Electrical Engineer",
    "location": "Anakapalli Town",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Anakapalli Town without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Anakapalli Town to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "185 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-162",
    "author": "Sudha N. (Nalluri)",
    "role": "Aqua Farmer",
    "location": "Atchutapuram Industrial Hub, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Atchutapuram Industrial Hub at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Atchutapuram Industrial Hub, Anakapalli and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "186 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-163",
    "author": "Ramesh Babu Y. (Yalamanchili)",
    "role": "Supermarket Manager",
    "location": "Yelamanchili, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Yelamanchili",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Yelamanchili, Anakapalli. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "187 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-164",
    "author": "Grace Mary K. (Kondapalli)",
    "role": "Hospital Administrator",
    "location": "Vizianagaram Main Town",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vizianagaram Main Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vizianagaram Main Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "188 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-165",
    "author": "Nageswara Rao G. (Garapati)",
    "role": "Senior Advocate",
    "location": "Bobbili Town, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Bobbili Town without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Bobbili Town, Vizianagaram to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "189 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-166",
    "author": "Sunitha C. (Chowdary)",
    "role": "Transport Operator",
    "location": "Salur Road, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Salur Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Salur Road, Vizianagaram to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "190 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-167",
    "author": "Girish K. (Kalla)",
    "role": "Hotel Proprietor",
    "location": "Srikakulam Town",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Srikakulam Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Srikakulam Town. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "191 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-168",
    "author": "Vasundhara B. (Bhamidipati)",
    "role": "Mechanical Engineer",
    "location": "Palasa Cashew Market, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Palasa Cashew Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Palasa Cashew Market, Srikakulam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "192 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-169",
    "author": "Ashok Kumar V. (Vaddi)",
    "role": "Telecom Tower Specialist",
    "location": "Tekkali Town, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Tekkali Town without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Tekkali Town, Srikakulam to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "193 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-170",
    "author": "Sireesha V. (Velagapudi)",
    "role": "Organic Store Owner",
    "location": "Parvathipuram Town",
    "district": "parvathipuram-manyam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Parvathipuram Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Parvathipuram Town to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "194 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-171",
    "author": "Sudhakar M. (Mikkilineni)",
    "role": "Retired Govt Officer",
    "location": "Araku Valley, Alluri Sitharama Raju",
    "district": "alluri-sitharama-raju",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Araku Valley",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Araku Valley, Alluri Sitharama Raju. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "195 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-172",
    "author": "Shabana D. (Denduluri)",
    "role": "Software Engineer (MNC)",
    "location": "Benz Circle, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Benz Circle",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Benz Circle, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "196 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-173",
    "author": "Kalyan Chakravarthy R. (Ravipati)",
    "role": "Paddy & Cotton Farmer",
    "location": "One Town Commercial Area, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in One Town Commercial Area without stress",
    "story": "I had pledged my family gold bangles at Rupeek in One Town Commercial Area, Vijayawada to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "197 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-174",
    "author": "Gayatri P. (Penmetsa)",
    "role": "High School Teacher",
    "location": "Patamata, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Patamata at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Patamata, Vijayawada and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "198 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-175",
    "author": "Sai Kumar D. (Datla)",
    "role": "Textile Merchant",
    "location": "Governorpet, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Governorpet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Governorpet, Vijayawada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "199 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-176",
    "author": "Sailaja S. (Sagi)",
    "role": "Civil Contractor",
    "location": "Gollapudi Market, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Gollapudi Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Gollapudi Market, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "200 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-177",
    "author": "John Peter B. (Bhupathiraju)",
    "role": "Bank Senior Officer",
    "location": "Nandigama Town, NTR",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Nandigama Town without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Nandigama Town, NTR to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "201 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-178",
    "author": "Prameela A. (Alluri)",
    "role": "Homemaker",
    "location": "Machilipatnam Port Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Machilipatnam Port Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Machilipatnam Port Town, Krishna to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "202 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-179",
    "author": "Ramakrishna G. (Gottipati)",
    "role": "Retail Pharmacist",
    "location": "Gudivada Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gudivada Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gudivada Town, Krishna. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "203 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-180",
    "author": "Supriya K. (Karnam)",
    "role": "Rice Mill Owner",
    "location": "Vuyyuru Sugar Factory Road, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vuyyuru Sugar Factory Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vuyyuru Sugar Factory Road, Krishna. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "204 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-181",
    "author": "Praveen Kumar M. (Mudragada)",
    "role": "School Principal",
    "location": "Brodipet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Brodipet without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Brodipet, Guntur to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "25 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-182",
    "author": "Sujatha V. (Vangaveeti)",
    "role": "Automobile Dealer",
    "location": "Lakshmipuram, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Lakshmipuram at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Lakshmipuram, Guntur to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "26 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-183",
    "author": "Madusudhan D. (Devineni)",
    "role": "Assistant Professor",
    "location": "Arundelpet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Arundelpet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Arundelpet, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "27 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-184",
    "author": "Madhavi P. (Parvathaneni)",
    "role": "Poultry Farm Owner",
    "location": "Mangalagiri IT Tower Area, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Mangalagiri IT Tower Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Mangalagiri IT Tower Area, Guntur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "28 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-185",
    "author": "Dileep Kumar T. (Tammineedi)",
    "role": "Kirana Store Owner",
    "location": "Tenali Gold Market, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Tenali Gold Market without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Tenali Gold Market, Guntur to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "29 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-186",
    "author": "Rama Devi A. (Adusumilli)",
    "role": "Diagnostic Lab Specialist",
    "location": "Narasaraopet Town, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Narasaraopet Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Narasaraopet Town, Palnadu and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "30 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-187",
    "author": "Laxman K. (Kovelamudi)",
    "role": "Handloom Weaver",
    "location": "Piduguralla Lime Hub, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Piduguralla Lime Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Piduguralla Lime Hub, Palnadu. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "31 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-188",
    "author": "Anitha G. (Golla)",
    "role": "Jewellery Connoisseur",
    "location": "Sattenapalle, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Sattenapalle",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Sattenapalle, Palnadu. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "32 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-189",
    "author": "Sanjeeva Rao R. (Reddy)",
    "role": "Building Contractor",
    "location": "Chirala Handloom Center, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Chirala Handloom Center without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Chirala Handloom Center, Bapatla to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "33 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-190",
    "author": "Mercy G. (Goud)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Bapatla Town Center",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Bapatla Town Center at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Bapatla Town Center to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "34 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-191",
    "author": "Raja Sekhar R. (Rao)",
    "role": "Cotton Export Merchant",
    "location": "Repalle, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Repalle",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Repalle, Bapatla. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "35 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-192",
    "author": "Bhavani N. (Naidu)",
    "role": "Hardware Shop Owner",
    "location": "Danavaipeta, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Danavaipeta",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Danavaipeta, Rajahmundry. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "36 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-193",
    "author": "Tarun C. (Choudhary)",
    "role": "Chartered Accountant",
    "location": "Kotipalli Bus Stand Road, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Kotipalli Bus Stand Road without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Kotipalli Bus Stand Road, Rajahmundry to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "37 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-194",
    "author": "Sandhya Rani V. (Varma)",
    "role": "Real Estate Consultant",
    "location": "Kovvur Town, East Godavari",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Kovvur Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Kovvur Town, East Godavari to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "38 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-195",
    "author": "David Raju S. (Sastry)",
    "role": "Electrical Engineer",
    "location": "Main Road, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Main Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Main Road, Kakinada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "39 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-196",
    "author": "Divya S. (Sharma)",
    "role": "Aqua Farmer",
    "location": "Bhanugudi Junction, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bhanugudi Junction",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bhanugudi Junction, Kakinada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "40 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-197",
    "author": "Narasimha Rao J. (Jain)",
    "role": "Supermarket Manager",
    "location": "Tuni Town, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Tuni Town without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Tuni Town, Kakinada to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "41 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-198",
    "author": "Fatima Begum Y. (Yadav)",
    "role": "Hospital Administrator",
    "location": "Amalapuram Town, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Amalapuram Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Amalapuram Town, Konaseema and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "42 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-199",
    "author": "Vijay Bhaskar S. (Shetty)",
    "role": "Senior Advocate",
    "location": "Ravulapalem Coconut Hub, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Ravulapalem Coconut Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Ravulapalem Coconut Hub, Konaseema. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "43 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-200",
    "author": "Anuradha P. (Pillai)",
    "role": "Transport Operator",
    "location": "Razole, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Razole",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Razole, Konaseema. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "44 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-201",
    "author": "Bhanu Prakash A. (Acharya)",
    "role": "Hotel Proprietor",
    "location": "RR Pet, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in RR Pet without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in RR Pet, Eluru to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "45 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-202",
    "author": "Prameela S. (Swamy)",
    "role": "Mechanical Engineer",
    "location": "Jangareddygudem, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Jangareddygudem at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Jangareddygudem, Eluru to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "46 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-203",
    "author": "Venkata Ramana R. (Raju)",
    "role": "Telecom Tower Specialist",
    "location": "Nuzvid Mango Hub, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nuzvid Mango Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nuzvid Mango Hub, Eluru. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "47 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-204",
    "author": "Deepika M. (Moorthy)",
    "role": "Organic Store Owner",
    "location": "Bhimavaram Aqua Market, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bhimavaram Aqua Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bhimavaram Aqua Market, West Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "48 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-205",
    "author": "Hanumantha Rao D. (Deshmukh)",
    "role": "Retired Govt Officer",
    "location": "Tadepalligudem Commercial Hub, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Tadepalligudem Commercial Hub without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Tadepalligudem Commercial Hub, West Godavari to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "49 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-206",
    "author": "Meenakshi K. (Kulkarni)",
    "role": "Software Engineer (MNC)",
    "location": "Tanuku Town, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Tanuku Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Tanuku Town, West Godavari to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "50 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-207",
    "author": "Bhaskar J. (Joshi)",
    "role": "Paddy & Cotton Farmer",
    "location": "Kurnool Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kurnool Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kurnool Road, Ongole. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "51 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-208",
    "author": "Swathi P. (Patel)",
    "role": "High School Teacher",
    "location": "Trunk Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Trunk Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Trunk Road, Ongole. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "52 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-209",
    "author": "Jagadeesh V. (Venkata)",
    "role": "Textile Merchant",
    "location": "Markapur Granite Hub, Prakasam",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Markapur Granite Hub without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Markapur Granite Hub, Prakasam to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "53 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-210",
    "author": "Latha K. (Kakarla)",
    "role": "Civil Contractor",
    "location": "Trunk Road, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Trunk Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Trunk Road, Nellore and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "54 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-211",
    "author": "Mohammed Abdul G. (Gullapalli)",
    "role": "Bank Senior Officer",
    "location": "Dargamitta, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dargamitta",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dargamitta, Nellore. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "55 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-212",
    "author": "Usha Rani M. (Mulpuri)",
    "role": "Homemaker",
    "location": "Gudur Lemon Market, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Gudur Lemon Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Gudur Lemon Market, SPSR Nellore. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "56 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-213",
    "author": "Satyanarayana C. (Chinta)",
    "role": "Retail Pharmacist",
    "location": "Kavali Town, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Kavali Town without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Kavali Town, SPSR Nellore to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "57 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-214",
    "author": "Kavitha N. (Nalluri)",
    "role": "Rice Mill Owner",
    "location": "KT Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in KT Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in KT Road, Tirupati to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "58 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-215",
    "author": "Chandra Sekhar Y. (Yalamanchili)",
    "role": "School Principal",
    "location": "Alipiri Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Alipiri Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Alipiri Road, Tirupati. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "59 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-216",
    "author": "Padmaja Rani K. (Kondapalli)",
    "role": "Automobile Dealer",
    "location": "Srikalahasti Temple Area, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Srikalahasti Temple Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Srikalahasti Temple Area, Tirupati. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "60 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-217",
    "author": "Prasad G. (Garapati)",
    "role": "Assistant Professor",
    "location": "Chittoor Town Center",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Chittoor Town Center without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Chittoor Town Center to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "61 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-218",
    "author": "Rajyalakshmi C. (Chowdary)",
    "role": "Poultry Farm Owner",
    "location": "Palamaner, Chittoor",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Palamaner at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Palamaner, Chittoor to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "62 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-219",
    "author": "Koteswara Rao K. (Kalla)",
    "role": "Kirana Store Owner",
    "location": "Madanapalle Silk Center, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Madanapalle Silk Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Madanapalle Silk Center, Annamayya. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "63 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-220",
    "author": "Radhika B. (Bhamidipati)",
    "role": "Diagnostic Lab Specialist",
    "location": "Rayachoti Town, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Rayachoti Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Rayachoti Town, Annamayya. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "64 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-221",
    "author": "Srikanth V. (Vaddi)",
    "role": "Handloom Weaver",
    "location": "Seven Roads Junction, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Seven Roads Junction without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Seven Roads Junction, YSR Kadapa to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "65 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-222",
    "author": "Manjula V. (Velagapudi)",
    "role": "Jewellery Connoisseur",
    "location": "Proddatur Gold Market, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Proddatur Gold Market at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Proddatur Gold Market, YSR Kadapa and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "66 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-223",
    "author": "Vamshi Krishna M. (Mikkilineni)",
    "role": "Building Contractor",
    "location": "Pulivendula, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Pulivendula",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Pulivendula, YSR Kadapa. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "67 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-224",
    "author": "Ayesha D. (Denduluri)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Subhash Road, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Subhash Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Subhash Road, Anantapur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "68 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-225",
    "author": "Ravindra R. (Ravipati)",
    "role": "Cotton Export Merchant",
    "location": "Clock Tower Area, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Clock Tower Area without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Clock Tower Area, Anantapur to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "69 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-226",
    "author": "Vijaya Lakshmi P. (Penmetsa)",
    "role": "Hardware Shop Owner",
    "location": "Guntakal Railway Hub, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Guntakal Railway Hub at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Guntakal Railway Hub, Anantapur to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "70 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-227",
    "author": "Samba Siva Rao D. (Datla)",
    "role": "Chartered Accountant",
    "location": "Hindupur Industrial Zone, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Hindupur Industrial Zone",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Hindupur Industrial Zone, Sri Sathya Sai. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "71 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-228",
    "author": "Kalyani S. (Sagi)",
    "role": "Real Estate Consultant",
    "location": "Puttaparthi, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Puttaparthi",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Puttaparthi, Sri Sathya Sai. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "72 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-229",
    "author": "Syed Ibrahim B. (Bhupathiraju)",
    "role": "Electrical Engineer",
    "location": "Dharmavaram Handloom Market, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Dharmavaram Handloom Market without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Dharmavaram Handloom Market, Sri Sathya Sai to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "73 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-230",
    "author": "Haritha A. (Alluri)",
    "role": "Aqua Farmer",
    "location": "Park Road, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Park Road at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Park Road, Kurnool to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "74 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-231",
    "author": "Srinivas G. (Gottipati)",
    "role": "Supermarket Manager",
    "location": "Adoni Cotton Market, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Adoni Cotton Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Adoni Cotton Market, Kurnool. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "75 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-232",
    "author": "Padmavathi K. (Karnam)",
    "role": "Hospital Administrator",
    "location": "Yemmiganur, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Yemmiganur",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Yemmiganur, Kurnool. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "76 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-233",
    "author": "Harischandra Prasad M. (Mudragada)",
    "role": "Senior Advocate",
    "location": "Nandyal Town Center",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Nandyal Town Center without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Nandyal Town Center to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "77 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-234",
    "author": "Saraswathi V. (Vangaveeti)",
    "role": "Transport Operator",
    "location": "Allagadda Stone Market, Nandyal",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Allagadda Stone Market at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Allagadda Stone Market, Nandyal and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "78 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-235",
    "author": "Anil Kumar D. (Devineni)",
    "role": "Hotel Proprietor",
    "location": "Kukatpally Housing Board (KPHB), Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kukatpally Housing Board (KPHB)",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kukatpally Housing Board (KPHB), Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "79 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-236",
    "author": "Revathi P. (Parvathaneni)",
    "role": "Mechanical Engineer",
    "location": "Ameerpet Metro Hub, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Ameerpet Metro Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Ameerpet Metro Hub, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "80 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-237",
    "author": "Rajeshwara Rao T. (Tammineedi)",
    "role": "Telecom Tower Specialist",
    "location": "Dilsukhnagar Bus Stand Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Dilsukhnagar Bus Stand Road without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Dilsukhnagar Bus Stand Road, Hyderabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "81 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-238",
    "author": "Jyothi A. (Adusumilli)",
    "role": "Organic Store Owner",
    "location": "Madhapur IT Corridor, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Madhapur IT Corridor at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Madhapur IT Corridor, Hyderabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "82 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-239",
    "author": "Siva Prasad K. (Kovelamudi)",
    "role": "Retired Govt Officer",
    "location": "Gachibowli Financial District, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gachibowli Financial District",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gachibowli Financial District, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "83 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-240",
    "author": "Shalini G. (Golla)",
    "role": "Software Engineer (MNC)",
    "location": "Secunderabad Clock Tower, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Secunderabad Clock Tower",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Secunderabad Clock Tower, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "84 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-241",
    "author": "Mahesh R. (Reddy)",
    "role": "Paddy & Cotton Farmer",
    "location": "AS Rao Nagar, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in AS Rao Nagar without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in AS Rao Nagar, Secunderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "85 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-242",
    "author": "Lakshmi Prasanna G. (Goud)",
    "role": "High School Teacher",
    "location": "Koti Jewellery Market, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Koti Jewellery Market at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Koti Jewellery Market, Hyderabad to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "86 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-243",
    "author": "Niranjan R. (Rao)",
    "role": "Textile Merchant",
    "location": "LB Nagar Ring Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in LB Nagar Ring Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in LB Nagar Ring Road, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "87 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-244",
    "author": "Kanaka Durga N. (Naidu)",
    "role": "Civil Contractor",
    "location": "Jubilee Hills Road No. 36, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Jubilee Hills Road No. 36",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Jubilee Hills Road No. 36, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "88 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-245",
    "author": "Trinadha Rao C. (Choudhary)",
    "role": "Bank Senior Officer",
    "location": "Mehdipatnam Bus Depot, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Mehdipatnam Bus Depot without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Mehdipatnam Bus Depot, Hyderabad to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "89 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-246",
    "author": "Sri Vani V. (Varma)",
    "role": "Homemaker",
    "location": "Uppal Metro Station Area, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Uppal Metro Station Area at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Uppal Metro Station Area, Medchal-Malkajgiri and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "90 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-247",
    "author": "Khaja Moinuddin S. (Sastry)",
    "role": "Retail Pharmacist",
    "location": "Kompally NH44 Corridor, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kompally NH44 Corridor",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kompally NH44 Corridor, Medchal-Malkajgiri. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "91 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-248",
    "author": "Sudha S. (Sharma)",
    "role": "Rice Mill Owner",
    "location": "Malkajgiri Town, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Malkajgiri Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Malkajgiri Town, Medchal-Malkajgiri. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "92 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-249",
    "author": "Venkateswara Rao J. (Jain)",
    "role": "School Principal",
    "location": "Bachupally, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Bachupally without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Bachupally, Medchal-Malkajgiri to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "93 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-250",
    "author": "Grace Mary Y. (Yadav)",
    "role": "Automobile Dealer",
    "location": "Kondapur, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Kondapur at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Kondapur, Hyderabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "94 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-251",
    "author": "Suresh Kumar S. (Shetty)",
    "role": "Assistant Professor",
    "location": "Himayatnagar Main Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Himayatnagar Main Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Himayatnagar Main Road, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "95 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-252",
    "author": "Sunitha P. (Pillai)",
    "role": "Poultry Farm Owner",
    "location": "Begumpet Airport Area, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Begumpet Airport Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Begumpet Airport Area, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "96 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-253",
    "author": "Phani Bhushan A. (Acharya)",
    "role": "Kirana Store Owner",
    "location": "Tarnaka, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Tarnaka without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Tarnaka, Secunderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "97 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-254",
    "author": "Vasundhara S. (Swamy)",
    "role": "Diagnostic Lab Specialist",
    "location": "Miyapur Junction, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Miyapur Junction at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Miyapur Junction, Hyderabad to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "98 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-255",
    "author": "Kishore R. (Raju)",
    "role": "Handloom Weaver",
    "location": "Chanda Nagar, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Chanda Nagar",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Chanda Nagar, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "99 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-256",
    "author": "Sireesha M. (Moorthy)",
    "role": "Jewellery Connoisseur",
    "location": "Manikonda, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Manikonda",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Manikonda, Ranga Reddy. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "100 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-257",
    "author": "Murali Krishna D. (Deshmukh)",
    "role": "Building Contractor",
    "location": "Attapur Pillar 140, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Attapur Pillar 140 without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Attapur Pillar 140, Ranga Reddy to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "101 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-258",
    "author": "Shabana K. (Kulkarni)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Shadnagar Highway Hub, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Shadnagar Highway Hub at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Shadnagar Highway Hub, Ranga Reddy and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "102 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-259",
    "author": "Gopala Krishna J. (Joshi)",
    "role": "Cotton Export Merchant",
    "location": "Ibrahimpatnam, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Ibrahimpatnam",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Ibrahimpatnam, Ranga Reddy. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "103 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-260",
    "author": "Gayatri P. (Patel)",
    "role": "Hardware Shop Owner",
    "location": "Subedari, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Subedari",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Subedari, Hanamkonda. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "104 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-261",
    "author": "Upendra V. (Venkata)",
    "role": "Chartered Accountant",
    "location": "Kazipet Junction, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Kazipet Junction without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Kazipet Junction, Hanamkonda to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "105 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-262",
    "author": "Sailaja K. (Kakarla)",
    "role": "Real Estate Consultant",
    "location": "Hanumakonda Road, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Hanumakonda Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Hanumakonda Road, Warangal to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "106 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-263",
    "author": "Chaitanya G. (Gullapalli)",
    "role": "Electrical Engineer",
    "location": "Narsampet Town, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Narsampet Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Narsampet Town, Warangal. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "107 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-264",
    "author": "Prameela M. (Mulpuri)",
    "role": "Aqua Farmer",
    "location": "Tower Circle, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Tower Circle",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Tower Circle, Karimnagar. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "108 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-265",
    "author": "Mirza Baig C. (Chinta)",
    "role": "Supermarket Manager",
    "location": "Collectorate Road, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Collectorate Road without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Collectorate Road, Karimnagar to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "109 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-266",
    "author": "Supriya N. (Nalluri)",
    "role": "Hospital Administrator",
    "location": "Huzurabad Town, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Huzurabad Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Huzurabad Town, Karimnagar to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "110 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-267",
    "author": "Subba Rao Y. (Yalamanchili)",
    "role": "Senior Advocate",
    "location": "Godavarikhani Thermal City, Peddapalli",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Godavarikhani Thermal City",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Godavarikhani Thermal City, Peddapalli. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "111 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-268",
    "author": "Sujatha K. (Kondapalli)",
    "role": "Transport Operator",
    "location": "Peddapalli Town Center",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Peddapalli Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Peddapalli Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "112 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-269",
    "author": "Ramesh Babu G. (Garapati)",
    "role": "Hotel Proprietor",
    "location": "Jagtial Gold Market",
    "district": "jagtial",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Jagtial Gold Market without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Jagtial Gold Market to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "113 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-270",
    "author": "Madhavi C. (Chowdary)",
    "role": "Mechanical Engineer",
    "location": "Korutla Textile Hub, Jagtial",
    "district": "jagtial",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Korutla Textile Hub at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Korutla Textile Hub, Jagtial and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "114 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-271",
    "author": "Nageswara Rao K. (Kalla)",
    "role": "Telecom Tower Specialist",
    "location": "Sircilla Handloom Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Sircilla Handloom Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Sircilla Handloom Town, Rajanna Sircilla. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "115 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-272",
    "author": "Rama Devi B. (Bhamidipati)",
    "role": "Organic Store Owner",
    "location": "Vemulawada Temple Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vemulawada Temple Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vemulawada Temple Town, Rajanna Sircilla. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "116 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-273",
    "author": "Girish V. (Vaddi)",
    "role": "Retired Govt Officer",
    "location": "Hyderabad Road, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Hyderabad Road without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Hyderabad Road, Nizamabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "117 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-274",
    "author": "Anitha V. (Velagapudi)",
    "role": "Software Engineer (MNC)",
    "location": "Armoor Commercial Center, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Armoor Commercial Center at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Armoor Commercial Center, Nizamabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "118 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-275",
    "author": "Ashok Kumar M. (Mikkilineni)",
    "role": "Paddy & Cotton Farmer",
    "location": "Bodhan Town, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bodhan Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bodhan Town, Nizamabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "119 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-276",
    "author": "Mercy D. (Denduluri)",
    "role": "High School Teacher",
    "location": "Kamareddy Town Center",
    "district": "kamareddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kamareddy Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kamareddy Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "120 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-277",
    "author": "Sudhakar R. (Ravipati)",
    "role": "Textile Merchant",
    "location": "Adilabad Cotton Hub",
    "district": "adilabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Adilabad Cotton Hub without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Adilabad Cotton Hub to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "121 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-278",
    "author": "Bhavani P. (Penmetsa)",
    "role": "Civil Contractor",
    "location": "Nirmal Toys & Craft Town",
    "district": "nirmal",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Nirmal Toys & Craft Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Nirmal Toys & Craft Town to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "122 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-279",
    "author": "Kalyan Chakravarthy D. (Datla)",
    "role": "Bank Senior Officer",
    "location": "Bhainsa Town, Nirmal",
    "district": "nirmal",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bhainsa Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bhainsa Town, Nirmal. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "123 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-280",
    "author": "Sandhya Rani S. (Sagi)",
    "role": "Homemaker",
    "location": "Mancherial Coal Belt Hub",
    "district": "mancherial",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Mancherial Coal Belt Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Mancherial Coal Belt Hub. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "124 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-281",
    "author": "Sai Kumar B. (Bhupathiraju)",
    "role": "Retail Pharmacist",
    "location": "Bellampally, Mancherial",
    "district": "mancherial",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Bellampally without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Bellampally, Mancherial to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "125 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-282",
    "author": "Divya A. (Alluri)",
    "role": "Rice Mill Owner",
    "location": "Asifabad Town",
    "district": "kumuram-bheem-asifabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Asifabad Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Asifabad Town and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "126 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-283",
    "author": "John Peter G. (Gottipati)",
    "role": "School Principal",
    "location": "Wyra Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Wyra Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Wyra Road, Khammam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "127 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-284",
    "author": "Fatima Begum K. (Karnam)",
    "role": "Automobile Dealer",
    "location": "Bus Stand Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bus Stand Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bus Stand Road, Khammam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "128 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-285",
    "author": "Ramakrishna M. (Mudragada)",
    "role": "Assistant Professor",
    "location": "Sathupally Coal Hub, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Sathupally Coal Hub without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Sathupally Coal Hub, Khammam to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "129 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-286",
    "author": "Anuradha V. (Vangaveeti)",
    "role": "Poultry Farm Owner",
    "location": "Kothagudem Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Kothagudem Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Kothagudem Town to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "130 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-287",
    "author": "Praveen Kumar D. (Devineni)",
    "role": "Kirana Store Owner",
    "location": "Paloncha, Bhadradri Kothagudem",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Paloncha",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Paloncha, Bhadradri Kothagudem. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "131 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-288",
    "author": "Prameela P. (Parvathaneni)",
    "role": "Diagnostic Lab Specialist",
    "location": "Bhadrachalam Temple Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bhadrachalam Temple Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bhadrachalam Temple Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "132 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-289",
    "author": "Madusudhan T. (Tammineedi)",
    "role": "Handloom Weaver",
    "location": "Clock Tower, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Clock Tower without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Clock Tower, Nalgonda to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "133 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-290",
    "author": "Deepika A. (Adusumilli)",
    "role": "Jewellery Connoisseur",
    "location": "Miryalaguda Rice Mill Hub, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Miryalaguda Rice Mill Hub at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Miryalaguda Rice Mill Hub, Nalgonda to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "134 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-291",
    "author": "Dileep Kumar K. (Kovelamudi)",
    "role": "Building Contractor",
    "location": "Suryapet Highway Junction",
    "district": "suryapet",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Suryapet Highway Junction",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Suryapet Highway Junction. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "135 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-292",
    "author": "Meenakshi G. (Golla)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Kodad Town, Suryapet",
    "district": "suryapet",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kodad Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kodad Town, Suryapet. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "136 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-293",
    "author": "Laxman R. (Reddy)",
    "role": "Cotton Export Merchant",
    "location": "Bhongir Fort Road, Yadadri Bhuvanagiri",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Bhongir Fort Road without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Bhongir Fort Road, Yadadri Bhuvanagiri to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "137 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-294",
    "author": "Swathi G. (Goud)",
    "role": "Hardware Shop Owner",
    "location": "Yadagirigutta Temple Town",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Yadagirigutta Temple Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Yadagirigutta Temple Town and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "138 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-295",
    "author": "Sanjeeva Rao R. (Rao)",
    "role": "Chartered Accountant",
    "location": "Clock Tower, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Clock Tower",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Clock Tower, Mahabubnagar. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "139 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-296",
    "author": "Latha N. (Naidu)",
    "role": "Real Estate Consultant",
    "location": "Jadcherla Industrial Area, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Jadcherla Industrial Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Jadcherla Industrial Area, Mahabubnagar. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "140 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-297",
    "author": "Raja Sekhar C. (Choudhary)",
    "role": "Electrical Engineer",
    "location": "Nagarkurnool Town Center",
    "district": "nagarkurnool",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Nagarkurnool Town Center without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Nagarkurnool Town Center to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "141 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-298",
    "author": "Usha Rani V. (Varma)",
    "role": "Aqua Farmer",
    "location": "Wanaparthy Palace Road",
    "district": "wanaparthy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Wanaparthy Palace Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Wanaparthy Palace Road to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "142 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-299",
    "author": "Tarun S. (Sastry)",
    "role": "Supermarket Manager",
    "location": "Gadwal Handloom Center, Jogulamba Gadwal",
    "district": "jogulamba-gadwal",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gadwal Handloom Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gadwal Handloom Center, Jogulamba Gadwal. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "143 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-300",
    "author": "Kavitha S. (Sharma)",
    "role": "Hospital Administrator",
    "location": "Narayanpet Silk Town",
    "district": "narayanpet",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Narayanpet Silk Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Narayanpet Silk Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "144 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-301",
    "author": "David Raju J. (Jain)",
    "role": "Senior Advocate",
    "location": "Sangareddy District HQ",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Sangareddy District HQ without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Sangareddy District HQ to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "145 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-302",
    "author": "Padmaja Rani Y. (Yadav)",
    "role": "Transport Operator",
    "location": "Patancheru Industrial Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Patancheru Industrial Hub at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Patancheru Industrial Hub, Sangareddy to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "146 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-303",
    "author": "Narasimha Rao S. (Shetty)",
    "role": "Hotel Proprietor",
    "location": "Zaheerabad Mahindra Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Zaheerabad Mahindra Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Zaheerabad Mahindra Hub, Sangareddy. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "147 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-304",
    "author": "Rajyalakshmi P. (Pillai)",
    "role": "Mechanical Engineer",
    "location": "Siddipet Town Center",
    "district": "siddipet",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Siddipet Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Siddipet Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "148 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-305",
    "author": "Vijay Bhaskar A. (Acharya)",
    "role": "Telecom Tower Specialist",
    "location": "Gajwel, Siddipet",
    "district": "siddipet",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Gajwel without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Gajwel, Siddipet to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "149 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-306",
    "author": "Radhika S. (Swamy)",
    "role": "Organic Store Owner",
    "location": "Medak Church Road",
    "district": "medak",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Medak Church Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Medak Church Road and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "150 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-307",
    "author": "Bhanu Prakash R. (Raju)",
    "role": "Retired Govt Officer",
    "location": "Tandur Stone Hub, Vikarabad",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tandur Stone Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tandur Stone Hub, Vikarabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "151 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-308",
    "author": "Manjula M. (Moorthy)",
    "role": "Software Engineer (MNC)",
    "location": "Vikarabad Town Center",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vikarabad Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vikarabad Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "152 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-309",
    "author": "Venkata Ramana D. (Deshmukh)",
    "role": "Paddy & Cotton Farmer",
    "location": "Gajuwaka, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Gajuwaka without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Gajuwaka, Visakhapatnam to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "153 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-310",
    "author": "Ayesha K. (Kulkarni)",
    "role": "High School Teacher",
    "location": "Dwaraka Nagar, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Dwaraka Nagar at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Dwaraka Nagar, Visakhapatnam to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "154 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-311",
    "author": "Hanumantha Rao J. (Joshi)",
    "role": "Textile Merchant",
    "location": "MVP Colony, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in MVP Colony",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in MVP Colony, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "155 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-312",
    "author": "Vijaya Lakshmi P. (Patel)",
    "role": "Civil Contractor",
    "location": "Madhurawada, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Madhurawada",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Madhurawada, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "156 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-313",
    "author": "Bhaskar V. (Venkata)",
    "role": "Bank Senior Officer",
    "location": "Pendurthi, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Pendurthi without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Pendurthi, Visakhapatnam to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "157 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-314",
    "author": "Kalyani K. (Kakarla)",
    "role": "Homemaker",
    "location": "Kurmannapalem, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Kurmannapalem at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Kurmannapalem, Visakhapatnam to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "158 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-315",
    "author": "Jagadeesh G. (Gullapalli)",
    "role": "Retail Pharmacist",
    "location": "Anakapalli Town",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Anakapalli Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Anakapalli Town. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "159 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-316",
    "author": "Haritha M. (Mulpuri)",
    "role": "Rice Mill Owner",
    "location": "Atchutapuram Industrial Hub, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Atchutapuram Industrial Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Atchutapuram Industrial Hub, Anakapalli. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "160 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-317",
    "author": "Mohammed Abdul C. (Chinta)",
    "role": "School Principal",
    "location": "Yelamanchili, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Yelamanchili without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Yelamanchili, Anakapalli to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "161 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-318",
    "author": "Padmavathi N. (Nalluri)",
    "role": "Automobile Dealer",
    "location": "Vizianagaram Main Town",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Vizianagaram Main Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Vizianagaram Main Town and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "162 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-319",
    "author": "Satyanarayana Y. (Yalamanchili)",
    "role": "Assistant Professor",
    "location": "Bobbili Town, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bobbili Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bobbili Town, Vizianagaram. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "163 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-320",
    "author": "Saraswathi K. (Kondapalli)",
    "role": "Poultry Farm Owner",
    "location": "Salur Road, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Salur Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Salur Road, Vizianagaram. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "164 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-321",
    "author": "Chandra Sekhar G. (Garapati)",
    "role": "Kirana Store Owner",
    "location": "Srikakulam Town",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Srikakulam Town without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Srikakulam Town to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "165 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-322",
    "author": "Revathi C. (Chowdary)",
    "role": "Diagnostic Lab Specialist",
    "location": "Palasa Cashew Market, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Palasa Cashew Market at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Palasa Cashew Market, Srikakulam to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "166 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-323",
    "author": "Prasad K. (Kalla)",
    "role": "Handloom Weaver",
    "location": "Tekkali Town, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tekkali Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tekkali Town, Srikakulam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "167 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-324",
    "author": "Jyothi B. (Bhamidipati)",
    "role": "Jewellery Connoisseur",
    "location": "Parvathipuram Town",
    "district": "parvathipuram-manyam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Parvathipuram Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Parvathipuram Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "168 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-325",
    "author": "Koteswara Rao V. (Vaddi)",
    "role": "Building Contractor",
    "location": "Araku Valley, Alluri Sitharama Raju",
    "district": "alluri-sitharama-raju",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Araku Valley without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Araku Valley, Alluri Sitharama Raju to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "169 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-326",
    "author": "Shalini V. (Velagapudi)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Benz Circle, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Benz Circle at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Benz Circle, Vijayawada to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "170 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-327",
    "author": "Srikanth M. (Mikkilineni)",
    "role": "Cotton Export Merchant",
    "location": "One Town Commercial Area, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in One Town Commercial Area",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in One Town Commercial Area, Vijayawada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "171 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-328",
    "author": "Lakshmi Prasanna D. (Denduluri)",
    "role": "Hardware Shop Owner",
    "location": "Patamata, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Patamata",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Patamata, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "172 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-329",
    "author": "Vamshi Krishna R. (Ravipati)",
    "role": "Chartered Accountant",
    "location": "Governorpet, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Governorpet without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Governorpet, Vijayawada to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "173 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-330",
    "author": "Kanaka Durga P. (Penmetsa)",
    "role": "Real Estate Consultant",
    "location": "Gollapudi Market, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Gollapudi Market at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Gollapudi Market, Vijayawada and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "174 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-331",
    "author": "Ravindra D. (Datla)",
    "role": "Electrical Engineer",
    "location": "Nandigama Town, NTR",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nandigama Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nandigama Town, NTR. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "175 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-332",
    "author": "Sri Vani S. (Sagi)",
    "role": "Aqua Farmer",
    "location": "Machilipatnam Port Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Machilipatnam Port Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Machilipatnam Port Town, Krishna. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "176 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-333",
    "author": "Samba Siva Rao B. (Bhupathiraju)",
    "role": "Supermarket Manager",
    "location": "Gudivada Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Gudivada Town without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Gudivada Town, Krishna to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "177 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-334",
    "author": "Sudha A. (Alluri)",
    "role": "Hospital Administrator",
    "location": "Vuyyuru Sugar Factory Road, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Vuyyuru Sugar Factory Road at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Vuyyuru Sugar Factory Road, Krishna to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "178 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-335",
    "author": "Syed Ibrahim G. (Gottipati)",
    "role": "Senior Advocate",
    "location": "Brodipet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Brodipet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Brodipet, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "179 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-336",
    "author": "Grace Mary K. (Karnam)",
    "role": "Transport Operator",
    "location": "Lakshmipuram, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Lakshmipuram",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Lakshmipuram, Guntur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "180 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-337",
    "author": "Srinivas M. (Mudragada)",
    "role": "Hotel Proprietor",
    "location": "Arundelpet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Arundelpet without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Arundelpet, Guntur to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "181 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-338",
    "author": "Sunitha V. (Vangaveeti)",
    "role": "Mechanical Engineer",
    "location": "Mangalagiri IT Tower Area, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Mangalagiri IT Tower Area at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Mangalagiri IT Tower Area, Guntur to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "182 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-339",
    "author": "Harischandra Prasad D. (Devineni)",
    "role": "Telecom Tower Specialist",
    "location": "Tenali Gold Market, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tenali Gold Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tenali Gold Market, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "183 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-340",
    "author": "Vasundhara P. (Parvathaneni)",
    "role": "Organic Store Owner",
    "location": "Narasaraopet Town, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Narasaraopet Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Narasaraopet Town, Palnadu. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "184 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-341",
    "author": "Anil Kumar T. (Tammineedi)",
    "role": "Retired Govt Officer",
    "location": "Piduguralla Lime Hub, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Piduguralla Lime Hub without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Piduguralla Lime Hub, Palnadu to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "185 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-342",
    "author": "Sireesha A. (Adusumilli)",
    "role": "Software Engineer (MNC)",
    "location": "Sattenapalle, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Sattenapalle at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Sattenapalle, Palnadu and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "186 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-343",
    "author": "Rajeshwara Rao K. (Kovelamudi)",
    "role": "Paddy & Cotton Farmer",
    "location": "Chirala Handloom Center, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Chirala Handloom Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Chirala Handloom Center, Bapatla. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "187 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-344",
    "author": "Shabana G. (Golla)",
    "role": "High School Teacher",
    "location": "Bapatla Town Center",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bapatla Town Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bapatla Town Center. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "188 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-345",
    "author": "Siva Prasad R. (Reddy)",
    "role": "Textile Merchant",
    "location": "Repalle, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Repalle without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Repalle, Bapatla to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "189 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-346",
    "author": "Gayatri G. (Goud)",
    "role": "Civil Contractor",
    "location": "Danavaipeta, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Danavaipeta at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Danavaipeta, Rajahmundry to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "190 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-347",
    "author": "Mahesh R. (Rao)",
    "role": "Bank Senior Officer",
    "location": "Kotipalli Bus Stand Road, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kotipalli Bus Stand Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kotipalli Bus Stand Road, Rajahmundry. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "191 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-348",
    "author": "Sailaja N. (Naidu)",
    "role": "Homemaker",
    "location": "Kovvur Town, East Godavari",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kovvur Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kovvur Town, East Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "192 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-349",
    "author": "Niranjan C. (Choudhary)",
    "role": "Retail Pharmacist",
    "location": "Main Road, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Main Road without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Main Road, Kakinada to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "193 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-350",
    "author": "Prameela V. (Varma)",
    "role": "Rice Mill Owner",
    "location": "Bhanugudi Junction, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Bhanugudi Junction at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Bhanugudi Junction, Kakinada to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "194 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-351",
    "author": "Trinadha Rao S. (Sastry)",
    "role": "School Principal",
    "location": "Tuni Town, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tuni Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tuni Town, Kakinada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "195 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-352",
    "author": "Supriya S. (Sharma)",
    "role": "Automobile Dealer",
    "location": "Amalapuram Town, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Amalapuram Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Amalapuram Town, Konaseema. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "196 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-353",
    "author": "Khaja Moinuddin J. (Jain)",
    "role": "Assistant Professor",
    "location": "Ravulapalem Coconut Hub, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Ravulapalem Coconut Hub without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Ravulapalem Coconut Hub, Konaseema to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "197 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-354",
    "author": "Sujatha Y. (Yadav)",
    "role": "Poultry Farm Owner",
    "location": "Razole, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Razole at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Razole, Konaseema and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "198 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-355",
    "author": "Venkateswara Rao S. (Shetty)",
    "role": "Kirana Store Owner",
    "location": "RR Pet, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in RR Pet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in RR Pet, Eluru. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "199 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-356",
    "author": "Madhavi P. (Pillai)",
    "role": "Diagnostic Lab Specialist",
    "location": "Jangareddygudem, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Jangareddygudem",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Jangareddygudem, Eluru. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "200 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-357",
    "author": "Suresh Kumar A. (Acharya)",
    "role": "Handloom Weaver",
    "location": "Nuzvid Mango Hub, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Nuzvid Mango Hub without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Nuzvid Mango Hub, Eluru to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "201 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-358",
    "author": "Rama Devi S. (Swamy)",
    "role": "Jewellery Connoisseur",
    "location": "Bhimavaram Aqua Market, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Bhimavaram Aqua Market at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Bhimavaram Aqua Market, West Godavari to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "202 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-359",
    "author": "Phani Bhushan R. (Raju)",
    "role": "Building Contractor",
    "location": "Tadepalligudem Commercial Hub, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tadepalligudem Commercial Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tadepalligudem Commercial Hub, West Godavari. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "203 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-360",
    "author": "Anitha M. (Moorthy)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Tanuku Town, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Tanuku Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Tanuku Town, West Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "204 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-361",
    "author": "Kishore D. (Deshmukh)",
    "role": "Cotton Export Merchant",
    "location": "Kurnool Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Kurnool Road without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Kurnool Road, Ongole to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "25 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-362",
    "author": "Mercy K. (Kulkarni)",
    "role": "Hardware Shop Owner",
    "location": "Trunk Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Trunk Road at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Trunk Road, Ongole to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "26 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-363",
    "author": "Murali Krishna J. (Joshi)",
    "role": "Chartered Accountant",
    "location": "Markapur Granite Hub, Prakasam",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Markapur Granite Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Markapur Granite Hub, Prakasam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "27 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-364",
    "author": "Bhavani P. (Patel)",
    "role": "Real Estate Consultant",
    "location": "Trunk Road, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Trunk Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Trunk Road, Nellore. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "28 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-365",
    "author": "Gopala Krishna V. (Venkata)",
    "role": "Electrical Engineer",
    "location": "Dargamitta, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Dargamitta without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Dargamitta, Nellore to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "29 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-366",
    "author": "Sandhya Rani K. (Kakarla)",
    "role": "Aqua Farmer",
    "location": "Gudur Lemon Market, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Gudur Lemon Market at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Gudur Lemon Market, SPSR Nellore and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "30 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-367",
    "author": "Upendra G. (Gullapalli)",
    "role": "Supermarket Manager",
    "location": "Kavali Town, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kavali Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kavali Town, SPSR Nellore. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "31 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-368",
    "author": "Divya M. (Mulpuri)",
    "role": "Hospital Administrator",
    "location": "KT Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in KT Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in KT Road, Tirupati. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "32 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-369",
    "author": "Chaitanya C. (Chinta)",
    "role": "Senior Advocate",
    "location": "Alipiri Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Alipiri Road without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Alipiri Road, Tirupati to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "33 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-370",
    "author": "Fatima Begum N. (Nalluri)",
    "role": "Transport Operator",
    "location": "Srikalahasti Temple Area, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Srikalahasti Temple Area at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Srikalahasti Temple Area, Tirupati to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "34 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-371",
    "author": "Mirza Baig Y. (Yalamanchili)",
    "role": "Hotel Proprietor",
    "location": "Chittoor Town Center",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Chittoor Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Chittoor Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "35 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-372",
    "author": "Anuradha K. (Kondapalli)",
    "role": "Mechanical Engineer",
    "location": "Palamaner, Chittoor",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Palamaner",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Palamaner, Chittoor. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "36 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-373",
    "author": "Subba Rao G. (Garapati)",
    "role": "Telecom Tower Specialist",
    "location": "Madanapalle Silk Center, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Madanapalle Silk Center without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Madanapalle Silk Center, Annamayya to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "37 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-374",
    "author": "Prameela C. (Chowdary)",
    "role": "Organic Store Owner",
    "location": "Rayachoti Town, Annamayya",
    "district": "annamayya",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Rayachoti Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Rayachoti Town, Annamayya to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "38 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-375",
    "author": "Ramesh Babu K. (Kalla)",
    "role": "Retired Govt Officer",
    "location": "Seven Roads Junction, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Seven Roads Junction",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Seven Roads Junction, YSR Kadapa. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "39 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-376",
    "author": "Deepika B. (Bhamidipati)",
    "role": "Software Engineer (MNC)",
    "location": "Proddatur Gold Market, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Proddatur Gold Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Proddatur Gold Market, YSR Kadapa. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "40 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-377",
    "author": "Nageswara Rao V. (Vaddi)",
    "role": "Paddy & Cotton Farmer",
    "location": "Pulivendula, YSR Kadapa",
    "district": "ysr-kadapa",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Pulivendula without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Pulivendula, YSR Kadapa to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "41 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-378",
    "author": "Meenakshi V. (Velagapudi)",
    "role": "High School Teacher",
    "location": "Subhash Road, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Subhash Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Subhash Road, Anantapur and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "42 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-379",
    "author": "Girish M. (Mikkilineni)",
    "role": "Textile Merchant",
    "location": "Clock Tower Area, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Clock Tower Area",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Clock Tower Area, Anantapur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "43 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-380",
    "author": "Swathi D. (Denduluri)",
    "role": "Civil Contractor",
    "location": "Guntakal Railway Hub, Anantapur",
    "district": "anantapur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Guntakal Railway Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Guntakal Railway Hub, Anantapur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "44 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-381",
    "author": "Ashok Kumar R. (Ravipati)",
    "role": "Bank Senior Officer",
    "location": "Hindupur Industrial Zone, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Hindupur Industrial Zone without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Hindupur Industrial Zone, Sri Sathya Sai to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "45 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-382",
    "author": "Latha P. (Penmetsa)",
    "role": "Homemaker",
    "location": "Puttaparthi, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Puttaparthi at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Puttaparthi, Sri Sathya Sai to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "46 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-383",
    "author": "Sudhakar D. (Datla)",
    "role": "Retail Pharmacist",
    "location": "Dharmavaram Handloom Market, Sri Sathya Sai",
    "district": "sri-sathya-sai",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dharmavaram Handloom Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dharmavaram Handloom Market, Sri Sathya Sai. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "47 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-384",
    "author": "Usha Rani S. (Sagi)",
    "role": "Rice Mill Owner",
    "location": "Park Road, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Park Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Park Road, Kurnool. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "48 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-385",
    "author": "Kalyan Chakravarthy B. (Bhupathiraju)",
    "role": "School Principal",
    "location": "Adoni Cotton Market, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Adoni Cotton Market without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Adoni Cotton Market, Kurnool to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "49 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-386",
    "author": "Kavitha A. (Alluri)",
    "role": "Automobile Dealer",
    "location": "Yemmiganur, Kurnool",
    "district": "kurnool",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Yemmiganur at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Yemmiganur, Kurnool to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "50 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-387",
    "author": "Sai Kumar G. (Gottipati)",
    "role": "Assistant Professor",
    "location": "Nandyal Town Center",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nandyal Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nandyal Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "51 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-388",
    "author": "Padmaja Rani K. (Karnam)",
    "role": "Poultry Farm Owner",
    "location": "Allagadda Stone Market, Nandyal",
    "district": "nandyal",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Allagadda Stone Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Allagadda Stone Market, Nandyal. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "52 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-389",
    "author": "John Peter M. (Mudragada)",
    "role": "Kirana Store Owner",
    "location": "Kukatpally Housing Board (KPHB), Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Kukatpally Housing Board (KPHB) without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Kukatpally Housing Board (KPHB), Hyderabad to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "53 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-390",
    "author": "Rajyalakshmi V. (Vangaveeti)",
    "role": "Diagnostic Lab Specialist",
    "location": "Ameerpet Metro Hub, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Ameerpet Metro Hub at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Ameerpet Metro Hub, Hyderabad and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "54 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-391",
    "author": "Ramakrishna D. (Devineni)",
    "role": "Handloom Weaver",
    "location": "Dilsukhnagar Bus Stand Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dilsukhnagar Bus Stand Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dilsukhnagar Bus Stand Road, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "55 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-392",
    "author": "Radhika P. (Parvathaneni)",
    "role": "Jewellery Connoisseur",
    "location": "Madhapur IT Corridor, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Madhapur IT Corridor",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Madhapur IT Corridor, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "56 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-393",
    "author": "Praveen Kumar T. (Tammineedi)",
    "role": "Building Contractor",
    "location": "Gachibowli Financial District, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Gachibowli Financial District without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Gachibowli Financial District, Hyderabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "57 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-394",
    "author": "Manjula A. (Adusumilli)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Secunderabad Clock Tower, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Secunderabad Clock Tower at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Secunderabad Clock Tower, Hyderabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "58 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-395",
    "author": "Madusudhan K. (Kovelamudi)",
    "role": "Cotton Export Merchant",
    "location": "AS Rao Nagar, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in AS Rao Nagar",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in AS Rao Nagar, Secunderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "59 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-396",
    "author": "Ayesha G. (Golla)",
    "role": "Hardware Shop Owner",
    "location": "Koti Jewellery Market, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Koti Jewellery Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Koti Jewellery Market, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "60 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-397",
    "author": "Dileep Kumar R. (Reddy)",
    "role": "Chartered Accountant",
    "location": "LB Nagar Ring Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in LB Nagar Ring Road without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in LB Nagar Ring Road, Hyderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "61 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-398",
    "author": "Vijaya Lakshmi G. (Goud)",
    "role": "Real Estate Consultant",
    "location": "Jubilee Hills Road No. 36, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Jubilee Hills Road No. 36 at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Jubilee Hills Road No. 36, Hyderabad to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "62 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-399",
    "author": "Laxman R. (Rao)",
    "role": "Electrical Engineer",
    "location": "Mehdipatnam Bus Depot, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Mehdipatnam Bus Depot",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Mehdipatnam Bus Depot, Hyderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "63 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-400",
    "author": "Kalyani N. (Naidu)",
    "role": "Aqua Farmer",
    "location": "Uppal Metro Station Area, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Uppal Metro Station Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Uppal Metro Station Area, Medchal-Malkajgiri. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "64 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-401",
    "author": "Sanjeeva Rao C. (Choudhary)",
    "role": "Supermarket Manager",
    "location": "Kompally NH44 Corridor, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Kompally NH44 Corridor without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Kompally NH44 Corridor, Medchal-Malkajgiri to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "65 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-402",
    "author": "Haritha V. (Varma)",
    "role": "Hospital Administrator",
    "location": "Malkajgiri Town, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Malkajgiri Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Malkajgiri Town, Medchal-Malkajgiri and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "66 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-403",
    "author": "Raja Sekhar S. (Sastry)",
    "role": "Senior Advocate",
    "location": "Bachupally, Medchal-Malkajgiri",
    "district": "medchal-malkajgiri",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bachupally",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bachupally, Medchal-Malkajgiri. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "67 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-404",
    "author": "Padmavathi S. (Sharma)",
    "role": "Transport Operator",
    "location": "Kondapur, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kondapur",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kondapur, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "68 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-405",
    "author": "Tarun J. (Jain)",
    "role": "Hotel Proprietor",
    "location": "Himayatnagar Main Road, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Himayatnagar Main Road without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Himayatnagar Main Road, Hyderabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "69 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-406",
    "author": "Saraswathi Y. (Yadav)",
    "role": "Mechanical Engineer",
    "location": "Begumpet Airport Area, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Begumpet Airport Area at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Begumpet Airport Area, Hyderabad to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "70 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-407",
    "author": "David Raju S. (Shetty)",
    "role": "Telecom Tower Specialist",
    "location": "Tarnaka, Secunderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Tarnaka",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Tarnaka, Secunderabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "71 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-408",
    "author": "Revathi P. (Pillai)",
    "role": "Organic Store Owner",
    "location": "Miyapur Junction, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Miyapur Junction",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Miyapur Junction, Hyderabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "72 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-409",
    "author": "Narasimha Rao A. (Acharya)",
    "role": "Retired Govt Officer",
    "location": "Chanda Nagar, Hyderabad",
    "district": "hyderabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Chanda Nagar without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Chanda Nagar, Hyderabad to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "73 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-410",
    "author": "Jyothi S. (Swamy)",
    "role": "Software Engineer (MNC)",
    "location": "Manikonda, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Manikonda at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Manikonda, Ranga Reddy to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "74 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-411",
    "author": "Vijay Bhaskar R. (Raju)",
    "role": "Paddy & Cotton Farmer",
    "location": "Attapur Pillar 140, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Attapur Pillar 140",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Attapur Pillar 140, Ranga Reddy. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "75 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-412",
    "author": "Shalini M. (Moorthy)",
    "role": "High School Teacher",
    "location": "Shadnagar Highway Hub, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Shadnagar Highway Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Shadnagar Highway Hub, Ranga Reddy. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "76 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-413",
    "author": "Bhanu Prakash D. (Deshmukh)",
    "role": "Textile Merchant",
    "location": "Ibrahimpatnam, Ranga Reddy",
    "district": "ranga-reddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Ibrahimpatnam without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Ibrahimpatnam, Ranga Reddy to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "77 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-414",
    "author": "Lakshmi Prasanna K. (Kulkarni)",
    "role": "Civil Contractor",
    "location": "Subedari, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Subedari at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Subedari, Hanamkonda and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "78 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-415",
    "author": "Venkata Ramana J. (Joshi)",
    "role": "Bank Senior Officer",
    "location": "Kazipet Junction, Hanamkonda",
    "district": "hanamkonda",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kazipet Junction",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kazipet Junction, Hanamkonda. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "79 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-416",
    "author": "Kanaka Durga P. (Patel)",
    "role": "Homemaker",
    "location": "Hanumakonda Road, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Hanumakonda Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Hanumakonda Road, Warangal. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "80 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-417",
    "author": "Hanumantha Rao V. (Venkata)",
    "role": "Retail Pharmacist",
    "location": "Narsampet Town, Warangal",
    "district": "warangal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Narsampet Town without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Narsampet Town, Warangal to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "81 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-418",
    "author": "Sri Vani K. (Kakarla)",
    "role": "Rice Mill Owner",
    "location": "Tower Circle, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Tower Circle at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Tower Circle, Karimnagar to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "82 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-419",
    "author": "Bhaskar G. (Gullapalli)",
    "role": "School Principal",
    "location": "Collectorate Road, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Collectorate Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Collectorate Road, Karimnagar. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "83 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-420",
    "author": "Sudha M. (Mulpuri)",
    "role": "Automobile Dealer",
    "location": "Huzurabad Town, Karimnagar",
    "district": "karimnagar",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Huzurabad Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Huzurabad Town, Karimnagar. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "84 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-421",
    "author": "Jagadeesh C. (Chinta)",
    "role": "Assistant Professor",
    "location": "Godavarikhani Thermal City, Peddapalli",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in Godavarikhani Thermal City without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in Godavarikhani Thermal City, Peddapalli to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "85 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-422",
    "author": "Grace Mary N. (Nalluri)",
    "role": "Poultry Farm Owner",
    "location": "Peddapalli Town Center",
    "district": "peddapalli",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Peddapalli Town Center at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Peddapalli Town Center to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "86 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-423",
    "author": "Mohammed Abdul Y. (Yalamanchili)",
    "role": "Kirana Store Owner",
    "location": "Jagtial Gold Market",
    "district": "jagtial",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Jagtial Gold Market",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Jagtial Gold Market. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "87 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-424",
    "author": "Sunitha K. (Kondapalli)",
    "role": "Diagnostic Lab Specialist",
    "location": "Korutla Textile Hub, Jagtial",
    "district": "jagtial",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Korutla Textile Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Korutla Textile Hub, Jagtial. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "88 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-425",
    "author": "Satyanarayana G. (Garapati)",
    "role": "Handloom Weaver",
    "location": "Sircilla Handloom Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Sircilla Handloom Town without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Sircilla Handloom Town, Rajanna Sircilla to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "89 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-426",
    "author": "Vasundhara C. (Chowdary)",
    "role": "Jewellery Connoisseur",
    "location": "Vemulawada Temple Town, Rajanna Sircilla",
    "district": "rajanna-sircilla",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Vemulawada Temple Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Vemulawada Temple Town, Rajanna Sircilla and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "90 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-427",
    "author": "Chandra Sekhar K. (Kalla)",
    "role": "Building Contractor",
    "location": "Hyderabad Road, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Hyderabad Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Hyderabad Road, Nizamabad. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "91 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-428",
    "author": "Sireesha B. (Bhamidipati)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Armoor Commercial Center, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Armoor Commercial Center",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Armoor Commercial Center, Nizamabad. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "92 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-429",
    "author": "Prasad V. (Vaddi)",
    "role": "Cotton Export Merchant",
    "location": "Bodhan Town, Nizamabad",
    "district": "nizamabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Bodhan Town without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Bodhan Town, Nizamabad to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "93 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-430",
    "author": "Shabana V. (Velagapudi)",
    "role": "Hardware Shop Owner",
    "location": "Kamareddy Town Center",
    "district": "kamareddy",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Kamareddy Town Center at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Kamareddy Town Center to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "94 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-431",
    "author": "Koteswara Rao M. (Mikkilineni)",
    "role": "Chartered Accountant",
    "location": "Adilabad Cotton Hub",
    "district": "adilabad",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Adilabad Cotton Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Adilabad Cotton Hub. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "95 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-432",
    "author": "Gayatri D. (Denduluri)",
    "role": "Real Estate Consultant",
    "location": "Nirmal Toys & Craft Town",
    "district": "nirmal",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Nirmal Toys & Craft Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Nirmal Toys & Craft Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "96 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-433",
    "author": "Srikanth R. (Ravipati)",
    "role": "Electrical Engineer",
    "location": "Bhainsa Town, Nirmal",
    "district": "nirmal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Bhainsa Town without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Bhainsa Town, Nirmal to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "97 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-434",
    "author": "Sailaja P. (Penmetsa)",
    "role": "Aqua Farmer",
    "location": "Mancherial Coal Belt Hub",
    "district": "mancherial",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Mancherial Coal Belt Hub at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Mancherial Coal Belt Hub to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "98 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-435",
    "author": "Vamshi Krishna D. (Datla)",
    "role": "Supermarket Manager",
    "location": "Bellampally, Mancherial",
    "district": "mancherial",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bellampally",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bellampally, Mancherial. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "99 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-436",
    "author": "Prameela S. (Sagi)",
    "role": "Hospital Administrator",
    "location": "Asifabad Town",
    "district": "kumuram-bheem-asifabad",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Asifabad Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Asifabad Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "100 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-437",
    "author": "Ravindra B. (Bhupathiraju)",
    "role": "Senior Advocate",
    "location": "Wyra Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Wyra Road without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Wyra Road, Khammam to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "101 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-438",
    "author": "Supriya A. (Alluri)",
    "role": "Transport Operator",
    "location": "Bus Stand Road, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Bus Stand Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Bus Stand Road, Khammam and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "102 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-439",
    "author": "Samba Siva Rao G. (Gottipati)",
    "role": "Hotel Proprietor",
    "location": "Sathupally Coal Hub, Khammam",
    "district": "khammam",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Sathupally Coal Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Sathupally Coal Hub, Khammam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "103 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-440",
    "author": "Sujatha K. (Karnam)",
    "role": "Mechanical Engineer",
    "location": "Kothagudem Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kothagudem Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kothagudem Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "104 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-441",
    "author": "Syed Ibrahim M. (Mudragada)",
    "role": "Telecom Tower Specialist",
    "location": "Paloncha, Bhadradri Kothagudem",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Paloncha without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Paloncha, Bhadradri Kothagudem to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "105 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-442",
    "author": "Madhavi V. (Vangaveeti)",
    "role": "Organic Store Owner",
    "location": "Bhadrachalam Temple Town",
    "district": "bhadradri-kothagudem",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Bhadrachalam Temple Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Bhadrachalam Temple Town to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "106 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-443",
    "author": "Srinivas D. (Devineni)",
    "role": "Retired Govt Officer",
    "location": "Clock Tower, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Clock Tower",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Clock Tower, Nalgonda. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "107 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-444",
    "author": "Rama Devi P. (Parvathaneni)",
    "role": "Software Engineer (MNC)",
    "location": "Miryalaguda Rice Mill Hub, Nalgonda",
    "district": "nalgonda",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Miryalaguda Rice Mill Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Miryalaguda Rice Mill Hub, Nalgonda. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "108 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-445",
    "author": "Harischandra Prasad T. (Tammineedi)",
    "role": "Paddy & Cotton Farmer",
    "location": "Suryapet Highway Junction",
    "district": "suryapet",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Suryapet Highway Junction without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Suryapet Highway Junction to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "109 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-446",
    "author": "Anitha A. (Adusumilli)",
    "role": "High School Teacher",
    "location": "Kodad Town, Suryapet",
    "district": "suryapet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Kodad Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Kodad Town, Suryapet to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "110 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-447",
    "author": "Anil Kumar K. (Kovelamudi)",
    "role": "Textile Merchant",
    "location": "Bhongir Fort Road, Yadadri Bhuvanagiri",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Bhongir Fort Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Bhongir Fort Road, Yadadri Bhuvanagiri. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "111 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-448",
    "author": "Mercy G. (Golla)",
    "role": "Civil Contractor",
    "location": "Yadagirigutta Temple Town",
    "district": "yadadri-bhuvanagiri",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Yadagirigutta Temple Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Yadagirigutta Temple Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "112 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-449",
    "author": "Rajeshwara Rao R. (Reddy)",
    "role": "Bank Senior Officer",
    "location": "Clock Tower, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in Clock Tower without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in Clock Tower, Mahabubnagar to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "113 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-450",
    "author": "Bhavani G. (Goud)",
    "role": "Homemaker",
    "location": "Jadcherla Industrial Area, Mahabubnagar",
    "district": "mahabubnagar",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Jadcherla Industrial Area at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Jadcherla Industrial Area, Mahabubnagar and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "114 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-451",
    "author": "Siva Prasad R. (Rao)",
    "role": "Retail Pharmacist",
    "location": "Nagarkurnool Town Center",
    "district": "nagarkurnool",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nagarkurnool Town Center",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nagarkurnool Town Center. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "115 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-452",
    "author": "Sandhya Rani N. (Naidu)",
    "role": "Rice Mill Owner",
    "location": "Wanaparthy Palace Road",
    "district": "wanaparthy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Wanaparthy Palace Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Wanaparthy Palace Road. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "116 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-453",
    "author": "Mahesh C. (Choudhary)",
    "role": "School Principal",
    "location": "Gadwal Handloom Center, Jogulamba Gadwal",
    "district": "jogulamba-gadwal",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Gadwal Handloom Center without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Gadwal Handloom Center, Jogulamba Gadwal to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "117 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-454",
    "author": "Divya V. (Varma)",
    "role": "Automobile Dealer",
    "location": "Narayanpet Silk Town",
    "district": "narayanpet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Narayanpet Silk Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Narayanpet Silk Town to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "118 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-455",
    "author": "Niranjan S. (Sastry)",
    "role": "Assistant Professor",
    "location": "Sangareddy District HQ",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Sangareddy District HQ",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Sangareddy District HQ. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "119 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-456",
    "author": "Fatima Begum S. (Sharma)",
    "role": "Poultry Farm Owner",
    "location": "Patancheru Industrial Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Patancheru Industrial Hub",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Patancheru Industrial Hub, Sangareddy. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "120 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-457",
    "author": "Trinadha Rao J. (Jain)",
    "role": "Kirana Store Owner",
    "location": "Zaheerabad Mahindra Hub, Sangareddy",
    "district": "sangareddy",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Zaheerabad Mahindra Hub without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Zaheerabad Mahindra Hub, Sangareddy to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "121 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-458",
    "author": "Anuradha Y. (Yadav)",
    "role": "Diagnostic Lab Specialist",
    "location": "Siddipet Town Center",
    "district": "siddipet",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Siddipet Town Center at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Siddipet Town Center to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "122 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-459",
    "author": "Khaja Moinuddin S. (Shetty)",
    "role": "Handloom Weaver",
    "location": "Gajwel, Siddipet",
    "district": "siddipet",
    "state": "Telangana",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gajwel",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gajwel, Siddipet. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "123 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-460",
    "author": "Prameela P. (Pillai)",
    "role": "Jewellery Connoisseur",
    "location": "Medak Church Road",
    "district": "medak",
    "state": "Telangana",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Medak Church Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Medak Church Road. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "124 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-461",
    "author": "Venkateswara Rao A. (Acharya)",
    "role": "Building Contractor",
    "location": "Tandur Stone Hub, Vikarabad",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Tandur Stone Hub without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Tandur Stone Hub, Vikarabad to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "125 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-462",
    "author": "Deepika S. (Swamy)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Vikarabad Town Center",
    "district": "vikarabad",
    "state": "Telangana",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Vikarabad Town Center at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Vikarabad Town Center and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "126 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-463",
    "author": "Suresh Kumar R. (Raju)",
    "role": "Cotton Export Merchant",
    "location": "Gajuwaka, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gajuwaka",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gajuwaka, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "127 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-464",
    "author": "Meenakshi M. (Moorthy)",
    "role": "Hardware Shop Owner",
    "location": "Dwaraka Nagar, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Dwaraka Nagar",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Dwaraka Nagar, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "128 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-465",
    "author": "Phani Bhushan D. (Deshmukh)",
    "role": "Chartered Accountant",
    "location": "MVP Colony, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in MVP Colony without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in MVP Colony, Visakhapatnam to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "129 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  },
  {
    "id": "story-466",
    "author": "Swathi K. (Kulkarni)",
    "role": "Real Estate Consultant",
    "location": "Madhurawada, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Madhurawada at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Madhurawada, Visakhapatnam to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "130 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-467",
    "author": "Kishore J. (Joshi)",
    "role": "Electrical Engineer",
    "location": "Pendurthi, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Pendurthi",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Pendurthi, Visakhapatnam. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "131 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-468",
    "author": "Latha P. (Patel)",
    "role": "Aqua Farmer",
    "location": "Kurmannapalem, Visakhapatnam",
    "district": "visakhapatnam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Kurmannapalem",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Kurmannapalem, Visakhapatnam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "132 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-469",
    "author": "Murali Krishna V. (Venkata)",
    "role": "Supermarket Manager",
    "location": "Anakapalli Town",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from SBI Bank in Anakapalli Town without stress",
    "story": "I had pledged my family gold bangles at SBI Bank in Anakapalli Town to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "133 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "23 Mins at Branch"
    }
  },
  {
    "id": "story-470",
    "author": "Usha Rani K. (Kakarla)",
    "role": "Hospital Administrator",
    "location": "Atchutapuram Industrial Hub, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Atchutapuram Industrial Hub at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Atchutapuram Industrial Hub, Anakapalli to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "134 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-471",
    "author": "Gopala Krishna G. (Gullapalli)",
    "role": "Senior Advocate",
    "location": "Yelamanchili, Anakapalli",
    "district": "anakapalli",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Yelamanchili",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Yelamanchili, Anakapalli. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "135 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-472",
    "author": "Kavitha M. (Mulpuri)",
    "role": "Transport Operator",
    "location": "Vizianagaram Main Town",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vizianagaram Main Town",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vizianagaram Main Town. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "136 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-473",
    "author": "Upendra C. (Chinta)",
    "role": "Hotel Proprietor",
    "location": "Bobbili Town, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Rupeek in Bobbili Town without stress",
    "story": "I had pledged my family gold bangles at Rupeek in Bobbili Town, Vizianagaram to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "137 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "27 Mins at Branch"
    }
  },
  {
    "id": "story-474",
    "author": "Padmaja Rani N. (Nalluri)",
    "role": "Mechanical Engineer",
    "location": "Salur Road, Vizianagaram",
    "district": "vizianagaram",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Salur Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Salur Road, Vizianagaram and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "138 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-475",
    "author": "Chaitanya Y. (Yalamanchili)",
    "role": "Telecom Tower Specialist",
    "location": "Srikakulam Town",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Srikakulam Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Srikakulam Town. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "139 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-476",
    "author": "Rajyalakshmi K. (Kondapalli)",
    "role": "Organic Store Owner",
    "location": "Palasa Cashew Market, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Palasa Cashew Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Palasa Cashew Market, Srikakulam. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "140 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-477",
    "author": "Mirza Baig G. (Garapati)",
    "role": "Retired Govt Officer",
    "location": "Tekkali Town, Srikakulam",
    "district": "srikakulam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Federal Bank in Tekkali Town without stress",
    "story": "I had pledged my family gold bangles at Federal Bank in Tekkali Town, Srikakulam to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "141 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "31 Mins at Branch"
    }
  },
  {
    "id": "story-478",
    "author": "Radhika C. (Chowdary)",
    "role": "Software Engineer (MNC)",
    "location": "Parvathipuram Town",
    "district": "parvathipuram-manyam",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Parvathipuram Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Parvathipuram Town to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "142 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-479",
    "author": "Subba Rao K. (Kalla)",
    "role": "Paddy & Cotton Farmer",
    "location": "Araku Valley, Alluri Sitharama Raju",
    "district": "alluri-sitharama-raju",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Araku Valley",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Araku Valley, Alluri Sitharama Raju. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "143 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-480",
    "author": "Manjula B. (Bhamidipati)",
    "role": "High School Teacher",
    "location": "Benz Circle, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Benz Circle",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Benz Circle, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "144 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-481",
    "author": "Ramesh Babu V. (Vaddi)",
    "role": "Textile Merchant",
    "location": "One Town Commercial Area, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Muthoot Finance in One Town Commercial Area without stress",
    "story": "I had pledged my family gold bangles at Muthoot Finance in One Town Commercial Area, Vijayawada to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "145 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "20 Mins at Branch"
    }
  },
  {
    "id": "story-482",
    "author": "Ayesha V. (Velagapudi)",
    "role": "Civil Contractor",
    "location": "Patamata, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Patamata at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Patamata, Vijayawada to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "146 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-483",
    "author": "Nageswara Rao M. (Mikkilineni)",
    "role": "Bank Senior Officer",
    "location": "Governorpet, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Governorpet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Governorpet, Vijayawada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "147 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-484",
    "author": "Vijaya Lakshmi D. (Denduluri)",
    "role": "Homemaker",
    "location": "Gollapudi Market, Vijayawada",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Gollapudi Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Gollapudi Market, Vijayawada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "148 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-485",
    "author": "Girish R. (Ravipati)",
    "role": "Retail Pharmacist",
    "location": "Nandigama Town, NTR",
    "district": "ntr",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Canara Bank in Nandigama Town without stress",
    "story": "I had pledged my family gold bangles at Canara Bank in Nandigama Town, NTR to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹1,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "149 Grams Assayed",
      "benefitHighlight": "Cleared ₹1,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "24 Mins at Branch"
    }
  },
  {
    "id": "story-486",
    "author": "Kalyani P. (Penmetsa)",
    "role": "Rice Mill Owner",
    "location": "Machilipatnam Port Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Machilipatnam Port Town at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Machilipatnam Port Town, Krishna and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "150 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-487",
    "author": "Ashok Kumar D. (Datla)",
    "role": "School Principal",
    "location": "Gudivada Town, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Gudivada Town",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Gudivada Town, Krishna. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "151 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-488",
    "author": "Haritha S. (Sagi)",
    "role": "Automobile Dealer",
    "location": "Vuyyuru Sugar Factory Road, Krishna",
    "district": "krishna",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Vuyyuru Sugar Factory Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Vuyyuru Sugar Factory Road, Krishna. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "152 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-489",
    "author": "Sudhakar B. (Bhupathiraju)",
    "role": "Assistant Professor",
    "location": "Brodipet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from ICICI Bank in Brodipet without stress",
    "story": "I had pledged my family gold bangles at ICICI Bank in Brodipet, Guntur to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "153 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "28 Mins at Branch"
    }
  },
  {
    "id": "story-490",
    "author": "Padmavathi A. (Alluri)",
    "role": "Poultry Farm Owner",
    "location": "Lakshmipuram, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Lakshmipuram at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Lakshmipuram, Guntur to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "154 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-491",
    "author": "Kalyan Chakravarthy G. (Gottipati)",
    "role": "Kirana Store Owner",
    "location": "Arundelpet, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Arundelpet",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Arundelpet, Guntur. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "155 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-492",
    "author": "Saraswathi K. (Karnam)",
    "role": "Diagnostic Lab Specialist",
    "location": "Mangalagiri IT Tower Area, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Mangalagiri IT Tower Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Mangalagiri IT Tower Area, Guntur. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "156 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-493",
    "author": "Sai Kumar M. (Mudragada)",
    "role": "Handloom Weaver",
    "location": "Tenali Gold Market, Guntur",
    "district": "guntur",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Andhra Pragathi Grameena Bank in Tenali Gold Market without stress",
    "story": "I had pledged my family gold bangles at Andhra Pragathi Grameena Bank in Tenali Gold Market, Guntur to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹2,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "157 Grams Assayed",
      "benefitHighlight": "Cleared ₹2,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "32 Mins at Branch"
    }
  },
  {
    "id": "story-494",
    "author": "Revathi V. (Vangaveeti)",
    "role": "Jewellery Connoisseur",
    "location": "Narasaraopet Town, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Narasaraopet Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Narasaraopet Town, Palnadu to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "158 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-495",
    "author": "John Peter D. (Devineni)",
    "role": "Building Contractor",
    "location": "Piduguralla Lime Hub, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Piduguralla Lime Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Piduguralla Lime Hub, Palnadu. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "159 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-496",
    "author": "Jyothi P. (Parvathaneni)",
    "role": "Dairy Farm Entrepreneur",
    "location": "Sattenapalle, Palnadu",
    "district": "palnadu",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Sattenapalle",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Sattenapalle, Palnadu. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "160 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-497",
    "author": "Ramakrishna T. (Tammineedi)",
    "role": "Cotton Export Merchant",
    "location": "Chirala Handloom Center, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Manappuram Finance in Chirala Handloom Center without stress",
    "story": "I had pledged my family gold bangles at Manappuram Finance in Chirala Handloom Center, Bapatla to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "161 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "21 Mins at Branch"
    }
  },
  {
    "id": "story-498",
    "author": "Shalini A. (Adusumilli)",
    "role": "Hardware Shop Owner",
    "location": "Bapatla Town Center",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Bapatla Town Center at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Bapatla Town Center and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "162 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-499",
    "author": "Praveen Kumar K. (Kovelamudi)",
    "role": "Chartered Accountant",
    "location": "Repalle, Bapatla",
    "district": "bapatla",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Repalle",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Repalle, Bapatla. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "163 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-500",
    "author": "Lakshmi Prasanna G. (Golla)",
    "role": "Real Estate Consultant",
    "location": "Danavaipeta, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Danavaipeta",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Danavaipeta, Rajahmundry. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "164 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-501",
    "author": "Madusudhan R. (Reddy)",
    "role": "Electrical Engineer",
    "location": "Kotipalli Bus Stand Road, Rajahmundry",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Union Bank of India in Kotipalli Bus Stand Road without stress",
    "story": "I had pledged my family gold bangles at Union Bank of India in Kotipalli Bus Stand Road, Rajahmundry to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹3,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "165 Grams Assayed",
      "benefitHighlight": "Cleared ₹3,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "25 Mins at Branch"
    }
  },
  {
    "id": "story-502",
    "author": "Kanaka Durga G. (Goud)",
    "role": "Aqua Farmer",
    "location": "Kovvur Town, East Godavari",
    "district": "east-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Kovvur Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Kovvur Town, East Godavari to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "166 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-503",
    "author": "Dileep Kumar R. (Rao)",
    "role": "Supermarket Manager",
    "location": "Main Road, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Main Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Main Road, Kakinada. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "167 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-504",
    "author": "Sri Vani N. (Naidu)",
    "role": "Hospital Administrator",
    "location": "Bhanugudi Junction, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bhanugudi Junction",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bhanugudi Junction, Kakinada. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "168 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-505",
    "author": "Laxman C. (Choudhary)",
    "role": "Senior Advocate",
    "location": "Tuni Town, Kakinada",
    "district": "kakinada",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from Kotak Mahindra Bank in Tuni Town without stress",
    "story": "I had pledged my family gold bangles at Kotak Mahindra Bank in Tuni Town, Kakinada to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "169 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "29 Mins at Branch"
    }
  },
  {
    "id": "story-506",
    "author": "Sudha V. (Varma)",
    "role": "Transport Operator",
    "location": "Amalapuram Town, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Amalapuram Town at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Amalapuram Town, Konaseema to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "170 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "20 Mins at Desk"
    }
  },
  {
    "id": "story-507",
    "author": "Sanjeeva Rao S. (Sastry)",
    "role": "Hotel Proprietor",
    "location": "Ravulapalem Coconut Hub, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Ravulapalem Coconut Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Ravulapalem Coconut Hub, Konaseema. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "171 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-508",
    "author": "Grace Mary S. (Sharma)",
    "role": "Mechanical Engineer",
    "location": "Razole, Konaseema",
    "district": "konaseema",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Razole",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Razole, Konaseema. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "172 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-509",
    "author": "Raja Sekhar J. (Jain)",
    "role": "Telecom Tower Specialist",
    "location": "RR Pet, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Telangana Grameena Bank in RR Pet without stress",
    "story": "I had pledged my family gold bangles at Telangana Grameena Bank in RR Pet, Eluru to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹4,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "173 Grams Assayed",
      "benefitHighlight": "Cleared ₹4,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "33 Mins at Branch"
    }
  },
  {
    "id": "story-510",
    "author": "Sunitha Y. (Yadav)",
    "role": "Organic Store Owner",
    "location": "Jangareddygudem, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in Jangareddygudem at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in Jangareddygudem, Eluru and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "174 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "24 Mins at Desk"
    }
  },
  {
    "id": "story-511",
    "author": "Tarun S. (Shetty)",
    "role": "Retired Govt Officer",
    "location": "Nuzvid Mango Hub, Eluru",
    "district": "eluru",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Nuzvid Mango Hub",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Nuzvid Mango Hub, Eluru. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "175 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-512",
    "author": "Vasundhara P. (Pillai)",
    "role": "Software Engineer (MNC)",
    "location": "Bhimavaram Aqua Market, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Bhimavaram Aqua Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Bhimavaram Aqua Market, West Godavari. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "176 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-513",
    "author": "David Raju A. (Acharya)",
    "role": "Paddy & Cotton Farmer",
    "location": "Tadepalligudem Commercial Hub, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from IIFL Gold Loan in Tadepalligudem Commercial Hub without stress",
    "story": "I had pledged my family gold bangles at IIFL Gold Loan in Tadepalligudem Commercial Hub, West Godavari to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "177 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "22 Mins at Branch"
    }
  },
  {
    "id": "story-514",
    "author": "Sireesha S. (Swamy)",
    "role": "High School Teacher",
    "location": "Tanuku Town, West Godavari",
    "district": "west-godavari",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "November 2025",
    "title": "Sold 22K 24K Minted Gold Coins in Tanuku Town at live market rate",
    "story": "Decided to sell my old 22K 24K Minted Gold Coins in Tanuku Town, West Godavari to fund buying commercial transport vehicle. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.",
    "transactionDetails": {
      "itemType": "24K Minted Gold Coins",
      "weightOrValue": "178 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "18 Mins at Desk"
    }
  },
  {
    "id": "story-515",
    "author": "Narasimha Rao R. (Raju)",
    "role": "Textile Merchant",
    "location": "Kurnool Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "October 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Kurnool Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Kurnool Road, Ongole. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "179 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-516",
    "author": "Shabana M. (Moorthy)",
    "role": "Civil Contractor",
    "location": "Trunk Road, Ongole",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "August 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Trunk Road",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Trunk Road, Ongole. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "180 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-517",
    "author": "Vijay Bhaskar D. (Deshmukh)",
    "role": "Bank Senior Officer",
    "location": "Markapur Granite Hub, Prakasam",
    "district": "prakasam",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "January 2026",
    "title": "Released pledged gold from HDFC Gold Loan in Markapur Granite Hub without stress",
    "story": "I had pledged my family gold bangles at HDFC Gold Loan in Markapur Granite Hub, Prakasam to meet daughter's higher education fees. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹5,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "181 Grams Assayed",
      "benefitHighlight": "Cleared ₹5,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "26 Mins at Branch"
    }
  },
  {
    "id": "story-518",
    "author": "Gayatri K. (Kulkarni)",
    "role": "Homemaker",
    "location": "Trunk Road, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "February 2026",
    "title": "Sold 22K Ancestral Kanti & Bangles in Trunk Road at live market rate",
    "story": "Visited Akshaya Gold Buyers branch near Trunk Road, Nellore to sell ancestral Ancestral Kanti & Bangles. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!",
    "transactionDetails": {
      "itemType": "Ancestral Kanti & Bangles",
      "weightOrValue": "182 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "22 Mins at Desk"
    }
  },
  {
    "id": "story-519",
    "author": "Bhanu Prakash J. (Joshi)",
    "role": "Retail Pharmacist",
    "location": "Dargamitta, Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "December 2025",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Dargamitta",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Dargamitta, Nellore. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "183 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-520",
    "author": "Sailaja P. (Patel)",
    "role": "Rice Mill Owner",
    "location": "Gudur Lemon Market, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "November 2025",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Gudur Lemon Market",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Gudur Lemon Market, SPSR Nellore. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "184 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-521",
    "author": "Venkata Ramana V. (Venkata)",
    "role": "School Principal",
    "location": "Kavali Town, SPSR Nellore",
    "district": "spsr-nellore",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "October 2025",
    "title": "Released pledged gold from Karur Vysya Bank in Kavali Town without stress",
    "story": "I had pledged my family gold bangles at Karur Vysya Bank in Kavali Town, SPSR Nellore to meet medical treatment emergency. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,00,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "185 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,00,000 Loan + Net Surplus Paid",
      "settlementSpeed": "30 Mins at Branch"
    }
  },
  {
    "id": "story-522",
    "author": "Prameela K. (Kakarla)",
    "role": "Automobile Dealer",
    "location": "KT Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "old-jewellery",
    "categoryLabel": "Old Gold Jewellery",
    "rating": 5,
    "date": "August 2025",
    "title": "Sold 22K 916 Hallmark Chain & Rings in KT Road at live market rate",
    "story": "We had idle 916 Hallmark Chain & Rings at home in KT Road, Tirupati and wanted cash for clearing high-interest private debt. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.",
    "transactionDetails": {
      "itemType": "916 Hallmark Chain & Rings",
      "weightOrValue": "186 Grams Assayed",
      "benefitHighlight": "0% Melting Loss (German XRF)",
      "settlementSpeed": "16 Mins at Desk"
    }
  },
  {
    "id": "story-523",
    "author": "Hanumantha Rao G. (Gullapalli)",
    "role": "Assistant Professor",
    "location": "Alipiri Road, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "scrap-gold",
    "categoryLabel": "Broken & Scrap Gold",
    "rating": 5,
    "date": "January 2026",
    "title": "Exchanged Old Melted Gold Nuggets for instant bank payout in Alipiri Road",
    "story": "I had broken Old Melted Gold Nuggets lying in my locker for years in Alipiri Road, Tirupati. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.",
    "transactionDetails": {
      "itemType": "Old Melted Gold Nuggets",
      "weightOrValue": "187 Grams Assayed",
      "benefitHighlight": "Assayed Laser Purity Value",
      "settlementSpeed": "Spot IMPS Transfer"
    }
  },
  {
    "id": "story-524",
    "author": "Supriya M. (Mulpuri)",
    "role": "Poultry Farm Owner",
    "location": "Srikalahasti Temple Area, Tirupati",
    "district": "tirupati",
    "state": "Andhra Pradesh",
    "category": "silver-diamond",
    "categoryLabel": "Silver & Diamonds",
    "rating": 5,
    "date": "February 2026",
    "title": "Fair valuation for 18K Solitaire Diamond Ring & Silver Articles in Srikalahasti Temple Area",
    "story": "Brought an inherited diamond ring & silver articles for valuation in Srikalahasti Temple Area, Tirupati. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.",
    "transactionDetails": {
      "itemType": "18K Solitaire Diamond Ring & Silver Articles",
      "weightOrValue": "188 Grams Assayed",
      "benefitHighlight": "Spot Bullion Market Rate",
      "settlementSpeed": "Instant Account Credit"
    }
  },
  {
    "id": "story-525",
    "author": "Bhaskar C. (Chinta)",
    "role": "Kirana Store Owner",
    "location": "Chittoor Town Center",
    "district": "chittoor",
    "state": "Andhra Pradesh",
    "category": "pledged-gold",
    "categoryLabel": "Pledged Gold Release",
    "rating": 5,
    "date": "December 2025",
    "title": "Released pledged gold from Private Pawnbroker in Chittoor Town Center without stress",
    "story": "I had pledged my family gold bangles at Private Pawnbroker in Chittoor Town Center to meet wedding arrangements. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹6,50,000 dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!",
    "transactionDetails": {
      "itemType": "Pledged Gold Ornaments",
      "weightOrValue": "189 Grams Assayed",
      "benefitHighlight": "Cleared ₹6,50,000 Loan + Net Surplus Paid",
      "settlementSpeed": "34 Mins at Branch"
    }
  }
];
