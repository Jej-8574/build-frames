import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const ash = {
  id: "ash",
  name: "Ash",
  image: "all_img/img_warframe/ash.webp",
  primeImage: "all_img/img_warframe/ash_prime.webp",
  description: "Description Ash...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/ash_fr/ash_fr.png",
      "all_img/ash_en/ash_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Tempêtes de lames",
      "all_img/ash_fr/ash_fr_weap.png",
      "all_img/ash_en/ash_en_weap.png",
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
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+75 Points d'Énergie.",
      "+75 Energy Maximum.",
    ),
  ],
};
