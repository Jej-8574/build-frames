import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const equinox = {
  id: "equinox",
  name: "Equinox",
  image: "all_img/img_warframe/equinox.webp",
  primeImage: "all_img/img_warframe/equinox_prime.webp",
  description: "Description Equinox...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/equinox_fr/equinox_fr.png",
      "all_img/equinox_en/equinox_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/equinox_fr/regulators_fr.png",
      "all_img/equinox_en/regulators_en.png",
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
