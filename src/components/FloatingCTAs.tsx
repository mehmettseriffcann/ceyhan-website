import styles from "./FloatingCTAs.module.css";

export default function FloatingCTAs() {
  return (
    <div className={styles.floatingContainer}>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905345052602?text=Merhaba%2C%20yol%20yard%C4%B1m%20%2F%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.ctaButton} ${styles.whatsapp} bounce-whatsapp`}
        aria-label="WhatsApp ile İletişime Geçin"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.464L0 24zm12.004-2.182c1.78-.001 3.518.478 5.038 1.385l.361.214 3.743-.982-.999-3.647.235-.374c.974-1.55 1.487-3.348 1.488-5.196.002-5.452-4.372-9.889-9.753-9.889-2.607.001-5.058 1.02-6.899 2.868-1.84 1.848-2.853 4.305-2.854 6.914-.002 5.454 4.373 9.892 9.756 9.892zm5.353-7.302c-.292-.146-1.729-.854-1.997-.951-.268-.098-.463-.146-.658.146-.195.293-.755.951-.926 1.146-.171.195-.341.219-.633.073-1.118-.559-1.879-1.002-2.614-2.278-.194-.336.194-.312.556-1.037.06-.12.03-.223-.015-.317-.045-.094-.463-1.117-.634-1.529-.166-.4-.361-.344-.497-.35-.128-.007-.275-.007-.423-.007s-.387.056-.59.277c-.201.223-.77.753-.77 1.838 0 1.083.785 2.13.896 2.278.11.147 1.517 2.378 3.676 3.303 1.077.463 1.69.593 2.296.503.62-.092 1.729-.707 1.972-1.391.244-.683.244-1.268.171-1.39-.073-.122-.268-.195-.56-.342z"/>
        </svg>
        <span className={styles.tooltip}>WhatsApp Destek</span>
      </a>

      {/* Direct Call Button (7/24 Yol Yardım) */}
      <a
        href="tel:+905345052602"
        className={`${styles.ctaButton} ${styles.call} pulse-emergency`}
        aria-label="7/24 Yol Yardım Hattını Ara"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className={styles.tooltip}>7/24 Yol Yardım</span>
      </a>
    </div>
  );
}
