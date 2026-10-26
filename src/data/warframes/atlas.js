import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const atlas = {
  id: "atlas",
  name: "Atlas",
  image: "all_img/img_warframe/atlas.webp",
  primeImage: "all_img/img_warframe/atlas_prime.webp",
  description: "Description Atlas...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/atlas_fr/atlas_fr.png",
      "all_img/atlas_en/atlas_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/atlas_fr/regulators_fr.png",
      "all_img/atlas_en/regulators_en.png",
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
