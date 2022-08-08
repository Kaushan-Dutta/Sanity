import React, { useState, useEffect } from "react";
import SanityClient from "../client";

const Project = () => {
  const [getProject, setProject] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await SanityClient.fetch('*[_type=="project"]');

      if (data) {
        console.log(data);
        setProject(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main>
      <section>
        <h2>My Projects</h2>
        <h2>Welcome to my Project Page</h2>
        <section>
          {getProject.map((object)=>{return(
            <article key={object.title}>
            <h3>
              <a>
                {object.description}
              </a>
            </h3>
            <div>
              <span>
                {object.title}
              </span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
          )})}
          


        </section>
      </section>
    </main>
  );
};

export default Project;
