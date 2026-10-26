import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const grendel = {
  id: "grendel",
  name: "Grendel",
  image: "all_img/img_warframe/grendel.webp",
  primeImage: "all_img/img_warframe/grendel_prime.webp",
  description: "Description Grendel...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/grendel_fr/grendel_fr.png",
      "all_img/grendel_en/grendel_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/grendel_fr/regulators_fr.png",
      "all_img/grendel_en/regulators_en.png",
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
