import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const gara = {
  id: "gara",
  name: "Gara",
  image: "all_img/img_warframe/gara.webp",
  primeImage: "all_img/img_warframe/gara_prime.webp",
  description: "Description Gara...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/gara_fr/gara_fr.png",
      "all_img/gara_en/gara_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Pique Cassante",
      "all_img/gara_fr/gara_fr_weap.png",
      "all_img/gara_en/gara_en_weap.png",
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
      "+37.5% Melee Critical Damage (doubled if Energy max > 500)",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if Energy max > 500)",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if Energy max > 500)",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if Energy max > 500)",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed.",
    ),
  ],
};
