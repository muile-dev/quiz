import { FC } from 'react';
import useQuiz from '../customHooks/UseQuiz';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

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
    hanleOnSelectedImage,
    handleOnBackToQuetionList,
  } = useQuiz();

  return (
    <div
      className='row bg-gradient rounded'
      style={{ backgroundColor: '#05192d' }}
    >
      <LeftPane
        quizzes={quizzes}
        quizSelected={quizSelected}
        handleOnDeleteQuestion={handleOnDeleteQuestion}
        handleOnClickQuestion={handleOnClickQuestion}
        handleOnAddClick={handleAddQuestion}
      />
      <RightPane
        notify={notify}
        quizSelected={quizSelected}
        handleOnChangeQuestion={handleOnChangeQuestion}
        handleOnAddClick={handleAddOption}
        handleOnChangeOption={handleOnChangeOption}
        handleOnDeleteOption={handleOnDeleteOption}
        hanleOnSelectedImage={hanleOnSelectedImage}
        handleOnBackToQuetionList={handleOnBackToQuetionList}
      />
    </div>
  );
};

export default QuizPage;
