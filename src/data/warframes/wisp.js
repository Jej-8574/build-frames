import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const wisp = {
  id: "wisp",
  name: "Wisp",
  image: "all_img/img_warframe/wisp.webp",
  primeImage: "all_img/img_warframe/wisp_prime.webp",
  description: "Description Wisp...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/wisp_fr/wisp_fr.png",
      "all_img/wisp_en/wisp_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/wisp_fr/regulators_fr.png",
      "all_img/wisp_en/regulators_en.png",
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
