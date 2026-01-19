import * as React from "react";

const JobListingCard = ({
  timeAgo,
  bookmarkIcon,
  companyLogo,
  jobTitle,
  companyName,
  industry,
  jobType,
  salary,
  location,
}) => {
  return (
    <article className="flex flex-col p-6 max-w-full bg-white rounded-3xl shadow-[0px_3px_8px_rgba(48,150,137,0.08)] w-[90%] max-md:w-full max-md:p-4">
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-start justify-between w-full gap-4 text-sm text-teal-600">
          <time className="px-2 py-1.5 rounded-lg bg-teal-600 bg-opacity-10 min-h-[24px] text-xs">
            {timeAgo}
          </time>
          <img
            loading="lazy"
            src={bookmarkIcon}
            alt=""
            className="object-contain w-5 shrink-0 aspect-square"
          />
        </div>
        <div className="flex items-start self-start gap-4 mt-4 text-black">
          <img
            loading="lazy"
            src={companyLogo}
            alt={`${companyName} logo`}
            className="object-contain w-8 shrink-0 aspect-square"
          />
          <div className="flex flex-col min-w-[180px]">
            <h2 className="text-lg font-semibold max-md:text-base">{jobTitle}</h2>
            <p className="mt-2 text-sm text-gray-700">{companyName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-between w-full gap-6 mt-5 text-sm font-medium">
        <div className="flex flex-wrap gap-4 items-end text-gray-500 min-w-[180px]">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src={industry.icon}
              alt=""
              className="object-contain w-5 shrink-0 aspect-square"
            />
            <span className="text-xs">{industry.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src={jobType.icon}
              alt=""
              className="object-contain w-5 shrink-0 aspect-square"
            />
            <span className="text-xs">{jobType.name}</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img
              loading="lazy"
              src={salary.icon}
              alt=""
              className="object-contain w-5 shrink-0 aspect-square"
            />
            <span className="text-xs">{salary.range}</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src={location.icon}
              alt=""
              className="object-contain w-5 shrink-0 aspect-square"
            />
            <span className="text-xs">{location.name}</span>
          </div>
        </div>
        <button className="px-4 py-3 text-xs text-white bg-teal-600 rounded-lg min-h-[36px]">
          Job details
        </button>
      </div>
    </article>
  );
};

export default JobListingCard;
