import React from "react";
import "./style.css";

export default function Info({ animals }) {
  //   console.log(animals);

  return (
    <>
      {animals.map((animals, key) => {
        return (
          <div className="wrap" key={key}>
            <div className="width_wrap">
              <div className="info_wrap">
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
    </>
  );
}
