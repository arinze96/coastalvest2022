<nav>
    <div id="logo" style="color: white">
        {{-- <img src="{{ asset('assets/ct1.png') }}" style="width: 200px; margin-top:10px; height:50px"/> --}}
        Coastal Trust Capitals
    </div>
    <label for="drop" class="toggle">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </label>
    <input type="checkbox" id="drop"/>
    <ul class="menu" >
      <li><a href="{{ route('app.home') }}">Home</a></li>
      <li>
        <!-- First Tier Drop Down -->
        <label for="drop-1" class="toggle">Investments +</label>
        <a href="#">Investments</a>
        <input type="checkbox" id="drop-1"/>
        <ul>
            <li>
                <a href="{{ route('user.realEstate') }}" style="font-size: 10px">Real Estate</a>
            </li>
            <li>
                <a style="font-size: 10px" href="{{ route('user.cryptoMarket') }}">Crypto Market</a>
            </li>
            <li>
                <a style="font-size: 10px" href="{{ route('user.stocks') }}">Stocks Investments</a>
            </li>
            <li>
                <a style="font-size: 10px" href="{{ route('user.medHedgeFunds') }}">Medical Hedgefunds</a>
            </li>
            <li>
                <a style="font-size: 10px" href="{{ route('user.techStartup') }}">Tech Startup Investments</a>
            </li>
        </ul>
      </li>
      <li>
        <a href="{{ route('user.faq') }}">FAQs</a>
      </li>
      <li>
          <a href="{{ route('user.contact') }}">Contact Us</a>
        </li>
        <li>
          <a href="{{ route('user.terms') }}">Terms of Use</a>
        </li>
        <li>
          <a href="{{ route('user.login') }}">{{ $loggedInUser !== null ? 'Dashboard' : 'Login' }}</a>
        </li>
        <li>
          <a href="{{ route('user.register') }}">Register</a>
        </li>
    </ul>
  </nav>
  