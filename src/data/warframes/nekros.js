import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nekros = {
  id: "nekros",
  name: "Nekros",
  image: "all_img/img_warframe/nekros.webp",
  primeImage: "all_img/img_warframe/nekros_prime.webp",
  description: "Description Nekros...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nekros_fr/nekros_fr.png",
      "all_img/nekros_en/nekros_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/nekros_fr/regulators_fr.png",
      "all_img/nekros_en/regulators_en.png",
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
