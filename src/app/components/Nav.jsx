import React from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'


const Nav = () => {
  return (
    <div className={styles.navbar}>
       <Image src='/fondo.jpg'  width={20} height={20}/>
    </div>
  )
}

export default Nav