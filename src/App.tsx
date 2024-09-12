
import './App.css';
import axios from 'axios';
import { FC } from 'react';
import { PageList } from './components/PageList';
import { PageEditor } from './components/PageEditor';

const App: FC = () => {
  return (
    <PageList />
  );
}

export default App;
