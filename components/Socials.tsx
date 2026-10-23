import { Linkedin, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";

const L = [["LinkedIn", SITE.social.linkedin, Linkedin], ["Instagram", SITE.social.instagram, Instagram], ["Facebook", SITE.social.facebook, Facebook]] as const;

export default function Socials() {
  return (
    <div className="soc">
      {L.map(([n, h, I]) => (
        <a key={n} href={h} target="_blank" rel="noopener noreferrer" aria-label={`PixiTech Studio on ${n}`}><I size={18} /></a>
      ))}
    </div>
  );
}
