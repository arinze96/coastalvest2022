$(document).ready(function () {
  $('.deposit_cash').click(processDeposit);
  $('.deposit_bank').click(processDepositBank);

  $('#buysell-amount').val('');
  $('.real_estate').click(alerTT);
  $('.plan_change').change(planChange);
  $('.roi_change').change(roiChange);
  $('.roi_change_by_capital').change(roiChangeByCapital);
  $('.start_investment').click(processInvestment);

  $('#buysell-amount').keyup(function () {
    console.log('dsd');
    $('._display').html($(this).val() != '' ? $(this).val() : 0);
  });
  $('.confirm_deposit').click(confirmDeposit);

  $('.investment_amount').keyup(processInvestmentAmount);
  $('.invest_btn').click(investMoney);
  $('.currency_convert').change(updateBalanceInfo);
  $('.exchange_btn').click(convertUSD);
  $('.process_withdraw').click(processWithdraw);
  $('.withdrawal_amount').keyup(function (e) {
    e.preventDefault();
    const $chargeAccount = $('.charge_account').find(':selected');
    const $currency = $chargeAccount.attr('value');
    $('.main_display').html(`${$(this).val()} ${$currency}`);
  });

  $('#registerForm1').submit(function () {
    $(this).find("button[type='submit']").html('Processing...');
  });

  $('#buy-coin').on('hide.bs.modal', function () {
    location.reload();
  });
});

// function completes the deposit
const investment_plan = [
  [
    'Jannat Graynight Mood In Siver Colony, London ($7,000)',
    '9572 Trusel Ave. Hopewell, VA 23860 ($17,600)',
    '83 Vale Street Elgin, IL 60120 ($60,500)',
    '481 High Dr. Media, PA 19063 ($25,850)',
    '8 S. San Pablo St. New Kensington, PA 15068 ($37,100)',
    '70 E. Meadowbrook Lane Chula Vista, CA 91910 ($70,000)',
    '9151 Third St. Vallejo, CA 94591 ($23,400)',
    '8343 Canterbury St. Fremont, CA 94538 ($35,000)',
    '8508 Country Club Lane Los Angeles, CA 90019 ($80,100)',
  ],
  [
    'Bitcoin',
    'Ethereum',
    'Binance',
    'Ripple',
    'Algorand',
    'LiteCoin',
    'DodgeCoin',
    'Polkadot',
    'ChainLink',
    'Cosmas Atom',
    'OKB Token',
    'Tron',
  ],
  [
    'Tesla',
    'Microsoft',
    'Google',
    'Lockhead Martins',
    'Boeing',
    'Airbus',
    'Zoom',
    'Apple',
    'Samsung',
    'Foxconn',
    'Alibaba',
    'Dell',
  ],
  [
    'Headspace',
    'Parsley Health',
    'Circles',
    'NervGen Pharma',
    'Entrada Therapeutics',
    'Corvus Pharmaceuticals',
    'Bicycle Health',
    'Felmo',
    'HelloBello',
    'Loyal',
    'GW Pharmaceuticals',
    'Medopad',
  ],
  [
    'Chainalysise',
    'Paxful',
    'Spring Labs',
    'Dragonchain',
    'Axis Security',
    'Confluera',
    'Illumio',
    'Verishop',
    'TinyTap',
  ],
];
function planChange(e, $param) {
  e.preventDefault();
  const investment = $('.plan_change option:selected').val();
  const index = investment - 1;
  const data = investment_plan[index];
  console.log(data);
  let options = '';
  if (data) {
    for (let x = 0; x < data.length; x++) {
      options += `<option value="${x + 1}">${data[x]}</option>`;
    }
  }

  document.querySelector('.second_plan_change').innerHTML = options;
}

const roi_list = [['5%'], ['7%'], ['10%'], ['15%'], ['20%'], ['35%'], ['60%']];
function roiChange(e, $param) {
  e.preventDefault();
  const roi = $('.roi_change option:selected').val();
  
  // const index = roi - 1;
  let index = 1;
  if(roi == 7){
    index = 1
  }else if (roi == 14){
    index = 2
  }
  else if (roi == 30){
    index = 3
  }else if (roi == 60){
    index = 4
  }else if (roi == 90){
    index = 5
  }else if (roi == 180){
    index = 6
  }else if (roi == 360){
    index = 7
  }
  const data = roi_list[index];
  console.log(data);
  let options = '';
  if (data) {
    for (let x = 0; x < data.length; x++) {
      options += `${data[x]}`;
    }
  }

  document.querySelector('.second_roi_change').value = options;
}

const roi_list_by_capital = [
  ['5%'],
  ['9%'],
  ['13%'],
  ['18%'],
  ['25%'],
  ['45%'],
  ['65%'],
  ['80%'],
  ['89%'],
];

function roiChangeByCapital(e, $param) {
  e.preventDefault();
  const roi = $('.roi_change_by_capital option:selected').val();
  // const index = roi - 1;
  let index = 1;
  if(roi == 7){
    index = 1
  }else if (roi == 1000){
    index = 2
  }
  else if (roi == 3000){
    index = 3
  }else if (roi == 5000){
    index = 4
  }else if (roi == 10000){
    index = 5
  }else if (roi == 15000){
    index = 6
  }else if (roi == 25000){
    index = 7
  }else if (roi == 50000){
    index = 7
  }else if (roi == 75000){
    index = 7
  }else if (roi == 100000){
    index = 7
  }
  const data = roi_list_by_capital[index];
  console.log(data);
  let options = '';
  if (data) {
    for (let x = 0; x < data.length; x++) {
      options += `${data[x]}`;
    }
  }

  document.querySelector('.second_roi_change').value = options;
}

function alerTT() {}

function processWithdraw(e) {
  e.preventDefault();
  const $chargeAccount = $('.charge_account').find(':selected');
  const $chargeAccountBalance = $chargeAccount.data('balance');
  const $paymentPlatform = $('.payment_account').find(':selected');
  const $bitcoinAddress = $('.bitcoin_addr').val();
  const $currency = $chargeAccount.attr('value');
  const $amount = parseFloat($('.withdrawal_amount').val());
  const $financial_password = parseFloat($('.transaction_pin').val());

  const $button = $(this);
  const $data = {
    charge_account: $currency,
    amount: $amount,
    payment: $paymentPlatform.attr('value'),
    financial_password: $financial_password,
    btc_address: $bitcoinAddress,
  };

  console.log($paymentPlatform);

  if ($paymentPlatform.length == 0) {
    swal({
      text: 'Add at least one payment method in your personal data section',
      icon: 'info',
      buttons: true,
    });
    return false;
  }

  if (isNaN($amount) || $amount == 0) {
    swal({
      text: 'Enter a valid amount',
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  if (
    isNaN($financial_password) ||
    $financial_password == 0 ||
    $financial_password.toString().length < 6 ||
    $financial_password.toString().length > 6
  ) {
    swal({
      text: 'Enter a valid financial password',
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  if ($amount > $chargeAccountBalance) {
    swal({
      text: 'Insufficient account balance to perform this withdrawal',
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  swal({
    text: 'Are you sure you want to perform this withdrawal',
    icon: 'info',
    buttons: true,
  }).then(($res) => {
    if ($res == true) {
      $button.html('Processing...');
      $.ajax({
        url: $button.data('url'),
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        },
        data: $data,
        success: function ($response) {
          if ($response.success) {
            swal({
              text: $response.message,
              icon: 'success',
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          } else if ($response.error) {
            swal({
              text: $response.message,
              icon: 'error',
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          }
        },
      });
    }
  });
}

function convertUSD(e) {
  e.preventDefault();
  const $amount = parseFloat($('.source_amount').val());
  const $fromOption = $('.from_currency').find(':selected');
  const $toOption = $('.to_currency').find(':selected');
  const $fromCurrency = $fromOption.attr('value');
  const $fromAmount = parseFloat($fromOption.data('balance'));
  const $toCurrency = $toOption.attr('value');
  const $button = $(this);
  const $data = {
    from_currency: $fromCurrency,
    to_currency: $toCurrency,
    amount: $amount,
  };

  if (isNaN($amount) || $amount == 0) {
    swal({
      text: 'Enter a valid amount',
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  if ($fromCurrency == $toCurrency) {
    swal({
      text: "Conversion Currencies can't be the same",
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  if ($amount > $fromAmount) {
    swal({
      text: 'Insufficient account balance to perform this conversion',
      icon: 'error',
      buttons: true,
    });
    return false;
  }

  swal({
    text: 'Are you sure you want to perform this currency conversion',
    icon: 'info',
    buttons: true,
  }).then(($res) => {
    if ($res == true) {
      $button.html('Processing...');
      $.ajax({
        url: $button.data('url'),
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        },
        data: $data,
        success: function ($response) {
          $button.html('Exchange');
          if ($response.success) {
            swal({
              text: $response.message,
              icon: 'success',
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          } else if ($response.error) {
            swal({
              text: $response.message,
              icon: 'error',
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          }
        },
      });
    }
  });

  // $data {
  //   from_currency,to_currency,from_amount,
  // }
}

// function update deposit amount
function updateDepositAmount(e) {
  e.preventDefault();
}

function updateBalanceInfo(e) {
  e.preventDefault();
  const $type = $(this).data('type');
  const $option = $(this).find(':selected');
  $(`.${$type}_display`).html(
    `${$option.data('balance')} ${$option.attr('value')}`
  );
  console.log($option);
}

function investMoney(e) {
  e.preventDefault();
  const $button = $(this);
  const $errorBox = $(`#${$(this).attr('data-error')}`);
  $errorBox.html('');
  const $key = $(this).attr('data-key');
  const $min = parseFloat($(this).attr('data-min'));
  const $max = parseFloat($(this).attr('data-max'));
  const $currency = $(this).attr('data-currency');
  const $input = parseFloat($(`#input${$key}`).val());
  const $inputElement = $(`#input${$key}`);

  console.log($input);
  if (isNaN($input) || $input == 0) {
    $errorBox.html('Enter a valid amount');
    return false;
  }

  if ($input < $min) {
    $errorBox.html(`Minimum amount is ${$min} ${$currency}`);
    return false;
  }

  console.log($max, typeof $input);
  if ($max < $input) {
    $errorBox.html(`Maximum amount is ${$max} ${$currency}`);
    return false;
  }

  $button.html('Processing...');
  $.ajax({
    url: $button.data('plan-url'),
    method: 'POST',
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    data: { planId: $button.data('plan-id'), amount: $input },
    success: function ($res) {
      $button.html('Invest');
      $inputElement.val('');
      if ($res.success) {
        swal({
          text: $res.message,
          icon: 'success',
          buttons: true,
        }).then((res) => {
          location.reload();
        });
      } else if ($res.error) {
        swal({
          text: $res.message,
          icon: 'error',
          buttons: true,
        }).then((res) => {
          if ($res.url) {
            location.href = $res.url;
          } else {
            location.reload();
          }
        });
      }
    },
  });
}

function processInvestmentAmount(e) {
  e.preventDefault();

  $button = $(`#${$(this).attr('data-btn')}`);
  $value = $(this).val();
  if ($value == '' || $value == '0') {
    $button.attr({ disabled: true });
    // console.log($value,"disable");
  }
  {
    $button.attr({ disabled: false }).addClass(' bg-primary');
    // console.log($value,"enable");
  }
}

function processDepositBank(e) {
  e.preventDefault();
  const currency = $('.deposit_bank_currency option:selected').val();
  const $value = $('.deposit_bank_amount').val();
  $errorBox = $('.error_box_bank');
  $url = $(this).data('url');

  if ($value == '' || isNaN($value) || $value == 0) {
    $errorBox.html('Enter a valid amount');
    return;
  } else {
    $errorBox.html('');
  }

  if (currency == '') {
    $errorBox.html('Select a valid currency');
    return;
  } else {
    $errorBox.html('');
  }

  $url = $(this).attr('data-url');
  e.preventDefault();
  $('.deposit_bank').html(
    "<div class='spinner-grow spinner-grow-sm' role='status'><span class='sr-only'>Loading...</span></div> Processing..."
  );
  $.ajax({
    type: 'POST',
    url: $url,
    data: { currency, amount: $value },
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    success: function ($response) {
      console.log($response);
      $res = JSON.parse($response);
      console.log($res);
      $('.confirm_deposit').html('Confirm Payment');
      if ($res.error) {
        $('#buy-coin').modal('hide');
        swal({
          text: 'Your deposit request was not successfull',
          icon: 'error',
          buttons: true,
        }).then((responce) => {
          location.reload();
        });
      } else {
        $('#buy-coin').modal('hide');
        swal({
          text: 'Your deposit request was created successfully',
          icon: 'success',
          buttons: true,
        }).then((responce) => {
          location.reload();
        });
      }
    },
  });
}
// This function processes deposite
function processDeposit(e) {
  e.preventDefault();
  $btn = $(this);
  $errorBox = $('#error_box');
  $value = $('#buysell-amount').val();
  $url = $(this).attr('data-url');
  $method = $('#method').val();
  if ($value == '' || isNaN($value) || $value == 0) {
    $('#buysell-amount')
      .parent()
      .siblings('.error_box')
      .find('#error_box')
      .html('Enter a valid amount');
    return;
  } else {
    $('#buysell-amount')
      .parent()
      .siblings('.error_box')
      .find('#error_box')
      .html('');
  }

  if ($method == '') {
    $('#method')
      .parent()
      .siblings('.error_box')
      .find('#error_box1')
      .html('Select a payment method');
    return;
  } else {
    $('#method').parent().siblings('.error_box').find('#error_box1').html('');
    if (
      jQuery.inArray($method, [
        'BTC',
        'BCH',
        'ETH',
        'LTC',
        'BNB',
        'USDT',
        'DODGE',
      ]) != -1
    ) {
      $('.btc').removeClass('d-none');
      $('.bank').addClass('d-none');
    } else {
      $('.bank').removeClass('d-none');
      $('.btc').addClass('d-none');
    }
  }

  //  $('#buy-coin').modal('show');
  //  return

  if (
    jQuery.inArray($method, [
      'BTC',
      'BCH',
      'ETH',
      'LTC',
      'BNB',
      'USDT',
      'DODGE',
    ]) != -1
  ) {
    $btn.html(
      "<div class='spinner-grow spinner-grow-sm' role='status'><span class='sr-only'>Loading...</span></div> Processing..."
    );
    $dataObj = { usd_to_crypto: true, amount: $value, convert: $method };
    // set endpoint and your API access key
    $.ajax({
      url: $url,
      method: 'POST',
      headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
      data: $dataObj,
      success: function ($res) {
        $res = JSON.parse($res);
        console.log($res);

        if ($res.data.quote) {
          $('.converted_payment').html(
            `$${$value} (${$res.data.quote[$method].price.toFixed(
              6
            )})${$method.toUpperCase()}`
          );
          $('#btc_amount').val(`${$res.data.quote[$method].price.toFixed(6)}`);
          $('#wallet_address').val($res.address);
          $('#buy-coin').modal('show');
        } else {
          swal({
            text: 'An error occured trying to access the Crypto API',
            icon: 'error',
            buttons: true,
          });
        }
      },
    });
  } else {
    $('#buy-coin').modal('show');
  }

  //  $count = 9;
  //  $interval = setInterval(function(){
  //    $(".time_counter").html(`${$count}min`);
  //    if($count == 0){
  //      clearInterval($interval);
  //      completeDeposit(e,{amount:$value,url:$btn.attr("data-url"),deposit:true,time_elapsed:true});
  //    }
  //    $count--;
  //  },1000)
}

// function completes the deposit
function completeDeposit(e, $param) {
  e.preventDefault();
  $('.confirm_deposit').html(
    "<div class='spinner-grow spinner-grow-sm' role='status'><span class='sr-only'>Loading...</span></div> Processing..."
  );
  $.ajax({
    type: 'POST',
    url: $param.url,
    data: $param,
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    success: function ($response) {
      console.log($response);
      $res = JSON.parse($response);
      console.log($res);
      $('.confirm_deposit').html('Confirm Payment');
      if ($res.error) {
        $('#buy-coin').modal('hide');
        swal({
          text: 'Your deposit request was not successfull',
          icon: 'error',
          buttons: true,
        }).then((responce) => {
          location.reload();
        });
      } else {
        $('#buy-coin').modal('hide');
        swal({
          text: 'Your deposit request was created successfully',
          icon: 'success',
          buttons: true,
        }).then((responce) => {
          location.reload();
        });
      }
    },
  });
}

//function
function confirmDeposit(e) {
  e.preventDefault();
  $param = {
    amount: ($value = $('#buysell-amount').val()),
    url: $(this).attr('data-url'),
    deposit: true,
    proof: $imageArray,
  };
  console.log($param);
  if ($imageArray.length == 0) {
    swal({
      text: 'Please upload a proof of payment',
      icon: 'error',
      buttons: true,
    });
  } else {
    completeDeposit(e, $param);
  }
}

function copyText(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  console.log('Copied the text: ' + copyText.value);
}

function processInvestment(e) {
  e.preventDefault();
  const plan_change = $('.plan_change option:selected').val();
  const amount = $('.amount option:selected').val();
  const plan_name = $('.plan_name option:selected').val();
  const duration = $('.duration option:selected').val();
  const percent_commission = $('.percent_commission').val();
  const url = $(this).data('url');
  if (
    amount.trim() === '' ||
    plan_name.trim() === '' ||
    duration.trim() === '' ||
    percent_commission.trim() === ''
  ) {
    swal({
      text: `Select valid details`,
      icon: 'error',
      buttons: false,
    });
    return;
  }
  $button = $(this);
  $button.html('Processing...');

  $.ajax({
    type: 'POST',
    url: url,
    data: {
      amount,
      plan_name: investment_plan[plan_change-0][plan_name-0],
      duration,
      percent_commission: percent_commission.replace('%', ''),
    },
    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    success: function ($response) {
      $button.html('Submit');

      if ($response.success) {
        swal({
          text: `${$response.message}`,
          icon: 'success',
          buttons: true,
        }).then(function () {
          location.reload();
        });
      } else {
        swal({
          text: `${$response.message}`,
          icon: 'error',
          buttons: true,
        }).then(function () {
          // location.reload();
        });
      }
    },
  });
}
