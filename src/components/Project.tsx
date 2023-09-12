interface PropTypes {
  index: number;
  image: string;
  repo: string;
  demo?: string;
  title: string;
  description: string;
  techs: string[];
}

export function Project({
  index,
  image,
  repo,
  demo,
  title,
  description,
  techs,
}: PropTypes) {
  return (
    <div className="relative w-4/5 flex flex-col items-center justify-center mt-12 md:w-3/5 md:mt-24 xl:w-1/2">
      <div className="w-full flex flex-row justify-center">
        <p className="absolute top-0 left-0 xl:left-32">[ {index} ]</p>
        <div className="relative flex flex-col items-center justify-center">
          <img
            src={image}
            alt=""
            className="relative h-28 w-44 rounded-sm md:h-56 md:w-80 xl:h-64 xl:w-96"
          />
          <div className="relative flex flex-row mt-2 md:mt-6">
            <p className="text-[10px] md:text-sm">
              {"["}
              <span>
                <a href={repo} className="underline">
                  View Code
                </a>
                {"]"}
              </span>
            </p>
            {demo && (
              <>
                &nbsp; &nbsp;
                <p className="text-[10px] text-orange md:text-sm">
                  {"["}
                  <span>
                    <a href={demo} className="underline">
                      View Demo
                    </a>
                    {"]"}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <p className="text-center text-lg font-bold mt-4 md:text-2xl">{title}</p>
      <p className="text-sm text-center mt-2 md:mt-4 md:text-base xl:mx-12">
        {description}
      </p>
      <div className="relative w-1/2 flex flex-row items-center justify-evenly mt-2 md:mt-4 xl:w-56">
        {techs.map((tech, key) => {
          return (
            <img
              src={tech}
              alt=""
              className="relative h-4 w-4 md:h-6 md:w-6"
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}
