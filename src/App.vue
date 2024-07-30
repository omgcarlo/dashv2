<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <!-- Sidebar -->
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span class="fs-5 d-none d-sm-inline">Dashboard v2</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li class="nav-item">
                <router-link class="nav-link align-middle px-0" to="/">
                  <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                </router-link>
              </li>
              
              <li>
                <router-link class="nav-link px-0 align-middle" to="/transactions">
                  <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Transactions</span>
                </router-link>
              </li>
              <li>
                <router-link class="nav-link px-0 align-middle" to="/products">
                  <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Products</span>
                </router-link>
              </li>
        
              <li>
                <router-link class="nav-link px-0 align-middle" to="/payablesreceivables">
                  <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Payables/Receivables</span>
                </router-link>
              </li>
            </ul>
            <hr>
            <div class="dropdown pb-4">
              <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="User" width="30" height="30" class="rounded-circle">
                <span class="d-none d-sm-inline mx-1">User</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><router-link class="dropdown-item" to="#">New Business</router-link></li>
                <li><router-link class="dropdown-item" to="#">Settings</router-link></li>
                <li><router-link class="dropdown-item" to="#">Profile</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><router-link class="dropdown-item" to="#">Sign out</router-link></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="col py-3">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* Add custom styles here */
</style>
