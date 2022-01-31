import React from "react";
import Topbar from "../../components/Topbar";
import { Grid, Container } from "@mui/material";
import { Card, Typography, Divider } from "antd";

const {Title} = Typography

const data = [
  {
    title: "Schellingstraße München",
    desc: "Energetische Sanierung von einem Mehrfamilienhaus (30 Wohnungen und zwei Gewerbeeinheiten) in der Schellingstraße München",
  },
  {
    title: "Thuillerstraße München",
    desc: "Neubau von einem Mehrfamilienhaus (vier Wohnungen) in der Thuillestraße München",
  },
  {
    title: "Bodenseestraße München",
    desc: "Neubau von zwei Mehrfamilienhäusern (17 Wohnungen) mit einer gemeinsamen Tiefgarage in der Bodenseestraße München",
  },
  {
    title: "Friedenspromenade München",
    desc: "Neubau von einem Mehrfamilienhaus (fünf Wohnungen) und einer Doppelhaushälfte in der Friedenspromenade in München",
  },
  {
    title: "Gars am Inn",
    desc: "Neubau von zwei Mehrfamilienhäusern (zehn Wohnungen und eine Gewerbeeinheit) in Gars am Inn",
  },
  {
    title: "Jakob-Hagenbucher-Straße München",
    desc: "Neubau von einem Einfamilienhaus in der Jakob-Hagenbucher-Str. in München",
  },
  {
    title: "Ludwigstraße München",
    desc: "Neubau von einem Mehrfamilienhaus (18 Wohnungen und eine Gewerbeeinheit) in der Ludwigstraße in München",
  },
  {
    title: "Theresienstraße München",
    desc: "Sanierung von einem denkmalgeschützten Mehrfamilienhause (acht Wohnungen und zwei Gewerbeeinheiten) in der Theresienstraße München",
  }
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
    </div>
  );
}
