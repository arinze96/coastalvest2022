<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- favicon -->
<link rel="shortcut icon" href="{{ asset('assets/CT.png') }}" type="image/png">
<!-- bootstrap css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/bootstrap.min.css') }}">
<!-- fontawesome css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/fontawesome.min.css') }}">
<!-- flaticon css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/flaticon.css') }}">
<!-- owl carousel css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/owl.carousel.min.css') }}">
<!-- owl carousel theme css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/owl.theme.default.min.css') }}">
<!-- slicknav css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/slicknav.css') }}">
<!-- main css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/style.css') }}">
<!-- responsive css -->
<link rel="stylesheet" href="{{ asset('assets/newfile2/css/responsive.css') }}">
<!-- jquery js -->
<script src="{{ asset('assets/newfile2/js/jquery-3.3.1.min.js') }}"></script>

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
<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="3b063694-a51c-4e78-8724-fdbdd5ce265e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

<style>
    content {
        width: 80%;
        padding: 0;
        margin: 0 auto;
    }
   
    .center {
        margin: 0 auto;
        max-width: 270px;
        font-size: 40px;
    }


    .question {
        position: relative;
        background: #f9f9f9;
        margin: 0;
        padding: 10px 10px 10px 50px;
        display: block;
        width: 100%;
        cursor: pointer;
    }

    .answers {
        padding: 0px 15px;
        margin: 5px 0;
        width: 100% !important;
        height: 0;
        overflow: hidden;
        z-index: -1;
        position: relative;
        opacity: 0;
        -webkit-transition: .3s ease;
        -moz-transition: .3s ease;
        -o-transition: .3s ease;
        transition: .3s ease;
    }

    .questions:checked~.answers {
        height: auto;
        opacity: 1;
        padding: 15px;

    }

    .plus {
        position: absolute;
        margin-left: 10px;
        z-index: 5;
        font-size: 2em;
        line-height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-transition: .3s ease;
        -moz-transition: .3s ease;
        -o-transition: .3s ease;
        transition: .3s ease;

    }

    .questions:checked~.plus {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);

    }

    .questions {
        display: none;

    }
</style>
