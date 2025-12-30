
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="/images/brand_logo.png" alt="brand_logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navigation;
