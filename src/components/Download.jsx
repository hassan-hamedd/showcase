import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Get Started Now</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Download & get started today on your NFT journey</p>
        </div>
        <Button 
            assetUrl={assets.expo}
            link="https://expo.dev/@hassanhamed/pronef?serviceType=classic&distribution=expo-go"
        />
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download