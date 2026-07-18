import { cn } from "@/lib/utils";

type LogoProps = { className?: string };

export function ReactLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.15" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NextLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="currentColor" aria-hidden>
      <path
        fill="#fff"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.34 0 .67-.02 1-.05V14.9l-3.9-5.6H11v7.55A8 8 0 1 1 12 4a7.96 7.96 0 0 1 6.32 3.12l-1.5 1.3A6 6 0 1 0 12 18v-2.2l5.9 5.1A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10z"
      />
    </svg>
  );
}

export function NodeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#339933" aria-hidden>
      <path d="M12 1.6 3.5 6.5v11L12 22.4l8.5-4.9v-11L12 1.6zm-.1 2.5 6.1 3.5v.15L12 11.2 5.9 7.75l6-3.65zm-6.4 5.3 5.7 3.25v6.3L5.5 16.6V9.4zm7.2 9.55v-6.3L18.4 9.4v7.2l-5.7 3.25z" />
    </svg>
  );
}

export function ExpressLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-champagne", className)} fill="currentColor" aria-hidden>
      <path d="M22 7.3H2v1.4h8.1c.9 1.7 2.2 3.1 3.9 4.1-1.7 1-3 2.4-3.9 4.1H2V18h20v-1.4h-8.1c.7-1.3 1.7-2.4 2.9-3.2H22v-1.4h-5.2A12.4 12.4 0 0 0 13.9 8.7H22V7.3z" />
    </svg>
  );
}

export function MongoLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#47A248" aria-hidden>
      <path d="M13.2 2.1c.1.4.2.8.2 1.2 1.8 2.1 2.9 4.6 2.9 7.4 0 2.3-.8 4.4-2.4 6.3-.3.4-.5.8-.5 1.3l-.1 1.9c0 .2-.1.3-.3.3h-.2c-.1 0-.2-.1-.2-.3v-1.7c0-.5-.2-1-.6-1.4-1.5-1.8-2.3-3.7-2.3-6.1 0-1.9.6-3.6 1.6-5.2.8-1.4 1.3-2.9 1.5-4.6.1-.4.2-.7.4-1.1zM12 21.5c.3 0 .6.2.6.5 0 .3-.4.7-.6 1-.2-.3-.6-.7-.6-1 0-.3.3-.5.6-.5z" />
    </svg>
  );
}

export function MySqlLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#4479A1" aria-hidden>
      <path d="M16.6 6.2c-1.1 0-2 .3-2.8.7l-.3.2.1.3c.2.7.4 1.5.4 2.3 0 .3 0 .5-.1.8l-.1.3h.4c.7-.1 1.4-.2 2-.2 2.8 0 4.7 1.3 4.7 3.3 0 2.2-2.1 3.7-5.2 3.7-1.2 0-2.3-.2-3.1-.5l-.4-.1v-2.2l.4.1c.8.3 1.7.4 2.6.4 1.9 0 3.1-.7 3.1-1.8 0-1-.9-1.6-2.7-1.6-.6 0-1.2.1-1.9.2h-.5l.1-.5c.1-.6.2-1.2.2-1.8 0-1.1-.3-2.1-.7-3l-.2-.3.3-.2c.9-.5 2-1 3.3-1h.1v2.1h-.2zm-8.3 1.9c-1.4 0-2.5.4-3.3 1.1-.9.8-1.4 2-1.4 3.6 0 2.9 1.8 4.7 4.6 4.7 1.1 0 2.1-.2 2.9-.6l.3-.2-.1-.3a8 8 0 0 1-.4-2.4v-.3h-.4c-.5.1-1 .2-1.5.2-1.6 0-2.4-.8-2.4-2.3 0-1.5.9-2.4 2.5-2.4.5 0 1 .1 1.5.2h.4l-.1-.4a7 7 0 0 1-.2-1.5v-.3h-.4c-.5.1-1 .1-1.4.1z" />
    </svg>
  );
}

export function JsLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} aria-hidden>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#111"
        d="M11.2 17.8c0 1.5-.9 2.3-2.3 2.3-1.2 0-2-.6-2.4-1.4l1.3-.8c.2.4.5.7 1 .7.5 0 .9-.2.9-1.1v-4.7h1.5v5zm3.7 2.3c-1.4 0-2.4-.7-2.8-1.7l1.3-.8c.2.5.6.9 1.4.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.3-.5-2.1-1.2-2.1-2.5 0-1.2.9-2.1 2.3-2.1 1 0 1.8.3 2.3 1.3l-1.3.8c-.2-.4-.5-.5-1-.5-.5 0-.7.3-.7.6 0 .4.2.6 1 .9l.4.2c1.5.6 2.3 1.3 2.3 2.7 0 1.5-1.2 2.4-2.6 2.4z"
      />
    </svg>
  );
}

export function HtmlLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} aria-hidden>
      <path fill="#E34F26" d="M4 2h16l-1.5 17L12 22l-6.5-3L4 2z" />
      <path fill="#EF652A" d="M12 4v16.5l5.3-2.4L18.5 4H12z" />
      <path fill="#EBEBEB" d="M12 9.5H8.2l.2 2.2H12v2.2H8.7l.3 3.2L12 18v2.3l-4.8-1.3-.3-3.7-.1-1.2L6.6 7.3H12V9.5z" />
      <path fill="#FFF" d="M12 9.5v2.2h3.5l-.3 3.1L12 15.7v2.3l4.7-1.3.5-5.7.1-1.5L17.5 7.3H12v2.2z" />
    </svg>
  );
}

export function CssLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} aria-hidden>
      <path fill="#1572B6" d="M4 2h16l-1.5 17L12 22l-6.5-3L4 2z" />
      <path fill="#33A9DC" d="M12 4v16.5l5.3-2.4L18.5 4H12z" />
      <path fill="#EBEBEB" d="M7.2 7.3H12V9.5H9.5l.2 2.2H12v2.2H7.8l-.6-6.6z" />
      <path fill="#FFF" d="M12 13.9h2.7l-.2 2L12 16.7v2.3l4.7-1.3.1-1 .4-4.8H12v2zM12 9.5h4.8l.2-2.2H12V9.5z" />
    </svg>
  );
}

export function SqlLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="none" aria-hidden>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="#C9A227" strokeWidth="1.4" />
      <path d="M5 6v8c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="#C9A227" strokeWidth="1.4" />
      <path d="M5 10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#C9A227" strokeWidth="1.4" />
    </svg>
  );
}

export function GitLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#F05032" aria-hidden>
      <path d="M22.4 11.1 12.9 1.6a2 2 0 0 0-2.8 0l-2 2 2.5 2.5a1.7 1.7 0 0 1 2.1 2.1l2.4 2.4a1.7 1.7 0 1 1-1 1l-2.3-2.3v6a1.7 1.7 0 1 1-1.2.1v-6.1a1.7 1.7 0 0 1-.9-2.2L6.8 5l-5.2 5.2a2 2 0 0 0 0 2.8l9.5 9.5a2 2 0 0 0 2.8 0l9.5-9.5a2 2 0 0 0 0-2.8z" />
    </svg>
  );
}

export function GithubLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-foreground", className)} fill="currentColor" aria-hidden>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 4-2.3 4.8-4.6 5.1.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}

export function VsCodeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#007ACC" aria-hidden>
      <path d="M21.3 3.2 15.5.7a1.2 1.2 0 0 0-1.3.3L3.2 12.4 1 10.6a.8.8 0 0 0-1 .1l-.1.8v1.1l.1.7a.8.8 0 0 0 1 .1L3.2 11.6l11 11.4a1.2 1.2 0 0 0 1.3.3l5.8-2.5a1.2 1.2 0 0 0 .7-1.1V4.3a1.2 1.2 0 0 0-.7-1.1zM15 16.7l-6.3-5.2L15 6.3v10.4z" />
    </svg>
  );
}

export function PostmanLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="#FF6C37" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.4 6.3-1.7 1.7-1.3-1.3 1.7-1.7c-.8-.4-1.8-.4-2.6.1L8.4 11.2l4.4 4.4 4.1-4.1c.5-.8.5-1.8.1-2.6l-1.7 1.7-1.3-1.3 1.7-1.7c.1 0 .2 0 .3 0a.9.9 0 0 1 0 1.8c0 .1 0 .2 0 .3z" />
    </svg>
  );
}

export function RestLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} fill="none" aria-hidden>
      <path
        d="M4 8h16M4 12h10M4 16h13"
        stroke="#C9A227"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="12" r="2" stroke="#C9A227" strokeWidth="1.4" />
    </svg>
  );
}
