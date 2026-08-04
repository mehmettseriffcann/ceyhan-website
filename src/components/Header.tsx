"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        {/* Brand Logo & Name */}
        <Link href="#home" className={styles.logoLink} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Ceyhan Ağır Vasıta Servisi Logo"
            width={75}
            height={50}
            className={styles.logoImage}
            priority
          />
          <div className={styles.brandInfo}>
            <span className={styles.brandName}>CEYHAN</span>
            <span className={styles.brandSub}>Ağır Vasıta Servisi</span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
          <Link href="#home" className={styles.navLink} onClick={closeMenu}>
            Anasayfa
          </Link>
          <Link href="#about" className={styles.navLink} onClick={closeMenu}>
            Hakkımızda
          </Link>
          <Link href="#services" className={styles.navLink} onClick={closeMenu}>
            Hizmetlerimiz
          </Link>
          <Link href="#roadside" className={styles.navLink} onClick={closeMenu}>
            7/24 Yol Yardım
          </Link>
          <Link href="#contact" className={styles.navLink} onClick={closeMenu}>
            İletişim
          </Link>
          <a
            href="tel:+905345052602"
            className={`${styles.headerCta} pulse-emergency`}
            onClick={closeMenu}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Yol Yardım
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menüyü aç/kapa"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
}
