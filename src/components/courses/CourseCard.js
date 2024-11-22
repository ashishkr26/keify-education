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

const CourseCard = (props) => {
  const {
    thumbnail,
    title,
    description,
    author,
    rating,
    aggregateRating,
    duration,
    lectures,
    price,
  } = props.info;
  console.log(thumbnail);

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 310, height: "470px" }}>
      <CardMedia
        sx={{ height: 260, marginLeft: "" }}
        image={thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
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
