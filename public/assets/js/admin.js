$(document).ready(function () {
  $(".delete_data").click(deleteHandler);
  $(".go_back").click(goBack);
  $(".decline_approve").click(processApproveOrDecline);
  $(".add_investments").click(addInvestment);
  $(".add_ref").click(addReferrals);
  $(".add_bank_btn").click(modalPop);
  $(".sumbit_bank").click(submitBanks);
});

function modalPop(e) {
  e.preventDefault();
  $button = $(this);
  transaction_id_selected = $button.data("transaction");
  console.log(transaction_id_selected);
  $("#add-bank").modal("show");
}

function submitBanks(e) {
  e.preventDefault();
  $bank_name = $(".md_bank_name").val();
  $account_name = $(".md_account_name").val();
  $account_no = $(".md_account_no").val();
  $routing_no = $(".md_routing_no").val();
  $sort_code = $(".md_sort_code").val();
  $bank_address = $(".md_bank_address").val();
  $beneficiary_name = $(".md_beneficiary_name").val();
  $beneficiary_address = $(".md_benefciary_address").val();
  $account_type = $('.md_account_type option:selected').val();
  $button = $(this);
  $url = $button.data("url");
  console.log($url);
  if (
    $bank_name.trim() === "" ||
    $account_no.trim() === "" ||
    $account_name.trim() === "" ||
    $routing_no.trim() === "" ||
    $sort_code.trim() === "" ||
    $bank_address.trim() === "" ||
    $beneficiary_address.trim() === "" ||
    $beneficiary_name.trim() === "" ||
    $account_type.trim() === ""
  ) {
    swal({
      text: `Enter valid details`,
      icon: "error",
      buttons: false,
    });
    return;
  }
  $.ajax({
    type: "POST",
    url: $url,
    data: {
      bank_name: $bank_name,
      account_no: $account_no,
      account_name: $account_name,
      routing_no: $routing_no,
      sort_code: $sort_code,
      bank_address: $bank_address,
      $beneficiary_address: $beneficiary_address,
      $beneficiary_name: $beneficiary_name,
      $account_type: $account_type,
      id: transaction_id_selected,
    },
    headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
    success: function ($response) {
      if ($response.success) {
        swal({
          text: `${$response.message}`,
          icon: "success",
          buttons: true,
        }).then(function () {
          location.reload();
        });
      } else {
        swal({
          text: `${$response.message}`,
          icon: "error",
          buttons: true,
        }).then(function () {
          // location.reload();
        });
      }
    },
  });
}

function processApproveOrDecline(e) {
  e.preventDefault();
  $button = $(this);
  $actionType = $button.data("action");
  $type = $button.data("type");
  $url = $button.attr("href");
  swal({
    text: `Are you sure you want to ${$actionType} this ${$type}`,
    icon: "info",
    buttons: true,
  }).then((responce) => {
    if (responce == true) {
      $.ajax({
        type: "POST",
        url: $url,
        data: {},
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function ($response) {
          if ($response.success) {
            swal({
              text: `${$response.message}`,
              icon: "success",
              buttons: true,
            }).then(function () {
              location.reload();
            });
          } else {
            swal({
              text: `${$response.message}`,
              icon: "error",
              buttons: true,
            }).then(function () {
              location.reload();
            });
          }
        },
      });
    }
  });
}

function goBack(e) {
  e.preventDefault();
  history.go(-1);
}

function deleteHandler(e) {
  e.preventDefault();
  $url = $(this).attr("href");
  $type = $(this).attr("data-type");
  swal({
    text: "Are you sure you want to delete this " + $type,
    icon: "info",
    buttons: true,
  }).then((responce) => {
    if (responce == true) {
      $.ajax({
        type: "POST",
        url: $url,
        data: {},
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function ($response) {
          $response = JSON.parse($response);
          if ($response.success) {
            swal({
              text: $type + " successfully deleted",
              icon: "success",
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          } else {
            swal({
              text: `${$response.message}`,
              icon: "error",
              buttons: true,
            }).then(function () {
              location.reload();
            });
          }
        },
      });
    }
  });
}

function addInvestment(e) {
  e.preventDefault();
  $url = $(this).attr("href");
  $type = $(this).attr("data-type");
  swal({
    text: "Are you sure you want to add investment to total balance ",
    icon: "info",
    buttons: true,
  }).then((response) => {
    if (response == true) {
      $.ajax({
        type: "POST",
        url: $url,
        data: {},
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function ($response) {
          console.log($response);
          // $response = JSON.parse($response);
          if ($response.success) {
            swal({
              text: "added successfully",
              icon: "success",
              buttons: true,
            }).then((res) => {
              location.reload();
            });
          } else {
            swal({
              text: `${$response.message}`,
              icon: "error",
              buttons: true,
            }).then(function () {
              // location.reload()
            });
          }
        },
      });
    }
  });
}

function addReferrals(e) {
  e.preventDefault();
  $url = $(this).attr("href");
  $type = $(this).attr("data-type");
  swal({
    text: "Are you sure you want to add referral bonus to total balance ",
    icon: "info",
    buttons: true,
  }).then((response) => {
    if (response == true) {
      $.ajax({
        type: "POST",
        url: $url,
        data: {},
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function ($response) {
          console.log($response);
          // $response = JSON.parse($response);
          if ($response.success) {
            swal({
              text: "added successfully",
              icon: "success",
              buttons: true,
            }).then((res) => {
              // location.reload();
            });
          } else {
            swal({
              text: `${$response.message}`,
              icon: "error",
              buttons: true,
            }).then(function () {
              // location.reload()
            });
          }
        },
      });
    }
  });
}
