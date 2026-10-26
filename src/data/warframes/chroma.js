import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const chroma = {
  id: "chroma",
  name: "Chroma",
  image: "all_img/img_warframe/chroma.webp",
  primeImage: "all_img/img_warframe/chroma_prime.webp",
  description: "Description Chroma...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/chroma_fr/chroma_fr.png",
      "all_img/chroma_en/chroma_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/chroma_fr/regulators_fr.png",
      "all_img/chroma_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
