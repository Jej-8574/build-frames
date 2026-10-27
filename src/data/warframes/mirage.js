import { makeBuild, makeShard } from "./shared.js";

export const mirage = {
  id: "mirage",
  name: "Mirage",
  image: "all_img/img_warframe/mirage.webp",
  primeImage: "all_img/img_warframe/mirage_prime.webp",
  description: "Description Mirage...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/mirage_fr/mirage_fr_endurance.png",
      "all_img/mirage_en/mirage_en_endurance.png",
    ),
    makeBuild(
      "Sanctu",
      "all_img/mirage_fr/mirage_fr_sanctu.png",
      "all_img/mirage_en/mirage_en_sanctu.png",
    ),
    makeBuild(
      "Général",
      "all_img/mirage_fr/mirage_fr_general.png",
      "all_img/mirage_en/mirage_en_general.png",
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
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
