import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const limbo = {
  id: "limbo",
  name: "Limbo",
  image: "all_img/img_warframe/limbo.webp",
  primeImage: "all_img/img_warframe/limbo_prime.webp",
  description: "Description Limbo...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/limbo_fr/limbo_fr.png",
      "all_img/limbo_en/limbo_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/limbo_fr/regulators_fr.png",
      "all_img/limbo_en/regulators_en.png",
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
