import { makeBuild, makeShard } from "./shared.js";

export const yareli = {
  id: "yareli",
  name: "Yareli",
  image: "all_img/img_warframe/yareli.webp",
  primeImage: "all_img/img_warframe/yareli_prime.webp",
  description: "Description Yareli...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/yareli_fr/yareli_fr.png",
      "all_img/yareli_en/yareli_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "1.5% de Chance de critique Secondaire par ennemi tué sous Effet Feu (Max 50%).",
      "1.5% Secondary Crit Chance per enemy killed under Fire Effect (Max 50%).",
    ),
    makeShard(
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "1.5% de Chance de critique Secondaire par ennemi tué sous Effet Feu (Max 50%).",
      "1.5% Secondary Crit Chance per enemy killed under Fire Effect (Max 50%).",
    ),
    makeShard(
      "orange",
      "all_img/fragment_archon/fragment_orange.webp",
      "1.5% de Chance de critique Secondaire par ennemi tué sous Effet Feu (Max 50%).",
      "1.5% Secondary Crit Chance per enemy killed under Fire Effect (Max 50%).",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+22.5% de Vitesse de Parkour",
      "+22.5% Parkour Speed",
    ),
  ],
};
