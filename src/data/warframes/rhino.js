import { makeBuild, makeShard } from "./shared.js";

export const rhino = {
  id: "rhino",
  name: "Rhino",
  image: "all_img/img_warframe/rhino.webp",
  primeImage: "all_img/img_warframe/rhino_prime.webp",
  description: "Description Rhino...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/rhino_fr/rhino_fr.png",
      "all_img/rhino_en/rhino_en.png",
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
