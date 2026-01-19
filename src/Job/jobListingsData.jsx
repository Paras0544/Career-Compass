import * as React from "react";
import JobListingCard from "./JobListingCard";


const jobListingsData = [
    {
      timeAgo: "10 min ago",
      bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf02fa4fc3e7175e25259c39bec380fa607edf0a9e63a4d042a05ebfd5ea26de?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0cec0d6b311998dd9e99f6bfccab40e3b3488b6a3e59c91582f785c49129ce2?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      jobTitle: "Forward Security Director",
      companyName: "Bauch, Schuppe and Schulist Co",
      industry: { name: "Hotels & Tourism", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0559ecfa3cd5b9d3134847fcb4c459715f9b39a823e112e3a06254e713c37eb7?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      jobType: { name: "Full time", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/483fa6f34541f9b43c81b07c91dc6b61e1ee87ff0748a0f14e281a7f65789e22?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      salary: { range: "$40000-$42000", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/66399e7b3c231e4f7ec23445212d4f8bedfa4137ec146703e205c9c7813bcce3?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      location: { name: "New-York, USA", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fed9d01b7d67bff1eb3d9eb90ff4a2d0a29dd287357695e0234b2b324370a08?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" }
    },
    {
      timeAgo: "12 min ago",
      bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd5e45ce41319a3f1611cc9d6f27fb147706124438d944c27d47ce3b10760489?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c04b19d3d33385fb4881fc6ddfaf842ef5e20d7b6e779fd27cd0830ad4044c85?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      jobTitle: "Regional Creative Facilitator",
      companyName: "Wisozk - Becker Co",
      industry: { name: "Media", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/22e05939493a3ee5bc68058870b5a4ecc6f7892f378a4176fec2e55667f8ed67?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      jobType: { name: "Part time", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/483fa6f34541f9b43c81b07c91dc6b61e1ee87ff0748a0f14e281a7f65789e22?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      salary: { range: "$28000-$32000", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4855aebc41e6be4b8a136b7f9ee24adb5d47da78336cc6bf9011385fa9fce34?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      location: { name: "Los- Angeles, USA", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fed9d01b7d67bff1eb3d9eb90ff4a2d0a29dd287357695e0234b2b324370a08?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" }
    },
    {
      timeAgo: "15 min ago",
      bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8601240fdc7647b564e74b7f585567af0293a76ba58fd9e58e544f5cc6d028c3?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0aaa9345d15ca2cd9f74a4547d3ce18f930fae121bf96c29fd3afc9a279b05e2?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      jobTitle: "Internal Integration Planner",
      companyName: "Mraz, Quigley and Feest Inc.",
      industry: { name: "Construction", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69974068777f850d2b5a7e64864b2afe4991189a4e4bf844f7ad27fd1b88291e?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      jobType: { name: "Full time", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/483fa6f34541f9b43c81b07c91dc6b61e1ee87ff0748a0f14e281a7f65789e22?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      salary: { range: "$48000-$50000", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bb96f846fc93adad8c6349dff0e715835b5825147f33bc52327e9caa0b78280?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      location: { name: "Texas, USA", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fed9d01b7d67bff1eb3d9eb90ff4a2d0a29dd287357695e0234b2b324370a08?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" }
    },
    {
      timeAgo: "24 min ago",
      bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/774095e103b12fae09b6f09339e87d3f3cb7fc2b0d4e75e559fd1cb027d04d9f?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7cbd9a72a43db3ee28f15c549c34007d064037464626b2d144f3b89317fa3f1?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      jobTitle: "District Intranet Director",
      companyName: "VonRueden - Weber Co",
      industry: { name: "Commerce", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d56d9025dda01df4ec8ddc5649b9aabe39d6c719c7479d8949d5e33785281432?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      jobType: { name: "Full time", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/483fa6f34541f9b43c81b07c91dc6b61e1ee87ff0748a0f14e281a7f65789e22?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      salary: { range: "$42000-$48000", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9e5f51a2e165c526fa8b5b7bbbae10f09e0f35d33d9ea0f77bb3ac4e96f678c?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      location: { name: "Florida, USA", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fed9d01b7d67bff1eb3d9eb90ff4a2d0a29dd287357695e0234b2b324370a08?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" }
    },
    {
      timeAgo: "26 min ago",
      bookmarkIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b8af3d9e94b7f6bcb5a6c41fe81127428e62cb8552443282525f18ac8016972?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/546b0d31a5c16b7cae546400a5b7559c8a322b38f415d6b900479fd28f8c0019?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2",
      jobTitle: "Corporate Tactics Facilitator",
      companyName: "Cormier, Turner and Flatley Inc",
      industry: { name: "Commerce", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b544762c1e82fb830d7cc550473ede719936074d7c1bd2bbfb39b7048acb5e5a?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      jobType: { name: "Full time", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/483fa6f34541f9b43c81b07c91dc6b61e1ee87ff0748a0f14e281a7f65789e22?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      salary: { range: "$38000-$40000", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/225c4722d9973471b030315dd051e13112bb0f3e172a3a9966f131dc4bee8722?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" },
      location: { name: "Boston, USA", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fed9d01b7d67bff1eb3d9eb90ff4a2d0a29dd287357695e0234b2b324370a08?placeholderIfAbsent=true&apiKey=c1d46f45dda94c898a16d6bcde94e8f2" }
    }
  ];

function JobListings() {
  return (
    <main className="flex flex-col w-full py-16 max-md:py-8">
      <header className="flex flex-wrap gap-10 justify-between items-center self-center max-w-full w-[1296px] max-md:flex-col max-md:gap-6 max-md:w-full">
        <div className="flex flex-col text-black min-w-[240px] max-md:w-full max-md:text-center px-8">
          <h1 className="self-start text-5xl font-bold capitalize max-md:text-3xl">
            Career Compass: Navigate Your Path to Success
          </h1>
          <p className="mt-10 text-lg leading-relaxed max-md:mt-4 max-md:text-sm">
            Personalized career guidance to help you make informed, confident
            decisions. Whether you're starting out or seeking a new direction,
            discover opportunities tailored to your goals and aspirations.
          </p>
        </div>
        <button className="text-xl font-semibold text-teal-600 max-md:text-lg">
          View all
        </button>
      </header>
      <section className="grid grid-cols-1 gap-8 px-4 mt-16 md:grid-cols-2 xl:grid-cols-3">
        {jobListingsData.map((job, index) => (
          <div key={index} className="w-full max-w-[400px] mx-auto">
            <JobListingCard {...job} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default JobListings;
