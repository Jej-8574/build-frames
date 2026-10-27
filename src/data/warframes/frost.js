import { makeBuild, makeShard } from "./shared.js";

export const frost = {
  id: "frost",
  name: "Frost",
  image: "all_img/img_warframe/frost.webp",
  primeImage: "all_img/img_warframe/frost_prime.webp",
  description: "Description Frost...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/frost_fr/frost_fr.png",
      "all_img/frost_en/frost_en.png",
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
