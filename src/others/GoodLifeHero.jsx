import * as React from "react";
import { StatCard } from "./StatCard";

const stats = [
  {
    number: "12k+",
    title: "Clients worldwide",
    description: `At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum\n\nid scelerisque rhoncus\n. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit\n. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.`
  },
  {
    number: "20k+",
    title: "Active resume",
    description: `At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum\n\nid scelerisque rhoncus\n. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit\n. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.`
  },
  {
    number: "18k+",
    title: "Companies",
    description: `At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum\n\nid scelerisque rhoncus\n. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit\n. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.`
  }
];

export function GoodLifeHero() {
  return (
    <main className="flex flex-col self-stretch w-full px-20 pt-32 pb-16 overflow-hidden bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <section className="flex flex-wrap items-center self-start gap-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65dfdbcebc36866bade739cc183cef2999e6543390a4bde61bdd7d27676c412?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2"
          alt="Good life company illustration"
          className="object-contain gap-2.5 self-stretch py-2.5 my-auto rounded-3xl aspect-[1.07] min-w-[240px] w-[550px] max-md:max-w-full"
        />
        <article className="flex flex-col self-stretch my-auto min-w-[240px] w-[600px] max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[600px]">
            <h1 className="text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
              Good Life Begins With A Good Company
            </h1>
            <p className="mt-10 text-base leading-6 text-black text-opacity-80 max-md:max-w-full">
              Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices
              purus diam egestas amet faucibus tempor blandit. Elit velit mauris
              aliquam est diam. Leo sagittis consectetur diam morbi erat aenean.
              Vulputate praesent congue faucibus in euismod feugiat euismod
              volutpat. Adipiscing risus amet phasellus imperdiet eget vel
              pulvinar. Risus in felis faucibus sit. Scelerisque consequat
              iaculis mauris amet vel felis id tincidunt nunc.
            </p>
          </div>
          <div className="flex items-center self-start gap-6 mt-16 text-base font-semibold max-md:mt-10">
            <button className="overflow-hidden gap-2.5 self-stretch px-5 py-4 my-auto text-white capitalize bg-teal-600 rounded-lg min-h-[40px]">
              Search Job
            </button>
            <button className="self-stretch my-auto text-teal-600">Learn more</button>
          </div>
        </article>
      </section>
      <section className="flex flex-wrap items-end justify-between w-full gap-10 mt-20 max-md:mt-10 max-md:max-w-full">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>
    </main>
  );
}