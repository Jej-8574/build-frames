import { makeBuild, makeShard } from "./shared.js";

export const gauss = {
  id: "gauss",
  name: "Gauss",
  image: "all_img/img_warframe/gauss.webp",
  primeImage: "all_img/img_warframe/gauss_prime.webp",
  description: "Description Gauss...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/gauss_fr/gauss_fr.png",
      "all_img/gauss_en/gauss_en.png",
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
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration.",
    ),
  ],
};
