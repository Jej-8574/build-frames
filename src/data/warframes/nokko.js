import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const nokko = {
  id: "nokko",
  name: "Nokko",
  image: "all_img/img_warframe/nokko.webp",
  description: "Description Nokko...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/nokko_fr/nokko_fr.png",
      "all_img/nokko_en/nokko_en.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/nokko_fr/regulators_fr.png",
      "all_img/nokko_en/regulators_en.png",
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
