import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const uriel = {
  id: "uriel",
  name: "Uriel",
  image: "/all_img/img_warframe/uriel.webp",
  description: "Description Uriel...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/uriel_fr/uriel_fr.png",
      "/all_img/uriel_en/uriel_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/uriel_fr/regulators_fr.png",
      "/all_img/uriel_en/regulators_en.png",
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
