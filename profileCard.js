class profileCard extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<img src="Images/profile.jpg" class="profileImage">
        <h1>Itzel Vigil</h1>
        <p class="title">Software Engineer</p>
        <p class="title">Universidad de Sonora</p>
        <div style="margin: 24px 0;">
          <a href="https://github.com/itzelvigil"><i class="fa fa-github"></i></a> 
          <a href="https://www.youtube.com/watch?v=-crgQGdpZR0&ab_channel=AbbaVEVO"><i class="fa fa-youtube"></i></a>  
          <a href="https://www.linkedin.com/in/itzel-vigil-ch/"><i class="fa fa-linkedin"></i></a>  
          <a href="#"><i class="fa fa-facebook"></i></a> 
        </div>
        <p><button data-toggle="modal" class="closeButton" data-target="#myModal">Contact</button></p>'`;
        this.className = "card";
    }
}

window.customElements.define("profile-card", profileCard);