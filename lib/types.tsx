export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }
  
  export interface ApiResponse {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Episode[];
  }
