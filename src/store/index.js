// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    totalSales: 0,
    totalExpenses: 0,
    totalPayableReceivables: 0,
    cashAmount: 0,
    gcashAmount: 0,
    receivableAmount: 0,
    recentTransactions: [],
    transactions: [],
    products: [],
    payablesReceivables: [],
  },
  mutations: {
    SET_TOTAL_SALES(state, amount) {
      state.totalSales = amount;
    },
    // Add more mutations for other state properties
    ADD_TRANSACTION(state, transaction) {
      state.transactions.push(transaction);
      state.recentTransactions.unshift(transaction);
      if (state.recentTransactions.length > 50) {
        state.recentTransactions.pop();
      }
    },
    DELETE_TRANSACTION(state, id) {
      state.transactions = state.transactions.filter(t => t.id !== id);
      state.recentTransactions = state.recentTransactions.filter(t => t.id !== id);
    },
    // Add mutations for products and payables/receivables
  },
  actions: {
    addTransaction({ commit }, transaction) {
      // In a real app, you'd make an API call here
      const newTransaction = { ...transaction, id: Date.now() };
      commit('ADD_TRANSACTION', newTransaction);
    },
    deleteTransaction({ commit }, id) {
      // In a real app, you'd make an API call here
      commit('DELETE_TRANSACTION', id);
    },
    // Add more actions as needed
  },
});