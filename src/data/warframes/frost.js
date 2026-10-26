import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const frost = {
  id: "frost",
  name: "Frost",
  image: "/all_img/img_warframe/frost.webp",
  primeImage: "/all_img/img_warframe/frost_prime.webp",
  description: "Description Frost...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/frost_fr/frost_fr.png",
      "/all_img/frost_en/frost_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/frost_fr/regulators_fr.png",
      "/all_img/frost_en/regulators_en.png",
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
