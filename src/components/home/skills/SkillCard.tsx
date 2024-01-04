import useScrollEvent from 'hooks/useScrollEvent';
import React, {useEffect, useRef, useState} from 'react';
import styles from 'styles/card.module.scss';

export default function SkillCard({children, title}: {children: React.ReactNode; title: string}) {
  const {ref, isVisible} = useScrollEvent();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-4 font-bold w-80 min-w-full ${styles['your-card']} ${
        isVisible ? styles.visible : ''
      }`}
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      }}
    >
      <div>{title}</div>
      <div className='flex items-center flex-col'>{children}</div>
    </div>
  );
}
