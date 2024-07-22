import Link from "next/link";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img
          src={"/assets/logo.svg"}
          alt='sumz_logo'
          className='w-40 object-contain'
        />

        <div className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-500 group-hover:from-amber-500 group-hover:via-orange-600 group-hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
          <Link
            href={"https://mcf-digital.com"}
            target='_blank'
            className=' hover:text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'
          >
            Crea la tua app{" "}
            <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent group-hover:text-white text-lg font-bold'>
              AI
            </span>
          </Link>
        </div>
      </nav>

      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Riassumi un articolo con l'
        <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent '>
          Intelligenza Artificiale
        </span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
        Semplifica la tua lettura con Riassunto
        <span className='text-[#ef4136] font-bold'>AI</span>, un riepilogo di
        articoli open source che trasforma articoli lunghi in traduzioni di
        riepiloghi chiare e concise
      </h2>
    </header>
  );
};

export default Hero;
