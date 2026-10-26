import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const yareli = {
  id: "yareli",
  name: "Yareli",
  image: "all_img/img_warframe/yareli.webp",
  primeImage: "all_img/img_warframe/yareli_prime.webp",
  description: "Description Yareli...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/yareli_fr/yareli_fr.png",
      "all_img/yareli_en/yareli_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/yareli_fr/regulators_fr.png",
      "all_img/yareli_en/regulators_en.png",
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
