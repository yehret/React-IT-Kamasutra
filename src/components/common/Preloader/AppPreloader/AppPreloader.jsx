import React from 'react';
import styles from './AppPreloader.module.css'
import preloader from '../../../../assets/images/preloader.svg'

let AppPreloader = () => {
    return (
        <div className={styles.preloaderWrapper}>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}

export default AppPreloader