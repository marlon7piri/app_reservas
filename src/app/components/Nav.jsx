import React from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'


const Nav = () => {
  return (
    <div className={styles.navbar}>
       <Image src='/fondo.jpg'  width={20} height={20} alt="el logo de la pagina"/>
    </div>
  )
}

export default Nav