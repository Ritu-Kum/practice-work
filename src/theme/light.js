const getLightTheme = (primaryColor, secondaryColor) => {
  return {
    palette: {
      // mode: 'dark',
      // type: 'light',
      primary: {
        main: "#EC4222",
        live: "",
      },
      secondry: {
        main: "#5C6BC0",
      },
      action: {},
      background: {},
      text: {},
      table: {},
    },
    overrides: {
      MuiCssBaseline: {},
      MuiList: {},
      MuiTab: {},
      MuiContainer: {},
      MuiTableCell: {},
    },
    typography: {},
  };
};

export default getLightTheme;
