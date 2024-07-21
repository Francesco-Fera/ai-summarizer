import Demo from "@/components/Demo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className='w-screen min-h-screen fixed flex justify-center pt-32 pb-40 px-6 pointer-events-none before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20 before:bg-[radial-gradient(circle,_rgba(2,_0,_36,_0)_0%,_#fafafa_100%)] after:w-full after:h-full after:top-0 after:content-[""] after:z-10 after:bg-[url("/assets/grid.svg")] after:opacity-40 backdrop-invert	'>
        <div className='absolute w-full max-w-lg top-20 opacity-15 z-3 h-fit-content h-full bg-[radial-gradient(at_27%_37%,_hsla(215,_98%,_61%,_1)_0px,_transparent_0%),_radial-gradient(at_97%_21%,_hsla(125,_98%,_72%,_1)_0px,_transparent_50%),_radial-gradient(at_52%_99%,_hsla(354,_98%,_61%,_1)_0px,_transparent_50%),_radial-gradient(at_10%_29%,_hsla(256,_96%,_67%,_1)_0px,_transparent_50%),_radial-gradient(at_97%_96%,_hsla(38,_60%,_74%,_1)_0px,_transparent_50%),_radial-gradient(at_33%_50%,_hsla(222,_67%,_73%,_1)_0px,_transparent_50%),_radial-gradient(at_79%_53%,_hsla(343,_68%,_79%,_1)_0px,_transparent_50%)] blur-[100px] saturate-[150%]' />
      </div>

      <div className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
}
