import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const hildryn = {
  id: "hildryn",
  name: "Hildryn",
  image: "all_img/img_warframe/hildryn.webp",
  primeImage: "all_img/img_warframe/hildryn_prime.webp",
  description: "Description Hildryn...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/hildryn_fr/hildryn_fr.png",
      "all_img/hildryn_en/hildryn_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/hildryn_fr/regulators_fr.png",
      "all_img/hildryn_en/regulators_en.png",
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
