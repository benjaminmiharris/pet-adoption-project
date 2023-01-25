import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";

import Typography from "@mui/joy/Typography";

import React from "react";

const InfoBox = ({ image, header, subHeader }) => {
  return (
    <Link
      overlay
      underline="none"
      // href="https://www.aish.org.uk/"
      sx={{ color: "text.tertiary" }}
    >
      <Card sx={{ minHeight: "280px", width: 320 }}>
        <CardCover>
          <img
            src={image}
            // srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {header}
          </Typography>
          <Typography textColor="neutral.300">{subHeader}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InfoBox;
