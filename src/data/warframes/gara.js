import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const gara = {
  id: "gara",
  name: "Gara",
  image: "/all_img/img_warframe/gara.webp",
  primeImage: "/all_img/img_warframe/gara_prime.webp",
  description: "Description Gara...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/gara_fr/gara_fr.png",
      "/all_img/gara_en/gara_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/gara_fr/regulators_fr.png",
      "/all_img/gara_en/regulators_en.png",
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
