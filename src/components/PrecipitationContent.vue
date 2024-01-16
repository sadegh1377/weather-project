<template>
    <div id="PrecipitationContent" class="mt-10">
        <p class="precipitation">{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: "PrecipitationContent",
    props: {
        content: {
            type: Number,
            required: true
        }
    }
}

</script>

<style scoped>
.precipitation {
    font-size: 40px;
}
</style>