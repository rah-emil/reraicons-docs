import type { IIconCardProps } from './IconCard.vue';

export const loadIcons = async (style: string): Promise<IIconCardProps[]> => {
  /**
   * The above dynamic import cannot be analyzed by Vite.
   * See https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations 
   * for supported dynamic import formats. If this is intended to be left as-is, 
   * you can use the @vite-ignore comment inside the import() call to suppress this warning.
   */
  // icons.value = (await import(`@icons/${ style }`)).default;

  let iconsData;

  switch(style) {
    case 'bold':
      iconsData = (await import('@rah-emil/reraicons/dist/bold/icons.json')).default;
      break;
    case 'linear':
      iconsData = (await import('@rah-emil/reraicons/dist/linear/icons.json')).default;
      break;
    default:
      iconsData = (await import('@rah-emil/reraicons/dist/bold/icons.json')).default;
      break;
  }

  return iconsData;
}