import { FC } from 'react';

import TextArea from '../../atoms/TextArea';

interface Props {
  question: string;
  handleOnChangeQuestion: (value: string) => void;
}

const Question: FC<Props> = ({ question, handleOnChangeQuestion }) => {
  return (
    <div className='mb-3 row h4'>
      <label className='col-sm-2 col-form-label'>Question</label>
      <div className='col-sm-10'>
        <TextArea
          defaultValue={question}
          onEnterInput={handleOnChangeQuestion}
        />

        <button className='btn btn-primary bg-gradient m-2'>ADD IMAGE</button>
      </div>
    </div>
  );
};

export default Question;
