'use client'

import Link from "next/link";
import React from "react";
import styles from './NavBar.module.css'
import {usePathname} from 'next/navigation'
const links = [
  {
    
    label: "dashboard",
    href: "/dashboard",
  },
  {
    label: "sedes",
    href: "/sedes",
  },
];

const Aside = () => {


  const pathname = usePathname()

  return (
    <aside className={styles.aside_container}>
      {links.map((e) => {
        return (
          <ul key={e.label}>
            <li>
              <Link href={e.href} className={pathname == e.href ? "bg-slate-900 text-slate-50" : ""}>
                
                {e.label}
              </Link>
            </li>
          </ul>
        );
      })}
    </aside>
  );
};

export default Aside;
