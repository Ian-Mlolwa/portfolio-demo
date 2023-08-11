import React from "react";

interface Props {
  children: string;
}

export const SectionTitle = ({ children }: Props) => {
  return (
    <h1
      className="text-3xl font-bold mb-5
      dark:text-cyan-500"
    >
      {children}
    </h1>
  );
};
