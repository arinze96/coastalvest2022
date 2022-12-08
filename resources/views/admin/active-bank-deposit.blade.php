<!doctype html>
<html lang="en">

<head>
    @include('includes.a_css')
    <title>Coastaltrustcapitals</title>
</head>

<body>
    <!--wrapper-->
    <div class="wrapper">
        @include('includes.a_sidebar')
        @include('includes.a_header')

        <!--end header -->
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <div class="row">
                    <div class="col-xl-12 mx-auto">
                        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div class="breadcrumb-title pe-3">Welcome</div>
                            <div class="ps-3">
                                <nav aria-label="breadcrumb">
                                </nav>
                            </div>
                        </div>
                        <!--end breadcrumb-->
                        <h6 class="mb-0 " style="color: gainsboro">This is the list of all active deposit
                            requests from customers</h6>
                        <hr />
                        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">

                        </div>

                        <div class="card radius-10">
                            <div class="card-body">
                                <div class="d-flex align-items-center">

                                </div>
                                <div class="table-responsive">
                                    @if (!$deposits->isEmpty())
                                        <table class="table align-middle mb-0">
                                            <thead class="table-light">
                                                <tr>
                                                    <th style="color: grey">#</th>
                                                    <th style="color: grey">Fullname</th>
                                                    <th style="color: grey">Username</th>
                                                    <th style="color: grey">Currency</th>
                                                    <th style="color: grey">Amount</th>
                                                    <th style="color: grey">Bank Name</th>
                                                    <th style="color: grey">Account Number</th>
                                                    <th style="color: grey">Status</th>
                                                    <th style="color: grey">Date</th>
                                                    <th style="color: grey">Action</th>
                                                    <th style="color: grey">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($deposits as $key => $deposit)
                                                    <tr>
                                                        <th scope="row">{{ $key + 1 }}</th>
                                                        <td>{{ ucwords($deposit->firstname) }}
                                                            {{ ucwords($deposit->lastname) }}</td>
                                                        <td>{{ ucwords($deposit->username) }}</td>
                                                        <td>{{ ucwords($deposit->currency) }}</td>
                                                        <td>{{ number_format($deposit->amount, 0, '.', ',') }}</td>
                                                        <td>{{ ucwords($deposit->bank_name) }}</td>
                                                        <td>{{ ucwords($deposit->account_no) }}</td>
                                                        <td>{{ ucwords(config('app.tx_status')[$deposit->status]) }}
                                                        </td>
                                                        <td>{{ date('d M,Y', strtotime($deposit->created_at)) }}</td>
                                                        <td>
                                                            <a
                                                                href="{{ route('admin.deposit.view', ['edit', $deposit->id]) }}">
                                                                <i class="fa fa-book" aria-hidden="true"></i></a>
                                                            <a class="delete_data"
                                                                href="{{ route('admin.deposit.view', ['delete', $deposit->id]) }}"
                                                                data-type="deposit"><i class="fa fa-trash"
                                                                    aria-hidden="true"></i></a>
                                                            <a
                                                                href="{{ route('admin.deposit.view', ['view', $deposit->id]) }}"><i
                                                                    class="fa fa-eye" aria-hidden="true"></i></a>
                                                        </td>
                                                        <td class="tb-tnx-action">

                                                            {{-- /////////////////// --}}
                                                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                                                href="#" role="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <span><i class="fa fa-ellipsis-h"
                                                                        aria-hidden="true"></i></span>
                                                            </a>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li><a data-action="approve" data-type="deposit"
                                                                        class="dropdown-item decline_approve"
                                                                        href="{{ route('admin.deposit.view', ['approve', $deposit->id]) }}"><i
                                                                            class="bx bx-user"></i><span>Approve</span></a>
                                                                </li>
                                                                <li><a data-action="decline" data-type="deposit"
                                                                        class="dropdown-item decline_approve"
                                                                        href="{{ route('admin.deposit.view', ['decline', $deposit->id]) }}"><i
                                                                            class="bx bx-cog"></i><span>Decline</span></a>
                                                                <li><a data-action="decline" data-type="deposit"
                                                                        class="dropdown-item add_bank_btn"
                                                                        data-transaction="{{ $deposit->id }}"
                                                                        href="{{ route('admin.deposit.view', ['decline', $deposit->id]) }}"><i
                                                                            class="bx bx-cog"></i><span>Add Bank
                                                                            Record</span></a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    @else
                                        <h4 class="text-center">No Active deposit at the moment</h4>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end page wrapper -->
        <div class="modal fade" tabindex="-1" role="dialog" id="add-bank">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <a href="#" class="close" data-dismiss="modal"><em class="icon ni ni-cross-sm"></em></a>
                    <div class="modal-body modal-body-lg">
                        <div class="nk-block-head nk-block-head-xs text-center">
                            <h5 class="nk-block-title">
                                <!-- <h4 class="time_counter mt-3">10min</h4> -->
                            </h5>
                            <div class="nk-block-text">
                                <div class="title-sub  bank text-primary">
                                    Add Bank for this user
                                </div>
                                <div class="nk-refwg-invite  btc">
                                    <div class="row p-2">
                                        <div class="col-md-12 p-1">
                                            <input style="width:100%;" type="text" class="form-control md_bank_name"
                                                value="" placeholder="Enter Bank Name">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_account_name" placeholder="Enter Account Name">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_account_no" placeholder="Enter Account No">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_routing_no" placeholder="Routing No">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_sort_code" placeholder="Sort Code">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_bank_address" placeholder="Bank Address">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_beneficiary_name"
                                                placeholder="Beneficiary Name">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <input style="width:100%;" type="text"
                                                class="form-control md_benefciary_address"
                                                placeholder="Beneficiary Address">
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-md-12  p-1">
                                            <select class="form-select md_account_type"
                                                aria-label="Default select example">
                                                <option selected>Select Account Type</option>
                                                <option value="1">Checking</option>
                                                <option value="2">Savings</option>
                                            </select>
                                        </div>
                                    </div>
                                </div><!-- .nk-refwg-invite -->
                            </div>
                        </div>
                        <div class="nk-block">
                            <div class="buysell-field form-action text-center">
                                <div>
                                    <button data-url="{{ route('admin.deposit.view', ['add-bank']) }}" type="submit"
                                        class="btn btn-primary mt-4 btn-lg sumbit_bank">Submit</button>
                                </div>
                            </div>
                        </div><!-- .nk-block -->
                    </div><!-- .modal-body -->
                </div><!-- .modal-content -->
            </div><!-- .modla-dialog -->
        </div><!-- .modal -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button-->
        <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        @include('includes.a_footer')

    </div>
    <!--end wrapper-->
    <!--start switcher-->

    <script>
        var transaction_id_selected = "";
    </script>
    @include('includes.a_switch')
    @include('includes.a_script')

</body>


<!-- Mirrored from codervent.com/rocker/demo/vertical/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 04 Apr 2022 15:30:50 GMT -->

</html>
