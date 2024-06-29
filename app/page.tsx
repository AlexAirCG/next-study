import ParticleMy from "@/components/Particle-my";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-2">
        <ParticleMy />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-10/">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustachMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-1 md:w-[560px] md:h-[560px]"
        />
      </div>
      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />
      <div className="flex flex-col gap-3 z-10 pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Transforming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-base text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eaque eligendi ut necessitatibus sequi explicabo incidunt dicta qui
          quam labore beatae, corrupti libero officiis nam ipsam laudantium,
          assumenda quo veniam.
        </p>

        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/rounded-text.png"
            alt="project"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
