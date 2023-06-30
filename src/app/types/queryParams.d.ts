export type QueryParams = {
  _page?: number;
  _limit?: number;
  q?: string;
  _sort?: string;
  _order?: 'asc' | 'desc' | 'none';
  custom?: object;
};