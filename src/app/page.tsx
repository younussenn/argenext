"use client";

import { motion } from "motion/react";
import { Globe, Smartphone, Monitor, Cpu, Compass } from "lucide-react";
import { PixelAvatar } from "@/components/PixelAvatar";
import { MagneticButton } from "@/components/MagneticButton";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/lib/translations";

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const serviceIcons = [Globe, Smartphone, Monitor, Cpu, Compass];

const team = [
  {
    nickname: "yns.dev",
    role: "Full Stack Developer",
    skills: "Backend · Frontend · Database",
    animal: "dolphin" as const,
  },
  {
    nickname: "cgd.dev",
    role: "Backend Developer",
    skills: "Backend · Database · System",
    animal: "bee" as const,
  },
  {
    nickname: "erd.dev",
    role: "Full Stack Developer",
    skills: "Backend · Frontend · Database",
    animal: "bear" as const,
  },
  {
    nickname: "ahs.dev",
    role: "Software Developer",
    skills: "Backend · Database · Robotics",
    animal: "eagle" as const,
  },
];

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LangToggle({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  return (
    <div className="font-mono text-xs flex items-center gap-1.5 text-zinc-500">
      <button
        onClick={() => setLang("tr")}
        className={lang === "tr" ? "text-white" : "hover:text-zinc-300 transition"}
      >
        {lang === "tr" ? "[tr]" : "tr"}
      </button>
      <span className="text-zinc-700">/</span>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-white" : "hover:text-zinc-300 transition"}
      >
        {lang === "en" ? "[en]" : "en"}
      </button>
    </div>
  );
}

const cardClass =
  "border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-8px_rgba(59,130,246,0.25)] transition-all duration-300 group";

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-6 sm:px-8 py-8 relative">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between mb-32 sm:mb-40"
      >
        <a href="/" className="font-mono text-base font-medium">
          argenext<span className="text-blue-500">.</span>
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden sm:flex gap-8 font-mono text-sm text-zinc-400">
            <li><a href="#hizmetler" className="hover:text-white transition">{t.nav.services}</a></li>
            <li><a href="#urunler" className="hover:text-white transition">{t.nav.products}</a></li>
            <li><a href="#ekip" className="hover:text-white transition">{t.nav.team}</a></li>
            <li><a href="#iletisim" className="hover:text-white transition">{t.nav.contact}</a></li>
          </ul>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-32 sm:mb-40"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center font-mono text-xs px-3 py-1.5 mb-8 border border-zinc-800 rounded-full text-zinc-400"
        >
          <span className="text-blue-500 mr-2">//</span>
          {t.hero.badge.replace("// ", "")}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6"
        >
          {t.hero.title}<br />
          <span className="font-mono text-blue-500">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3"
        >
          <MagneticButton
            href="#iletisim"
            className="font-mono text-sm px-5 py-3 bg-white text-black rounded-md hover:bg-zinc-200 transition text-center inline-block"
          >
            {t.hero.ctaPrimary}
          </MagneticButton>
          <a
            href="#urunler"
            className="font-mono text-sm px-5 py-3 border border-zinc-800 rounded-md hover:border-zinc-600 transition text-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.section>

      {/* Currently shipping */}
      <motion.section
        id="urunler"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-32 sm:mb-40"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs text-zinc-500 mb-6 tracking-wider"
        >
          {t.products.label}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_-8px_rgba(59,130,246,0.25)] transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                <span className="font-mono text-zinc-600 text-lg">?</span>
              </div>
              <p className="font-mono text-sm text-white mb-1.5">{t.products.cardTitle}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {t.products.cardDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        id="hizmetler"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-32 sm:mb-40"
      >
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs text-zinc-500 mb-3 tracking-wider"
        >
          {t.services.label}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-medium tracking-tight mb-4"
        >
          {t.services.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-zinc-400 max-w-xl mb-12"
        >
          {t.services.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {t.services.items.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`${cardClass} ${i === 0 ? "sm:col-span-2" : ""}`}
                >
                <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-zinc-700 transition">
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition" />
                </div>
                <h3 className="font-medium text-base mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="font-mono text-xs text-zinc-600">{service.tech}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Approach */}
      <motion.section
        id="yaklasim"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-32 sm:mb-40"
      >
        <motion.p variants={itemVariants} className="font-mono text-xs text-zinc-500 mb-3 tracking-wider">
          {t.approach.label}
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
          {t.approach.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-xl mb-12">
          {t.approach.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.approach.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="border-t border-zinc-800 pt-6"
            >
              <p className="font-mono text-2xl text-blue-500 mb-6">{step.number}</p>
              <h3 className="font-medium text-base mb-1">{step.title}</h3>
              <p className="font-mono text-xs text-zinc-500 mb-4">{step.tagline}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        id="ekip"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-32 sm:mb-40"
      >
        <motion.p variants={itemVariants} className="font-mono text-xs text-zinc-500 mb-3 tracking-wider">
          {t.team.label}
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
          {t.team.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-xl mb-12">
          {t.team.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {team.map((member) => (
            <motion.div
              key={member.nickname}
              variants={itemVariants}
              className={cardClass}
            >
              <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden mb-5 group-hover:border-zinc-700 transition">
                <PixelAvatar animal={member.animal} className="w-full h-full" />
              </div>
              <p className="font-mono text-sm text-white mb-1">@{member.nickname}</p>
              <p className="font-mono text-xs text-blue-500 mb-3">{member.role}</p>
              <p className="font-mono text-xs text-zinc-500">{member.skills}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="iletisim"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-24"
      >
        <motion.p variants={itemVariants} className="font-mono text-xs text-zinc-500 mb-3 tracking-wider">
          {t.contact.label}
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4">
          {t.contact.titleA}<br />
          <span className="font-mono text-blue-500">{t.contact.titleB}</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-zinc-400 max-w-xl mb-10">
          {t.contact.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
          <MagneticButton
            href="mailto:hello@argenext.com"
            className="font-mono text-sm px-5 py-3 bg-white text-black rounded-md hover:bg-zinc-200 transition text-center inline-block"
          >
            {t.contact.emailLabel}
          </MagneticButton>
          <a
            href="https://github.com/argenext"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-5 py-3 border border-zinc-800 rounded-md hover:border-zinc-600 transition text-center inline-flex items-center justify-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            {t.contact.githubLabel}
          </a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="font-mono text-base font-medium mb-1">
            argenext<span className="text-blue-500">.</span>
          </p>
          <p className="font-mono text-xs text-zinc-600">{t.footer.copyright}</p>
        </div>
        <p className="font-mono text-xs text-zinc-600">{t.footer.location}</p>
      </footer>
    </main>
  );
}