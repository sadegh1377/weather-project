<template>
    <div id="HumidityContent">
        <div role="progressbar" :aria-valuenow="content" aria-valuemin="0" aria-valuemax="100"
             :style="{'--value': content}"></div>
    </div>
</template>

<script>
export default {
    name: "HumidityContent",
    props: {
        content: {
            type: Number,
            required: true
        }
    }
}

</script>

<style scoped>
@keyframes progress {
    0% {
        --percentage: 0;
    }
    100% {
        --percentage: var(--value);
    }
}

@property --percentage {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
}

[role="progressbar"] {
    --percentage: var(--value);
    --primary: #6978FF;
    --secondary: #e9e9e9;
    --size: 200px;
    animation: progress 2s 0.5s forwards;
    width: var(--size);
    aspect-ratio: 2 / 1;
    border-radius: 50% / 100% 100% 0 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

[role="progressbar"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0.75turn at 50% 100%, var(--primary) calc(var(--percentage) * 1% / 2), var(--secondary) calc(var(--percentage) * 1% / 2 + 0.1%));
    mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);
    mask-mode: alpha;
    -webkit-mask: radial-gradient(at 50% 100%, #0000 55%, #000 55.5%);
    -webkit-mask-mode: alpha;
}

[role="progressbar"]::after {
    counter-reset: percentage var(--value);
    content: counter(percentage) '%';
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(var(--size) / 5);
    color: var(--primary);
}

/* demo */
body {
    margin: 0;
    display: grid;
    place-items: center;
    height: 100vh;
    background: #f0f8ff;
}


</style>