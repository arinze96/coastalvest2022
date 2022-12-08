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
            style="background-image: url(assets/newfile3/images/pex1.jpg);">
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
                            <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Medical Hedgefunds
                                Investment
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
            style="background-image: url(assets/newfile3/images/pex3.jpg);">
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
                            <h1 data-animation="fadeInLeft" data-delay=".5s" class="title">Redefining Medical
                                Hedgefunds
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/Headspace_Share.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Headspace</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Headspace is an
                                        accessible digital health platform and app known primarily for its meditation
                                        and mindfulness exercises. This platform boasts hundreds of hours of content for
                                        users and a free introduction to the basics of meditation. App users also have
                                        access to a variety of videos and chat options to optimize their mental health
                                        and wellbeing.</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/Parsley-Logo.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Parsley Health</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Parsley Health is
                                        an innovative take on modern healthcare and primary care. By offering a platform
                                        that integrates cutting-edge medical testing and technology as well as impactful
                                        nutrition, wellness, and prevention research, Parsley Health provides customers
                                        with a holistic medical experience.We are devoted to bring you a better health
                                    </h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/circles_health.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Circles</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Circles is a
                                        mental healthcare startup that is revolutionizing the way consumers access
                                        support groups. Through the company’s laser-focused, professionally-led
                                        groupings and accessible pricing, users are able to more easily access the care
                                        and support they need. Circle focuses more on the improvement on the life of our
                                        patients</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/NervGen-new-logo.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> NervGen Pharma
                                    </h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px"> Nerve damage and
                                        neurodegenerative diseases can have long-lasting impacts that change a person’s
                                        life. NervGen Pharma is attempting to tackle the problem by providing solutions
                                        and treatments to help relieve and heal the symptoms.</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/EntradaLogo-Color.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Entrada Therapeutics</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Devasting
                                        diseases not only affect the person involved, they affect the entire community
                                        they live in. Entrada Therapeutics is attempting to overcome the challenges of
                                        intracellular target access so they can treat and heal those suffering from
                                        these devasting diseases.</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/corvus.png') }}" alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Corvus Pharmaceuticals</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Corvus
                                        Pharmaceuticals works in the clinical stage of biopharmaceutical drugs. Their
                                        intent is to develop new immunology-focused medicines that can target critical
                                        cellular elements of the immune system. Their main focus is one treating cancer
                                        and immune disorders</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/bicycle-health-logo.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Bicycle Health</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Bicycle Health is
                                        a telemedicine startup that offers personalized recovery treatment for opioid
                                        addiction virtually changing the way we see addiction recovery and making
                                        treatment more accessible. Bicycle health operates in almost all major American
                                        cities and we respond quickly to all emergencies</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/felmo_logo_1200x800.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Felmo</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">Felmo is a pet
                                        tech startup that provides a variety of veterinary services for pets from the
                                        comfort of customers’ homes. By offering fast, flexible, and affordable
                                        scheduling, as well as a stress-free veterinary experience for pets, Felmo is
                                        changing the way pet owners care for their pet’s health.</h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/HelloBello-KD9-1-1200x800.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> HelloBello</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">
                                        HelloBello is a subscription-based pet tech startup that crafts fresh,
                                        human-grade food tailored to each dog’s nutritional needs as determined by their
                                        veterinarian-developed algorithm. All HelloBello products are free of
                                        by-products, portioned, and delivered directly to the customer’s door.
                                    </h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/loyal.jpg') }}" alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title">Loyal</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">
                                        Loyal develops medicines to help dogs live longer and healthier lives. Composed
                                        of a team of veterinarians, scientists, and dog-lovers, the goal of this startup
                                        is to produce the first drugs to combat the negative effects of aging in dogs
                                        and also boost their immune system
                                    </h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/gw-jazz-pharmaceuticals.jpg') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> GW Pharmaceuticals</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">
                                        GW has established a world leading position in the development of plant-derived
                                        cannabinoid therapeutics through its proven drug discovery and development
                                        processes, intellectual property portfolio and regulatory and manufacturing
                                        expertise..
                                    </h6>
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
                                    <img class="card-img-top" style="height:150px"
                                        src="{{ asset('assets/newfile3/images/Medopad-Logo1.png') }}"
                                        alt="Card image cap">
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <!--Card content-->
                                <div class="card-body"
                                    style="padding-right: 10px; padding-left: 10px; padding-bottom: 20px">

                                    <!--Title-->
                                    <h4 class="card-title"> Medopad</h4>
                                    <!--Text-->
                                    <h6 class="card-text" style="margin-bottom: 20px; line-height:2; letter-spacing: 0.5px; font-size: 14px">
                                        Medopad connects patients and providers in real time. It also collects data
                                        through wearables and lets patients send their data to healthcare professionals.
                                        The platform also offers providers and insurers ways to analyze large amounts of
                                        data using artificial intelligence and machine learning.
                                    </h6>
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
