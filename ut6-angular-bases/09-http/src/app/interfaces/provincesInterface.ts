export interface ProvincesResponse {
  total_count: number;
  results: Province[];
}

export interface Province {
  ccaa: string;
  provincia: string;
}
