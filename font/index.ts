import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "./proximanova_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./proximanova_regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./proximanova_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./proximanova_boldit.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./proximanova_extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./proximanova_black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./proximanova_black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./proximanova_blackit.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--proxima-nova-font",
  display: "swap",
});
