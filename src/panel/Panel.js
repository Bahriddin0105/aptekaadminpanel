import React, { Component } from "react";
import { Layout, Menu, Card } from "antd";
import foto1 from "../doctor logo.png";
import Bosh from "./Bosh";
import Apteka from "./Apteka";
import Dorilar from "./Dorilar.js";
import {
  HomeOutlined,
  PlusOutlined,
  EnvironmentOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "../App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Messages from "./Messages";
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
export default class Panel extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout style={{ height: "100vh" }}>
            <Header
              className="site-layout-sub-header-background header"
              style={{ padding: 0 }}
            >
              <div className="imgh1">
                <Link to="/adminpanel">
                  <img src={foto1} className="foto" />
                </Link>
                <h1 className="text">
                  O'zbekiston Respublikasi Sog'liqni saqlash vazirligi
                </h1>
              </div>
            </Header>

            <Layout>
              <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  // console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  // console.log(collapsed, type);
                }}
                className="sider"
              >
                <Menu
                  theme="dark"
                  mode="inline"
                  className="menu"
                  defaultSelectedKeys={["1"]}
                >
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/adminpanel/bosh"
                    >
                      Bosh sahifa
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<PlusOutlined />}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/adminpanel/dorilar"
                    >
                      Dorilari
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<EnvironmentOutlined />}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/adminpanel/apteka"
                    >
                      Aptekalar
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<MessageOutlined />}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/adminpanel/messages"
                    >
                      Xabarlar
                    </Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <Content
                  style={{
                    padding: 10,
                    margin: 0,
                    minHeight: 280,
                    overflowY: "scroll",
                    backgroundColor: "white",
                  }}
                >
                  <Switch>
                    <Route exact path="/adminpanel"></Route>
                    <Route exact path="/adminpanel/bosh">
                      <Bosh />
                    </Route>
                    <Route exact path="/adminpanel/dorilar">
                      <Dorilar />
                    </Route>
                    <Route exact path="/adminpanel/apteka">
                      <Apteka />
                    </Route>
                    <Route exact path="/adminpanel/messages">
                      <Messages />
                    </Route>
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
