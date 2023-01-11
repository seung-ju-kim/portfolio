import React from 'react';
import PYTHON from '../assets/PYTHON.svg';
import FIREBASE from '../assets/FIREBASE.svg';
import NODE from '../assets/NODE.svg';
import SkillCard from './SkillCard';

export default function Backend() {
  return (
    <SkillCard title='BACKEND'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <PYTHON width={60} height={60} />
          <small>PYTHON</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <FIREBASE width={60} height={60} />
          <small>FIREBASE</small>
        </div>
        <div className='flex flex-col items-center hover:scale-110 duration-150'>
          <NODE width={60} height={60} />
          <small>NODE</small>
        </div>
      </div>
    </SkillCard>
  );
}
