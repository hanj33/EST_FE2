import useIsBottom from "./Hook/useIsBottom";
import ImgList from "./Components/ImgList";
import { useEffect, useRef, useState } from "react";
import Loading from "./Components/Loading";

function App() {
  // 이미지 데이터 관리
  const [imageList, setImageList] = useState([]);

  // 페이지 데이터를 관리
  const [pageToFetch, setPageToFetch] = useState(1);
  //   const pageToFetch = useRef(1);

  const isBottom = useIsBottom();

  // 로딩 중 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isBottom) {
      setPageToFetch((prevPageToFetch) => {
        return prevPageToFetch + 1;
      });

      //       pageToFetch.current = pageToFetch.current + 1;
      //       pageToFetch.current += 1;
    }
  }, [isBottom]);

  const fetchImages = async (pageNum) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=5`
      );

      if (!response.ok) {
        throw new Error("이미지 다운로드 중 문제가 발생하였습니다");
      }

      const data = await response.json();

      setImageList((prevImageList) => {
        return [...prevImageList, ...data];
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(pageToFetch);
    //     fetchImages(pageToFetch.current);
  }, [pageToFetch]);
  //   }, [pageToFetch.current]);

  return (
    <div>
      <ImgList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
