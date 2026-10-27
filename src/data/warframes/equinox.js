import { makeBuild, makeShard } from "./shared.js";

export const equinox = {
  id: "equinox",
  name: "Equinox",
  image: "all_img/img_warframe/equinox.webp",
  primeImage: "all_img/img_warframe/equinox_prime.webp",
  description: "Description Equinox...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/equinox_fr/equinox_fr.png",
      "all_img/equinox_en/equinox_en.png",
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
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement.",
      "+37.5% Casting Speed.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+22.5% de Vitesse de Parcours.",
      "+22.5% Parkour Speed.",
    ),
  ],
};
