import React, {useRef} from 'react';

import Skills from 'components/home/skills';
import About from 'components/home/about';
import Project from 'components/home/project';
import Introduce from 'components/home/introduce';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Career from 'components/home/career';

export default function Home() {
  const menuRefs = [
    {
      ref: useRef(null),
      name: 'header',
    },
    {
      ref: useRef(null),
      name: 'about',
    },
    {
      ref: useRef(null),
      name: 'skills',
    },
    {
      ref: useRef(null),
      name: 'career',
    },
    {
      ref: useRef(null),
      name: 'project',
    },
  ];
  return (
    <>
      <div ref={menuRefs[0].ref}>
        <Header menuRefs={menuRefs} />
      </div>

      <main>
        <Introduce />
        <div ref={menuRefs[1].ref}>
          <About />
        </div>
        <div ref={menuRefs[2].ref}>
          <Skills />
        </div>
        <div ref={menuRefs[3].ref}>
          <Career />
        </div>
        <div ref={menuRefs[4].ref}>
          <Project />
        </div>
      </main>

      <Footer />
    </>
  );
}
