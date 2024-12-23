import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import CopyToClipboard from "./CopyToClipboard.component";
import "@/styles/code.css";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};

export default async function SyntaxHighlight({
  code,
  lang = "javascript",
  theme = "vesper",
  filename,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight(), transformerNotationDiff()],
  });

  return (
    <>
      <div className="flex items-center justify-between px-2 text-sm">
        <span className="-mb-[34px] text-neutral-500 rounded-t-lg border border-[#ffffff17] border-b-[#ffffff17] bg-[#101010] px-4 py-1 ">
          {filename}
        </span>
        <CopyToClipboard code={code} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}
