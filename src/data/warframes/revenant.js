import { makeBuild, makeShard } from "./shared.js";

export const revenant = {
  id: "revenant",
  name: "Revenant",
  image: "all_img/img_warframe/revenant.webp",
  primeImage: "all_img/img_warframe/revenant_prime.webp",
  description: "Description Revenant...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/revenant_fr/revenant_fr.png",
      "all_img/revenant_en/revenant_en.png",
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
