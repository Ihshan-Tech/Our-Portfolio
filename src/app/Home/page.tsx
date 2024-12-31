"use client";

import React from "react";
import { Button, Group, NavLink, Container, Box, Anchor } from "@mantine/core";
import SkillLayout from "./Layout";
import {FooterLinks} from "./Footer/FooterLinks";

const Home = () => {
  return (
    <>
        <div style={logoStyle}>
          <img
            src="/logo.png" 
            alt="Logo"
            style={{ height: "30px", marginRight: "8px" }}
          />
          {/* <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#1a1a1a" }}>
            GROWWE
          </span> */}
        </div>

        <nav>
          <Group 
              style={anchor}>
            <Anchor
              href="/services"
              style={{ marginRight:"40px"}}
              onClick={(e) => { e.preventDefault(); window.location.href = "/services"; }}
            >
                Services
            </Anchor>
            <Anchor
              href="/blog"
              style={{ marginRight:"40px"}}
              onClick={(e) => { e.preventDefault(); window.location.href = "/blog"; }}
            >
                Blog
            </Anchor>
            <Anchor
              href="/about"
              style={{ marginRight:"40px"}}
              onClick={(e) => { e.preventDefault(); window.location.href = "/about"; }}
            >
                About
            </Anchor>
            <Anchor
              href="/contact"
              style={{ marginRight:"40px"}}
              onClick={(e) => { e.preventDefault(); window.location.href = "/contact"; }}
            >
                Contact us
            </Anchor>
          </Group>
        </nav>
      <div style={{ textAlign: "center"}}>
        <img
          src="/download.jpeg"
          alt="Description of image"
          style={{ width: "1000px", marginTop:"20px", borderRadius: "10px", height:"400px", marginLeft:"auto", marginRight:"auto", display:"block" }}
        />
      </div>
      <div style={{ padding: "16px", textAlign: "center" }}>
        <p style={{ fontSize: "1rem", color: "#333" }}>
          "CREATIVE INNOVATIVE SOFTWARE SOLUTION FOR YOUR SUCCESS!!!"
        </p>
        <div style={button}>
          <Button
            variant="filled"
            color="darkblue"
            size="sm"
            onClick={() => window.open("mailto:info@growwe.com", "_self")}
          >
            Get in touch
          </Button>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px"}}>
        <img
          src="/download.jpeg"
          alt="Description of image"
          style={{ width: "1000px",marginTop:"-40px", borderRadius: "10px", height:"400px", marginLeft:"auto", marginRight:"auto", display:"block" }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{ fontSize: "2rem", color: "#1a1a1a", fontWeight:"bold" }}>
          OUR TECHNOLOGIES
        </h1>
        <Box style={{padding:"16px", textAlign:"center"}}>
        <p style={{ fontSize: "1rem", color: "#333", marginTop: "8px", textAlign:"justify" }}>
        We leverage enterprise-level technology to transform our projects into functional realities, 
        ensuring they meet the highest standards of performance and scalability. 
        Our team remains at the cutting edge of modern software development, 
        harnessing the power of innovation to design solutions that address 
        complex challenges effectively. By fostering creativity and embracing a culture 
        of continuous learning, we not only adapt to emerging trends and technologies but also 
        strive to pioneer new approaches that redefine industry standards. This dedication enables 
        us to deliver robust, future-ready solutions that exceed expectations and drive meaningful 
        impact for our clients and stakeholders.
        </p>
        </Box>
      </div>
    <>
    <SkillLayout/>
    </>
    <>
    <FooterLinks/>
    </>
    </>
  );
};

export default Home;

const headerStyle: React.CSSProperties = {
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#fff",
  padding: "8px 0",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flex: "0 0 auto",
  marginLeft:"130px",
  marginTop:"50px",
};
const anchor = {
  fontSize: "1rem",
  fontWeight: "700px",
  fontFamily: "Segoe UI, sans-serif",
  color: "gray",
  marginLeft:"800px",
  space:"10px",
  marginTop:"-40px",
  
};
const button: React.CSSProperties = {
    flex: "0 0 auto",
    backgroundColor:"blue",
    borderRadius:"8px",
    textAlign:"center",
    marginLeft:"550px",
    width:"100px",
  };

const buttonStyle: React.CSSProperties = {
  flex: "0 0 auto",
  backgroundColor:"blue",
  borderRadius:"8px",
  textAlign:"center",
  marginRight:"10px",
  width:"100px",
};
