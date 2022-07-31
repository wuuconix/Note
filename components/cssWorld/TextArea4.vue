<template>
    <div class="container">
        <textarea placeholder="动画"></textarea>
    </div>
</template>

<style scoped>
.container {
    background-color: #DCDFE6;
    width: 50%;
    animation: width 2s infinite alternate;
}

@keyframes width {
    from { width: 50%; }
    to { width: 100%; }
}

textarea {
    display: block;
    width: 100%;
    padding: 10px;
    resize: both;
    background-color: #a0cfff;
    box-sizing: border-box;
    margin: 20px 0;
    border-radius: 5px;
}
</style>