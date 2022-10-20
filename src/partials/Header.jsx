import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full bg-gray-200 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}

          {/* Site navigation */}
          <div className="navbar bg-gray-200 rounded-lg flex-auto">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabindex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52">
      
      <li tabindex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-gray-200">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>

        <li tabindex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-gray-200">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>

        <li tabindex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-gray-200">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>

        <li tabindex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-gray-200">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>

        <li tabindex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-gray-200">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li></ul>
    </div>
    <Link to="/" className="block w-full h-full" aria-label="İnönü">
              <img className="w-auto" src="./logo.png" alt="İnönü Mezun" />
            </Link>  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li tabindex={0}>
        <a>
          Koordinatörlük
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-gray-200">
          <li><a>Hakkımızda</a></li>
          <li><a>Yönetim</a></li>
          <li><a>Vizyon</a></li>
          <li><a>Misyon</a></li>
          <li><a>Organizasyon Şeması</a></li>

        </ul>
      </li>
      <li tabindex={0}>
        <a>
          Mezun Portalı
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-gray-200">
          <li><a>Mezun Bilgi Sistemi</a></li>
          <li><a>Mezun Akademi</a></li>
          <li><a>Mezun Platformu</a></li>
          <li><a>İş ve Staj</a></li>

        </ul>
      </li>

      <li tabindex={0}>
        <a>
          Hizmetler
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-gray-200">
          <li><a>Girişimcilik Merkezi</a></li>
          <li><a>Mezun Belge Talep</a></li>
          <li><a>Mezun Kimlik Kartı</a></li>
          <li><a>Kariyer Destek</a></li>
          <li><a>Sosyal Tesisler</a></li>
          <li><a>Teknokent</a></li>

        </ul>
      </li>
      <li tabindex={0}>
        <a>
          İNU Vakfı
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-gray-200">
          <li><a>Hakkında</a>
          </li>
          <li><a>Bağış Yap</a></li>
        </ul>
      </li>    </ul>
  </div>
  <div className="navbar-end flex space-x-4 xs: text-xs sm:text-xs md:text-sm">
    <a href="/" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-3 rounded">Kayıt Ol</a>
    <a href="/" className="bg-amber-500  hover:bg-amber-600 text-white font-bold py-2 px-3 rounded">Giriş Yap</a>

  </div>
</div>

        </div>
      </div>
    </header>
  );
}

export default Header;
