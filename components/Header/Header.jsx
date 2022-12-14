import styles from './Header.module.css'
import { animateIn } from '../../Helpers/helpers'
import { useRef, useEffect } from 'react'
export const Header = () => {

    const header = useRef(null)
    useEffect(()=> {
        animateIn(header,styles.animateIn,500)
    },[])
  return (
    <div ref={header} className={styles.header}>

        <div>
            <div className={styles.hamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.logo}>
                    NetWatch
            </div>  
            <div>
                NetWatchPRO
            </div>         
        </div>

        <div>
            <div className={styles.searchbar}>
                <span>Everywhere</span>
                <input placeholder='Search for a movie, tv show or actor' type="search" name="" id="" />
            </div>
        </div>
        <div>
            <div>
            <span>my watchlist</span>
            <span> 23 </span>
            <span><img src="" alt="" /></span>
            </div>

        </div>

    </div>
  )
}
