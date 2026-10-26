import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const hydroid = {
  id: "hydroid",
  name: "Hydroid",
  image: "all_img/img_warframe/hydroid.webp",
  primeImage: "all_img/img_warframe/hydroid_prime.webp",
  description: "Description Hydroid...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/hydroid_fr/hydroid_fr.png",
      "all_img/hydroid_en/hydroid_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/hydroid_fr/regulators_fr.png",
      "all_img/hydroid_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/shards/violet.png",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/shards/yellow.png",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
