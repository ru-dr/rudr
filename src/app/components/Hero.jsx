const Hero = () => {
  return (
    <main className="h-[60dvh]">
      <div className="flex gap-5 h-full flex-col lg:flex-row ">
        <div className="lg:w-3/5 h-full bg-[#1c1c1c] rounded-3xl w-full"></div>
        <div className="lg:w-2/5 gap-y-5 flex flex-col h-full w-full">
          <div className="h-4/5 bg-[#1c1c1c] rounded-3xl"></div>
          <div className="h-1/5 bg-[#1c1c1c] rounded-3xl"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
