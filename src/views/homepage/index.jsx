import React from "react";
import Topbar from "../../components/Topbar";
import Carousel from "../../components/Carousel";
import { Grid, Container } from "@mui/material";
import { Divider, Typography } from "antd";
import { Image } from "antd";
import Beratung from "../../pictures/beratung.jpg";
import Planung from "../../pictures/planung.png"
import Bau from "../../pictures/bau.png"
import Bottombar from "../../components/Bottombar"
import { Card } from "antd";

const { Meta } = Card;

const { Title } = Typography;

export default function Landingpage() {

    
  return (
    <div>
      <Topbar />
      <Carousel />
      <Container style={{ textAlign: "center", marginTop: "3%", marginBottom: "3%" }}>
        <Title>Willkommen bei Hagi's Engineering GmbH</Title>
        <Divider />
        <Typography>
          Vollkommenheit wird erreicht, wenn einzelne Bausteine
          ineinandergreifen und ein perfektes Ganzes bilden. Wir sind Ihr
          Partner für die Beratung und Planung der technischen Gebäudeausrüstung
          Ihres Bauvorhabens.
        </Typography>
        <Grid container style={{ marginTop: "8%" }} spacing={6}>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Beratung} />}
            >
              <Meta
                title="Beratung"
                description="Gerne beraten wir Sie bezüglich einer energiesparenden, günstigen und qualitativen Heizanlage mit, wenn gewünscht, regenartiven Energiequellen als Unterstützung."
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Planung} />}
            >
              <Meta title="Planung" 
              description="Unser Team überzeugt mit detailgetreuer, fachmännischer Kompetenz und plant Ihnen Ihr Bauvorhaben nach der anerkannten Technik der Regeln. Sowohl Neubauten als auch Modernisierungen begleiten wir durch alle Leistungsphasen der HOAI." />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={Bau} />}
            >
              <Meta title="Bauüberwachung"
              description="Auch nach der Planung erstellen wir Ihnen ein umfangreiches und weit gedecktes Leistungsverzeichnis. Ebenfalls suchen wir eine passende ausführende Firma für Ihr Bauvorhaben. Das Projekt wird während des Bauprozesses von uns Überwacht und anschließend betreut, falls Sie dies wünschen." />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Bottombar/>
    </div>
  );
}
