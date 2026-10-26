import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const ember = {
  id: "ember",
  name: "Ember",
  image: "all_img/img_warframe/ember.webp",
  primeImage: "all_img/img_warframe/ember_prime.webp",
  description: "Description Ember...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/ember_fr/ember_fr.png",
      "all_img/ember_en/ember_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/ember_fr/regulators_fr.png",
      "all_img/ember_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
