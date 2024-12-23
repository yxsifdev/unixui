"use client";

import CopyIcon from "@/icons/Copy";
import CheckIcon from "@/icons/Check";
import { useState } from "react";

export default function CopyToClipboard({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="border border-[#ffffff17] hover:bg-neutral-800 bg-neutral-900 transition-colors p-2 rounded-lg"
    >
      {copied ? <CheckIcon className="text-green-500" /> : <CopyIcon />}
    </button>
  );
}
