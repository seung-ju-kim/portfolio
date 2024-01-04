import React from 'react';

import useCursor from 'hooks/useCursor';

export default function Cursor() {
  const {cursorRef} = useCursor();

  return (
    <div
      ref={cursorRef}
      style={{
        display: 'none',
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'black', // 커서의 색상을 원하는 대로 변경
        zIndex: 100,
        pointerEvents: 'none',
      }}
    ></div>
  );
}
