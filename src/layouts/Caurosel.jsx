export default function Carousel (){
    return (
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide ">
   
  <div>
  <div className="carousel-inner text-dark p-4">
    <div className="carousel-item active">
       <h4>
       Happiness is when your code runs without error.
        </h4>
    </div>
    <div className="carousel-item">
      <h4>
      I'm silently judging your website.
      </h4>   
    </div>
    <div className="carousel-item">
      <h4>
      404 Not Fond!!!!!!
      </h4> 
    </div>
  </div>
  </div>
  <div className="carousel-indicators my-auto mx-auto">
    <button className=" active"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
    <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
</div>
    )
}