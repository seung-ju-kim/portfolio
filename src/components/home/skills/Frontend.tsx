import React from 'react';
import HTML from '../assets/HTML.svg';
import CSS from '../assets/CSS.svg';
import JS from '../assets/JS.svg';
import TS from '../assets/TS.svg';
import SASS from '../assets/SASS.svg';
import REACT from '../assets/REACT.svg';
import NEXT from '../assets/NEXT.svg';
import RECOIL from '../assets/RECOIL.svg';
import BOOTSTRAP from '../assets/BOOTSTRAP.svg';
import MUI from '../assets/MUI.svg';
import SkillCard from './SkillCard';

export default function Frontend() {
  return (
    <SkillCard title='FRONTEND'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <HTML width={60} height={60} />
          <small>HTML5</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <CSS width={60} height={60} />
          <small>CSS3</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <JS width={60} height={60} />
          <small>JS</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <TS width={60} height={60} />
          <small>TS</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <SASS width={60} height={60} />
          <small>SASS</small>
        </div>
      </div>

      <div className='flex justify-around w-full itmes-center my-3'>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <REACT width={60} height={60} />
          <small>REACT</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <NEXT width={60} height={60} />
          <small>NEXT</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <RECOIL width={60} height={60} />
          <small>RECOIL</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <BOOTSTRAP width={60} height={60} />
          <small>BOOTSTRAP</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <MUI width={60} height={60} />
          <small>MUI</small>
        </div>
      </div>
    </SkillCard>
  );
}
