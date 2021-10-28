import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "http://localhost:3000/data";

function DispalydataComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((e) => setData(e.data));
  }, []);

  return (
    <div>
      
        
          {data.map((e) => (
            <div className="m-3">
                <div className="card w-75">
                   <div className="row">
                   <div className="col-sm-3">
                       <img src={e.img} alt="personimage"></img></div>
                   <div className="col-sm-9 ">
                        <strong className="strong">Name :</strong><strong key={e.id}>{e.Name}</strong><br />
                        <label>Mobile_no:</label><span key={e.id}>{e.Mobile_no}</span><br />
                        <label>Company :</label><span key={e.id}>{e.Company}</span><br />
                        <label>Address :</label><span key={e.id}>{e.address}</span><br />
                    </div>
                    </div>
                </div>
            </div>
          ))}
        
      
    </div>
  


  );
}

export default DispalydataComp;
