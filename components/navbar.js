import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Info from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Settings } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#303030",
  },
  navbar: {
    width: "100%",
    minWidth: '100%',
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#202020",
  },
  list: {
    color: "#fff",
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            className={classes.list}
            label="Home"
            icon={<HomeIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.list}
            label="About"
            icon={<Info />}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.list}
            label="Skills"
            icon={<SettingsIcon />}
            {...a11yProps(2)}
          />
          <Tab
            className={classes.list}
            label="Blogs"
            icon={<MenuBookIcon />}
            {...a11yProps(3)}
          />
          <Tab
            className={classes.list}
            label="Portfolio"
            icon={<LocalMallIcon />}
            {...a11yProps(4)}
          />
          <Tab
            className={classes.list}
            label="gallery"
            icon={<PermMediaIcon />}
            {...a11yProps(5)}
          />
          <Tab
            className={classes.list}
            label="Contact"
            icon={<EmailIcon />}
            {...a11yProps(6)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
