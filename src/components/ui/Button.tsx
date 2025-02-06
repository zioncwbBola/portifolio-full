// import React from 'react';
// import { cn } from '@/lib/utils';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', children, ...props }) => {
//   const baseStyles = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2';
//   const variants = {
//     primary: 'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-300',
//     secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-400',
//   };

//   return (
//     <button className={cn(baseStyles, variants[variant], className)} {...props}>
//       {children}
//     </button>
//   );
// };
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string; // Tornar o className opcional
}

export const Button: React.FC<ButtonProps> = ({ className = '', variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-300',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-400',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
