import { FC, useState } from 'react';

import Header from '../atoms/Header';
import ActionButton from '../molecules/quiz/ActionButton';
import QuestionList from '../molecules/quiz/QuestionList';
import { Quiz, Quizzes } from '../types/quiz';

interface Props {
  quizzes: Quizzes;
  quizSelected: Quiz | null;
  handleOnAddClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleOnClickQuestion: (quizId: number) => void;
  handleOnDeleteQuestion: (quizId: number) => void;
}

const LeftPane: FC<Props> = ({
  quizzes,
  quizSelected,
  handleOnAddClick,
  handleOnClickQuestion,
  handleOnDeleteQuestion,
}) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const toggleDeleteMode = () => setDeleteMode((prevState) => !prevState);

  return (
    <div
      className={`left-pane col-sm-4 ${
        quizSelected ? 'd-none d-md-block' : ''
      }`}
    >
      <div className='left-content p-4 text-white'>
        <Header title='Select your questions' />
        <QuestionList
          deleteMode={deleteMode}
          handleOnDeleteQuestion={handleOnDeleteQuestion}
          quizzes={quizzes}
          quizSelected={quizSelected}
          handleOnClickQuestion={handleOnClickQuestion}
        />
        <ActionButton
          deleteMode={deleteMode}
          handleOnAddClick={handleOnAddClick}
          handleOnToggleDeleteMode={toggleDeleteMode}
        />
      </div>
    </div>
  );
};

export default LeftPane;
