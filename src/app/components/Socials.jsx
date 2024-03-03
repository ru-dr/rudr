import Link from "next/link";
import Image from "next/image";

const socialInfo = [
  {
    name: "Discord",
    url: "https://www.discord.com/",
    logo: "/assets/Discord.svg",
  },
  {
    name: "Github",
    url: "https://www.github.com/",
    logo: "/assets/Github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    logo: "/assets/Linkedin.svg",
  },
  {
    name: "Twitter",
    url: "https://www.X.com/",
    logo: "/assets/X.svg",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/",
    logo: "/assets/Reddit.svg",
  },
  {
    name: "Steam",
    url: "https://www.steam.com/",
    logo: "/assets/Steam.svg",
  },
];

const Socials = () => {
  return (
    <main>
      <div className="grid lg:gap-5 gap-3 lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
        {socialInfo.map((social) => (
          <Link
            href={social.url}
            key={social.name}
            target="_blank"
            className="flex items-center justify-center md:gap-x-8 gap-x-5 bg-[#1c1c1c] sm:py-5 py-3 px-14 rounded-full transition-all duration-500 hover:bg-[#2c2c2c]"
          >
            <div className="sm:h-7 h-5 aspect-square relative">
              <Image src={social.logo} alt={social.name} fill={true} />
            </div>
            <p className="sm:text-xl text-base font-semibold">{social.name}.</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Socials;
