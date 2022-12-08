<!doctype html>
<html lang="en">

<head>
    @include('includes.c_css')
    <title>Coastaltrustcapitals</title>
</head>

<body>
    <!--wrapper-->
    <div class="wrapper">
        @include('includes.c_sidebar')
        @include('includes.c_header')


        <!--end header -->
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <!--breadcrumb-->
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="breadcrumb-title pe-3">PLANS</div>
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                                <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Choose A Suitable Investment Plan
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>



            </div>
            <div class="container">
                <div class="container">
                    <form>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="company">Investment Categories</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Investment Category</option>
                                        <option value="1" class="real_estate">Real Estate</option>
                                        <option value="1" class="crypto">Cryptocurrency Investment</option>
                                        <option value="2" class="stocks">Stocks Investments</option>
                                        <option value="3" class="medic">Medical Hedgefunds Investments</option>
                                        <option value="4" class="tech">Tech Startups Investments</option>
                                    </select>
                                </div>
                            </div>
                            <!--  col-md-6   -->
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="company">Plans</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Plans</option>
                                        <option value="1">Jannat Graynight Mood In Siver Colony, London ($7,000)
                                        </option>
                                        <option value="1">9572 Trusel Ave. Hopewell, VA 23860 ($17,600)</option>
                                        <option value="1">7 Magnolia Circle Anaheim, CA 92806 ($9,200)</option>
                                        <option value="2">83 Vale Street Elgin, IL 60120 ($60,500)</option>
                                        <option value="3">
                                            481 High Dr. Media, PA 19063 ($25,850)</option>
                                        <option value="4">8 S. San Pablo St. New Kensington, PA 15068 ($37,100)
                                        </option>
                                        <option value="4">70 E. Meadowbrook Lane Chula Vista, CA 91910 ($70,000)
                                        </option>
                                        <option value="4">9151 Third St. Vallejo, CA 94591 ($23,400)</option>
                                        <option value="4">8343 Canterbury St. Fremont, CA 94538 ($35,000)</option>
                                        <option value="4">8508 Country Club Lane Los Angeles, CA 90019 ($80,100)
                                        </option>
                                        {{-- <option value="5">Bitcoin</option>
                                        <option value="6">Ethereum</option>
                                        <option value="7">Binance Coin</option>
                                        <option value="7">Ripple</option>
                                        <option value="7">Algorand</option>
                                        <option value="7">Lite Coin</option>
                                        <option value="7">Litecoin</option>
                                        <option value="7">Dodge Coin</option>
                                        <option value="7">Polkadot</option>
                                        <option value="7">ChainLink</option>
                                        <option value="7">Cosmas Atom</option>
                                        <option value="7">OKB Token</option>
                                        <option value="7">Tron</option>
                                        <option value="7">Tesla</option>
                                        <option value="7">Microsoft</option>
                                        <option value="7">Google</option>
                                        <option value="7">Lockhead Martins</option>
                                        <option value="7">Boeing</option>
                                        <option value="7">Airbus</option>
                                        <option value="7">Zoom</option>
                                        <option value="7">Apple</option>
                                        <option value="7">Samsung</option>
                                        <option value="7">Foxconn</option>
                                        <option value="7">Alibaba</option>
                                        <option value="7">Dell</option>
                                        <option value="7">Headspace</option>
                                        <option value="7">Parsley Health</option>
                                        <option value="7">Circles</option>
                                        <option value="7">NervGen Pharma</option>
                                        <option value="7">Entrada Therapeutics</option>
                                        <option value="7">Corvus Pharmaceuticals</option>
                                        <option value="7">Bicycle Health</option>
                                        <option value="7">Felmo</option>
                                        <option value="7">HelloBello</option>
                                        <option value="7">Loyal</option>
                                        <option value="7">GW Pharmaceuticals</option>
                                        <option value="7">Medopad</option>
                                        <option value="7">Chainalysise</option>
                                        <option value="7">Paxful</option>
                                        <option value="7">Spring Labs</option>
                                        <option value="7">Dragonchain</option>
                                        <option value="7">Axis Security</option>
                                        <option value="7">Confluera</option>
                                        <option value="7">Illumio</option>
                                        <option value="7">Verishop</option>
                                        <option value="7">TinyTap</option> --}}
                                    </select>
                                </div>
                            </div>
                            <!--  col-md-6   -->
                        </div>
                        {{-- <h2>Contact Us</h2> --}}
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="company">Return on investment (ROI)</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Selected ROI</option>
                                        <option value="1">40%</option>
                                    </select>
                                </div>
                            </div>
                            <!--  col-md-6   -->
                       

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="company">Duration</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Duration</option>
                                        <option value="1">7 Days</option>
                                        <option value="1">14 Days</option>
                                        <option value="2">30 Days</option>
                                        <option value="3">60 Days</option>
                                        <option value="4">90 Days</option>
                                    </select>
                                </div>
                            </div>
                            <!--  col-md-6   -->
                        </div>

                        <div class="row">
                            

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="company">Commission</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Selected Commission</option>
                                        <option value="1">10%</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="company">Commission</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select amount</option>
                                        <option value="1">$1,000</option>
                                        <option value="2">$3,000</option>
                                        <option value="3">$5,000</option>
                                        <option value="3">$10,000</option>
                                        <option value="3">$15,000</option>
                                        <option value="3">$25,000</option>
                                        <option value="3">$50,000</option>
                                        <option value="3">$75,000</option>
                                        <option value="3">$100,000</option>
                                    </select>
                                </div>
                                
                            </div>
                            
                        </div>




                        <button type="submit" style="background-color: #006849; magin-top: 20px"
                            class="btn btn-primary">Submit</button>
                        <div style="height: 100px"></div>
                    </form>
                </div>

            </div>
        </div>


        <!--end page wrapper -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button-->
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        @include('includes.c_footer')

    </div>
    <!--end wrapper-->
    <!--start switcher-->
    @include('includes.c_switch')
    @include('includes.c_script')

</body>


<!-- Mirrored from codervent.com/rocker/demo/vertical/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 04 Apr 2022 15:30:50 GMT -->

</html>



////////////////////////////////////////////////////////////////////////
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:Utz45i1T6QZoWA+Wb0tuDSM58/ZD1pRsRODeYxLER08=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=monegdpw_vest
DB_USERNAME=monegdpw_vest
DB_PASSWORD=monegdpw_vest

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.sendgrid.net
MAIL_PORT=587 
MAIL_USERNAME=apikey
MAIL_PASSWORD=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
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@coastalvest.com
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
//////////////////////////////////////////////////////

RewriteEngine On
RewriteRule ^$ public/index.php [L]
RewriteRule ^((?!public/).*)$ public/$1 [L,NC]