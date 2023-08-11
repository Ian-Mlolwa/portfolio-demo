import React from "react";

interface Props {
  imgUrl: string;
  title: string;
  tech: any[];
  workUrl: string;
}

const WorkItem = ({ imgUrl, title, tech, workUrl }: Props) => {
  return (
    <a href={workUrl}>
      <div className="bg-slate-300 dark:bg-slate-800">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover rounded-lg overflow-hidden"
        />
        <div className=" text-gray-600 dark:text-gray-300 p-5 w-full">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>

          <p
            className="flex flex-wrap gap-2 flex-row
           items-center justify-start text-xs md:text-sm"
          >
            {tech.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1
                 bg-slate-200 dark:bg-slate-900
                 rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
