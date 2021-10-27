import { FC } from 'react';
import Trash from '../../atoms/Trash';
import Quiz from '../../types/quiz';

type Props = {
  quizzes: Quiz[];
  quizSelected: Quiz | null;
  deleteMode: boolean;
  handleOnClickQuestion: (questionIndex: number) => void;
  handleOnDeleteQuestion: (questionIndex: number) => void;
};

const QuestionList: FC<Props> = ({
  quizzes,
  quizSelected,
  deleteMode,
  handleOnClickQuestion,
  handleOnDeleteQuestion,
}) => {
  const renderQuestion = (quiz: Quiz, index: number) => {
    return (
      <li
        key={quiz.id}
        className={`${quizSelected?.id === quiz.id ? 'h4' : 'h5'}`}
      >
        <div
          onClick={(_) => handleOnClickQuestion(quiz.id)}
          className='question-name cursor-pointer row'
        >
          <div className='col-10'> {quiz.question}</div>
          {deleteMode && (
            <span
              className='delete-icon cursor-pointer pull-right col-2'
              onClick={(_) => handleOnDeleteQuestion(quiz.id)}
            >
              <Trash />
            </span>
          )}
        </div>
      </li>
    );
  };
  return (
    <div className='question-list mb-3 pt-5'>
      <ol>
        {Object.values(quizzes).map((quiz, index) =>
          renderQuestion(quiz, index)
        )}
      </ol>
    </div>
  );
};

export default QuestionList;
