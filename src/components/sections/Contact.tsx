"use client";

import { Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;

const links = [
  {
    label: "Email",
    href: gmailComposeUrl,
    detail: siteConfig.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    detail: "Connect professionally",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    detail: "See the code",
    icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-lg section-fade relative">
      <SectionSpotlight side="center" />
      <div className="container-premium relative z-[1] max-w-5xl">
        <Reveal>
          <div className="animated-border relative overflow-hidden rounded-[2rem] p-[1px]">
            <div className="glass-strong relative overflow-hidden rounded-[1.95rem] px-8 py-14 text-center sm:px-12 sm:py-20">
              {/* Background glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl"
                style={{ background: "rgba(201,162,39,0.12)" }}
                aria-hidden
              />
              <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />

              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  Contact
                </p>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Let&apos;s build something{" "}
                  <span className="text-gradient">exceptional.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-base text-muted sm:text-lg">
                  Open to roles, collaborations, and interesting product
                  challenges.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <MagneticButton
                    as="a"
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient px-8 py-3.5 text-base"
                  >
                    <Mail size={18} />
                    Send an email
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href={siteConfig.resumeUrl}
                    download="Akhlaq_Kafel_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-accent/35 bg-[#0A0A0A] px-8 py-3.5 text-base text-[#E8D5A3] hover:bg-accent/10"
                  >
                    <Download size={18} />
                    Download Resume
                  </MagneticButton>
                </div>

                <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
                  {links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.03]"
                      >
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-accent transition-colors group-hover:bg-accent/10">
                          <Icon size={18} />
                        </div>
                        <p className="font-medium text-white">{link.label}</p>
                        <p className="mt-1 truncate text-xs text-muted">
                          {link.detail}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
