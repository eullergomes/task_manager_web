import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: 'normal',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Lista de tarefas",
  description: "Aplicativo web simples de gerenciamento de tarefas utilizando o padrão MVC",
  authors: [{ name: 'Euller Gomes Teixeira' }],
  creator: 'Euller Gomes Teixeira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
