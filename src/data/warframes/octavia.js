import { makeBuild, makeShard } from "./shared.js";

export const octavia = {
  id: "octavia",
  name: "Octavia",
  image: "all_img/img_warframe/octavia.webp",
  primeImage: "all_img/img_warframe/octavia_prime.webp",
  description: "Description Octavia...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/octavia_fr/octavia_fr.png",
      "all_img/octavia_en/octavia_en.png",
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
      "Les récupérations de Santé donnent +30% d'Énergie. Les récupérations d'Énergie donnent +30% de Santé.",
      "Health pickups grant +30% Energy. Energy pickups grant +30% Health.",
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
  ],
};
