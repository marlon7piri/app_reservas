"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import "./NavBar.module.css";
import { usePathname } from "next/navigation";
import { GiBlackBook } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Aside = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const openMenu = () => {
    setShow(!show);
    const menu_nav = document.querySelector(".menu_nav");
    menu_nav.classList.toggle("active");
  };

  return (
    <aside className={styles.aside_container}>
      {!show ? (
        <span className="menu_hamburguesa" onClick={() => openMenu()}>
          <GiHamburgerMenu />
        </span>
      ) : (
        <span   className="menu_hamburguesa" onClick={() => openMenu()}><IoClose /></span>
      )}

      <div className="menu_nav">
        <Link
          href="/dashboard"
          onClick={openMenu}
          className="flex gap-2 justify-center items-center text-2xl"
        >
          <span>
            <MdOutlineSpaceDashboard />
          </span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="/sedes"
          onClick={openMenu}
          className="flex gap-2 justify-center items-center text-2xl"
        >
          <span>
            <GiBlackBook />
          </span>
          <span>Sedes</span>
        </Link>
      </div>
      {/*  {links.map((e) => {
        return (
          <ul key={e.label} className="menu_nav">
            <li>
              <Link href={e.href} className="w-full" onClick={openMenu}>
                <div
                  className={
                    pathname === e.href
                      ? "w-full flex justify-center items-center gap-2 bg-slate-900 text-slate-50"
                      : "w-full flex justify-center items-center gap-2  text-slate-900 "
                  }
                >
                  {<span>{e.icons}</span>}
                  {<span>{e.label}</span>}
                </div>
              </Link>
            </li>
          </ul>
        );
      })} */}
    </aside>
  );
};

export default Aside;
