const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img
          src={"/assets/logo.svg"}
          alt='sumz_logo'
          className='w-28 object-contain'
        />

        <button
        //   type='button'
        //   onClick={() => window.open("/#", "_blank")}
        //   className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Riassumi un articolo con l'
        <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent '>
          Intelligenza Artificiale
        </span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
        Semplifica la tua lettura con Summize, un riepilogo di articoli open
        source che trasforma articoli lunghi in traduzioni di riepiloghi chiare
        e concise
      </h2>
    </header>
  );
};

export default Hero;
