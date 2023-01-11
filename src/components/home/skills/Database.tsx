import React from 'react';
import MONGODB from '../assets/MONGODB.svg';
import MYSQL from '../assets/MYSQL.svg';
import MARIADB from '../assets/MARIADB.svg';
import POSTGRESQL from '../assets/POSTGRESQL.svg';
import SkillCard from './SkillCard';

export default function Database() {
  return (
    <SkillCard title='DATABASE'>
      <div className='flex justify-around w-full items-center'>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <MONGODB width={60} height={60} />
          <small>MONGODB</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <MYSQL width={60} height={60} />
          <small>MYSQL</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <MARIADB width={60} height={60} />
          <small>MARIADB</small>
        </div>
        <div className='flex flex-col justify-center items-center hover:scale-110 duration-150'>
          <POSTGRESQL width={60} height={60} />
          <small>POSTGRESQL</small>
        </div>
      </div>
    </SkillCard>
  );
}
