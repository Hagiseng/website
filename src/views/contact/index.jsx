import React, {useState} from "react";
import Topbar from "../../components/Topbar";
import { Container, Grid } from "@mui/material";
import { Typography, Divider } from "antd";
import BottomBar from '../../components/Bottombar'
import language from "../../utils/language"

const lang = language.getLanguageJSON()
const { Title } = Typography;

const isMobile = window.innerWidth < 800;

export default function Memberships() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const saveContact = () => {

    console.log(name)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    };
    fetch("http://localhost:3001/contact", requestOptions)
      .then((response) => response.json())
  };

  return (
    <div>
      <Topbar />
      <Container
        style={{ textAlign: "center", marginTop: isMobile ? "15%" : "3%" }}
      >
        <Title>{lang.contact.headline}</Title>
        <Divider />
        <Typography>
          {lang.contact.subText}
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "3%" }}>
          <Grid item xs={12} md={6}>
            <Title level={3}>{lang.contact.contactData.headline}</Title>
            <Divider />
            <Grid container spacing={2} style={{ textAlign: "justify" }}>
              <Grid item xs={12}>
                <Title level={5}>{lang.contact.contactData.email}</Title>
                <Typography>info@hagi-eng.de</Typography>
              </Grid>
              <Grid item xs={12}>
                <Title level={5}>{lang.contact.contactData.phone}</Title>
                <Typography>089/23065999</Typography>{" "}
              </Grid>
              <Grid item xs={12}>
                <Title level={5}>{lang.contact.contactData.mobile}</Title>
                <Typography>0176 26174591 </Typography>{" "}
              </Grid>
              <Grid item xs={12}>
                <Title level={5}>{lang.contact.contactData.address}</Title>
                <Typography>Hagi's Engineering GmbH</Typography>
                <Typography>Allacherstraße 33</Typography>
                <Typography>80992 München</Typography>
              </Grid>
            </Grid>
          </Grid>
{/*          <Grid item xs={12} md={6}>
            <Title level={3}>Kontaktformular</Title>
            <Divider />
             <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input placeholder="Firmenname" value={name} onChange={e => setName(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <Input placeholder="E-Mail Adresse" value={email} type="email" onChange={e => setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <Input.TextArea placeholder="Nachricht" multiline rows={5} value={message} onChange={e => setMessage(e.target.value)}/>
              </Grid>
              <Grid item xs={12}>
                <Button type="primary" block style={{ marginBottom: "3%" }} onClick={saveContact}>
                  Kontakt aufnehmen
                </Button>
              </Grid>
            </Grid> 
          </Grid>*/}
        </Grid>
      </Container>
      <BottomBar margin={"6%"}/>
    </div>
  );
}
