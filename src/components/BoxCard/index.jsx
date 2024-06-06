import "./index.css";
import box from "@assets/box1.png";
import { Col, Row } from "antd";
import Button from "@components/Button/index";
import BoxBorder from "@components/BoxBorder/index";

export default function BoxCard({ title, desc }) {
  return (
    <div className="box-card">
      <BoxBorder />
      <Row justify="center" gutter>
        <Col xs={24} className="text-center">
          <img src={box} width={56} />
        </Col>

        <Col
          xs={24}
          className="card-sub-title text-center"
          style={{ marginTop: "24px" }}
        >
          {title}
        </Col>

        {desc && (
          <Col
            xs={24}
            className="card-sub-text text-center"
            style={{ marginTop: "4px" }}
          >
            {desc}
          </Col>
        )}

        <Col xs={24} className="text-center" style={{ marginTop: "24px" }}>
          <Button text="Open" color="yellow" longness="short" />
        </Col>
      </Row>
    </div>
  );
}
