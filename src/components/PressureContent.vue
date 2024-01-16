<template>
    <div id="PressureContent" class="mt-10">
        <p class="pressure">{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: "PressureContent",
    props: {
        content: {
            type: Number,
            required: true
        }
    }
}

</script>

<style scoped>
.pressure {
    font-size: 40px;
}
</style>