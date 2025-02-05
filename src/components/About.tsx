// // src/components/About.tsx
// import { FC } from "react";
// import { Briefcase, GraduationCap, Phone, Mail } from "lucide-react";

// const SobreContent: FC = () => {
//   return (
//     <div className="flex flex-col items-center space-y-8 h-[70vh] overflow-hidden">
//       {/* Título */}
//       <h1 className="text-3xl md:text-4xl font-bold text-[#D94350]">
//         Meu Currículo
//       </h1>

//       {/* Container Scrollable */}
//       <div className="bg-gray-50 dark:bg-[#112244] p-6 md:p-8 rounded-xl shadow-md w-full max-w-4xl overflow-y-auto h-full">
//         {/* Resumo */}
//         <section className="mb-8">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
//             Resumo
//           </h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             Sou um profissional dedicado com experiência em desenvolvimento web, trabalhando com tecnologias modernas como React, Next.js, TypeScript e Tailwind CSS. Minha missão é criar soluções impactantes e elegantes para a web.
//           </p>
//         </section>

//         {/* Experiência Profissional */}
//         <section className="mb-8">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
//             <Briefcase className="inline mr-2" /> Experiência Profissional
//           </h2>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <h3 className="text-lg font-semibold text-[#D94350]">
//                 Desenvolvedor Frontend
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Empresa XYZ - Janeiro 2023 até o momento
//               </p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 - Desenvolvimento de interfaces modernas e responsivas.  
//                 - Integração com APIs e otimização de desempenho.
//               </p>
//             </li>
//             <li>
//               <h3 className="text-lg font-semibold text-[#D94350]">
//                 Estágio em Desenvolvimento Web
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Startup ABC - Março 2022 a Dezembro 2022
//               </p>
//               <p className="text-gray-600 dark:text-gray-300">
//                 - Contribuição em projetos React e suporte ao backend.  
//                 - Garantia de acessibilidade e boas práticas de UI/UX.
//               </p>
//             </li>
//           </ul>
//         </section>

//         {/* Habilidades */}
//         <section className="mb-8">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
//             Habilidades
//           </h2>
//           <div className="flex flex-wrap gap-4 mt-4">
//             {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
//               (skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1 bg-[#D94350] text-white rounded-full text-sm md:text-base font-medium"
//                 >
//                   {skill}
//                 </span>
//               )
//             )}
//           </div>
//         </section>

//         {/* Contato */}
//         <section>
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
//             Contato
//           </h2>
//           <div className="flex flex-col space-y-2 mt-4 text-gray-600 dark:text-gray-300">
//             <p>
//               <Phone className="inline mr-2" /> (99) 99999-9999
//             </p>
//             <p>
//               <Mail className="inline mr-2" /> seuemail@exemplo.com
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SobreContent;
// src/components/About.tsx
import { FC } from "react";
import { Briefcase, GraduationCap, Phone, Mail } from "lucide-react";

const SobreContent: FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 h-[70vh] overflow-hidden">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary">Meu Currículo</h1>

      {/* Container Scrollable */}
      <div className="bg-base-200 p-6 md:p-8 rounded-xl shadow-md w-full max-w-4xl overflow-y-auto h-full">
        {/* Resumo */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary-content">Resumo</h2>
          <p className="mt-2 text-base-content">
            Sou um profissional dedicado com experiência em desenvolvimento web, trabalhando com tecnologias modernas como React, Next.js, TypeScript e Tailwind CSS. Minha missão é criar soluções impactantes e elegantes para a web.
          </p>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary-content flex items-center">
            <Briefcase className="inline mr-2" /> Experiência Profissional
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="text-lg font-semibold text-secondary">Desenvolvedor Frontend</h3>
              <p className="text-base-content">Empresa XYZ - Janeiro 2023 até o momento</p>
              <p className="text-base-content">
                - Desenvolvimento de interfaces modernas e responsivas.  
                - Integração com APIs e otimização de desempenho.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-secondary">Estágio em Desenvolvimento Web</h3>
              <p className="text-base-content">Startup ABC - Março 2022 a Dezembro 2022</p>
              <p className="text-base-content">
                - Contribuição em projetos React e suporte ao backend.  
                - Garantia de acessibilidade e boas práticas de UI/UX.
              </p>
            </li>
          </ul>
        </section>

        {/* Habilidades */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary-content">Habilidades</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (skill) => (
                <span
                  key={skill}
                  className="badge badge-secondary text-white"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* Contato */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-primary-content">Contato</h2>
          <div className="flex flex-col space-y-2 mt-4 text-base-content">
            <p>
              <Phone className="inline mr-2" /> (99) 99999-9999
            </p>
            <p>
              <Mail className="inline mr-2" /> seuemail@exemplo.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreContent;
