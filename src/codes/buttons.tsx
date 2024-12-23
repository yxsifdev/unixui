import SyntaxHighlight from "@/components/tools/syntaxhighlight/Syntaxhighlight.component";

const button1 = `<div class="mb-8 flex items-center gap-2">
  <button type="button" class="rounded-full bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-red-500/90">Danger</button>
  <button type="button" class="rounded-full bg-orange-500/10 px-4 py-2 font-medium text-orange-600 transition-colors duration-300 hover:bg-orange-500/20">Warning</button>
  <button type="button" class="rounded-full border border-blue-500 bg-blue-500/10 px-4 py-2 font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500/20">Primary</button>
  <button type="button" class="rounded-full px-4 py-2 font-medium text-gray-500 transition-colors duration-300 hover:bg-gray-500/20">Secondary</button>
  <button type="button" class="px-4 py-2 font-medium text-blue-500 hover:underline">Link</button>
</div>

<div class="flex items-center gap-2">
  <button type="button" class="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-red-500/90">Danger</button>
  <button type="button" class="rounded-lg bg-orange-500/10 px-4 py-2 font-medium text-orange-600 transition-colors duration-300 hover:bg-orange-500/20">Warning</button>
  <button type="button" class="rounded-lg border border-blue-500 bg-blue-500/10 px-4 py-2 font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500/20">Primary</button>
  <button type="button" class="rounded-lg px-4 py-2 font-medium text-gray-500 transition-colors duration-300 hover:bg-gray-500/20">Secondary</button>
  <button type="button" class="px-4 py-2 font-medium text-blue-500 hover:underline">Link</button>
</div>`;

export function ButtonOne() {
  return (
    <div className="space-y-2">
      <div className="p-4 rounded-lg bg-zinc-900">
        <div className="flex items-center gap-2 mb-8 overflow-x-auto">
          <button
            type="button"
            className="px-4 py-2 font-medium text-white transition-colors duration-300 bg-red-500 rounded-full hover:bg-red-500/90"
          >
            Danger
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-orange-600 transition-colors duration-300 rounded-full bg-orange-500/10 hover:bg-orange-500/20"
          >
            Warning
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-blue-500 transition-colors duration-300 border border-blue-500 rounded-full bg-blue-500/10 hover:bg-blue-500/20"
          >
            Primary
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-gray-500 transition-colors duration-300 rounded-full hover:bg-gray-500/20"
          >
            Secondary
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-blue-500 hover:underline"
          >
            Link
          </button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            className="px-4 py-2 font-medium text-white transition-colors duration-300 bg-red-500 rounded-lg hover:bg-red-500/90"
          >
            Danger
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-orange-600 transition-colors duration-300 rounded-lg bg-orange-500/10 hover:bg-orange-500/20"
          >
            Warning
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-blue-500 transition-colors duration-300 border border-blue-500 rounded-lg bg-blue-500/10 hover:bg-blue-500/20"
          >
            Primary
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-gray-500 transition-colors duration-300 rounded-lg hover:bg-gray-500/20"
          >
            Secondary
          </button>
          <button
            type="button"
            className="px-4 py-2 font-medium text-blue-500 hover:underline"
          >
            Link
          </button>
        </div>
      </div>
      <SyntaxHighlight code={button1} filename="Buttons #1" />
    </div>
  );
}

const button2 = `<div class="mb-8 flex items-center gap-2">
  <button type="button" class="rounded-full bg-red-500 px-3.5 py-1.5 text-center text-xs font-medium text-white transition-colors duration-300 hover:bg-red-700">Pequeñísimo</button>
  <button type="button" class="rounded-full bg-blue-500 px-6 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700">Pequeño</button>
  <button type="button" class="rounded-full bg-green-500 px-7 py-3 text-center text-base font-semibold text-white transition-colors duration-300 hover:bg-green-700">Mediano</button>
  <button type="button" class="rounded-full bg-yellow-500 px-8 py-3.5 text-center text-lg font-semibold text-white transition-colors duration-300 hover:bg-yellow-700">Grande</button>
  <button type="button" class="rounded-full bg-purple-500 px-9 py-4 text-center text-xl font-semibold text-white transition-colors duration-300 hover:bg-purple-700">Enorme</button>
</div>
<div class="flex items-center gap-2">
  <button type="button" class="rounded-md border border-red-500 bg-red-500/20 px-3.5 py-1.5 text-center text-xs font-medium text-red-500 transition-colors duration-300 hover:bg-red-500/30">Pequeñísimo</button>
  <button type="button" class="rounded-lg border border-blue-500 bg-blue-500/20 px-6 py-2.5 text-center text-sm font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500/30">Pequeño</button>
  <button type="button" class="rounded-xl border border-green-500 bg-green-500/20 px-7 py-3 text-center text-base font-semibold text-green-500 transition-colors duration-300 hover:bg-green-500/30">Mediano</button>
  <button type="button" class="rounded-xl border border-yellow-500 bg-yellow-500/20 px-8 py-3.5 text-center text-lg font-semibold text-yellow-500 transition-colors duration-300 hover:bg-yellow-500/30">Grande</button>
  <button type="button" class="rounded-xl border border-purple-500 bg-purple-500/20 px-9 py-4 text-center text-xl font-semibold text-purple-500 transition-colors duration-300 hover:bg-purple-500/30">Enorme</button>
</div>`;

export function ButtonTwo() {
  return (
    <div className="space-y-2">
      <div className="p-4 rounded-lg bg-zinc-900">
        <div className="flex items-center gap-2 mb-8 overflow-x-auto">
          <button
            type="button"
            className="rounded-full bg-red-500 px-3.5 py-1.5 text-center text-xs font-medium text-white transition-colors duration-300 hover:bg-red-700"
          >
            Pequeñísimo
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-500 px-6 py-2.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Pequeño
          </button>
          <button
            type="button"
            className="py-3 text-base font-semibold text-center text-white transition-colors duration-300 bg-green-500 rounded-full px-7 hover:bg-green-700"
          >
            Mediano
          </button>
          <button
            type="button"
            className="rounded-full bg-yellow-500 px-8 py-3.5 text-center text-lg font-semibold text-white transition-colors duration-300 hover:bg-yellow-700"
          >
            Grande
          </button>
          <button
            type="button"
            className="py-4 text-xl font-semibold text-center text-white transition-colors duration-300 bg-purple-500 rounded-full px-9 hover:bg-purple-700"
          >
            Enorme
          </button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            className="rounded-md border border-red-500 bg-red-500/20 px-3.5 py-1.5 text-center text-xs font-medium text-red-500 transition-colors duration-300 hover:bg-red-500/30"
          >
            Pequeñísimo
          </button>
          <button
            type="button"
            className="rounded-lg border border-blue-500 bg-blue-500/20 px-6 py-2.5 text-center text-sm font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500/30"
          >
            Pequeño
          </button>
          <button
            type="button"
            className="py-3 text-base font-semibold text-center text-green-500 transition-colors duration-300 border border-green-500 rounded-xl bg-green-500/20 px-7 hover:bg-green-500/30"
          >
            Mediano
          </button>
          <button
            type="button"
            className="rounded-xl border border-yellow-500 bg-yellow-500/20 px-8 py-3.5 text-center text-lg font-semibold text-yellow-500 transition-colors duration-300 hover:bg-yellow-500/30"
          >
            Grande
          </button>
          <button
            type="button"
            className="py-4 text-xl font-semibold text-center text-purple-500 transition-colors duration-300 border border-purple-500 rounded-xl bg-purple-500/20 px-9 hover:bg-purple-500/30"
          >
            Enorme
          </button>
        </div>
      </div>
      <SyntaxHighlight code={button2} filename="Buttons #2" />
    </div>
  );
}
