import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const oraxia = {
  id: "oraxia",
  name: "Oraxia",
  image: "/all_img/img_warframe/oraxia.webp",
  description: "Description Oraxia...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/oraxia_fr/oraxia_fr.png",
      "/all_img/oraxia_en/oraxia_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/oraxia_fr/regulators_fr.png",
      "/all_img/oraxia_en/regulators_en.png",
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
