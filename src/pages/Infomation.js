import React from "react";
import { useState, useEffect } from "react";
import Info from "../components/Info";
import Nav from "../components/Nav";

export default function Information() {
  const [animals, setAnimals] = useState([]); // 동물 데이터
  const [totalCount, setTotalCount] = useState(0); // 총 글수
  const [pageNo, setPageNo] = useState(1); // 페이지번호
  const [maxPages, setMaxPages] = useState(0); // 마지막 페이지
  const [rows, setRows] = useState(10); // 화면당 글수

  // 사이트에 나와 있는 일반 인증키를 아래에 넣는다.
  const API_KEY =
    "zdhZoZCp8V705sFnzicgZSCSDIvjGhcvYbfLpAmAWkmAEqiWoFiZcQjZEHQKxPC8ZmBy%2FTia%2B2UbuYU8kKtk7g%3D%3D";
  // docx 문서의 요청 메시지에서 '인증키' 부분에 일반 인증키 변수를 넣는다. 그리고 json 타입으로 데이터를 받기 위해 마지막에 resultType=json 코드를 추가해 적는다.
  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&numOfRows=${rows}&pageNo=${pageNo}&resultType=json`;

  const getAnimalData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.getPetAnimalInfo.body.items.item);
        const info = data.getPetAnimalInfo.body.items.item;
        // 데이터를 state에 저장
        setAnimals(info);
        // 총 글수
        setTotalCount(data.getPetAnimalInfo.body.totalCount);
        // 마지막 페이지 (총게시물 / 행수)
        setMaxPages(Math.ceil(totalCount / rows));
      })
      .catch(() => {
        console.log("데이터 요청 에러");
      });
  };

  // 이전 페이지
  const nextPage = () => {
    if (pageNo < maxPages) setPageNo(pageNo + 1);
  };

  // 다음 페이지
  const prevPage = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  useEffect(() => {
    getAnimalData();
  }, [pageNo, totalCount]);

  return (
    <div className="App">
      <Nav />
      {animals ? (
        <Info
          animals={animals}
          pageNo={pageNo}
          maxPages={maxPages}
          totalCount={totalCount}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      ) : (
        <p>"로딩중..."</p>
      )}
    </div>
  );
}
