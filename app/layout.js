
import "./globals.css";

export const metadata = {
  title: "Habiba Khater | Full Stack Developer",
  description:
    "Habiba Khater's personal portfolio. Computer Science student and Full Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
