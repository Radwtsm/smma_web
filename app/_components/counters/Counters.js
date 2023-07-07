import styles from "./Counter.module.css"
import CountUp from 'react-countup';


const Counters = () => {
  return (
    <div className="">
        <div className="flex flex-col gap-5 text-xl w-100 my-20">
          <div className={`${styles.bg} border-2 border-gray-300 flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4`}>
            <p className="text-4xl"><CountUp duration={5} start={0} end={150.84} suffix="k" decimals={2} /></p>
            <p className="font-light">Spesi in ads nel 2023</p>
          </div>
          <div className={`${styles.bg} border-2 border-gray-300 flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4`}>
            <p className="text-4xl"><CountUp duration={5} start={0} end={100} suffix="+" /></p>
            <p className="font-light">Partner e clienti</p>
          </div>
          <div className={`${styles.bg} border-2 border-gray-300 flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4`}>
            <p className="text-4xl"><CountUp duration={5} start={0} end={15} /></p>
            <p className="font-light">Team di professionisti</p>
          </div>
        </div>
      </div>
  )
}

export default Counters