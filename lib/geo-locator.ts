/**
 * Geolocation and GPS Mapping Engine for Andhra Pradesh & Telangana
 * Maps latitude/longitude to closest district, mandal, or town.
 */

export interface GeoLocationPoint {
  id: string;
  name: string;
  stateSlug: 'andhra-pradesh' | 'telangana';
  stateName: string;
  districtSlug: string;
  districtName: string;
  mandalSlug?: string;
  mandalName?: string;
  url: string;
  lat: number;
  lng: number;
}

// Haversine formula to compute great-circle distance in km between two lat/lng points
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Database of centroid coordinates for AP (26 districts) and Telangana (33 districts) + key urban hubs
export const GEO_COORDINATES_DATABASE: GeoLocationPoint[] = [
  // ================= HYDERABAD & URBAN TELANGANA =================
  {
    id: 'hyderabad-ameerpet',
    name: 'Ameerpet (Hyderabad)',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hyderabad',
    districtName: 'Hyderabad',
    mandalSlug: 'ameerpet',
    mandalName: 'Ameerpet',
    url: '/telangana/hyderabad/ameerpet',
    lat: 17.4375,
    lng: 78.4482
  },
  {
    id: 'hyderabad-secunderabad',
    name: 'Secunderabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hyderabad',
    districtName: 'Hyderabad',
    mandalSlug: 'secunderabad',
    mandalName: 'Secunderabad',
    url: '/telangana/hyderabad/secunderabad',
    lat: 17.4399,
    lng: 78.4983
  },
  {
    id: 'hyderabad-charminar',
    name: 'Charminar (Old City)',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hyderabad',
    districtName: 'Hyderabad',
    mandalSlug: 'charminar',
    mandalName: 'Charminar',
    url: '/telangana/hyderabad/charminar',
    lat: 17.3616,
    lng: 78.4747
  },
  {
    id: 'hyderabad-khairatabad',
    name: 'Khairatabad / Banjara Hills',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hyderabad',
    districtName: 'Hyderabad',
    mandalSlug: 'khairatabad',
    mandalName: 'Khairatabad',
    url: '/telangana/hyderabad/khairatabad',
    lat: 17.4124,
    lng: 78.4593
  },
  {
    id: 'hyderabad-central',
    name: 'Hyderabad Central',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hyderabad',
    districtName: 'Hyderabad',
    url: '/telangana/hyderabad',
    lat: 17.3850,
    lng: 78.4867
  },
  {
    id: 'medchal-malkajgiri-kukatpally',
    name: 'Kukatpally / Medchal-Malkajgiri',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'medchal-malkajgiri',
    districtName: 'Medchal-Malkajgiri',
    mandalSlug: 'kukatpally',
    mandalName: 'Kukatpally',
    url: '/telangana/medchal-malkajgiri',
    lat: 17.4933,
    lng: 78.3914
  },
  {
    id: 'ranga-reddy-gachibowli',
    name: 'Gachibowli / Ranga Reddy',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'ranga-reddy',
    districtName: 'Ranga Reddy',
    url: '/telangana/ranga-reddy',
    lat: 17.4401,
    lng: 78.3489
  },

  // ================= TELANGANA DISTRICTS =================
  {
    id: 'warangal-hanumakonda',
    name: 'Warangal / Hanumakonda',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'warangal',
    districtName: 'Warangal',
    url: '/telangana/warangal',
    lat: 17.9689,
    lng: 79.5941
  },
  {
    id: 'hanumakonda',
    name: 'Hanumakonda',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'hanumakonda',
    districtName: 'Hanumakonda',
    url: '/telangana/hanumakonda',
    lat: 18.0135,
    lng: 79.5603
  },
  {
    id: 'karimnagar',
    name: 'Karimnagar',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'karimnagar',
    districtName: 'Karimnagar',
    url: '/telangana/karimnagar',
    lat: 18.4386,
    lng: 79.1288
  },
  {
    id: 'nizamabad',
    name: 'Nizamabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'nizamabad',
    districtName: 'Nizamabad',
    url: '/telangana/nizamabad',
    lat: 18.6725,
    lng: 78.0941
  },
  {
    id: 'khammam',
    name: 'Khammam',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'khammam',
    districtName: 'Khammam',
    url: '/telangana/khammam',
    lat: 17.2473,
    lng: 80.1514
  },
  {
    id: 'nalgonda',
    name: 'Nalgonda',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'nalgonda',
    districtName: 'Nalgonda',
    url: '/telangana/nalgonda',
    lat: 17.0577,
    lng: 79.2684
  },
  {
    id: 'mahabubnagar',
    name: 'Mahabubnagar',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'mahabubnagar',
    districtName: 'Mahabubnagar',
    url: '/telangana/mahabubnagar',
    lat: 16.7488,
    lng: 77.9868
  },
  {
    id: 'siddipet',
    name: 'Siddipet',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'siddipet',
    districtName: 'Siddipet',
    url: '/telangana/siddipet',
    lat: 18.1018,
    lng: 78.8520
  },
  {
    id: 'suryapet',
    name: 'Suryapet',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'suryapet',
    districtName: 'Suryapet',
    url: '/telangana/suryapet',
    lat: 17.1439,
    lng: 79.6239
  },
  {
    id: 'mancherial',
    name: 'Mancherial',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'mancherial',
    districtName: 'Mancherial',
    url: '/telangana/mancherial',
    lat: 18.8679,
    lng: 79.4639
  },
  {
    id: 'peddapalli',
    name: 'Peddapalli (Ramagundam)',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'peddapalli',
    districtName: 'Peddapalli',
    url: '/telangana/peddapalli',
    lat: 18.6162,
    lng: 79.3831
  },
  {
    id: 'jagtial',
    name: 'Jagtial',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'jagtial',
    districtName: 'Jagtial',
    url: '/telangana/jagtial',
    lat: 18.7944,
    lng: 78.9125
  },
  {
    id: 'rajanna-sircilla',
    name: 'Rajanna Sircilla',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'rajanna-sircilla',
    districtName: 'Rajanna Sircilla',
    url: '/telangana/rajanna-sircilla',
    lat: 18.3846,
    lng: 78.8347
  },
  {
    id: 'kamareddy',
    name: 'Kamareddy',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'kamareddy',
    districtName: 'Kamareddy',
    url: '/telangana/kamareddy',
    lat: 18.3223,
    lng: 78.3414
  },
  {
    id: 'sangareddy',
    name: 'Sangareddy',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'sangareddy',
    districtName: 'Sangareddy',
    url: '/telangana/sangareddy',
    lat: 17.6193,
    lng: 78.0818
  },
  {
    id: 'medak',
    name: 'Medak',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'medak',
    districtName: 'Medak',
    url: '/telangana/medak',
    lat: 18.0463,
    lng: 78.2618
  },
  {
    id: 'vikarabad',
    name: 'Vikarabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'vikarabad',
    districtName: 'Vikarabad',
    url: '/telangana/vikarabad',
    lat: 17.3364,
    lng: 77.9048
  },
  {
    id: 'yadadri-bhuvanagiri',
    name: 'Yadadri Bhuvanagiri',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'yadadri-bhuvanagiri',
    districtName: 'Yadadri Bhuvanagiri',
    url: '/telangana/yadadri-bhuvanagiri',
    lat: 17.5108,
    lng: 78.8837
  },
  {
    id: 'jangaon',
    name: 'Jangaon',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'jangaon',
    districtName: 'Jangaon',
    url: '/telangana/jangaon',
    lat: 17.7231,
    lng: 79.1601
  },
  {
    id: 'mahabubabad',
    name: 'Mahabubabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'mahabubabad',
    districtName: 'Mahabubabad',
    url: '/telangana/mahabubabad',
    lat: 17.5986,
    lng: 80.0042
  },
  {
    id: 'bhadradri-kothagudem',
    name: 'Bhadradri Kothagudem',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'bhadradri-kothagudem',
    districtName: 'Bhadradri Kothagudem',
    url: '/telangana/bhadradri-kothagudem',
    lat: 17.5513,
    lng: 80.6179
  },
  {
    id: 'jayashankar-bhupalpally',
    name: 'Jayashankar Bhupalpally',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'jayashankar-bhupalpally',
    districtName: 'Jayashankar Bhupalpally',
    url: '/telangana/jayashankar-bhupalpally',
    lat: 18.4312,
    lng: 79.8651
  },
  {
    id: 'mulugu',
    name: 'Mulugu',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'mulugu',
    districtName: 'Mulugu',
    url: '/telangana/mulugu',
    lat: 18.1923,
    lng: 79.9405
  },
  {
    id: 'adilabad',
    name: 'Adilabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'adilabad',
    districtName: 'Adilabad',
    url: '/telangana/adilabad',
    lat: 19.6641,
    lng: 78.5320
  },
  {
    id: 'nirmal',
    name: 'Nirmal',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'nirmal',
    districtName: 'Nirmal',
    url: '/telangana/nirmal',
    lat: 19.0964,
    lng: 78.3429
  },
  {
    id: 'komaram-bheem-asifabad',
    name: 'Komaram Bheem Asifabad',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'komaram-bheem-asifabad',
    districtName: 'Komaram Bheem Asifabad',
    url: '/telangana/komaram-bheem-asifabad',
    lat: 19.3582,
    lng: 79.2831
  },
  {
    id: 'wanaparthy',
    name: 'Wanaparthy',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'wanaparthy',
    districtName: 'Wanaparthy',
    url: '/telangana/wanaparthy',
    lat: 16.3624,
    lng: 78.0617
  },
  {
    id: 'nagarkurnool',
    name: 'Nagarkurnool',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'nagarkurnool',
    districtName: 'Nagarkurnool',
    url: '/telangana/nagarkurnool',
    lat: 16.4844,
    lng: 78.3075
  },
  {
    id: 'jogulamba-gadwal',
    name: 'Jogulamba Gadwal',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'jogulamba-gadwal',
    districtName: 'Jogulamba Gadwal',
    url: '/telangana/jogulamba-gadwal',
    lat: 16.2307,
    lng: 77.8016
  },
  {
    id: 'narayanpet',
    name: 'Narayanpet',
    stateSlug: 'telangana',
    stateName: 'Telangana',
    districtSlug: 'narayanpet',
    districtName: 'Narayanpet',
    url: '/telangana/narayanpet',
    lat: 16.7344,
    lng: 77.4984
  },

  // ================= ANDHRA PRADESH DISTRICTS & CITIES =================
  {
    id: 'visakhapatnam-gajuwaka',
    name: 'Gajuwaka (Visakhapatnam)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'visakhapatnam',
    districtName: 'Visakhapatnam',
    mandalSlug: 'gajuwaka',
    mandalName: 'Gajuwaka',
    url: '/andhra-pradesh/visakhapatnam/gajuwaka',
    lat: 17.6904,
    lng: 83.2185
  },
  {
    id: 'visakhapatnam-central',
    name: 'Visakhapatnam (Vizag)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'visakhapatnam',
    districtName: 'Visakhapatnam',
    url: '/andhra-pradesh/visakhapatnam',
    lat: 17.6868,
    lng: 83.2185
  },
  {
    id: 'anakapalli',
    name: 'Anakapalli',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'anakapalli',
    districtName: 'Anakapalli',
    url: '/andhra-pradesh/anakapalli',
    lat: 17.6913,
    lng: 83.0039
  },
  {
    id: 'vizianagaram',
    name: 'Vizianagaram',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'vizianagaram',
    districtName: 'Vizianagaram',
    url: '/andhra-pradesh/vizianagaram',
    lat: 18.1067,
    lng: 83.3956
  },
  {
    id: 'srikakulam',
    name: 'Srikakulam',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'srikakulam',
    districtName: 'Srikakulam',
    url: '/andhra-pradesh/srikakulam',
    lat: 18.2949,
    lng: 83.8938
  },
  {
    id: 'parvathipuram-manyam',
    name: 'Parvathipuram Manyam',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'parvathipuram-manyam',
    districtName: 'Parvathipuram Manyam',
    url: '/andhra-pradesh/parvathipuram-manyam',
    lat: 18.7797,
    lng: 83.4286
  },
  {
    id: 'alluri-sitharama-raju',
    name: 'Alluri Sitharama Raju (Paderu)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'alluri-sitharama-raju',
    districtName: 'Alluri Sitharama Raju',
    url: '/andhra-pradesh/alluri-sitharama-raju',
    lat: 18.0833,
    lng: 82.6667
  },
  {
    id: 'kakinada',
    name: 'Kakinada',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'kakinada',
    districtName: 'Kakinada',
    url: '/andhra-pradesh/kakinada',
    lat: 16.9891,
    lng: 82.2475
  },
  {
    id: 'east-godavari-rajahmundry',
    name: 'Rajahmundry (East Godavari)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'east-godavari',
    districtName: 'East Godavari',
    url: '/andhra-pradesh/east-godavari',
    lat: 17.0005,
    lng: 81.8040
  },
  {
    id: 'konaseema-amalapuram',
    name: 'Dr. B.R. Ambedkar Konaseema (Amalapuram)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'konaseema',
    districtName: 'Dr. B.R. Ambedkar Konaseema',
    url: '/andhra-pradesh/konaseema',
    lat: 16.5787,
    lng: 82.0061
  },
  {
    id: 'eluru',
    name: 'Eluru',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'eluru',
    districtName: 'Eluru',
    url: '/andhra-pradesh/eluru',
    lat: 16.7107,
    lng: 81.0952
  },
  {
    id: 'west-godavari-bhimavaram',
    name: 'Bhimavaram (West Godavari)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'west-godavari',
    districtName: 'West Godavari',
    url: '/andhra-pradesh/west-godavari',
    lat: 16.5449,
    lng: 81.5212
  },
  {
    id: 'ntr-vijayawada',
    name: 'Vijayawada (NTR District)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'ntr',
    districtName: 'NTR (Vijayawada)',
    url: '/andhra-pradesh/ntr',
    lat: 16.5062,
    lng: 80.6480
  },
  {
    id: 'krishna-machilipatnam',
    name: 'Machilipatnam (Krishna)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'krishna',
    districtName: 'Krishna',
    url: '/andhra-pradesh/krishna',
    lat: 16.1875,
    lng: 81.1389
  },
  {
    id: 'guntur-city',
    name: 'Guntur City',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'guntur',
    districtName: 'Guntur',
    url: '/andhra-pradesh/guntur',
    lat: 16.3067,
    lng: 80.4365
  },
  {
    id: 'palnadu-narasaraopet',
    name: 'Narasaraopet (Palnadu)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'palnadu',
    districtName: 'Palnadu',
    url: '/andhra-pradesh/palnadu',
    lat: 16.2354,
    lng: 80.0494
  },
  {
    id: 'bapatla',
    name: 'Bapatla',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'bapatla',
    districtName: 'Bapatla',
    url: '/andhra-pradesh/bapatla',
    lat: 15.9042,
    lng: 80.4674
  },
  {
    id: 'prakasam-ongole',
    name: 'Ongole (Prakasam)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'prakasam',
    districtName: 'Prakasam',
    url: '/andhra-pradesh/prakasam',
    lat: 15.5057,
    lng: 80.0499
  },
  {
    id: 'nellore',
    name: 'Nellore (SPSR Nellore)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'nellore',
    districtName: 'Nellore',
    url: '/andhra-pradesh/nellore',
    lat: 14.4426,
    lng: 79.9865
  },
  {
    id: 'tirupati-city',
    name: 'Tirupati',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'tirupati',
    districtName: 'Tirupati',
    url: '/andhra-pradesh/tirupati',
    lat: 13.6288,
    lng: 79.4192
  },
  {
    id: 'chittoor',
    name: 'Chittoor',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'chittoor',
    districtName: 'Chittoor',
    url: '/andhra-pradesh/chittoor',
    lat: 13.2172,
    lng: 79.1003
  },
  {
    id: 'annamayya-rayachoty',
    name: 'Rayachoty (Annamayya)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'annamayya',
    districtName: 'Annamayya',
    url: '/andhra-pradesh/annamayya',
    lat: 14.0567,
    lng: 78.7523
  },
  {
    id: 'ysr-kadapa',
    name: 'YSR Kadapa',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'ysr-kadapa',
    districtName: 'YSR Kadapa',
    url: '/andhra-pradesh/ysr-kadapa',
    lat: 14.4673,
    lng: 78.8242
  },
  {
    id: 'nandyal',
    name: 'Nandyal',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'nandyal',
    districtName: 'Nandyal',
    url: '/andhra-pradesh/nandyal',
    lat: 15.4842,
    lng: 78.4836
  },
  {
    id: 'kurnool',
    name: 'Kurnool',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'kurnool',
    districtName: 'Kurnool',
    url: '/andhra-pradesh/kurnool',
    lat: 15.8281,
    lng: 78.0373
  },
  {
    id: 'ananthapuramu',
    name: 'Ananthapuramu (Anantapur)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'ananthapuramu',
    districtName: 'Ananthapuramu',
    url: '/andhra-pradesh/ananthapuramu',
    lat: 14.6819,
    lng: 77.6006
  },
  {
    id: 'sri-sathya-sai-puttaparthi',
    name: 'Puttaparthi (Sri Sathya Sai)',
    stateSlug: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtSlug: 'sri-sathya-sai',
    districtName: 'Sri Sathya Sai',
    url: '/andhra-pradesh/sri-sathya-sai',
    lat: 14.1672,
    lng: 77.8117
  }
];

export interface NearestLocationMatch {
  location: GeoLocationPoint;
  distanceKm: number;
  isWithinDirectCoverage: boolean; // within ~120km
  userCoordinates: { lat: number; lng: number };
}

/**
 * Finds the closest district or town in Andhra Pradesh or Telangana given user coordinates
 */
export function findNearestLocation(lat: number, lng: number): NearestLocationMatch {
  let closest: GeoLocationPoint = GEO_COORDINATES_DATABASE[0];
  let minDistance = Infinity;

  for (const point of GEO_COORDINATES_DATABASE) {
    const dist = calculateHaversineDistance(lat, lng, point.lat, point.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closest = point;
    }
  }

  return {
    location: closest,
    distanceKm: Math.round(minDistance * 10) / 10,
    isWithinDirectCoverage: minDistance <= 150,
    userCoordinates: { lat, lng }
  };
}
