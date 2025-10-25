import React, { useEffect, useState } from "react";
import FeaturedCom from "./FeaturedCom";

function Featured() {
  const [featuredJobs,setFeaturedJobs] = useState([])
   

  useEffect(()=>{
     fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
     .then(res=>res.json())
     .then(data=>setFeaturedJobs(data))
    },[])
    console.log(featuredJobs)
  return (
    <div
      style={{
        padding: "35px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{fontSize:"30px"}}>Featured jobs</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"30px",width:"100%"}}>
       {featuredJobs
          .filter((c) => c.isFeatured) 
          .map((job) => (               
            <FeaturedCom key={job.categoryId} job={job} />
          ))}
      </div>
    </div>
  );
}

export default Featured;
