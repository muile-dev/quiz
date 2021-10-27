import { FC } from 'react';
import QuizPage from './ts/components/quiz';

const App: FC = () => {
  return (
    <div className='page-wrapper'>
      <div className='container'>
        <QuizPage />
      </div>
    </div>
  );
};

export default App;
