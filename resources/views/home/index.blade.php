<!DOCTYPE html>
<html lang="en">

<head>
    <title>CoastalTrustCapital - Home</title>
    @include('includes.home_css')
</head>



<body>

    <!--   header area start   -->
    @include('includes.home_header')
    <!--   header area end   -->
    {{-- <div id="preloader">
        <div class="preloader"><span></span><span></span></div>
    </div> --}}

    <!--   hero area start   -->
    <div class="hero-area hero-bg ">
        <video plays-inline autoplay loop muted
            style="position: absolute; right: 0; bottom: 0; left:0, width: 100%;  z-index: -1">
            <source src="{{ asset('assets/img/mock2.mp4') }}" type="video/mp4">
        </video>
        <div class="container">
            <div class="hero-txt">
                <div class="row">
                    <div class="col-12">
                        <span>financial planning without limitation</span>
                        <h3>With almost thirty years of experience in real estate, stocks, medical hedge funds and tech
                            startup investment services has enabled many across the globe to develop a mutual vision for
                            value creation.</h3>
                        <a href="{{ route('about') }}" class="hero-boxed-btn">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-area-overlay"></div>
    </div>
    <!--   hero area end    -->


    <!--    introduction area start   -->
    <div class="intro-section">
        <div class="container">
            <div class="hero-features">
                <div class="row">
                    <div class="col-md-3 col-sm-6 single-hero-feature">
                        <a href="{{ route('user.realEstate') }}">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <div class="icon-wrapper">
                                        <i class="flaticon-briefcase"></i>
                                    </div>
                                    <h3 style="color:white">Real Estate
                                        Investment
                                    </h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 single-hero-feature">
                        <a href="{{ route('user.cryptoMarket') }}">
                            <div class="icon-wrapper">
                                <i class="flaticon-wallet"></i>
                            </div>
                            <h3 style="color: white">Cryptocurrency and
                                Stocks Investment
                            </h3>
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 single-hero-feature">
                        <a href="{{ route('user.medHedgeFunds') }}">
                            <div class="icon-wrapper">
                                <i class="flaticon-chart"></i>
                            </div>
                            <h3 style="color:white">Medical Hedge Funds</h3>
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 single-hero-feature">
                        <a href="{{ route('user.techStartup') }}">
                            <div class="icon-wrapper">
                                <i class="flaticon-profits"></i>
                            </div>
                            <h3 style="color: white">Tech Startups Investment</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 pr-0">
                    <div class="intro-txt">
                        <span class="section-title">Who we are</span>
                        <h5 style="font-size: 14px" class="section-summary">
                            Coastal trust capital is an investment company which is well invested in real estate,
                            stocks, several tech startups and medical hedge funds based on years of experience spanning
                            from multiple ownership of properties and businesses in insurance, real estate, rail
                            transportation, energy generation and distribution, manufacturing and retailing.
                        </h5>
                        <a href="{{ route('about') }}" class="intro-btn"><span>what we do</span></a>
                    </div>
                </div>
                <div class="col-lg-6 pl-lg-0 px-md-3 px-0">
                    <div class="intro-bg"></div>
                </div>
            </div>
        </div>
    </div>
    <!--    introduction area end   -->


    <!--   how we do section start   -->
    <div class="approach-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="approach-summary">
                        <span class="section-title">How we do</span>
                        <h3 class="section-summary" style="font-size: 25px">A fresh approach to financial services for
                            entrepreneurs investing
                            in real estate, stocks, cryptocurrency, medical hedge funds and tech startup </h3>
                        <a href="{{ route('about') }}" class="boxed-btn"><span>our approach</span></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="approach-lists">
                        <li class="single-approach">
                            <div class="approach-icon-wrapper"><i
                                    class="flaticon-arrow-on-the-center-of-the-target"></i></div>
                            <div class="approach-text">
                                <h4>Plans</h4>
                                <p>Every Great financial dream is envisioned into a futuristic plan to be achieved, and
                                    our plan is to financially enable you starts with an understanding of your personal,
                                    financial and lifestyle goals at a variety of options. At Coastal Trust Capital, Our
                                    plan is making you investments options the best </p>
                            </div>
                        </li>
                        <li class="single-approach">
                            <div class="approach-icon-wrapper"><i class="flaticon-organize"></i></div>
                            <div class="approach-text">
                                <h4>Goals</h4>
                                <p>Goals without a plan are just a dream – so at Coastal Trust Capital, our team of
                                    industry experts will work with you to develop strategic plans ranging from top
                                    trending business models and low risk financial opportunities. Our goal is give you
                                    the right plans and financial resources to hit your target financial goal in
                                    multi-investment opportunities</p>
                            </div>
                        </li>
                        <li class="single-approach">
                            <div class="approach-icon-wrapper"><i class="flaticon-reload"></i></div>
                            <div class="approach-text">
                                <h4>Action</h4>
                                <p>Plans require action or they are just words – at Coastal Trust Capital, we work with
                                    you to implement your strategic financial goals and plans through investment on
                                    value basis, long term capital deployment, high quality assets control, and
                                    generating attractive</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--   how we do section end   -->


    <!--    call to action section start    -->
    <div class="cta-section cta-bg" data-parallax="scroll">
        <div class="container">
            <div class="cta-content">
                <div class="row">
                    <div class="col-md-9 col-lg-7">
                        <h3>Contact us for help with your finances.</h3>
                    </div>
                    <div class="col-md-3 col-lg-5 contact-btn-wrapper">
                        <a href="{{ route('user.contact') }}" class="boxed-btn contact-btn"><span>Contact Us</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cta-overlay"></div>
    </div>
    <!--    call to action section end    -->


    <!--    case section start   -->
    <div class="case-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <span class="section-title">Real estate investments</span>
                    <h2 class="section-summary">A fresh approach to real estate investment</h2>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="case-carousel owl-carousel owl-theme">
                        <div class="single-case single-case-bg-1">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}" class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="single-case single-case-bg-2">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}"
                                        class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="single-case single-case-bg-3">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}"
                                        class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="single-case single-case-bg-4">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}"
                                        class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="single-case single-case-bg-6">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}"
                                        class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="single-case single-case-bg-7">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <h4>This property is available in the market</h4>
                                    <p>Real Estate</p>
                                    <a href="{{ route('user.login') }}"
                                        class="readmore-btn"><span>Invest</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--    case section end   -->

    <!--   about company section start   -->
    <div class="about-company-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <span class="section-title">Longterm Investments</span>
                    <h2 class="section-summary" style="font-size: 25px">Medical Hedge funds and Tech Startups
                        investments</h2>
                    <div class="about-company-txt">
                        <p>Our philosophy is simple: our entire business is centred on you and your goals. Financial
                            planning is not about money, it’s about finding ways to help you achieve your goals through
                            careful and thoughtful planning and execution. thats why we invest in early stage tech
                            startup that will change the world in decades to come</p>
                        <p>Of course money is generally central to that in today’s world; but it is not a goal in
                            itself. It’s a means of reaching your goals whatever they might be. We intend to keep you
                            and your household healthy and strong that's why we contribute funds to medical hedge funds
                            that will propagate the next generation of medical practioners</p>
                        <p>At CoastalTrustCapital we help you identify, assess and shape those goals so your plans and
                            actions are
                            always focused on achieving them. whatever they might be.</p>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-6">
                    <div class="tile-gallery">
                        <div class="row">
                            <div class="col-12">
                                <div class="big-img big-img-bg"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="small-img small-img-bg-1"></div>
                            </div>
                            <div class="col-6">
                                <div class="small-img small-img-bg-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="choose-us">
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-reason">
                            <div class="about-icon-wrapper"> <i class="flaticon-reload"></i> </div>
                            <div class="reason-txt">
                                <h4>Inspired</h4>
                                <p>Plans require action or they are just words – at CoastalTrustCapital we work with you
                                    to implement
                                    your strategic plans</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-reason">
                            <div class="about-icon-wrapper"> <i class="flaticon-organize"></i> </div>
                            <div class="reason-txt">
                                <h4>Different</h4>
                                <p>Goals without a plan are just a dream – so at CoastalTrustCapital our team of
                                    industry experts
                                    will work with you to develop strategic plans.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-reason">
                            <div class="about-icon-wrapper"> <i
                                    class="flaticon-arrow-on-the-center-of-the-target"></i> </div>
                            <div class="reason-txt">
                                <h4>Trusted</h4>
                                <p>Great financial advice starts with an understanding of your personal, financial and
                                    lifestyle goals At CoastalTrustCapital we help you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--   about company section end   -->
    <div class="team-section section-padding" data-parallax="scroll" data-speed="0.2"
        data-image-src="{{ asset('assets/newfile2/img/crypto_gif.gif') }}">
        <div class="team-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <span class="section-title">Expert Team</span>
                        <h2 class="section-summary">
                            At CoastalTrustCapital we have a team of financial experts with over 5 decades of experience
                            in stocks
                            investment. You can count on use to manage you portfolio with high return on investment
                        </h2>
                    </div>
                    <div class="col-lg-6">
                        <!-- TradingView Widget BEGIN -->
                        <div class="tradingview-widget-container">
                            <div id="tradingview_a9674"></div>
                            <div class="tradingview-widget-copyright"><a
                                    href="https://www.tradingview.com/symbols/AAPL/" rel="noopener"
                                    target="_blank"><span class="blue-text">Apple</span></a> by TradingView</div>
                            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                            <script type="text/javascript">
                                new TradingView.MediumWidget({
                                    "symbols": [
                                        [
                                            "Apple",
                                            "AAPL|1D"
                                        ],
                                        [
                                            "Google",
                                            "GOOGL|1D"
                                        ],
                                        [
                                            "Microsoft",
                                            "MSFT|1D"
                                        ]
                                    ],
                                    "chartOnly": false,
                                    "width": 600,
                                    "height": 500,
                                    "locale": "en",
                                    "colorTheme": "dark",
                                    "autosize": false,
                                    "showVolume": false,
                                    "hideDateRanges": false,
                                    "scalePosition": "right",
                                    "scaleMode": "Normal",
                                    "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                                    "noTimeScale": false,
                                    "valuesTracking": "1",
                                    "chartType": "line",
                                    "container_id": "tradingview_a9674"
                                });
                            </script>
                        </div>
                        <!-- TradingView Widget END -->
                    </div>
                </div>
            </div>
        </div>
        <div class="team-overlay"></div>
    </div>



    <!--   Testimonial section start    -->
    <div class="testimonial-section pb-115" style="margin-top: 50px">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <span class="section-title">Testimonial</span>
                    <h2 class="section-summary">What people say about CoastalTrustCapital real estate investment</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="testimonial-carousel owl-carousel owl-theme">
                        <div class="single-testimonial">
                            <div class="img-wrapper"><img
                                    src="{{ asset('assets/newfile2/img/testimonial/client-1.jpg') }}" alt="">
                            </div>
                            <div class="client-desc">
                                <p class="comment">They provide you with the best properties that give you high
                                    returns long term</p>
                                <h6 class="name">Jonathon Berkshire</h6>
                                <p class="rank">Denmark</p>
                            </div>
                        </div>
                        <div class="single-testimonial">
                            <div class="img-wrapper"><img
                                    src="{{ asset('assets/newfile2/img/testimonial/client-2.jpg') }}" alt="">
                            </div>
                            <div class="client-desc">
                                <p class="comment">Once you make that first investment, the rest is history. its just
                                    bout the best real estate investment firms</p>
                                <h6 class="name">Rayo finlyke</h6>
                                <p class="rank">Minesota</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--   Testimonial section end    -->
    <div class="team-section section-padding" data-parallax="scroll" data-speed="0.2"
        data-image-src="{{ asset('assets/newfile2/img/crypto_gif.gif') }}">
        <div class="team-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" style="background-color: black">
                        <video style="width: 100%;" height="400" controls {{-- poster="{{ asset('assets/coastalvest.png') }}" --}}>
                            <source src="{{ asset('assets/videos/ad.mp4') }}" type="video/mp4">
                        </video>
                    </div>
                    <div class="col-lg-6">

                        {{-- <span class="section-title">Angella Collison</span> --}}
                        <h2 class="section-summary">
                            CoastalTrustCapital is highly technical and fanatically customer oriented. We’re excited to
                            back such firm in one of the world’s fastest-growing regions.
                        </h2>
                    </div>

                </div>
                <div class="row" style="margin-bottom: 50px; margin-top: 50px">
                    <div class="col-lg-6">
                        
                        {{-- <span class="section-title">An</span> --}}
                        <h2 class="section-summary">
                            CoastalTrustCapitals plays to our strengths, They focus on bringing your amazing ideas to life and we focus on providing all the financial boost you need.
                        </h2>
                    </div>
                    <div class="col-lg-6" style="background-color: black">
                        <video style="width: 100%;" height="400" controls {{-- poster="{{ asset('assets/coastalvest.png') }}" --}}>
                            <source src="{{ asset('assets/videos/ob.mp4') }}" type="video/mp4">
                        </video>
                    </div>
                   
    
                </div>
            </div>
        </div>

        <!--    team section start   -->
        <div class="team-section section-padding team-bg">
            <div class="team-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <span class="section-title">Expert Team</span>
                            <h2 class="section-summary">Meet our expert Coastal Trust Capital
                                executive team
                            </h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-team-member">
                                <div class="team-img-wrapper">
                                    <img src="{{ asset('assets/newfile2/img/team/member-1.jpg') }}" alt="">
                                    <div class="social-accounts">
                                        <ul class="social-account-lists">
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-facebook-f"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-twitter"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-linkedin-in"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h5 class="member-name">Admond harb</h5>
                                    <small>Advisor</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-team-member">
                                <div class="team-img-wrapper">
                                    <img src="{{ asset('assets/newfile2/img/team/member-2.jpg') }}" alt="">
                                    <div class="social-accounts">
                                        <ul class="social-account-lists">
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-facebook-f"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-twitter"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-linkedin-in"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h5 class="member-name">Alen Donald</h5>
                                    <small>Managing Director</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-team-member">
                                <div class="team-img-wrapper">
                                    <img src="{{ asset('assets/newfile2/img/team/member-3.jpg') }}" alt="">
                                    <div class="social-accounts">
                                        <ul class="social-account-lists">
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-facebook-f"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-twitter"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-linkedin-in"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h5 class="member-name">Helen Fox</h5>
                                    <small>Technical Director</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single-team-member">
                                <div class="team-img-wrapper">
                                    <img src="{{ asset('assets/newfile2/img/team/member-4.jpg') }}" alt="">
                                    <div class="social-accounts">
                                        <ul class="social-account-lists">
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-facebook-f"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-twitter"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-linkedin-in"></i></a></li>
                                            <li class="single-social-account"><a href="#"><i
                                                        class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h5 class="member-name">Hirver Pauline</h5>
                                    <small>Sales And Marketting</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-overlay"></div>
        </div>
        <!--    team section end   -->


        <!--    blog section start   -->
        {{-- <div class="blog-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <span class="section-title">Our blog</span>
                    <h2 class="section-summary">Have a look at the CoastalTrustCapital latest News</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-img-wrapper">
                            <img src="{{ asset('assets/newfile2/img/blog/blog-1.jpg') }}" alt="">
                        </div>
                        <div class="blog-txt">
                            <p class="date"><small>By <span class="username">Admin</span></small> | <small>07 Aug,
                                    2022</small> </p>
                            <h4 class="blog-title"><a href="#">Survival Strategies to Ensure
                                    Business...</a></h4>
                            <p class="blog-summary">.</p>
                            <a href="#" class="readmore-btn"><span>Read More</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-img-wrapper">
                            <img src="{{ asset('assets/newfile2/img/blog/blog-2.jpg') }}" alt="">
                        </div>
                        <div class="blog-txt">
                            <p class="date"><small>By <span class="username">Admin</span></small> | <small>03 Aug,
                                    2022</small> </p>
                            <h4 class="blog-title"><a href="#">Invest $5000 for secure your
                                    policy...</a></h4>
                            <p class="blog-summary"></p>
                            <a href="#" class="readmore-btn"><span>Read More</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog">
                        <div class="blog-img-wrapper">
                            <img src="{{ asset('assets/newfile2/img/blog/blog-3.jpg') }}" alt="">
                        </div>
                        <div class="blog-txt">
                            <p class="date"><small>By <span class="username">Admin</span></small> | <small>27 Aug,
                                    2022</small> </p>
                            <h4 class="blog-title"><a href="#">More than 3k company join this year
                                    in...</a></h4>
                            <p class="blog-summary"></p>
                            <a href="#" class="readmore-btn"><span>Read More</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> --}}
        <!--    blog section end   -->





        <!--    footer section start   -->
        @include('includes.home_footer')


        <!--    footer section end   -->


        <!-- preloader section start -->

        <!-- preloader section end -->






        @include('includes.home_script')

</body>

<!-- Mirrored from themeforest.kreativdev.com/CoastalTrustCapital/CoastalTrustCapital/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Oct 2022 16:46:22 GMT -->

</html>
