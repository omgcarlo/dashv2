<template>
    <div>
      <h2>Payables/Receivables</h2>
      <button class="btn btn-primary mb-3" @click="showAddPRModal">Add Payable/Receivable</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pr in payablesReceivables" :key="pr.id">
            <td>{{ pr.name }}</td>
            <td>{{ pr.type }}</td>
            <td>{{ pr.amount }} Php</td>
            <td>
              <button class="btn btn-sm btn-warning" @click="editPR(pr)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deletePR(pr.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add/Edit Payable/Receivable Modal -->
      <div class="modal" tabindex="-1" ref="prModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ editMode ? 'Edit Payable/Receivable' : 'Add Payable/Receivable' }}</h5>
              <button type="button" class="btn-close" @click="closePRModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="savePR">
                <div class="mb-3">
                  <label for="prName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="prName" v-model="prForm.name" required>
                </div>
                <div class="mb-3">
                  <label for="prType" class="form-label">Type</label>
                  <select class="form-control" id="prType" v-model="prForm.type" required>
                    <option>Payable</option>
                    <option>Receivable</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="prAmount" class="form-label">Amount</label>
                  <input type="number" class="form-control" id="prAmount" v-model="prForm.amount" required>
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
        payablesReceivables: [
          // sample data
          { id: 1, name: 'Payable 1', type: 'Payable', amount: 1000 },
          { id: 2, name: 'Receivable 1', type: 'Receivable', amount: 2000 },
          // more data
        ],
        prForm: {
          id: null,
          name: '',
          type: 'Payable',
          amount: 0
        },
        editMode: false
      }
    },
    methods: {
      showAddPRModal() {
        this.editMode = false
        this.resetPRForm()
        this.$refs.prModal.style.display = 'block'
      },
      editPR(pr) {
        this.editMode = true
        this.prForm = { ...pr }
        this.$refs.prModal.style.display = 'block'
      },
      deletePR(id) {
        this.payablesReceivables = this.payablesReceivables.filter(p => p.id !== id)
      },
      savePR() {
        if (this.editMode) {
          const index = this.payablesReceivables.findIndex(p => p.id === this.prForm.id)
          if (index !== -1) {
            this.payablesReceivables.splice(index, 1, { ...this.prForm })
          }
        } else {
          this.prForm.id = Date.now()
          this.payablesReceivables.push({ ...this.prForm })
        }
        this.closePRModal()
      },
      closePRModal() {
        this.$refs.prModal.style.display = 'none'
      },
      resetPRForm() {
        this.prForm = {
          id: null,
          name: '',
          type: 'Payable',
          amount: 0
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  