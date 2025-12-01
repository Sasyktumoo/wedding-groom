// Wedding Family Configuration
// Change this setting to switch between groom's and bride's parents

export const FAMILY_SIDE: 'groom' | 'bride' = 'groom'; // Change to 'bride' for bride's version

// Groom's Parents
export const GROOM_PARENTS = {
  kgz: {
    fatherName: "Кенжебек",
    motherName: "Жылдыз",
  },
  ru: {
    fatherName: "Кенжебек",
    motherName: "Жылдыз",
  }
};

// Bride's Parents
export const BRIDE_PARENTS = {
  kgz: {
    fatherName: "Кубанычбек",  // Replace with bride's father name in Kyrgyz
    motherName: "Венера",  // Replace with bride's mother name in Kyrgyz
  },
  ru: {
    fatherName: "Кубанычбек",  // Replace with bride's father name in Russian
    motherName: "Венера",  // Replace with bride's mother name in Russian
  }
};

// Get current family based on FAMILY_SIDE setting
export const getCurrentFamily = (language: 'kgz' | 'ru') => {
  const family = FAMILY_SIDE === 'groom' ? GROOM_PARENTS : BRIDE_PARENTS;
  return family[language];
};

