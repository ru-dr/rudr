import Link from "next/link";
import Image from "next/image";

const projectData = [
  {
    title: "YatraZen",
    desc: "Where Journeys find peace.",
    image:
      "https://ucarecdn.com/abce1b47-463d-43de-aa5b-df01c3be4c80/-/format/auto/-/quality/best/",
    url: "https://yatrazen.vercel.app/",
    status: "Live",
    statusColor: "bg-green-300",
  },
  {
    title: "Soter",
    desc: "Open Source SOS API for everyone.",
    image:
      "https://ucarecdn.com/abce1b47-463d-43de-aa5b-df01c3be4c80/-/format/auto/-/quality/best/",
    url: "https://yatrazen.vercel.app/",
    status: "In Progress",
    statusColor: "bg-yellow-300",
  },
];

const Projects = () => {
  return (
    <main className="w-full gap-y-5 flex flex-col">
      {projectData.map((project) => (
        <div
          key={project.title}
          className="flex flex-col bg-[#1c1c1c] rounded-3xl overflow-hidden w-full"
        >
          <div className="flex justify-between items-center sm:px-8 px-6 sm:py-6 py-4">
            <div className="flex sm:gap-y-2 gap-y-1 flex-col">
              <p className="lg:text-4xl text-xl font-semibold">
                {project.title}
              </p>
              <p className="lg:text-2xl text-sm font-light opacity-70">
                {project.desc}
              </p>
              <div className="flex items-center flex-row-reverse justify-end">
                <div
                  className={`animate-ping  h-2 w-2 rounded-full mx-3 ${
                    project.statusColor || "bg-white"
                  }`}
                ></div>
                <p className="lg:text-xl text-sm font-light opacity-50">
                  {project.status}
                </p>
              </div>
            </div>

            <Link
              href={project.url}
              target="_blank"
              className="transition-all ease-in-out duration-300 relative aspect-square rotate-45 sm:h-8 h-4  hover:rotate-0"
            >
              <Image
                src="/assets/Arrow.svg"
                alt="Link"
                fill
                className="w-full h-full "
              />
            </Link>
          </div>
          <div className="w-full sm:aspect-[16/6] aspect-[16/9] overflow-hidden rounded-t-3xl relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Projects;
