import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: {
          base: "55%",
          md: "62.5%",
          lg: "75%",
        },
      },
      body: {
        fontSize: "1.6rem",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "10px",
        },

        "&::-webkit-scrollbar-track": {
          bg: "white",
        },

        "&::-webkit-scrollbar-thumb": {
          bg: "black",
          borderRadius: "10px",
          border: "4px solid",
          borderColor: "white",
        },
      },
      ".no-scrollbar": {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
      ".no-scrollbar::-webkit-scrollbar": {
        display: "none",
      },
      ul: {
        listStyle: "none",
      },
    },
  },

  colors: {
    black: "#000000",
    gray: {
      1: "#F2F2F2",
      2: "#EEEEEE",
      3: "#DDDDDD",
      4: "#BBBBBB",
    },
    darkgray: "#111111",
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
    github: {
      black: "#24292f",
      white: "#e6edf3",
    },
    google: {
      white: "#e8eaed",
    },
  },

  fonts: {
    heading: "'Red Hat Display', sans-serif",
    body: "'Red Hat Display', sans-serif",
  },

  components: {
    Button: {
      sizes: {
        lg: {
          h: "4.6875rem",
          w: "100%",
          fontSize: "1.5rem",
          transition: "all 0.2s",
          _active: {
            filter: "brightness(110%)",
          },
        },
      },
      variants: {
        orange: {
          bg: "orange",
        },
        blue: {
          bg: "blue",
        },
      },
    },
    FormLabel: {
      sizes: {
        lg: {
          fontWeight: "bold",
          fontSize: "1rem",
          mb: "0.3125rem",
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
            h: "3.75rem",
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
            _placeholder: {
              color: "gray.3",
            },
            _focus: {
              bg: "gray.1",
              borderColor: "gray.2",
            },
            _hover: {
              bg: "gray.1",
            },
          },
        },
      },
      defaultProps: {
        variant: "filled",
      },
    },

    Flex: {
      variants: {
        "no-scrollbar": {
          field: {
            bg: "gray.1",
            _placeholder: {
              color: "gray.3",
            },
            _focus: {
              bg: "gray.1",
              borderColor: "gray.2",
            },
            _hover: {
              bg: "gray.1",
            },
          },
        },
      },
    },

    Text: {
      baseStyle: {
        lineHeight: "100%",
        color: "black",
        fontSize: "1.375rem",
      },
    },

    Heading: {
      baseStyle: {
        lineHeight: "100%",
        color: "black",
      },
      sizes: {
        "3xl": {
          fontSize: "3rem",
        },
      },
    },

    Container: {
      baseStyle: {
        maxWidth: "1440px",
        paddingX: ["24px", "50px", "70px"],
      },
    },
  },
});
