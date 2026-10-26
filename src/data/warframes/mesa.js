import { makeBuild, makeWeaponBuild, makeShard } from "./shared.js";

export const mesa = {
  id: "mesa",
  name: "Mesa",
  image: "all_img/img_warframe/mesa.webp",
  primeImage: "all_img/img_warframe/mesa_prime.webp",
  description: "Description Mesa...",
  strengths: ["..."],
  weaknesses: ["..."],

  builds: [
    makeBuild(
      "Général",
      "all_img/mesa_fr/mesa_fr.png",
      "all_img/mesa_en/mesa_en_endurance.png",
    ),
    makeBuild(
      "Nokko",
      "all_img/mesa_fr/mesa_fr.png",
      "all_img/mesa_en/mesa_en_nokko.png",
    ),
  ],

  weaponBuilds: [
    makeWeaponBuild(
      "Regulators",
      "all_img/mesa_fr/regulators_fr.png",
      "all_img/mesa_en/mesa_en_weapon.png",
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
      "+3 to the max number of Corrosive Status Effect stacks.",
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
  ],
};
