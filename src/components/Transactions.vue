<template>
  <div>
    <h2>Transactions</h2>
    <button class="btn btn-primary mb-3" @click="showAddTransactionModal">Add Transaction</button>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.name }}</td>
            <td>{{ transaction.type }}</td>
            <td>{{ transaction.amount }} Php</td>
            <td>
              <button class="btn btn-sm btn-warning" @click="editTransaction(transaction)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteTransaction(transaction.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Transaction Modal -->
    <div class="modal" tabindex="-1" ref="transactionModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editMode ? 'Edit Transaction' : 'Add Transaction' }}</h5>
            <button type="button" class="btn-close" @click="closeTransactionModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveTransaction">
              <div class="mb-3">
                <label for="transactionDate" class="form-label">Date</label>
                <input type="date" class="form-control" id="transactionDate" v-model="transactionForm.date" required>
              </div>
              <div class="mb-3">
                <label for="transactionName" class="form-label">Name</label>
                <input type="text" class="form-control" id="transactionName" v-model="transactionForm.name" required>
              </div>
              <div class="mb-3">
                <label for="transactionType" class="form-label">Type</label>
                <select class="form-control" id="transactionType" v-model="transactionForm.type" required>
                  <option>Sales</option>
                  <option>Expense</option>
                  <option>Payables</option>
                  <option>Receivables</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="transactionAmount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="transactionAmount" v-model="transactionForm.amount" required>
              </div>
              <button type="submit" class="btn btn-primary">{{ editMode ? 'Update' : 'Add' }}</button>
            </form>
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
      transactions: [
        // sample transactions
        { id: 1, date: '2024-07-01', name: 'Transaction 1', type: 'Sales', amount: 1000 },
        { id: 2, date: '2024-07-02', name: 'Transaction 2', type: 'Expense', amount: -500 },
        // more transactions
      ],
      transactionForm: {
        id: null,
        date: '',
        name: '',
        type: '',
        amount: 0
      },
      editMode: false
    }
  },
  methods: {
    showAddTransactionModal() {
      this.editMode = false
      this.resetTransactionForm()
      this.$refs.transactionModal.style.display = 'block'
    },
    editTransaction(transaction) {
      this.editMode = true
      this.transactionForm = { ...transaction }
      this.$refs.transactionModal.style.display = 'block'
    },
    deleteTransaction(id) {
      this.transactions = this.transactions.filter(t => t.id !== id)
    },
    saveTransaction() {
      if (this.editMode) {
        const index = this.transactions.findIndex(t => t.id === this.transactionForm.id)
        if (index !== -1) {
          this.transactions.splice(index, 1, { ...this.transactionForm })
        }
      } else {
        this.transactionForm.id = Date.now()
        this.transactions.push({ ...this.transactionForm })
      }
      this.closeTransactionModal()
    },
    closeTransactionModal() {
      this.$refs.transactionModal.style.display = 'none'
    },
    resetTransactionForm() {
      this.transactionForm = {
        id: null,
        date: new Date().toISOString().substr(0, 10),
        name: '',
        type: 'Sales',
        amount: 0
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
