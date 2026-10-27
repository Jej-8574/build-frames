import { makeBuild, makeShard } from "./shared.js";

export const mag = {
  id: "mag",
  name: "Mag",
  image: "all_img/img_warframe/mag.webp",
  primeImage: "all_img/img_warframe/mag_prime.webp",
  description: "Description Mag...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/mag_fr/mag_fr.png",
      "all_img/mag_en/mag_en.png",
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
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration.",
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
      "+22.5% de Vitesse de Parkour",
      "+22.5% Parkour Velocity",
    ),
  ],
};
