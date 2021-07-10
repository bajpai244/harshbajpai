import base_theme from "./theme";

const theme = { ...base_theme };

/**Disable dark mode */
theme.useColorSchemeMediaQuery = false;
theme.colors.modes = {};

export default theme;
