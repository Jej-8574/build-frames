import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const baruuk = {
  id: "baruuk",
  name: "Baruuk",
  image: "/all_img/img_warframe/baruuk.webp",
  primeImage: "/all_img/img_warframe/baruuk_prime.webp",
  description: "Description Baruuk...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/baruuk_fr/baruuk_fr.png",
      "/all_img/baruuk_en/baruuk_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/baruuk_fr/regulators_fr.png",
      "/all_img/baruuk_en/regulators_en.png",
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
