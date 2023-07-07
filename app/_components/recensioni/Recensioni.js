import styles from './Recensioni.module.css'
import { Rating } from '@mui/material'

const Recensioni = () => {
  return (
    <>
    <p className="text-center text-4xl m-0">Recensioni</p>
      <div className={`${styles.card} mx-4`}>
        <div className={styles.card_img}>
          <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image" />
        </div>
        <div className={styles.card_info}>
          <h2 className={styles.review_title}>Luche.Art</h2>
          <div className="flex flex-col justify-center items-center">
            <a className={`${styles.review_p} text-gray-500`} href="#!">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?</a>
            <Rating name="size-large" defaultValue={5} size="large" />
          </div>
        </div>
      </div>

      <div className={`${styles.card} mx-4`}>
        <div className={styles.card_img}>
          <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image" />
        </div>
        <div className={styles.card_info}>
          <h2 className={styles.review_title}>Luche.Art</h2>
          <div className="flex flex-col justify-center items-center">
            <a className={`${styles.review_p} text-gray-500`} href="#!">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?</a>
            <Rating name="size-large" defaultValue={5} size="large" />
          </div>
        </div>
      </div>

      <div className={`${styles.card} mx-4`}>
        <div className={styles.card_img}>
          <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image" />
        </div>
        <div className={styles.card_info}>
          <h2 className={styles.review_title}>Luche.Art</h2>
          <div className="flex flex-col justify-center items-center">
            <a className={`${styles.review_p} text-gray-500`} href="#!">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?</a>
            <Rating name="size-large" defaultValue={5} size="large" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Recensioni