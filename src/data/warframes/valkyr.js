import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const valkyr = {
  id: "valkyr",
  name: "Valkyr",
  image: "all_img/img_warframe/valkyr.webp",
  primeImage: "all_img/img_warframe/valkyr_prime.webp",
  description: "Description Valkyr...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/valkyr_fr/valkyr_fr.png",
      "all_img/valkyr_en/valkyr_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Griffes de Valkyr",
      "all_img/valkyr_fr/valkyr_fr_weap.png",
      "all_img/valkyr_en/valkyr_en_weap.png",
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
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
