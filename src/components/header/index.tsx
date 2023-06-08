import LineColor from '../../service/colorTypes';
import Calendar from '../calendar';
import Progress from '../progress';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <Calendar />
          <div className={styles.progressContainer}>
            <Progress
              title={'Новые звонки '}
              counter={'20 из 30 шт'}
              persent={`${(20 / 30) * 100}%`}
              color={LineColor.green}
            />
            <Progress
              title={'Качество разговоров '}
              counter={'40%'}
              persent={'40%'}
              color={LineColor.yellow}
            />
            <Progress
              title={'Конверсия в заказ '}
              counter={'67%'}
              persent={'67%'}
              color={LineColor.red}
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <SearchIcon width="16" height="16" />
          <div className={styles.ownerContainer}>
            <span className={styles.owner}>ИП Сидорова Александра Михайловна</span>
            <ArrowIcon width="12" height="7" />
          </div>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}></div>
            <ArrowIcon width="12" height="7" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
