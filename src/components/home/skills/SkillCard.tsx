import {skills} from 'constants/skills';
import useScrollEvent from 'hooks/useScrollEvent';
import React, {useEffect, useRef, useState} from 'react';
import styles from './card.module.scss';

export default function SkillCard({title}: {title: string}) {
  const {ref, isVisible} = useScrollEvent();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-4 font-bold w-80 min-w-full ${styles['your-card']} ${
        isVisible ? styles.visible : ''
      }`}
    >
      <div className='grid grid-cols-3 gap-y-5 w-full items-center'>
        {skills
          .filter((skill) => skill.type === title)
          .map((skill) => (
            <div
              key={skill.title}
              className='flex flex-col items-center hover:scale-110 duration-150'
            >
              <skill.icon width={60} height={60} />
              <small>{skill.title}</small>
            </div>
          ))}
      </div>
    </div>
  );
}
