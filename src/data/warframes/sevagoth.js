import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const sevagoth = {
  id: "sevagoth",
  name: "Sevagoth",
  image: "all_img/img_warframe/sevagoth.webp",
  primeImage: "all_img/img_warframe/sevagoth_prime.webp",
  description: "Description Sevagoth...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/sevagoth_fr/sevagoth_fr.png",
      "all_img/sevagoth_en/sevagoth_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/sevagoth_fr/regulators_fr.png",
      "all_img/sevagoth_en/regulators_en.png",
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
