import styles from './TopRated.module.css'
const genres = [
    {
        name:"Mystery",
        width: "70%",
        rating: 5.6
    },
    {
        name:"Crime",
        width: "70%",
        rating: 5.6
    },
    {
        name:"Romance",
        width: "81%",
        rating: 8.1
    },
    {
        name:"Thriller",
        width: "70%",
        rating: 7
    },
    {
        name:"Musical",
        width: "55%",
        rating: 5.5
    },
    {
        name:"Drama",
        width: "90%",
        rating: 9
    },
    {
        name:"Comedy",
        width: "100%",
        rating: 10
    },
    {
        name:"Adventure",
        width: "20%",
        rating: 2.6
    }
]


export const TopRated = () => {

  return (
    <section className={styles.section}>
        <h2>Top-Rated Genres</h2>
        <div className={styles.container}>
            <div>
                
            {
                genres.map((item,key)=> (
                    <div key={key}>
                    <span>{item.name}</span>
                    <span><div style={{width:item.width}}></div></span>
                    <span>{item.rating}</span>
                </div>
                ))
            } 

            </div>

            <div>

            {
                genres.map((item,key)=> (
                    <div key={key}>
                    <span>{item.name}</span>
                    <span><div style={{width:item.width}}></div></span>
                    <span>{item.rating}</span>
                </div>
                ))
            } 

            </div>
        </div>
    </section>
  )
}
