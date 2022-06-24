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
import { ref } from "vue";
import { ethers } from "ethers";
import contractAbi from "../../../artifacts/contracts/Domains.sol/Domains";
// import contract
const domain = ref("");
const reccord = ref("");
const tld = ref("SunDpmain");
const CONTRACT_ADRESS = "0xf8e69C2c0394cbf99E9e02864ED2E835a2BdE58c";

async function mintDomain() {
  if (!domain.value) {
    return;
  }
  if (domain.value.length < 3) {
    alert("domain must be longer 3");
    return;
  }

  const price = domain.value.length == 3 ? "0.5" : domain.value.length == 4 ? "0.3" : "0.1";
  console.log("minting domain", domain, "wirh price", price);

  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADRESS,
        contractAbi.abi,
        signer
      );

      console.log("talk to the wallet an pay gas");

      let tx = await contract.register(domain.value, {
        value: ethers.utils.parseEther(price),
      });

      const receipt = await tx.wait();

      if (receipt.status === 1) {
        console.log(
          "domain minted https://mumbai.polygonscan.com/tx/" + tx.hash
        );
      }

      tx = await contract.setRecord(domain, record);

      console.log("record set! https://mumbai.polygonscan.com/tx/" + tx.hash);

      await tx.await();
      record.value =""
      domain.value = ""

      console.log();
    } else {
      alert("transaction failed, please try again");
    }
  } catch (error) {
    console.error(error);
  }
}
</script>
