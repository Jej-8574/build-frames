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
      "Regulators",
      "all_img/ash_fr/regulators_fr.png",
      "all_img/ash_en/regulators_en.png",
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
