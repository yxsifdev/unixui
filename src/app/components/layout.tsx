import SideBarComponent from "@/components/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnixUI - Components",
  description: "✨ Biblioteca de componentes hechos con Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container w-full mx-auto md:px-4 max-w-7xl">
        <SideBarComponent />
        {children}
      </main>
    </>
  );
}
