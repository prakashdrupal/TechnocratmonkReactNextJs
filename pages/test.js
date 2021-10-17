import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavbarStyle from "@/components/_App/NavbarStyle";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import FooterStyle from "@/components/_App/FooterStyle";
import Link from "next/link";
import axios from "axios";
import getConfig from "next/config";
import { useRouter } from "next/router";
import useSWR from "swr";

//const baseURL = "https://api.rojgarcareer.com/api/v1";

function Test() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.rojgarcareer.com/api/v1/taxonomy/term/105");
      const posts = await res.json();
      setPosts(posts);
    };
    fetchData();
  }, []);
    return (
      <>
        <Head>
          <title>Test #Technocrat Monk</title>
          <meta name="description" content="About Us #Technocrat Monk" />
          <meta property="og:title" content="About Us #Technocrat Monk" />
          <meta property="og:description" content="About Us #Technocrat Monk" />
          <meta property="og:url" content="https://myclothingstore.com/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarStyle />

        <PageBannerStyle2
          pageTitle="About Us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About Us"
        />

        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span className="sub-title">ABOUT US</span>

                  <div className="features-text">
                    <h6>Jobs List</h6>
                        {posts.map((item) => (
                        <p>{item.title}</p>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterStyle />
      </>
    );
  }
export default Test;
