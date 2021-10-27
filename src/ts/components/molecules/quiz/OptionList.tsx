import { FC } from 'react';

import Option from './../../atoms/Option';
import Trash from './../../atoms/Trash';

import { Quiz, OptionType } from './../../types/quiz';

type Props = {
  quiz: Quiz;
  deleteMode: boolean;
  handleOnDeleteOption: (quizId: number, optionId: number) => void;
  handleOnChangeOption: (
    quizId: number,
    optionId: number,
    optionContent: string
  ) => void;
};

const OptionList: FC<Props> = ({
  quiz,
  deleteMode,
  handleOnDeleteOption,
  handleOnChangeOption,
}) => {
  return (
    <div className='option-list'>
      {Object.values(quiz.options).map((option: OptionType, index: number) => (
        <div className='d-flex align-items-center' key={index}>
          <div className='col-10'>
            <Option
              name={`Option ${index + 1}`}
              value={option.content}
              handleOnSave={(optionContent) =>
                handleOnChangeOption(quiz.id, option.id, optionContent)
              }
            />
          </div>
          {deleteMode && (
            <div
              className='col-2 cursor-pointer'
              onClick={(_) => handleOnDeleteOption(quiz.id, option.id)}
            >
              <Trash color='#e91e63' />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionList;
