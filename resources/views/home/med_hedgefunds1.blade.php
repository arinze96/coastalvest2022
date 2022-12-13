<!doctype html>
<html lang="en">


<!-- Mirrored from peacefulqode.com/themes/medicate/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 12 Dec 2022 18:46:20 GMT -->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Coastal Trust Capitals</title>
    <!-- Favicon Icon -->
    <link rel="shortcut icon" href="{{ asset('assets/CT.png') }}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/bootstrap.min.css') }}">
    <!-- LOADING FONTS AND ICONS -->
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assetsnewFile5/rev/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('assetsnewFile5/rev/fonts/font-awesome/css/font-awesome.css') }}">
    <!-- REVOLUTION STYLE SHEETS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/newFile5/rev/css/rs6.css') }}">
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5//css/owl.carousel.min.css') }}">
    <!-- Progressbar CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/progressbar.css') }}">
    <!-- Animation CSS -->
    <link rel="stylesheet" href="{{ asset('assets/neFile5/css/animations.min.css') }}">
    <!-- Magnefic Popup CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/magnific-popup.min.css') }}">
    <!-- Icons CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/fonts/font-awesome/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/newFile5/fonts/flaticon/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/ionicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/newFile5/fonts/themify-icons/themify-icons.css') }}">
    <!--  Style CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/style.css') }}">
    <!--  Responsive CSS -->
    <link rel="stylesheet" href="{{ asset('assets/newFile5/css/responsive.css') }}">
</head>

<body>
    <!--loading start-->
    {{-- <div id="pq-loading">
        <div id="pq-loading-center">
            <img src="{{ asset('assets/newFile5/images/logo.png') }}" class="img-fluid" alt="loading">
        </div>
    </div> --}}
    <!--loading End-->

    <!--=================================
      header start-->
    <header id="pq-header" class="pq-header-default" style="background-color: grey">
        <div class="pq-top-header">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-md-6 text-right">
                        <div class="pq-header-social text-right">
                            <ul>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pq-header-contact ">
                            <ul>
                                <li>
                                    <a href="tel:+1800001658"><i class="fas fa-phone"></i>
                                        <span> +19194211323</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fas fa-envelope">
                                        </i><span><span
                                                class="__cf_email__">support@coastalvest.com</span> 
                                                               </span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pq-bottom-header pq-has-sticky" style="background-color: #25d06f">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img class="img-fluid logo" src="{{ asset('assets/ct1.png') }}" alt="medicate">
                            </a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div id="pq-menu-contain" class="pq-menu-contain">
                                    <ul id="pq-main-menu" class="navbar-nav ml-auto">
                                        <li class="menu-item" ><a href="{{ route('app.home') }}" style="color: white">Home</a></li>
                                        <li class="menu-item" ><a href="{{ route('about') }}" style="color: white">About</a></li>
                                        <li class="menu-item" ><a href="{{ route('user.cryptoMarket') }}" style="color: white">Crypto Market</a></li>
                                        <li class="menu-item current-menu-item">
                                            <a href="#" style="color: white">Investments</a><i class="fa fa-chevron-down pq-submenu-icon" style="color: white"></i>
                                            <ul class="sub-menu">
                                                <li class="menu-item current-menu-item">
                                                    <a href="{{ route('user.realEstate') }}">Real Estate</a>
                                                </li>
                                                <li class="menu-item ">
                                                    <a href="{{ route('user.stocks') }}">Stocks Market</a>
                                                </li>
                                                <li class="menu-item ">
                                                    <a href="{{ route('user.medHedgeFunds') }}">Medical HedgeFunds</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="{{ route('user.techStartup') }}">Tech Startup Investments</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item "><a href="{{ route('user.contact') }}" style="color: white">Contact Us</a></li>
                                        
                                        <li class="menu-item "><a href="{{ route('user.faq') }}" style="color: white">FAQs</a></li>
                                        <li class="menu-item "><a href="{{ route('user.login') }}" style="color: white">{{ $loggedInUser !== null ? 'Dashboard' : 'Login' }}</a></li>
                                </div>
                            </div>
                            <a href="{{ route('user.register') }}" class="pq-button">
                                <div class="pq-button-block">
                                    <span class="pq-button-text">Register</span>
                                    <i class="ion ion-plus-round"></i>
                                </div>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-bars"></i>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!--==============
         Header end
         =================-->

    <!-- START Home 1 REVOLUTION SLIDER 6.5.19

  ================================= -->
    <p class="rs-p-wp-fix"></p>
    <rs-module-wrap id="rev_slider_24_1_wrapper" data-alias="home-1" data-source="gallery"
        style="visibility:hidden;background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;">
        <rs-module id="rev_slider_24_1" data-version="6.5.19">
            <rs-slides>
                <rs-slide style="position: absolute;" data-key="rs-84" data-title="Slide"
                    data-thumb="{{ asset('assets/newFile5/rev/assets/1-51-50x100.jpg') }}" data-anim="ms:600;"
                    data-in="o:0;" data-out="a:false;">
                    <img src="{{ asset('assets/newFile5/rev/assets/1-51.jpg') }}" alt="" title="1-51.jpg"
                        class="rev-slidebg tp-rs-img" data-no-retina>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-84-layer-0" data-type="text" data-color="#666666" data-rsp_ch="on"
                        data-xy="xo:30px;y:m;yo:2px,17px,29px,17px;"
                        data-text="w:normal;s:16,16,14,12;l:32,24,22,20;fw:600;"
                        data-dim="w:654px,565px,436px,268px;h:auto,auto,45px,27px;" data-vbility="t,t,t,f"
                        data-frame_0="x:50,39,22px,13px;y:0,0,0px,0px;"
                        data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1100;sp:1000;sR:1100;"
                        data-frame_999="o:0;st:w;sR:6900;" style="z-index:11;font-family:'Quicksand';">It is a long
                        established fact that a Coastal Trust Capital is a major player in medical hedgefund investment
                        in the last 2 decades
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-84-layer-1" data-type="text" data-color="#0a3041" data-rsp_ch="on"
                        data-xy="xo:41px,38px,38px,39px;y:m;yo:-197px,-154px,-121px,-78px;"
                        data-text="w:normal;s:14,14,14,13;l:22,22,26,21;fw:600;" data-dim="w:auto,auto,auto,144px;"
                        data-frame_0="x:50,39,29,17;" data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;"
                        style="z-index:9;font-family:'Quicksand';text-transform:uppercase;">Investments in
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-84-layer-2" data-type="text" data-color="#18100f" data-rsp_ch="on"
                        data-xy="xo:30px,30px,30px,31px;y:m;yo:-105px,-75px,-50px,-30px;"
                        data-text="w:normal;s:64,48,42,22;l:72,56,50,30;fw:600;"
                        data-border="boc:#25d06f;bow:1px,1px,1px,1px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:900;sp:1000;sR:900;" data-frame_999="o:0;st:w;sR:7100;"
                        style="z-index:10;font-family:'Quicksand';text-transform:capitalize;">Medical Health made
                        easy<br>
                        to you
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-84-layer-4" data-type="shape" data-rsp_ch="on"
                        data-xy="xo:30px;yo:202px,155px,114px,85px;" data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                        data-dim="w:164px,158px,160px,155px;h:30px,30px,30px,25px;" data-border="bor:3px,3px,3px,3px;"
                        data-frame_0="x:50,39,29,17;" data-frame_1="st:600;sp:1000;sR:600;"
                        data-frame_999="o:0;st:w;sR:7400;" style="z-index:8;background-color:#d3e9fb;">
                    </rs-layer>
                    <!--
                  --><a id="slider-24-slide-84-layer-6" class="rs-layer pq-button rev-btn"
                        href="{{ route('medicalHedgefundsProduct') }}" target="_self" data-type="button" data-rsp_ch="on"
                        data-xy="xo:27px,30px,30px,30px;y:m;yo:93px,97px,104px,37px;"
                        data-text="w:normal;s:14,16,16,12;l:22,24,30,20;fw:600;a:left,left,center,center;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="t:15,15,10,10;r:30,30,25,20;b:15,15,10,10;l:30,30,25,20;"
                        data-border="bor:3px,3px,3px,3px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1300;sp:1000;sR:1300;" data-frame_999="o:0;st:w;sR:6700;"
                        data-frame_hover="bgc:#25d06f;bor:3px,3px,3px,3px;bos:solid;sp:100;bri:120%;"
                        style="z-index:12;background-color:#0a3041;font-family:'Quicksand';text-transform:uppercase;"><span
                            class="text">View All Products</span><i class="ion ion-plus-round"></i>
                    </a>
                    <!--
                  -->
                </rs-slide>
                <rs-slide style="position: absolute;" data-key="rs-85" data-title="Slide"
                    data-thumb="{{ asset('assets/newFile5/rev/assets/2-51-50x100.jpg') }}" data-in="o:0;"
                    data-out="a:false;">
                    <img src="{{ asset('assets/newFile5/rev/assets/2-51.jpg') }}" alt="" title="2-51.jpg"
                        class="rev-slidebg tp-rs-img" data-no-retina>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-85-layer-0" data-type="text" data-color="#666666" data-rsp_ch="on"
                        data-xy="xo:30px;y:m;yo:2px,17px,29px,17px;"
                        data-text="w:normal;s:16,16,14,12;l:32,24,22,20;fw:600;"
                        data-dim="w:654px,565px,436px,268px;h:auto,auto,45px,27px;" data-vbility="t,t,t,f"
                        data-frame_0="x:50,39,22px,13px;y:0,0,0px,0px;"
                        data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1700;sp:1000;" data-frame_999="o:0;st:w;sR:6370;"
                        style="z-index:11;font-family:'Quicksand';">
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-85-layer-1" data-type="text" data-color="#0a3041" data-rsp_ch="on"
                        data-xy="xo:41px,38px,38px,37px;y:m;yo:-197px,-154px,-121px,-75px;"
                        data-text="w:normal;s:14,14,14,13;l:22,22,26,21;fw:600;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1100;sp:1000;sR:1100;" data-frame_999="o:0;st:w;sR:6900;"
                        style="z-index:9;font-family:'Quicksand';text-transform:uppercase;">Great Experience In Bulding
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-85-layer-2" data-type="text" data-color="#18100f" data-rsp_ch="on"
                        data-xy="xo:30px,30px,30px,31px;y:m;yo:-105px,-75px,-50px,-30px;"
                        data-text="w:normal;s:64,48,42,22;l:72,56,50,30;fw:600;"
                        data-border="boc:#25d06f;bow:1px,1px,1px,1px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1400;sp:1000;sR:1400;" data-frame_999="o:0;st:w;sR:6600;"
                        style="z-index:10;font-family:'Quicksand';text-transform:capitalize;">up your Investment
                        <br>
                        Portfolio
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-85-layer-4" data-type="shape" data-rsp_ch="on"
                        data-xy="xo:30px;yo:202px,155px,114px,86px;" data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                        data-dim="w:233px,227px,227px,212px;h:30px,30px,30px,25px;" data-border="bor:3px,3px,3px,3px;"
                        data-frame_0="x:50,39,29,17;" data-frame_1="st:1100;sp:1000;" data-frame_999="o:0;st:w;"
                        style="z-index:8;background-color:#d3e9fb;">
                    </rs-layer>
                    <!--
                  --><a id="slider-24-slide-85-layer-6" class="rs-layer pq-button rev-btn"
                        href="{{ route('about') }}" target="_self" data-type="button" data-rsp_ch="on"
                        data-xy="xo:27px,30px,30px,30px;y:m;yo:93px,97px,104px,37px;"
                        data-text="w:normal;s:14,16,16,12;l:22,24,30,20;fw:600;a:left,left,center,center;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="t:15,15,10,10;r:30,30,25,20;b:15,15,10,10;l:30,30,25,20;"
                        data-border="bor:3px,3px,3px,3px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1900;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;"
                        data-frame_hover="bgc:#25d06f;bor:3px,3px,3px,3px;bos:solid;sp:100;bri:120%;"
                        style="z-index:12;background-color:#0a3041;font-family:'Quicksand';text-transform:uppercase;"><span
                            class="text">Read More</span><i class="ion ion-plus-round"></i>
                    </a>
                    <!--
                  -->
                </rs-slide>
                <rs-slide style="position: absolute;" data-key="rs-86" data-title="Slide"
                    data-thumb="{{ asset('assets/newFile5/rev/assets/3-2-50x100.jpg') }}" data-in="o:0;"
                    data-out="a:false;">
                    <img src="{{ asset('assets/newFile5/rev/assets/3-2.jpg') }}" alt="" title="3-2"
                        class="rev-slidebg tp-rs-img" data-no-retina>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-86-layer-0" data-type="text" data-color="#666666" data-rsp_ch="on"
                        data-xy="xo:30px;y:m;yo:2px,17px,29px,17px;"
                        data-text="w:normal;s:16,16,14,12;l:32,24,22,20;fw:600;"
                        data-dim="w:654px,565px,436px,268px;h:auto,auto,45px,27px;" data-vbility="t,t,t,f"
                        data-frame_0="x:50,39,22px,13px;y:0,0,0px,0px;"
                        data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1700;sp:1000;" data-frame_999="o:0;st:w;sR:6370;"
                        style="z-index:11;font-family:'Quicksand';">
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-86-layer-1" data-type="text" data-color="#0a3041" data-rsp_ch="on"
                        data-xy="xo:41px,38px,38px,37px;y:m;yo:-197px,-154px,-121px,-81px;"
                        data-text="w:normal;s:14,14,14,13;l:22,22,26,21;fw:600;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1100;sp:1000;sR:1100;" data-frame_999="o:0;st:w;sR:6900;"
                        style="z-index:9;font-family:'Quicksand';text-transform:uppercase;">higher level of care
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-86-layer-2" data-type="text" data-color="#18100f" data-rsp_ch="on"
                        data-xy="xo:30px,30px,30px,31px;y:m;yo:-105px,-75px,-50px,-30px;"
                        data-text="w:normal;s:64,48,42,22;l:72,56,50,30;fw:600;"
                        data-border="boc:#25d06f;bow:1px,1px,1px,1px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1400;sp:1000;sR:1400;" data-frame_999="o:0;st:w;sR:6600;"
                        style="z-index:10;font-family:'Quicksand';text-transform:capitalize;">Setting standards<br>
                        in medical hedgefunds investments
                    </rs-layer>
                    <!--
                  -->
                    <rs-layer id="slider-24-slide-86-layer-4" data-type="shape" data-rsp_ch="on"
                        data-xy="xo:30px;yo:202px,155px,114px,81px;" data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                        data-dim="w:178px,171px,172px,158px;h:30px,30px,30px,25px;" data-border="bor:3px,3px,3px,3px;"
                        data-frame_0="x:50,39,29,17;" data-frame_1="st:1100;sp:1000;" data-frame_999="o:0;st:w;"
                        style="z-index:8;background-color:#d3e9fb;">
                    </rs-layer>
                    <!--
                  --><a id="slider-24-slide-86-layer-6" class="rs-layer pq-button rev-btn" href="about-us.html"
                        target="_self" data-type="button" data-rsp_ch="on"
                        data-xy="xo:27px,30px,30px,30px;y:m;yo:93px,97px,104px,37px;"
                        data-text="w:normal;s:14,16,16,12;l:22,24,30,20;fw:600;a:left,left,center,center;"
                        data-dim="minh:0px,none,none,none;"
                        data-padding="t:15,15,10,10;r:30,30,25,20;b:15,15,10,10;l:30,30,25,20;"
                        data-border="bor:3px,3px,3px,3px;" data-frame_0="x:50,39,29,17;"
                        data-frame_1="st:1900;sp:1000;sR:1800;" data-frame_999="o:0;st:w;sR:6200;"
                        data-frame_hover="bgc:#25d06f;bor:3px,3px,3px,3px;bos:solid;sp:100;bri:120%;"
                        style="z-index:12;background-color:#0a3041;font-family:'Quicksand';text-transform:uppercase;"><span
                            class="text">Read More</span><i class="ion ion-plus-round"></i>
                    </a>
                    <!--
                  -->
                </rs-slide>
            </rs-slides>
            <rs-static-layers>
                <!--
               -->
            </rs-static-layers>
        </rs-module>
    </rs-module-wrap>

    <!--=================================
         END REVOLUTION SLIDER
         ================================= -->

    <section class="servicebox p-lg-0 pb-0 pq-bg-grey ">
        <div class="container pq-mt-60">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6 col-xl-4">
                    <div class="pq-info-box pq-style-1">
                        <div class="pq-info-box-right-icon"> <i class=" flaticon-medical-doctor"></i> </div>
                        <div class="pq-info-box-icon"><i class=" flaticon-medical-doctor"></i></div>
                        <h5 class="pq-info-title">Investment in Health Special Service companies</h5>
                        <p class="pq-infobox-description">Our Medical experts help our select the most profitable
                            medical firms offering special services</p>
                        {{-- <div class="pq-info-call"> <i class="fas fa-phone-alt"></i>
                            <h4 class="cpq-call-number">987 654 321</h4>
                        </div> --}}
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xl-4 pt-md-0 pt-4">
                    <div class="pq-info-box pq-style-2">
                        <div class="pq-info-box-right-icon"> <i class=" flaticon-doctor"></i> </div>
                        <div class="pq-info-box-icon"><i class=" flaticon-doctor"></i></div>
                        <h5 class="pq-info-title">Seed funding rounds for early stage medical startup</h5>
                        <p class="pq-infobox-description">Over $2 billion investments in 560 companies accross North
                            America</p>
                        {{-- <a class="pq-button pq-button-flat" href="make-appoinment.html">
                            <div class="pq-button-block"> <span class="pq-button-text">Timetable</span> <i
                                    class="ion ion-plus-round"></i> </div>
                        </a> --}}
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xl-4 pt-xl-0 pt-4">
                    <div class="pq-info-box pq-style-1">
                        <div class="pq-info-box-right-icon"> <i class=" flaticon-medical-doctor"></i> </div>
                        <div class="pq-info-box-icon"><i class=" flaticon-medical-doctor"></i></div>
                        <h5 class="pq-info-title">Investment in Health Special Service companies</h5>
                        <p class="pq-infobox-description">Our Medical experts help our select the most profitable
                            medical firms offering special services</p>
                        {{-- <div class="pq-info-call"> <i class="fas fa-phone-alt"></i>
                            <h4 class="cpq-call-number">987 654 321</h4>
                        </div> --}}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section End-->

    <section class="pricing-plan">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="pq-section pq-style-1 text-center">
                        {{-- <span class="pq-section-sub-title">OUR PRICING/</span> --}}
                        <h5 class="pq-section-title">Our Mission and Vision Statement</h5>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="pq-pricing-plan pq-style-1 ">
                        <div class="pq-pricing-head"> <span class="pq-title"> Mission </span>
                            <div class="price" style="padding-right: 20px; padding-left:20px; font-weight: 300">
                                We invest in Emerging Growth Healthcare companies where we believe the flexible
                                application of Coastal trust Capital’s frameworks can amplify the potential and pace of
                                growth. We actively engage with tech-enabled B2B services businesses to leverage and
                                scale their technology and maximize the value of their data assets. We strive to
                                increase operational efficiencies, broaden market reach, and accelerate sustainable
                                growth. Our greatest mutual successes are the result of open dialogue, a spirit of
                                partnership, and active engagement in deploying our flexible, time-tested value creation
                                frameworks.
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mt-4 mt-lg-0 mt-md-0">
                    <div class="pq-pricing-plan pq-style-1 active ">
                        <div class="pq-pricing-head"> <span class="pq-title">Strategy </span>
                            <div class="price" style="padding-right: 20px; padding-left:20px; font-weight: 300">
                                Coastal trust capital seeks the integration software and tech-enabled services in the
                                healthcare companies they invest, which are keen to maximize the potential of their
                                technology and data assets to capture greater market share and expand their offering. We
                                pursue opportunities across the United States and around the globe with a focus on
                                founders in regions where private capital is often less accessible and where our
                                longstanding relationships and active sourcing enable us to identify promising
                                businesses. We invest in businesses looking for active engagement who value our guidance
                                in building out infrastructure, implementing data strategies, and modernizing their
                                processes to meaningfully accelerate growth.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mt-4 mt-xl-0">
                    <div class="pq-pricing-plan pq-style-1 ">
                        <div class="pq-pricing-head"> <span class="pq-title">Drive</span>
                            <div class="price" style="padding-right: 20px; padding-left:20px; font-weight: 300">
                                Coastal trust Capital provides growth equity capital to Healthcare companies and
                                tech-enabled health care services businesses with strong technology and data
                                underpinnings looking to scale with the right partners. Building businesses has been our
                                passion for 30 years. Over that time, we have invested in approximately 130 companies
                                across eight funds.Starting from a deep respect for what it takes to build a company, we
                                bring our investing, operational, infrastructure, technology, and business development
                                skills to support and amplify the success of growing businesses. We choose companies
                                carefully, just as they choose us. We invest in them, advise them, and inspire them
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Section about-us start-->
    <section class="pq-bg-grey">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6"> <img src="{{ asset('assets/newFile5/images/About-us/1.jpg') }}"
                        class="img-fluid pe-xl-5 wow fadeInLeft" alt="home"> </div>
                <div class="col-lg-6 align-self-center mt-lg-0 mt-4">
                    <div class="pq-section pq-style-1 text-left"> <span class="pq-section-sub-title">About the
                            companies we invest in</span>
                        <h5 class="pq-section-title">We have a goal to better Healthcare accross the globe by our
                            strategic investment</h5>
                        <p class="pq-section-description">All Medical establishment we invest in has been fully
                            accredited by the most recognized medical Associations in america</p>
                    </div>
                    <ul class="pq-list-check pq-text-dark mt-3 mb-4">
                        <li><i aria-hidden="true" class="ion ion-checkmark-round"></i><span>They have Scientific
                                skills for getting a better result</span></li>
                        <li><i aria-hidden="true" class="ion ion-checkmark-round"></i><span>A good environment for
                                work</span></li>
                        <li><i aria-hidden="true" class="ion ion-checkmark-round"></i><span>Professional
                                doctors</span>
                        </li>
                        <li><i aria-hidden="true" class="ion ion-checkmark-round"></i><span>Digital laboratory</span>
                        </li>
                        <li><i aria-hidden="true" class="ion ion-checkmark-round"></i><span>Emergency services</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--Section about-us End-->
    <section class="service">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pq-section pq-style-1 text-center"> <span class="pq-section-sub-title">Investment
                            Strategy</span>
                        <h5 class="pq-section-title">Categories of Health firms we invest ins</h5>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-bottom pq-lg-border-right">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-doctor-1"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Medical Equipments Companies</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-bottom pq-lg-border-right">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-care"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Cancer Research Firms</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-bottom pq-lg-border-right">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-examination"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Organ Transplant Firms</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-bottom pq-lg-border-right">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-syringe"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Neurology Specialist Hospitals</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-right pq-lg-border-bottom">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-medical"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Orthopedic Care Companies</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-bottom pq-lg-border-right">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-heartbeat"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Health Insurance Firms</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-right pq-lg-border-bottom">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-x-ray"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Nutritional Company</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3 pq-lg-border-right pq-lg-border-bottom">
                    <div class="pq-fancy-box pq-style-1 text-center">
                        <div class="pq-fancy-box-icon"><i class=" flaticon-drugs"></i></div>
                        <div class="pq-fancy-box-info">
                            <h5 class="pq-fancy-box-title">Diagnostic and Laboratory firm</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section service start-->

    <!--Section service End-->
    <!--Section about start-->
    <section class="about pq-bg-grey pq-dark-bg-side-right">
        <div class="container">
            <div class="row ">
                <div class="col-lg-6 col-md-12 col-xl-5 pb-lg-0 pb-5">
                    <div class="pq-section pq-style-1 text-left mb-4"> <span class="pq-section-sub-title"></span>
                        <h5 class="pq-section-title">We Invest in Intensive care units (ICUs)</h5>
                        <p class="pq-section-description">Intensive care units (ICUs) are specialist hospital wards
                            that provide treatment and monitoring for people who are very ill.They are staffed with
                            specially trained healthcare professionals and contain sophisticated monitoring
                            equipment.ICUs are also sometimes called critical care units (CCUs) or intensive therapy
                            units (ITUs). <br>Intensive care is needed if someone is seriously ill and requires
                            intensive treatment and close monitoring, or if they're having surgery and intensive care
                            can help them recover. </p>
                    </div>
                    <div class="pq-about-info-box mt-1">
                        <div class="pq-about-info-box-icon">
                            <i aria-hidden="true" class=" flaticon-stethoscope"></i>
                        </div>
                        <div class="pq-about-info-box-info">
                            <h5>Mail Us</h5>
                            <p>support@coastalvest.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-xl-5 pe-lg-3 pq-img-none">
                    <img src="{{ asset('assets/newFile5/images/1.jpg') }}" class="img-fluid" alt="servicebox">
                </div>
                <div
                    class="col-xl-2 col-lg-12 col-md-12 py-xl-0 py-5 align-self-center pq-form-counter pq-bg-primary-dark">
                    <div class="pq-counter pq-style-2">
                        <div class="pq-counter-contain">
                            <div class="pq-counter-info text-center">
                                <div class="pq-counter-num-prefix">
                                    <h5 class="timer" data-to="450" data-speed="5000">450</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <div class="pq-counter-num-prefix pq-prefix-top">
                                    <h5 class="timer" data-to="450" data-speed="5000">450</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <p class="pq-counter-description">HAPPY PATIENTS</p>
                            </div>
                        </div>
                    </div>
                    <div class="pq-counter pq-style-2">
                        <div class="pq-counter-contain">
                            <div class="pq-counter-info text-center">
                                <div class="pq-counter-num-prefix">
                                    <h5 class="timer" data-to="100" data-speed="5000">100</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <div class="pq-counter-num-prefix pq-prefix-top">
                                    <h5 class="timer" data-to="100" data-speed="5000">100</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <p class="pq-counter-description">SAVED HEARTS</p>
                            </div>
                        </div>
                    </div>
                    <div class="pq-counter pq-style-2">
                        <div class="pq-counter-contain">
                            <div class="pq-counter-info text-center">
                                <div class="pq-counter-num-prefix">
                                    <h5 class="timer" data-to="59" data-speed="5000">59</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <div class="pq-counter-num-prefix pq-prefix-top">
                                    <h5 class="timer" data-to="59" data-speed="5000">59</h5> <span
                                        class="pq-counter-prefix">+</span>
                                </div>
                                <p class="pq-counter-description">EXPERT DOCTORS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section about End-->

    <!--Section form End-->
    <!--Section testimonial Start-->
    <section class="testimonial pg-border-bottom pq-testimonial-pt">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pq-section pq-style-1 text-center"> <span class="pq-section-sub-title">Our
                            Clients</span>
                        <h5 class="pq-section-title">Our Client Happy Say About Us</h5>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="owl-carousel owl-theme" data-dots="true" data-nav="false" data-desk_num="2"
                        data-lap_num="2" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                        data-loop="true" data-margin="30">
                        <div class="item">
                            <div class="pq-testimonial-box pq-style-1">
                                <div class="pq-testimonial-info">
                                    <div class="pq-testimonial-content">
                                        <p>A staff in my work place adviced to invest in Coastal Trust Capital since
                                            then i have made over $100,000 from my medical hedge funds portfolio. i will
                                            encourage you to invest in this platform, you will never regret it....</p>
                                    </div>
                                </div>
                                <div class="pq-testimonial-media">
                                    <div class="pq-testimonial-img"> <img
                                            src="{{ asset('assets/newFile5/images/testimonial/1.png') }}"
                                            class="img-fluid" alt="testimonial-image"> </div>
                                    <div class="pq-testimonial-meta">
                                        <h5>Jessy Malia</h5> <span>(Portland Oregon USA) </span>
                                    </div>
                                    <div class="pq-testimonial-icon"> <i class="fas fa-quote-right"></i> </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="pq-testimonial-box pq-style-1">
                                <div class="pq-testimonial-info">
                                    <div class="pq-testimonial-content">
                                        <p>Investing in Coastal Trust Capital medical hedgefunds packages will transform
                                            your finances for the better, i strongly advise you invest</p>
                                    </div>
                                </div>
                                <div class="pq-testimonial-media">
                                    <div class="pq-testimonial-img"> <img
                                            src="{{ asset('assets/newFile5/images/testimonial/2.png') }}"
                                            class="img-fluid" alt="testimonial-image"> </div>
                                    <div class="pq-testimonial-meta">
                                        <h5>Brad Witaker</h5> <span>Columbus Ohio </span>
                                    </div>
                                    <div class="pq-testimonial-icon"> <i class="fas fa-quote-right"></i> </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="pq-testimonial-box pq-style-1">
                                <div class="pq-testimonial-info">
                                    <div class="pq-testimonial-content">
                                        <p>Anytime i remember how i almost rejected the opportunity to invest in this
                                            company i shed tear because i would have missed out on alot of money</p>
                                    </div>
                                </div>
                                <div class="pq-testimonial-media">
                                    <div class="pq-testimonial-img"> <img
                                            src="{{ asset('assets/newFile5/images/testimonial/3.png') }}"
                                            class="img-fluid" alt="testimonial-image"> </div>
                                    <div class="pq-testimonial-meta">
                                        <h5> Maria Gutarez</h5> <span>Bercelona Spain</span>
                                    </div>
                                    <div class="pq-testimonial-icon"> <i class="fas fa-quote-right"></i> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =========================
     Footer start
     ============================== -->

    <footer id="pq-footer">
        <div class="pq-footer-style-1">
            <div class="pq-subscribe align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="pq-subscribe-bg">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="pq-subscribe-block"> <img src="{{ asset('assets/ct1.png') }}"
                                                class="pq-subscribe-img img-fluid" alt="medicate-subscribe-image">
                                            <div class="pq-subscribe-details">
                                                <h5>Latest Updates Subscribe To Our Newsletter</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 align-self-center">
                                        <div class="pq-subscribe-from">
                                            <form id="form" class="form">
                                                <div class="form-fields">
                                                    <input class="w-100 pq-bg-transparent" type="email"
                                                        name="EMAIL" placeholder="Enter Your Email" required="">
                                                    <input class="" type="submit" value="Sign up">
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pq-footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-md-6">
                            <div class="pq-footer-block">
                                <img src="{{ asset('assets/ct1.png') }}"
                                    class="pq-footer-logo img-fluid" alt="medicate-footer-logo">
                                <p>We invest in Emerging Growth Healthcare companies where we believe the flexible
                                    application of Coastal trust Capital’s frameworks can amplify the potential and pace
                                    of growth. We actively engage with tech-enabled health services businesses to
                                    leverage and scale their technology and maximize the value of their data assets</p>

                                <div class="pq-footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4  col-md-6">
                            <div class="pq-footer-block">
                                <h4 class="footer-title">All Services</h4>
                                <div class="menu-useful-links-container">
                                    <ul id="menu-useful-links" class="menu">
                                        <li><a href="{{ route('about') }}">About Us</a></li>
                                        <li><a href="{{ route('user.contact') }}">Contact Us</a></li>
                                        <li><a href="{{ route('user.faq') }}">FAQs</a></li>
                                        <li><a href="{{ route('user.terms') }}">Terms of Use</a></li>
                                        <li><a href="{{ route('user.login') }}">Login</a></li>
                                        <li><a href="{{ route('user.register') }}">Register</a></li>
                                        <li><a href="{{ route('user.cryptoMarket') }}">Crypto Market</a></li>
                                        <li><a href="{{ route('user.realEstate') }}">Real Estate</a></li>
                                        <li><a href="{{ route('user.medHedgeFunds') }}">Medical HedgeFunds</a></li>
                                        <li><a href="{{ route('user.stocks') }}">Stocks Investment</a></li>
                                        <li><a href="{{ route('user.techStartup') }}">Tech Startup Investment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4  col-md-6">
                            <div class="pq-footer-block">
                                <h4 class="footer-title">Contact Us</h4>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul class="pq-contact">
                                            <li> <a href="tel:+1800001658"><i class="fas fa-phone"></i>
                                                    <span>+19194211323</span>
                                                </a> </li>
                                            <li> <a href="mailto:support@coastalvest.com"><i
                                                        class="fas fa-envelope"></i><span><span class="__cf_email__">
                                                            support@coastalvest.com
                                                </a>
                                            </li>
                                            <li> <i class="fas fa-map-marker"></i> <span>
                                                    Youngsville, NC 27596 United States</span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pq-copyright-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center "> <span class="pq-copyright"> Copyright 2022
                                coastaltrustcapitals All
                                Rights Reserved</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--Footer End-->

    <!--Back To Top start-->
    <div id="back-to-top">
        <a class="topbtn" id="top" href="#top"> <i class="ion-ios-arrow-up"></i> </a>
    </div>
    <!--Back To Top End-->
    <!--jquery js-->
    <script data-cfasync="false"
        src="{{ asset('assets/newFile5/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js') }}"></script>
    <script src="{{ asset('assets/newFile5/js/jquery.min.js') }}"></script>
    <!--bootstrap js-->
    <script src="{{ asset('assets/newFile5/js/bootstrap.min.js') }}"></script>
    <!--owl-carousal-->
    <script src="{{ asset('assets/newFile5/js/owl.carousel.min.js') }}"></script>
    <!--progress-bar js-->
    <script src="{{ asset('assets/newFile5/js/progressbar.js') }}"></script>
    <!--isotope js-->
    <script src="{{ asset('assets/newFile5/js/isotope.pkgd.min.js') }}"></script>
    <!--countTo js-->
    <script src="{{ asset('assets/newFile5/js/jquery.countTo.min.js') }}"></script>
    <!--Maginfic-Popup js-->
    <script src="{{ asset('assets/newFile5/js/jquery.magnific-popup.min.js') }}"></script>
    <!-- Animation JS -->
    <script src="{{ asset('assets/newFile5/js/wow.min.js') }}"></script>
    <!-- Rev-Slider -->
    <script src="{{ asset('assets/newFile5/rev/js/rbtools.min.js') }}"></script>
    <script src="{{ asset('assets/newFile5/rev/js/rs6.min.js') }}"></script>
    <script src="{{ asset('assets/newFile5/js/rev-custom.js') }}"></script>
    <!--custom js-->
    <script src="{{ asset('assets/newFile5/js/custom.js') }}"></script>


    <script>
        jQuery(window).on('load', function(e) {
            jQuery(".pq-applyform .form-btn").click(function() {
                var first_name = jQuery('#first-name').val();
                var doctor_name = jQuery('#doctor-name').val();
                var disease_name = jQuery('#disease-name').val();
                var email = jQuery('#e-mail').val();

                var result;

                jQuery('.pq-applyform .pq-message').remove();
                jQuery('.pq-applyform .pq-thank-you-message').remove();

                if (first_name == '' || first_name == undefined) {
                    jQuery("<span class='pq-name-error-message pq-message'>Please fill the field</span>")
                        .insertAfter('.pq-applyform .name-field');
                    result = false;
                } else {
                    jQuery('.pq-name-error-message').remove();
                    result = true;
                }

                if (email == '' || email == undefined) {
                    jQuery("<span class='pq-email-error-message pq-message'>Please fill the field</span>")
                        .insertAfter('.pq-applyform .e-mail-field');
                    result = false;
                } else {
                    jQuery('.pq-email-error-message').remove();
                    result = true;
                }

                if (doctor_name == '' || doctor_name == undefined) {
                    jQuery(
                            "<span class='pq-doctor-name-error-message pq-message'>Please fill the field</span>"
                        )
                        .insertAfter('.pq-applyform .doctor-name-field');
                    result = false;
                } else {
                    jQuery('.pq-doctor-name-error-message').remove();
                    result = true;
                }

                if (disease_name == '' || disease_name == undefined) {
                    jQuery(
                            "<span class='pq-disease-name-error-message pq-message'>Please fill the field</span>"
                        )
                        .insertAfter('.pq-applyform #disease-name');
                    result = false;
                } else {
                    jQuery('.pq-disease-name-error-message').remove();
                    result = true;
                }

                if (result == true) {
                    var email = jQuery("#email").text();
                    event.preventDefault();
                    jQuery.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: {
                            'email': email
                        },
                        success: function() {
                            jQuery(
                                    "<span class='pq-thank-you-message pq-text-white ms-5'> Thank You For Filling The form</span>"
                                )
                                .insertAfter('.pq-applyform .pq-button');
                        }
                    });
                }
            });
        });
    </script>
</body>


<!-- Mirrored from peacefulqode.com/themes/medicate/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 12 Dec 2022 18:47:32 GMT -->

</html>
