import React from 'react'

const Testimonial = () => {
  return (
  <div className="testimonial">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2>Testimonial</h2>
          <p>It is a long established fact that a reader will be distracted by the </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div id="myCarousel" className="carousel slide testimonial_Carousel " data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption ">
                  <div className="row">
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes.jpg" alt="#" /></i>
                        <h4>JCKOLO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes1.jpg" alt="#" /></i>
                        <h4>ROCOYO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes.jpg" alt="#" /></i>
                        <h4>JCKOLO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes1.jpg" alt="#" /></i>
                        <h4>ROCOYO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes.jpg" alt="#" /></i>
                        <h4>JCKOLO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                    <div className="col-md-6 margin_boot">
                      <div className="test_box">
                        <i><img src="images/tes1.jpg" alt="#" /></i>
                        <h4>ROCOYO</h4>
                        <span>(It is a long )</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial