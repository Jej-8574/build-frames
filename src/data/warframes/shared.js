export const makeBuild = (name, fr, en) => ({
  name,
  images: { fr, en },
});

export const makeWeaponBuild = (name, fr, en) => ({
  name,
  images: { fr, en },
});

export const makeShard = (color, icon, fr, en) => ({
  color,
  icon,
  text: { fr, en },
});
