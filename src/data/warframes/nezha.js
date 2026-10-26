import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nezha = {
  id: "nezha",
  name: "Nezha",
  image: "all_img/img_warframe/nezha.webp",
  primeImage: "all_img/img_warframe/nezha_prime.webp",
  description: "Description Nezha...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nezha_fr/nezha_fr.png",
      "all_img/nezha_en/nezha_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/nezha_fr/regulators_fr.png",
      "all_img/nezha_en/regulators_en.png",
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
