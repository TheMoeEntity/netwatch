import { MovieCard } from '../MovieCard/MovieCard'
import styles from './Recommended.module.css'

export const Recommended = () => {
  return (
    <div className={styles.recom}>
        <h2>Recommended</h2>
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie1.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie3.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie2.jpg'} name={"GodFather"} />
        <MovieCard rating={7.4} count={'2,345'} src={'./images/movie4.jpg'} name={"GodFather"} />
        <br />
        <br />
    </div>
  )
}
