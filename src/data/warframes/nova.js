import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nova = {
  id: "nova",
  name: "Nova",
  image: "all_img/img_warframe/nova.webp",
  primeImage: "all_img/img_warframe/nova_prime.webp",
  description: "Description Nova...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nova_fr/nova_fr.png",
      "all_img/nova_en/nova_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/nova_fr/regulators_fr.png",
      "all_img/nova_en/regulators_en.png",
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
