import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
        {/* HeroSection Heading */}

          <h3 className='hero-heading-3 container mt-5 text-center text-sm-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eos sit ducimus vitae sequi odio maiores eaque cum.</h3>

        {/* HeroSection Main Flex-Box */}
        <div className="container d-md-flex justify-content-between align-items-center text-center text-sm-start pt-4">

          <img className='img-fluid w-75 w-md-25' src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Interior" />

          <div className="ps-md-4 pt-4">
              <h4 className='hero-heading-5 content-heading'>My Work</h4>
              <p className='my-work-content'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatem veritatis totam incidunt iusto hic quos dicta cum, odio quibusdam quas, sed impedit sequi aliquid? Consequatur ipsum magnam nam velit sint commodi nobis neque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatem veritatis totam incidunt iusto hic quos dicta cum, odio quibusdam quas, sed impedit sequi aliquid? Consequatur ipsum magnam nam velit sint commodi nobis neque.
              </p>

              <hr />

              <div className="social-handel mt-2 d-flex justify-content-center justify-content-sm-start">
                <img className='img-fluid mt-1' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram Logo"/> 
                <p className='ms-2'> <a href="/">@idsayyamishah_designstudio</a></p>
              </div>
              
          </div>
        </div>

        {/* Services Section */}

      <div className="interior-services mt-5">

          <h4 className='services-heading text-center text-sm-start pt-3 px-5'>Services</h4>

          <h5 className='text-center text-sm-start services-content px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus. Aperiam sequi sapiente dignissimos voluptatem iure id perferendis accusantium dolorum.</h5>

          <hr className='w-50 d-none d-sm-block mx-5'/>

          <ul className='row services-list pt-2 text-center pb-4 px-5'>
            <li className="col-sm-4">Item 1</li>
            <li className="col-sm-4">Item 2</li>
            <li className="col-sm-4">Item 3</li>
            <li className="col-sm-4 py-sm-2">Item 1</li>
            <li className="col-sm-4 py-sm-2">Item 2</li>
            <li className="col-sm-4 py-sm-2">Item 3</li>
            <li className="col-sm-4">Item 1</li>
            <li className="col-sm-4">Item 2</li>
            <li className="col-sm-4">Item 3</li>
          </ul>

      </div>

        {/* Who Am I Section */}
        <div className="container mt-5 mb-5 d-md-flex justify-content-between align-items-center text-center text-sm-start">

          <div className="wim-content pe-4 pb-2">
            <h4 className='hero-heading-5'>Why me?</h4>
            <p className='why-me-content'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem hic dolorum ratione enim, vero ad molestiae labore? Nesciunt aliquam sequi quibusdam eveniet libero quos repudiandae doloribus obcaecati repellat qui sint, hic voluptas ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem hic dolorum ratione enim, vero ad molestiae labore? Nesciunt aliquam sequi quibusdam eveniet libero quos repudiandae doloribus obcaecati repellat qui sint, hic voluptas ad?
            </p>
            <hr />
            <div className="social d-sm-flex">
              <div className="social-handel mt-2 pe-sm-3 pe-md-5 d-flex justify-content-center justify-content-sm-start">
                <img className='img-fluid mt-1' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram Logo"/> 
                {/* <p className='ms-2'>@idsayyamishah</p> */}
                <p className='ms-2'> <a href="/">@idsayyamishah</a></p>
              </div>
              <div className="social-handel mt-sm-2 d-flex justify-content-center justify-content-sm-start">
                <img className='img-fluid mt-1' src="https://cdn-icons-png.flaticon.com/512/732/732026.png" alt="Instagram Logo"/> 
                {/* <p className='ms-2'>sayyamishah@gmail.com</p> */}
                <p className='ms-2'><a href="mailto:name@email.com">sayyamishah@gmail.com</a></p>
              </div>
            </div>
          </div>

          <img className='w-50' src="https://pbs.twimg.com/media/DWqI9C8W0AAYU8v?format=jpg&name=small" alt="profile" />

        </div>

    </>
  )
}

export default HeroSection
