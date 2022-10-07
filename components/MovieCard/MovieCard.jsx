import styles from './MovieCard.module.css'
import Image from 'next/image'

export const MovieCard = ({name,rating,count,src}) => {
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <img src={src} width={`100%`} height={`100%`} />
        </div>
        <span className={styles.name}>{name}</span> <br /><br />
        <span className={styles.rating}>{rating}({count})</span>
    </div>
  )
}
