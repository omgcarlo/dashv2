<template>
  <div>
    <h2>Dashboard</h2>
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Sales</h5>
            <p class="card-text">{{ totalSales }} Php</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Expenses</h5>
            <p class="card-text">{{ totalExpenses }} Php</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Total Payables/Receivables</h5>
            <p class="card-text">{{ totalPayablesReceivables }} Php</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-12">
        <h5>Financial Table</h5>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Cash</th>
              <th>GCASH</th>
              <th>Receivables</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ cash }} Php</td>
              <td>{{ gcash }} Php</td>
              <td>{{ receivables }} Php</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-12">
        <h5>Recent Transactions</h5>
        <div v-for="(group, index) in groupedTransactions" :key="index" class="mb-3">
          <button class="btn btn-secondary w-100" type="button" @click="toggleCollapse(index)">
            {{ group.date }} - Total: {{ group.totalAmount }} Php
          </button>
          <div v-show="!group.collapsed" class="collapse show">
            <table class="table table-striped mt-2">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in group.transactions" :key="transaction.id">
                  <td>{{ transaction.date }}</td>
                  <td>{{ transaction.name }}</td>
                  <td>{{ transaction.type }}</td>
                  <td>{{ transaction.amount }} Php</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalSales: 0,
      totalExpenses: 0,
      totalPayablesReceivables: 0,
      cash: 0,
      gcash: 0,
      receivables: 0,
      transactions: [
        // sample transactions
        { id: 1, date: '2024-07-01', name: 'Transaction 1', type: 'Sales', amount: 1000 },
        { id: 2, date: '2024-07-01', name: 'Transaction 2', type: 'Expense', amount: -500 },
        { id: 3, date: '2024-07-02', name: 'Transaction 3', type: 'Sales', amount: 1500 },
        // more transactions
      ],
      expandedIndex: null // Track which index is expanded
    }
  },
  computed: {
    groupedTransactions() {
      const groups = this.transactions.reduce((acc, transaction) => {
        const date = transaction.date
        if (!acc[date]) {
          acc[date] = { 
            date, 
            transactions: [], 
            totalAmount: 0, 
            collapsed: true 
          }
        }
        acc[date].transactions.push(transaction)
        acc[date].totalAmount += transaction.amount
        return acc
      }, {})
      return Object.values(groups)
    }
  },
  mounted() {
    this.calculateTotals()
  },
  methods: {
    calculateTotals() {
      this.totalSales = this.transactions
        .filter(t => t.type === 'Sales')
        .reduce((acc, t) => acc + t.amount, 0)
      this.totalExpenses = this.transactions
        .filter(t => t.type === 'Expense')
        .reduce((acc, t) => acc + t.amount, 0)
      this.totalPayablesReceivables = this.transactions
        .filter(t => t.type === 'Payables' || t.type === 'Receivables')
        .reduce((acc, t) => acc + t.amount, 0)
    },
    toggleCollapse(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
