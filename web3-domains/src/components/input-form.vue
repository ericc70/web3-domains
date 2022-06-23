<template>
  <div className="form-container">
    <div className="first-row">
      <input type="text" placeholder="domain" v-model="domain" />
      <p className="tld">{{ tld }}</p>
    </div>

    <input type="text" v-model="record" placeholder="whats ur power" />

    <div className="button-container">
      <button className="cta-button mint-button" @click="mintDomain">
        Mint
      </button>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {ethers} from "ethers";
import contractAbi from "../../../artifacts/contracts/Domains.sol/Domains"
// import contract
const domain = ref("")
const reccord = ref("")
const tld = ref("Sdomain")
const CONTRACT_ADRESS = ""


async function mintDomain(){
    if(!domain.value){
        return
    }
    if(domain.value.length <3)
    {
        alert("domain must be longer 3")
        return
    }

    const price = domain.length == 3 ? "0.5" : domain.length == 4 ? "0.3" : "0.1"
    console.log("minting domain" , domain, "wirh price", price )

    try {
       const {ethereum} = window

       if(ethereum){
           const provider = new ethers.providers.Web3Provider(ethereum)
       }


    } catch (error) {
        console.error(error)
    }


}

</script>