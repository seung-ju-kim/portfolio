import {useCallback, useEffect, useRef, useState} from 'react';

const useCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
  const [startPosition, setStartPosition] = useState({x: 0, y: 0});
  const cursorRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      // 마우스 이동 시 커서 위치 업데이트
      setCursorPosition({x: e.clientX, y: e.clientY});
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
      cursorRef.current.style.display = '';
    },
    [cursorPosition]
  );
  useEffect(() => {
    // 페이지 로딩 시 이벤트 리스너 등록
    window.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const frame = useCallback(() => {
    requestAnimationFrame(frame);

    setStartPosition({
      x: lerp(startPosition.x, cursorPosition.x, 0.3),
      y: lerp(startPosition.y, cursorPosition.y, 0.3),
    });

    cursorRef.current.style.transform = `translate(${startPosition.x}px, ${startPosition.y}px)`;
  }, [cursorPosition, startPosition]);

  useEffect(() => {
    requestAnimationFrame(frame);
  }, [frame]);

  const lerp = (s, e, a) => {
    return s + (e - s) * a;
  };

  return {cursorRef};
};

export default useCursor;
