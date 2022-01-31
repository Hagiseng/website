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
              Planung und Beratung
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Planung und Beratung zu regenerativer Energietechnik, Wärmepumpen,
              fossile Energieträger, Solarthermie und Photovoltaiksysteme,
              Klima- und Lüftungstechnik, Heizungstechnik, Sanitärtechnik,
              Kanalbau, Schwimmbadtechnik uvm.
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              Sämtliche Leistungen gemäß Leistungsbild der HOAI
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Grundlagenermittlung, Vor- und Entwurfsplanungen,
              Genehmigungsplanungen wie Entwässerungs- Eingabeplanung,
              Ausführungsplanung zur Darstellung der ausführungsreifen
              Planungslösung, Vorbereitung und Mithilfe zur Auftragsvergabe
              (Leistungsverzeichnis, Funktionalbeschreibungen), Überwachung zur
              Ausführung des Objektes und Dokumentation.{" "}
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              Beratung des Bauherren{" "}
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Beratung des Bauherren in allen Fragen rund um die Haustechnik
            </Typography>
            <Title level={3} style={{ color: "white", textAlign: "justify" }}>
              Erstellung von Energiepässen
            </Title>
            <Typography style={{ color: "white", textAlign: "justify" }}>
              Planung und Beratung zu regenerativer Energietechnik, Wärmepumpen,
              fossile Energieträger, Solarthermie und Photovoltaiksysteme,
              Klima- und Lüftungstechnik, Heizungstechnik, Sanitärtechnik,
              Kanalbau, Schwimmbadtechnik uvm.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Bottombar/>
    </div>
  );
}
