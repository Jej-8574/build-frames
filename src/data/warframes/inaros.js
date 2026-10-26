import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const inaros = {
  id: "inaros",
  name: "Inaros",
  image: "all_img/img_warframe/inaros.webp",
  primeImage: "all_img/img_warframe/inaros_prime.webp",
  description: "Description Inaros...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/inaros_fr/inaros_fr.png",
      "all_img/inaros_en/inaros_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/inaros_fr/regulators_fr.png",
      "all_img/inaros_en/regulators_en.png",
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
