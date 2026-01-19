import * as React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const contactCards = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9440b291865bd6905311cd5c1f614999115b5d35bd15b687f8f43ea7344af19?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    title: "Call for inquiry",
    content: "+257 388-6895"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48ac33a6925612f63ba472c51acd83d34e092062f21a78fbc0c3a93a0f3b3a3b?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    title: "Send us email",
    content: "kramulous@sbcglobal.net"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f5e8401bfa2f46c125dbe2b5fb3d879198fe60404c4ea5e5c1a0f9c35026768?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    title: "Opening hours",
    content: "Mon - Fri: 10AM - 10PM"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5703d4dc1817c47b226819428573a11c62a5c812022617f17eb9819d967bcabf?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
    title: "Office",
    content: "19 North Road Piscataway, NY 08854"
  }
];

function ContactInfo() {
  return (
    <main className="flex flex-wrap items-center justify-between w-full gap-10 px-20 py-16 max-md:px-5 max-md:max-w-full">
      <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[654px] max-md:max-w-full">
        <article className="flex flex-col max-w-full text-black w-[620px]">
          <h1 className="max-w-full text-5xl font-bold text-ellipsis w-[564px] max-md:max-w-full max-md:text-4xl">
            You Will Grow, You Will Succeed. We Promise That
          </h1>
          <p className="mt-10 text-base leading-6 text-ellipsis max-md:max-w-full">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
            lectus tincidunt tincidunt ultrices. Diam convallis morbi
            pellentesque adipiscing
          </p>
        </article>
        <div className="flex flex-wrap gap-16 items-start mt-16 max-w-full text-black w-[654px] max-md:mt-10">
          {contactCards.map((card, index) => (
            <ContactCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </section>
      <ContactForm />
    </main>
  );
}

export default ContactInfo;