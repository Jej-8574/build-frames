import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const lavos = {
  id: "lavos",
  name: "Lavos",
  image: "all_img/img_warframe/lavos.webp",
  primeImage: "all_img/img_warframe/lavos_prime.webp",
  description: "Description Lavos...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/lavos_fr/lavos_fr.png",
      "all_img/lavos_en/lavos_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/lavos_fr/regulators_fr.png",
      "all_img/lavos_en/regulators_en.png",
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
