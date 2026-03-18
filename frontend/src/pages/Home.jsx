import { FaLeaf, FaChartLine, FaCloudSun, FaHandshake, FaSeedling, FaTractor } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './Home.css'

const Home = ({ user }) => {
  return (
    <main>

      {/* HERO */}

      <section className="hero home-hero">
        <div className="container hero-content">

          <h1 className="hero-title">
            Growing Better Crops with Technology
          </h1>

          <p className="hero-subtitle">
            AgroVision helps farmers optimize yields, reduce costs and make
            data-driven decisions for sustainable agriculture.
          </p>

        </div>
      </section>


      {/* WHY CHOOSE */}

      <section className="section features">

        <div className="container">

          <h2 className="section-title">Why Choose Agrovision</h2>

          <p className="section-subtitle">
            We combine agricultural expertise with cutting-edge technology
            to help farmers thrive in today's challenging environment
          </p>

          <div className="feature-grid">

            <div className="feature-card">
              <FaLeaf className="feature-icon"/>
              <h3>Sustainable Farming</h3>
              <p>Eco-friendly farming practices that protect soil health.</p>
            </div>

            <div className="feature-card">
              <FaChartLine className="feature-icon"/>
              <h3>Data Insights</h3>
              <p>Track crop performance and market trends using analytics.</p>
            </div>

            <div className="feature-card">
              <FaCloudSun className="feature-icon"/>
              <h3>Weather Forecast</h3>
              <p>Precise weather predictions for better farming planning.</p>
            </div>

            <div className="feature-card">
              <FaHandshake className="feature-icon"/>
              <h3>Farmer Support</h3>
              <p>Expert guidance to help farmers adopt smart technology.</p>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURED SOLUTIONS */}

      <section className="section">

        <div className="container">

          <h2 className="section-title">Featured Solutions</h2>

          <p className="section-subtitle">
            Explore our agricultural technologies transforming farms worldwide
          </p>

          <div className="solutions-grid">

            <div className="solution-card">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOEtYJKIHRzUMminiMizeC0adgIxOQGy3Ug&s"
                alt="Weather"
              />

              <h3>Weather Forecast</h3>

              <p>Real-time weather data to protect crops.</p>

              <Link to="/services" className="btn btn-primary">
                Learn More
              </Link>

            </div>


            <div className="solution-card">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgLdIX3sksmnBm2xy7YpOP29kok0DdOrzaw&s"
                alt="Monitoring"
              />

              <h3>Smart Crop Monitoring</h3>

              <p>AI powered monitoring for crop health.</p>

              <Link to="/services" className="btn btn-primary">
                Learn More
              </Link>

            </div>


            <div className="solution-card">

              <img
                src="https://images.unsplash.com/photo-1584479898061-15742e14f50d"
                alt="Irrigation"
              />

              <h3>Precision Irrigation</h3>

              <p>Optimize water usage with smart irrigation.</p>

              <Link to="/services" className="btn btn-primary">
                Learn More
              </Link>

            </div>

          </div>

        </div>

      </section>


      <Footer/>

    </main>
  )
}

export default Home