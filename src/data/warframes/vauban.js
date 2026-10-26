import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const vauban = {
  id: "vauban",
  name: "Vauban",
  image: "all_img/img_warframe/vauban.webp",
  primeImage: "all_img/img_warframe/vauban_prime.webp",
  description: "Description Vauban...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/vauban_fr/vauban_fr.png",
      "all_img/vauban_en/vauban_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/vauban_fr/regulators_fr.png",
      "all_img/vauban_en/regulators_en.png",
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
