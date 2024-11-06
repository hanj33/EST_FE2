import { useEffect, useState } from "react";

const useIsBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        // 뷰포트의 높이 + 스크롤한 길이 >= 화면에 렌더링된 페이지의 전체 높이
        // = 스크롤을 전부 했다(바닥에 닿았다)

        window.innerHeight + document.documentElement.scrollTop + 300 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return isBottom;
};

export default useIsBottom;
