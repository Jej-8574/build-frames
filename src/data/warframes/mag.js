import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const mag = {
  id: "mag",
  name: "Mag",
  image: "all_img/img_warframe/mag.webp",
  primeImage: "all_img/img_warframe/mag_prime.webp",
  description: "Description Mag...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/mag_fr/mag_fr.png",
      "all_img/mag_en/mag_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/mag_fr/regulators_fr.png",
      "all_img/mag_en/regulators_en.png",
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
