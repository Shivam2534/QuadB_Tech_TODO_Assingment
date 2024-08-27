import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  FaTasks,
  FaStar,
  FaCalendarAlt,
  FaClipboardList,
  FaPlus,
} from "react-icons/fa";
import Vector from "../../../public/Vector.png";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../Store/authSlice";
import { ToggleDarkMode } from "../../Store/authSlice.js";
import { ToggleLightMode } from "../../Store/authSlice.js";

const IconsList1 = [
  { icon: <FaTasks /> },
  { icon: <FaStar /> },
  { icon: <FaCalendarAlt /> },
  { icon: <FaClipboardList /> },
  { icon: <FaPlus /> },
];

const IconsList2 = [{ icon: <BiLogOut /> }, { icon: <BiLogIn /> }];

const NavigationList1 = [
  { link: "/allitems" },
  { link: "/" },
  { link: "/important" },
  { link: "/" },
  { link: "/" },
];

export default function SideNavbarForModile({ toggleMenu }) {
  const [open, setOpen] = React.useState(false);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoggedInUserData = JSON.parse(localStorage.getItem("UserCradentials"));
  function DeleteUserSession() {
    localStorage.setItem("UserCradentials", null);
    dispatch(LogoutUser(false));
    navigate("/login");
  }

  React.useEffect(() => {
    setOpen(toggleMenu);
  }, [toggleMenu]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const CurrThemeMode = useSelector((state) => state.auth.Mode);

  function ChangeMode() {
    if (CurrThemeMode == "light") {
      dispatch(ToggleDarkMode());
    } else {
      dispatch(ToggleLightMode());
    }
  }

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="dark:bg-blacks"
    >
      <List>
        {[
          "All task",
          "Today's task",
          "Important",
          "Planned",
          "Assigned to me",
        ].map((text, index) => (
          <Link to={NavigationList1[index].link} key={index}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{IconsList1[index].icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {!isUserLoggedIn && (
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon>{IconsList2[0].icon}</ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem>
        )}
        {isUserLoggedIn && (
          <ListItem key={2} disablePadding onClick={DeleteUserSession}>
            <ListItemButton>
              <ListItemIcon>{IconsList2[1].icon}</ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        )}

        <ListItem key={2} disablePadding onClick={ChangeMode}>
          <ListItemButton>
            <ListItemIcon>
              <img src={Vector} alt="" className="w-4 h-4" />
            </ListItemIcon>
            <ListItemText primary={"Dark mode"} />
          </ListItemButton>
        </ListItem>

        <div className="ml-5 mt-5 text-md text-[#757575] underline">
          Hey, {LoggedInUserData != null ? LoggedInUserData.Username : "Buddy"}
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
