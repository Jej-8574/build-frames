import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const khora = {
  id: "khora",
  name: "Khora",
  image: "all_img/img_warframe/khora.webp",
  primeImage: "all_img/img_warframe/khora_prime.webp",
  description: "Description Khora...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/khora_fr/khora_fr.png",
      "all_img/khora_en/khora_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Fouet Acéré",
      "all_img/khora_fr/khora_fr_weap.png",
      "all_img/khora_en/khora_en_weap.png",
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
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+22.5% de Vitesse de Parkour",
      "+22.5% Parkour Velocity",
    ),
  ],
};
