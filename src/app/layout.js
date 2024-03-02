import { Montserrat } from "next/font/google";
import "../../styles/globals.css";

const montse = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Chiripa RD Form",
  description: "Formulario para profesionales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montse.className}>{children}</body>
    </html>
  );
}
