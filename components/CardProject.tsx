import React from "react";
import Github from "./icons/Github";
import Preview from "./icons/Preview";

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Contributors {
  name: string;
  link: string;
  avatar: string;
}

interface CardProjectProps {
  title: string;
  image: string;
  technologies: Technology[];
  description: string;
  contributors: Contributors[];
  source: string;
  preview?: string;
}

const CardProject = ({
  title,
  image,
  technologies,
  description,
  contributors,
  source,
  preview,
}: CardProjectProps) => {
  return (
    <div className="w-full">
      <div className="mt-20 flex flex-col md:flex-row md:space-x-6 group justify-center">
        <div className="relative overflow-hidden rounded-md shadow-lg mx-4">
          <img
            className="w-full md:w-[500px] h-auto md:h-[300px] object-cover transition-transform group-hover:scale-110 duration-300"
            src={image}
            alt="Pagina web"
          />
          <div className="absolute flex items-end text-white inset-0 bg-gradient-to-t from-black/90 to-transparent">
            <div className="w-full flex items-center justify-between p-3">
              <p className="relative text-2xl font-semibold">{title}</p>
            </div>
            <div className="absolute top-3 left-3 flex space-x-3">
              {/* Iconos Tecnologias  */}
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="relative inline-flex  active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none ">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    <tech.icon className="w-4 h-4 text-white" />
                    <p>{tech.name}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" md:w-[350px] text-white flex flex-col justify-between mt-8 md:mt-0 h-[270px] md:h-[300px] mx-4">
          <div>
            <h3 className="text-2xl font-semibold">About</h3>
            <p>{description}</p>
            <div className="flex space-x-2 my-4">
              <p className="font-semibold">Contributors</p>
              <div className="flex">
                <p className=" bg-gray-900 rounded-full px-2">
                  {contributors.length}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              {contributors.map((contributor) => (
                <a
                  key={contributor.name}
                  href={`${contributor.link}`}
                  target="_blank">
                  <img
                    src={`${contributor.avatar}`}
                    alt="Imagen de perfil de github"
                    className="w-10 h-10 rounded-full"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-slate-950 backdrop-blur-lg px-3 py-1 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 space-x-2"
              href={source}
              target="_blank">
              <Github className="w-6 h-6" />
              <span className="">Source</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </a>
            {preview && (
              <a
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-slate-950 backdrop-blur-lg px-3 py-1 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 space-x-2"
                href={preview}
                target="_blank">
                <Preview className="w-6 h-6" />
                <span className="">Preview</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/20"></div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
