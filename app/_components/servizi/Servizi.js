import Image from "next/image"
import styles from './Servizi.module.css'

const Servizi = () => {
  return (
    <div className="my-32">
    <p className="text-center text-4xl mb-2">Servizi</p>
    <div className="flex flex-col gap-10 justify-around items-center  my-10 mx-3">
      <div className={`rounded-lg shadow-md flex flex-col justify-center items-center p-5 border-2 ${styles.bg}`} style={{ width: '50vw', height: '50vw' }}>
        <Image alt="tiktok icon" src="/icons/tiktok2.png" height="100" width="100" />
        <p>TikTok ADS</p>
      </div>
      <div className={`${styles.bg} rounded-lg shadow-md flex flex-col justify-center items-center p-5 border-2 border-gray-300`} style={{ width: '50vw', height: '50vw' }}><Image alt="meta icon" src="/icons/meta.png" height="100" width="100" /><p>Meta ADS</p></div>

    </div>
  </div>
  )
}

export default Servizi