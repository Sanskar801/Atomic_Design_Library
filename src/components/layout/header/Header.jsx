import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>

      <h1>Atomic Design Library</h1>

      <div className={styles.headerActions}>

        <div>

          <input type="search" name="search" id="search" />
          <button>Search</button>

        </div>

        <button>CodeBase</button>

      </div>

    </header>
  )
}

export default Header