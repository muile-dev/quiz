import { FC } from 'react';

interface Props {
  name: string;
  value: string;
  handleOnSave: (optionContent: string) => void;
}

const Option: FC<Props> = ({ name, value, handleOnSave }) => {
  const handleOnKeyPressEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleOnSave(event.currentTarget.value);
      event.currentTarget.blur();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className='row h5'>
      <label className='col-sm-2 col-form-label'>{name}</label>
      <div className='col-sm-10'>
        <input
          key={value}
          type='text'
          className='form-control-plaintext'
          defaultValue={value}
          onKeyPress={handleOnKeyPressEnter}
        />
      </div>
    </div>
  );
};

export default Option;
