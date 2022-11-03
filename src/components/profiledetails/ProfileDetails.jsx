import React from "react";
import "./profiledetails.css";
import { useEffect, useState } from "react";

const ProfileDetails = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 992 ? setIsDesktop(true) : setIsDesktop(false);
    });
  });

  return (
    <div className="profile__details">
      {/* Profile Image */}
      <div className="profile__details-img">
          <button className="btn__share">
            <img
              src={`${
                isDesktop
                  ? "../../assets/desktop-share.png"
                  : "../../assets/mobile-share.png"
              }`}
              alt="share profile"
            />
          </button>
          
          <div className="avatar">
            <img
              src="https://ca.slack-edge.com/T042F7V19Q8-U0489KCPK8D-b08dd75c1cc2-72"
              alt="profile img"
              id="profile__img"
            />
            
            <div className="avatar-overlay">
              <div className="img-uploader"></div>
            </div>
          </div>
      </div>

      {/* Profile Name */}
      <div className="profile__details-name">
        <h1>Ekereke Precious</h1>
        <p id="slack">Slack Id: femiyoghurt</p>
      </div>
    </div>
  );
};

// hoverImage()
export default ProfileDetails;

