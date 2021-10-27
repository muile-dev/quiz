import { FC } from 'react';

export interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const DEFAULT = {
  width: 24,
  height: 24,
  color: '#ede7f6',
};

const Trash: FC<Props> = ({
  width = DEFAULT.width,
  height = DEFAULT.height,
  color = DEFAULT.color,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4H18C18.5523 4 19 4.44772 19 5V6H5V5C5 4.44772 5.44772 4 6 4H9ZM18 7H6V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7Z'
      fill={color}
    />
  </svg>
);

export default Trash;
