import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const oberon = {
  id: "oberon",
  name: "Oberon",
  image: "/all_img/img_warframe/oberon.webp",
  primeImage: "/all_img/img_warframe/oberon_prime.webp",
  description: "Description Oberon...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/oberon_fr/oberon_fr.png",
      "/all_img/oberon_en/oberon_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/oberon_fr/regulators_fr.png",
      "/all_img/oberon_en/regulators_en.png",
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
