import { makeBuild, makeShard } from "./shared.js";

export const xaku = {
  id: "xaku",
  name: "Xaku",
  image: "all_img/img_warframe/xaku.webp",
  primeImage: "all_img/img_warframe/xaku_prime.webp",
  description: "Description Xaku...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/xaku_fr/xaku_fr.png",
      "all_img/xaku_en/xaku_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+75 points d'Énergie Max.",
      "+75 Max Energy.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir.",
      "+15% Power Strength",
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
