import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const wukong = {
  id: "wukong",
  name: "Wukong",
  image: "all_img/img_warframe/wukong.webp",
  primeImage: "all_img/img_warframe/wukong_prime.webp",
  description: "Description Wukong...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/wukong_fr/wukong_fr_general.png",
      "all_img/wukong_en/wukong_en_general.png",
    ),
    makeBuild(
      "Espionnage",
      "all_img/wukong_fr/wukong_fr_espionnage.png",
      "all_img/wukong_en/wukong_en_espionnage.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Bâton de Fer",
      "all_img/wukong_fr/wukong_fr_weap.png",
      "all_img/wukong_en/wukong_en_weap.png",
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
      "+3 au nombre de cumuls max d'Effets de Statut Corrosifs.",
      "+3 to max stacks of Corrosive Status Effects.",
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
      "+15% de Puissance de Pouvoir",
      "+15% Power Strength",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir",
      "+15% Power Strength",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15% de Puissance de Pouvoir",
      "+15% Power Strength",
    ),
  ],
};
