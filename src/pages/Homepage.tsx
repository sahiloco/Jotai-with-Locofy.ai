import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem1 from "../components/ListingItem1";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms';  // Adjust the import path if needed
import ThemeToggle from '../components/ThemeToggle';


const Homepage: FunctionComponent = () => {
  const [theme] = useAtom(themeAtom); // Extract theme from the atom
  const onListingItemContainerClick = useCallback(() => {
    // Please sync "Property Details" to the project
  }, []);

  return (
    
    <div className={`${styles.homepage} app ${theme}`}>
     
      <Header />
      <HeroContainer />
      <main className={styles.staysSection}>
      <ThemeToggle />
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem1
            listingImage="/listing-image@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            price="$658"
            onListingItemContainerClick={onListingItemContainerClick}
          />
          <ListingItem
            image="/image@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            price="$410"
            trendIcon="/trend-icon-1.svg"
          />
          <ListingItem
            image="/image-1@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            price="$325"
            trendIcon="/trend-icon-1.svg"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-2@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            price="$485"
            propDisplay="inline-block"
            propMinWidth="129px"
          />
          <ListingItem1
            listingImage="/image-3@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            price="$502"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem
            image="/image-4@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            price="$655"
            trendIcon="/trend-icon-1.svg"
            propDisplay="inline-block"
            propMinWidth="118px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-5@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            price="$320"
            propDisplay="inline-block"
            propMinWidth="102px"
          />
          <ListingItem
            image="/image-6@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            price="$350"
            trendIcon="/trend-icon@2x.png"
            propDisplay="inline-block"
            propMinWidth="112px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem
            image="/image-7@2x.png"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            price="$395"
            trendIcon="/trend-icon@2x.png"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-8@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            price="$385"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem1
            listingImage="/image-9@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            price="$385"
            propDisplay="inline-block"
            propMinWidth="79px"
          />
          <ListingItem
            image="/image-10@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem
            image="/image-11@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            propDisplay="inline-block"
            propMinWidth="121px"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <ListingItem1
            listingImage="/image-12@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            price="$385"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <ListingItem
            image="/image-13@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon-1.svg"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
          />
          <ListingItem
            image="/image-14@2x.png"
            heartIcon="/heart-icon-1.svg"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="127px"
          />
        </section>
        <button className={styles.showMoreButton}>
          <b className={styles.showMoreText}>Show more</b>
        </button>
      </main>
      <Footer />
      <div className={styles.band}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
