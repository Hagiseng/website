import React from "react";
import Topbar from "../../components/Topbar";
import { Container, Grid } from "@mui/material";
import { Divider, Typography } from "antd";
import Bottombar from "../../components/Bottombar";
import language from "../../utils/language";

const lang = language.getLanguageJSON();
const { Title } = Typography;

const isMobile = window.innerWidth < 800;

export default function Leistungen() {
  console.log(isMobile);

  return (
    <div>
      <Topbar />
      <Container
        style={{ textAlign: "center", marginBottom: isMobile ? "15%" : "8%" }}
      >
        <Title style={{ marginTop: isMobile ? "15%" : "8%" }}>
          {lang.services.headline}
        </Title>
        <Divider />
        <Typography>{lang.services.subText}</Typography>
      </Container>
      <Grid container spacing={2}>
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={4}
            style={{ background: "#3498db", width: "100vw", height: "72vh" }}
          >
            <Container
              style={{
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "6%",
                textAlign: "center",
              }}
            >
              <Title style={{ color: "white" }}>{lang.services.heating}</Title>
              <Title style={{ color: "white" }}>{lang.services.sanitary}</Title>
              <Title style={{ color: "white" }}>
                {lang.services.ventilation}
              </Title>
              <Title style={{ color: "white" }}>{lang.services.climate}</Title>
              <Title style={{ color: "white" }}>{lang.services.electro}</Title>
            </Container>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={8}
          style={{
            background: "#2c3e50",
            width: "100vw",
            height: isMobile ? "100%" : "72vh",
          }}
        >
          <Container
            style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "3%" }}
          >
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              {lang.services.planing.headline}
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              {lang.services.planing.subText1} <br />
              {lang.services.planing.subText2} <br />
              {lang.services.planing.subText3} <br />
              {lang.services.planing.subText4}
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              {lang.services.hoaiServices.headline} <br />
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              {lang.services.hoaiServices.subText} <br />
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              {lang.services.expertOpinion.headline} <br />
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              {lang.services.expertOpinion.subText} <br />
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              {lang.services.cad.headline} <br />
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              {lang.services.cad.subText} <br />
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Bottombar />
    </div>
  );
}
