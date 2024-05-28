import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <a className={styles.home}>Home</a>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.notificationsIcon}
            loading="lazy"
            alt=""
            src="/notifications@2x.png"
          />
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
