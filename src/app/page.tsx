import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="home">
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <span className={styles.badge}>KOCAELİ KÖRFEZ BÖLGESİ</span>
            <h1 className={styles.heroTitle}>
              Ağır Vasıta Çözüm Ortağınız
            </h1>
            <p className={styles.heroSub}>
              Tır, kamyon, çekici ve treylerleriniz için profesyonel fren (ABS/EBS), oto elektrik, makas ve mekanik bakım hizmetleri sunuyoruz. 7/24 mobil yol yardım ekibimizle her zaman yanınızdayız.
            </p>
            <div className={styles.heroCtas}>
              <a href="tel:+905345052602" className={`${styles.btnPrimary} pulse-emergency`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                7/24 Acil Yol Yardım
              </a>
              <a
                href="https://wa.me/905345052602?text=Merhaba%2C%20servis%20veya%20yol%20yard%C4%B1m%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginRight: "4px" }}
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm12.004-2.182c1.78-.001 3.518.478 5.038 1.385l.361.214 3.743-.982-.999-3.647.235-.374c.974-1.55 1.487-3.348 1.488-5.196.002-5.452-4.372-9.889-9.753-9.889-2.607.001-5.058 1.02-6.899 2.868-1.84 1.848-2.853 4.305-2.854 6.914-.002 5.454 4.373 9.892 9.756 9.892zm5.353-7.302c-.292-.146-1.729-.854-1.997-.951-.268-.098-.463-.146-.658.146-.195.293-.755.951-.926 1.146-.171.195-.341.219-.633.073-1.118-.559-1.879-1.002-2.614-2.278-.194-.336.194-.312.556-1.037.06-.12.03-.223-.015-.317-.045-.094-.463-1.117-.634-1.529-.166-.4-.361-.344-.497-.35-.128-.007-.275-.007-.423-.007s-.387.056-.59.277c-.201.223-.77.753-.77 1.838 0 1.083.785 2.13.896 2.278.11.147 1.517 2.378 3.676 3.303 1.077.463 1.69.593 2.296.503.62-.092 1.729-.707 1.972-1.391.244-.683.244-1.268.171-1.39-.073-.122-.268-.195-.56-.342z"/>
                </svg>
                WhatsApp Destek
              </a>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageBg}>
              <svg
                width="140"
                height="140"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.85 }}
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-5.14a1 1 0 0 0-.29-.71l-3.32-3.32A1 1 0 0 0 17.68 7.5H14" />
                <circle cx="7.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Info Bar */}
      <section className="container">
        <div className={styles.quickInfoBar}>
          <div className={styles.infoGrid}>
            <a href="tel:+905345052602" className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className={styles.infoText}>
                <h4>7/24 Yol Yardım</h4>
                <p>+90 534 505 26 02</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Yeniyalı+mah.+Hamit+Kaplan+cad.+No:33+Körfez/Kocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <div className={styles.infoIcon}>
                <svg
                  width="22"
                  height="22"
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
              </div>
              <div className={styles.infoText}>
                <h4>Konumumuz</h4>
                <p>Yeniyalı mah. Hamit Kaplan cad. No:33 Körfez/Kocaeli</p>
              </div>
            </a>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  width="22"
                  height="22"
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
              </div>
              <div className={styles.infoText}>
                <h4>Çalışma Saatleri</h4>
                <p>Atölye: 08:00 – 19:00 (Yol Yardım: 7/24)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Us (Hakkımızda) Section */}
      <section id="about" className={`${styles.about} section-padding`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className="section-title">Hakkımızda</h2>
              <p>
                <strong>Ceyhan Ağır Vasıta Servisi</strong> olarak, Kocaeli Körfez sanayi bölgesinde tır, kamyon, çekici ve treylerleriniz için güvenilir teknik destek sunuyoruz. Sektördeki uzun yıllara dayanan deneyimimiz, modern ekipmanlarımız ve uzman ustalarımızla ağır vasıta sahiplerinin ve lojistik firmalarının ilk tercihlerinden biriyiz.
              </p>
              <p>
                Aracınızın yolda güvenle kalması için fren sistemlerinden (ABS/EBS) oto elektriğine, makas değişimlerinden mekanik yürüyen aksam onarımlarına kadar geniş bir yelpazede hizmet sunmaktayız. <em>Müşterilerimizin talepleri doğrultusunda, motor revizyon (motor rektifiye) işlemleri yapmamakta; bunun dışındaki tüm şanzıman, diferansiyel, yürüyen aksam ve fren tamirlerine odaklanmaktayız.</em>
              </p>
              <p>
                Arıza tespit aşamasında yeni nesil bilgisayarlı arıza tespit (diagnoz) cihazlarını kullanarak arızaları nokta atışı tespit ediyor, gereksiz parça değişimlerinin ve zaman kayıplarının önüne geçiyoruz.
              </p>
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureCheck}>✓</div>
                  <span className={styles.featureText}>Uzman ve Deneyimli Ustalar</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureCheck}>✓</div>
                  <span className={styles.featureText}>Bilgisayarlı Arıza Tespiti (Diagnoz)</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureCheck}>✓</div>
                  <span className={styles.featureText}>7/24 Hızlı Mobil Yol Yardım</span>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureCheck}>✓</div>
                  <span className={styles.featureText}>Kaliteli Yedek Parça Güvencesi</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutBadgeWrapper}>
              <div className={styles.aboutBadge}>
                <div className={styles.badgeYear}>CYH</div>
                <div className={styles.badgeLabel}>Grup Güvencesi</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "16px", lineHeight: "1.4" }}>
                  Körfez'de Ağır Vasıta Fren, Elektrik, Makas ve Yürüyen Aksam Uzmanı
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services (Servisler) Section */}
      <section id="services" className={`${styles.services} section-padding`}>
        <div className="container text-center">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className={styles.sectionSubtitle}>
            Ağır vasıta araçlarınızın güvenliği ve performansı için sunduğumuz profesyonel çözümlerimiz aşağıdadır. (Servisimizde motor revizyonu yapılmamaktadır).
          </p>

          <div className={styles.servicesGrid}>
            {/* Card 1: Fren ABS/EBS */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Fren Sistemleri (ABS/EBS)</h3>
              <p>
                Ağır vasıta araçların ve dorselerin en kritik unsuru olan fren sistemlerinde profesyonel bakım ve onarım. ABS, EBS sistemleri kurulumu, arıza kodları temizleme, disk ve balata değişimleri.
              </p>
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Disk & Balata Değişimi
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> ABS / EBS Ventilleri & Sensörleri
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Fren Kaliper & Mekanizma Onarımı
                </div>
              </div>
            </div>

            {/* Card 2: Elektrik & Diagnoz */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Oto Elektrik & Arıza Tespit</h3>
              <p>
                Bilgisayarlı diagnoz sistemlerimizle Mercedes-Benz, Scania, Volvo, MAN, DAF ve Iveco araçların beyin kontrolleri, arıza teşhisleri ve tesisat tamiri. Akü, marş, şarj dinamoları bakımı.
              </p>
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Orijinal Diagnoz Cihazları
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Komple Elektrik Tesisatı Revizyonu
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Akü ve Şarj Dinamosu Testi
                </div>
              </div>
            </div>

            {/* Card 3: Makas & Süspansiyon */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              </div>
              <h3>Makas & Süspansiyon Tamiri</h3>
              <p>
                Ağır vasıtaların taşıma kapasitesini ve sürüş konforunu etkileyen makas demirleri, hava körükleri, amortisörler ve burç takımlarının kontrolleri, tamiri ve yedek parça değişimleri.
              </p>
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Kat Makas İlavesi & Değişimi
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Dingil & Süspansiyon Körükleri
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Amortisör & Rotil Değişimleri
                </div>
              </div>
            </div>

            {/* Card 5: Periyodik Bakım */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>Periyodik Bakım & Yağ Değişimi</h3>
              <p>
                Ağır vasıtaların motor ömrünü uzatmak ve yakıt tasarrufu sağlamak için filtre değişimleri (hava, yağ, yakıt, kurutucu), motor yağı değişimleri, antifriz ve diğer sıvıların seviye kontrolleri.
              </p>
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Yağ, Hava, Polen, Yakıt Filtresi Değişimi
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Motor Yağı & Antifriz Yenileme
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> APU Kurutucu Filtre Değişimi
                </div>
              </div>
            </div>

            {/* Card 6: Yedek Parça */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Yedek Parça Tedariği</h3>
              <p>
                Geniş yedek parça stoğumuzla fren ventilleri, balatalar, makaslar, elektrik parçaları ve filtre gruplarında orijinal ve kaliteli yan sanayi ürünleri hızlı ve uygun fiyatlarla temin ediyoruz.
              </p>
              <div className={styles.serviceList}>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Orijinal Fren & ABS Ventilleri
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Knorr-Bremse, Wabco Parça Güvencesi
                </div>
                <div className={styles.serviceListItem}>
                  <span className={styles.bullet}></span> Zengin Filtre & Elektrik Malzemeleri
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 7/24 Roadside Assistance Section */}
      <section id="roadside" className={styles.roadside}>
        <div className={`${styles.roadsideContainer} container`}>
          <div className={styles.roadsideText}>
            <h2 className={styles.roadsideTitle}>7/24 Mobil Acil Yol Yardım</h2>
            <p className={styles.roadsideDesc}>
              Kocaeli Körfez bölgesi başta olmak üzere TEM Otoyolu, Kuzey Marmara Otoyolu ve D-100 karayolunda tır, kamyon, çekici ve dorselerinizde oluşan acil fren kilitlenmeleri, hava kaçakları, makas kırılması ve elektrik arızalarına karşı mobil servis aracımızla 7/24 yerinde müdahale ediyoruz.
            </p>
          </div>
          <div className={styles.roadsideCall}>
            <a href="tel:+905345052602" className={`${styles.callBtnBig} pulse-emergency`}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* 6. Contact & Map (İletişim) Section */}
      <section id="contact" className={`${styles.contact} section-padding`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <ContactForm />

            {/* Map & Address Info */}
            <div className={styles.mapCard}>
              <h3>Ulaşım ve Konum Bilgileri</h3>
              <div className={styles.mapAddressBar}>
                <p>
                  <strong>Adres:</strong> Yeniyalı mah. Hamit Kaplan cad. No:33 Körfez/Kocaeli
                </p>
                <p style={{ marginTop: "8px" }}>
                  <strong>Yol Tarifi:</strong> Körfez Sanayi Sitesi civarı, Hamit Kaplan caddesi üzerinde No:33 adresindeyiz. Adrese tıklayarak veya aşağıdaki butona basarak doğrudan Google Haritalar üzerinden yol tarifi alabilirsiniz.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Yeniyalı+mah.+Hamit+Kaplan+cad.+No:33+Körfez/Kocaeli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapDirectionsLink}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Google Haritalar'da Aç (Navigasyon)
                </a>
              </div>

              {/* Embedded Google Map Iframe */}
              <iframe
                title="Ceyhan Ağır Vasıta Servisi Konumu"
                className={styles.mapFrame}
                src="https://maps.google.com/maps?q=Yeniyal%C4%B1%20Mahallesi%2C%20Hamit%20Kaplan%20Caddesi%20No%3A33%2C%20K%C3%B6rfez%2FKocaeli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
