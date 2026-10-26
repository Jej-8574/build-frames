import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const loki = {
  id: "loki",
  name: "Loki",
  image: "/all_img/img_warframe/loki.webp",
  primeImage: "/all_img/img_warframe/loki_prime.webp",
  description: "Description Loki...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/loki_fr/loki_fr.png",
      "/all_img/loki_en/loki_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/loki_fr/regulators_fr.png",
      "/all_img/loki_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "/all_img/shards/violet.png",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "/all_img/shards/yellow.png",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
