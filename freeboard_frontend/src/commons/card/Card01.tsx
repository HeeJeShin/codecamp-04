import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MouseEvent } from "react";
import router, { useRouter } from "next/router";
import DOMPurify from "dompurify";

interface ExpandMoreProps extends IconButtonProps {
  el: any;
  expand: boolean;
  title: string;
  subheader: Date;
  seller: any;
  name: string;
  Contents: string;
  createdAt: any;
  onClickMoveToMarketDetail: MouseEvent<HTMLDivElement>;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const router = useRouter();
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props: ExpandMoreProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500  }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.el.seller}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={props.onClick} />
          </IconButton>
        }
        title={props.el.seller} 
        subheader={props.el.createdAt} //날짜
      />
      <CardMedia
        component="img"
        height="194"
        
        image={`https://storage.googleapis.com/${props.el.images?.[0]}`}
        alt={props.el.alt}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {props.el.name}   
          {/* //상품명 */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          _________________________________
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.el.remarks}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: red[500] }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick} //펼치는기능
          aria-expanded={expanded}
          aria-label="show more"
        >
          {props.el.price}
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{ height: "100px", overflow: "scroll", overflowX: "hidden" }}
        >
          <Typography paragraph>상품소개:</Typography>

          {/* {process.browser ? (
            <Typography
              paragraph
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(data?.fetchBoard.contents)),
              }}
            >
              {" "}
              {props.el.contents}
            </Typography>
          ) : (
            <Typography paragraph />
          )} */}

          <Typography paragraph>{props.el.contents}</Typography>
          {/* <Typography paragraph>
            {props.hanjol}
          </Typography>
          <Typography paragraph>
            {props.contents}
          </Typography>
          <Typography>
            {props.tag}
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
