import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const harrow = {
  id: "harrow",
  name: "Harrow",
  image: "all_img/img_warframe/harrow.webp",
  primeImage: "all_img/img_warframe/harrow_prime.webp",
  description: "Description Harrow...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/harrow_fr/harrow_fr.png",
      "all_img/harrow_en/harrow_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/harrow_fr/regulators_fr.png",
      "all_img/harrow_en/regulators_en.png",
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
