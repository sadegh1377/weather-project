<template>
    <div id="TemperatureContent" class="d-flex flex-row mt-10">
        <img :src="content.condition.icon" alt="icon" class="mr-2 pb-4">
        <p class="temperature">{{ `${content.temp_c}${String.fromCharCode(176)}` }}</p>
    </div>
</template>

<script>
export default {
    name: "TemperatureContent",
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.temperature {
    font-size: 40px;
}
</style>