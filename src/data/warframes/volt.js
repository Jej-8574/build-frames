import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const volt = {
  id: "volt",
  name: "Volt",
  image: "all_img/img_warframe/volt.webp",
  primeImage: "all_img/img_warframe/volt_prime.webp",
  description: "Description Volt...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Endurance",
      "all_img/volt_fr/volt_fr_endurance.png",
      "all_img/volt_en/volt_en_endurance.png",
    ),
    makeBuild(
      "Mélée",
      "all_img/volt_fr/volt_fr_melee.png",
      "all_img/volt_en/volt_en_melee.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/volt_fr/regulators_fr.png",
      "all_img/volt_en/regulators_en.png",
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
      "+15 Puissance de Pouvoir.",
      "+15 Ability Strength.",
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
    makeShard(
      "red",
      "all_img/fragment_archon/fragment_rouge.webp",
      "+15 Puissance de Pouvoir.",
      "+15 Ability Strength.",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
