import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const rhino = {
  id: "rhino",
  name: "Rhino",
  image: "all_img/img_warframe/rhino.webp",
  primeImage: "all_img/img_warframe/rhino_prime.webp",
  description: "Description Rhino...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/rhino_fr/rhino_fr.png",
      "all_img/rhino_en/rhino_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/rhino_fr/regulators_fr.png",
      "all_img/rhino_en/regulators_en.png",
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
