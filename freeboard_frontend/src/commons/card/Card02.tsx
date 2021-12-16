import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  

export default function MediaCard(props: IBoardListUIProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        
        image={`https://storage.googleapis.com/${props.el.images?.[0]}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.el.name}  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.el.contents}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Basket</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">♡</Button>
      </CardActions>
    </Card>
  );
}
