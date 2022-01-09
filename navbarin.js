class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>


      /* Removes Scrollbar */
      ::-webkit-scrollbar {
        width: 0px;
      }

      #pageheader{

      }

      #pageheadertxt{
        font-family: monospace;
        font-size: 60px;
        text-align: center;
      }

      .navbarbutton{
        font-family: monospace;
        font-size: 30px;
        color:white;
      }

      .font1{
        font-family: monospace;
      }

      .font2{
        font-family: "Lucida Console", Courier, monospace;
      }

      .font3{
        font-family: 'Times New Roman', serif;
      }

      .smlwhitebdr{
        border-style: dashed;
        border-radius: 12px;
      }

      .backgroundblur{
          -webkit-backdrop-filter: blur(7px);
          backdrop-filter: blur(7px);
      }

      .longtrklist{
       font-size: 18px;
      }

      .shorttrklist{
       font-size: 24px;
      }


      .fontsz1{
       font-size: 18px;
      }


      .fontsz2{
       font-size: 34px;
      }

      .fontsz3{
       font-size: 24px;
      }

      .fontsz4{
       font-size: 27px;
      }

      .fontsz5{
       font-size: 33px;
      }

      .fontsz6{
       font-size: 30px;
      }

      .fontsz7{
       font-size: 532px;
      }

      .fontsz8{
       font-size: 22px;
      }


      .fontsz11{
       font-size: 25px;
      }

      .artistpropic{
        width: 170px !important;
        height: 170px !important;
      }

      .albumcover{
        width: 225px !important;
        height: 225px !important;
      }

      .bigalbumcover{
         /* width: 390px !important;
         height: 390px !important; */
         width: 100%;
         height: 100%;
      }

      .aas{
        text-align: center !important;
      }

      .dropdown-menu {
        background-color: transparent;
       }

      .dropdowntext{
        color: white !important;
        font-family: monospace !important;
      }

      .dropdowntext:hover{
       background-color:rgba(255, 255, 255, 0.25) !important;
      }

      .color1{
        color:#BA1200;
      }

      .color2{
        color:#031927;
      }

      .color3{
        color:#9DD1F1;
      }

      .color4{
        color:#508AA8;
      }

      .color5{
        color:#C8E0F4;
      }

      .color6{
        color:white;
      }

      .centerit{
        text-align: center;
      }

      .vinylimg{
        width: 475px;
      }

      a{
        color:white !important;
      }

      .color1background{
        backgrond-color:#BA1200;
      }

      .color2background{
        background-color:#031927;
      }

      .color3background{
        background-color:#9DD1F1;
      }

      .color4background{
        background-color:#508AA8;
      }

      .color5background{
        background-color:#C8E0F4;
      }

      .phototoo{
        width: 660px !important;
        height: 500px !important;
        text-align: center !important;
      }



      .activenavbutton{
        color:#FAF9F6 !important;
        pointer-events: none !important;
        text-decoration: dashed underline;
      }


      </style>
      <header>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md text-center">
          <a class="navbarbutton" href="../../index.html">Home</a>
          <span class="navbarbutton">|</span>
          <span class="dropdown">
                  <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                      Hip Hop
                      <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu backgroundblur">
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/029/029.html">0-9</a></li>
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/A2F/A2F.html">A-F</a></li>
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/G2K/G2K.html">G-K</a></li>
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/L2P/L2P.html">L-P</a></li>
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/Q2U/Q2U.html">Q-U</a></li>
                      <li><a class="dropdowntext"  href="../../HipHopNRnB/V2Z/V2Z.html">V-Z</a></li>
                  </ul>
              </span>

              <span class="navbarbutton">|</span>

              <span class="dropdown">
                      <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                          Rock & Other
                          <span class="caret"></span>
                      </a>
                      <ul class="dropdown-menu backgroundblur">
                          <li><a class="dropdowntext"  href="../../AltNRock/029/Alt029.html">0-9</a></li>
                          <li><a class="dropdowntext"  href="../../AltNRock/A2F/AltA2F.html">A-F</a></li>
                          <li><a class="dropdowntext"  href="../../AltNRock/G2K/AltG2K.html">G-K</a></li>
                          <li><a class="dropdowntext"  href="../../AltNRock/L2P/AltL2P.html">L-P</a></li>
                          <li><a class="dropdowntext"  href="../../AltNRock/Q2U/AltQ2U.html">Q-U</a></li>
                          <li><a class="dropdowntext"  href="../../AltNRock/V2Z/AltV2Z.html">V-Z</a></li>
                      </ul>
                  </span>


                  <span class="navbarbutton">|</span>

                  <span class="dropdown">
                          <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                              Extra
                              <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu backgroundblur">
                              <li><a class="dropdowntext"  href="../../Vinyl.html">Vinyl Collection</a></li>
                              <li><a class="dropdowntext"  href="../../AlbumIdeas.html">Suggest A Album</a></li>
                              <li><a class="dropdowntext"  href="../../Upcoming.html">Upcoming Albums</a></li>
                          </ul>
                      </span>

        </div>
        </nav>

      </header>
    `;
  }
}

customElements.define('header-component', Header);
