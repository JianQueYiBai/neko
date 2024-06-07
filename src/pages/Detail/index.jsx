import "./index.css";
import ClaimedCard from "@components/ClaimedCard/index";
import BoxCard from "@components/BoxCard/index";
import Button from "@components/Button/index";
import EmptyCard from "@components/EmptyCard/index";
import GemItem from "@components/GemItem/index";
import BoxBorder from "@components/BoxBorder/index";
import RadioButton from "@components/RadioButton/index";
import exclamation from "@assets/exclamation.png";
import copy from "@assets/copy.png";
import card1 from "@assets/card1.png";
import card2 from "@assets/card2.png";
import card3 from "@assets/card3.png";
import card4 from "@assets/card4.png";
import card5 from "@assets/card5.png";
import arrowLeft from "@assets/arrow-left.png";
import { useAppStore } from "@stores/index";

import { Col, Row, Flex } from "antd";

export default function Detail() {
  const isMobile = useAppStore().device === "mobile";
  return (
    <div className="detail padding-top-80 padding-bottom-80">
      <Flex className="back-btn" align="center">
        <img
          src={arrowLeft}
          width={16}
          alt=""
          style={{ marginRight: "12px" }}
        />
        My Assets
      </Flex>
      <Row gutter={{ xs: 0, sm: 16 }}>
        <Col xs={24} sm={6} className="margin-top-16">
          <BoxCard
            title="Adept’s Chest"
            buttonText="Open"
            desc="Stake at least one Level 13 Neko NFT to obtain an Adept's Chest."
          />
        </Col>
        <Col xs={24} sm={18} className="margin-top-16">
          <ClaimedCard />
        </Col>
      </Row>
      <Row gutter={{ xs: 0, sm: 16 }}>
        <Col xs={24} sm={6} className="margin-top-16">
          <BoxCard
            type="gem"
            title="58694 NKO"
            subTitle="Earnings"
            buttonText="Claim"
          />
        </Col>
        <Col xs={24} sm={9} className="margin-top-16">
          <EmptyCard>
            <Row>
              <Col xs={24}>
                <Flex justify="space-between">
                  <div>
                    <Flex align="center" className="card-little-title">
                      Ascend
                      <img
                        width={14}
                        style={{ marginLeft: "8px" }}
                        src={exclamation}
                        alt=""
                      />
                    </Flex>
                  </div>
                  <div className="card-little-title">0%</div>
                </Flex>
              </Col>
              <Col xs={24} style={{ marginTop: "8px" }}>
                <div className="grey-text-little">Global mana bonus</div>
              </Col>
            </Row>
            <Row style={{ flex: 1 }}>
              <Col xs={12} style={{ marginTop: "24px" }}>
                <GemItem
                  color="purple"
                  title="Prism"
                  descLeft="x1245"
                  descRight="9"
                />
              </Col>
              <Col xs={12} style={{ marginTop: "24px" }}>
                <GemItem
                  color="blue"
                  title="Neko"
                  descLeft="x1245"
                  descRight="9"
                />
              </Col>
              <Col
                xs={24}
                className="text-center"
                style={{ alignSelf: "flex-end", marginTop: "24px" }}
              >
                <Button text="UP TO 2%" color="yellow" longness="short" />
              </Col>
            </Row>
          </EmptyCard>
        </Col>
        <Col xs={24} sm={9} className="margin-top-16">
          <EmptyCard>
            <Row>
              <Col xs={24}>
                <div className="card-little-title">Referral Rewards (0)</div>
              </Col>

              <Col xs={24} style={{ margin: "8px 0 18px" }}>
                <Flex align="center" className="blue-text">
                  neko-89765432q
                  <img
                    width={14}
                    style={{ marginLeft: "8px" }}
                    src={copy}
                    alt=""
                  />
                </Flex>
              </Col>
            </Row>
            <Flex justify="space-between" className="card-mini-title">
              <div>Claimed</div>
              <div>0</div>
            </Flex>
            <Flex justify="space-between" className="card-mini-title">
              <div>Available</div>
              <div>0</div>
            </Flex>
            <Flex justify="space-between" className="card-mini-title">
              <div>Locked</div>
              <div>0</div>
            </Flex>
            <Row style={{ flex: 1 }}>
              <Col
                xs={24}
                className="text-center"
                style={{ alignSelf: "flex-end", marginTop: "24px" }}
              >
                <Button text="Claim" color="yellow" longness="short" />
              </Col>
            </Row>
          </EmptyCard>
        </Col>
      </Row>
      <div className="cards-wrapper margin-top-16">
        <BoxBorder color="#0E222F" />
        <div className="card-title">My Neko (4/32)</div>
        <Flex
          style={{ margin: "24px 0" }}
          justify="space-between"
          align="center"
        >
          {isMobile ? (
            ""
          ) : (
            <div>
              <RadioButton text="all" active />
              <RadioButton text="LEGENDARY" />
              <RadioButton text="EPIC" />
              <RadioButton text="RARE" />
              <RadioButton text="UNCOMMON" />
              <RadioButton text="COMMON" />
            </div>
          )}

          <Flex>
            <div className="card-desc-title" style={{ marginRight: "24px" }}>
              Stake All
            </div>
            <div className="card-desc-title">UnStake All</div>
          </Flex>
        </Flex>

          <Row gutter={16}>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card1} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card2} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card3} alt="" />
                <Button text="LV UP" color="orange" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card4} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card5} alt="" />
                <Button text="UNSTAKE" color="blue" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card1} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card2} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card3} alt="" />
                <Button text="LV UP" color="orange" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card4} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card5} alt="" />
                <Button text="UNSTAKE" color="blue" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card1} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card2} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card3} alt="" />
                <Button text="LV UP" color="orange" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card4} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card5} alt="" />
                <Button text="UNSTAKE" color="blue" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card1} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card2} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card3} alt="" />
                <Button text="LV UP" color="orange" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card4} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card5} alt="" />
                <Button text="UNSTAKE" color="blue" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card1} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card2} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card3} alt="" />
                <Button text="LV UP" color="orange" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card4} alt="" />
                <Button text="Staking" color="yellow" longness="short" />
              </Flex>
            </Col>
            <Col xs={12} sm={4}>
              <Flex className="card-item" justify="center" vertical="column">
                <img src={card5} alt="" />
                <Button text="UNSTAKE" color="blue" longness="short" />
              </Flex>
            </Col>
          </Row>
      </div>
    </div>
  );
}
