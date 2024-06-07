import "./index.css";
import purpleGem from "@assets/purple-gem.png";
import blueGem from "@assets/blue-gem.png";
import greenGem from "@assets/green-gem.png";

import { Col, Row, Flex } from "antd";

const gemMap = {
  purple: purpleGem,
  blue: blueGem,
  green: greenGem,
};

export default function GemItem({ color, title, descLeft, descRight }) {
  return (
    <Flex className="gem-item">
      <img src={gemMap[color]} width={48} alt="" />
      <div style={{marginLeft:'16px'}}>
        <div className="gem-title">{title}</div>
        <div>
          <div className="gem-desc-left">{descLeft}</div>
          {descRight && <div className="gem-desc-right">/{descRight}</div>}
        </div>
      </div>
    </Flex>
  );
}