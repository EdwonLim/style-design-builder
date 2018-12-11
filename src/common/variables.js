import { colorPalette } from './util';
import CONFIG from './config';

export default VARIABLE = {...CONFIG};
VARIABLE.colorList.lightPrimaryColor = () => colorPalette(VARIABLE.colorList.primaryColor, VARIABLE.colorList.lightPrimaryColorNumber);
VARIABLE.colorList.deepPrimaryColor = () => colorPalette(VARIABLE.colorList.primaryColor, VARIABLE.colorList.deepPrimaryColorNumber);
VARIABLE.colorList.lightSecondaryColor = () => colorPalette(VARIABLE.colorList.secondaryColor, VARIABLE.colorList.lightSecondaryColorNumber);
VARIABLE.colorList.deepSecondaryColor = () => colorPalette(VARIABLE.colorList.secondaryColor, VARIABLE.colorList.deepSecondaryColorNumber);
