import { FC } from 'react';

interface Props {
  handleOnAddClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleOnToggleDeleteMode: () => void;
  deleteMode: boolean;
}

const ActionButton: FC<Props> = ({
  handleOnAddClick,
  handleOnToggleDeleteMode,
  deleteMode,
}) => {
  return (
    <>
      <div className='action d-flex justify-content-center pt-5'>
        {(deleteMode && (
          <button
            onClick={handleOnToggleDeleteMode}
            className='btn btn-primary bg-gradient mx-2'
          >
            BACK
          </button>
        )) || (
          <>
            <button
              className='btn btn-primary bg-gradient mx-2'
              onClick={handleOnAddClick}
            >
              ADD
            </button>
            <button
              onClick={handleOnToggleDeleteMode}
              className='btn btn-primary bg-gradient mx-2'
            >
              DELETE
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ActionButton;
