import React, { FC, useEffect, useState, useRef } from 'react';

/**
 * libs
 */
import { blobToBase64 } from './../../libs/binary';

import TextArea from '../../atoms/TextArea';
import { Quiz } from './../../types/quiz';

interface Props {
  quiz: Quiz;
  handleOnChangeQuestion: (value: string) => void;
  hanleOnSelectedImage: (quizId: number, selectedImage: string | null) => void;
}

const Question: FC<Props> = ({
  quiz,
  handleOnChangeQuestion,
  hanleOnSelectedImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [savedImage, setSavedImage] = useState<boolean>(false);
  const selectImageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSelectedImage(() => quiz.image || null);
    return () => {
      setSavedImage(() => false);
    };
  }, [quiz.image]);

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    fileList &&
      fileList.length > 0 &&
      blobToBase64(fileList[0], (imageSelect) => {
        setSelectedImage(() => imageSelect);
      });
  };

  const saveSelectedImage = () => {
    hanleOnSelectedImage(quiz.id, selectedImage);
    setSavedImage(() => true);
  };

  const removeSelectedImage = () => {
    hanleOnSelectedImage(quiz.id, '');
    setSelectedImage(null);
  };

  const onClickSelectImage = () => {
    selectImageRef.current?.click();
  };

  return (
    <div className='mb-3 row h4'>
      <label className='col-sm-2 col-form-label'>Question</label>
      <div className='col-sm-10'>
        <TextArea
          defaultValue={quiz.question}
          onEnterInput={handleOnChangeQuestion}
        />

        <input
          accept='image/*'
          type='file'
          onChange={imageChange}
          key={selectedImage}
          className='d-none'
          ref={selectImageRef}
        />
        <button
          className='btn btn-primary bg-gradient m-2'
          onClick={onClickSelectImage}
        >
          Add Image
        </button>
        {/* <button className='btn btn-primary bg-gradient m-2'>ADD IMAGE</button> */}
        {selectedImage && (
          <div
            style={{ marginTop: 50, display: 'flex', flexDirection: 'column' }}
          >
            <img
              key={selectedImage}
              src={selectedImage}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt='Thumb'
            />
            {!savedImage && (
              <div className='d-flex justify-content-center mt-2'>
                <button
                  onClick={saveSelectedImage}
                  className='btn btn-primary bg-gradient mx-2'
                >
                  Save
                </button>
                <button
                  onClick={removeSelectedImage}
                  className='btn btn-danger bg-gradient'
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
