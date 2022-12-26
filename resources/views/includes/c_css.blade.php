<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}" />
<!--favicon-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="shortcut icon" href="{{ asset('assets/CT.png') }}" type="image/png">
<!--plugins-->
<link href="{{ asset('assets/plugins/vectormap/jquery-jvectormap-2.0.2.css') }}" rel="stylesheet" />
<link href="{{ asset('assets/plugins/simplebar/css/simplebar.css') }}" rel="stylesheet" />
<link href="{{ asset('assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css') }}" rel="stylesheet" />
<link href="{{ asset('assets/plugins/metismenu/css/metisMenu.min.css') }}" rel="stylesheet" />
<!-- loader-->
<link href="{{ asset('assets/css/css/pace.min.css') }}" rel="stylesheet" />
<link href="{{ asset('assets/css/css/bootstrap.min.css') }}" rel="stylesheet">
<link href="{{ asset('assets/css/css/bootstrap-extended.css') }}" rel="stylesheet">
<link href="{{ asset('assets/newFile1/css/plugins/dropzone.css') }}" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
</script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"
    integrity="sha512-Tn2m0TIpgVyTzzvmxLNuqbSJH3JP8jm+Cy3hvHrW7ndTDcJ1w5mBiksqDBb8GpE2ksktFvDB/ykZ0mDpsZj20w=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet">
{{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/iconify/2.0.0/iconify.min.js" rel="stylesheet"> --}}
<style>
    .bodyjj {
        background-color: #f2f2f2;
    }

    .btn-default {

        background-color: #006849;

    }

    @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');

    section {
        float: left;
        width: 100%;
        padding: 30px 0;
        position: relative;
        overflow: hidden;
        background: #6F8D8A;
        margin: 30px;
    }

    section:before {
        content: "";
        position: absolute;
        width: 110%;
        height: 100%;
        background-color: #fff;
        filter: blur(10px);
        z-index: 0;
        transform: scale(2);
        -ms-transform: scale(2);
        -webkit-transform: scale(2);
    }

    .btn-default {
        background: #006EFF;
        width: 100%;
        color: #fff;
        font-weight: 700;
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
        font-size: 14px;
    }

    .card {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
        border: none;
        margin-bottom: 30px;
    }

    .card:hover {
        transform: scale(1.05);
        transition: all 1s ease;
        z-index: 999;
    }

    .card-01 .card-body {
        position: relative;
        padding-top: 40px;
    }

    .card-01 .badge-box {
        position: absolute;
        top: -20px;
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        text-align: center;
    }

    .card-01 .badge-box i {
        background: #006EFF;
        color: #fff;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
    }

    .card-01 .height-fix {
        height: 455px;
        overflow: hidden;
    }

    .card-01 .height-fix .card-img-top {
        width: auto !imporat;
    }

    .profile-box {
        background-size: cover;
        float: left;
        width: 100%;
        text-align: center;
        padding: 30px 0;
        position: relative;
        overflow: hidden;
    }

    .profile-box:before {
        filter: blur(10px);
        background: url("https://images.pexels.com/photos/195825/pexels-photo-195825.jpeg?h=350&auto=compress&cs=tinysrgb") no-repeat;
        background-size: cover;
        width: 120%;
        position: absolute;
        content: "";
        height: 120%;
        left: -10%;
        top: 0;
        z-index: 0;
    }

    .profile-box img {
        width: 170px;
        height: 170px;
        position: relative;
        border: 5px solid #fff;
    }

    .social-box i {
        border: 1px solid #006EFF;
        color: #006EFF;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
    }

    .social-box i:hover {
        background: #DFC717;
        color: #fff;
    }

    .social-box a {
        margin: 0 5px;
    }

    .video-foreground {
        float: left;
        width: 100%;
        height: 500px;
    }

    .card-01.height-fix .card-img-overlay {
        top: unset;
        color: #fff;
        background: -moz-linear-gradient(top, rgba(26, 96, 111, 0) 0%, rgba(26, 96, 111, 0) 1%, rgba(24, 87, 104, 0.91) 31%, rgba(21, 65, 89, 0.91) 100%);
        /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(26, 96, 111, 0) 0%, rgba(26, 96, 111, 0) 1%, rgba(24, 87, 104, 0.91) 31%, rgba(21, 65, 89, 0.91) 100%);
        /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(26, 96, 111, 0) 0%, rgba(26, 96, 111, 0) 1%, rgba(24, 87, 104, 0.91) 31%, rgba(21, 65, 89, 0.91) 100%);
        /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#001a606f', endColorstr='#e8154159', GradientType=0);
    }

    .card-01.height-fix .fa {
        color: #fff;
        font-size: 22px;
        margin-right: 18px;
    }

    ;

    /*flipper-card*/
    .card-flipper {
        position: relative;
        float: left;
        width: 100%;
        text-align: center;
    }

    .card__front,
    .card__back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card__back .card {
        width: 100%;
        height: 65vh;
    }

    .card__front,
    .card__back {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
    }

    .card__front {
        background-color: #ff5078;
    }

    .card__back {
        background-color: #1e1e1e;
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }

    .card-flipper.effect__hover {
        position: relative;
    }

    .card-flipper.effect__hover:hover .card__front {
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }

    .card-flipper.effect__hover:hover .card__back {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }

    .card-flipper.effect__random.flipped .card__front {
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }

    .card-flipper.effect__random.flipped .card__back {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
</style>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="{{ asset('assets/js/app.js') }}"></script>

<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
<link href="{{ asset('assets/css/css/app.css') }}" rel="stylesheet">
<link href="{{ asset('assets/css/css/icons.css') }}" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('assets/css/css/dark-theme.css') }}" />
<link rel="stylesheet" href="{{ asset('assets/css/css/semi-dark.css') }}" />
<link rel="stylesheet" href="{{ asset('assets/css/css/header-colors.css') }}" />

<script type="text/javascript">
    (function() {
        var options = {
            whatsapp: "+19194211323",
            call_to_action: "Message us",
            position: "left",
        };
        var proto = document.location.protocol,
            host = "getbutton.io",
            url = proto + "//static." + host;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url + '/widget-send-button/js/init.js';
        s.onload = function() {
            WhWidgetSendButton.init(host, proto, options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })();
</script>

<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="7050b539-b28a-4a69-9aaf-ed7b6a6f7136";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
</script>
