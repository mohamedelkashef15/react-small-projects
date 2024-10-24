export interface IJobs {
  company: string;
  dates: string;
  duties: string[];
  id: string;
  order: number;
  title: string;
}

export interface IContent {
  jobs: IJobs[];
  index: number;
}

export interface ISidebar {
  jobs: IJobs[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}
