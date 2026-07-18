type PortfolioLenis = {
  scrollTo: (target: string | HTMLElement, opts?: object) => void;
};

function getLenis(): PortfolioLenis | undefined {
  return (window as unknown as { __portfolioLenis?: PortfolioLenis })
    .__portfolioLenis;
}

export function scrollToSectionId(id: string, offset = -88) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.15 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function getActiveSectionId(offset = 120): string {
  let current = "home";
  for (const id of [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ]) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - offset <= 0) current = id;
  }
  return current;
}
