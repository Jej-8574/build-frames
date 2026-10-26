import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const revenant = {
  id: "revenant",
  name: "Revenant",
  image: "all_img/img_warframe/revenant.webp",
  primeImage: "all_img/img_warframe/revenant_prime.webp",
  description: "Description Revenant...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/revenant_fr/revenant_fr.png",
      "all_img/revenant_en/revenant_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/revenant_fr/regulators_fr.png",
      "all_img/revenant_en/regulators_en.png",
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
