# Value-Auto LLC
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
}
header {
  background: #2c3e50;
  color: #fff;
  padding: 20px;
  text-align: center;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
input, button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #ecf0f1;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
}
button {
  background: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #219150;
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Value Auto LLC - Invoice Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Value Auto LLC - Invoice Generator</h1>
  </header>
  <div class="container">
    <label for="clientName">Client Name:</label>
    <input type="text" id="clientName" placeholder="Enter client name">

    <label for="item">Item Description:</label>
    <input type="text" id="item" placeholder="e.g. Brake Repair">

    <label for="amount">Amount ($):</label>
    <input type="number" id="amount" placeholder="e.g. 150">

    <button onclick="addItem()">Add Item</button>

    <ul id="itemList"></ul>

    <h3>Total: $<span id="total">0.00</span></h3>

    <button onclick="generatePDF()">Download Invoice PDF</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
<header>
  <img src="logo.png" alt="Value Auto LLC Logo" style="max-width: 100px; height: auto;">
  <h1>Value Auto LLC - Invoice Generator</h1>
</header>
<footer>
  <p>Value Auto LLC, 2826 E 31st St S, Wichita, KS 67216 </p>
</footer>
<label for="tax">Tax Rate (%)</label>
<input type="number" id="tax" placeholder="e.g. 5.00">
const taxRate = parseFloat(document.getElementById("tax").value) / 100;
let total = items.reduce((sum, i) => sum + i.amount, 0);
total += total * taxRate; // Add tax
<label for="discount">Discount (%)</label>
<input type="number" id="discount" placeholder="e.g. 10.00">
const discountRate = parseFloat(document.getElementById("discount").value) / 100;
total -= total * discountRate; // Apply discount
p>Payment Terms: Due within 30 days</p>
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
function sendInvoiceEmail() {
  const clientName = document.getElementById("clientName").value;
  const total = items.reduce((sum, i) => sum + i.amount, 0);
  // Send email through EmailJS
  emailjs.send("abdul.s.afghan@gmail.com", "value.aut@gmail.com", {
    client_name: clientName,
    invoice_total: total,
    // Add other variables as needed
  });
