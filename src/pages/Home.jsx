import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <div class="flex flex-col w-full">
  <div class="divider"></div> 
  <div class="divider" className='text-2xl body-font font-futura text-center'> Mezun Sayımız</div> 
  <div class="divider"></div> 

</div>
<section class="bg-cyan-700">
    <div class="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-3 py-8 text-center ">
        <div>
            <h5 class="font-bold text-white sm:text-base md:text-base lg:text-2xl">
                <span class="inline text-white">
                    21.709
                </span>
                <span class="text-amber-500">
                    +
                </span>
            </h5>
            <p class="text-indigo-100 tracking-wide text-sm font-medium uppercase">
Önlisans Mezunu            </p>
        </div>
        <div>
            <h5 class="font-bold text-white sm:text-base md:text-base lg:text-2xl">
                <span class="inline text-white">
                    130.000
                </span>
                <span class="text-amber-500">
                    +
                </span>
            </h5>
            <p class="text-indigo-100 tracking-wide text-sm font-medium uppercase">
Lisans Mezunu            </p>
        </div>
        
        <div>
            <h5 class="font-bold text-white sm:text-base md:text-base lg:text-2xl">
                <span class="inline text-white">
                    18.000
                </span>
                <span class="text-amber-500">
                    +
                </span>
            </h5>
            <p class="text-indigo-100 tracking-wide text-sm font-medium uppercase">
Lisansüstü Mezunu            </p>
        </div>
    </div>
    <div class="w-52 mx-auto mt-4 p-4 flex">
        <button type="button" class="py-2 px-2  bg-amber-500 focus:ring-indigo-500 hover:bg-gray-800 focus:ring-offset-indigo-200 text-white text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Sende Katıl
        </button>
    </div>
</section>
<div class="flex flex-col w-full">
  <div class="divider"></div> 
  <div class="divider" className='text-2xl body-font font-futura text-center'>Mezunlarımızdan Haberler</div> 
  <div class="divider"></div> 

</div>
        <FeaturesHome />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;