import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined, FormOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import language from "../utils/language";
const { SubMenu } = Menu;


export default function Topbar({ margin }) {
  const [current, setCurrent] = useState(window.location.href.split("/")[3]);
  const navigate = useNavigate();
  console.log(window.location.href.split("/")[3]);

  function handleChange(e) {
    if(e.key === "de" | e.key === "en"){
      console.log(e)
      language.setLang(e.key)
      window.location.reload(false);
    }else{
      setCurrent(e.key)
    }
  }

  return (
    <Menu
      style={{ marginTop: margin }}
      onClick={handleChange}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item
        key=""
        icon={<MailOutlined />}
        onClick={() => navigate("/datenschutz")}
      >
        Impressum und Datenschutz
      </Menu.Item>
      <Menu.Item key="a" icon={<FormOutlined />}>
        info@hagis-eng.de
      </Menu.Item>
      <Menu.Item key="b" icon={<FormOutlined />}>
        089/23065999
      </Menu.Item>
      <SubMenu key="lang" title="Sprache">
            <Menu.Item key="de">German</Menu.Item>
            <Menu.Item key="en">English</Menu.Item>
        </SubMenu>
    </Menu>
  );
}
