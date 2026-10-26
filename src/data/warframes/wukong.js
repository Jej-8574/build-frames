import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const wukong = {
  id: "wukong",
  name: "Wukong",
  image: "all_img/img_warframe/wukong.webp",
  primeImage: "all_img/img_warframe/wukong_prime.webp",
  description: "Description Wukong...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/wukong_fr/wukong_fr.png",
      "all_img/wukong_en/wukong_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/wukong_fr/regulators_fr.png",
      "all_img/wukong_en/regulators_en.png",
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
