import { makeBuild, makeShard } from "./shared.js";

export const grendel = {
  id: "grendel",
  name: "Grendel",
  image: "all_img/img_warframe/grendel.webp",
  primeImage: "all_img/img_warframe/grendel_prime.webp",
  description: "Description Grendel...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/grendel_fr/grendel_fr.png",
      "all_img/grendel_en/grendel_en.png",
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
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+45% de Dégâts sur les Effets de Statut Poison.",
      "+45% Damage on Poison Status Effects.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+45% de Dégâts sur les Effets de Statut Poison.",
      "+45% Damage on Poison Status Effects.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+45% de Dégâts sur les Effets de Statut Poison.",
      "+45% Damage on Poison Status Effects.",
    ),
  ],
};
