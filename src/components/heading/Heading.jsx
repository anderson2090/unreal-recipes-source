import React from 'react'
import headingImage from '../../images/heading2.svg'
import styles from './heading.module.css'
import { Link } from 'react-router-dom'
const Heading = () => {
    return (
        <>
            <Link to={'/'}>
                <img className={styles.headingImage} src={headingImage} alt="Heading Image" />
            </Link>
        </>
    )
}

export default Heading