import React from "react";
import Topbar from "../../components/Topbar";
import Carousel from "../../components/Carousel";
import { Grid, Container } from "@mui/material";
import { Divider, Typography } from "antd";
import Beratung from "../../pictures/beratung.jpg";
import Planung from "../../pictures/planung.png";
import Bau from "../../pictures/bau.png";
import Bottombar from "../../components/Bottombar";
import { Card } from "antd";
import germany from "../../pictures/germany.png";
import language from "../../utils/language";

const lang = language.getLanguageJSON();
const { Meta } = Card;

const { Title } = Typography;

export default function Landingpage() {
  return (
    <div>
      <Topbar />
      <Carousel />
      <Container
        style={{ textAlign: "center", marginTop: "3%", marginBottom: "3%" }}
      >
        <Title>{lang.homepage.headline}</Title>
        <Divider />
        <Typography>{lang.homepage.subText}</Typography>

        <Title level={3}>{lang.homepage.headline2}</Title>
        <img src={germany} alt="germany" height={50} />
        <Grid container style={{ marginTop: "5%" }} spacing={6}>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Beratung} />}
            >
              <Meta
                title={lang.homepage.cards.consulting.headline}
                description={lang.homepage.cards.consulting.text}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Planung} />}
            >
              <Meta
                title={lang.homepage.cards.planing.headline}
                description={lang.homepage.cards.planing.text}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Bau} />}
            >
              <Meta
                title={lang.homepage.cards.supervision.text}
                description={lang.homepage.cards.supervision.text}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Bottombar />
    </div>
  );
}
