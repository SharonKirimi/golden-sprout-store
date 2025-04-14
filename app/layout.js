import "./globals.css";
import Header from "./components/Header";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: "Golden Sprout",
  description: "Elegant Gold Jewelry and More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Header />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
