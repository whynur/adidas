import React from 'react'
import Navbarmenu from '../layout/Navbarmenu'
import Footer from '../layout/Footer'

export default function () {
  return (
    <div>
        <Navbarmenu/>

      <div id="carouselExample" class="carousel slide pt-5 pb-5" style={{width:'100%'}}>
      <div class="carousel-inner" >
      
      <div class="carousel-item active">
      <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-05/230501-yeezy-addidas-al-0612-01ab36.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'2%',fontFamily:'Manrope',caretColor:'transparent'}}>Interesting fact</h1>
      <h5 style={{marginBottom:'1%',fontFamily:'Manrope',caretColor:'transparent'}}>An interesting short fact about Adidas: In 1971, Adidas released its first football shoes with removable studs, giving players the ability to choose the appropriate type of studs based on the field conditions and playing style. This innovative approach to football footwear became popular and made a significant contribution to the development of professional football.</h5>
      <button className='btn btn-light' style={{width:'200px',height:'50px'}}><strong>Buy and dress</strong></button>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://funart.pro/uploads/posts/2020-03/1584387546_12-p-foni-iz-fifa-35.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'2%',fontFamily:'Manrope',caretColor:'transparent'}}>Interesting fact 2</h1>
      <h5 style={{marginBottom:'1%',fontFamily:'Manrope',caretColor:'transparent'}}>Adidas has been the official sponsor of the FIFA World Cup for over 60 years, starting in 1970.</h5>
      <button className='btn btn-light' style={{width:'200px',height:'50px'}}><strong>Get addidas</strong></button>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLYKQq_dbiQAvXZUEt8yAshYMO9kM3pWAw&usqp=CAU" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'2%',fontFamily:'Manrope',caretColor:'transparent'}}>Adidas is cool</h1>
      <button className='btn btn-light' style={{width:'200px',height:'50px'}}><strong>Take your addidas</strong></button>
      </div>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
      </div>

      <div class="container marketing">
        
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_standard.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Heading</h2>
            <p>White | Men's Lifestyle | adidas US</p>
            <p><a class="btn btn-secondary" href="/Store" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cde9362a09ba4dd38c9ead6600ac074e_9366/Duramo_10_Running_Shoes_Black_GW8336_01_standard.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Heading</h2>
            <p>Black | Unisex Lifestyle | adidas US</p>   
            <p><a class="btn btn-secondary" href="/Store" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
            <img class="rounded-circle" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9fdf27c73cc481aa8efacb6002c81bc_9366/Forum_Mid_Shoes_White_FY7939_01_standard.jpg" alt="Generic placeholder image" width="140" height="140"/>
            <h2>Heading</h2>
            <p>White | Unisex Lifestyle | adidas US</p>
            <p><a class="btn btn-secondary" href="/Store" role="button">View details &raquo;</a></p>
          </div>
        </div>

      </div>

      <div className='container mt-5 mb-5'>
      <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://images.tomas.kz/i3/firms/111/5313/5313183/pic_c5c20ddf2fce183_500x500.jpg" alt="Generic placeholder image"/>
          </div>
        </div>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="https://i.ebayimg.com/images/g/4lgAAOSw~S1f-FXO/s-l500.jpg" alt="Generic placeholder image"/>
          </div>
        </div>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://i.pinimg.com/736x/b6/9c/b4/b69cb48adb88f3f39a6d6d0e4c7ae375--adidas-cloudfoam-women-athletic-style.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
    
  )
}
