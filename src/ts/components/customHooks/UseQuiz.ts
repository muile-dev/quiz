import { useMemo, useState } from 'react';

/**
 * Type
 */
import Quiz from '../types/quiz';

const PAGE_STORAGE = 'quiz';
const MAX_OPTIONS_NUMBER = 6;
const MIN_OPTIONS_NUMBER = 2;

const useQuiz = () => {
  const initQuizzes = useMemo(() => {
    const quizeesStore =
      localStorage.getItem(PAGE_STORAGE) || JSON.stringify({});
    return JSON.parse(quizeesStore);
  }, []);

  // state initQuizzes
  const [quizzes, setQuizzes] = useState(initQuizzes);
  const [quizSelected, setQuizSelected] = useState<Quiz | null>(null);
  const [notify, setNotify] = useState<string | null>(null);

  const handleOnClickQuestion = (quizId: number) =>
    setQuizSelected(quizzes[quizId]);

  const setStoreQuizzes = (newQuizzes: Quiz[]) => {
    localStorage.setItem(PAGE_STORAGE, JSON.stringify(newQuizzes));
    setQuizzes(() => newQuizzes);
  };

  const handleAddQuestion = () => {
    const quizzesKeys = Object.keys(quizzes);
    const lastId =
      quizzesKeys.length > 0
        ? parseInt(quizzesKeys[quizzesKeys.length - 1])
        : 0;
    const nextQuizId = lastId + 1;

    setStoreQuizzes({
      ...quizzes,
      [nextQuizId]: {
        id: nextQuizId,
        question: `New Question ${nextQuizId}`,
        image: '',
        options: {},
      },
    });
  };

  const handleOnDeleteQuestion = (quizId: number) => {
    const newQuizzes = { ...quizzes };
    delete newQuizzes[quizId];

    setStoreQuizzes(newQuizzes);
    if (quizId === quizSelected?.id) {
      setQuizSelected(() => null);
    }
  };

  const handleOnChangeQuestion = (quizId: number, question: string) => {
    if (question.length <= 0) {
      setNotify('Question should not be empty');
      return;
    }
    setStoreQuizzes({
      ...quizzes,
      [quizId]: {
        ...quizzes[quizId],
        question,
      },
    });
  };

  const handleAddOption = (quizId: number) => {
    if (!quizzes[quizId]) {
      setNotify('Quiz is not available');
      return;
    }

    const quiz = { ...quizzes[quizId] };
    const optionKeys = Object.keys(quiz.options);
    if (optionKeys.length >= MAX_OPTIONS_NUMBER) {
      setNotify(`The Option should equal or less than ${MAX_OPTIONS_NUMBER}`);
      return;
    }
    const lastOptionId =
      optionKeys.length > 0 ? parseInt(optionKeys[optionKeys.length - 1]) : 0;
    const nextOptionId = lastOptionId + 1;

    quiz.options[nextOptionId] = {
      id: nextOptionId,
      content: `New Option ${nextOptionId}`,
    };

    const newQuizzes = { ...quizzes, [quizId]: quiz };
    setStoreQuizzes(newQuizzes);
  };

  const handleOnChangeOption = (
    quizId: number,
    optionId: number,
    optionContent: string
  ): void => {
    if (!quizzes[quizId]) {
      setNotify('Quiz is not available');
      return;
    }
    if (optionContent.length <= 0) {
      setNotify('Option should not be empty');
      return;
    }

    const quizOptions = quizzes[quizId].options;
    const options = {
      ...quizOptions,
      [optionId]: {
        ...quizzes[quizId].options[optionId],
        content: optionContent,
      },
    };

    setStoreQuizzes({
      ...quizzes,
      [quizId]: {
        ...quizzes[quizId],
        options,
      },
    });
  };

  const handleOnDeleteOption = (quizId: number, optionId: number) => {
    const newQuizzes = { ...quizzes };
    if (Object.keys(newQuizzes[quizId].options).length <= MIN_OPTIONS_NUMBER) {
      setNotify(
        `The Option should equal or greater than ${MIN_OPTIONS_NUMBER}`
      );
      return;
    }
    delete newQuizzes[quizId].options[optionId];
    setStoreQuizzes(newQuizzes);
  };

  const hanleOnSelectedImage = (
    quizId: number,
    selectedImage: string | null
  ) => {
    setStoreQuizzes({
      ...quizzes,
      [quizId]: {
        ...quizzes[quizId],
        image: selectedImage,
      },
    });
  };

  const handleOnBackToQuetionList = () => setQuizSelected(() => null);

  return {
    quizzes,
    quizSelected,
    notify,
    handleOnClickQuestion,
    handleAddQuestion,
    handleOnChangeQuestion,
    handleOnDeleteQuestion,
    handleAddOption,
    handleOnChangeOption,
    handleOnDeleteOption,
    hanleOnSelectedImage,
    handleOnBackToQuetionList,
  };
};

export default useQuiz;
