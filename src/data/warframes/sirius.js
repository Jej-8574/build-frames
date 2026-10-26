import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const sirius = {
  id: "sirius",
  name: "Sirius",
  image: "/all_img/img_warframe/sirius.webp",
  primeImage: "/all_img/img_warframe/orion.webp",
  description: "Description Sirius...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/sirius_fr/sirius_fr.png",
      "/all_img/sirius_en/sirius_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/sirius_fr/regulators_fr.png",
      "/all_img/sirius_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "/all_img/shards/violet.png",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "/all_img/shards/yellow.png",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
