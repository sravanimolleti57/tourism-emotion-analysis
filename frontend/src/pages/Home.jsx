import { useState } from "react";
import {
  FaSearch,
  FaHome,
  FaHotel,
  FaPlane,
  FaUserCircle,
} from "react-icons/fa";

function Home() {
  const [showProfile, setShowProfile] = useState(false);

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div
      style={{
        display: "flex",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#1e293b",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>
          Travel Dashboard 🌍
        </h2>

        <p style={{ marginBottom: "20px" }}>
          <FaHome /> Home
        </p>

        <p style={{ marginBottom: "20px" }}>
          <FaHotel /> Hotels
        </p>

        <p>
          <FaPlane /> Flights
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1e293b",
              padding: "15px",
              borderRadius: "12px",
              width: "90%",
            }}
          >
            <FaSearch style={{ marginRight: "10px" }} />

            <input
              type="text"
              placeholder="Search places, hotels, flights..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
              }}
            />
          </div>

          {/* Profile Icon */}
          <div style={{ position: "relative" }}>
            <FaUserCircle
              size={50}
              style={{
                cursor: "pointer",
                color: "#3b82f6",
              }}
              onClick={() =>
                setShowProfile(!showProfile)
              }
            />

            {/* Profile Popup */}
            {showProfile && (
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "0",
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "250px",
                  boxShadow:
                    "0px 0px 15px rgba(0,0,0,0.4)",
                  zIndex: 100,
                }}
              >
                <h3>{user.name}</h3>
                <p>{user.email}</p>

                <hr
                  style={{
                    border: "1px solid #334155",
                    margin: "10px 0",
                  }}
                />

                <p>Trips: 0</p>
                <p>Bookings: 0</p>

                <button
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#3b82f6",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Heading */}
        <h1>Explore The World ✈️</h1>

        <p>
          Discover destinations using customer
          satisfaction and emotion analysis.
        </p>
      </div>
    </div>
  );
}

export default Home;