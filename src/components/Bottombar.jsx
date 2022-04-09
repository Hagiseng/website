import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  FieldTimeOutlined,
  SmileOutlined,
  TrophyOutlined,
  TeamOutlined,
  ContactsOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { SubMenu } = Menu;

export default function Topbar({ margin }) {
  const [current, setCurrent] = useState(window.location.href.split("/")[3]);
  const navigate = useNavigate();

  console.log(window.location.href.split("/")[3]);

  return (
    <Menu
      style={{ marginTop: margin}}
      onClick={(e) => setCurrent(e.key)}
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
      <Menu.Item
        key="a"
        icon={<FormOutlined />}
      >
        
        info@hagis-eng.de
      </Menu.Item>
      <Menu.Item
        key="b"
        icon={<FormOutlined />}
      >
        089/23065999
      </Menu.Item>
    </Menu>
  );
}
