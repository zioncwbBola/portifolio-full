// import React from 'react';
// import { cn } from '@/lib/utils'; // Utilitário opcional para combinar classes

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
//   return (
//     <div className={cn('bg-white dark:bg-gray-800 shadow-md rounded-lg', className)} {...props}>
//       {children}
//     </div>
//   );
// };

// interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

// export const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
//   return (
//     <div className={cn('p-4', className)} {...props}>
//       {children}
//     </div>
//   );
// };
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string; // Garantir que className é opcional
}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
