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
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'darkgray', // 커서의 색상을 원하는 대로 변경
        zIndex: 100,
        pointerEvents: 'none',
      }}
    ></div>
  );
}
