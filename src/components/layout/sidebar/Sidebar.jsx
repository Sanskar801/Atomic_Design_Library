import styles from './Sidebar.module.css';
import NavData from '../../../data/Navdata.json';
import NavList from '../../common/NavList';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <div>
          <nav>
            <NavList NavData={NavData} />
          </nav>
        </div>
    </aside>
  );
}

export default Sidebar;