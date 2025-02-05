// // src/components/Footer.tsx
// import Link from "next/link"
// const Footer = () => {
//   return (
//     <footer className="w-full p-4 md:p-6 text-center text-base-content border-t border-primary mt-4 md:mt-6">
//       &copy; 2025 <Link href={"/"}>ZionCWB - LOPES, André Paiva </Link>
//     </footer>
//   )
// }
// export default Footer

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-6 text-center text-base-content border-t border-primary mt-4 md:mt-6">
      &copy; 2025 <Link href={"/"} className="text-primary hover:underline">ZionCWB - LOPES, André Paiva</Link>
    </footer>
  );
};

export default Footer;
