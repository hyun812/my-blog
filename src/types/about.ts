export interface IActivity {
  name: string;
  period: string;
  descriptions: string[];
}

export interface IAward {
  name: string;
  date: string;
  descriptions: string;
}

export interface IProject {
  name: string;
  title: string;
  role: string;
  period: string;
  skills: string[];
  descriptions: string[];
  imageSrc: string;
  githubLink: string;
  primaryColor: string;
}
