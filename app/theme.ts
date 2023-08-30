import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
      },
      body: {
        fontSize: "1.6rem",
        overflowX: "hidden",
      },
    },
  },

  colors: {
    black: "#000000",
    gray: {
      1: "#F2F2F2",
      2: "#BBBBBB",
    },
    white: "#FFFFFF",
    orange: "#FFA23B",
    orange_pink: "#F68253",
    pink: "#E84DA9",
    pink_blue: "#DE48FD",
    blue: "#636FFF",
    blue_green: "#5CC8FD",
    green: "#4DE8AF",
    green_yellow: "#99FE96",
    yellow: "#ECFF55",
  },

  fonts: {
    heading: "'Red Hat Display', sans-serif",
    body: "'Red Hat Display', sans-serif",
  },

  components: {
    Button: {
      sizes: {
        lg: {
          h: "55px",
          w: "100%",
          fontSize: "3xl",
        },
      },
    },
    FormLabel: {
      sizes: {
        lg: {
          fontWeight: "bold",
          fontSize: "xl",
        },
      },
    },
    Link: {
      baseStyle: {
        fontSize: "xl",
        _hover: {
          textDecor: "none",
        },
      },
    },
    Input: {
      sizes: {
        lg: {
          field: {
            h: "45px",
            fontSize: "xl",
            _placeholder: {
              fontSize: "xl",
            },
          },
        },
      },
      variants: {
        filled: {
          field: {
            bg: "gray.1",
          },
        },
      },
      defaultProps: {
        variant: "filled",
      },
    },
  },
});
