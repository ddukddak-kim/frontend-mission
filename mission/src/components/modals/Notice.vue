<template>
    <div class='modal'>
        <div class='overlay' @click='$emit("close")'></div>
        <div class='modal-card'>
            <h1>Notice</h1>
            <button @click='$emit("close")'>확인</button>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Notice',
};
</script>

<style>
    .modal, .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
    }

    .overlay {
        opacity: 0.5;
        background: #000;
    }

    .modal-card {
        position: relative;
        max-width: 30%;
        min-height: 250px;
        margin: auto;
        margin-top: 20%;
        padding: 20px;
        background: #fff;
        opacity: 1;
        z-index: 10;
    }

</style>
