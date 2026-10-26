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
      "Regulators",
      "all_img/khora_fr/regulators_fr.png",
      "all_img/khora_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/shards/violet.png",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/shards/yellow.png",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
