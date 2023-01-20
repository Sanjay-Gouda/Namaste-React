import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { Button, CardActionArea, CardActions } from "@mui/material";
const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// import { IMG_CDN_URL } from "../../Config/config";

export const RestroCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
}) => {
  return (
    <Card
      sx={{ maxWidth: 345, flex: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IMG_CDN_URL + cloudinaryImageId}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography
            variant="body2"
            style={{ marginTop: "20px" }}
            color="text.secondary"
          >
            {cuisines.join(",")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <DeliveryDiningIcon />
          {deliveryTime} minute
        </Button>
      </CardActions>
    </Card>
  );
};
