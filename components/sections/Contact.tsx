"use client";

import { useState } from "react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../motion/Reveal";
import AccentText from "../ui/AccentText";
import { content } from "@/content";
import styles from "./Contact.module.css";

const t = content.contact;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  goal: string;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  goal: "",
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {hint && <span className={styles.hint}> {hint}</span>}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `New inquiry from ${form.firstName} ${form.lastName}`.trim();
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Service interested: ${form.service}`,
      form.goal && `Goal: ${form.goal}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${t.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className={styles.hero}>
        <Reveal className={`container ${styles.heroContent}`}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className={`h2 ${styles.title}`}>
            <AccentText segments={t.title} />
          </h1>
          <p className={styles.lede}>{t.lede}</p>
        </Reveal>
      </section>

      <section className={styles.formSection}>
        <Reveal className={`container ${styles.formWrap}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Field label={t.form.firstName}>
                <input
                  type="text"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
              </Field>
              <Field label={t.form.lastName}>
                <input
                  type="text"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field label={t.form.email}>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
              <Field label={t.form.company}>
                <input
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </Field>
            </div>

            <div className={styles.row}>
              <Field label={t.form.phone}>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>
              <Field label={t.form.serviceLabel}>
                <span className={styles.selectWrap}>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="" disabled>
                      {t.form.servicePlaceholder}
                    </option>
                    {t.form.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <svg
                    className={styles.chevron}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Field>
            </div>

            <Field label={t.form.goalLabel} hint={t.form.goalOptional}>
              <textarea
                rows={4}
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
              />
            </Field>

            <button type="submit" className={styles.submit}>
              <span>{t.form.submit}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 12h15m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {submitted && <p className={styles.success}>{t.form.success}</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}
