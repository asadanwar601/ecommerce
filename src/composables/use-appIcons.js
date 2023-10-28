import { useQuasar } from "quasar";

const iconPath = "svguse:/svg";

const icons = {
  "app:phone": `${iconPath}/phone.svg#phone`,
  "app:location": `${iconPath}/location.svg#location`,
  "app:b-phone": `${iconPath}/b-phone.svg#b-phone`,
  "app:email": `${iconPath}/email.svg#email`,
  "app:helpline": `${iconPath}/helpline.svg#helpline`,
  "app:fb": `${iconPath}/facebook.svg#fb | 24`,
  "app:instagram": `${iconPath}/instagram.svg#instagram | 24`,
  "app:linkedin": `${iconPath}/linkedin.svg#linkedin | 24`,
  "app:twitter": `${iconPath}/twitter.svg#twitter | 24`,
  "app:pinterest": `${iconPath}/pinterest.svg#pinterest | 24`,
};

export default function useAppIcons() {
  const $q = useQuasar();

  $q.iconMapFn = (icon) => {
    if (icons[icon]) {
      return { icon: icons[icon] };
    }

    const iconDetails = icon.trim().split(":");
    if (iconDetails.length > 1) {
      const iconType = iconDetails[0];
      let iconName = iconDetails[1].includes("|")
        ? iconDetails[1].split("|")[0].trim()
        : iconDetails[1];
      if (iconType === "app") {
        return { icon: `${iconPath}/${iconName}.svg#${iconDetails[1]}` };
      }
      // else {
      //   return {
      //     icon: icon,
      //   };
      // }
    }
  };
}
