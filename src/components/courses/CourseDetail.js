import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CourseCard from "./CourseCard";
import { courseList } from "../../utils/mockData/courseListPageData";

const CourseDetail = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(courseList);
  return (
    <div className="mt-4 ">
      <h3 className="px-6 py-2">All The Skills You Need</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{ backgroundColor: "#f0f0f0" }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="GATE" value="1" />
              <Tab label="MBA" value="2" />
              {/* <Tab label="CUCET" value="3" /> */}
            </TabList>
          </Box>
          <div className="flex justify-between">
            {courseList.map((course) => (
              <TabPanel value="1">
                <CourseCard key={course.title} info={course} />
              </TabPanel>
            ))}
          </div>
          <div className="flex justify-between">
            <TabPanel value="2">
              <CourseCard />
            </TabPanel>
            <TabPanel value="2">
              <CourseCard />
            </TabPanel>
            <TabPanel value="2">
              <CourseCard />
            </TabPanel>
            <TabPanel value="2">
              <CourseCard />
            </TabPanel>
          </div>

          {/* <TabPanel value="2">MBA</TabPanel> */}
          {/* <TabPanel value="3"> CUCET</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
};

export default CourseDetail;
