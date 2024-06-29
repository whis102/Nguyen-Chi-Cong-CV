import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Project({
  image,
  title,
  description,
  source,
  live,
  read,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href={source}>
          Source
        </Button>
        <Button size="small" href={live}>
          Live
        </Button>
        <Button size="small" href={read}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
