import { makeBuild, makeShard } from "./shared.js";

export const uriel = {
  id: "uriel",
  name: "Uriel",
  image: "all_img/img_warframe/uriel.webp",
  description: "Description Uriel...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/uriel_fr/uriel_fr.png",
      "all_img/uriel_en/uriel_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+22.5% de Vitesse de Parcours.",
      "+22.5% Parkour Speed.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "15% de Durée de Pouvoir.",
      "15% Power Duration.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "15% de Puissance de Pouvoir.",
      "15% Power Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "15% de Puissancede Pouvoir.",
      "15% Power Strength.",
    ),
  ],
};
