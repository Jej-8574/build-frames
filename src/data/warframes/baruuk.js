import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const baruuk = {
  id: "baruuk",
  name: "Baruuk",
  image: "all_img/img_warframe/baruuk.webp",
  primeImage: "all_img/img_warframe/baruuk_prime.webp",
  description: "Description Baruuk...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/baruuk_fr/baruuk_fr.png",
      "all_img/baruuk_en/baruuk_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Vent du Desert",
      "all_img/baruuk_fr/baruuk_fr_weap.png",
      "all_img/baruuk_en/baruuk_en_weap.png",
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
      "+75% d'Efficacité des Orbes d'Énergie.",
      "+75% Energy Orb Efficiency.",
    ),
  ],
};
