"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../ui/Button";
import { content } from "@/content";
import styles from "./Header.module.css";

const NAV = content.nav;
const MotionLink = motion.create(Link);

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen((open) => {
      if (open) setMobileServicesOpen(false);
      return !open;
    });
  }

  // Close the Services dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    function onPointerDown(e: PointerEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className={styles.header}>
      <motion.nav
        className={`${styles.pill} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <Link href="/" className={styles.brand}>
          <Image
            src="/images/brand/logo.png"
            alt="Basicware logo"
            width={28}
            height={21}
          />
          <span>{content.nav.brand}</span>
        </Link>

        <div className={styles.links}>
          <Link href={NAV.home.href} className={styles.link}>
            {NAV.home.label}
          </Link>

          <div className={styles.dropdown} ref={servicesRef}>
            <button
              type="button"
              className={styles.link}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              {NAV.servicesLabel}
              <ChevronIcon className={servicesOpen ? styles.chevronOpen : ""} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  id="services-menu"
                  role="menu"
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {NAV.services.map((service) => (
                    <li key={service.href} role="none">
                      <Link
                        role="menuitem"
                        href={service.href}
                        className={styles.dropdownLink}
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href={NAV.about.href} className={styles.link}>
            {NAV.about.label}
          </Link>
        </div>

        <div className={styles.actions}>
          <span className={styles.lang}>{content.nav.lang}</span>
          <Button href="/contact" className={styles.cta}>
            {content.nav.cta}
          </Button>
          <button
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className={menuOpen ? styles.burgerOpen : ""} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.sheet}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <MotionLink
              href={NAV.home.href}
              className={styles.sheetLink}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {NAV.home.label}
            </MotionLink>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
            >
              <button
                type="button"
                className={styles.sheetLink}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                {NAV.servicesLabel}
                <ChevronIcon className={mobileServicesOpen ? styles.chevronOpen : ""} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    id="mobile-services-menu"
                    className={styles.sheetSubmenu}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {NAV.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={styles.sheetSubLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <MotionLink
              href={NAV.about.href}
              className={styles.sheetLink}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.26 }}
            >
              {NAV.about.label}
            </MotionLink>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <Button href="/contact" onClick={() => setMenuOpen(false)}>
                {content.nav.cta}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
