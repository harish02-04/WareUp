import React, { useEffect, useState } from "react";
import { ps } from "../images/img";
const Profile = () => {
  const [pro, setpro] = useState({});
  useEffect(() => {
    fetch("http://localhost:8081/login")
      .then((res) => res.json())
      .then((data) =>
        data.map((d) => {
          if (localStorage.getItem("user") === d.username) {
            setpro(d);
          }
        })
      )
      .catch((err) => console.log(err.message));
  }, [pro]);
  return (
    <div class="profile">
      <div class="container">
        <div class="card">
          <div class="front">
            <h2 class="fp">𝑷𝒓𝒐𝒇𝒊𝒍𝒆 𝑪𝒂𝒓𝒅</h2>
            <div class="logo">
              <span></span>
            </div>
          </div>
          <div class="back">
            <h1 class="mainp">
              <div class="ip">
                <img class="ip1" src={ps} alt=""></img>
              </div>
              <span>
                <h2 class="name">{`${pro.cname}`}</h2>
                <br />
                <h6>GST No - {pro.gno}</h6>
                <br />
                <b class="own">𝑶𝒘𝒏𝒆𝒅 𝒃𝒚</b>
                <br />
                <br />
                <h4 class="pn">Mr.{pro.username}</h4>
              </span>
            </h1>
            <ul class="prof">
              <li>{`(+91) ${pro.pno}`}</li>
              <li>{pro.email}</li>
              <li>{pro.add}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
