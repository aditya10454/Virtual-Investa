// Retrieve the stock list, portfolio table, and profit element
const stockList = document.getElementById('stock-list');
const transactionLog = document.getElementById('transaction-log');
const portfolioTableBody = document.getElementById('portfolio-body');
const profitElement = document.getElementById('profit');

// Initialize virtual funds, portfolio, and initial investment
let virtualFunds = 100000; // Assuming 100,000 as initial funds
let portfolio = {};
let initialInvestment = 0;

// Add event listener to the stock list
stockList.addEventListener('click', handleStockClick);

// Handle stock click event
function handleStockClick(event) {
  const stockName = event.target.dataset.stock;
  if (stockName) {
    const action = confirm(`Do you want to buy/sell ${stockName}?`);
    if (action) {
      const stockPrice = getRandomStockPrice(); // Replace this with your logic to fetch stock prices

      // Prompt for the quantity to buy/sell
      const quantity = parseInt(prompt(`Enter the quantity to buy/sell ${stockName}:`), 10);
      if (!isNaN(quantity) && quantity > 0) {
        const transactionResult = performTransaction(stockName, stockPrice, quantity);
        transactionLog.innerHTML += `<p>${transactionResult}</p>`;
        updatePortfolioTable();
        updateProfit();
      } else {
        alert('Invalid quantity!');
      }
    }
  }
}

// Function to perform the buy/sell transaction
function performTransaction(stockName, stockPrice, quantity) {
  const transactionCost = stockPrice * quantity;
  let transactionResult = '';

  if (transactionCost <= virtualFunds) {
    // Deduct funds from the virtual balance
    virtualFunds -= transactionCost;

    // Update the portfolio
    if (portfolio.hasOwnProperty(stockName)) {
      portfolio[stockName] += quantity;
    } else {
      portfolio[stockName] = quantity;
    }

    transactionResult = `Transaction complete for ${stockName}. Bought/Sold ${quantity} shares at $${stockPrice.toFixed(2)} each. Remaining balance: $${virtualFunds.toFixed(2)}`;
  } else {
    transactionResult = `Insufficient funds to complete the transaction for ${stockName}`;
  }

  return transactionResult;
}

// Function to generate a random stock price (for demonstration purposes)
function getRandomStockPrice() {
  // Replace this with your logic to fetch real-time stock prices
  return Math.random() * (1000 - 1) + 1; // Generating a random value between 1 and 1000
}

// Function to update the portfolio table
function updatePortfolioTable() {
  // Clear the portfolio table body
  portfolioTableBody.innerHTML = '';

  // Iterate over the portfolio items
  for (const stockName in portfolio) {
    if (portfolio.hasOwnProperty(stockName)) {
      const quantity = portfolio[stockName];
      const stockPrice = getRandomStockPrice(); // Replace this with your logic to fetch stock prices
      const marketValue = stockPrice * quantity;

      // Create a table row for the portfolio item
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${stockName}</td>
        <td>${quantity}</td>
        <td>$${marketValue.toFixed(2)}</td>
      `;

      // Append the row to the portfolio table body
      portfolioTableBody.appendChild(row);
    }
  }
}

// Function to update the profit/loss
function updateProfit() {
    let currentInvestment = 0;
  
    // Calculate the current investment value and the initial investment value
    for (const stockName in portfolio) {
      if (portfolio.hasOwnProperty(stockName)) {
        const quantity = portfolio[stockName];
        const stockPrice = getRandomStockPrice(); // Replace this with your logic to fetch stock prices
  
        const currentValue = stockPrice * quantity;
        currentInvestment += currentValue;
  
        // Calculate the initial investment if it hasn't been calculated yet
        if (initialInvestment === 0) {
          initialInvestment += stockPrice * quantity;
        }
      }
    }
  
    // Calculate the profit/loss
    const profit = currentInvestment - initialInvestment;
  
    // Update the profit element
    profitElement.textContent = `$${profit.toFixed(2)}`;
  }
  