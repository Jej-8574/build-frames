import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const banshee = {
  id: "banshee",
  name: "Banshee",
  image: "all_img/img_warframe/banshee.webp",
  primeImage: "all_img/img_warframe/banshee_prime.webp",
  description: "Description Banshee...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/banshee_fr/banshee_fr.png",
      "all_img/banshee_en/banshee_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/banshee_fr/regulators_fr.png",
      "all_img/banshee_en/regulators_en.png",
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
