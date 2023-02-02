import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Container, Box } from "@mui/system";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { PieChart } from "@components/charts";

const DisplayStats = () => {
  const router = useRouter();
  const eventDonors = useSelector((state) => state.eventDonation);

  const stats = [
    {
      groupBy: "bloodGroup",
      label: "Blood Group",
      data: [],
    },
    {
      groupBy: "age",
      label: "Age Group",
      data: [],
    },
    {
      groupBy: "gender",
      label: "Genderwise",
      data: [],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = useState(stats[0].groupBy);

  return (
    <Container>
      {eventDonors?.length !== 0 ? (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs">
              {stats.map((group, index) => {
                return (
                  <Tab key={index} label={group.label} value={group.groupBy} />
                );
              })}
            </TabList>
          </Box>
          {stats.map((group, index) => {
            return (
              <TabPanel key={index} value={group.groupBy}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <PieChart
                    data={group.data.map((data) => data.count)}
                    labels={group.data.map((data) => {
                      if (data.group) {
                        return data.group;
                      } else if (data.range) {
                        return data.range;
                      } else if (data.display) {
                        return data.display;
                      }
                    })}
                  />
                </Box>
              </TabPanel>
            );
          })}
        </TabContext>
      ) : (
        <Box></Box>
      )}
    </Container>
  );
};

export default DisplayStats;
