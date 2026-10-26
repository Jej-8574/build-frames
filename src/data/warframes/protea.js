import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const protea = {
  id: "protea",
  name: "Protea",
  image: "/all_img/img_warframe/protea.webp",
  primeImage: "/all_img/img_warframe/protea_prime.webp",
  description: "Description Protea...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/protea_fr/protea_fr.png",
      "/all_img/protea_en/protea_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/protea_fr/regulators_fr.png",
      "/all_img/protea_en/regulators_en.png",
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
