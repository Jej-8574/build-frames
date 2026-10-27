import { makeBuild, makeShard } from "./shared.js";

export const wisp = {
  id: "wisp",
  name: "Wisp",
  image: "all_img/img_warframe/wisp.webp",
  primeImage: "all_img/img_warframe/wisp_prime.webp",
  description: "Description Wisp...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/wisp_fr/wisp_fr_general.png",
      "all_img/wisp_en/wisp_en_general.png",
    ),
    makeBuild(
      "Arbitrage",
      "all_img/wisp_fr/wisp_fr_arbi.png",
      "all_img/wisp_en/wisp_en_arbi.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Ability Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Ability Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Ability Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Ability Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Ability Strength.",
    ),
  ],
};
