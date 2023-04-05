import React from 'react'
import './timeline.css'

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./index.css" />
          <link rel="stylesheet" href="./timeline.css" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <header className="container-fluid row py-2" style={{backgroundImage: 'url("./bg5.jpg")'}}>
            <div className="top-left col-2 d-none d-sm-block">
              <img src="./DAIICT.png" alt="" />
            </div>
            <div className="top-center col-12 col-sm-8 text-center text-capitalize">
              <h1 className="main-heading"><p style={{fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif'}}>Open Conference Management System</p></h1>
              <h2 className="sec-heading">Streamlining the Conference Experience for Organizers and Attendees</h2>
              <h4 style={{fontWeight: 550}} className="font-weight-bold">
                Dhirubhai Ambani Institute of Information and Communication Technology
              </h4>
            </div>
            {/*div class="top-right col-2 d-none d-sm-flex flex-column">
          <img src="./title_left-2022.png" alt="" />
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
          </div>
        </div*/}
          </header>
          <div className="row">
            <div className="h1 shadow-sm py-2 bg-secondary text-light text-center" style={{fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif'}}>
              Event Timeline
            </div>
          </div>
          <div className="timeline">
            <div className="card-container left">
              <div className="content shadow-lg">
                <h2>2017</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
            <div className="card-container right">
              <div className="content shadow-lg">
                <h2>2016</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
            <div className="card-container left">
              <div className="content shadow-lg">
                <h2>2015</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
            <div className="card-container right">
              <div className="content shadow-lg">
                <h2>2012</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
            <div className="card-container left">
              <div className="content shadow-lg">
                <h2>2011</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
            <div className="card-container right">
              <div className="content shadow-lg">
                <h2>2007</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
                  iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
                  primis ea eam.
                </p>
              </div>
            </div>
          </div>
          <footer className="row px-5 border border-2 shadow py-2">
            <div className="left-footer col-12 col-md-6 d-flex align-items-center">
              <img src="./DAIICT.png" alt="DAIICT LOGO" className="bg-light rounded-circle mx-3" />
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
              </div>
            </div>
          </footer>
        </div>
      );
    }
  });

  export default timeline