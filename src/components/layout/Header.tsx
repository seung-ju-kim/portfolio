import React, {useEffect, useMemo, useState} from 'react';
import {throttle} from 'lodash';

import MenuButton from './assets/button_hamburger.svg';
import {useRouter} from 'next/router';
import useMoveScroll from 'hooks/useMoveScroll';

export default function Header({menuRefs}: {menuRefs: React.MutableRefObject<any>[]}) {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const Tabs = ['ABOUT', 'SKILLS', 'PROJECT'];
  const {scrollToTarget} = useMoveScroll(menuRefs);

  const handleMenuClick = (index) => {
    setNavbar(false);
    // router.push(`#${menu}`);
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
  });
  return (
    <header
      className={`fixed w-full z-20 ease-in-out duration-500 delay-100 p-8 md:flex md:justify-between  ${
        scrollPosition < 100 ? 'text-gray-300' : 'bg-white text-gray-600'
      }`}
    >
      <div className='flex justify-between'>
        {/* Logo */}
        <button>
          <h1
            className={`text-2xl font-bold ${
              scrollPosition < 100 ? 'hover:text-white' : 'hover:text-black'
            }`}
          >
            SEUNGJU
          </h1>
        </button>

        {/* hamburger */}
        <div className='md:hidden'>
          <button className='rounded' onClick={() => setNavbar(!navbar)}>
            <MenuButton width={'1.5rem'} height={'1.5rem'} />
          </button>
        </div>
      </div>
      {/* navbar */}
      <nav
        className={`flex flex-col items-end gap-3 pb-3 mt-3 md:flex md:flex-row md:my-auto md:pb-0  ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        {Tabs.map((nav, index) => (
          <button
            key={nav}
            onClick={() => handleMenuClick(index)}
            className={`flex items-center gap-x-3 ${
              scrollPosition < 100 ? ' hover:text-white' : 'hover:text-black'
            } text-xl`}
          >
            <span>{nav}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
