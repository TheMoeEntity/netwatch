import { Recommended } from '../Recommended/Recommended'
import { TopRated } from '../Top_Rated/TopRated'
import { Watchlist } from '../Watchlist/Watchlist'
import styles from './Body.module.css'

export const Body = () => {
  return (
    <div className={styles.body}>
        <div className={styles.content}>
          
            <TopRated />
            <Watchlist title="New Movies" />
            <Watchlist title="My Watchlist" />
        </div>
        <div className={styles.recommended}>
          <Recommended />
        </div>
    </div>
  )
}
