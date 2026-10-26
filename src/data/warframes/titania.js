import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const titania = {
  id: "titania",
  name: "Titania",
  image: "/all_img/img_warframe/titania.webp",
  primeImage: "/all_img/img_warframe/titania_prime.webp",
  description: "Description Titania...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "/all_img/titania_fr/titania_fr.png",
      "/all_img/titania_en/titania_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "/all_img/titania_fr/regulators_fr.png",
      "/all_img/titania_en/regulators_en.png",
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
