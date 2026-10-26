import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const saryn = {
  id: "saryn",
  name: "Saryn",
  image: "all_img/img_warframe/saryn.webp",
  primeImage: "all_img/img_warframe/saryn_prime.webp",
  description: "Description Saryn...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/saryn_fr/saryn_fr.png",
      "all_img/saryn_en/saryn_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/saryn_fr/regulators_fr.png",
      "all_img/saryn_en/regulators_en.png",
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
