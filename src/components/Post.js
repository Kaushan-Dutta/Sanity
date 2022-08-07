import React, { useState, useEffect } from "react";
import SanityClient from "../client";
import { NavLink } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

const Post = () => {
  useEffect(() => {
    getData();
  }, []);

  const [postData, setPost] = useState([]);

  console.log("Post Data", postData);

  const getData = async () => {
    try {
      const responce = await SanityClient.fetch(
        '*[_type=="post"]{title,slug,alt,mainImage}'
      );
      console.log(responce);
      if (responce) {
        setPost(responce);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const builder = imageUrlBuilder(SanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      <section>
        <h1>Blog Posts</h1>
        <h2>Welcome to my Blog Post</h2>
        <div>
          {postData.map((post) => {
            return (
              <article key={post.slug.current}>
                <NavLink to={"/post/" + post.slug.current}>
                  <span>
                    <img
                      src={urlFor(post.mainImage.asset._ref).width(200).url()}
                      alt={post.mainImage.alt}
                    />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </NavLink>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Post;
