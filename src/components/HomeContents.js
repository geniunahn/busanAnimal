import React from "react";
import "./style.css";

export default function Home_contents() {
  return (
    <div className="wrap">
      <div className="width_wrap">
        <div className="home_wrap">
          <h1>부산광역시 구조 반려동물 정보</h1>
          <p>
            안녕하세요. <br />
            저희는 부산광역시에서 구조된 반려동물의 정보를 제공하고 있습니다.{" "}
            <br />
            고객님께서 사랑하는 반려동물을 되찾으실 수 있도록 최선을
            다하겠습니다.
          </p>
          <div className="img_wrap">
            <img src="1.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
