import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start text-black">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h4 className="text-uppercase mb-4">
                    Conference Management Site
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, harum. A illo hic cumque. Animi, exercitationem est. Ipsum, similique officia.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4"><b>Sections</b></h5>
                  <p>
                    <a className="text-black" href="#">Back To Top</a>
                  </p>
                  <p>
                    <a className="text-black" href="privacy-policy">Privacy Policy</a>
                  </p>
                  {/* <p>
                    <a className="text-black" href="#organizations">Organizations</a>
                  </p> */}
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4"><b>Contact</b></h5>
                  <p><i className="fa fa-home mr-3"></i> Gandhinagar, Gujarat, India</p>
                  <p><i className="fa fa-envelope mr-3"></i> cms_info@gmail.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 279 234 567 88</p>
                </div>
              </div>
            </section>
          </div>
        </footer>
    </div>
  )
}

export default Footer