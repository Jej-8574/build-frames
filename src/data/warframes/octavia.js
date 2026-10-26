import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const octavia = {
  id: "octavia",
  name: "Octavia",
  image: "all_img/img_warframe/octavia.webp",
  primeImage: "all_img/img_warframe/octavia_prime.webp",
  description: "Description Octavia...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/octavia_fr/octavia_fr.png",
      "all_img/octavia_en/octavia_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/octavia_fr/regulators_fr.png",
      "all_img/octavia_en/regulators_en.png",
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
