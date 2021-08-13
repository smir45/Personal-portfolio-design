import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TabPanel from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
     <TabPanel/>
    </div>
  )
}
