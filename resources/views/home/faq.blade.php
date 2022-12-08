@include('includes.home_css')
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Finlance - Financial Planning HTML Template</title>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    @include('includes.home_css')
</head>


<body>
    @include('includes.home_header')
    <!--   header area end   -->


    <!--   hero area start   -->
    <div class="breadcrumb-area contact contact-bg">
        <div class="container">
            <div class="breadcrumb-txt">
                <div class="row">
                    <div class="col-xl-7 col-lg-8 col-sm-10">
                        <span>Contact Us</span>
                        <h1>Need information? contact us</h1>
                        <ul class="breadcumb">
                            <li><a href="{{ route('app.home') }}">Home</a></li>
                            <li><a href="{{ route('user.contact') }}">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="breadcrumb-area-overlay"></div>
    </div>
    <!--   hero area end    -->


    <!--    contact form and map start   -->
    <div class="contact-form-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <span class="section-title">Contact us</span>
                    <h2 class="section-summary">These are the most frequently asked questions</h2>
                    <h1>FAQs</h1>
                    <br><br>
                    <div class="content">
                        <div>
                            <input type="checkbox" id="question1" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question1" class="question">
                                How do i get started as an investor with Coastaltrustcapitals?
                            </label>
                            <div class="answers">
                                Click on the buttons above depending on which type of investor you are! The entire
                                account creation and investment process is completed online. You will be prompted to
                                provide or verify any required information, as well as make the necessary
                                acknowledgments electronically.</div>
                        </div>

                        <div>
                            <input type="checkbox" id="question2" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question2" class="question">
                                What type of account can i invest through?
                            </label>
                            <div class="answers">
                                There are several options for types of entities/accounts you can use when investing in
                                our funds. You can invest as an Individual, Jointly, through an LLC (Limited Liability
                                Company), Corporation, Partnership, Retirement Plan/401K, or a Trust.
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" id="question3" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question3" class="question">
                                What type of tax document will I recieve?
                            </label>
                            <div class="answers">
                                <br><br>
                                <p>
                                    That depends on which investment vehicle you decide to invest in. If you invest in our new
                                    accredited fund, you will receive a Form K-1. A Form K-1 is a tax form used by
                                    partnerships to provide investors with detailed information on their share of a
                                    partnership’s taxable income. Our goal is to finalize all Form K-1s annually by
                                    March 31st, however, we do rely on outside reporting and may require additional time
                                    to furnish the forms in a way that is to the investor’s best advantage. Accordingly,
                                    you may be required to obtain one or more extensions for filing federal, state and
                                    local tax returns, but that is not our intention.
                                </p>
                                <br><br>
                                <p>
                                    If you invest in our new non-accredited investment vehicle, you will receive a Form 1099-DIV. A
                                    Form 1099-DIV is a tax form that records income earned from entities or persons
                                    other than your employer. For our non-accredited investment vehicle, it will record the amount
                                    of distributions you receive and whether those distributions are income or a return
                                    of capital. We will provide you with a Form 1099-DIV by January 31st each year.

                                </p>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" id="question5" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question5" class="question">
                                How long is the term of the investment vehicle?
                            </label>
                            <div class="answers">
                                The term of our investment investment vehicles are generally 10 years, but we have sole discretion to extend
                                the life or even decrease the life after you have invested. The reason for this is we
                                want to maximize the value of the real estate investments. We do not want to be forced
                                to sell investments when the market is bad, nor do we want to pass up the opportunity to
                                sell investments when the market is great. We are long-term investors and the more time
                                we stay invested in a property, the better chance we have of capturing property
                                appreciation from inflation and rising rents.
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" id="question6" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question6" class="question">
                                What type of investment return should I expect?
                            </label>
                            <div class="answers">
                                <br><br>
                                <p>
                                    For stabilized, income-producing property investments, we target low- to mid-teens
                                    equity returns on an annualized basis over the entire life of the investment. We may
                                    target equity returns that are higher or lower depending on the type of investment
                                    and amount of leverage utilized. For example, if we invest in a property that
                                    requires significant repositioning through capital and marketing investments, we may
                                    forego near-term distributions to achieve a higher gain on the sale of the property
                                    in the longer term. We target higher equity returns for these types of investments
                                    as they involve more risk.
                                </p>
                                <br><br>
                                <p>
                                    Our targeted returns are just that, targets. Investment involves risk and our actual
                                    returns may be higher or lower and may include a partial or total loss of your
                                    investment.
                                </p>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" id="question7" name="q" class="questions">
                            <div class="plus">+</div>
                            <label for="question7" class="question">
                                How often will I receive a distribution?
                            </label>
                            <div class="answers">
                                <br><br>
                                <p>
                                    That depends on the investment vehicle you decide to invest in. For our accredited investment investment vehicle, we
                                    intend to pay distributions monthly but may change the frequency at our sole
                                    discretion during the term of the fund. For our non-accredited investment investment vehicle, we intend to
                                    pay distributions at least annually and our target is quarterly.
                                </p>
                                <br><br>

                                <p>
                                    Regardless of the investment vehicle, the change in distribution frequency can depend on many
                                    factors such as the property’s cash flow level or needed capital expenditures.
                                    Sometimes the cash flow of the property may not support a distribution.
                                    Additionally, our funds may investment in a property with the plan of not paying any
                                    near-term distributions while we undertake a capital and repositioning program.
                                </p>
                                <br><br>

                                <p>
                                    Grant is our single-largest investor across our portfolio, and he loves to receive
                                    his distributions while we all wait for the property’s value to appreciate.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
    <!--    contact form and map end   -->


    <!--    call to action section start    -->
    <div class="cta-section cta-bg">
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


    <!--   partner section start    -->
    <div class="partner-section">
        <div class="container top-border">
            <div class="row">
                <div class="col-md-12">
                    <div class="partner-carousel owl-carousel owl-theme">
                        <div class="single-partner-item">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <img src="{{ asset('assets/newfile2/img/partners/partner-1.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="single-partner-item">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <img src="{{ asset('assets/newfile2/img/partners/partner-2.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="single-partner-item">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <img src="{{ asset('assets/newfile2/img/partners/partner-3.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="single-partner-item">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <img src="{{ asset('assets/newfile2/img/partners/partner-4.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="single-partner-item">
                            <div class="outer-container">
                                <div class="inner-container">
                                    <img src="{{ asset('assets/newfile2/img/partners/partner-5.png') }}"
                                        alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--   partner section end    -->


    <!--    footer section start   -->
    @include('includes.home_footer')



    @include('includes.home_script')

</body>

<!-- Mirrored from themeforest.kreativdev.com/finlance/finlance/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Oct 2022 16:47:14 GMT -->

</html>
