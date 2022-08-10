<template>
    <div class="container" v-show="show">
        <a href="#img1">点击跳转至img1</a>
        <img id="img1" src="https://acg.conix.ml" title="id: img1" @load="show = true">
    </div>
</template>

<script setup>
import { ref } from "vue"

const show = ref(false)
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
a {
    margin-bottom: 1000px;
}
img {
    width: 80%;
}
</style>