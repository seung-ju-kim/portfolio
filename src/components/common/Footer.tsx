import React from 'react';

import {GITHUB_URL} from 'constants/routes';
import Github from 'components/common/assets/github.svg';

export default function Footer() {
  return (
    <footer className='py-10 bg-[#212529]'>
      <nav className='flex flex-col justify-center itmes-center text-white'>
        <div className='flex justify-center items-center'>
          <a href={GITHUB_URL}>
            <Github width={50} height={50} fill='white' className='mx-3' />
          </a>
        </div>

        <div className='flex justify-center items-center mt-3'>
          <span>© 2022. Seung Ju Kim. All rights reserved.</span>
        </div>
      </nav>
    </footer>
  );
}
