import React from 'react'
import headingImage from '../../images/heading2.svg'
import styles from './heading.module.css'
const Heading = () => {
    return (
        <>
            <img className={styles.headingImage} src={headingImage} alt="Heading Image" />
        </>
    )
}

export default Heading