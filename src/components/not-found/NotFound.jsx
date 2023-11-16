import React from 'react'
import styles from './not-found.module.css'
import Heading from '../heading/Heading'

const NotFound = () => {
    return (
        <>
            <Heading />
            <p className={styles.notFound}>404</p>
        </>
    )
}

export default NotFound