import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nidus = {
  id: "nidus",
  name: "Nidus",
  image: "/all_img/img_warframe/nidus.webp",
  primeImage: "/all_img/img_warframe/nidus_prime.webp",
  description: "Description Nidus...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/nidus_fr/nidus_fr.png",
      "/all_img/nidus_en/nidus_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/nidus_fr/regulators_fr.png",
      "/all_img/nidus_en/regulators_en.png",
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
