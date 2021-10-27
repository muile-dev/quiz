import { FC } from 'react';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='header mb-3'>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
