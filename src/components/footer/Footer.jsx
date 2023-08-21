import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <Link href="/">
            <img
                className={styles.logo}
                src="/logo.png"
                alt="logo"
            />
        </Link>
        <div>
            <p>
            <span>Phone : </span>
            +88-02 55035911
            </p>
            <p>
            <span>Email : </span>
            hello@apisolutionsltd.com
            </p>
            <p>
            <span>Address : </span>
            House -4 Road 23/A Block B Banani Dhaka 1213 Bangladesh
            </p>
            <p>
            © 2023 API. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer