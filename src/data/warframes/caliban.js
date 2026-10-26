import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const caliban = {
  id: "caliban",
  name: "Caliban",
  image: "/all_img/img_warframe/caliban.webp",
  primeImage: "/all_img/img_warframe/caliban_prime.webp",
  description: "Description Caliban...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/caliban_fr/caliban_fr.png",
      "/all_img/caliban_en/caliban_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/caliban_fr/regulators_fr.png",
      "/all_img/caliban_en/regulators_en.png",
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
