interface NavigationProps {
  label: string;
  url: string;
  new?: boolean;
}

export const NavigationLinks: NavigationProps[] = [
  {
    label: "Componentes",
    url: "/components",
  },
  {
    label: "Botones",
    url: "/components/buttons",
    new: true,
  },
  {
    label: "Formularios",
    url: "/components/forms",
    new: true,
  },
];
