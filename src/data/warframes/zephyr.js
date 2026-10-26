import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const zephyr = {
  id: "zephyr",
  name: "Zephyr",
  image: "all_img/img_warframe/zephyr.webp",
  primeImage: "all_img/img_warframe/zephyr_prime.webp",
  description: "Description Zephyr...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/zephyr_fr/zephyr_fr.png",
      "all_img/zephyr_en/zephyr_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/zephyr_fr/regulators_fr.png",
      "all_img/zephyr_en/regulators_en.png",
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
