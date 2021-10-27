import { FC, useEffect } from 'react';
import useQuiz from '../customerHooks/UseQuiz';

import LeftPanel from './LeftPane';
import RightPanel from './RightPane';

const QuizPage: FC = () => {
  const {
    quizzes,
    notify,
    quizSelected,
    handleOnClickQuestion,
    handleAddQuestion,
    handleOnDeleteQuestion,
    handleOnChangeQuestion,
    handleAddOption,
    handleOnChangeOption,
    handleOnDeleteOption,
  } = useQuiz();

  useEffect(() => {
    console.log('quizSelected', quizSelected);
  }, [quizSelected]);

  return (
    <div
      className='row bg-gradient rounded mt-5'
      style={{ backgroundColor: '#05192d' }}
    >
      <LeftPanel
        quizzes={quizzes}
        quizSelected={quizSelected}
        handleOnDeleteQuestion={handleOnDeleteQuestion}
        handleOnClickQuestion={handleOnClickQuestion}
        handleOnAddClick={handleAddQuestion}
      />
      <RightPanel
        notify={notify}
        quizSelected={quizSelected}
        handleOnChangeQuestion={handleOnChangeQuestion}
        handleOnAddClick={handleAddOption}
        handleOnChangeOption={handleOnChangeOption}
        handleOnDeleteOption={handleOnDeleteOption}
      />
    </div>
  );
};

export default QuizPage;
