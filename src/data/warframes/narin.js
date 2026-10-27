import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const narin = {
  id: "narin",
  name: "Narin",
  image: "all_img/img_warframe/narin.webp",
  description: "Description Narin...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/narin_fr/narin_fr.png",
      "all_img/narin_en/narin_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/narin_fr/regulators_fr.png",
      "all_img/narin_en/regulators_en.png",
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
