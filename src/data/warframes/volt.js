import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const volt = {
  id: "volt",
  name: "Volt",
  image: "/all_img/img_warframe/volt.webp",
  primeImage: "/all_img/img_warframe/volt_prime.webp",
  description: "Description Volt...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/volt_fr/volt_fr.png",
      "/all_img/volt_en/volt_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/volt_fr/regulators_fr.png",
      "/all_img/volt_en/regulators_en.png",
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
