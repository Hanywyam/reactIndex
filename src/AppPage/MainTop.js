import React, { useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";
import topTgg from "./style/mainTopTgg.module.css";

// TOP 올라가는 버튼
const MainTop = () => {
  return (
    <div>
      <a href="#" className={topTgg.topTgg}>
        <IoArrowUpCircle style={{ width: 100, height: 100 }} />
      </a>
    </div>
  );
};
export default MainTop;
