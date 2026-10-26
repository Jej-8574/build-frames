import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const kullervo = {
  id: "kullervo",
  name: "Kullervo",
  image: "all_img/img_warframe/kullervo.webp",
  description: "Description Kullervo...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/kullervo_fr/kullervo_fr.png",
      "all_img/kullervo_en/kullervo_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/kullervo_fr/regulators_fr.png",
      "all_img/kullervo_en/regulators_en.png",
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
