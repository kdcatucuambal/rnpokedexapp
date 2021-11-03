import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {});

  const colors: string[] = [];

  switch (result.platform) {
    case 'android':
      colors.push(result.dominant!);
      colors.push(result.average!);
      break;
    case 'ios':
      colors.push(result.primary!);
      colors.push(result.secondary!);
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return colors;
};
