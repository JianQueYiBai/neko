import "./index.css";
import logo from "@assets/logo.png";
import logoText from "@assets/text-logo.png";
import x from "@assets/x.png";
import t1 from "@assets/ti1.png";
import t2 from "@assets/ti2.png";
import t3 from "@assets/ti3.png";
import t4 from "@assets/ti4.png";
import t5 from "@assets/ti5.png";
import t6 from "@assets/ti6.png";

import blue from "@assets/blue.png";
import user from "@assets/user.png";
import { Row, Col, Flex } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export default function PCHeader({ text, type, size }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("pathname: ", pathname);
  const homePage = pathname === "/";
  const assetsPage = pathname === "/assets";
  console.log("assetsPage: ", assetsPage);
  const detailPage = pathname.includes("detail");
  console.log("detailPage: ", detailPage);

  return (
    <div className="pcHeader flex justify-between align-center">
      <div
        className="flex justify-between align-center"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img src={logo} width={48} alt="" />
        <img src={logoText} width={116} alt="" style={{ marginLeft: "12px" }} />
      </div>
      {homePage && (
        <div>
          <img src={x} width={48} alt="" />
        </div>
      )}
      {!homePage && (
        <>
          <div>
            <img src={t1} width={24} alt="" />
            <img style={{ margin: "0 40px" }} src={t2} width={24} alt="" />
            <img style={{ margin: "0 40px 0 0" }} src={t3} width={24} alt="" />
            <img src={t4} width={24} alt="" />
          </div>
          {detailPage && (
            <Row gutter={16}>
              <Col className="header-btn2">
                <Flex align="center" justify="space-between">
                  <img src={t5} width={24} style={{marginRight:'6px'}} alt="" />
                  <span>MY ASSETS</span>
                </Flex>
              </Col>
              <Col className="header-btn2" style={{ margin: "0 12px" }}>
                <Flex align="center" justify="space-between">
                  <Flex align="center">
                    <img src={blue} width={24} style={{marginRight:'6px'}} alt="" />
                    <span>485</span>
                  </Flex>
                  <img src={t6} width={20} style={{marginLeft:'24px'}} alt="" />
                </Flex>
              </Col>
              <Col className="header-btn2">
                <Flex align="center" justify="center" style={{width:'56px'}}>
                  <img src={user} width={16} height={20} alt="" />
                </Flex>
              </Col>
            </Row>
          )}
          {assetsPage && (
            <div>
              <div className="header-btn" onClick={() => navigate("/detail")}>
                Connect Wallet
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
