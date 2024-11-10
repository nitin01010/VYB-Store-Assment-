import "./globals.css";

export const metadata = {
  title: "VYB Store",
  description: "VYB Store ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
