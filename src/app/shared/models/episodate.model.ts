
export interface SearchResponse<T> {
  total: number;
  page: number;
  pages: number;
  response: T[]
}
