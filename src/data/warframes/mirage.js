import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const mirage = {
  id: "mirage",
  name: "Mirage",
  image: "all_img/img_warframe/mirage.webp",
  primeImage: "all_img/img_warframe/mirage_prime.webp",
  description: "Description Mirage...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/mirage_fr/mirage_fr.png",
      "all_img/mirage_en/mirage_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/mirage_fr/regulators_fr.png",
      "all_img/mirage_en/regulators_en.png",
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
