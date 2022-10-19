function HeroHome() {
  return (
    <section className="relative lg:mx-12 lg:mt-20 sm:mx-0 sm:mt-24 md: mt-24 lg:flex lg:items-center lg:w-auto grid sm:grid-flow-col md:grid-flow-row-dense lg:grid-flow-row-dense xl:grid-flow-col" >      
  <div id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark relative rounded-lg lg:mt-4 lg: mb-4"
  data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://admin.inonu.edu.tr/servlet/image/ModuleCarousel/744/02-11-2020_030914985_S3.JPG"
        class="block w-full"
        alt="Motorbike Smoke"
      />
      <div class="carousel-caption hidden md:flex absolute py-1 mr-8 rounded-lg text-left ">
        <h5 class="text-white text-3xl mb-4 ml-0 text-left bg-cyan-800 opacity-90  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">2022 Mezuniyet Töreni</h5>
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src="https://admin.inonu.edu.tr/servlet/image/ModuleCarousel/3019/08-07-2022_085903165_S3.jpeg"
        class="block w-full"
        alt="Mountaintop"
      />
      <div class="carousel-caption hidden md:flex absolute py-1 mx-4 mr-8 rounded-lg ">
        <h5 class="text-white mb-4 ml-0 text-left bg-cyan-800 opacity-90  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Mezuniyet Töreni - Ödül</h5>
      </div>
    </div>

    <div class="carousel-item relative float-left w-full">
      <img
        src="https://admin.inonu.edu.tr/servlet/image/ModuleCarousel/3014/06-07-2022_113843744_S3.jpeg"
        class="block w-full"
        alt="Woman Reading a Book"
      />
      <div class="carousel-caption hidden md:flex absolute mr-8 py-1  ">
        <h4 class="text-white text-3xl mb-4 ml-0 text-left bg-cyan-800 opacity-90 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Ödül Töreni</h4>
      </div>
    </div>
  </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat bg-black" aria-hidden="true"></span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat bg-black" aria-hidden="true"></span>
  </button>
</div>
<div class="bg-transparent col-span-auto w-full"><div class="flex justify-center w-full ">
  <div class="block p-6 rounded-lg lg:shadow-xl focus:shadow-outline bg-gray-200 max-w-sm ">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Mezun Kartı Talebi</h5>
    <p class="text-gray-700 text-base mb-4">
      Mezun kartınızı almak ve ayrıcalıklardan faydalanmak için hemen başvurun.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Başvur!</button>
  </div>
</div>
<br></br><div class="flex justify-center w-full">
  <div class="block p-6 rounded-lg lg:shadow-xl focus:shadow-outline bg-gray-200 max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2"> İNÜ Vakfına Bağış</h5>
    <p class="text-gray-700 text-base mb-4">
      Mezun öğrencilerimize destek olmak ister misiniz?
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800   hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"> Bağış Yap!</button>
  </div>
</div></div>
    </section>
    
  );
}

export default HeroHome;