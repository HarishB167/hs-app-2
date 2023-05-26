import { useEffect, useState } from "react";
import appService from "../services/appService";
import SpinnerWhileLoading from "../components/spinnerWhileLoading";
import "./home.css";

const Home = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const loadAppsDetails = async () => {
      setShowSpinner(true);
      const apps = await appService.getApps();
      console.log("apps :>> ", apps);
      setApps(apps);
      setShowSpinner(false);
    };
    loadAppsDetails();
  }, []);

  return (
    <div className="container container_center home_page">
      <SpinnerWhileLoading
        showSpinnerWhen={showSpinner}
        className="d-flex flex-direction-column justify-content-center align-items-center h-50"
      >
        {apps &&
          apps.map((item) => (
            <div className="list-group-item d-flex app-details">
              <div
                onClick={() => (window.location.href = item.link)}
                className="logo-title-link d-flex align-items-center flex-column c-pointer"
              >
                <img
                  className="home-page-thumbnail"
                  src={item.logo_url}
                  alt={item.name}
                />
                {item.name}
              </div>
              <div className="description text-center">
                {item.description.length >= 100
                  ? item.description.substring(0, 100) + "..."
                  : item.description}
              </div>
            </div>
          ))}
      </SpinnerWhileLoading>
    </div>
  );
};

export default Home;
