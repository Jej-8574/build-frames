import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const cyte09 = {
  id: "cyte09",
  name: "Cyte09",
  image: "all_img/img_warframe/cyte09.webp",
  description: "Description Cyte09...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/cyte09_fr/cyte09_fr.png",
      "all_img/cyte09_en/cyte09_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/cyte09_fr/regulators_fr.png",
      "all_img/cyte09_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
