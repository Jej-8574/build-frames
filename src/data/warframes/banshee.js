import { makeBuild, makeShard } from "./shared.js";

export const banshee = {
  id: "banshee",
  name: "Banshee",
  image: "all_img/img_warframe/banshee.webp",
  primeImage: "all_img/img_warframe/banshee_prime.webp",
  description: "Description Banshee...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/banshee_fr/banshee_fr.png",
      "all_img/banshee_en/banshee_en.png",
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
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
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
      "+15 de Puissance de Pouvoir.",
      "+15 Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 de Puissance de Pouvoir.",
      "+15 Power Strength.",
    ),
  ],
};
