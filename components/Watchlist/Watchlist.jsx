import styles from './Watchlist.module.css'
import { MovieCard } from '../MovieCard/MovieCard'

export const Watchlist = ({title}) => {
  return (
    <div className={styles.Watchlist}>
        <div className={styles.header}>
        <h2>{title}</h2>
        <button>View All</button>
        </div>
        <div className={styles.container}>
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie1.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie3.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie2.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie4.jpg'} name={"GodFather"} />
        </div>
    </div>
  )
}
