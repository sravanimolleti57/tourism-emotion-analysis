import { FaSearch, FaHome, FaHotel, FaPlane, FaUser } from "react-icons/fa";

function Home() {
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

        <p style={{ marginBottom: "20px" }}>
          <FaPlane /> Flights
        </p>

        <p>
          <FaUser /> Profile
        </p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>
        
        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "30px",
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
              fontSize: "16px",
            }}
          />
        </div>

        {/* Heading */}
        <h1>Explore The World ✈️</h1>

        <p>
          Discover destinations using customer satisfaction
          and emotion analysis.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Goa */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "20px",
              width: "250px",
            }}
          >
            <h2>Goa</h2>
            <p>⭐ 4.8 Rating</p>
            <p>Happy Visitors: 92%</p>
          </div>

          {/* Maldives */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "20px",
              width: "250px",
            }}
          >
            <h2>Maldives</h2>
            <p>⭐ 4.9 Rating</p>
            <p>Happy Visitors: 95%</p>
          </div>

          {/* Dubai */}
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "20px",
              width: "250px",
            }}
          >
            <h2>Dubai</h2>
            <p>⭐ 4.7 Rating</p>
            <p>Happy Visitors: 95%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
