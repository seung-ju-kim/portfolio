import {useEffect, useRef, useState} from 'react';

const useScrollEvent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const node = ref.current;

      if (node) {
        const rect = node.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.7; // 뷰포트의 50% 이상이 보이면 true

        setIsVisible(isVisible);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 마운트 해제되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {ref, isVisible};
};

export default useScrollEvent;
