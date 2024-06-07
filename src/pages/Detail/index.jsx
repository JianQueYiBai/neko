import "./index.css";
import ClaimedCard from "@components/ClaimedCard/index";
import BoxCard from "@components/BoxCard/index";
import InfoCard from "@components/InfoCard/index";
import Table from "@components/Table/index";


import PCHeader from "@components/PCHeader/index";
import logoText from "@assets/text-logo.png";
import play from "@assets/play.png";
import { Col, Row } from "antd";

export default function Detail() {
  return (
    <div className="detail padding-top-80 padding-bottom-80">
      <Row >
        <Col className="gutter-row" xs={{ flex: "100%" }} sm={{ flex: "25%" }}>
          <BoxCard title="Adept’s Chest" buttonText="Open" desc="Stake at least one Level 13 Neko NFT to obtain an Adept's Chest." />
        </Col>
        <Col className="gutter-row" xs={{ flex: "100%" }} sm={{ flex: "75%" }}>
          <ClaimedCard />
        </Col>
        
        <Col className="gutter-row" xs={{ flex: "100%" }} sm={{ flex: "25%" }}>
          <BoxCard type='gem' title="58694 NKO" subTitle="Earnings" buttonText='Claim' />
        </Col>

      </Row>
      <Row gutter={{ xs: 0, sm: 16 }} style={{marginTop:'16px', marginBottom:'16px'}}>
        <Col xs={24}>
          <InfoCard />
        </Col>
      </Row>

      <Row gutter={{ xs: 0, sm: 16 }}>
        <Table/>
      </Row>
    </div>
  );
}
