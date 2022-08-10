<template>
    <div class="container" v-show="show">
        <a href="#img2">点击跳转至img2</a>
        <a name="img2"></a>
        <img src="https://acg.conix.ml/?pic=2" title="a name: img2" @load="show = true">
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
a[href] {
    margin-bottom: 1000px;
}
img {
    width: 80%;
}
a[name] {
    height: 0px;
}
</style>