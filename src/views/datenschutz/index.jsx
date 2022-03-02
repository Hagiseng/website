import React from "react";
import Topbar from "../../components/Topbar";
import { Container } from "@mui/material";
import { Typography } from "antd";

const { Title } = Typography;

export default function Datenschutz() {
  return (
    <div>
      <Topbar />
      <Container style={{ marginTop: "3%", marginBottom: "3%" }}>
        <Title level={3}>Impressum</Title>
        <Typography>Angaben gemäß § 5 TMG</Typography>
        <br />
        <Typography>
          Hagi's Engineering GmbH
          <br />
          Allacherstraße 33
          <br />
          80992 München
          <br />
          Tel.: +49 (89) 23065999
          <br />
          Mobil: +49 176 26174591
          <br />
          Email: info@hagi-eng.de
          <br />
          Web: www.hagi-eng.de
        </Typography>
        <br />
        <Title level={5}> Amtsgericht München</Title>

        <Typography>
          Sitz: München
          <br />
          HRB: 273678
          <br />
          Steuernummer: 147/170/61609
          <br />
          Umsatzsteuernummer gemäß §27a Umsatzsteuergesetz
          <br />
          DE348159391
        </Typography>
        <br />
        <Title level={5}>Geschäftsführer</Title>
        <Typography>
          Geschäftsführer: B.Eng. Idris Hagi
          <br />
          Bachelor of Engineering (FH München)
        </Typography>
        <Title level={5}>Honorarordnung</Title>

        <Typography>
          Verträge nach der Honorarordnung für Architekten und Ingenieure
          <br />
          Gerichtstand München
          <br />
          Deutschland
        </Typography>
        <Title level={5}>Berufshaftpflichtversicherung</Title>
        <Typography>
          Markel Insurance SE <br />
          Sophienstr. 26 <br />
          80333 München
        </Typography>
        <Title level={5}>Design und Programmierung</Title>
        <Typography>Hagi's IT Consulting</Typography>
        <Typography>info@hagiconsulting.de</Typography>
        <Typography>0173 5158526</Typography>
        <Title level={3}>Datenschutzerklärung</Title>
        <Typography>
          Folgt in kürze.
        </Typography>
      </Container>
    </div>
  );
}
