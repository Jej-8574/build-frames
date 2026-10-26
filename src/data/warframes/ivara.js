import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const ivara = {
  id: "ivara",
  name: "Ivara",
  image: "all_img/img_warframe/ivara.webp",
  primeImage: "all_img/img_warframe/ivara_prime.webp",
  description: "Description Ivara...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/ivara_fr/ivara_fr.png",
      "all_img/ivara_en/ivara_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/ivara_fr/regulators_fr.png",
      "all_img/ivara_en/regulators_en.png",
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
