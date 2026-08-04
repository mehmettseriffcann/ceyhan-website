import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerGrid} container`}>
        {/* Brand Section */}
        <div className={styles.footerBrand}>
          <div className={styles.logoArea}>
            <Image
              src="/logo.png"
              alt="Ceyhan Ağır Vasıta Servisi Logo"
              width={75}
              height={50}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            <div className={styles.brandText}>
              <span className={styles.brandName}>CEYHAN</span>
              <span className={styles.brandSub}>Ağır Vasıta Servisi</span>
            </div>
          </div>
          <p className={styles.brandDescription}>
            Kocaeli Körfez bölgesinde ağır vasıta (tır, kamyon, çekici) fren, elektrik, makas ve mekanik aksamlarında profesyonel tamir, bakım ve yedek parça desteği sağlamaktayız.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className={styles.footerTitle}>Hızlı Bağlantılar</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="#home" className={styles.footerLink}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="#about" className={styles.footerLink}>
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="#roadside" className={styles.footerLink}>
                7/24 Yol Yardım
              </Link>
            </li>
            <li>
              <Link href="#contact" className={styles.footerLink}>
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Services List Section */}
        <div>
          <h3 className={styles.footerTitle}>Hizmetlerimiz</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Fren Sistemleri (ABS/EBS)
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Oto Elektrik & Bilgisayarlı Arıza Tespit
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Makas & Süspansiyon Tamiri
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Şanzıman & Yürüyen Aksam
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Yağ & Periyodik Bakım
              </Link>
            </li>
            <li>
              <Link href="#services" className={styles.footerLink}>
                Yedek Parça Tedariği
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className={styles.footerTitle}>İletişim Bilgileri</h3>
          <div className={styles.contactList}>
            {/* Address */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className={styles.contactText}>
                <strong>Adres:</strong>
                <br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Yeniyalı+mah.+Hamit+Kaplan+cad.+No:33+Körfez/Kocaeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yeniyalı mah. Hamit Kaplan cad. No:33 Körfez/Kocaeli
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className={styles.contactText}>
                <strong>Telefon (7/24):</strong>
                <br />
                <a href="tel:+905345052602">+90 534 505 26 02</a>
              </div>
            </div>

            {/* Working Hours */}
            <div className={styles.contactItem}>
              <svg
                className={styles.contactIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className={styles.contactText}>
                <strong>Çalışma Saatleri:</strong>
                <br />
                Atölye: Her Gün 08:00 – 19:00
                <br />
                Yol Yardım: 7/24 Kesintisiz
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footerBottom} container`}>
        <div className={styles.copyright}>
          &copy; {currentYear} Ceyhan CYH Grup Ağır Vasıta Servisi. Tüm hakları saklıdır.
        </div>
        <div className={styles.bottomLinks}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Yeniyalı+mah.+Hamit+Kaplan+cad.+No:33+Körfez/Kocaeli"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomLink}
          >
            Yol Tarifi Al
          </a>
          <a
            href="https://wa.me/905345052602"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomLink}
          >
            WhatsApp Destek
          </a>
        </div>
      </div>
    </footer>
  );
}
