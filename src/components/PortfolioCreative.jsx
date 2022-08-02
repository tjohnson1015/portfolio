import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";


const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  

  // for modal
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>Portfolio</span> */}
                <h3>My Projects</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/trucktracker.png"
                            alt="Details"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalTwo}
                          />

                          <ReactTooltip
                            id="detail3"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Truck Tracker</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/cinego2.png"
                            alt="Details"
                            data-tip
                            data-for="detail"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Cinego</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/Sheltr.png"
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Sheltr</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL PORTFOLIO GALLERY */}
                  
                
                <TabPanel>
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/6.jpg"
                            alt="Details"
                            data-tip
                            data-for="detail"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Selena Gomez</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Ave Simone</h5>
                              <span>Details</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END CREATIVE PORTFOLIO GALLERY */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/trucktracker.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Truck Tracker</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Truck tracker is a web application for users to find food trucks and street vendors in their area in real time. It also allows vendors to create an accout, update their buisness information, and create schedules so users can see when and where they are going to be.
                  </p>
                  <p>
                    Built using React, JavaScript, Node, PostgreSQL, Express, Sequelize, Redux, and Chakra.
                  </p>
                  <p>
                    https://truck-tracker-1.herokuapp.com/login
                  </p>
                  <p>
                    https://github.com/tjohnson1015/truck-tracker
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Creator</span>
                      <span>Tyler Johnson</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>July, 2022</span>
                    </li>
                    {/* <li>
                      <span className="first">Share</span>
                      <Social /> */}
                      {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/cinego2.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Cinego</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Cinego is an online movie review service which allows users to login, create accounts, and review movies that they've watched. We wanted a simple user experience for maximum useability.


                  </p>
                  <p>
                    Built using Javascript, Node, Express, CSS, and HTML.
                  </p>
                  <p>
                    https://cinego-app.herokuapp.com/
                  </p>
                  <p>
                    https://github.com/ChaseChilders/Cinego
                  </p>

                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Creators</span>
                      <span>Tyler Johnson, Chase Childers, Gerardo Delaeo</span>
                    </li>

                    <li>
                      <span className="first">Date</span>
                      <span>June 2022</span>
                    </li>
                    {/* <li>
                      <span className="first">Share</span>
                      <Social /> */}
                      {/* END SOCIAL SHARE */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              {/* main_details */}

              
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/Sheltr.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Sheltr</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Sheltr is an online service which provides addresses, hours, and other important information for homeless shelters in Washington D.C, Los Angeles, and Balitmore. We prioritized a simple user experience with maximum functionality including "street view" using the Google Maps API.
                  </p>
                  <p>
                    Built using Javascript, CSS, and HTML. API's included Google Maps API, DC Shelter API, Baltimore Shelter API, Los Angeles Shelter API
                  </p>
                  <p>
                    https://github.com/ChaseChilders/Sheltr
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Creators</span>
                      <span>Tyler Johnson, Chase Childers, Myles DeBoer, Michael Nguyen</span>
                    </li>

                    <li>
                      <span className="first">Date</span>
                      <span>May 2022</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
              {/* main_details */}


            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
