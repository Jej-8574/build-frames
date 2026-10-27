import { makeBuild, makeShard } from "./shared.js";

export const voruna = {
  id: "voruna",
  name: "Voruna",
  image: "all_img/img_warframe/voruna.webp",
  primeImage: "all_img/img_warframe/voruna_prime.webp",
  description: "Description Voruna...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Slam",
      "all_img/voruna_fr/voruna_fr_slam.png",
      "all_img/voruna_en/voruna_en_slam.png",
    ),
    makeBuild(
      "Nuke",
      "all_img/voruna_fr/voruna_fr_nuke.png",
      "all_img/voruna_en/voruna_en.png",
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
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+37.5% de Dégâts Critiques de Mêlée (doublé si l'Énergie max > 500).",
      "+37.5% Melee Critical Damage (doubled if max Energy > 500).",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+3 au nombre de cumuls max d'Effets de Statut Corrosifs.",
      "+3 to max stacks of Corrosive Status Effects.",
    ),
    makeShard(
      "blue",
      "all_img/fragment_archon/fragment_bleu.webp",
      "+75 d'Énergie max.",
      "+75 max Energy.",
    ),
  ],
};
