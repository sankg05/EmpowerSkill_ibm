import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import OngoingCourses from './OngoingCourses';
import './MenuTab.css';

export default function MenuTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} 
          aria-label="lab API tabs example"
          centered 
          >
            <Tab label="Ongoing Courses" value="1" />
            <Tab label="Completed Courses" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <div className="ongoing-grid">
                <div className="row">
                <OngoingCourses />
                </div>
                <div className="row">
                <OngoingCourses />
                </div>
                <div className="row">
                <OngoingCourses />
                </div>
            </div>
        </TabPanel>
        <TabPanel value="2">
            <div className="completed-grid">
                <div className="row">
                <OngoingCourses />
                </div>
                <div className="row">
                <OngoingCourses />
                </div>
                <div className="row">
                <OngoingCourses />
                </div>
            </div>
        </TabPanel>
        
      </TabContext>
    </Box>
  );
}