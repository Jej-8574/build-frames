import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nyx = {
  id: "nyx",
  name: "Nyx",
  image: "all_img/img_warframe/nyx.webp",
  primeImage: "all_img/img_warframe/nyx_prime.webp",
  description: "Description Nyx...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nyx_fr/nyx_fr.png",
      "all_img/nyx_en/nyx_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/nyx_fr/regulators_fr.png",
      "all_img/nyx_en/regulators_en.png",
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
