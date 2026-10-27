import { makeBuild, makeShard } from "./shared.js";

export const styanax = {
  id: "styanax",
  name: "Styanax",
  image: "all_img/img_warframe/styanax.webp",
  primeImage: "all_img/img_warframe/styanax_prime.webp",
  description: "Description Styanax...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/styanax_fr/styanax_fr.png",
      "all_img/styanax_en/styanax_en.png",
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
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed.",
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
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength.",
    ),
  ],
};
