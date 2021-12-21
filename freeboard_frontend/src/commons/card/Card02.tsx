import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props: IBoardListUIProps) {
  const onError = (event) => {
    event.target.src =
      "http://localhost:3000/images/%EC%B1%85%EC%9C%84%EC%A1%B0%EB%AA%85.jpg";
  };


  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        onError={onError}
        image={`https://storage.googleapis.com/${props.el.images?.[0]}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {props.el.seller.name} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onBasket}>
          Basket
        </Button>
        <Button size="small" onClick={props.onDetail} id={props.id}>Learn More</Button>
        <Button size="small">♡</Button>
        {props.el.price}\
      </CardActions>
    </Card>
  );
}
