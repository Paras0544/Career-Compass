import * as React from "react";

export function StatCard({ number, title, description }) {
  return (
    <article className="flex flex-col min-w-[240px] w-[306px]">
      <h3 className="text-4xl font-bold text-teal-600">{number}</h3>
      <h4 className="text-2xl font-semibold text-black mt-7">{title}</h4>
      <p className="text-base leading-6 text-black mt-7 text-opacity-80">
        {description}
      </p>
    </article>
  );
}