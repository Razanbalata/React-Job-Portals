import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "react-router";

function FeaturedCom({ job }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: {xs:"1200px",lg:"100%"},
        height: "150px",
        padding: "20px 30px",
        boxSizing: "border-box",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      {/* Left side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* Company Logo */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#338573",
            overflow: "hidden",
          }}
        >
          <img
            src={job.companyUrl}
            alt={job.company}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Job Info */}
        <div>
          <p
            style={{
              fontSize: "16px",
              color: "#5F5858",
              margin: 0,
              fontWeight: "500",
            }}
          >
            {job.company}
          </p>
          <h5
            style={{
              fontSize: "22px",
              margin: "5px 0",
              fontWeight: "bold",
            }}
          >
            {job.title}
          </h5>

          {/* Job Details */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <FmdGoodOutlinedIcon fontSize="small" />
              <span style={{ fontSize: "15px" }}>{job.location}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <FmdGoodOutlinedIcon fontSize="small" />
              <span style={{ fontSize: "15px" }}>{job.type}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: "15px" }}>{job.salary}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side button */}
      <Link to="/descriptionPage">
      <button
        style={{
          backgroundColor: "#338573",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        View Details
      </button>
      </Link>
    </div>
  );
}

export default FeaturedCom;
