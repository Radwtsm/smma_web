import styles from './Recensioni.module.css'
import { Rating } from '@mui/material'
import ReviewCard from './ReviewCard'

const Recensioni = () => {

  const recensioni = [
    {
      src: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      author: 'Luche.ART',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?',
      rating: 5
    },
    {
      src: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      author: 'Luche.AR3T',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?',
      rating: 5
    },
    {
      src: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
      author: 'Luche.ART2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus incidunt fuga molestias, minus a quisquam ex dolorem corrupti impedit, accusamus animi error magni ducimus omnis voluptates! Dolorum, quae iure?',
      rating: 5
    },
  ]

  return (
    <>
      <p className="text-center text-4xl m-0 mb-10">Recensioni</p>
      <div className='flex flex-col gap-7'>
      {recensioni.map(({ src, author, text, rating }) => <ReviewCard
        key={author}
        src={src}
        rating={rating}
        text={text}
        author={author}
      />)}
      </div>
    </>
  )
}

export default Recensioni