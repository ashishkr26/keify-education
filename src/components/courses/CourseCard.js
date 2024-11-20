import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import student2 from "../../assets/images/student2.png";
import { useNavigate } from "react-router-dom";
// import CourseBuyDetail from "./CourseBuyDetail";


const CourseCard = () => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardMedia
        sx={{ height: 280, marginLeft: "" }}
        image={student2}
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          GATE
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button
          onClick={() => {
            navigate("/coursebuydetail");
          }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
