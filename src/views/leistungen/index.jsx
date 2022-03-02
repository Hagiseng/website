import React from "react";
import Topbar from "../../components/Topbar";
import Image from "../../pictures/background_leistungen.jpg";
import { Container, Grid } from "@mui/material";
import { Divider, Typography } from "antd";
import Bottombar from "../../components/Bottombar"

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
        <Title style={{ marginTop: isMobile ? "15%" : "8%"  }}>Leistungen</Title>
        <Divider />
        <Typography>
        Im Folgenden finden Sie eine grobe Zusammenfassung unserer Leistungsbilder. Unsere Dienstleistungen beziehen sich auf Projekte im Wohnbau, Gesundheitswesen und Industrie/Gewerbebau deutschlandweit.
        </Typography>
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
              <Title style={{ color: "white" }}>Heizung</Title>
              <Title style={{ color: "white" }}>Sanitär</Title>
              <Title style={{ color: "white" }}>Lüftung</Title>
              <Title style={{ color: "white" }}>Kälte/Klima</Title>
              <Title style={{ color: "white" }}>Elektro</Title>
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
              Planung, Beratung und Bauüberwachung
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Planung der technischen Gebäudeausrüstung im Wohnungs-, Industrie-, Hotel- und Gewerbebau. 
              <br/>
              Beratung bezüglich erneuerbaren Energien. 
              <br/>
              Bauüberwachung während der Ausführungszeit.
              <br/>
              Mordernisierung denkmalgeschützter Gebäude und Neubau.
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              Sämtliche Leistungen gemäß Leistungsbild der HOAI
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Grundlagenermittlung, Vor- und Entwurfsplanungen,
              Genehmigungsplanungen wie Entwässerungs- Eingabeplanung,
              Ausführungsplanung, Vorbereitung der Vergabe
              (Leistungsverzeichnis), Mitwirken bei der Vergabe, Bauüberwachung und Objektbetreuung.
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              Sachverständigung
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Gerne erstellen wir Ihnen ein Sachgutachten für Ihre haustechnischen Anlagen auf Basis einer Ortsbegehung.
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              CAD
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Wir bieten Rohrnetzberechnungen, Strangschemen, Grundrisspläne und Detailzeichnungen an.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Bottombar/>
    </div>
  );
}
