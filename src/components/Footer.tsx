// // src/components/Footer.tsx
// import Link from 'next/link';
// const Footer = () => {
//   return (
//     <footer className="w-full p-4 md:p-6 text-center text-white dark:text-gray-400 border-t border-[#8D41BF] mt-4 md:mt-6">
//       &copy; 2025 <Link href={'/'}>ZionCWB - LOPES, André Paiva </Link>
//     </footer>
//   )
// }
// export default Footer;
// src/components/Footer.tsx
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-6 text-center text-base-content border-t border-primary mt-4 md:mt-6">
      &copy; 2025 <Link href={"/"}>ZionCWB - LOPES, André Paiva </Link>
    </footer>
  )
}
export default Footer

