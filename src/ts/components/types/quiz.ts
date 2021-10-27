export interface OptionType {
  id: number;
  content: string;
}

export interface Quiz {
  id: number;
  question: string;
  image: string;
  options: OptionType[];
}

export default Quiz;
