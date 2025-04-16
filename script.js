let items = [];

function addItem() {
  const item = document.getElementById("item").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (item && amount) {
    items.push({ item, amount });
    renderItems();
    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
  }
}

function renderItems() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";
  let total = 0;

  items.forEach(i => {
    total += i.amount;
    const li = document.createElement("li");
    li.textContent = `${i.item} - $${i.amount.toFixed(2)}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const client = document.getElementById("clientName").value;

  doc.setFontSize(18);
  doc.text("Value Auto LLC - Invoice", 10, 10);
  doc.setFontSize(12);
  doc.text(`Client: ${client}`, 10, 20);

  let y = 30;
  items.forEach(i => {
    doc.text(`${i.item} - $${i.amount.toFixed(2)}`, 10, y);
    y += 10;
  });

  const total = items.reduce((sum, i) => sum + i.amount, 0);
  doc.text(`Total: $${total.toFixed(2)}`, 10, y + 10);

  doc.save("invoice.pdf");
}