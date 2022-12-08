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
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
</head>

<body>




    <!--====== OFFCANVAS MENU PART ENDS ======-->

    <!--====== HEADER PART START ======-->
    @include('includes.home_head')

    <!--====== HEADER PART ENDS ======-->

    <!--====== BANNER PART START ======-->
    <section class="banner-slide" style="margin-top: 0">
        <div class="banner-area bg_cover d-flex align-items-center"
            style="background-image: url(assets/newfile3/images/banner-bg-1.jpg);">
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
                            {{-- <a data-animation="fadeInLeft" data-delay="1s" class="main-btn"
                                href="{{ route('user.register') }}">Get Started</a> --}}
                                <a data-animation="fadeInLeft" style="margin-left: 20px" data-delay="1s" class="main-btn"
                                href="{{ route('techStartupProduct') }}">View all products</a>
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

    <!--====== BANNER PART ENDS ======-->

    <!--====== BEST CREATIVE PART START ======-->

    <section class="best-creative-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="best-creative-bg">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="best-creative-content">
                                    <h3 class="title">Invest in early stage tech startups.
                                    </h3>
                                    <p>At CostalTrustCapitals we have experts the identifies early stage tech startups
                                        that are doing innovative things that will change how we live our lives and
                                        brings
                                        a high returns after they go public
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="best-creative-list">
                                    <div class="best-creative-seats">
                                        <i class="flaticon-computer"></i>
                                        <h3 class="title">3k+</h3>
                                        <p>Succesful tech startups across seven 5 continets</p>
                                        <span>40 startups at round 4 of investment</span>
                                    </div>
                                    <div class="best-creative-list-item">
                                        <ul>
                                            <li style="font-size: 14px"><i class="fa fa-check"></i>Early stage tech startups</li>
                                            <li style="font-size: 14px"><i class="fa fa-check"></i>$256,900,000 in funding rounds</li>
                                            <li style="font-size: 14px"><i class="fa fa-check"></i>202 aquisitions</li>
                                            <li style="font-size: 14px"><i class="fa fa-check"></i>5 continents</li>
                                            <li style="font-size: 14px"><i class="fa fa-check"></i>Certified Promising Global Companies</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== BEST CREATIVE PART ENDS ======-->

    <!--====== SPACE TO MAKE PART START ======-->

    <section class="space-to-make-area pt-120 pb-120">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="space-to-make-thumb animated wow fadeInLeft" data-wow-duration="1500ms"
                        data-wow-delay="0ms">
                        <img src="{{ asset('assets/newfile3/images/space-to-make-thumb.jpg') }}" alt="">
                        <div class="thumb-content">
                            <span>Over 3400 <br> startups <br> worldwide</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-10">
                    <div class="space-to-make-content">
                        <h3 class="title">Invest in carefully selected early stage startups.</h3>
                        <p>At CostalTrustCapitals we have suitable investment packages that are tailored to give you a
                            higher returns when you
                            invest in our curated startups
                        </p>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="space-to-make-item mt-30">
                                    <a href="#">
                                        <i class="flaticon-workspace"></i>
                                        <span>Flexible investment package</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="space-to-make-item mt-30">
                                    <a href="#">
                                        <i class="flaticon-meeting"></i>
                                        <span>Curated Startups</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="text">The startups we invest in are selected according to a certain standards and
                            we are
                            confident that they will succeed
                        </p>
                        <a class="main-btn main-btn-2" href="{{ route('techStartupProduct') }}">View all products</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-pattern">
            <img src="{{ asset('assets/newfile3/images/shape-pattern.png') }}" alt="">
        </div>
        <div class="shape-pattern-2">
            <img src="{{ asset('assets/newfile3/images/we-know-line.png') }}" alt="">
        </div>
    </section>

    <!--====== SPACE TO MAKE PART ENDS ======-->

    <!--====== TEUSTED PART START ======-->

    <div class="trusted-area bg_cover pt-120 pb-120"
        style="background-image: url(assets/newfile3/images/trusted-bg.jpg);">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="trusted-item text-center">
                        <h3 class="title">Global Leader in Tech Startup Investment.</h3>
                        <a class="main-btn" href="{{ route('user.register') }}">Invest</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--====== TEUSTED PART ENDS ======-->

    <!--====== BENEFITS PART START ======-->

    <section class="benefits-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="benefits-thumb">
                        <img src="{{ asset('assets/newfile3/images/benefits-thumb.jpg') }}" alt="benefits">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="benefits-content">
                        <div class="benefits-title">
                            <h3 class="title">Benefits of our techstartup investments.</h3>
                        </div>
                        <div class="faq-accordion">
                            <div class="accrodion-grp" data-grp-name="faq-accrodion">
                                <div class="accrodion active  animated wow fadeInRight" data-wow-duration="1500ms"
                                    data-wow-delay="0ms">
                                    <div class="accrodion-inner">
                                        <div class="accrodion-title">
                                            <h4>1. High returns</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>Tech startups gives high return in a short period of time because
                                                    technology is
                                                    an essential part of our lives and alot of people invest in that
                                                </p>
                                            </div><!-- /.inner -->
                                        </div>
                                    </div><!-- /.accrodion-inner -->
                                </div>
                                <div class="accrodion   animated wow fadeInRight" data-wow-duration="1500ms"
                                    data-wow-delay="300ms">
                                    <div class="accrodion-inner">
                                        <div class="accrodion-title">
                                            <h4>2. It's easy to understand</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>Our team of experts has spent time to make our
                                                    investment packages quite easy to understand</p>
                                            </div><!-- /.inner -->
                                        </div>
                                    </div><!-- /.accrodion-inner -->
                                </div>
                                <div class="accrodion  animated wow fadeInRight" data-wow-duration="1500ms"
                                    data-wow-delay="600ms">
                                    <div class="accrodion-inner">
                                        <div class="accrodion-title">
                                            <h4>3. Flexibility on monthly terms</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>CoastalTrusCapital Maintains policies that helps investors make
                                                    better decisions on investment</p>
                                            </div><!-- /.inner -->
                                        </div>
                                    </div><!-- /.accrodion-inner -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="benefits-pattern">
            <img src="{{ asset('assets/newfile3/images/benefits-pattern.png') }}" alt="">
        </div>
        <div class="benefits-dot">
            <img src="{{ asset('assets/newfile3/images/benefits-dot.png') }}" alt="">
        </div>
    </section>

    <!--====== BENEFITS PART ENDS ======-->

    <!--====== SERVICES PART START ======-->

    <section class="services-area pt-90 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="services-title">
                        <h3 class="title" style="color: black">What we are offering to our customers.</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services mt-30">
                        <span>
                            <h4 class="title" style="color: black">27/7 Assistance</h4>
                        </span>
                        <p>We have a didicated team on standby to help you with anything.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services mt-30">
                        <span>
                            <h4 class="title" style="color: black">Flexible investment packages</h4>
                        </span>
                        <p>Our investment packages are structured to give you better returns.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-services mt-30">
                        <span>
                            <h4 class="title" style="color: black">High scale investment vehicle</h4>
                        </span>
                        <p>Our various tech investments vehicles are long term guaranteed with multiple options for
                            scaling your returns.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="services-pattern">
            <img src="{{ asset('assets/newfile3/images/services-pattern.png') }}" alt="pattern">
        </div>
        <div class="services-dot">
            <img src="{{ asset('assets/newfile3/images/services-dot.png') }}" alt="pattern">
        </div>
    </section>

    <!--====== SERVICES PART ENDS ======-->

    <!--====== GALLERY PART START ======-->

    <section class="gallery-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="gallery-title text-center">
                        <h3 class="title">Our media portfolio</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <div class="gallery-itmes">
                <div class="row no-gutters gallery-active">
                    <div class="col-lg-3">
                        <div class="gallery-thumb">
                            <img src="{{ asset('assets/newfile3/images/gallery-1.jpg') }}" alt="gallery">
                            <a class="main-btn image-popup"
                                href="{{ asset('assets/newfile3/images/gallery-1.jpg') }}"><i
                                    class="flaticon-plus"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="gallery-thumb">
                            <img src="{{ asset('assets/newfile3/images/gallery-2.jpg') }}" alt="gallery">
                            <a class="main-btn image-popup"
                                href="{{ asset('assets/newfile3/images/gallery-2.jpg') }}"><i
                                    class="flaticon-plus"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="gallery-thumb">
                            <img src="{{ asset('assets/newfile3/images/gallery-3.jpg') }}" alt="gallery">
                            <a class="main-btn image-popup"
                                href="{{ asset('assets/newfile3/images/gallery-3.jpg') }}"><i
                                    class="flaticon-plus"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="gallery-thumb">
                            <img src="{{ asset('assets/newfile3/images/gallery-4.jpg') }}" alt="gallery">
                            <a class="main-btn image-popup"
                                href="{{ asset('assets/newfile3/images/gallery-4.jpg') }}"><i
                                    class="flaticon-plus"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="gallery-thumb">
                            <img src="{{ asset('assets/newfile3/images/gallery-5.jpg') }}" alt="gallery">
                            <a class="main-btn image-popup"
                                href="{{ asset('assets/newfile3/images/gallery-5.jpg') }}"><i
                                    class="flaticon-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== GALLERY PART ENDS ======-->

    <!--====== FUN FACTS PART START ======-->

    <div class="fun-facts-area pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8">
                    <div class="fun-facts-item text-center animated wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="0ms">
                        <h3 class="title counter" style="font-size: 50px">3400</h3>
                        <span>Tech Startups.</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="fun-facts-item active text-center animated wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="300ms">
                        <h3 class="title" style="font-size: 50px">$<span class="counter">256,900,000</span></h3>
                        <span>Total Investment Funds.</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="fun-facts-item text-center animated wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="600ms">
                        <h3 class="title counter" style="font-size: 50px">40,000</h3>
                        <span>Rounds of investments.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fun-facts-pattern">
            <img src="{{ asset('assets/newfile3/images/fun-facts-pattern.png') }}" alt="">
        </div>
        <div class="fun-dots">
            <img src="{{ asset('assets/newfile3/images/fun-dots.png') }}" alt="dots">
        </div>
    </div>

    <!--====== FUN FACTS PART ENDS ======-->

    <!--====== WE KNOWS PART START ======-->

    <section class="we-knows-area pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="we-knows-content">
                        <h3 class="title">We target emerging startups that are making a big impact on the tech space.
                        </h3>
                        <p>Almost every industry has created a subset of companies with a tech component.
                            AgTech, HealthTech, FinTech, and InsurTech are just some examples of this
                            phenomenon.According to Pitchbook,
                            tech companies tracked by this database raised an impressive $600B
                            in VC funding in 2021 (representing a 2x increase over 2020).</p>
                        <img src="{{ asset('assets/newfile3/images/we-know-thumb.jpg') }}" alt="thumb">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="we-knows-center mt-10 animated wow fadeInRight" data-wow-duration="1500ms"
                        data-wow-delay="0ms">
                        <div class="we-knows-item d-block d-sm-flex">
                            <div class="we-knows-item-content">
                                <h4 class="title">Explore our standard investment packages</h4>
                                <a class="main-btn" href="{{ route('user.register') }}">invest <i
                                        class="flaticon-right-arrow"></i></a>
                            </div>
                            <div class="we-knows-item-thumb">
                                <img src="{{ asset('assets/newfile3/images/we-know-item-1.jpg') }}" alt="">
                            </div>
                        </div>
                        <div class="we-knows-item item-2 d-block d-sm-flex mt-10">
                            <div class="we-knows-item-thumb">
                                <img src="{{ asset('assets/newfile3/images/we-know-item-2.jpg') }}" alt="">
                            </div>
                            <div class="we-knows-item-content">
                                <h4 class="title">Get in touch with the tech space </h4>
                                <a class="main-btn" href="{{ route('user.register') }}">invest<i
                                        class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                        <div class="we-know-logo">
                            <img src="{{ asset('assets/newfile3/images/we-know-logo.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="we-know-line">
            <img src="{{ asset('assets/newfile3/images/we-know-line.png') }}" alt="line">
        </div>
    </section>

    <!--====== WE KNOWS PART ENDS ======-->

    <!--====== CODESK CHANGING PART START ======-->

    <section class="codesk-changing-area bg_cover"
        style="background-image: url(assets/newfile3/images/codesk-changing-bg.jpg);">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="codesk-changing-text">
                        <h3 class="title">CoastalTrustCapitals has a community that can help you.</h3>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="codesk-changing-play text-left text-lg-right">
                        <a class="main-btn video-popup" href="https://www.youtube.com/watch?v=_9MEYFNyilQ"><i
                                class="fa fa-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== CODESK CHANGING PART ENDS ======-->

    <!--====== TESTIMONIAL PART START ======-->

    <div class="testimonial-title-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-title text-center">
                        <h2 class="title">What they are saying.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="testimonial-area">
        <div class="container">
            <div class="gallery-title text-center" style="margin-bottom: 50px">
                <h3 class="title">Testimonials</h3>
            </div>
            <div class="row testimonial-active">
                <div class="col-lg-4">
                    <div class="testimonial-item text-center">
                        <p>I was impresed by the customer services, their quick response to my issues helped tripple my
                            portfolio in 2 weeks </p>
                        <h4 class="title">Jessica rose</h4>
                        <span>Freelancer</span>
                        <img src="{{ asset('assets/newfile3/images/testimonial-1.jpg') }}" alt="testimonial">
                        <div class="icon">
                            <img src="{{ asset('assets/newfile3/images/quote-icon.png') }}" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="testimonial-item text-center">
                        <p>Investing in this tech startup investment is the most satisfying investment i have since the
                            pandemic</p>
                        <h4 class="title">Sarah albert</h4>
                        <span>Developer</span>
                        <img src="{{ asset('assets/newfile3/images/testimonial-3.jpg') }}" alt="testimonial">
                        <div class="icon">
                            <img src="{{ asset('assets/newfile3/images/quote-icon.png') }}" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="testimonial-item text-center">
                        <p>I was impresed by the moling services, not lorem ipsum is simply free text of used by
                            refreshing. Neque porro este qui dolorem ipsum quia.</p>
                        <h4 class="title">Kevin martin</h4>
                        <span>CEO</span>
                        <img src="{{ asset('assets/newfile3/images/testimonial-2.jpg') }}" alt="testimonial">
                        <div class="icon">
                            <img src="{{ asset('assets/newfile3/images/quote-icon.png') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial-pattern">
            <img src="{{ asset('assets/newfile3/images/testimonial-pattern.png') }}" alt="">
        </div>
    </section>

    <!--====== TESTIMONIAL PART ENDS ======-->

    <!--====== CTA PART START ======-->

    <section class="cta-area animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-bg">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="cta-text">
                                    <h3 class="title">Fully funded Tech Startups can operate with different systems
                                    </h3>
                                    <a class="main-btn" href="{{ route('techStartupProduct') }}">View all products</a>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="cta-text">
                                    <p>Tech companies tries to differentiate themselves through
                                        two main features: cloud and AI. A cloud-based software
                                        lets businesses access their registry from any device.
                                        Whereas AI capabilities help stores conduct inventory
                                        analysis and come up with sales forecasts.</p>
                                </div>
                            </div>
                        </div>
                        <div class="cta-dot">
                            <img src="{{ asset('assets/newfile3/images/cta-dot.png') }}" alt="cta">
                        </div>
                        <div class="cta-dot-2">
                            <img src="{{ asset('assets/newfile3/images/cta-dot-2.png') }}" alt="cta">
                        </div>
                        <div class="cta-dot-3">
                            <img src="{{ asset('assets/newfile3/images/cta-dot-3.png') }}" alt="cta">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

    

    @include('includes.home_footer')







    <!--====== jquery js ======-->
    <script src="{{ asset('assets/newfile3/js/vendor/modernizr-3.6.0.min.js') }}"></script>
    <script src="{{ asset('assets/newfile3/js/vendor/jquery-3.5.0.js') }}"></script>

    <!--====== Bootstrap js ======-->
    <script src="{{ asset('assets/newfile3/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/newfile3/js/popper.min.js') }}"></script>

    <!--====== Slick js ======-->
    <script src="{{ asset('assets/newfile3/js/slick.min.js') }}"></script>
    <script src="{{ asset('assets/newfile2/js/jquery.slicknav.min.js') }}"></script>

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
