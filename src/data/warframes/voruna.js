import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const voruna = {
  id: "voruna",
  name: "Voruna",
  image: "all_img/img_warframe/voruna.webp",
  primeImage: "all_img/img_warframe/voruna_prime.webp",
  description: "Description Voruna...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/voruna_fr/voruna_fr.png",
      "all_img/voruna_en/voruna_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/voruna_fr/regulators_fr.png",
      "all_img/voruna_en/regulators_en.png",
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
