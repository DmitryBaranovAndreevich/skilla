import styles from './app.module.css';
import Main from '../../pages/main';
import SideBar from '../sideBar';
import Header from '../header';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
