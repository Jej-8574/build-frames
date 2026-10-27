import { makeBuild, makeShard } from "./shared.js";

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
  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+22.5 de Vitesse de Parcours",
      "+22.5% Parkour Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength.",
    ),
  ],
};
