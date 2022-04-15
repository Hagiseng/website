import React from "react";
import Topbar from "../../components/Topbar";
import { Grid, Container } from "@mui/material";
import { Card, Typography, Divider } from "antd";
import BottomBar from '../../components/Bottombar'
import language from "../../utils/language";

const lang = language.getLanguageJSON();

const {Title} = Typography

const data = [
  {
    title: lang.references.cards.schellingstreet.headline,
    desc: lang.references.cards.schellingstreet.text
  },
  {
    title: lang.references.cards.thuillerstreet.headline,
    desc: lang.references.cards.thuillerstreet.text
  },
  {
    title: lang.references.cards.bodensee.headline,
    desc: lang.references.cards.bodensee.text
  },
  {
    title: lang.references.cards.peacePromenade.headline,
    desc: lang.references.cards.peacePromenade.text
  },
  {
    title: lang.references.cards.garsInn.headline,
    desc: lang.references.cards.garsInn.text
  },
  {
    title: lang.references.cards.jacobHagenbucher.headline,
    desc: lang.references.cards.jacobHagenbucher.text
  },
  {
    title: lang.references.cards.largia.headline,
    desc: lang.references.cards.largia.text
  },
  {
    title: lang.references.cards.welden.headline,
    desc: lang.references.cards.welden.text
  },
  {
    title: lang.references.cards.ammersee.headline,
    desc: lang.references.cards.ammersee.text
  },
];

export default function References() {
  return (
    <div>
      <Topbar />
      <Container style={{textAlign: 'center', marginTop:"3%", marginBottom: "3%"}}>
          <Title>Referenzen</Title>
          <Divider/>
        <Grid container spacing={2} style={{marginTop:"3%"}}>
          {data.map((c) => (
            <Grid item xs={12} md={4}>
              <Card title={c.title} hoverable>
                {c.desc}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <BottomBar />
    </div>
  );
}
