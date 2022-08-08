import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const SinglePost = () => {
  useEffect(() => {
    getData();
  }, []);

  const [singlePost, setPost] = useState([]);

  const { slug } = useParams();
  //console.log(slug);

  const builder = imageUrlBuilder(SanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const getData = async () => {
    try {
      const responce = await SanityClient.fetch(
        '*[slug.current=="' + slug + '"]'
      );

      console.log(responce);

      if (responce) {
        setPost(responce[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>SinglePost</div>
      <h1>{singlePost.title}</h1>
      <img
                      src={urlFor(singlePost.mainImage.asset._ref).width(200).url()}
                     
                    />
    </>
  );
};

export default SinglePost;
