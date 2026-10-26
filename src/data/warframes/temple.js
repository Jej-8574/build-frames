import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const temple = {
  id: "temple",
  name: "Temple",
  image: "all_img/img_warframe/temple.webp",
  description: "Description Temple...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/temple_fr/temple_fr.png",
      "all_img/temple_en/temple_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/temple_fr/regulators_fr.png",
      "all_img/temple_en/regulators_en.png",
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
