<template>
    <div>
      <h2>Products</h2>
      <button class="btn btn-primary mb-3" @click="showAddProductModal">Add Product</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }} Php</td>
            <td>
              <button class="btn btn-sm btn-warning" @click="editProduct(product)">Edit</button>
              <button class="btn btn-sm btn-danger" @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add/Edit Product Modal -->
      <div class="modal" tabindex="-1" ref="productModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ editMode ? 'Edit Product' : 'Add Product' }}</h5>
              <button type="button" class="btn-close" @click="closeProductModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="saveProduct">
                <div class="mb-3">
                  <label for="productName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="productName" v-model="productForm.name" required>
                </div>
                <div class="mb-3">
                  <label for="productPrice" class="form-label">Price</label>
                  <input type="number" class="form-control" id="productPrice" v-model="productForm.price" required>
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
        products: [
          // sample products
          { id: 1, name: 'Product 1', price: 100 },
          { id: 2, name: 'Product 2', price: 200 },
          // more products
        ],
        productForm: {
          id: null,
          name: '',
          price: 0
        },
        editMode: false
      }
    },
    methods: {
      showAddProductModal() {
        this.editMode = false
        this.resetProductForm()
        this.$refs.productModal.style.display = 'block'
      },
      editProduct(product) {
        this.editMode = true
        this.productForm = { ...product }
        this.$refs.productModal.style.display = 'block'
      },
      deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id)
      },
      saveProduct() {
        if (this.editMode) {
          const index = this.products.findIndex(p => p.id === this.productForm.id)
          if (index !== -1) {
            this.products.splice(index, 1, { ...this.productForm })
          }
        } else {
          this.productForm.id = Date.now()
          this.products.push({ ...this.productForm })
        }
        this.closeProductModal()
      },
      closeProductModal() {
        this.$refs.productModal.style.display = 'none'
      },
      resetProductForm() {
        this.productForm = {
          id: null,
          name: '',
          price: 0
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  