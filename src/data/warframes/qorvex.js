import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const qorvex = {
  id: "qorvex",
  name: "Qorvex",
  image: "/all_img/img_warframe/qorvex.webp",
  description: "Description Qorvex...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/qorvex_fr/qorvex_fr.png",
      "/all_img/qorvex_en/qorvex_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/qorvex_fr/regulators_fr.png",
      "/all_img/qorvex_en/regulators_en.png",
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
