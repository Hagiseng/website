import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  SmileOutlined,
  TrophyOutlined,
  TeamOutlined,
  ContactsOutlined,
  FormOutlined
} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'
import language from "../utils/language";

const lang = language.getLanguageJSON();

export default function Topbar(props) {
  const [current, setCurrent] = useState( window.location.href.split("/")[3]);
  const navigate = useNavigate();
  console.log(window.location.href.split("/")[3])


 
  return (
    <Menu onClick={e => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="" icon={<HomeOutlined />} onClick={() => navigate("/")}>
          {lang.topbar.home}
      </Menu.Item>
      <Menu.Item key="leistungen" icon={ <FormOutlined />} onClick={() => navigate("/leistungen")}>
      {lang.topbar.services}
      </Menu.Item>
      <Menu.Item key="ueberuns" icon={<SmileOutlined />} onClick={() => navigate("/ueberuns")}>
      {lang.topbar.about}
      </Menu.Item>
      <Menu.Item key="referenzen" icon={<TrophyOutlined />} onClick={() => navigate("/referenzen")}>
      {lang.topbar.references}
      </Menu.Item>
      <Menu.Item key="mitgliedschaften" icon={<TeamOutlined />} onClick={() => navigate("/mitgliedschaften")}>
      {lang.topbar.memberships}
      </Menu.Item>
      <Menu.Item key="kontakt" icon={<ContactsOutlined />} onClick={() => navigate("/kontakt")}>
      {lang.topbar.contact}
      </Menu.Item>
    </Menu>
  );
}
