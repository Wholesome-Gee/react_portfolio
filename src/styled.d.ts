import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    pointColor: string;
    blackColor: { dark: string; light: string };
    whiteColor: string;
  }
}