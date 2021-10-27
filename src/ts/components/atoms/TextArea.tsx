import React, { FC } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  onEnterInput: (value: string) => void;
  defaultValue: string;
}

const TextArea: FC<Props> = ({ defaultValue, onEnterInput }) => {
  const handleOnKeyPressEnter = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      onEnterInput(event.currentTarget.value);
      event.currentTarget.blur();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <TextareaAutosize
      key={defaultValue}
      defaultValue={defaultValue}
      style={{ height: 40, padding: 8 }}
      onKeyPress={handleOnKeyPressEnter}
      autoFocus
    />
  );
};

export default TextArea;
