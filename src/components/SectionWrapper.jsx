import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Buttonx from './Buttonx'

const SectionWrapper = ({title, description, mockupImg, banner, showBtn}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
        <div className={`flex items-center  w-11/12 sm:w-full minmd:w-3/4 ${styles.boxClass}`}>
            <div className={`${styles.descDiv} `}>
            <h1 className={`${styles.h1Text}`}>{title}</h1>
            <p className={`${styles.descriptionText}`}>{description}</p>
            {showBtn &&(
               <Buttonx
                assetsUrl = {assets.expo}
                link = " "
            />)}
            </div>
            <div className={` flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
        <img src={mockupImg} alt="mockup" className={styles.sectionImg}/ > 
       </div>
        </div>
    </div>
  )
}

export default SectionWrapper