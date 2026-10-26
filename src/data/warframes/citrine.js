import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const citrine = {
  id: "citrine",
  name: "Citrine",
  image: "/all_img/img_warframe/citrine.webp",
  primeImage: "/all_img/img_warframe/citrine_prime.webp",
  description: "Description Citrine...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/citrine_fr/citrine_fr.png",
      "/all_img/citrine_en/citrine_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/citrine_fr/regulators_fr.png",
      "/all_img/citrine_en/regulators_en.png",
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
