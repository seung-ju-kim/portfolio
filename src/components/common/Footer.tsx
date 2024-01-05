import React from 'react';

import {GITHUB_URL, INSTAGRAM_URL, VELOG_URL} from 'constants/routes';
import Github from './assets/github.svg';
import Instagram from './assets/instagram.svg';
import Velog from './assets/velog.svg';

export default function Footer() {
  return (
    <footer className='py-10 bg-[#212529]'>
      <nav className='flex flex-col justify-center itmes-center text-white'>
        <div className='flex justify-center items-center'>
          <a href={GITHUB_URL}>
            <Github width={50} height={50} fill='white' className='mx-3' />
          </a>
          {/* <a href={INSTAGRAM_URL}>
            <Instagram width={50} height={50} fill='white' className='mx-3' />
          </a> */}
          {/* 
          <a href={VELOG_URL}>
            <Velog width={50} height={50} fill='white' className='mx-3' />
          </a>
          */}
        </div>
        <div className='flex justify-center items-center mt-3'>
          <span>© 2022. Seung Ju Kim. All rights reserved.</span>
        </div>
      </nav>
    </footer>
  );
}
