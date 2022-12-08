<!doctype html>
<html lang="en">



<head>

    <!--====== Required meta tags ======-->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--====== Title ======-->
    <title>Codesk - Coworking Space HTML Template</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!--====== Favicon Icon ======-->
    <link rel="shortcut icon" href="{{ asset('assets/newfile3/images/we-know-logo.png') }}" type="image/png">

    <!--====== Bootstrap css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/bootstrap.min.css') }}">

    <!--====== Fontawesome css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/font-awesome.min.css') }}">

    <!--====== flaticon css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/flaticon.css') }}">

    <!--====== nice select css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/nice-select.css') }}">

    <!--====== animate css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/animate.min.css') }}">

    <!--====== Magnific Popup css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/magnific-popup.css') }}">

    <!--====== Slick css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/slick.css') }}">

    <!--====== Default css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/default.css') }}">

    <!--====== Style css ======-->
    <link rel="stylesheet" href="{{ asset('assets/newfile3/css/style.css') }}">

    @include('includes.home_css')

    <style>
        .card {
            margin: 5% 0%;
        }

        .card-body {
            margin: 0% 0% 0% 3%;
            padding: 6% 0%;
        }
    </style>
</head>

<body>




    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== HEADER PART START ======-->
    @include('includes.home_header')

    <!--====== HEADER PART ENDS ======-->

    <!--====== BANNER PART START ======-->
    <section class="banner-slide" style="margin-top: 0">
        <div class="banner-area bg_cover d-flex align-items-center"
            style="background-image: url(assets/newfile3/images/bg551.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-slide-number">
                            <span>01</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="banner-content">
                            <span data-animation="fadeInDown" data-delay=".1s"><img
                                    src="{{ asset('assets/newfile3/images/banner-icon.png') }}" alt=""> Welcome
                                to CostalTrustCapitals</span>
                            <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Tech Startup Investment
                                Platform</h1>
                            <a data-animation="fadeInLeft" data-delay="1s" class="main-btn"
                                href="{{ route('user.register') }}">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-social">
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Linkedin</a></li>
                </ul>
            </div>
        </div>
        <div class="banner-area bg_cover d-flex align-items-center"
            style="background-image: url(assets/newfile3/images/banner-bg-2.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-slide-number">
                            <span>02</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="banner-content">
                            <span data-animation="fadeInDown" data-delay=".1s"><img
                                    src="{{ asset('assets/newfile3/images/banner-icon.png') }}" alt=""> Welcome
                                to CostalTrustCapitals</span>
                            <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Redefining TechStartup
                                Investment
                            </h1>
                            <a data-animation="fadeInLeft" data-delay="1s" class="main-btn"
                                href="{{ route('user.register') }}">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-social">
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Linkedin</a></li>
                </ul>
            </div>
        </div>
    </section>



    <section class="gallery-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="gallery-title text-center">
                        <h3 class="title">Select any company and invest</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== GALLERY PART ENDS ======-->

    <section class="cta-area animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
        <div class="container">

            <div class="row">
                <div class="container">

                    <!-- Card deck -->
                    <div class="card-deck row">

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/Chainalysis-1.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Chainalysise</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Chainalysis is a platform that provides banks, government agencies, and other members of the blockchain ecosystem with a litany of resources to help identify and eliminate hacked or stolen funds. Its anti-money-laundering software aims to create safer interactions for all using blockchain technology</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card mb-4">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/paxful1.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Paxful</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Unlike its competitors, Paxful is a peer-to-peer cryptocurrency marketplace that also serves as a universal money translator. With a platform that includes over 300 financial networks, Paxful offers opportunities to both buyers and sellers alike that may not have access to banking services.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card mb-4">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/sping.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Spring Labs</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">With Spring Labs’ platform, users can expect faster and more secure information exchange due to the startup’s leveraging of blockchain transparency and data collection capabilities. With Spring Labs, fraud is reduced through an increase in verified identities, and the protection of consumer data is prioritized.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/dragon1.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Dragonchain</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px"> Dragonchain is a blockchain startup that provide innovative blockchain-based solutions in a  variety of industries from healthcare to tech.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/axis.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Axis Security</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Axis Security offers management and security solutions for business applications on a global scale. purpose-built zero-trust cloud security platform.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/logo_confluera.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Confluera</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Confluera is a cybersecurity platform that aims to help businesses and organizations identify, track, and manage sophisticated security threats and attacks.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/CaseStudy-Illumio-1200x627.webp') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Illumio</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Illumio is a security startup that has developed microsegmentation technology to produce a zero-trust security solution that wards off the spread of breaches both inside data centers and cloud..</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/vshop.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Verishop</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Verishop is an online marketplace that curates a selection of everyday luxury brands for everything from fashion, beauty, home, and more. Quality products are the backbone of this startup that aims to become the go-to online marketplace for lifestyle goods.</h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <!-- Card -->
                            <div class="card">

                                <!--Card image-->
                                <div class="view overlay">
                                    <img class="card-img-top"
                                        src="{{ asset('assets/newfile3/images/ttap.webp') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body" style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> TinyTap</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">TinyTap is a global library of educational games that are made by educators. Using the TinyTap platform, teachers can easily create educational games without coding knowledge. Additionally, families can access TinyTap’s </h6>
                                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                                    <a href="{{ route('user.register') }}"
                                        style="width: 60%; height: 40px; background-color: darkcyan;border-radius: 15; align-items:center; justify-content:center;display: flex;
	flex-direction: column; border-color:darkcyan; color: white">Invest</a>

                                </div>

                            </div>
                            <!-- Card -->
                        </div>







                    </div>
                    <!-- Card deck -->

                </div>
            </div>
        </div>
    </section>

    <!--====== CTA PART ENDS ======-->

    <!--====== NEWS PART START ======-->




    <!--====== COMPANY LOGOS PART ENDS ======-->

    <!--====== FOOTER PART START ======-->

    @include('includes.home_footer')







    <!--====== jquery js ======-->
    <script src="{{ asset('assets/newfile3/js/vendor/modernizr-3.6.0.min.js') }}"></script>
    <script src="{{ asset('assets/newfile3/js/vendor/jquery-3.5.0.js') }}"></script>

    <!--====== Bootstrap js ======-->
    <script src="{{ asset('assets/newfile3/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/newfile3/js/popper.min.js') }}"></script>

    <!--====== Slick js ======-->
    <script src="{{ asset('assets/newfile3/js/slick.min.js') }}"></script>

    <!--====== odometer js ======-->
    <script src="{{ asset('assets/newfile3/js/jquery.counterup.min.js') }}"></script>
    <script src="{{ asset('assets/newfile3/js/jquery.waypoints.min.js') }}"></script>

    <!--====== wow js ======-->
    <script src="{{ asset('assets/newfile3/js/wow.js') }}"></script>

    <!--====== nice select js ======-->
    <script src="{{ asset('assets/newfile3/js/jquery.nice-select.min.js') }}"></script>

    <!--====== Magnific Popup js ======-->
    <script src="{{ asset('assets/newfile3/js/jquery.magnific-popup.min.js') }}"></script>

    <!--====== Main js ======-->
    <script src="{{ asset('assets/newfile3/js/main.js') }}"></script>

</body>



</html>
