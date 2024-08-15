import { TextGenerateEffect } from "./ui/text-generate-effect";


export default function TextGenerate({text="", className=""}) {
  return <TextGenerateEffect words={text} className={className=""} />;
}
