import { Fragment } from "react";
import { useSelector } from "react-redux";
import Notification from "../UI/Notification";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const notificationtype = useSelector((state) => state.notification);
  console.log(notificationtype);
  return (
    <Fragment>
      {notificationtype.isNotification && (
        <Notification
          status={notificationtype.status}
          type={notificationtype.type}
          message={notificationtype.message}
        />
      )}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
