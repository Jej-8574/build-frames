import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const xaku = {
  id: "xaku",
  name: "Xaku",
  image: "/all_img/img_warframe/xaku.webp",
  primeImage: "/all_img/img_warframe/xaku_prime.webp",
  description: "Description Xaku...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/xaku_fr/xaku_fr.png",
      "/all_img/xaku_en/xaku_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/xaku_fr/regulators_fr.png",
      "/all_img/xaku_en/regulators_en.png",
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
