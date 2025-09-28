import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Privacy logo"
      className={cn('h-9 w-9', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="hsl(var(--primary))" />
      <path
        d="M9 16V8H11.5C13.9853 8 16 9.79086 16 12C16 14.2091 13.9853 16 11.5 16H9Z"
        fill="hsl(var(--primary-foreground))"
      />
    </svg>
  );
}
