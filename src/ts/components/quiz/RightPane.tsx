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
  handleOnBackToQuetionList: () => void;
};

const RightPane: FC<Props> = ({
  quizSelected,
  notify,
  handleOnAddClick,
  handleOnChangeQuestion,
  handleOnDeleteOption,
  handleOnChangeOption,
  hanleOnSelectedImage,
  handleOnBackToQuetionList,
}) => {
  const [deleteMode, setDeleteMode] = useState(false);
  const toggleDeleteMode = () => setDeleteMode((prevState) => !prevState);

  const handleOnSaveQuestion = (value: string) => {
    quizSelected && handleOnChangeQuestion(quizSelected.id, value);
  };

  return (
    <div
      className={`px-0 bg-gradient rounded col-md-8 ${
        quizSelected ? '' : 'd-none d-md-block'
      }`}
      style={{ backgroundColor: '#f7f3eb' }}
    >
      <button
        className='m-2 bg-gradient rounded btn btn-default d-block d-md-none'
        onClick={handleOnBackToQuetionList}
      >
        Back
      </button>
      <div className='right-content p-4'>
        <Header
          title={`Design Question ${quizSelected ? quizSelected.id : ''}`}
        />
        {quizSelected && notify && (
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
              addDisabled={Object.keys(quizSelected.options).length >= 6}
              deleteDisabled={Object.keys(quizSelected.options).length <= 2}
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
