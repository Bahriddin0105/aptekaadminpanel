import React, { Component } from "react";
import { Layout, Menu, Card } from "antd";
import foto from "../doctor logo.png";
import Bosh from "./Bosh";
import Apteka from "./Apteka";
import Card1 from "./Card1.js";
import {
  HomeOutlined,
  PlusOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "../App.css";
import { BrowserRouter, NavLink, Route, Switch, Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
export default class Panel extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Header
              className="site-layout-sub-header-background header"
              style={{ padding: 0 }}
            >
              <div className="imgh1">
                <Link to="/">
                  <img src={foto} className="foto" />
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
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <Menu
                  theme="dark"
                  mode="inline"
                  className="menu"
                  defaultSelectedKeys={["4"]}
                >
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link style={{ textDecoration: "none" }} to="/bosh">
                      Bosh sahifa
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<PlusOutlined />}>
                    <Link style={{ textDecoration: "none" }} to="/dorilar">
                      Dorilar
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<EnvironmentOutlined />}>
                    <Link style={{ textDecoration: "none" }} to="/apteka">
                      Aptekalar
                    </Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: "24px 24px" }}>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {" "}
                  <Switch>
                    <Route exact path="/"></Route>
                    <Route exact path="/bosh">
                      <Bosh />
                    </Route>
                    <Route exact path="/dorilar">
                      <Card1 />
                    </Route>
                    <Route exact path="/apteka">
                      <Apteka />
                    </Route>{" "}
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
