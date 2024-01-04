import React, {useCallback, useEffect, useRef, useState} from 'react';
import About from './about';
import Project from './project';
import Introduce from './introduce';
import Skills from './skills';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Cursor from 'components/common/Cursor';

export default function Home() {
  const menuRefs = [useRef(null), useRef(null), useRef(null)];
  return (
    <>
      <Cursor />
      <Header menuRefs={menuRefs} />

      <main>
        <Introduce />
        <div ref={menuRefs[0]}>
          <About />
        </div>
        <div ref={menuRefs[1]}>
          <Skills />
        </div>
        <div ref={menuRefs[2]}>
          <Project />
        </div>
      </main>

      <Footer />
    </>
  );
}
