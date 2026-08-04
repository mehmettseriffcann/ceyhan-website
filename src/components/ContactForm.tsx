"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate sending form data (e.g., to an API route or third-party service)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", vehicle: "", message: "" });
    }, 1200);
  };

  return (
    <div className={styles.contactCard}>
      <div>
        <h3>Bize Ulaşın</h3>
        {status === "success" ? (
          <div
            style={{
              background: "#d1e7dd",
              color: "#0f5132",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #badbcc",
              marginBottom: "24px",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            <strong>Mesajınız Başarıyla Gönderildi!</strong>
            <br />
            En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
          </div>
        ) : null}

        {status !== "success" ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Örn: Mehmet Yılmaz"
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Telefon Numarası *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Örn: 0532 Xxx Xx Xx"
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="vehicle">Plaka / Araç Modeli (İsteğe Bağlı)</label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Örn: 41 ABC 123 / Scania R450"
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mesajınız *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Talebinizi veya sorunuzu yazınız..."
                style={{ resize: "vertical" }}
                disabled={status === "loading"}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
              {status === "loading" ? (
                <>Gönderiliyor...</>
              ) : (
                <>
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
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Mesaj Gönder
                </>
              )}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setStatus("idle")}
            className={styles.submitBtn}
            style={{ background: "var(--secondary)" }}
          >
            Yeni Mesaj Gönder
          </button>
        )}
      </div>
    </div>
  );
}
