<!DOCTYPE html>
<html lang="zxx">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>Resido - Residence & Real Estate HTML Template</title>
    <link href="{{ asset('assets/newFile1/css/styles.css') }}" rel="stylesheet">
    <!-- Custom Color Option -->
    <link href="{{ asset('assets/newFile1/css/colors.css') }}" rel="stylesheet">
    @include('includes.home_css')
  
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous">
    </script>
    
</head>

<body class="blue-skin">
  
    <div id="main-wrapper">
        <!-- .navbar -->

        @include('includes.home_head')

        <!-- /.navbar -->
        <!-- End Navigation -->
        <div class="clearfix"></div>

        <div class="featured_slick_gallery gray">
            <div class="featured_slick_gallery-slide">
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj1.webp') }}"
                    class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj1.webp') }}"
                        class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
            </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj2.webp') }}"
                    class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj2.webp') }}"
                        class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
            </div>
         
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj3.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj3.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj4.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj4.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj5.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj5.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
                </div>
                <div class="featured_slick_padd"><a href="{{ asset('assets/newFile1/img/jj6.webp') }}"
                        class="mfp-gallery"><img src="{{ asset('assets/newFile1/img/jj6.webp') }}"
                            class="img-fluid mx-auto" alt="" style="width: 100%" /></a>
                </div>
            </div>
            
        </div>
        <!-- ============================ Hero Banner End ================================== -->

        <!-- ============================ Property Detail Start ================================== -->
        <section class="gray-simple">
            <div class="container">
                <div class="row">

                    <!-- property main detail -->
                    <div class="col-lg-8 col-md-12 col-sm-12">

                        <div class="property_block_wrap style-2 p-4">
                            <div class="prt-detail-title-desc">
                                <span class="prt-types sale" style="margin-bottom: 10px">For Rent</span>
                                <h3 style="margin-bottom: 10px">Bluebell Real
                                    Estate</h3>
                                <span style="margin-bottom: 10px"><i class="lni-map-marker"></i>8343 Canterbury St.
                                    Fremont, CA 94538</span>
                                <h3 class="prt-price-fix" style="margin-top: 10px">$35,000/month</h3>
                                <div class="list-fx-features">
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bed.svg') }}" width="13"
                                                alt=""></div>3 Beds
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/bathtub.svg') }}" width="13"
                                                alt=""></div>1 Bath
                                    </div>
                                    <div class="listing-card-info-icon">
                                        <div class="inc-fleat-icon"><img
                                                src="{{ asset('assets/newFile1/img/move.svg') }}" width="13"
                                                alt=""></div>800 sqft
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#features" data-bs-target="#clOne"
                                    aria-controls="clOne" href="javascript:void(0);" aria-expanded="false">
                                    <h4 class="property_block_title">Detail & Features</h4>
                                </a>
                            </div>
                            <div id="clOne" class="panel-collapse collapse show" aria-labelledby="clOne">
                                <div class="block-body">
                                    <ul class="deatil_features">
                                        <li><strong>Bedrooms:</strong>3 Beds</li>
                                        <li><strong>Bathrooms:</strong>2 Bath</li>
                                        <li><strong>Areas:</strong>4,240 sq ft</li>
                                        <li><strong>Garage</strong>1</li>
                                        <li><strong>Property Type:</strong>Apartment</li>
                                        <li><strong>Year:</strong>Built1982</li>
                                        <li><strong>Status:</strong>Active</li>
                                        <li><strong>Cooling:</strong>Central A/C</li>
                                        <li><strong>Heating Type:</strong>Forced Air</li>
                                        <li><strong>Kitchen Features:</strong>Kitchen Facilities</li>
                                        <li><strong>Exterior:</strong>FinishBrick</li>
                                        <li><strong>Swimming Pool:</strong>Yes</li>
                                        <li><strong>Elevetor:</strong>Yes</li>
                                        <li><strong>Fireplace:</strong>Yes</li>
                                        <li><strong>Free WiFi:</strong>No</li>

                                    </ul>
                                </div>
                            </div>

                        </div>

                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#dsrp" data-bs-target="#clTwo"
                                    aria-controls="clTwo" href="javascript:void(0);" aria-expanded="true">
                                    <h4 class="property_block_title">Description</h4>
                                </a>
                            </div>
                            <div id="clTwo" class="panel-collapse collapse show">
                                <div class="block-body">
                                    <p>Luxurious High-Rise Condo. Unit is on the 30th floor, Amazing 2
                                        bed 2 bath + Den condo , Philippe Starck
                                        designed split floor plan provides spectacular views of the bay from every room.
                                        Extra </p>

                                </div>
                            </div>
                        </div>

                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#amen" data-bs-target="#clThree"
                                    aria-controls="clThree" href="javascript:void(0);" aria-expanded="true">
                                    <h4 class="property_block_title">Ameneties</h4>
                                </a>
                            </div>

                            <div id="clThree" class="panel-collapse collapse show">
                                <div class="block-body">
                                    <ul class="avl-features third color">
                                        <li>Air Conditioning</li>
                                        <li>Swimming Pool</li>
                                        <li>Central Heating</li>
                                        <li>Laundry Room</li>
                                        <li>Gym</li>
                                        <li>Alarm</li>
                                        <li>Window Covering</li>
                                        <li>Internet</li>
                                        <li>Pets Allow</li>
                                        <li>Free WiFi</li>
                                        <li>Car Parking</li>
                                        <li>Spa & Massage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#floor" data-bs-target="#clFive"
                                    aria-controls="clFive" href="javascript:void(0);" aria-expanded="true"
                                    class="collapsed">
                                    <h4 class="property_block_title">Floor Plan</h4>
                                </a>
                            </div>

                            <div id="clFive" class="panel-collapse collapse">
                                <div class="block-body">
                                    <div class="accordion" id="floor-option">
                                        <div class="card">
                                            <div class="card-header" id="firstFloor">
                                                <h2 class="mb-0">
                                                    <button type="button" class="btn btn-link"
                                                        data-bs-toggle="collapse" data-bs-target="#firstfloor"
                                                        aria-controls="firstfloor">First Floor<span>740 sq
                                                            ft</span></button>
                                                </h2>
                                            </div>
                                            <div id="firstfloor" class="collapse" aria-labelledby="firstFloor"
                                                data-parent="#floor-option">
                                                <div class="card-body">
                                                    <img src="{{ asset('assets/newFile1/img/floor.jpg') }}"
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="seconfFloor">
                                                <h2 class="mb-0">
                                                    <button type="button" class="btn btn-link collapsed"
                                                        data-bs-toggle="collapse" data-bs-target="#secondfloor"
                                                        aria-controls="secondfloor">Second Floor<span>710 sq
                                                            ft</span></button>
                                                </h2>
                                            </div>
                                            <div id="secondfloor" class="collapse" aria-labelledby="seconfFloor"
                                                data-parent="#floor-option">
                                                <div class="card-body">
                                                    <img src="{{ asset('assets/newFile1/img/floor.jpg') }}"
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="third-garage">
                                                <h2 class="mb-0">
                                                    <button type="button" class="btn btn-link collapsed"
                                                        data-bs-toggle="collapse" data-bs-target="#garages"
                                                        aria-controls="garages">Garage<span>520 sq ft</span></button>
                                                </h2>
                                            </div>
                                            <div id="garages" class="collapse" aria-labelledby="third-garage"
                                                data-parent="#floor-option">
                                                <div class="card-body">
                                                    <img src="{{ asset('assets/newFile1/img/floor.jpg') }}"
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#clSev" data-bs-target="#clSev"
                                    aria-controls="clOne" href="javascript:void(0);" aria-expanded="true"
                                    class="collapsed">
                                    <h4 class="property_block_title">Gallery</h4>
                                </a>
                            </div>

                            <div id="clSev" class="panel-collapse collapse">
                                <div class="block-body">
                                    <ul class="list-gallery-inline">
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-1.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-1.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-2.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-2.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-3.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-3.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-4.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-4.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-5.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-5.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="{{ asset('assets/newFile1/img/p-6.jpg') }}"
                                                class="mfp-gallery"><img
                                                    src="{{ asset('assets/newFile1/img/p-6.jpg') }}"
                                                    class="img-fluid mx-auto" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <!-- All over Review -->
                        <div class="rating-overview">
                            <div class="rating-overview-box">
                                <span class="rating-overview-box-total">4.2</span>
                                <span class="rating-overview-box-percent">out of 5.0</span>
                                <div class="star-rating" data-rating="5"><i class="ti-star"></i><i
                                        class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i><i
                                        class="ti-star"></i>
                                </div>
                            </div>

                            <div class="rating-bars">
                                <div class="rating-bars-item">
                                    <span class="rating-bars-name">Service</span>
                                    <span class="rating-bars-inner">
                                        <span class="rating-bars-rating high" data-rating="4.7">
                                            <span class="rating-bars-rating-inner" style="width: 85%;"></span>
                                        </span>
                                        <strong>4.7</strong>
                                    </span>
                                </div>
                                <div class="rating-bars-item">
                                    <span class="rating-bars-name">Value for Money</span>
                                    <span class="rating-bars-inner">
                                        <span class="rating-bars-rating good" data-rating="3.9">
                                            <span class="rating-bars-rating-inner" style="width: 75%;"></span>
                                        </span>
                                        <strong>3.9</strong>
                                    </span>
                                </div>
                                <div class="rating-bars-item">
                                    <span class="rating-bars-name">Location</span>
                                    <span class="rating-bars-inner">
                                        <span class="rating-bars-rating mid" data-rating="3.2">
                                            <span class="rating-bars-rating-inner" style="width: 52.2%;"></span>
                                        </span>
                                        <strong>3.2</strong>
                                    </span>
                                </div>
                                <div class="rating-bars-item">
                                    <span class="rating-bars-name">Cleanliness</span>
                                    <span class="rating-bars-inner">
                                        <span class="rating-bars-rating poor" data-rating="2.0">
                                            <span class="rating-bars-rating-inner" style="width:20%;"></span>
                                        </span>
                                        <strong>2.0</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- All over Review -->

                        <!-- Single Reviews Block -->
                       

                        <!-- Single Block Wrap -->
                        <div class="property_block_wrap style-2">

                            <div class="property_block_wrap_header">
                                <a data-bs-toggle="collapse" data-parent="#nearby" data-bs-target="#clNine"
                                    aria-controls="clNine" href="javascript:void(0);" aria-expanded="true">
                                    <h4 class="property_block_title">Nearby</h4>
                                </a>
                            </div>

                            <div id="clNine" class="panel-collapse collapse show">
                                <div class="block-body">

                                    <!-- Schools -->
                                    <div class="nearby-wrap">
                                        <div class="nearby_header">
                                            <div class="nearby_header_first">
                                                <h5>Schools Around</h5>
                                            </div>
                                            <div class="nearby_header_last">
                                                <div class="nearby_powerd">
                                                    Powerd by <img src="{{ asset('assets/newFile1/img/edu.png') }}"
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="neary_section_list">

                                            <div class="neary_section">
                                                <div class="neary_section_first">
                                                    <h4 class="nearby_place_title">Green Iseland School<small>(3.52
                                                            mi)</small></h4>
                                                </div>
                                                <div class="neary_section_last">
                                                    <div class="nearby_place_rate">
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <small class="reviews-count">(421 Reviews)</small>
                                                </div>
                                            </div>

                                            <div class="neary_section">
                                                <div class="neary_section_first">
                                                    <h4 class="nearby_place_title">Ragni Intermediate
                                                        College<small>(0.52 mi)</small></h4>
                                                </div>
                                                <div class="neary_section_last">
                                                    <div class="nearby_place_rate">
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star-half filled"></i>
                                                    </div>
                                                    <small class="reviews-count">(470 Reviews)</small>
                                                </div>
                                            </div>

                                            <div class="neary_section">
                                                <div class="neary_section_first">
                                                    <h4 class="nearby_place_title">Rose Wood Primary Scool<small>(0.47
                                                            mi)</small></h4>
                                                </div>
                                                <div class="neary_section_last">
                                                    <div class="nearby_place_rate">
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <small class="reviews-count">(204 Reviews)</small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Hotel & Restaurant -->
                                    <div class="nearby-wrap">
                                        <div class="nearby_header">
                                            <div class="nearby_header_first">
                                                <h5>Food Around</h5>
                                            </div>
                                            <div class="nearby_header_last">
                                                <div class="nearby_powerd">
                                                    Powerd by <img src="{{ asset('assets/newFile1/img/food.png') }}"
                                                        class="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="neary_section_list">

                                            <div class="neary_section">
                                                <div class="neary_section_first">
                                                    <h4 class="nearby_place_title">The Rise hotel<small>(2.42
                                                            mi)</small></h4>
                                                </div>
                                                <div class="neary_section_last">
                                                    <div class="nearby_place_rate">
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                    </div>
                                                    <small class="reviews-count">(105 Reviews)</small>
                                                </div>
                                            </div>

                                            <div class="neary_section">
                                                <div class="neary_section_first">
                                                    <h4 class="nearby_place_title">Blue Ocean Bar &
                                                        Restaurant<small>(1.52 mi)</small></h4>
                                                </div>
                                                <div class="neary_section_last">
                                                    <div class="nearby_place_rate">
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star filled"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <small class="reviews-count">(40 Reviews)</small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>

                    <!-- property Sidebar -->
                    <div class="col-lg-4 col-md-12 col-sm-12">

                        <!-- Like And Share -->
                        <div class="like_share_wrap b-0">
                            <ul class="like_share_list">
                                <li><a href="JavaScript:Void(0);" class="btn btn-likes" data-toggle="tooltip"
                                        data-original-title="Share"><i class="fas fa-share"></i>Share</a></li>
                                <li><a href="JavaScript:Void(0);" class="btn btn-likes" data-toggle="tooltip"
                                        data-original-title="Save"><i class="fas fa-heart"></i>Save</a></li>
                            </ul>
                        </div>

                        <div class="details-sidebar">

                            <!-- Agent Detail -->
                            <div class="sides-widget">
                                <div class="sides-widget-header">
                                    <div class="agent-photo"><img src="{{ asset('assets/newFile1/img/user-6.jpg') }}"
                                            alt=""></div>
                                    <div class="sides-widget-details">
                                        <h4><a href="#">Jonathan Mitch</a></h4>
                                        <span><i class="lni-phone-handset"></i>+19194211323</span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>

                                <div class="sides-widget-body simple-form">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" class="form-control" placeholder="Your Email">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone No.</label>
                                        <input type="text" class="form-control" placeholder="Your Phone">
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <textarea class="form-control">I'm interested in this property.</textarea>
                                    </div>
                                    <button style="background-color: #0fca98" class="btn btn-black btn-md rounded full-width">Send Message</button>
                                </div>
                            </div>


                            <!-- Featured Property -->
                             <div class="sidebar-widgets">

                                <h4>Featured Property</h4>

                                <div class="sidebar_featured_property">

                                    <!-- List Sibar Property -->
                                    <div class="sides_list_property">
                                        <div class="sides_list_property_thumb">
                                            <img src="{{ asset('assets/newFile1/img/p-1.jpg') }}" class="img-fluid"
                                                alt="">
                                        </div>
                                        <div class="sides_list_property_detail">
                                            <h4><a href="{{ route('user.realEstateDetails1') }}">Banyon Tree Realty</a></h4>
                                            <span><i class="ti-location-pin"></i>Zirak Road, Canada</span>
                                            <div class="lists_property_price">
                                                <div class="lists_property_types">
                                                    <div class="property_types_vlix sale">For Rent</div>
                                                </div>
                                                <div class="lists_property_price_value">
                                                    <h4>$7,600</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- List Sibar Property -->
                                    <div class="sides_list_property">
                                        <div class="sides_list_property_thumb">
                                            <img src="{{ asset('assets/newFile1/img/p-4.jpg') }}" class="img-fluid"
                                                alt="">
                                        </div>
                                        <div class="sides_list_property_detail">
                                            <h4><a href="{{ route('user.realEstateDetails2') }}">Blue Reef Properties</a></h4>
                                            <span><i class="ti-location-pin"></i> Trusel Ave. VA</span>
                                            <div class="lists_property_price">
                                                <div class="lists_property_types">
                                                    <div class="property_types_vlix">For Rent</div>
                                                </div>
                                                <div class="lists_property_price_value">
                                                    <h4>$17,600</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- List Sibar Property -->
                                    <div class="sides_list_property">
                                        <div class="sides_list_property_thumb">
                                            <img src="{{ asset('assets/newFile1/img/p-7.jpg') }}" class="img-fluid"
                                                alt="">
                                        </div>
                                        <div class="sides_list_property_detail">
                                            <h4><a href="{{ route('user.realEstateDetails3') }}">Beacon Homes LLC</a></h4>
                                            <span><i class="ti-location-pin"></i>Magnolia Anaheim, CA</span>
                                            <div class="lists_property_price">
                                                <div class="lists_property_types">
                                                    <div class="property_types_vlix buy">For Rent</div>
                                                </div>
                                                <div class="lists_property_price_value">
                                                    <h4>$9,200</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- List Sibar Property -->
                                    <div class="sides_list_property">
                                        <div class="sides_list_property_thumb">
                                            <img src="{{ asset('assets/newFile1/img/p-5.jpg') }}" class="img-fluid"
                                                alt="">
                                        </div>
                                        <div class="sides_list_property_detail">
                                            <h4><a href="{{ route('user.realEstateDetails4') }}">Bluebell Real Estate</a></h4>
                                            <span><i class="ti-location-pin"></i> Vale Street Elgin, IL</span>
                                            <div class="lists_property_price">
                                                <div class="lists_property_types">
                                                    <div class="property_types_vlix">For Rent</div>
                                                </div>
                                                <div class="lists_property_price_value">
                                                    <h4>$60,500</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section class="theme-bg call-to-act-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="call-to-act">
                            <div class="call-to-act-head">
                                <h3>Do you wish to invest in this property</h3>
                                <span>We'll help you to grow your career and growth.</span>
                            </div>
                            <a href="{{ route('user.login') }}" class="btn btn-call-to-act">SignUp Today</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        @include('includes.home_footer')



    </div>
    @include('includes.home_2nd_script')

</body>

</html>
