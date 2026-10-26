import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const gauss = {
  id: "gauss",
  name: "Gauss",
  image: "all_img/img_warframe/gauss.webp",
  primeImage: "all_img/img_warframe/gauss_prime.webp",
  description: "Description Gauss...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/gauss_fr/gauss_fr.png",
      "all_img/gauss_en/gauss_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/gauss_fr/regulators_fr.png",
      "all_img/gauss_en/regulators_en.png",
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
