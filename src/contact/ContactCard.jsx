import * as React from "react";

function ContactCard({ icon, title, content }) {
  return (
    <article className="flex flex-col grow shrink w-[170px]">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-7 aspect-square"
      />
      <h2 className="mt-4 text-2xl font-bold leading-none">{title}</h2>
      <p className="mt-4 text-xl font-medium leading-tight">{content}</p>
    </article>
  );
}

export default ContactCard;