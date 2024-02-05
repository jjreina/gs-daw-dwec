export interface MovieRespose {
  status: boolean;
  message: string;
  timestamp: number;
  data: Movie[];
}
export interface Movie {
  id: string;
  qid: string;
  title: string;
  year: number;
  stars: string;
  q: string;
  image: string;
}
