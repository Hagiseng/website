import React from "react";
import { Image } from "antd";
import Topbar from "../../components/Topbar";
import { Container, Grid } from "@mui/material";
import { Typography, Divider, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <Topbar />
      <Container style={{ marginTop: "5%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Image
              width={"100%"}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Grid>
          <Grid item xs={12} md={8} textAlign="justify">
            <Title>Hagi's Engineering</Title>
            <Divider />
            <Typography>
              Wir freuen uns, Sie auf unserer Website begrüßen zu dürfen. Unsere
              erfahrenen Ingenieure sind seit Jahren in der Baubranche tätig und
              bringen somit eine Menge Wissen mit, um Ihr Projekt zeitgemäß und
              erfolgreich abzuschließen. Eine qualitative Arbeit sowie hohe
              Kundenzufriedenheit werden bei uns im Unternehmen groß geschrieben.
              Bei der Abwicklung unserer Projekte legen wir einen hohen Wert
              auf Kompetenz, Effizienz, Nachhaltigkeit und natürlich
              Wirtschaftlichkeit. Selbstverständlich sind wir zuverlässig
              bezüglich Qualität, Terminen, Kosten und Fachwissen. Wir nutzen
              die Möglichkeiten der Weiterbildung und halten uns stets auf
              neuestem Stand, um Ihnen die perfekte Leistung zu erbringen.
            </Typography>
            <Button
              type="primary"
              block
              style={{ marginTop: "3%", marginBottom: "3%" }}
              onClick={() => navigate("/kontakt")}
            >
              Kontakt aufnehmen
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
