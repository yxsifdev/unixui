"use client";

import Image from "next/image";
import UnixUI from "../../public/unixui.webp";
import Link from "next/link";
import { NavigationLinks } from "@/consts/consts";
import { usePathname } from "next/navigation";
import SettingsIcon from "@/icons/Settings";

export default function SideBarComponent() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block">
      <nav className="fixed h-screen min-w-[200px]">
        <div className="py-7">
          <div className="flex items-center p-2 rounded-md gap-x-2 bg-zinc-900">
            <Image src={UnixUI} width={45} height={45} alt="unixui" />
            <div className="flex flex-col">
              <Link href="/" className="font-semibold text-purple-500">
                UnixUI
              </Link>
              <p className="text-xs font-medium text-zinc-500">
                Powered by{" "}
                <a
                  href="https://github.com/unix-orgs"
                  target="_blank"
                  className="hover:underline"
                >
                  Unix
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <ul className="">
            {NavigationLinks.map(({ label, url, new: isNew }) => (
              <li key={label} className="flex items-center justify-between">
                <Link
                  href={url}
                  className={`${
                    pathname === url
                      ? "text-purple-500 border-purple-500 pl-5 font-medium"
                      : "text-zinc-500 border-zinc-500"
                  } duration-300 text-sm border-l py-1 pl-4`}
                >
                  {label}
                </Link>
                {isNew && (
                  <span className="px-2 text-xs bg-purple-500 rounded-sm select-none">
                    Nuevo
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link
                href="/components/config"
                className={`${
                  pathname === "/components/config"
                    ? "text-purple-500 border-purple-500 pl-5 font-medium"
                    : "text-zinc-500 border-zinc-500"
                } duration-300 text-sm border-l py-1 pl-4 inline-flex items-center gap-x-2`}
              >
                <SettingsIcon className="size-5" />
                Configuración
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
