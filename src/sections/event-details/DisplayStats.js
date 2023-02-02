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

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const eventDonorDataBloodgroup = bloodGroups.map((group) => {
    const count = eventDonors?.filter(
      (donor) => donor.bloodGroup === group
    ).length;
    return { group, count };
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ageRanges = [
    { range: "Under 18", minAge: 0, maxAge: 18 },
    { range: "18 - 29", minAge: 18, maxAge: 30 },
    { range: "30 - 39", minAge: 30, maxAge: 40 },
    { range: "40 - 49", minAge: 40, maxAge: 50 },
    { range: "50 - 59", minAge: 50, maxAge: 60 },
    { range: "Over 60", minAge: 60, maxAge: Infinity },
    { range: "Unknown", minAge: null, maxAge: null },
  ];

  const getAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    return dateOfBirth
      ? Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 365))
      : null;
  };

  const eventDonorDataAge = ageRanges.map((range) => {
    const count = eventDonors.filter((donor) => {
      const age = getAge(donor.dateOfBirth);
      return age !== null && age >= range.minAge && age < range.maxAge;
    }).length;
    return { range: range.range, count };
  });

  const genderOptions = [
    { gender: "M", display: "Male" },
    { gender: "F", display: "Female" },
    { gender: "O", display: "Other" },
    { gender: "U", display: "Unknown" },
  ];

  const eventDonorDataGender = genderOptions.map((option) => {
    const count = eventDonors?.filter(
      (donor) => donor.gender === option.gender
    ).length;
    return { gender: option.gender, display: option.display, count };
  });

  const stats = [
    {
      groupBy: "bloodGroup",
      label: "Blood Group",
      data: eventDonorDataBloodgroup,
    },
    {
      groupBy: "age",
      label: "Age Group",
      data: eventDonorDataAge,
    },
    {
      groupBy: "gender",
      label: "Genderwise",
      data: eventDonorDataGender,
    },
  ];

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
