import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem1.module.css";

export type ListingItem1Type = {
  className?: string;
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onListingItemContainerClick?: () => void;
};

const ListingItem1: FunctionComponent<ListingItem1Type> = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  propDisplay,
  propMinWidth,
  onListingItemContainerClick,
}) => {
  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemContainerClick}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <b className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </b>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <b className={styles.rating}>{rating}</b>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <b className={styles.price}>{price}</b>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img
              className={styles.trendIcon}
              loading="lazy"
              alt=""
              src="/trend-icon@2x.png"
            />
            <a className={styles.priceChart}>Price chart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem1;
