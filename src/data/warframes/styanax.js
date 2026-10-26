import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const styanax = {
  id: "styanax",
  name: "Styanax",
  image: "all_img/img_warframe/styanax.webp",
  primeImage: "all_img/img_warframe/styanax_prime.webp",
  description: "Description Styanax...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/styanax_fr/styanax_fr.png",
      "all_img/styanax_en/styanax_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/styanax_fr/regulators_fr.png",
      "all_img/styanax_en/regulators_en.png",
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
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/fragment_archon/fragment_jaune.webp",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
