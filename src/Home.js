import React from 'react'
import heroimg1 from './images/vhero.mp4'
import heroimgfr from './images/herofr.gif'
import Footer from './Footer';
import primg from './images/product1.png'
import primg2 from './images/product3.png'



function Home() {
  return (
    <div className='home'>
 <video  className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height='auto'
      >
        <source src={heroimg1} type="video/mp4" />
      </video>      {/* <img src={heroimg1} width="100%" className='heroimg11'/>  */}
    
    {/* <img src={hero2} width="100%" />  */}
    <div className='featuresection'>
    <h2>Where Craftsmanship Meets Contemporary Style</h2> 
    <p>Discover our collection of meticulously crafted analog timepieces that blend classic sophistication with modern engineering.</p>
      <img src={primg} className='productimagehero'/>
     
    </div> 
    <h2 className='head2'>Features</h2>
    <div className='feasturescontent'>
    <div className='features1'>
    <p className='para1'> <span>Watch design</span><br/> Design and handcraft a stunning watch featuring Sapphire, luminous markers with elegant details creating uniqueness and refined movement backed by a decade long warranty.</p>
    <br/><br/><br/><br/><p className='para2'> <span>Exterior of the watch</span> <br/>Rotating bezel to Crown unto finishing of the strap is completely made by 316 stainless steel for best in style watches.</p>
    </div>
    <img src={primg2} width="auto" height='500px' className='images11'/> 
    <div className='features2'>
    <p className='para3'> <span>Watch manufacturing</span>  <br/>High precision and potential in engineering a unique time piece and assembling with hi-tech equipment’s to offer you the Tornado that lasts more then a decade.</p>
    <br/><br/><br/><br/> <p className='para4'> <span>Watch assembling</span> <br/>Innovative technological adaptions in assembling the precision watches and the series of stringent tests until it reaches you with assurance of ever lasting time Piece.</p>
    </div>
    </div>


    <img src={heroimgfr} width="100%" className='images11'/> 
     <a href='./Product'><button className="btn btn-warning"> Buy Now !  </button></a>

    {/* <img src={footer} width="100%" />  */}


    <div class="testimonials-section">
        <div class="header11">
            <h2>Don't just take our words. Over 1000+ people trust us.</h2>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <blockquote>
                    <p class="quote">"This premium watch redefines luxury. The intricate detailing, high-grade materials, and flawless finish make it a masterpiece. It’s not just a watch; it’s a symbol of sophistication. Wearing it elevates my confidence, whether in boardroom meetings or upscale events. Truly worth every penny!"</p>
                </blockquote>
                <p class="author-name">Bessie Cooper</p>
                <p class="author-role">Co-Founder, CEO</p>
                <div class="card-footer">
                    <img class="company-logo" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/alterbone.svg" alt="Company logo"/>
                    <img class="author-image" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-male-1.png" alt="Bessie Cooper"/>
                </div>
            </div>

            <div class="testimonial-card">
                <blockquote>
                    <p className="quote">"Owning this premium watch feels like owning a piece of art. The craftsmanship is unparalleled, and the precision is exceptional. The luxurious design, combined with its advanced features, makes it stand out from any other timepiece I’ve ever owned. A true investment in style and quality!"</p>
                </blockquote>
                <p class="author-name">Albert Flores</p>
                <p class="author-role">Senior Product Manager</p>
                <div class="card-footer">
                    <img class="company-logo" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/ridoria.svg" alt="Company logo"/>
                    <img class="author-image" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-1.png" alt="Albert Flores"/>
                </div>
            </div>

            <div class="testimonial-card">
                <blockquote>
                    <p class="quote">"This premium watch is the epitome of elegance and performance. From the smooth movement to the exquisite materials, every aspect reflects top-notch quality. It’s more than a watch—it’s an heirloom-worthy accessory that commands attention. Highly recommended for those who value class and precision"</p>
                </blockquote>
                <p class="author-name">Jenny Wilson</p>
                <p class="author-role">Head of Marketing</p>
                <div class="card-footer">
                    <img class="company-logo" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/incanto.svg" alt="Company logo"/>
                    <img class="author-image" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/testimonial/5/avatar-female-2.png" alt="Jenny Wilson"/>
                </div>
            </div>
        </div>
    </div>   
    
    <hr class="border border-warning"/>
    <Footer/>
    </div>
    // // <Carousel>
    // //   <Carousel.Item interval={1000}>
    // //      <img src={heroimg1}width='100%'/>
    // //     <Carousel.Caption>
    // //       {/* <h3 style={{color:'black', paddingTop:"1000px"}} >Watch History</h3>
    // //       <p style={{color:'black'}}>Starts in Pocket </p> */}
    // //     </Carousel.Caption>
    // //   </Carousel.Item>
    //   {/* <Carousel.Item interval={500}>
    //   <img src={heroimg2} width='100%'/>
    //   <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item> */}
    //   {/* <Carousel.Item>
    //     <ExampleCarouselImage text="Third slide" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item> */}
    // // </Carousel>

  );
}
export default Home;
