import React from "react"



function LandingPage() {
  
    return (
      <div className="App">
    <div class="container-fluid banner">
          <div class="row">
              <div class="col-md-12" style ={{zIndex:"100",background:"white",color:"black",height:"120px"}}>
                  <nav class="navbar navbar-md">
                      <div class="navbar-brand">UKIYO </div>
                      <ul class="nav " style={{marginRight:"20%"}}>
                          <li class="nav-item">
                              <a class="nav-link" href="#">HOME</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">CONTACT</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">ABOUT</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">SIGN UP</a>
                          </li>
                      </ul>
                  </nav>
              </div>
              <div class="col-md-8 offset-md-2 info">
                  <h1 class="text-center main-title" >Welcome to the BCS Student Voice!</h1>
                  <p class="text-center" style={{color:"white"}}>
                  Student-inspired and managed news for Baker Charter Schools.
                  </p>
                 
              </div>
          </div>
      </div>
    <div class="row" style={{background: "white",height:"90vh",width:"100%",position:"absolute",top:"83%",marginLeft:"0px"}}>
    <div class="col-md-12 text-center" style ={{zIndex:"100",background:"white",color:"black",marginTop:"2rem"}}>
        <h4 ><span style={{marginTop:"3%",marginBottom:"3%",fontSize:"30px",lineHeight:"1.7em",color:"green",fontFamily:"baskervillemtw01-smbdit"}}>Student Managed</span><span style={{marginTop:"3%",marginBottom:"3%",fontSize:"30px",lineHeight:"1.7em",color:"orange",marginLeft:"1rem",fontFamily:"baskervillemtw01-smbdit"}}>Student Run</span><span style={{marginTop:"3%",marginBottom:"3%",fontSize:"30px",lineHeight:"1.7em",color:"black",marginLeft:"1rem",fontFamily:"baskervillemtw01-smbdit"}}>Student Inspired</span></h4>

        </div>
        <div class="col-md-6 section-2"></div>
        <div class="col-md-6 section-2-sub" style={{color:"black"}}>
            <div style={{position:"relative",top:"10%" ,zIndex:"20000",marginLeft:"10%"}}>
            <h3 style={{marginBottom:"2rem"}}><b>Who Are We?</b></h3>
            
            <p style={{marginRight:"30%", fontSize:"1.2rem"}}>The BCS Student Voice is an online newspaper for Baker Charter Schools run by a team of creative BWA and BEC students. We are dedicated to strengthening the BCS community, so you will often find us bleary-eyed and hunched over our computer screens for days at a time (just kidding).
<div class ="row mt-4">
<div class="col-4">
    <button class="btn" style={{border:"3px solid", fontWeight:"bold",fontSize:"1.2rem"}}>More info!</button>
    </div>
<div class="col-2"></div>
<div class="col-4" >  <button style={{border:"3px solid",fontWeight:"bold",fontSize:"1.2rem",position:"relative",right:"15%"}} class="btn">Email us!</button></div>
</div>
</p>
</div>


        </div>


    </div>

    <div class="row section3" style={{background: "white",height:"100vh",width:"100%",marginLeft:"0px"}}>
    <div class="col-md-4 text-center" style ={{zIndex:"100",background:"white",color:"black",marginLeft:"0%"}}>
    <img class="logo-svg" src="https://static.wixstatic.com/media/844f7a_b755dc54701141f9a3e346b1ce7468ba~mv2.gif" alt="" style={{width: "235px", height: "239px", objectFit: "cover", objectPosition: "50% 50%",position:"relative",top:"-82px",left:"15%"}}>
        </img>

        </div>
        <div class="col-md-8 " style={{paddingLeft:"3rem"}}>
            <h3 style={{color:"black",marginRight:"40%"}}>Every young person should be able to voice their opinions about the world.</h3>
<p style={{fontSize:"1.8em",color:"gray",marginTop:"1.8rem",marginLeft:"5%",marginRight:"35%"}}>That's what the BCS Student Voice is for.</p>
        </div>
        <div class="col-md-12">
<div id="demo" class="carousel slide" data-ride="carousel" style ={{width:"102%"}}>


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img style={{    width: "100%",
    height: "60vh",
    objectFit: "cover"
}}src="../img/banner.jpg" alt="Los Angeles"/>
 <div class="carousel-caption">
    <h1>Los Angeles</h1>
    <p>We had such a great time in LA!</p>
  </div>
  </div>
  <div class="carousel-item">
    <img style={{    width: "100%",
    height: "60vh",
    objectFit: "cover"
}}src="../img/overlay.png" alt="Chicago"/>
 <div class="carousel-caption">
    <h1>Los Angeles</h1>
    <p>We had such a great time in LA!</p>
  </div>
  </div>
  <div class="carousel-item">
    <img style={{    width: "100%",
    height: "60vh",
    objectFit: "cover"
}} src="../img/banner.jpg" alt="New York"/>
 <div class="carousel-caption">
    <h1>Near Death Experience</h1>
    <p>We had such a great time in LA!</p>
  </div>
  </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>

</div>
< div class="container-fluid banner"  style={{padding:"0px"}}>
<div class="col-md-12 section4 text-center" style={{top:"0vh",background: "white",width:"100%",marginLeft:"0px"}}>
    <h3 style ={{color:"black",textAlign:"center",fontWeight:"bold"}}>Get Your <span style={{color:"orange",marginRight:"4px"}}>Creative</span>Side On</h3>
   <h1 style={{textAlign:"center",color:"gray",fontWeight:"100"}}>Get involved with the BCS Student Voice!</h1>
   <button style={{border:"3px solid", fontWeight:"bold",fontSize:"1.2rem",textAlign:"center"}} class="btn">Students</button>
   <button style={{border:"3px solid", fontWeight:"bold",fontSize:"1.2rem",textAlign:"center"}} class=" parent-btn btn">Parents Staff</button>
    </div>
    <div class="col-md-8 offset-md-2 info">
                  <h4 class="title-txt text-center" style={{marginLeft:"30%",marginRight:"30%"}}>Inspirational Quote
"Do what you do. Do what makes you unique. Do what makes you happy"

 

~ Seán William McLoughlin

​</h4>
                  </div>
    <div class="col-md-12 section4 text-center" style={{top:"50vh",background: "white",height:"5vh",width:"100%",marginLeft:"0px"}}>
    <footer class=" text-lg-start " style={{position:"relative",top:"80%",backgroundColor: "rgba(0, 0, 0, 0.2)"}}>

  <div class=" p-3">
   
    <a style={{position:"relative",top:"-12px"}} class="text-dark text-left" href="https://mdbootstrap.com/"> © 2020 Copyright:Ukiyo.com</a>
  </div>
  <ul class="nav " style={{marginRight:"20%"}}>
                          <li class="nav-item">
                              <a class="nav-link" href="#">HOME</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">CONTACT</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">ABOUT</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">SIGN UP</a>
                          </li>
                      </ul>
</footer>
    </div>
  </div>
  
</div>

      

        

      </div>
    );
  }
  
  export default LandingPage;
  