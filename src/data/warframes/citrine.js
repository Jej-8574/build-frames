import { makeBuild, makeShard } from "./shared.js";

export const citrine = {
  id: "citrine",
  name: "Citrine",
  image: "all_img/img_warframe/citrine.webp",
  primeImage: "all_img/img_warframe/citrine_prime.webp",
  description: "Description Citrine...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/citrine_fr/citrine_fr_mecha.png",
      "all_img/citrine_en/citrine_en_mecha.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "vert",
      "all_img/fragment_archon/fragment_vert.webp",
      "+3 au nombre de cumuls max d'Effets de Statut Corrosifs",
      "+3 to the max stacks of Corrosive Status Effects",
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
      "+15 de Puissance de Pouvoir.",
      "+15 Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 de Puissance de Pouvoir.",
      "+15 Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 de Puissance de Pouvoir.",
      "+15 Power Strength.",
    ),
  ],
};
