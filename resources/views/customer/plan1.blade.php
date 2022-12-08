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
        <div class="page-wrapper">
            <div class="page-content">
                <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div class="breadcrumb-title pe-3">CRYPTOCURRENCY PLANS</div>
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

                <div class="card-body">

                    {{-- <?php dd($plans); ?> --}}
                    @if (!$plans->isEmpty())
                        <div class="row">
                            <?php $count = 0;
                            // $changed = (array)$plans;
                            // $case = array_slice($changed, 2);
                            ?>
                            @foreach ($plans as $key => $plan)
                                <?php if ($key > 4) {
                                    continue;
                                } ?>
                                <div class="col-12 col-sm-8 col-md-6 col-lg-3" id="plans4" style="display: block">
                                    <div class="card text-center">
                                        {{-- <div
                                            class="card-header text-center border-bottom-0 bg-transparent text-success pt-4">
                                            <h4>{{ ucwords($plan->name) }}</h4>
                                        </div>
                                        <div class="card-body">
                                            <h6 class="bill"><span>MIN-</span>
                                                {{ $plan->currency == 'USD' ? number_format($plan->min, 0, '.', ',') : $plan->min }}
                                                {{ $plan->currency }}</h6>
                                            <h6 class="bill"><span>MAX-</span>
                                                {{ $plan->currency == 'USD' ? number_format($plan->max, 0, '.', ',') : $plan->max }}
                                                {{ $plan->currency }}</h6>
                                        </div> --}}
                                        <iframe
                                            src="https://widget.coinlib.io/widget?type=single_v2&theme=dark&coin_id=619&pref_coin_id=1505"
                                            width="100%" height="196px" scrolling="auto" marginwidth="0"
                                            marginheight="0" frameborder="0" border="0"
                                            style="border:0;margin:0;padding:0;line-height:14px;overflow: hidden;"></iframe>

                                            <div class="container">
                                                <div class="row">
                                                  <div class="col-md-4">
                                                    <img src="{{ asset('assets/img/icons8-01.png') }}"
                                                        style="width: 30px; height: 30px" />
                                                    <span style="font-size: 9px; color: red">{{ $plan->roi }}%
                                                        ROI</span>
                                                  </div>
                                                  <div class="col-md-4">
                                                    <img src="{{ asset('assets/img/icons8-01.png') }}"
                                                        style="width: 30px; height: 30px" />
                                                    <span style="font-size: 9px; color: red">{{ $plan->roi }}%
                                                        ROI</span>
                                                  </div>
                                                  <div class="col-md-4">
                                                    <img src="{{ asset('assets/img/icons8-01.png') }}"
                                                    style="width: 30px; height: 30px" />
                                                <span style="font-size: 9px; color: red">{{ $plan->roi }}%
                                                    ROI</span>
                                                  </div>
                                                </div>
                                              </div>
                                             
                                            {{-- <li class="list-group-item"><i class="fas fa-male text-success mx-2"></i>Type
                        <span>Total Return Swap</span>
                    </li> --}}
                                            @if (ucwords(str_replace(['swap', '-'], '', $plan->type)) != 'Currency')
                                                {{-- <li class="bill">Type -
                                                    {{ strtoupper(str_replace(['swap', '-'], '', $plan->type)) }}<span></span>
                                                </li> --}}
                                            @endif
                                            {{-- <li class="list-group-item"> --}}
 
                                            {{-- </li> --}}
                                            {{-- <li class="list-group-item"> --}}
                                               
                                                {{-- Duration-
                                                <span class="bill">{{ ucwords($plan->duration) }}</span> --}}
                                            {{-- </li> --}}
                                            {{-- <li class="list-group-item"> --}}
                                                
                                                {{-- Commission-
                                                <span v>{{ ucwords($plan->commission) }}%</span> --}}
                                            {{-- </li> --}}
                                            {{-- <li class="list-group-item">Currency
                                                <span>USD</span>
                                            </li> --}}
                                        
                                        <div class="card-footer border-top-0">
                                            <input type="text" placeholder="Enter Amount"
                                                class="form-control investment_amount w-100" placeholder="Enter Amount "
                                                id="input{{ $key }}" data-btn="btn{{ $key }}"
                                                type="number" name="" placeholder="0.00">
                                        </div>
                                        <span class="text-danger error_box d-block mt-1 mb-1"
                                            id="error{{ $key }}"></span>

                                        <div class="card-footer border-top-0">
                                            <button style="background-color: #006849"; disabled="true"
                                                data-key="{{ $key }}" data-error="error{{ $key }}"
                                                id="btn{{ $key }}" data-currency="{{ $plan->currency }}"
                                                data-min="{{ $plan->currency == 'USD' ? number_format(round($plan->min, 2), 0, '.', '') : $plan->min }}"
                                                data-max="{{ $plan->currency == 'USD' ? number_format(round($plan->max, 2), 0, '.', '') : $plan->max }}"
                                                data-plan-url="{{ route('user.plan.view', ['currency']) }}"
                                                data-plan-id="{{ $plan->id }}"
                                                class="btn btn-primary px-5 w-100 invest_btn" disabled="true">+
                                                Invest</button>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @else
                        <div class="row g-gs">
                            <div class="col-md-12 card">
                                <h4 class="text-center">No Investment Plan's at the moment</h4>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    @endif
                </div>
            </div>
        </div>
        <div class="overlay toggle-icon"></div>
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        @include('includes.c_footer')
    </div>
    @include('includes.c_switch')
    @include('includes.c_script')
</body>

</html>
