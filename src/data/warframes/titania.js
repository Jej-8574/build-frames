import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const titania = {
  id: "titania",
  name: "Titania",
  image: "all_img/img_warframe/titania.webp",
  primeImage: "all_img/img_warframe/titania_prime.webp",
  description: "Description Titania...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Farm Plat",
      "all_img/titania_fr/titania_fr_farm_plat.png",
      "all_img/titania_en/titania_en_farmplat.png",
    ),
    makeBuild(
      "Endurance",
      "all_img/titania_fr/titania_fr_endurance.png",
      "all_img/titania_en/titania_en_endurance.png",
    ),
    makeBuild(
      "Anti-Boss",
      "all_img/titania_fr/titania_fr_antiboss.png",
      "all_img/titania_en/titania_en_antiboss.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Dex Pixia",
      "all_img/titania_fr/titania_fr_weap.png",
      "all_img/titania_en/titania_en_weap.png",
    ),
    makeWeaponBuild(
      "Diwata",
      "all_img/titania_fr/titania_fr_cac.png",
      "all_img/titania_en/titania_en_melee.png",
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
      "+3 to max stacks of Corrosive Status.",
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
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 Puissance de Pouvoir.",
      "+15 Ability Strength.",
    ),
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 Puissance de Pouvoir.",
      "+15 Ability Strength.",
    ),
  ],
};
