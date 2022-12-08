<section class="navigation">
    <div class="nav-container">
        <div class="brand">
            {{-- <a href="#!">Logo</a> --}}
            <img src="{{ asset('assets/CT.png') }}" style="width: 50px; margin-top:10px; height:50px" />
        </div>
        <nav>
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul class="nav-list">
                <li><a href="{{ route('about') }}">About Us</a></li>
                <li>
                    <a href="#">Investments</a>
                    <ul class="nav-dropdown">
                        <li style="background-color: black">
                            <a href="{{ route('user.realEstate') }}">Real Estate</a>
                        </li>
                        <li><a href="{{ route('user.cryptoMarket') }}">Crypto Market</a></li>
                        <li>
                            <a href="{{ route('user.stocks') }}">Stocks Investments</a>
                        </li>
                        <li><a href="{{ route('user.medHedgeFunds') }}">Medical Hedgefunds Investments</a></li>
                        <li><a href="{{ route('user.techStartup') }}">Tech Startup Investments</a></li>
                    </ul>
                </li>
                <li><a href="{{ route('user.faq') }}">FAQs</a></li>
                <li><a href="{{ route('user.contact') }}">Contact Us</a></li>
                <li><a href="{{ route('user.terms') }}">Terms Of Use</a></li>
                <li><a href="{{ route('user.login') }}">Login</a></li>
                <li><a href="{{ route('user.register') }}">Register</a></li>
                <li>
                    <a href="{{ route('user.contact') }}">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</section>
