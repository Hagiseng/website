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
  FormOutlined
} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'

const { SubMenu } = Menu;

export default function Topbar(props) {
  const [current, setCurrent] = useState( window.location.href.split("/")[3]);
  const navigate = useNavigate();

  console.log(window.location.href.split("/")[3])


  return (
    <Menu onClick={e => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="" icon={<MailOutlined />} onClick={() => navigate("/")}>
          Startseite
      </Menu.Item>
      <Menu.Item key="leistungen" icon={ <FormOutlined />} onClick={() => navigate("/leistungen")}>
        Leistungen
      </Menu.Item>
      <Menu.Item key="ueberuns" icon={<SmileOutlined />} onClick={() => navigate("/ueberuns")}>
        Über uns
      </Menu.Item>
      <Menu.Item key="referenzen" icon={<TrophyOutlined />} onClick={() => navigate("/referenzen")}>
        Referenzen
      </Menu.Item>
      <Menu.Item key="mitgliedschaften" icon={<TeamOutlined />} onClick={() => navigate("/mitgliedschaften")}>
        Mitgliedschaften
      </Menu.Item>
{/*       <Menu.Item key="partner" icon={<TeamOutlined />}>
        Partner
      </Menu.Item> */}
      <Menu.Item key="kontakt" icon={<ContactsOutlined />} onClick={() => navigate("/kontakt")}>
        Anfahrt und Kontakt
      </Menu.Item>
    </Menu>
  );
}
