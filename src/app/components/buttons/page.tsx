import { ButtonOne, ButtonTwo } from "@/codes/buttons";

export default function ButtonsComponents() {
  return (
    <article className="ml-0 max-w-4xl py-7 duration-100 md:ml-[273px] px-2 md:px-0">
      <h1 className="text-2xl font-bold text-purple-500">Botones</h1>
      <p className="text-zinc-500">
        🎯 Elementos interactivos clave, personalizables con colores,
        animaciones e iconos.
      </p>
      <div className="mt-10">
        <ButtonOne />
        <ButtonTwo />
      </div>
    </article>
  );
}
