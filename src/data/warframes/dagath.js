import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const dagath = {
  id: "dagath",
  name: "Dagath",
  image: "/all_img/img_warframe/dagath.webp",
  description: "Description Dagath...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/dagath_fr/dagath_fr.png",
      "/all_img/dagath_en/dagath_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/dagath_fr/regulators_fr.png",
      "/all_img/dagath_en/regulators_en.png",
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
