import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/background.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />    
    <div className="background">
      <img src={background} alt="background" />
      <div className="msg">
        <h3 className="">
          Welcome!<br/>Learn more about West Coast Plaster          
        </h3>
        <Link to="about">
          <span className="arrow-down"></span>
        </Link>
      </div>
    </div>    
  </Layout>
)


  
export default IndexPage
