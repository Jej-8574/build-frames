import { makeBuild, makeShard } from "./shared.js";

export const gyre = {
  id: "gyre",
  name: "Gyre",
  image: "all_img/img_warframe/gyre.webp",
  primeImage: "all_img/img_warframe/gyre_prime.webp",
  description: "Description Gyre...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/gyre_fr/gyre_fr.png",
      "all_img/gyre_en/gyre_en.png",
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
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+15% de Dégâts de Pouvoirs sur les ennemis affectés par un Effet de Statut Électrique.",
      "+15% Power Damage against enemies affected by an Electric Status Effect.",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+15% de Dégâts de Pouvoirs sur les ennemis affectés par un Effet de Statut Électrique.",
      "+15% Power Damage against enemies affected by an Electric Status Effect.",
    ),
    makeShard(
      "violet",
      "all_img/fragment_archon/fragment_violet.webp",
      "+15% de Dégâts de Pouvoirs sur les ennemis affectés par un Effet de Statut Électrique.",
      "+15% Power Damage against enemies affected by an Electric Status Effect.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
