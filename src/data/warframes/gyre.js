import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const gyre = {
  id: "gyre",
  name: "Gyre",
  image: "all_img/img_warframe/gyre.webp",
  primeImage: "all_img/img_warframe/gyre_prime.webp",
  description: "Description Gyre...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/gyre_fr/gyre_fr.png",
      "all_img/gyre_en/gyre_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/gyre_fr/regulators_fr.png",
      "all_img/gyre_en/regulators_en.png",
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
