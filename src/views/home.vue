<template>
    <header>
        <img alt="Vue logo" class="logo" src="../assets/appLogo.jpg" width="200" height="118" />

        <div class="wrapper">
            <HelloWorld :msg=msg></HelloWorld>
        </div>
        <div class="wrapper">
            <TheWelcome :msg=msg></TheWelcome>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
//
const msg = ref('Hello World!!')

</script>