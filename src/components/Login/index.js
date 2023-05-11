import React from "react";
import { Row, Col, Typography, Button } from "antd";

import firebase, { auth } from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {
  const LoginFB = () => {
    console.log("ok");
    auth.signInWithPopup(fbProvider);
  };

  return (
    <Row justify={"center"} style={{ height: 800 }}>
      <Col
        span={8}
        // style={{ border: "1px solid #000" }
      >
        <Title style={{ textAlign: "center" }} level={3}>
          Chat Zone
        </Title>
        <Button style={{ width: "100%", marginBottom: 5 }}>
          Đăng nhập bằng google
        </Button>
        <Button style={{ width: "100%", marginBottom: 5 }} onClick={LoginFB}>
          Đăng nhập bằng facebook
        </Button>
      </Col>
    </Row>
  );
}
