import React from "react";

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container mx-auto px-4 py-8 md:py-12 ${className}`}>
      {children}
    </section>
  );
}
