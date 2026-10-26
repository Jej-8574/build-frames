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
      "Regulators",
      "all_img/valkyr_fr/regulators_fr.png",
      "all_img/valkyr_en/regulators_en.png",
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
