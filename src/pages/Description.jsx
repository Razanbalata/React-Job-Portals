import React from 'react';
import DescriptionDetails from '../components/descriptionPage/DescriptionDetails';
import Layout from '../layouts/Layout';

function Description() {
  return (
    <Layout>
      <div style={{width:"1512px",height:"109px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F4F5F7"}}>
        <h3 style={{fontSize:"30px",fontWeight:"500"}}>Laravel Developer(Full Time) - Match Company Limited </h3>
      </div>
      <DescriptionDetails/>
    </Layout>
  );
}

export default Description;
