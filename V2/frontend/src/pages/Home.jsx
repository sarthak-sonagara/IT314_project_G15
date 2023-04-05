import React from 'react'
import './homepage.css'

const  Home = ()=> {
      return (
        <div>
        
          <style dangerouslySetInnerHTML={{__html: "\n      .comment {\n        width: 100%;\n        height: 80px;\n        padding: 10px;\n        background-color:#1b99a4;\n      }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n      .blink {\n          animation: blinker 1.5s linear infinite;\n          color:#1b99a4;\n          font-family: sans-serif;\n      }\n      @keyframes blinker {\n          50% {\n              opacity: 0;\n          }\n      }\n  " }} />
          <style dangerouslySetInnerHTML={{__html: "\n    .blinky {\n        animation: blinker 5s linear infinite;\n        color:#1b99a4;\n        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    }\n    @keyframes blinker {\n        50% {\n            opacity: 0.2;\n        }\n    }\n" }} />
          <style dangerouslySetInnerHTML={{__html: "\n    .scroll-left {\n     height: 50px;\t\n     overflow: hidden;\n     position: relative;\n     background:#1b99a4;\n     color: rgb(244, 233, 30);\n     border: 1px solid rgb(25, 197, 169);\n    }\n    .scroll-left p {\n     position: absolute;\n     width: 100%;\n     height: 80%;\n     margin: 0;\n     line-height: 50px;\n     text-align: center;\n     transform:translateX(100%);\n     animation: scroll-left 20s linear infinite;\n    }\n    @keyframes scroll-left {\n     0%   {\n     transform: translateX(100%); \t\t\n     }\n     100% {\n     transform: translateX(-100%); \n     }\n    }\n    " }} />
          <header className="container-fluid row p-0" style={{backgroundImage: 'url("./bg4.jpg")'}}>
            <div className="top-left col-2 d-none d-sm-block">
              <img  src="/images/DAIICT.png" alt="" />
            </div>
            <div className="top-center col-12 col-sm-8 text-center text-capitalize">
              <h1 className="main-heading"><p style={{fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>Open Conference Management System</p></h1>
              <h2 className="sec-heading">Streamlining the Conference Experience for Organizers and Attendees</h2>
              <h4 style={{fontWeight: 550}} className="font-weight-bold">
                Dhirubhai Ambani Institute of Information and Communication Technology
              </h4>
              <h4 style={{fontWeight: 600, fontStyle: 'italic'}} className="font-weight-bold">
                FY 2023-24
              </h4>
            </div>
            <div className="top-right col-2 d-none d-sm-flex flex-column">
              <div className="container">
                <div>
                  <button className="log" style={{fontFamily: 'cursive'}}>Login</button>
                  <button className="reg" style={{fontFamily: 'cursive'}}>Sign up</button>
                </div>
              </div>
              {/*div class="top-center"><h5 style="font-size:x-small;">Follow us on:</h5></div>
  
          <div class="socials d-flex justify-content-end">
            <a href="#" class="social-link mx-1">
              <i
                class="fab fa-facebook-f text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3"
              ></i>
            </a>
            <a href="#" class="social-link mx-1">
              <i
                class="fab fa-twitter text-light border border-2 shadow-lg py-1 px-2 bg-info rounded-3"
              ></i>
            </a>
            <a href="#" class="social-link mx-1">
              <i
                class="fab fa-linkedin-in text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3"
              ></i>
            </a>
            <a href="#" class="social-link mx-1">
              <i
                class="fab fa-pinterest-square text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3"
              ></i>
            </a>
          </div*/}
            </div>
          </header>
          <div className="container-fluid">
            <div className="main-content row p-5 gx-5">
              {/* content which will come in left side */}
              <div className="left-content col-12 col-md-4 col-lg-3">
                <div className="p-3 tabs-container rounded border shadow-sm border-2 text-capitalize">
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-house-chimney mr-1" /></div>
                    <span>Home</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div>
                      <i className="fa-solid fa-file" />
                    </div>
                    <span>Call for papers</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-laptop" /></div>
                    <span>Call for tracks</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-calendar" /></div>
                    <span>Schedule</span>
                  </a>
                  <a href="timeline.html" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-clock" aria-hidden="true" /></div>
                    <span>Timeline</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-user-group" /></div>
                    <span>Organization</span>
                  </a>
                </div>
                <hr className="hr" />
                {/* archives */}
                <div className="p-3 tabs-container rounded border shadow-sm border-2 text-capitalize">
                  <div className="archive-heading p-2 rounded">
                    <div><i className="fa-solid fa-box-archive" /></div>
                    <span>Archives</span>
                  </div>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-database" /></div>
                    <span>Data</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div>
                      <i className="fa-solid fa-screwdriver-wrench" />
                    </div>
                    <span>Resources</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-timeline" /></div>
                    <span>Past Precedings</span>
                  </a>
                  <a href="#" className="tab rounded my-3 shadow-sm">
                    <div><i className="fa-solid fa-fire" /></div>
                    <span>Fire</span>
                  </a>
                  <a href="#" className="years rounded my-2">
                    <div><i className="fa-solid fa-arrow-right" /></div>
                    <span>2022</span>
                  </a>
                  <a href="#" className="years rounded my-2">
                    <div><i className="fa-solid fa-arrow-right" /></div>
                    <span>2021</span>
                  </a>
                  <a href="#" className="years rounded my-2">
                    <div><i className="fa-solid fa-arrow-right" /></div>
                    <span>2020</span>
                  </a>
                  <a href="#" className="years rounded my-2">
                    <div><i className="fa-solid fa-arrow-right" /></div>
                    <span>2019</span>
                  </a>
                </div>
                <hr className="hr" />
              </div>
              {/* content which will come in center */}
              <div className="central-content col-12 col-md-7 gap-2">
                <div className="content-container rounded-3 shadow-sm border border-2">
                  <div className="content-heading h2 px-4 py-2 text-capitalize" style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>
                    Welcome!
                  </div>
                  <div className="content-desc p-3" style={{textAlign: 'justify'}}>
                    <p>
                      Worldwide, there are numerous study and Innovation Institutes that plan yearly gatherings for scholarly and study objectives. 
                      People need assistance from all over the world in order to learn about the conference's program, timetable, location, 
                      and registration process.
                      This platform is specifically made for conference administration that aids organisations in planning 
                      and managing events and conferences in order to address the issues related to conference organisation. 
                    </p>
                    <p>
                      This website shall provide all the information regarding the conference organization, like venue, schedule, timings, participants and roles.
                      Also it will give schedule information for all the events/sessions which are part of the conference.                
                    </p>
                    <p>
                      We invite active participation in each track. Please refer to
                      the call for submission in each track for more information.
                    </p>
                  </div>
                </div>
                <hr className="hr" />
                <div className="list-container rounded-3 shadow-sm border border-2">
                  <div className="content-heading h2 px-4 py-2 text-capitalize" style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>
                    Keynote speakers
                  </div>
                  <ul>
                    <li><a href="https://starsunfolded.com/anand-kumar-super-30/">Anand Kumar, Super 30, India </a></li>
                    <li>
                      <a href="https://starsunfolded.com/h-c-verma/">HC Verma, IIT Kanpur, India </a>
                    </li>
                    <li><a href="https://www.edx.org/bio/walter-lewin">Walter Lewin, MIT, USA </a></li>
                    <li>
                      <a href="Serge Sharoff, University of Leeds, UK ">Serge Sharoff, University of Leeds, UK
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="hr" />
                <div className="list-container rounded-3 shadow-sm border border-2">
                  <div className="content-heading h2 px-4 py-2 text-capitalize" style={{fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif'}}>
                    You may like to see...
                  </div>
                  <ul>
                    <li><a href="#">Topic for the upcoming Conferences </a></li>
                    <li>
                      <a href="#">Complete schedule for the Conferences </a>
                    </li>
                    <li><a href="#">Information regarding Research Papers</a></li>
                    <li><a href="timeline.html"> Timeline of the events held</a>
                    </li>
                  </ul>
                </div>
                <hr className="hr" />
              </div>
              {/* content which for the right side */}
              <div className="right-content col-12 col-lg-2">
                <div className="right-container" style={{borderBottom: '2px solid #dcdcdc'}}>
                  <div className="p-3 tabs-container rounded border shadow-sm border-2 text-capitalize">
                    <div className="archive-heading p-2 rounded">
                      <div><i className="fa fa-box-money" /></div>
                      <span style={{fontSize: 'medium'}}>Our Sponsors</span>
                    </div>
                  </div>
                  <div className="right-container-heading h4 py-3 text-center">
                    <h6 style={{fontSize: 'small', fontFamily: 'cursive'}}><p className="blink"> Add your sponsors here...</p></h6>
                  </div>
                  <div style={{width: '100%', height: '30px', backgroundColor: '#eee'}} />
                  <div className="right-container-heading h2 py-2 text-center text-capitalize" style={{fontSize: 'medium', fontStyle: 'oblique'}}>
                    Upcoming Conference
                    <div style={{width: '100%', height: '30px', backgroundColor: '#eee'}} />
                    <div className="scroll-left">
                      <p style={{fontSize: 'medium'}}>Stay tuned!</p>
                    </div>
                  </div>
                  <div className="right-container-heading h2 py-2 text-center text-capitalize" style={{fontSize: 'medium', fontStyle: 'italic', fontWeight: 'bold'}}>
                    Quote of the Day...
                    <div style={{width: '100%', height: '30px', backgroundColor: '#eee'}} />
                    <p className="blinky" style={{fontStyle: 'normal'}}>
                      Everything is theoretically impossible until it is done
                    </p>
                  </div>
                  <div className="p-3 tabs-container rounded border shadow-sm border-2 text-capitalize">
                    <div className="archive-heading p-2 rounded">
                      <div><i className="fa fa-box-money" /></div>
                      <span>Comments</span>
                    </div>
                    <div className="list-container rounded-3 shadow-sm border border-2">
                      <div className="content-heading h4 px-2 py-2 text-capitalize">
                      </div>
                      <form action="/form/submit" method="POST">
                        <textarea className="comment" defaultValue={""} />
                        <br />
                        <input type="submit" name="submit" defaultValue="Send" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="row px-5 border border-2 shadow py-2">
            <div className="left-footer col-12 col-md-6 d-flex align-items-center">
              <img src="/images/DAIICT.png" alt="DAIICT LOGO" className="bg-light rounded-circle mx-1" />
              <div className="h3 text-capitalize text-light">
                Dhirubhai Ambani Institute of information and Communication Technology
              </div>
            </div>
            <div className="right-footer col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
              <h5 style={{fontSize: 'small', color: 'aliceblue', paddingRight: '2%'}}>Follow us on: </h5>
              <div className="socials">
                <a href="#" className="social-link mx-1">
                  <i className="fab fa-facebook-f text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3" />
                </a>
                <a href="#" className="social-link mx-1">
                  <i className="fab fa-twitter text-light border border-2 shadow-lg py-1 px-2 bg-info rounded-3" />
                </a>
                <a href="#" className="social-link mx-1">
                  <i className="fab fa-linkedin-in text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3" />
                </a>
                <a href="#" className="social-link mx-1">
                  <i className="fab fa-pinterest-square text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      );
    }

  export default Home