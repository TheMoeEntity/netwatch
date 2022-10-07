import styles from './Sidebar.module.css'
import Image from 'next/image'
import profile from '../../public/images/man.png'
import { useEffect, useRef, useState } from "react"
import { animateIn } from '../../Helpers/helpers'

export const Sidebar = () => {

    const sidebar = useRef(null)

    useEffect(()=> {
        animateIn(sidebar,styles.animateIn,300)
    },[])


  return (
    <div ref={sidebar} className={styles.sidebar}>
        <div className={styles.profile}>
            <div className={styles.overlay}></div>
            <div className={styles.details}>Moses-12345
             <br />
             <span>
                jamesmoe@gmail.com
             </span>
            </div>
            <img src="./images/man.png" alt="" width={`100%`} height={`100%`} />
        </div>

        <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, quibusdam.
        </div>

        <div className={styles.nav}>
            <h3>Dashboard</h3>
            <ul>
                <li>Ratings</li>
                <li>Lists</li>
                <li>Watchlist</li>
                <li>Checkins</li>
                <li>Reviews</li>
                <li>Poll Responses</li>
                <li>Profile Settings</li>
            </ul>
        </div>
        <div className={styles.nav}>
            <h3>Library</h3>
            <ul>
                <li>Downloaded</li>
                <li>Bookmarks</li>
            </ul>
        </div>
    </div>
  )
}
