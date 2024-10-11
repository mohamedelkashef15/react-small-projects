export interface IPerson {
  id?: number;
  age: number;
  img: string;
  name: string;
}

export interface IPersons {
  persons: IPerson[];
}
