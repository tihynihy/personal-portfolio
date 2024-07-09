<template>
    <div>
      <div class="navbar-container items-center justify-center flex flex-col sticky top-0">
        <navbar-component />
      </div>
      <div class="content-container">
        <router-view />
      </div>
    </div>
  </template>
  
  <style scoped>
  .navbar-container {
    z-index: 1000; 
  }
  </style>
  