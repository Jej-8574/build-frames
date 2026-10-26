import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const koumei = {
  id: "koumei",
  name: "Koumei",
  image: "all_img/img_warframe/koumei.webp",
  description: "Description Koumei...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/koumei_fr/koumei_fr.png",
      "all_img/koumei_en/koumei_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/koumei_fr/regulators_fr.png",
      "all_img/koumei_en/regulators_en.png",
    ),
  ],

  helminth: {
    fr: "Texte FR...",
    en: "Text EN...",
  },

  archonShards: [
    makeShard(
      "violet",
      "all_img/shards/violet.png",
      "+37.5% de Dégâts Critiques de Mêlée...",
      "+37.5% Melee Critical Damage...",
    ),
    makeShard(
      "yellow",
      "all_img/shards/yellow.png",
      "+37.5% de Vitesse de Lancement",
      "+37.5% Casting Speed",
    ),
  ],
};
