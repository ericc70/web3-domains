

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

<footer>
       <div>
        <p> Blockchain : Polygon mumbai - Projet pédagogique aucun support, aucune maintenance.</p>
    </div>
</footer>
    </div>
  </div>
</template>