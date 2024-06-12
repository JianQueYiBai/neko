import "./index.css";
import logo from "@assets/logo.png";
import logoText from "@assets/text-logo.png";
import x from "@assets/x.png";
import t1 from "@assets/ti1.png";
import t2 from "@assets/ti2.png";
import t3 from "@assets/ti3.png";
import t4 from "@assets/ti4.png";

import { useNavigate, useLocation } from "react-router-dom";

export default function PCHeader({ text, type, size }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const notHomePage = pathname !== "/";
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
      {notHomePage ? (
        <>
        <div>
          <img src={t1} width={24} alt="" />
          <img style={{ margin: "0 40px" }} src={t2} width={24} alt="" />
          <img style={{ margin: "0 40px 0 0" }} src={t3} width={24} alt="" />
          <img src={t4} width={24} alt="" />
        </div>
        <div>
          <div className="header-btn" onClick={()=>navigate('/detail')}>Connect Wallet</div>
        </div>
        </>
      ):(
        <div>
        <img src={x} width={48} alt="" />
      </div>
      )}

    </div>
  );
}
