import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const trinity = {
  id: "trinity",
  name: "Trinity",
  image: "/all_img/img_warframe/trinity.webp",
  primeImage: "/all_img/img_warframe/trinity_prime.webp",
  description: "Description Trinity...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/trinity_fr/trinity_fr.png",
      "/all_img/trinity_en/trinity_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/trinity_fr/regulators_fr.png",
      "/all_img/trinity_en/regulators_en.png",
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
