const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", e => {
  e.preventDefault();
  const paymentOption = form.elements["payment-option"].value;
  let resultHTML = "";
  if (paymentOption === "buy") {
    resultHTML = `
      <p>Company Bank Details:</p>
      <textarea id="bank-details">Your Bank Details Here</textarea>
      <button type="button" onclick="copyBankDetails()">Copy</button>
      <script>
        function copyBankDetails() {
          const bankDetails = document.querySelector("#bank-details");
          bankDetails.select();
          document.execCommand("copy");
        }
      </script>
    `;
  } else if (paymentOption === "sell") {
    resultHTML = `
      <p>Company Wallet Address:</p>
      <textarea id="wallet-address">Your Wallet Address Here</textarea>
      <button type="button" onclick="copyWalletAddress()">Copy</button>
      <script>
        function copyWalletAddress() {
          const walletAddress = document.querySelector("#wallet-address");
          walletAddress.select();
          document.execCommand("copy");
        }
      </script>
      <p>Please submit your Bank Account Details or Wallet Address:</p>
      <form>
        <div>
          <label for="user-details">Your Bank Account Details or Wallet Address:</label>
          <input type="text" id="user-details" name="user-details">
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Please wait...</p>
    `;
  }
  resultDiv.innerHTML = resultHTML;
});
