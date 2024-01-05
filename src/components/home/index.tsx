import React, {useCallback, useEffect, useRef, useState} from 'react';
import About from './about';
import Project from './project';
import Introduce from './introduce';
import Skills from './skills';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Cursor from 'components/common/Cursor';

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
      name: 'project',
    },
  ];
  return (
    <>
      <Cursor />

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
          <Project />
        </div>
      </main>

      <Footer />
    </>
  );
}
