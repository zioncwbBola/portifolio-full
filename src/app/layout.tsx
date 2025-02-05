// // // // src/app/layout.tsx
// // // import "./globals.css"
// // // import type { Metadata } from "next"
// // // import { Inter } from "next/font/google"
// // // import type React from "react" // Added import for React

// // // const inter = Inter({ subsets: ["latin"] })

// // // export const metadata: Metadata = {
// // //   title: "ZionCWB Portfolio",
// // //   description: "Serviços de Suporte Técnico, Design Gráfico, E-commerce, e Desenvolvimento Full Stack",
// // // }

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode
// // // }) {

// // //   return (
// // //     <html lang="pt-BR" data-theme="light">
// // //       <body className={inter.className}>
// // //         {children}
// // //       </body>
// // //     </html>
// // //   )
// // // }
// // // src/app/layout.tsx
// // import "./globals.css";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import type React from "react";

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "ZionCWB Portfolio",
// //   description: "Serviços de Suporte Técnico, Design Gráfico, E-commerce, e Desenvolvimento Full Stack",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="pt-BR" data-theme="light">
// //       <body className={`${inter.className}`}>
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }
// // src/app/layout.tsx
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import type React from "react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ZionCWB Portfolio",
//   description: "Serviços de Suporte Técnico, Design Gráfico, E-commerce, e Desenvolvimento Full Stack",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="pt-BR">
//       <body className={`${inter.className} dark:bg-[#0B1C26] bg-[#4B9EBF] text-gray-900 dark:text-white`}>
//         {children}
//       </body>
//     </html>
//   );
// }
// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZionCWB Portfolio",
  description: "Serviços de Suporte Técnico, Design Gráfico, E-commerce, e Desenvolvimento Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} dark:bg-[#0B1C26] bg-[#4B9EBF] text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}