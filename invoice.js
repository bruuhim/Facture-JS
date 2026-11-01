document.addEventListener("DOMContentLoaded", function () {
  /**
   * TODO: Initialize the invoice state as soon as the page is loaded
   * - Select all the table rows
   * - Call updateItemTotal on each row to recalculate the existing totals
   * - Call updateInvoiceTotal to display the correct overall total
   */

  // These references will be reused in several functions
  const invoiceTable = document
    .getElementById("invoiceTable")
    .getElementsByTagName("tbody")[0];
  const invoiceTotal = document.getElementById("invoiceTotal");
  updateInvoiceTotal();
  /**
   * Function to update the total of one item (one table row)
   * TODO:
   * - Get the .quantity and .unitPrice inputs inside `row`
   * - Convert their values to numbers (parseFloat / Number)
   * - Calculate the total (quantity * price)
   * - Update the .itemTotal cell with a two-decimal format
   * - Return the calculated total so it can be reused
   */
  function updateItemTotal(row) {
    let itemQuantity = row.querySelector(".quantity");
    let itemUnitPrice = row.querySelector(".unitPrice");
    let itemTotal = row.querySelector(".itemTotal");

    let itemQuantityValue = Number(itemQuantity.value);
    let itemUnitPriceValue = Number(itemUnitPrice.value);

    let itemCalcTotal = itemQuantityValue * itemUnitPriceValue;

    itemTotal.textContent = itemCalcTotal.toFixed(2);

    return itemCalcTotal;
  }

  /**
   * Function to update the overall invoice total
   * TODO:
   * - Loop through all the rows of the table body
   * - Use updateItemTotal(row) to get each total (or read the .itemTotal cell)
   * - Add up all the row totals
   * - Update the text of `invoiceTotal` with the sum formatted with two decimals
   */
  function updateInvoiceTotal() {
    let sum = 0;
    for (let i = 0; i < invoiceTable.rows.length; i++) {
      sum += updateItemTotal(invoiceTable.rows[i]);
    }

    invoiceTotal.textContent = sum.toFixed(2);
  }

  /**
   * Function to add a new item row to the invoice
   * TODO:
   * - Create a new <tr> element
   * - Add the needed cells (name, quantity/price inputs, total)
   * - Make sure the inputs have the same classes as the other rows
   * - Add event listeners on the inputs to recalculate the totals live
   * - Insert the new row into `invoiceTable`
   * - Call updateInvoiceTotal to recalculate the overall total after adding
   */
  function addNewItem() {}

  /**
   * Optional bonus if the previous TODOs are done:
   * - Add a "Delete" button on each row
   * - When the user clicks it, remove the row and recalculate the total via updateInvoiceTotal
   */
});
