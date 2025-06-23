'use client';

import React from 'react';
import { Container } from './Container';

interface LayoutProps {
  children: React.ReactNode;
  withPadding?: boolean;
}

export function Layout({ children, withPadding = true }: LayoutProps) {
  return (
    <div className="min-h-screen text-deep-gray">
      {withPadding ? (
        <main className="pb-16 space-y-12">
          {children}
        </main>
      ) : (
        <main>
          {children}
        </main>
      )}
    </div>
  );
}

export function Section({ 
  children, 
  className = '',
  withContainer = true 
}: { 
  children: React.ReactNode;
  className?: string;
  withContainer?: boolean;
}) {
  return withContainer ? (
    <section className={`py-8 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  ) : (
    <section className={`py-8 ${className}`}>
      {children}
    </section>
  );
}

export function ContentBlock({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-border-gray ${className}`}>
      {children}
    </div>
  );
} 