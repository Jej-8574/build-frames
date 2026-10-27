import { makeBuild, makeShard } from "./shared.js";

export const nekros = {
  id: "nekros",
  name: "Nekros",
  image: "all_img/img_warframe/nekros.webp",
  primeImage: "all_img/img_warframe/nekros_prime.webp",
  description: "Description Nekros...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nekros_fr/nekros_fr.png",
      "all_img/nekros_en/nekros_en.png",
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
      "+225 points de Santé.",
      "+225 Health.",
    ),
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+225 points de Santé.",
      "+225 Health.",
    ),
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+225 points de Santé.",
      "+225 Health.",
    ),
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+75 points d'Énergie.",
      "+75 Energy.",
    ),
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+75 points d'Énergie.",
      "+75 Energy.",
    ),
  ],
};
