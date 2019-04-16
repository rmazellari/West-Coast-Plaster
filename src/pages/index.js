import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/background.jpg"
import backgroundMobile from "../images/background-mobile.jpg"
import { FaInfo } from 'react-icons/fa'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />    
    <div className="background" style={{backgroundImage:`url(${background})`}}>
      <img src={background} className="hide_on_mobile" alt="background" />
      <img src={backgroundMobile} className="hide_on_desktop" alt="background Mobile" />
      <div className="msg">
        <h3 className="">
          Welcome!<br/>Learn more about West Coast Plaster          
        </h3>
        <Link to="about">        
          <span className="arrow-down"><FaInfo /></span>
        </Link>        
      </div>
    </div>    
  </Layout>
)


  
export default IndexPage
