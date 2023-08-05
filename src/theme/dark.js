const getDarkTheme = (primaryColor, secondaryColor) => {
  return {
    palette: {
      mode: "dark",
      // type: 'light',
      primary: {
        main: "#172629",
        live: "",
      },
      secondry: {
        main: "#172629",
      },
      action: {},
      background: {
        // default: "#000000",
      },
      primary1: {
        color: "#440073", // purple
      },
      primary2: {
        color: "#ffd200", // yellow
      },
      primary3: {
        color: "#170d1c", // black
      },
      primary4: {
        color: "#330244", // dark purple
      },
      text: {},
      table: {},
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.3)",
            borderRadius: 10,
          },
        },
      },
      MuiList: {},
      MuiTab: {
        // root: {
        //   "&$selected": {
        //     color: "#eeeeee !important",
        //     backgroundColor: "#8b5ef9 !important"
        //   },
        // },
      },
      MuiContainer: {},
      MuiTableCell: {},
    },
    typography: {
      fontFamily: "Poppins",
    },
  };
};

export default getDarkTheme;
