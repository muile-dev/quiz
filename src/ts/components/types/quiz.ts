export interface OptionType {
  id: number;
  content: string;
}

export interface Quiz {
  id: number;
  question: string;
  image: string;
  options: {
    [key: string]: OptionType;
  };
}

export interface Quizzes {
  [key: string]: Quiz;
}

export default Quiz;
