import { makeBuild, makeShard } from "./shared.js";

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
      "Double Augment",
      "all_img/nova_fr/nova_fr_da.png",
      "all_img/nova_en/nova_en_da.png",
    ),
    makeBuild(
      "Support",
      "all_img/nova_fr/nova_fr_support.png",
      "all_img/nova_en/nova_en_support.png",
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
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration.",
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
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed.",
    ),
  ],
};
