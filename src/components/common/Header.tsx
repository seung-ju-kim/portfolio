import React, {useEffect, useMemo, useState} from 'react';
import {throttle} from 'lodash';

import MenuButton from './assets/button_hamburger.svg';
import useMoveScroll from 'hooks/useMoveScroll';

export default function Header({
  menuRefs,
}: {
  menuRefs: {
    ref: React.MutableRefObject<any>;
    name: string;
  }[];
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const Tabs = ['About', 'Skills', 'Career', 'Project'];
  const {scrollToTarget} = useMoveScroll(menuRefs);

  const handleMenuClick = (index) => {
    setNavbar(false);
    scrollToTarget(index);
  };

  const updateScroll = useMemo(
    () =>
      throttle(() => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });

  return (
    <header
      className={`fixed w-full z-20 ease-in-out duration-500 delay-100 p-8 md:flex md:justify-between  ${
        scrollPosition < 100 ? 'text-gray-300' : 'bg-white text-gray-600'
      }`}
    >
      <div className='flex justify-between'>
        {/* Logo */}
        <button onClick={() => scrollToTarget(0)}>
          <h1
            className={`text-3xl font-bold ${
              scrollPosition < 100 ? 'hover:text-white' : 'hover:text-black'
            }`}
          >
            SEUNGJU
          </h1>
        </button>

        {/* hamburger */}
        <div className='md:hidden'>
          <button className='rounded' onClick={() => setNavbar(!navbar)}>
            <MenuButton width={'2rem'} height={'2rem'} />
          </button>
        </div>
      </div>
      {/* navbar */}
      <nav
        className={`flex flex-col items-end gap-10 pb-3 mt-3 md:flex md:flex-row md:my-auto md:pb-0  ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        {Tabs.map((nav, index) => (
          <button
            key={nav}
            onClick={() => handleMenuClick(index + 1)}
            className={`flex items-center gap-x-3 ${
              scrollPosition < 100 ? ' hover:text-white' : 'hover:text-black'
            } text-2xl`}
          >
            <span>{nav}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
