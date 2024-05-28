import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  image?: string;
  heartIcon?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  trendIcon?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  image,
  heartIcon,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  trendIcon,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const listingTitle1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={[styles.listingItem, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img className={styles.heartIcon} alt="" src={heartIcon} />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <b className={styles.listingTitle} style={listingTitle1Style}>
              {listingTitle}
            </b>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <b className={styles.rating}>{rating}</b>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <b className={styles.price}>{price}</b>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img className={styles.trendIcon} alt="" src={trendIcon} />
            <div className={styles.priceChart}>Price chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
