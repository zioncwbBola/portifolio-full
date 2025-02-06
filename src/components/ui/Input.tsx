// import React from 'react';
// import { cn } from '@/lib/utils';

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// export const Input: React.FC<InputProps> = ({ className, ...props }) => {
//   return (
//     <input
//       className={cn(
//         'w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500',
//         className
//       )}
//       {...props}
//     />
//   );
// };
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Tornar o className opcional
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
      {...props}
    />
  );
};
