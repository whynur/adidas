import React from 'react'
import Footer from '../layout/Footer'
import Navbarmenu from '../layout/Navbarmenu'

export default function OurStory() {
  return (
    <div>
        <Navbarmenu/>
        <div className="container mt-5 mb-5">
        <div className="row">
        <div className="col-md-6" style={{background:'rgb(174, 182, 191)',borderRadius:'50px'}}>
          <h3>Our History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales consequat tortor, vel
            tincidunt mi finibus at. Nullam sit amet facilisis neque. Ut vitae pharetra risus. Morbi auctor
            consequat orci, id faucibus neque gravida in. Proin hendrerit enim ut justo commodo, id laoreet
            turpis viverra. Fusce aliquet mi nec elit pharetra, sed interdum erat pharetra.
          </p>
          <p>
            Quisque ultricies orci id odio maximus, vel fermentum velit interdum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Integer volutpat tempor
            molestie. Mauris lacinia odio vel tortor tristique, nec blandit nisl mattis. Suspendisse
            potenti. Cras aliquet tristique elit, a tincidunt felis dapibus at.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://www.sportsdirect.com/images/marketing/adi-3-thumbs-1-768x432-230117.jpg"
            alt="Our Story"
            className="img-fluid"
            style={{borderRadius:'50px'}}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://pbs.twimg.com/media/FYrglxpWQAMMARq.jpg"
            alt="Our Team"
            className="img-fluid"
            style={{borderRadius:'50px'}}
          />
        </div>
        <div className="col-md-6" style={{background:'rgb(174, 182, 191)',borderRadius:'50px'}}>
          <h3>Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales consequat tortor, vel
            tincidunt mi finibus at. Nullam sit amet facilisis neque. Ut vitae pharetra risus. Morbi auctor
            consequat orci, id faucibus neque gravida in. Proin hendrerit enim ut justo commodo, id laoreet
            turpis viverra. Fusce aliquet mi nec elit pharetra, sed interdum erat pharetra.
          </p>
          <p>
            Quisque ultricies orci id odio maximus, vel fermentum velit interdum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Integer volutpat tempor
            molestie. Mauris lacinia odio vel tortor tristique, nec blandit nisl mattis. Suspendisse
            potenti. Cras aliquet tristique elit, a tincidunt felis dapibus at.
          </p>
          <p>
            Quisque ultricies orci id odio maximus, vel fermentum velit interdum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Integer volutpat tempor
            molestie. Mauris lacinia odio vel tortor tristique, nec blandit nisl mattis. Suspendisse
            potenti. Cras aliquet tristique elit, a tincidunt felis dapibus at.
          </p>
          <p>
            Quisque ultricies orci id odio maximus, vel fermentum velit interdum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Integer volutpat tempor
            molestie. Mauris lacinia odio vel tortor tristique, nec blandit nisl mattis. Suspendisse
            potenti. Cras aliquet tristique elit, a tincidunt felis dapibus at.
          </p>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  )
}
