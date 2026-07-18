export const sectionRoutes = [
  { id: "home", path: "/", label: "Home" },
  { id: "about", path: "/about", label: "About" },
  { id: "experience", path: "/experience", label: "Experience" },
  { id: "projects", path: "/projects", label: "Projects" },
  { id: "skills", path: "/skills", label: "Skills" },
  { id: "contact", path: "/contact", label: "Contact" },
] as const;

export type SectionId = (typeof sectionRoutes)[number]["id"];
export type SectionPath = (typeof sectionRoutes)[number]["path"];

const pathById = Object.fromEntries(
  sectionRoutes.map((s) => [s.id, s.path])
) as Record<SectionId, SectionPath>;

const idByPath = Object.fromEntries(
  sectionRoutes.map((s) => [s.path, s.id])
) as Record<string, SectionId>;

export function pathToSectionId(pathname: string): SectionId {
  const clean = pathname.split("?")[0].split("#")[0];
  return idByPath[clean] ?? "home";
}

export function sectionIdToPath(id: string): SectionPath {
  return pathById[id as SectionId] ?? "/";
}
