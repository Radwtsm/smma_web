import styles from './Recensioni.module.css'

import { Rating } from '@mui/material'

const ReviewCard = ({src,rating,text,author}) => {
  return (
    <div className={`${styles.card} mx-4`}>
        <div className={styles.card_img}>
          <img src={src} alt="user-image" />
        </div>
        <div className={styles.card_info}>
          <h2 className={styles.review_title}>{author}</h2>
          <div className="flex flex-col justify-center items-center">
            <p className={`${styles.review_p} text-gray-500`}>{text}</p>
            <Rating name="size-large" defaultValue={rating} size="large" />
          </div>
        </div>
      </div>
  )
}

export default ReviewCard