import { Link } from 'react-router-dom'
import './Footer.css'
import React from 'react'
import Facebook from '../../assets/socialMedia/Facebook'
import Instagram from '../../assets/socialMedia/Instagram'
import Twitter from '../../assets/socialMedia/Twitter'
import Youtube from '../../assets/socialMedia/Youtube'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='top'>
          <div className='top-socials'>
            <div className='left'>
              <div className='something-on-top'>
                Popular Locations
                <ul>
                  <li><Link className='links'>Kolkata</Link></li>
                  <li><Link className='links'>Mumbai</Link></li>
                  <li><Link className='links'>Chennai</Link></li>
                  <li><Link className='links'>Pune</Link></li>
                </ul>
              </div>
              <div className='something-on-top'>
                Trending Locations
                <ul>
                  <li><Link className='links'>Bhubaneshwar</Link></li>
                  <li><Link className='links'>Hyderabad</Link></li>
                  <li><Link className='links'>Chandigarh</Link></li>
                  <li><Link className='links'>Nashik</Link></li>
                </ul>

              </div>
              <div className='something-on-top' style={{ marginRight: "160px" }}>
                About Us
                <ul>
                  <li><Link className='links'>Tech@OLX</Link></li>

                </ul>

              </div>
              <div className='something-on-top'>
                Olx
                <ul>
                  <li><Link className='links'>Blog</Link></li>
                  <li><Link className='links'>Help</Link></li>
                  <li><Link className='links'>Sitemap</Link></li>
                  <li><Link className='links'>Legal & Privacy information</Link></li>
                  <li><Link className='links'>Vulnerability Disclosure Program</Link></li>
                </ul>

              </div>
            </div>
            <div className='right'>
              <div className='right-top'>
                <span>Follw Us</span>
                <div className='social-icons'>
                  <ul>
                    <li><Link><Facebook className='icon' /></Link></li>
                    <li><Link><Instagram className='icon' /></Link></li>
                    <li><Link><Twitter className='icon' /></Link></li>
                    <li><Link><Youtube className='icon' /></Link></li>
                  </ul>
                </div>
              </div>
              <div className='right-bottom'>
                <Link>
                  <picture>
                    <img src="https://statics.olx.in/external/base/img/playstore.png" alt="" />
                  </picture>
                </Link>
                <Link>
                  <picture>
                    <img src="https://statics.olx.in/external/base/img/appstore.png" alt="" />
                  </picture>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom-top'>
            <div style={{ borderRight: "1px solid white" }}>
              <picture>
                <img height={"96px"} style={{paddingRight: "48px"}} src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="" />
              </picture>
            </div>
            <div className='footer-down-logos'>
              <picture>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
              </picture>
            </div>
            <div className='footer-down-logos'>
              <picture>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
              </picture>
            </div>
            <div className='footer-down-logos'>
            <picture>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
              </picture>
            </div>
            <div className='footer-down-logos'>
            <picture>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" />
              </picture>
            </div>
            <div className='footer-down-logos'>
            <picture>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" />
              </picture>
            </div>
          </div>
          <div className='bottom-bottom'>
            <div>Help - Sitemap</div>
            <div>All rights reserved © 2006-2024 OLX</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer