import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const excalibur = {
  id: "excalibur",
  name: "Excalibur",
  image: "all_img/img_warframe/excalibur.webp",
  primeImage: "all_img/img_warframe/excalibur_prime.webp",
  description: "Description Excalibur...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/excalibur_fr/excalibur_fr.png",
      "all_img/excalibur_en/excalibur_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/excalibur_fr/regulators_fr.png",
      "all_img/excalibur_en/regulators_en.png",
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
