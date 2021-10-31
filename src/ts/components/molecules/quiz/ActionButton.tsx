import { FC } from 'react';

interface Props {
  handleOnAddClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleOnToggleDeleteMode: () => void;
  deleteMode: boolean;
  addDisabled?: boolean;
  deleteDisabled?: boolean;
}

const ActionButton: FC<Props> = ({
  handleOnAddClick,
  handleOnToggleDeleteMode,
  deleteMode,
  addDisabled,
  deleteDisabled,
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
              disabled={addDisabled}
            >
              ADD
            </button>
            <button
              disabled={deleteDisabled}
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
