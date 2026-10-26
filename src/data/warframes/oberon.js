import { makeBuild, makeShard } from "./shared.js";

export const oberon = {
  id: "oberon",
  name: "Oberon",
  image: "all_img/img_warframe/oberon.webp",
  primeImage: "all_img/img_warframe/oberon_prime.webp",
  description: "Description Oberon...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/oberon_fr/oberon_fr.png",
      "all_img/oberon_en/oberon_en.png",
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
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "15% de Dégâts de Pouvoirs sur les ennemis sous Effet Radiation.",
      "15% Power Damage against enemies affected by Radiation.",
    ),
    makeShard(
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "15% de Dégâts de Pouvoirs sur les ennemis sous Effet Radiation.",
      "15% Power Damage against enemies affected by Radiation.",
    ),
    makeShard(
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "15% de Dégâts de Pouvoirs sur les ennemis sous Effet Radiation.",
      "15% Power Damage against enemies affected by Radiation.",
    ),
  ],
};
