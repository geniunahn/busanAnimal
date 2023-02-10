import React from "react";
import "./style.css";

export default function Info({
  animals,
  pageNo,
  maxPages,
  totalCount,
  prevPage,
  nextPage,
}) {
  //   console.log(animals);

  return (
    <>
      <div className="wrap">
        <div className="width_wrap">
          <div className="info_wrap_1">
            <h1>
              부산광역시 <br /> 동물구조 현황
            </h1>
            <p>
              Page: {pageNo} / {maxPages}
            </p>
            <p>{totalCount}건 등록</p>
            <div className="button_wrap">
              <button onClick={prevPage}>이전 페이지</button>
              <button onClick={nextPage}>다음 페이지</button>
            </div>
          </div>
        </div>
      </div>
      {animals.map((animals, key) => {
        return (
          <div className="wrap" key={key}>
            <div className="width_wrap">
              <div className="info_wrap_2">
                <div className="img_wrap">
                  <img src={animals.ty3Picture} alt="img" />
                </div>
                <p>구조정보 : {animals.cn} </p>
                <p>성별 : {animals.ty3Sex}</p>
                <p>품종 : {animals.ty3Kind}</p>
                <p>포획장소 : {animals.ty3Place}</p>
                <p>상태 : {animals.ty3Process}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="wrap">
        <div className="width_wrap">
          <div className="info_wrap_1">
            <p>
              Page: {pageNo} / {maxPages}
            </p>
            <p>{totalCount}건 등록</p>
            <div className="button_wrap">
              <button onClick={prevPage}>이전 페이지</button>
              <button onClick={nextPage}>다음 페이지</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
