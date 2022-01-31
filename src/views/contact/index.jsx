import React from "react";
import Topbar from "../../components/Topbar";
import { Container, Grid } from "@mui/material";
import { Typography, Divider } from "antd";
import { Form, Input, Button, Checkbox } from "antd";

const { Title } = Typography;

const isMobile = window.innerWidth < 800;


export default function Memberships() {
  return (
    <div>
      <Topbar />
      <Container style={{ textAlign: "center", marginTop: isMobile ? "15%" : "3%" }}>
        <Title>Kontakt</Title>
        <Divider />
        <Typography>
        Ihre unverbindliche Anfrage: Nehmen Sie Kontakt mit uns auf, egal ob Sie bereits ein konkretes Projekt haben oder noch ganz am Anfang stehen. Wir freuen uns darauf, von Ihnen zu hören!
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "3%" }}>
          <Grid item xs={12} md={6}>
            <Title level={3}>Kontaktdaten</Title>
            <Divider/>
            <Grid container spacing={2} style={{ textAlign: "justify" }}>
              <Grid item xs={12}>
                <Title level={5}>E-Mail Adresse</Title>
                <Typography>info@gebaeude-technik.de</Typography>
              </Grid>
              <Grid item xs={12}>
                <Title level={5}>Telefonnummer</Title>
                <Typography>0173 5158524</Typography>{" "}
              </Grid>
              <Grid item xs={12}>
                <Title level={5}>Anschrift</Title>
                <Typography>Allacherstraße 33</Typography>
                <Typography>80992</Typography>
                <Typography>München</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Title level={3}>Kontaktformular</Title>
            <Divider/>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input placeholder="Firmenname" />
              </Grid>
              <Grid item xs={12}>
                <Input placeholder="E-Mail Adresse" />
              </Grid>
              <Grid item xs={12}>
                <Input.TextArea placeholder="Nachricht" multiline rows={5} />
              </Grid>
              <Grid item xs={12}>
                <Button type="primary" block style={{marginBottom: "3%"}}>
                  Kontakt aufnehmen
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
