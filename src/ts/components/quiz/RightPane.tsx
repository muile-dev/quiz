import { FC, useState } from 'react';

import Header from '../atoms/Header';
import ActionButton from '../molecules/quiz/ActionButton';
import OptionList from '../molecules/quiz/OptionList';
import Question from '../molecules/quiz/Question';
import Quiz from '../types/quiz';

type Props = {
  quizSelected: Quiz | null;
  notify: string | null;
  handleOnAddClick: (quizId: number) => void;
  handleOnChangeQuestion: (quizId: number, question: string) => void;
  handleOnDeleteOption: (quizId: number, optionId: number) => void;
  handleOnChangeOption: (
    quizId: number,
    optionId: number,
    optionContent: string
  ) => void;
  hanleOnSelectedImage: (quizId: number, selectedImage: string | null) => void;
};

const RightPane: FC<Props> = ({
  quizSelected,
  notify,
  handleOnAddClick,
  handleOnChangeQuestion,
  handleOnDeleteOption,
  handleOnChangeOption,
  hanleOnSelectedImage,
}) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const toggleDeleteMode = () => setDeleteMode((prevState) => !prevState);

  const handleOnSaveQuestion = (value: string) => {
    quizSelected && handleOnChangeQuestion(quizSelected.id, value);
  };

  return (
    <div
      className='right-pane col-sm-8 px-0 bg-gradient rounded'
      style={{ backgroundColor: '#f7f3eb' }}
    >
      <div className='right-content p-4'>
        <Header
          title={`Design Question ${quizSelected ? quizSelected.id : ''}`}
        />
        {notify && (
          <div className='alert alert-danger' role='alert'>
            {notify}
          </div>
        )}
        {quizSelected && (
          <div className='question-design'>
            <div className='content pt-5'>
              <Question
                quiz={quizSelected}
                handleOnChangeQuestion={handleOnSaveQuestion}
                hanleOnSelectedImage={hanleOnSelectedImage}
              />
              <OptionList
                deleteMode={deleteMode}
                handleOnChangeOption={handleOnChangeOption}
                quiz={quizSelected}
                handleOnDeleteOption={handleOnDeleteOption}
              />
            </div>

            <ActionButton
              deleteMode={deleteMode}
              handleOnAddClick={(e) => handleOnAddClick(quizSelected.id)}
              handleOnToggleDeleteMode={toggleDeleteMode}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPane;
