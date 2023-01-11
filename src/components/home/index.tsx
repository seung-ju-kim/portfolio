import React from 'react';
import About from './about';
import Project from './project';
import Introduce from './introduce';
import Skills from './skills';
import useMoveScroll from 'hooks/useMoveScroll';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

export default function Home() {
  const moveTabs = {
    0: useMoveScroll('HOME'),
    1: useMoveScroll('ABOUT ME'),
    2: useMoveScroll('SKILLS'),
    3: useMoveScroll('PROJECT'),
    length: 4,
  };

  return (
    <>
      <Header moveTabs={Array.from(moveTabs)} />
      <main>
        <Introduce moveTabs={Array.from(moveTabs)} />
        <About moveTabs={Array.from(moveTabs)} />
        <Skills moveTabs={Array.from(moveTabs)} />
        <Project />
      </main>
      <Footer />
    </>
  );
}
