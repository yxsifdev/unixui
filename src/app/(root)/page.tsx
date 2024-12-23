import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute hidden w-full mt-10 border-b border-purple-500 border-dashed md:block"></div>
      <main className="flex items-center justify-center h-screen max-w-5xl px-2 mx-auto my-0 border-purple-500 border-dashed select-none border-x">
        <section className="space-y-5 text-center">
          <div>
            <h1 className="text-6xl font-bold text-transparent md:text-7xl lg:text-8xl bg-gradient-to-tl font-geistMono to-purple-500 from-zinc-900 bg-clip-text">
              UnixUI
            </h1>
            <p className="text-balance text-zinc-300 font-geistMono">
              Una colección de componentes diseñados con Tailwind CSS, pensados
              para ser altamente reutilizables y adaptables a diferentes
              proyectos.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/yxsifdev/unixui"
              className="px-4 py-2 text-sm font-medium transition-colors border rounded-md font-geistMono md:text-lg border-zinc-800 hover:bg-zinc-800"
            >
              GitHub
            </a>
            <Link
              href="/components"
              className="px-4 py-2 text-sm font-medium transition-colors bg-purple-500 rounded-md font-geistMono md:text-lg hover:bg-purple-500/80"
            >
              Componentes
            </Link>
          </div>
          <div className="inline-block px-4 py-0.5 transition-colors border border-purple-500 rounded-full cursor-pointer bg-purple-500/20 hover:bg-purple-500/30">
            <a
              href="https://unix-org.vercel.app/"
              className="text-sm font-semibold text-purple-400 font-geistMono"
            >
              Powered by Unix
            </a>
          </div>
        </section>
      </main>
      <div className="absolute hidden w-full -mt-10 border-b border-purple-500 border-dashed md:block"></div>
    </>
  );
}
