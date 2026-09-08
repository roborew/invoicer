import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
