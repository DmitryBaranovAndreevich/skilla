import styles from './app.module.css';
import Calls from '../../pages/calls';
import SideBar from '../sideBar';
import Header from '../header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.body}>
        <Header />
        <Routes>
          <Route path="/calls" element={<Calls />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
