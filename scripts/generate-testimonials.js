const fs = require('fs');
const path = require('path');

// Master lists of realistic Telugu & South Indian names, towns, stories, roles, items, etc.

const SURNAMES = [
  'Venkata', 'Kakarla', 'Gullapalli', 'Mulpuri', 'Chinta', 'Nalluri', 'Yalamanchili', 'Kondapalli',
  'Garapati', 'Chowdary', 'Kalla', 'Bhamidipati', 'Vaddi', 'Velagapudi', 'Mikkilineni', 'Denduluri',
  'Ravipati', 'Penmetsa', 'Datla', 'Sagi', 'Bhupathiraju', 'Alluri', 'Gottipati', 'Karnam',
  'Mudragada', 'Vangaveeti', 'Devineni', 'Parvathaneni', 'Tammineedi', 'Adusumilli', 'Kovelamudi', 'Golla',
  'Reddy', 'Goud', 'Rao', 'Naidu', 'Choudhary', 'Varma', 'Sastry', 'Sharma', 'Jain', 'Yadav',
  'Shetty', 'Pillai', 'Acharya', 'Swamy', 'Raju', 'Moorthy', 'Deshmukh', 'Kulkarni', 'Joshi', 'Patel'
];

const FIRST_NAMES_MALE = [
  'Satyanarayana', 'Srinivas', 'Venkateswara Rao', 'Subba Rao', 'Ramakrishna', 'Narasimha Rao',
  'Chandra Sekhar', 'Harischandra Prasad', 'Suresh Kumar', 'Ramesh Babu', 'Praveen Kumar', 'Vijay Bhaskar',
  'Prasad', 'Anil Kumar', 'Phani Bhushan', 'Nageswara Rao', 'Madusudhan', 'Bhanu Prakash', 'Koteswara Rao',
  'Rajeshwara Rao', 'Kishore', 'Girish', 'Dileep Kumar', 'Venkata Ramana', 'Srikanth', 'Siva Prasad',
  'Murali Krishna', 'Ashok Kumar', 'Laxman', 'Hanumantha Rao', 'Vamshi Krishna', 'Mahesh', 'Gopala Krishna',
  'Sudhakar', 'Sanjeeva Rao', 'Bhaskar', 'Ravindra', 'Niranjan', 'Upendra', 'Kalyan Chakravarthy',
  'Raja Sekhar', 'Jagadeesh', 'Samba Siva Rao', 'Trinadha Rao', 'Chaitanya', 'Sai Kumar', 'Tarun',
  'Mohammed Abdul', 'Syed Ibrahim', 'Khaja Moinuddin', 'Mirza Baig', 'John Peter', 'David Raju'
];

const FIRST_NAMES_FEMALE = [
  'Padmaja Rani', 'Lakshmi Prasanna', 'Sujatha', 'Swathi', 'Saraswathi', 'Gayatri', 'Anuradha',
  'Vijaya Lakshmi', 'Sunitha', 'Bhavani', 'Rajyalakshmi', 'Kanaka Durga', 'Madhavi', 'Latha',
  'Revathi', 'Sailaja', 'Prameela', 'Kalyani', 'Vasundhara', 'Sandhya Rani', 'Radhika', 'Sri Vani',
  'Rama Devi', 'Usha Rani', 'Jyothi', 'Prameela', 'Deepika', 'Haritha', 'Sireesha', 'Divya',
  'Manjula', 'Sudha', 'Anitha', 'Kavitha', 'Shalini', 'Supriya', 'Meenakshi', 'Padmavathi',
  'Shabana', 'Fatima Begum', 'Ayesha', 'Grace Mary', 'Mercy'
];

const ROLES = [
  'Retired Govt Officer', 'Software Engineer (MNC)', 'Paddy & Cotton Farmer', 'High School Teacher',
  'Textile Merchant', 'Civil Contractor', 'Bank Senior Officer', 'Homemaker', 'Retail Pharmacist',
  'Rice Mill Owner', 'School Principal', 'Automobile Dealer', 'Assistant Professor', 'Poultry Farm Owner',
  'Kirana Store Owner', 'Diagnostic Lab Specialist', 'Handloom Weaver', 'Jewellery Connoisseur',
  'Building Contractor', 'Dairy Farm Entrepreneur', 'Cotton Export Merchant', 'Hardware Shop Owner',
  'Chartered Accountant', 'Real Estate Consultant', 'Electrical Engineer', 'Aqua Farmer',
  'Supermarket Manager', 'Hospital Administrator', 'Senior Advocate', 'Transport Operator',
  'Hotel Proprietor', 'Mechanical Engineer', 'Telecom Tower Specialist', 'Organic Store Owner'
];

// Towns & Localities mapped to state and district
const LOCATIONS = [
  // AP - Visakhapatnam & North Coast
  { loc: 'Gajuwaka, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'Dwaraka Nagar, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'MVP Colony, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'Madhurawada, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'Pendurthi, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'Kurmannapalem, Visakhapatnam', dist: 'visakhapatnam', state: 'Andhra Pradesh' },
  { loc: 'Anakapalli Town', dist: 'anakapalli', state: 'Andhra Pradesh' },
  { loc: 'Atchutapuram Industrial Hub, Anakapalli', dist: 'anakapalli', state: 'Andhra Pradesh' },
  { loc: 'Yelamanchili, Anakapalli', dist: 'anakapalli', state: 'Andhra Pradesh' },
  { loc: 'Vizianagaram Main Town', dist: 'vizianagaram', state: 'Andhra Pradesh' },
  { loc: 'Bobbili Town, Vizianagaram', dist: 'vizianagaram', state: 'Andhra Pradesh' },
  { loc: 'Salur Road, Vizianagaram', dist: 'vizianagaram', state: 'Andhra Pradesh' },
  { loc: 'Srikakulam Town', dist: 'srikakulam', state: 'Andhra Pradesh' },
  { loc: 'Palasa Cashew Market, Srikakulam', dist: 'srikakulam', state: 'Andhra Pradesh' },
  { loc: 'Tekkali Town, Srikakulam', dist: 'srikakulam', state: 'Andhra Pradesh' },
  { loc: 'Parvathipuram Town', dist: 'parvathipuram-manyam', state: 'Andhra Pradesh' },
  { loc: 'Araku Valley, Alluri Sitharama Raju', dist: 'alluri-sitharama-raju', state: 'Andhra Pradesh' },

  // AP - Vijayawada, Guntur & Coastal Delta
  { loc: 'Benz Circle, Vijayawada', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'One Town Commercial Area, Vijayawada', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'Patamata, Vijayawada', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'Governorpet, Vijayawada', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'Gollapudi Market, Vijayawada', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'Nandigama Town, NTR', dist: 'ntr', state: 'Andhra Pradesh' },
  { loc: 'Machilipatnam Port Town, Krishna', dist: 'krishna', state: 'Andhra Pradesh' },
  { loc: 'Gudivada Town, Krishna', dist: 'krishna', state: 'Andhra Pradesh' },
  { loc: 'Vuyyuru Sugar Factory Road, Krishna', dist: 'krishna', state: 'Andhra Pradesh' },
  { loc: 'Brodipet, Guntur', dist: 'guntur', state: 'Andhra Pradesh' },
  { loc: 'Lakshmipuram, Guntur', dist: 'guntur', state: 'Andhra Pradesh' },
  { loc: 'Arundelpet, Guntur', dist: 'guntur', state: 'Andhra Pradesh' },
  { loc: 'Mangalagiri IT Tower Area, Guntur', dist: 'guntur', state: 'Andhra Pradesh' },
  { loc: 'Tenali Gold Market, Guntur', dist: 'guntur', state: 'Andhra Pradesh' },
  { loc: 'Narasaraopet Town, Palnadu', dist: 'palnadu', state: 'Andhra Pradesh' },
  { loc: 'Piduguralla Lime Hub, Palnadu', dist: 'palnadu', state: 'Andhra Pradesh' },
  { loc: 'Sattenapalle, Palnadu', dist: 'palnadu', state: 'Andhra Pradesh' },
  { loc: 'Chirala Handloom Center, Bapatla', dist: 'bapatla', state: 'Andhra Pradesh' },
  { loc: 'Bapatla Town Center', dist: 'bapatla', state: 'Andhra Pradesh' },
  { loc: 'Repalle, Bapatla', dist: 'bapatla', state: 'Andhra Pradesh' },

  // AP - Godavari Belt
  { loc: 'Danavaipeta, Rajahmundry', dist: 'east-godavari', state: 'Andhra Pradesh' },
  { loc: 'Kotipalli Bus Stand Road, Rajahmundry', dist: 'east-godavari', state: 'Andhra Pradesh' },
  { loc: 'Kovvur Town, East Godavari', dist: 'east-godavari', state: 'Andhra Pradesh' },
  { loc: 'Main Road, Kakinada', dist: 'kakinada', state: 'Andhra Pradesh' },
  { loc: 'Bhanugudi Junction, Kakinada', dist: 'kakinada', state: 'Andhra Pradesh' },
  { loc: 'Tuni Town, Kakinada', dist: 'kakinada', state: 'Andhra Pradesh' },
  { loc: 'Amalapuram Town, Konaseema', dist: 'konaseema', state: 'Andhra Pradesh' },
  { loc: 'Ravulapalem Coconut Hub, Konaseema', dist: 'konaseema', state: 'Andhra Pradesh' },
  { loc: 'Razole, Konaseema', dist: 'konaseema', state: 'Andhra Pradesh' },
  { loc: 'RR Pet, Eluru', dist: 'eluru', state: 'Andhra Pradesh' },
  { loc: 'Jangareddygudem, Eluru', dist: 'eluru', state: 'Andhra Pradesh' },
  { loc: 'Nuzvid Mango Hub, Eluru', dist: 'eluru', state: 'Andhra Pradesh' },
  { loc: 'Bhimavaram Aqua Market, West Godavari', dist: 'west-godavari', state: 'Andhra Pradesh' },
  { loc: 'Tadepalligudem Commercial Hub, West Godavari', dist: 'west-godavari', state: 'Andhra Pradesh' },
  { loc: 'Tanuku Town, West Godavari', dist: 'west-godavari', state: 'Andhra Pradesh' },

  // AP - Rayalaseema & South Coastal
  { loc: 'Kurnool Road, Ongole', dist: 'prakasam', state: 'Andhra Pradesh' },
  { loc: 'Trunk Road, Ongole', dist: 'prakasam', state: 'Andhra Pradesh' },
  { loc: 'Markapur Granite Hub, Prakasam', dist: 'prakasam', state: 'Andhra Pradesh' },
  { loc: 'Trunk Road, Nellore', dist: 'spsr-nellore', state: 'Andhra Pradesh' },
  { loc: 'Dargamitta, Nellore', dist: 'spsr-nellore', state: 'Andhra Pradesh' },
  { loc: 'Gudur Lemon Market, SPSR Nellore', dist: 'spsr-nellore', state: 'Andhra Pradesh' },
  { loc: 'Kavali Town, SPSR Nellore', dist: 'spsr-nellore', state: 'Andhra Pradesh' },
  { loc: 'KT Road, Tirupati', dist: 'tirupati', state: 'Andhra Pradesh' },
  { loc: 'Alipiri Road, Tirupati', dist: 'tirupati', state: 'Andhra Pradesh' },
  { loc: 'Srikalahasti Temple Area, Tirupati', dist: 'tirupati', state: 'Andhra Pradesh' },
  { loc: 'Chittoor Town Center', dist: 'chittoor', state: 'Andhra Pradesh' },
  { loc: 'Palamaner, Chittoor', dist: 'chittoor', state: 'Andhra Pradesh' },
  { loc: 'Madanapalle Silk Center, Annamayya', dist: 'annamayya', state: 'Andhra Pradesh' },
  { loc: 'Rayachoti Town, Annamayya', dist: 'annamayya', state: 'Andhra Pradesh' },
  { loc: 'Seven Roads Junction, YSR Kadapa', dist: 'ysr-kadapa', state: 'Andhra Pradesh' },
  { loc: 'Proddatur Gold Market, YSR Kadapa', dist: 'ysr-kadapa', state: 'Andhra Pradesh' },
  { loc: 'Pulivendula, YSR Kadapa', dist: 'ysr-kadapa', state: 'Andhra Pradesh' },
  { loc: 'Subhash Road, Anantapur', dist: 'anantapur', state: 'Andhra Pradesh' },
  { loc: 'Clock Tower Area, Anantapur', dist: 'anantapur', state: 'Andhra Pradesh' },
  { loc: 'Guntakal Railway Hub, Anantapur', dist: 'anantapur', state: 'Andhra Pradesh' },
  { loc: 'Hindupur Industrial Zone, Sri Sathya Sai', dist: 'sri-sathya-sai', state: 'Andhra Pradesh' },
  { loc: 'Puttaparthi, Sri Sathya Sai', dist: 'sri-sathya-sai', state: 'Andhra Pradesh' },
  { loc: 'Dharmavaram Handloom Market, Sri Sathya Sai', dist: 'sri-sathya-sai', state: 'Andhra Pradesh' },
  { loc: 'Park Road, Kurnool', dist: 'kurnool', state: 'Andhra Pradesh' },
  { loc: 'Adoni Cotton Market, Kurnool', dist: 'kurnool', state: 'Andhra Pradesh' },
  { loc: 'Yemmiganur, Kurnool', dist: 'kurnool', state: 'Andhra Pradesh' },
  { loc: 'Nandyal Town Center', dist: 'nandyal', state: 'Andhra Pradesh' },
  { loc: 'Allagadda Stone Market, Nandyal', dist: 'nandyal', state: 'Andhra Pradesh' },

  // TS - Hyderabad & Medchal / Ranga Reddy
  { loc: 'Kukatpally Housing Board (KPHB), Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Ameerpet Metro Hub, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Dilsukhnagar Bus Stand Road, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Madhapur IT Corridor, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Gachibowli Financial District, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Secunderabad Clock Tower, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'AS Rao Nagar, Secunderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Koti Jewellery Market, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'LB Nagar Ring Road, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Jubilee Hills Road No. 36, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Mehdipatnam Bus Depot, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Uppal Metro Station Area, Medchal-Malkajgiri', dist: 'medchal-malkajgiri', state: 'Telangana' },
  { loc: 'Kompally NH44 Corridor, Medchal-Malkajgiri', dist: 'medchal-malkajgiri', state: 'Telangana' },
  { loc: 'Malkajgiri Town, Medchal-Malkajgiri', dist: 'medchal-malkajgiri', state: 'Telangana' },
  { loc: 'Bachupally, Medchal-Malkajgiri', dist: 'medchal-malkajgiri', state: 'Telangana' },
  { loc: 'Kondapur, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Himayatnagar Main Road, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Begumpet Airport Area, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Tarnaka, Secunderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Miyapur Junction, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Chanda Nagar, Hyderabad', dist: 'hyderabad', state: 'Telangana' },
  { loc: 'Manikonda, Ranga Reddy', dist: 'ranga-reddy', state: 'Telangana' },
  { loc: 'Attapur Pillar 140, Ranga Reddy', dist: 'ranga-reddy', state: 'Telangana' },
  { loc: 'Shadnagar Highway Hub, Ranga Reddy', dist: 'ranga-reddy', state: 'Telangana' },
  { loc: 'Ibrahimpatnam, Ranga Reddy', dist: 'ranga-reddy', state: 'Telangana' },

  // TS - Warangal, Karimnagar, Nizamabad & North TS
  { loc: 'Subedari, Hanamkonda', dist: 'hanamkonda', state: 'Telangana' },
  { loc: 'Kazipet Junction, Hanamkonda', dist: 'hanamkonda', state: 'Telangana' },
  { loc: 'Hanumakonda Road, Warangal', dist: 'warangal', state: 'Telangana' },
  { loc: 'Narsampet Town, Warangal', dist: 'warangal', state: 'Telangana' },
  { loc: 'Tower Circle, Karimnagar', dist: 'karimnagar', state: 'Telangana' },
  { loc: 'Collectorate Road, Karimnagar', dist: 'karimnagar', state: 'Telangana' },
  { loc: 'Huzurabad Town, Karimnagar', dist: 'karimnagar', state: 'Telangana' },
  { loc: 'Godavarikhani Thermal City, Peddapalli', dist: 'peddapalli', state: 'Telangana' },
  { loc: 'Peddapalli Town Center', dist: 'peddapalli', state: 'Telangana' },
  { loc: 'Jagtial Gold Market', dist: 'jagtial', state: 'Telangana' },
  { loc: 'Korutla Textile Hub, Jagtial', dist: 'jagtial', state: 'Telangana' },
  { loc: 'Sircilla Handloom Town, Rajanna Sircilla', dist: 'rajanna-sircilla', state: 'Telangana' },
  { loc: 'Vemulawada Temple Town, Rajanna Sircilla', dist: 'rajanna-sircilla', state: 'Telangana' },
  { loc: 'Hyderabad Road, Nizamabad', dist: 'nizamabad', state: 'Telangana' },
  { loc: 'Armoor Commercial Center, Nizamabad', dist: 'nizamabad', state: 'Telangana' },
  { loc: 'Bodhan Town, Nizamabad', dist: 'nizamabad', state: 'Telangana' },
  { loc: 'Kamareddy Town Center', dist: 'kamareddy', state: 'Telangana' },
  { loc: 'Adilabad Cotton Hub', dist: 'adilabad', state: 'Telangana' },
  { loc: 'Nirmal Toys & Craft Town', dist: 'nirmal', state: 'Telangana' },
  { loc: 'Bhainsa Town, Nirmal', dist: 'nirmal', state: 'Telangana' },
  { loc: 'Mancherial Coal Belt Hub', dist: 'mancherial', state: 'Telangana' },
  { loc: 'Bellampally, Mancherial', dist: 'mancherial', state: 'Telangana' },
  { loc: 'Asifabad Town', dist: 'kumuram-bheem-asifabad', state: 'Telangana' },

  // TS - Khammam, Nalgonda, South TS & Medak/Sangareddy
  { loc: 'Wyra Road, Khammam', dist: 'khammam', state: 'Telangana' },
  { loc: 'Bus Stand Road, Khammam', dist: 'khammam', state: 'Telangana' },
  { loc: 'Sathupally Coal Hub, Khammam', dist: 'khammam', state: 'Telangana' },
  { loc: 'Kothagudem Town', dist: 'bhadradri-kothagudem', state: 'Telangana' },
  { loc: 'Paloncha, Bhadradri Kothagudem', dist: 'bhadradri-kothagudem', state: 'Telangana' },
  { loc: 'Bhadrachalam Temple Town', dist: 'bhadradri-kothagudem', state: 'Telangana' },
  { loc: 'Clock Tower, Nalgonda', dist: 'nalgonda', state: 'Telangana' },
  { loc: 'Miryalaguda Rice Mill Hub, Nalgonda', dist: 'nalgonda', state: 'Telangana' },
  { loc: 'Suryapet Highway Junction', dist: 'suryapet', state: 'Telangana' },
  { loc: 'Kodad Town, Suryapet', dist: 'suryapet', state: 'Telangana' },
  { loc: 'Bhongir Fort Road, Yadadri Bhuvanagiri', dist: 'yadadri-bhuvanagiri', state: 'Telangana' },
  { loc: 'Yadagirigutta Temple Town', dist: 'yadadri-bhuvanagiri', state: 'Telangana' },
  { loc: 'Clock Tower, Mahabubnagar', dist: 'mahabubnagar', state: 'Telangana' },
  { loc: 'Jadcherla Industrial Area, Mahabubnagar', dist: 'mahabubnagar', state: 'Telangana' },
  { loc: 'Nagarkurnool Town Center', dist: 'nagarkurnool', state: 'Telangana' },
  { loc: 'Wanaparthy Palace Road', dist: 'wanaparthy', state: 'Telangana' },
  { loc: 'Gadwal Handloom Center, Jogulamba Gadwal', dist: 'jogulamba-gadwal', state: 'Telangana' },
  { loc: 'Narayanpet Silk Town', dist: 'narayanpet', state: 'Telangana' },
  { loc: 'Sangareddy District HQ', dist: 'sangareddy', state: 'Telangana' },
  { loc: 'Patancheru Industrial Hub, Sangareddy', dist: 'sangareddy', state: 'Telangana' },
  { loc: 'Zaheerabad Mahindra Hub, Sangareddy', dist: 'sangareddy', state: 'Telangana' },
  { loc: 'Siddipet Town Center', dist: 'siddipet', state: 'Telangana' },
  { loc: 'Gajwel, Siddipet', dist: 'siddipet', state: 'Telangana' },
  { loc: 'Medak Church Road', dist: 'medak', state: 'Telangana' },
  { loc: 'Tandur Stone Hub, Vikarabad', dist: 'vikarabad', state: 'Telangana' },
  { loc: 'Vikarabad Town Center', dist: 'vikarabad', state: 'Telangana' }
];

// Contextual narrative templates to generate 520+ distinct human stories
const PLEDGED_STORIES = [
  (loc, bank, amount, purpose) => `I had pledged my family gold bangles at ${bank} in ${loc} to meet ${purpose}. Compounding monthly interest was becoming unbearable. Akshaya Gold Buyers team sent an executive directly to the branch with cash. They cleared the exact ₹${amount} dues at the counter, released my ornaments, tested them with 0% loss German XRF, and paid the remaining surplus cash directly into my account within 30 minutes. Extremely reliable!`,
  (loc, bank, amount, purpose) => `Due to ${purpose}, I had taken a gold loan at ${bank} (${loc}) last year. As the auction date approached, I was worried about losing ancestral pieces. Akshaya Gold Buyers cleared my ₹${amount} loan balance on the spot. After deducting the branch payment, they gave me the net profit without any hidden fees. Honesty at its best!`,
  (loc, bank, amount, purpose) => `Pledged gold at a local lender in ${loc} charging high monthly interest for ${purpose}. Akshaya Gold Buyers cleared the ₹${amount} debt directly with the manager. We received the full gold balance appraisal right in front of our eyes with zero acid melting. Very professional handling.`,
  (loc, bank, amount, purpose) => `Needed to release gold pledged at ${bank} near ${loc} for ${purpose}. Akshaya Gold Buyers handled the entire bank handover paperwork smoothly. Total transparency from loan repayment to net cash payout. Recommended to all my relatives!`
];

const OLD_JEWELLERY_STORIES = [
  (loc, item, purpose) => `Decided to sell my old 22K ${item} in ${loc} to fund ${purpose}. Most jewelers quoted 4% to 6% melting loss. Akshaya Gold Buyers evaluated it using German XRF laser technology right in front of me with zero touch/melting deduction. Handed over instant bank transfer at live market rate.`,
  (loc, item, purpose) => `Visited Akshaya Gold Buyers branch near ${loc} to sell ancestral ${item}. The purity report showed 91.6% hallmark accuracy instantly. I got the exact current gold price without any bargaining or deduction. Excellent customer service!`,
  (loc, item, purpose) => `We had idle ${item} at home in ${loc} and wanted cash for ${purpose}. Akshaya Gold Buyers team was polite and clear about every gram calculation. Digital scale was accurate to 0.001g. Money credited via IMPS instantly.`
];

const SCRAP_STORIES = [
  (loc, item, purpose) => `I had broken ${item} lying in my locker for years in ${loc}. Other shops refused proper rate due to lack of hallmark. Akshaya Gold Buyers tested the gold content using XRF spectroscopy without melting or damaging the pieces, and paid full market value on the spot.`,
  (loc, item, purpose) => `Sold damaged gold chains and melted scrap buttons in ${loc}. Akshaya Gold Buyers gave me the highest per-gram rate compared to 3 local jewellers in town. Clear, honest, and fast transaction for ${purpose}.`
];

const SILVER_DIAMOND_STORIES = [
  (loc, item, purpose) => `Sold heavy silver puja utensils and old silver anklets in ${loc} to manage ${purpose}. They tested silver purity with precision laser and paid spot cash without any weight rounding. Very clean process!`,
  (loc, item, purpose) => `Brought an inherited diamond ring & silver articles for valuation in ${loc}. The expert Gemologist verified diamond clarity and silver grade cleanly. Got fair market settlement within 20 minutes.`
];

const BANKS_LIST = [
  'Muthoot Finance', 'Manappuram Finance', 'IIFL Gold Loan', 'SBI Bank',
  'Canara Bank', 'Union Bank of India', 'HDFC Gold Loan', 'Rupeek',
  'ICICI Bank', 'Kotak Mahindra Bank', 'Karur Vysya Bank', 'Federal Bank',
  'Andhra Pragathi Grameena Bank', 'Telangana Grameena Bank', 'Private Pawnbroker'
];

const PURPOSES = [
  "daughter's higher education fees", "home renovation expenses", "agricultural seed & tractor purchase",
  "expanding my retail Kirana business", "medical treatment emergency", "clearing high-interest private debt",
  "buying a plot of land", "son's abroad university tuition", "wedding arrangements",
  "buying commercial transport vehicle", "dairy farm infrastructure investment", "NRI family trip expenses"
];

const ITEMS_OLD = ['Kasula Haram & Vaddanam', 'Ancestral Kanti & Bangles', '22K Gold Neckpieces', '24K Minted Gold Coins', 'Antique Temple Jewellery Set', '916 Hallmark Chain & Rings'];
const ITEMS_SCRAP = ['Broken Gold Chains & Earrings', 'Bended Gold Bangles & Studs', 'Old Melted Gold Nuggets', 'Unmarked Vintage Jewellery Pieces'];
const ITEMS_SILVER = ['Heavy Silver Puja Lamps & Plates', '925 Silver Dinnerware & Utensils', 'Antique Silver Anklets & Waist Chains', '18K Solitaire Diamond Ring & Silver Articles'];

// Generate 525 unique items
const testimonials = [];
const dates = ['January 2026', 'February 2026', 'December 2025', 'November 2025', 'October 2025', 'August 2025'];

let idCounter = 1;

for (let i = 0; i < 525; i++) {
  const isMale = i % 2 === 0;
  const sName = SURNAMES[i % SURNAMES.length];
  const fName = isMale ? FIRST_NAMES_MALE[(i * 3) % FIRST_NAMES_MALE.length] : FIRST_NAMES_FEMALE[(i * 5) % FIRST_NAMES_FEMALE.length];
  const initial = String.fromCharCode(65 + (i % 26));
  const author = `${fName} ${sName.substring(0, 1)}. (${sName})`;

  const role = ROLES[i % ROLES.length];
  const locObj = LOCATIONS[i % LOCATIONS.length];

  const catIndex = i % 4; // 0: pledged, 1: old, 2: scrap, 3: silver-diamond
  let category, categoryLabel, title, story, itemType, benefit, speed;

  const dateStr = dates[i % dates.length];
  const bank = BANKS_LIST[i % BANKS_LIST.length];
  const purpose = PURPOSES[i % PURPOSES.length];
  const loanAmount = (100000 + (i * 12500) % 600000).toLocaleString('en-IN');

  if (catIndex === 0) {
    category = 'pledged-gold';
    categoryLabel = 'Pledged Gold Release';
    title = `Released pledged gold from ${bank} in ${locObj.loc.split(',')[0]} without stress`;
    story = PLEDGED_STORIES[i % PLEDGED_STORIES.length](locObj.loc, bank, loanAmount, purpose);
    itemType = 'Pledged Gold Ornaments';
    benefit = `Cleared ₹${loanAmount} Loan + Net Surplus Paid`;
    speed = `${20 + (i % 15)} Mins at Branch`;
  } else if (catIndex === 1) {
    category = 'old-jewellery';
    categoryLabel = 'Old Gold Jewellery';
    const item = ITEMS_OLD[i % ITEMS_OLD.length];
    title = `Sold 22K ${item} in ${locObj.loc.split(',')[0]} at live market rate`;
    story = OLD_JEWELLERY_STORIES[i % OLD_JEWELLERY_STORIES.length](locObj.loc, item, purpose);
    itemType = item;
    benefit = '0% Melting Loss (German XRF)';
    speed = `${15 + (i % 10)} Mins at Desk`;
  } else if (catIndex === 2) {
    category = 'scrap-gold';
    categoryLabel = 'Broken & Scrap Gold';
    const item = ITEMS_SCRAP[i % ITEMS_SCRAP.length];
    title = `Exchanged ${item} for instant bank payout in ${locObj.loc.split(',')[0]}`;
    story = SCRAP_STORIES[i % SCRAP_STORIES.length](locObj.loc, item, purpose);
    itemType = item;
    benefit = 'Assayed Laser Purity Value';
    speed = 'Spot IMPS Transfer';
  } else {
    category = 'silver-diamond';
    categoryLabel = 'Silver & Diamonds';
    const item = ITEMS_SILVER[i % ITEMS_SILVER.length];
    title = `Fair valuation for ${item} in ${locObj.loc.split(',')[0]}`;
    story = SILVER_DIAMOND_STORIES[i % SILVER_DIAMOND_STORIES.length](locObj.loc, item, purpose);
    itemType = item;
    benefit = 'Spot Bullion Market Rate';
    speed = 'Instant Account Credit';
  }

  testimonials.push({
    id: `story-${idCounter++}`,
    author,
    role,
    location: locObj.loc,
    district: locObj.dist,
    state: locObj.state,
    category,
    categoryLabel,
    rating: 5,
    date: dateStr,
    title,
    story,
    transactionDetails: {
      itemType,
      weightOrValue: `${25 + (i % 180)} Grams Assayed`,
      benefitHighlight: benefit,
      settlementSpeed: speed
    }
  });
}

const fileContent = `export interface Testimonial {
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

export const TESTIMONIALS_DATA: Testimonial[] = ${JSON.stringify(testimonials, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../lib/testimonials.ts'), fileContent, 'utf-8');
console.log(`Successfully written ${testimonials.length} testimonials to lib/testimonials.ts!`);
