export type SelectOptionTypes = {
  id: string ;
  name: string ;
};

export type ChangeInputType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type GetQueryTypes<T> = {
  results: T[];
};
