import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerLinksWrapper}>
        <div className={styles.footerLinks}>
          <div className={styles.helpLinks}>
            <b className={styles.support}>Support</b>
            <div className={styles.helpCentre}>Help Centre</div>
            <a className={styles.aircover}>AirCover</a>
            <div className={styles.combatingDiscrimination}>
              Combating discrimination
            </div>
            <a className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </a>
            <div className={styles.cencellationOptions}>
              Cencellation options
            </div>
            <div className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.linkColumns}>
            <b className={styles.hosting}>Hosting</b>
            <div className={styles.localHome}>Local home</div>
            <div className={styles.coverForHosts}>Cover for hosts</div>
            <div className={styles.hostingResources}>Hosting resources</div>
            <div className={styles.communityForum}>Community forum</div>
            <div className={styles.hostingResponsibly}>Hosting responsibly</div>
          </div>
          <div className={styles.linkColumns1}>
            <b className={styles.localhost}>Localhost</b>
            <a className={styles.newsroom}>Newsroom</a>
            <div className={styles.newFeatures}>New Features</div>
            <a className={styles.careers}>Careers</a>
            <a className={styles.investres}>Investres</a>
            <a className={styles.giftCards}>Gift cards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
