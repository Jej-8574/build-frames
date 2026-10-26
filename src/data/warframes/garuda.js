import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const garuda = {
  id: "garuda",
  name: "Garuda",
  image: "/all_img/img_warframe/garuda.webp",
  primeImage: "/all_img/img_warframe/garuda_prime.webp",
  description: "Description Garuda...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/garuda_fr/garuda_fr.png",
      "/all_img/garuda_en/garuda_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/garuda_fr/regulators_fr.png",
      "/all_img/garuda_en/regulators_en.png",
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
