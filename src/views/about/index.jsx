import React from "react";
import { Image } from "antd";
import Topbar from "../../components/Topbar";
import { Container, Grid } from "@mui/material";
import { Typography, Divider, Button } from "antd";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/Bottombar";
import language from "../../utils/language"

const lang = language.getLanguageJSON()

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
              {lang.about.text}
            </Typography>
            <Button
              type="primary"
              block
              style={{ marginTop: "3%", marginBottom: "3%" }}
              onClick={() => navigate("/kontakt")}
            >
              {lang.about.buttonText}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <footer>
        <BottomBar margin={"20%"}
        />
      </footer>
    </div>
  );
}
