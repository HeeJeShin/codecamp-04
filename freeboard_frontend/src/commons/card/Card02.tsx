import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { IMarketListUIProps } from "../../components/units/market/list/MarketList.types";

export default function MediaCard(props: any) {
  const onError = (event: any) => {
    event.target.src =
      "https://i0.wp.com/blog.signifykorea.com/wp-content/uploads/2019/03/ed9584eba6bdec8aa4_led_eb8db0ecbd94_ed9584eb9dbceba998ed8ab8_eca084eab5ac_6.jpg?fit=773%2C579&ssl=1";
  };

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
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
        <Typography
          variant="body2"
          color="text.secondary"
          // sx={{ textAlign: "right" }}
        >
          {props.el.price} 원
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onBasket}>
          Basket
        </Button>
        <Button size="small" onClick={props.onDetail} id={props.id}>
          Learn More
        </Button>
        {/* <Button size="large">♡</Button> */}
      </CardActions>
    </Card>
  );
}
