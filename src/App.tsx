import React from 'react';
import './App.css';
import Topics from './features/topics/topics';

// @ts-ignore
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Box, Tab, Tabs, Typography, useTheme } from '@material-ui/core';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (<div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
    >
        {value === index && (<Box sx={{p: 3}}>
            <Typography>{children}</Typography>
        </Box>)}
    </div>);
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`, 'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (<Box
        sx={{display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', width: '100%', height: '100%'}}>
        <Box className={'tab-content'}>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Topics tab="ask"/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Topics tab="share"/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Topics tab="job"/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Topics tab="good"/>
                </TabPanel>
            </SwipeableViews></Box>
        <AppBar position="fixed" sx={{
            bottom: 0, top: 'initial'
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="ask" {...a11yProps(0)} />
                <Tab label="share" {...a11yProps(1)} />
                <Tab label="job" {...a11yProps(2)} />
                <Tab label="good" {...a11yProps(2)} />
            </Tabs>
        </AppBar>
    </Box>);
}

function App() {
    return <FullWidthTabs/>
}

export default App;
