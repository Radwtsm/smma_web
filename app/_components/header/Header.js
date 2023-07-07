'use client'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={`${styles.glass} text-4xl text-white`}>
    <div className="h-screen flex flex-col justify-around items-around">
      <h1 className="text-center font-medium ">SMMA International</h1>
      <span className="text-6xl mx-3 text-center "><p>HAI DIFFICOLTÀ A SCALARE</p><p className="text-gray-500">LA TUA ATTIVITÀ LOCALE?</p> </span>
    </div>
  </header>
    )
}

export default Header