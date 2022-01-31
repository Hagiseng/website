import React from "react";
import Topbar from "../../components/Topbar";
import { Card } from "antd";
import { Container, Grid } from "@mui/material";
import { Typography, Divider } from "antd";
import HM from "../../pictures/alumni.png"
import VDI from "../../pictures/vdi.png"
import HWK from "../../pictures/hwk.png"
import GBT from "../../pictures/gbt.png"

const {Title} = Typography
const { Meta } = Card;

const data = [
  {
    title: "VDI - Verein Deutscher Ingenieure e.V.",
    href: "https://www.vdi.de/",
    pic: VDI 
  },
  {
    title: "Alumni Hochschule München",
    pic: HM,
    href: "https://www.hm.edu/sekundaer_navigation/alumni/"
  },
  {
    title: "HWK München - Handwerkskammer München",
    pic: HWK,
    href: "https://www.hwk-muenchen.de/"
  },
  {
    title: "GBT Bauer",
    pic: GBT,
    href: "https://xn--gebudetechnik-bauer-iwb.de/"
  },
];

const isMobile = window.innerWidth < 800;

export default function Memberships() {
  return (
    <div>
      <Topbar />
      <Container style={{textAlign: 'center', marginTop: isMobile ? "15%" : "3%" }}>
      <Title>Mitgliedschaften</Title>
          <Divider/>
        <Grid container spacing={2} style={{ marginTop:"3%"}}>
          {data.map((c, i) => (
            <Grid item xs={12} md={3}>
              <Card
                hoverable
                onClick={() => window.open(c.href)}
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="example"
                    src={c.pic}
                  />
                }
              >
                <Meta
                  title={c.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
