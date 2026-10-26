import { makeBuild, makeShard } from "./shared.js";

export const nokko = {
  id: "nokko",
  name: "Nokko",
  image: "all_img/img_warframe/nokko.webp",
  description: "Description Nokko...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nokko_fr/nokko_fr.png",
      "all_img/nokko_en/nokko_en.png",
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
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Durée de Pouvoir.",
      "+15% Power Duration",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+45% de Dégâts sur les Effets de Statut Poison",
      "+45% Damage on Poison Status Effects",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "+45% de Dégâts sur les Effets de Statut Poison",
      "+45% Damage on Poison Status Effects",
    ),
  ],
};
