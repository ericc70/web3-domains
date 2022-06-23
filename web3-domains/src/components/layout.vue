<script setup>
const TWITTER_HANDLE = "";
const TWITTER_LINK = "";
</script>

<template>
  <div className="App">
    <div className="container">
      <div className="header-container">
        <header>
          <div className="left">
            <p className="title"> Name Service web3</p>
            <p className="subtitle">Your immortal API on the blockchain!</p>
          </div>
        </header>
      </div>
      <slot></slot>


    </div>
  </div>
</template>