import "./Profile.css";
import VenuImage from "./venu.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img className="picture" src={VenuImage} alt="Venu" />
      </div>
      <div className="profile-details">
        <h1>Venu Yeggadi</h1>
        <p className="designation">Frontend Developer</p>
        <p>
          Passionate frontend developer with expertise in HTML, CSS, JavaScript,
          and React.
        </p>
        <div className="profile-stats">
          <div className="stat">
            <p>Followers</p>
            <p>100</p>
          </div>
          <div className="line-separator"></div>
          <div className="stat">
            <p>Following</p>
            <p>200</p>
          </div>
          <div className="line-separator"></div>
          <div className="stat">
            <p>Projects</p>
            <p>10</p>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="btn follow-btn">Follow</button>
          <button className="btn view-profile-btn">View Profile</button>
        </div>
      </div>
    </div>
  );
}
