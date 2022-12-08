<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>CoastalTrustCapital-Real-Estate</title>
    <!-- Custom CSS -->
    <link href="{{ asset('assets/newFile1/css/styles.css') }}" rel="stylesheet">
    <!-- Custom Color Option -->
    <link href="{{ asset('assets/newFile1/css/colors.css') }}" rel="stylesheet">
    @include('includes.home_css')
    <style>
        nav {
            margin: 0;
            padding: 0;
            background-color: #254441;
        }

        #logo {
            display: block;
            padding: 0 30px;
            float: left;
            font-size: 20px;
            line-height: 60px;
        }

        nav:after {
            content: "";
            display: table;
            clear: both;
        }

        nav ul {
            float: right;
            padding: 0;
            margin: 0;
            list-style: none;
            position: relative;
        }

        nav ul li {
            margin: 0px;
            display: inline-block;
            float: left;
            background-color: #254441;
        }

        nav a {
            display: block;
            padding: 0 20px;
            color: #FFF;
            font-size: 20px;
            line-height: 60px;
            text-decoration: none;
        }

        nav ul li ul li:hover {
            background: #000000;
        }

        nav a:hover {
            background-color: #000000;
        }

        nav ul ul {
            display: none;
            position: absolute;
            top: 60px;
        }

        nav ul li:hover>ul {
            display: inherit;
        }

        nav ul ul li {
            width: 170px;
            float: none;
            display: list-item;
            position: relative;
        }

        nav ul ul ul li {
            position: relative;
            top: -60px;
            left: 170px;
        }

        li>a:after {
            content: ' +';
        }

        .toggle,
        [id^=drop] {
            display: none;
        }

        li>a:only-child:after {
            content: '';
        }

        /*Responsive Styles*/
        @media all and (max-width : 768px) {
            #logo {
                display: block;
                padding: 0;
                width: 100%;
                text-align: center;
                float: none;
            }

            nav {
                margin: 0;
            }

            .toggle+a,
            .menu {
                display: none;
            }

            .toggle {
                display: block;
                background-color: #254441;
                padding: 0 20px;
                color: #FFF;
                font-size: 20px;
                line-height: 60px;
                text-decoration: none;
                border: none;
            }

            .toggle:hover {
                background-color: #000000;
            }

            [id^=drop]:checked+ul {
                display: block;
            }

            nav ul li {
                display: block;
                width: 100%;
            }

            nav ul ul .toggle,

            nav ul ul a {
                padding: 0 40px;
            }

            nav ul ul ul a {
                padding: 0 80px;
            }

            nav a:hover,

            nav ul ul ul a {
                background-color: #000000;
            }

            nav ul li ul li .toggle,

            nav ul ul a {
                background-color: #212121;
            }

            nav ul ul {
                float: none;
                position: static;
                color: #ffffff;
            }

            nav ul ul li:hover>ul,

            nav ul li:hover>ul {
                display: none;
            }

            nav ul ul li {
                display: block;
                width: 100%;
            }

            nav ul ul ul li {
                position: static;
            }
        }

        @media all and (max-width : 330px) {
            nav ul li {
                display: block;
                width: 94%;
            }
        }
    </style>
</head>

<body class="blue-skin">

    <div id="main-wrapper">
        @include('includes.home_heady')
        <div class="clearfix"></div>
        <div class="image-cover hero-banner" style="background:#eff6ff url(assets/newFile1/img/pp0.png) no-repeat;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-11 col-sm-12">
                        <div class="inner-banner-text text-center">
                            {{-- <p class="lead-i" style="color: #fff">Amet consectetur adipisicing <span
                                    class="badge badge-success">New</span></p> --}}
                            <h2 style="color: #fff; margin-top: 40px"><span style="color: #fff" class="font-normal">Find
                                    Your</span> Perfect Place.</h2>
                        </div>
                        <div class="full-search-2 eclip-search italian-search hero-search-radius shadow-hard mt-5">
                            <div class="hero-search-content">
                                <div class="row">

                                    <div class="col-lg-4 col-md-4 col-sm-12 b-r">
                                        <div class="form-group">
                                            <div class="choose-propert-type">
                                                <ul>
                                                    <li>
                                                        <input id="cp-1" class="checkbox-custom" name="cpt"
                                                            type="radio" checked>
                                                        <label for="cp-1" class="checkbox-custom-label">Buy</label>
                                                    </li>
                                                    <li>
                                                        <input id="cp-2" class="checkbox-custom" name="cpt"
                                                            type="radio">
                                                        <label for="cp-2" class="checkbox-custom-label">Rent</label>
                                                    </li>
                                                    <li>
                                                        <input id="cp-3" class="checkbox-custom" name="cpt"
                                                            type="radio">
                                                        <label for="cp-3" class="checkbox-custom-label">Sold</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-4 col-sm-10 p-0 elio">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="text" class="form-control"
                                                    placeholder="Search for a location">
                                                <img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                                    width="20"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-1 col-md-1 col-sm-2">
                                        <div class="form-group">
                                            <a class="collapsed ad-search" data-bs-toggle="collapse"
                                                data-parent="#search" data-bs-target="#advance-search"
                                                href="javascript:void(0);" aria-expanded="false"
                                                aria-controls="advance-search"><i class="fa fa-sliders-h"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <a href="#" class="btn search-btn black">Search</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- ================= Explore Property ================= -->
        <section>
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center"
                        style="background-color: #ccffcc; margin-top: 50px; margin-bottom: 50px">
                        <div style="margin-top: 30px" class="sec-heading">
                            <h2>Explore Good places</h2>
                            <p style="margin-top: 30px">We specifically invest and look out on deals for any property
                                that is used exclusively for business and residential purposes, such as apartment
                                complexes, gas stations, grocery stores, hospitals, hotels, offices, parking facilities,
                                restaurants, shopping centers, stores, and theaters.
                                And then we buy into them and grow investment gains by capitalising on the rents and
                                leases while properly maintaining and keeping it functional and modern.</p>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails') }}"><img
                                                    src="{{ asset('assets/newFile1/img/0mg11.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails') }}"
                                                class="prt-link-detail">Banyon Tree Realty</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$7,600</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />210 Zirak Road, Canada</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails1') }}"><img
                                                    src="{{ asset('assets/newFile1/img/omg11.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails1') }}"
                                                class="prt-link-detail">Blue Reef Properties</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$17,600</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />9572 Trusel Ave.
                                        VA</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails2') }}"><img
                                                    src="{{ asset('assets/newFile1/img/0mg24.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails2') }}"
                                                class="prt-link-detail">Beacon Homes LLC</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$9,200</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />7 Magnolia
                                        Anaheim, CA</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails3') }}"><img
                                                    src="{{ asset('assets/newFile1/img/0mg28.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails3') }}"
                                                class="prt-link-detail">Bluebell Real Estate</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$60,500</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />83 Vale Street
                                        Elgin, IL</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails4') }}"><img
                                                    src="{{ asset('assets/newFile1/img/0mg43.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails4') }}"
                                                class="prt-link-detail">Found Property Group</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$25,850</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />481 High Dr.
                                        Media, PA</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->

                    <!-- Single Property -->
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="property-listing property-2">

                            <div class="listing-img-wrapper">
                                <div class="list-img-slide">
                                    <div class="click">
                                        <div><a href="{{ route('user.realEstateDetails5') }}"><img
                                                    src="{{ asset('assets/newFile1/img/0mg46.webp') }}"
                                                    class="img-fluid mx-auto" alt="" /></a></div>
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-wrapper">
                                <div class="listing-short-detail-wrap">
                                    <div class="listing-short-detail">
                                        <span class="property-type">For Rent</span>
                                        <h4 class="listing-name verified"><a
                                                href="{{ route('user.realEstateDetails5') }}"
                                                class="prt-link-detail">Strive Partners Realty</a></h4>
                                    </div>
                                    <div class="listing-short-detail-flex">
                                        <h6 class="listing-card-info-price">$37,100</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="price-features-wrapper">
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt="" /></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt="" /></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt="" /></div>800 sqft
                                    </div>
                                </div>
                            </div>

                            <div class="listing-detail-footer">
                                <div class="footer-first">
                                    <div class="foot-location"><img src="{{ asset('assets/newFile1/img/pin.svg') }}"
                                            width="18" alt="" />8 San Pablo St.
                                        New Kensington, PA</div>
                                </div>
                                <div class="footer-flex">
                                    <a href="{{ route('user.register') }}" class="prt-view">Invest</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- End Single Property -->


                </div>

                {{-- <div class="row" style="margin-bottom: 50px">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                        <a href="#" class="btn btn-theme-light-2 rounded">Browse More
                            Properties</a>
                    </div>
                </div> --}}

            </div>
        </section>
        <!-- ================================= Explore Property =============================== -->

        <!-- ============================ Property Location Start ================================== -->
        <section class="bg-light">
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center"
                        style="background-color: #ccffcc; margin-top: 50px; margin-bottom: 50px">
                        <div style="margin-top: 30px" class="sec-heading">
                            <h2>Find By Locations</h2>
                            <p style="margin-top: 30px">We deal on any property used exclusively for business purposes,
                                such as
                                apartment complexes, gas stations, grocery stores, hospitals, hotels, offices, parking
                                facilities, restaurants, shopping centers, stores, and theaters.</p>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-1.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">San Francisco, California</h4>
                                    <span>12 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-2.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">Dunao, California</h4>
                                    <span>142 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-3.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">Liverpool, London</h4>
                                    <span>17 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-4.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">San Francisco, New York</h4>
                                    <span>72 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-5.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">New Orleans, Louisiana</h4>
                                    <span>102 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                        <div class="location-property-wrap">
                            <div class="location-property-thumb">
                                <span><img src="{{ asset('assets/newFile1/img/c-6.png') }}" class="img-fluid"
                                        alt="" /></span>
                            </div>
                            <div class="location-property-content">
                                <div class="lp-content-flex">
                                    <h4 class="lp-content-title">Los Angeles</h4>
                                    <span>95 Properties</span>
                                </div>
                                {{-- <div class="lp-content-right">
                                    <a href="#" class="lp-property-view"><i class="ti-angle-right"></i></a>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                </div>

                {{-- <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                        <a href="#" class="btn btn-theme-light rounded">Browse More
                            Locations</a>
                    </div>
                </div> --}}

            </div>
        </section>
        <section>
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center"
                        style="background-color: #ccffcc; margin-top: 50px; margin-bottom: 50px">
                        <div style="margin-top: 30px" class="sec-heading">
                            <h2>Featured Property For Sale</h2>
                            <p style="margin-top: 30px">Investors and analysts keep a close eye on housing starts
                                because the numbers can provide a general sense of economic direction. Moreover, the
                                types of new housing starts can give clues about how the economy is developing</p>
                        </div>
                    </div>
                </div>

                <div class="row list-layout">

                    <!-- Single Property Start -->
                    <div class="col-lg-6 col-md-12">
                        <div class="property-listing property-1">

                            <div class="listing-img-wrapper">
                                <a href="{{ route('user.realEstateDetails6') }}">
                                    <img src="assets/newFile1/img/0mg52.webp" class="img-fluid mx-auto"
                                        alt="" />
                                </a>
                            </div>

                            <div class="listing-content">

                                <div class="listing-detail-wrapper-box">
                                    <div class="listing-detail-wrapper">
                                        <div class="listing-short-detail">
                                            <h4 class="listing-name"><a
                                                    href="{{ route('user.realEstateDetails6') }}">Resort Valley
                                                    Ocs</a></h4>
                                            <div class="fr-can-rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="reviews_text">(90 Reviews)</span>
                                            </div>
                                            <span class="prt-types sale">For Sale</span>
                                        </div>
                                        <div class="list-price">
                                            <h6 class="listing-card-info-price">$70,000</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="price-features-wrapper">
                                    <div class="list-fx-features">
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                    alt="" /></div>3 Beds
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bathtub.svg') }}"
                                                    width="13" alt="" /></div>1 Bath
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                    alt="" /></div>800 sqft
                                        </div>
                                    </div>
                                </div>

                                <div class="listing-footer-wrapper">
                                    <div class="listing-locate">
                                        <span class="listing-location"><i class="ti-location-pin"></i>70 E.
                                            Meadowbrook Lane
                                            Chula Vista</span>
                                    </div>
                                    <div class="listing-detail-btn">
                                        <a href="{{ route('user.register') }}" class="more-btn">Invest</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- Single Property End -->

                    <!-- Single Property Start -->
                    <div class="col-lg-6 col-md-12">
                        <div class="property-listing property-1">

                            <div class="listing-img-wrapper">
                                <a href="{{ route('user.realEstateDetails7') }}">
                                    <img src="{{ asset('assets/newFile1/img/0mg61.webp') }}"
                                        class="img-fluid mx-auto" alt="" />
                                </a>
                            </div>

                            <div class="listing-content">

                                <div class="listing-detail-wrapper-box">
                                    <div class="listing-detail-wrapper">
                                        <div class="listing-short-detail">
                                            <h4 class="listing-name"><a
                                                    href="{{ route('user.realEstateDetails7') }}">Adobe Property
                                                    Advisors</a></h4>
                                            <div class="fr-can-rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="reviews_text">(62 Reviews)</span>
                                            </div>
                                            <span class="prt-types rent">For Rent</span>
                                        </div>
                                        <div class="list-price">
                                            <h6 class="listing-card-info-price">$23,400</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="price-features-wrapper">
                                    <div class="list-fx-features">
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                    alt="" /></div>3 Beds
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bathtub.svg') }}"
                                                    width="13" alt="" /></div>1 Bath
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                    alt="" /></div>800 sqft
                                        </div>
                                    </div>
                                </div>

                                <div class="listing-footer-wrapper">
                                    <div class="listing-locate">
                                        <span class="listing-location"><i class="ti-location-pin"></i>9151 Third St.
                                            Vallejo, CA </span>
                                    </div>
                                    <div class="listing-detail-btn">
                                        <a href="{{ route('user.register') }}" class="more-btn">Invest</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- Single Property End -->

                    <!-- Single Property Start -->
                    <div class="col-lg-6 col-md-12">
                        <div class="property-listing property-1">

                            <div class="listing-img-wrapper">
                                <a href="{{ route('user.realEstateDetails8') }}">
                                    <img src="{{ asset('assets/newFile1/img/0mg68.webp') }}"
                                        class="img-fluid mx-auto" alt="" />
                                </a>
                            </div>

                            <div class="listing-content">

                                <div class="listing-detail-wrapper-box">
                                    <div class="listing-detail-wrapper">
                                        <div class="listing-short-detail">
                                            <h4 class="listing-name"><a
                                                    href="{{ route('user.realEstateDetails8') }}">Bluebell Real
                                                    Estate</a></h4>
                                            <div class="fr-can-rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="reviews_text">(34 Reviews)</span>
                                            </div>
                                            <span class="prt-types rent">For Rent</span>
                                        </div>
                                        <div class="list-price">
                                            <h6 class="listing-card-info-price">$35,000</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="price-features-wrapper">
                                    <div class="list-fx-features">
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                    alt="" /></div>3 Beds
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bathtub.svg') }}"
                                                    width="13" alt="" /></div>1 Bath
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                    alt="" /></div>800 sqft
                                        </div>
                                    </div>
                                </div>

                                <div class="listing-footer-wrapper">
                                    <div class="listing-locate">
                                        <span class="listing-location"><i class="ti-location-pin"></i>8508 Country
                                            Club Lane
                                            Los Angeles, CA</span>
                                    </div>
                                    <div class="listing-detail-btn">
                                        <a href="{{ route('user.register') }}" class="more-btn">Invest</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- Single Property End -->

                    <!-- Single Property Start -->
                    <div class="col-lg-6 col-md-12">
                        <div class="property-listing property-1">

                            <div class="listing-img-wrapper">
                                <a href="{{ route('user.realEstateDetails9') }}">
                                    <img src="{{ asset('assets/newFile1/img/0mg76.webp') }}"
                                        class="img-fluid mx-auto" alt="" />
                                </a>
                            </div>

                            <div class="listing-content">

                                <div class="listing-detail-wrapper-box">
                                    <div class="listing-detail-wrapper">
                                        <div class="listing-short-detail">
                                            <h4 class="listing-name"><a
                                                    href="{{ route('user.realEstateDetails9') }}">Agile Real
                                                    Estate Group</a></h4>
                                            <div class="fr-can-rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="reviews_text">(22 Reviews)</span>
                                            </div>
                                            <span class="prt-types sale">For Sale</span>
                                        </div>
                                        <div class="list-price">
                                            <h6 class="listing-card-info-price">$80,100</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="price-features-wrapper">
                                    <div class="list-fx-features">
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                    alt="" /></div>3 Beds
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/bathtub.svg') }}"
                                                    width="13" alt="" /></div>1 Bath
                                        </div>
                                        <div class="listing-card-info-icon">
                                            <div class="inc-fleat-icon"><img
                                                    src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                    alt="" /></div>800 sqft
                                        </div>
                                    </div>
                                </div>

                                <div class="listing-footer-wrapper">
                                    <div class="listing-locate">
                                        <span class="listing-location"><i class="ti-location-pin"></i>8343 Canterbury
                                            St.
                                            Fremont, CA</span>
                                    </div>
                                    <div class="listing-detail-btn">
                                        <a href="{{ route('user.register') }}" class="more-btn">Invest</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- Single Property End -->


                </div>

                <!-- Pagination -->
                {{-- <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                        <a href="#" class="btn btn-theme-light-2 rounded">Browse More
                            Properties</a>
                    </div>
                </div> --}}

            </div>
        </section>
        <!-- ============================ All Featured Property ================================== -->

        <!-- ============================ Smart Testimonials ================================== -->
        <section class="bg-orange">
            <div class="container">

                <div class="row justify-content-center" style="margin-bottom: 30px">
                    <div class="col-lg-7 col-md-10 text-center"
                        style="background-color: #ccffcc; margin-top: 50px; margin-bottom: 50px">
                        <div style="margin-top: 30px" class="sec-heading ">
                            <h2>Good Reviews by Customers</h2>
                            <p style="margin-top: 30px">Ultimately, while we always hope our clients will be completely
                                satisfied, some may have unmet expectations and some may be downright unhappy. At the
                                end of the day, both types of clients are able to give testimonials. these are some of
                                what our client says</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">

                    <div class="col-lg-12 col-md-12">

                        <div class="smart-textimonials smart-center" id="smart-textimonials">

                            <!-- Single Item -->
                            <div class="item">
                                <div class="item-box">
                                    <div class="smart-tes-author">
                                        <div class="st-author-box">
                                            <div class="st-author-thumb">
                                                <div class="quotes bg-blue"><i class="ti-quote-right"></i></div>
                                                <img src="{{ asset('assets/newFile1/img/user-3.jpg') }}"
                                                    class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="smart-tes-content">
                                        <p>Since i joined Coastaltrustcapital real estate investments a couple of months
                                            ago, i have seen more reasons to join the real estate industry fulltime</p>
                                    </div>

                                    <div class="st-author-info">
                                        <h4 class="st-author-title">Adam Williams</h4>
                                        <span class="st-author-subtitle">New Jersey</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Single Item -->
                            <div class="item">
                                <div class="item-box">
                                    <div class="smart-tes-author">
                                        <div class="st-author-box">
                                            <div class="st-author-thumb">
                                                <div class="quotes bg-inverse"><i class="ti-quote-right"></i></div>
                                                <img src="{{ asset('assets/newFile1/img/user-8.jpg') }}"
                                                    class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="smart-tes-content">
                                        <p>i have never regreted the descision i maade to invest money in this company
                                            real estate packages</p>
                                    </div>

                                    <div class="st-author-info">
                                        <h4 class="st-author-title">Retha Deowalim</h4>
                                        <span class="st-author-subtitle">Dallas</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Single Item -->
                            <div class="item">
                                <div class="item-box">
                                    <div class="smart-tes-author">
                                        <div class="st-author-box">
                                            <div class="st-author-thumb">
                                                <div class="quotes bg-purple"><i class="ti-quote-right"></i></div>
                                                <img src="{{ asset('assets/newFile1/img/user-4.jpg') }}"
                                                    class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="smart-tes-content">
                                        <p>I strongly advice you to decide on making the move on Coastaltrustcapitals
                                            real estate investments because it will benefit you immensly</p>
                                    </div>

                                    <div class="st-author-info">
                                        <h4 class="st-author-title">Sam J. Wasim</h4>
                                        <span class="st-author-subtitle">Portland</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- ============================ Smart Testimonials End ================================== -->

        <!-- ============================ Price Table Start ================================== -->
        {{-- <section>
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-10 text-center"  style="background-color: #ccffcc; margin-top: 50px; margin-bottom: 50px">
                        <div style="margin-top: 30px" class="sec-heading">
                            <h2>See our packages</h2>
                            <p style="margin-top: 30px">Having something to fallback on in times of crises or
                                post-retirement is a major reason to have an investment. It is never advisable to spend
                                every cash you have whenever it comes in. it is prudent to save and invest a percentage
                                of your income, no matter how little.</p>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <!-- Single Package -->
                    <div class="col-lg-4 col-md-4">
                        <div class="pricing-wrap basic-pr">

                            <div class="pricing-header">
                                <h4 class="pr-value"><sup>$</sup>49</h4>
                                <h4 class="pr-title">Basic Package</h4>
                            </div>
                            <div class="pricing-body">
                                <ul>
                                    <li class="available">5+ Listings</li>
                                    <li class="available">Contact With Agent</li>
                                    <li class="available">3 Month Validity</li>
                                    <li>7x24 Fully Support</li>
                                    
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <a href="{{route('user.register')}}" class="btn-pricing">Choose Plan</a>
                            </div>

                        </div>
                    </div>

                    <!-- Single Package -->
                    <div class="col-lg-4 col-md-4">
                        <div class="pricing-wrap platinum-pr recommended">

                            <div class="pricing-header">
                                <h4 class="pr-value"><sup>$</sup>99</h4>
                                <h4 class="pr-title">Platinum Package</h4>
                            </div>
                            <div class="pricing-body">
                                <ul>
                                    <li class="available">5+ Listings</li>
                                    <li class="available">Contact With Agent</li>
                                    <li class="available">3 Month Validity</li>
                                    <li class="available">7x24 Fully Support</li>
                                    
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <a href="{{route('user.register')}}" class="btn-pricing">Choose Plan</a>
                            </div>

                        </div>
                    </div>

                    <!-- Single Package -->
                    <div class="col-lg-4 col-md-4">
                        <div class="pricing-wrap standard-pr">

                            <div class="pricing-header">
                                <h4 class="pr-value"><sup>$</sup>199</h4>
                                <h4 class="pr-title">Standard Package</h4>
                            </div>
                            <div class="pricing-body">
                                <ul>
                                    <li class="available">5+ Listings</li>
                                    <li class="available">Contact With Agent</li>
                                    <li class="available">3 Month Validity</li>
                                    <li class="available">7x24 Fully Support</li>
                                   
                                </ul>
                            </div>
                            <div class="pricing-bottom">
                                <a href="{{route('user.register')}}" class="btn-pricing">Choose Plan</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section> --}}

        <!-- ============================ Footer Start ================================== -->
        @include('includes.home_footer')

        <!-- ============================ Footer End ================================== -->

        <!-- Log In Modal -->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="registermodal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div class="modal-content" id="registermodal">
                    <span class="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i
                            class="ti-close"></i></span>
                    <div class="modal-body">
                        <h4 class="modal-header-title">Log In</h4>
                        <div class="login-form">
                            <form>

                                <div class="form-group">
                                    <label>User Name</label>
                                    <div class="input-with-icon">
                                        <input type="text" class="form-control" placeholder="Username">
                                        <i class="ti-user"></i>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Password</label>
                                    <div class="input-with-icon">
                                        <input type="password" class="form-control" placeholder="*******">
                                        <i class="ti-unlock"></i>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit"
                                        class="btn btn-md full-width btn-theme-light-2 rounded">Login</button>
                                </div>

                            </form>
                        </div>
                        <div class="modal-divider"><span>Or login via</span></div>
                        <div class="social-login mb-3">
                            <ul>
                                <li><a href="#" class="btn connect-fb"><i class="ti-facebook"></i>Facebook</a>
                                </li>
                                <li><a href="#" class="btn connect-google"><i class="ti-google"></i>Google+</a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <p class="mt-5"><a href="#" class="link">Forgot password?</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade signup" id="signup" tabindex="-1" role="dialog" aria-labelledby="sign-up"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div class="modal-content" id="sign-up">
                    <span class="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i
                            class="ti-close"></i></span>
                    <div class="modal-body">
                        <h4 class="modal-header-title">Sign Up</h4>
                        <div class="login-form">
                            <form>

                                <div class="row">

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="text" class="form-control" placeholder="Full Name">
                                                <i class="ti-user"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="email" class="form-control" placeholder="Email">
                                                <i class="ti-email"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="text" class="form-control" placeholder="Username">
                                                <i class="ti-user"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="password" class="form-control" placeholder="*******">
                                                <i class="ti-unlock"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="password" class="form-control"
                                                    placeholder="123 546 5847">
                                                <i class="lni-phone-handset"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <select class="form-control">
                                                    <option>As a Customer</option>
                                                    <option>As a Agent</option>
                                                    <option>As a Agency</option>
                                                </select>
                                                <i class="ti-briefcase"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="form-group">
                                    <button type="submit"
                                        class="btn btn-md full-width btn-theme-light-2 rounded">Sign Up</button>
                                </div>

                            </form>
                        </div>
                        <div class="modal-divider"><span>Or login via</span></div>
                        <div class="social-login mb-3">
                            <ul>
                                <li><a href="#" class="btn connect-fb"><i class="ti-facebook"></i>Facebook</a>
                                </li>
                                <li><a href="#" class="btn connect-google"><i class="ti-google"></i>Google+</a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center">
                            <p class="mt-5"><i class="ti-user mr-1"></i>Already Have An Account? <a href="#"
                                    class="link">Go For LogIn</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
    <script src="{{ asset('assets/newFile1/js/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/rangeslider.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/select2.min.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/jquery.magnific-popup.min.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/slick.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/slider-bg.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/lightbox.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/imagesloaded.js') }}"></script>
    <script src="{{ asset('assets/newFile1/js/custom.js') }}"></script>
    <script src="{{ asset('assets/newfile2/js/main.js') }}"></script>
</body>


</html>
