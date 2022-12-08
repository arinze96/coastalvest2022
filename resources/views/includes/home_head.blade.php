<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #ccffcc">
    <a class="navbar-brand" href="{{ route('app.home') }}">
        <img src="{{ asset('assets/ct1.png') }}" style="width: 200px; margin-top:10px; height:50px"/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" style="margin: auto">
        <li class="nav-item active">
          <a class="nav-link" href="{{ route('app.home') }}" style="color:white">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{{ route('about') }}" style="color:white">About Us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('user.cryptoMarket') }}" style="color:white">Crypto market</a>
          </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:white">
            Investments
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{ route('user.realEstate') }}" style="color:white">Real Estate</a>
            <a class="dropdown-item" href="{{ route('user.cryptoMarket') }}" style="color:white">Crypto Market</a>
            <a class="dropdown-item" href="{{ route('user.stocks') }}" style="color:white">Stocks Investments</a>
            <a class="dropdown-item" href="{{ route('user.medHedgeFunds') }}" style="color:white">Medical Hedgefunds</a>
            <a class="dropdown-item" href="{{ route('user.techStartup') }}" style="color:white">Tech Startup Investments</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="{{ route('user.faq') }}" style="color:white">Faqs</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="{{ route('user.contact') }}" style="color:white">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="{{ route('user.terms') }}" style="color:white">Terms of use</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="{{ route('user.login') }}" style="color:white">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="{{ route('user.register') }}" style="color:white">Register</a>
          </li>
      </ul>
      {{-- <form class="form-inline my-2 my-lg-0">
        <a href="{{ route('user.login') }}" class="btn btn-outline-success" role="button">Login</a>
        <a href="{{ route('user.register') }}" style="margin-left: 10px" class="btn btn-outline-success" role="button">Register</a>
        
      </form> --}}
    </div>
  </nav>