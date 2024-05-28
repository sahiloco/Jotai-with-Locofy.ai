import { FunctionComponent } from "react";
import styles from "./SearchSectionHeader.module.css";
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms';  // Adjust the import path if needed
import ThemeToggle from '../components/ThemeToggle';


export type SearchSectionHeaderType = {
  className?: string;
};

const SearchSectionHeader: FunctionComponent<SearchSectionHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.searchSectionHeader, className].join(" ")}>
      <div className={styles.staysNearbyParent}>
        <h3 className={styles.staysNearby}></h3>
        <b className={styles.torontoOntario}></b>
      </div>
      <div className={styles.layoutSelection}>
        <div className={styles.menuLayout}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.layoutOptions}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
