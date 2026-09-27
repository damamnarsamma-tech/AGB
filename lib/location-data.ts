import hierarchyData from './location-hierarchy.json';

export interface HierarchyRoot {
  stats: {
    totalApUrls: number;
    totalTgUrls: number;
    totalUrls: number;
    generatedAt: string;
    totalMandals: number;
    totalCities?: number;
    totalVillages?: number;
    totalNeighbourhoods?: number;
    totalLocalities: number;
  };
  states: {
    'andhra-pradesh': {
      name: string;
      slug: string;
      districts: Record<string, {
        slug: string;
        name: string;
        mandals: Record<string, {
          slug: string;
          name: string;
          villages?: string[];
          neighbourhoods?: string[];
          localities: string[];
          isUrbanCenter?: boolean;
        }>;
        cities?: Record<string, {
          slug: string;
          name: string;
          neighbourhoods?: string[];
          neighbourhoodSlugs?: string[];
          localities: string[];
          isCity?: boolean;
        }>;
      }>;
    };
    'telangana': {
      name: string;
      slug: string;
      districts: Record<string, {
        slug: string;
        name: string;
        mandals: Record<string, {
          slug: string;
          name: string;
          villages?: string[];
          neighbourhoods?: string[];
          localities: string[];
          isUrbanCenter?: boolean;
        }>;
        cities?: Record<string, {
          slug: string;
          name: string;
          neighbourhoods?: string[];
          neighbourhoodSlugs?: string[];
          localities: string[];
          isCity?: boolean;
        }>;
      }>;
    };
  };
  localityDatabase?: {
    scope: string[];
    rules: Record<string, boolean>;
    states: Record<string, {
      name: string;
      districts: Record<string, {
        name: string;
        cities: Record<string, {
          name: string;
          localities: string[];
        }>;
      }>;
    }>;
  };
}

export const locationHierarchy: HierarchyRoot = hierarchyData as unknown as HierarchyRoot;
