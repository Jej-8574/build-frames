import { makeBuild, makeShard } from "./shared.js";

export const saryn = {
  id: "saryn",
  name: "Saryn",
  image: "all_img/img_warframe/saryn.webp",
  primeImage: "all_img/img_warframe/saryn_prime.webp",
  description: "Description Saryn...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/saryn_fr/saryn_fr.png",
      "all_img/saryn_en/saryn_en.png",
    ),
  ],
  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "3 au nombre de cumuls max d'Effets de Statut Corrosifs.",
      "3 max stacks of Corrosive Status Effects.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "45% de Dégâts sur les Effets de Statut Poison.",
      "45% Damage on Poison Status Effects.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "45% de Dégâts sur les Effets de Statut Poison.",
      "45% Damage on Poison Status Effects.",
    ),
    makeShard(
      "green",
      "all_img/fragment_archon/fragment_vert.webp",
      "45% de Dégâts sur les Effets de Statut Poison.",
      "45% Damage on Poison Status Effects.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
