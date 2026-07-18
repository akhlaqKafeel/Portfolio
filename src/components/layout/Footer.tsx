import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
        </div>
        <p className="text-sm text-muted">
          © {year} · Crafted with intention
        </p>
      </div>
    </footer>
  );
}
