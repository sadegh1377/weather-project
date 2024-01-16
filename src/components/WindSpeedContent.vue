<template>
    <div id="WindSpeedContent" class="mt-5">
        <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="#6978FF" stroke-width="4"/>
            <line x1="42" y1="80" x2="42" y2="90" stroke="#6978FF" stroke-width="4"/>
            <line x1="70" y1="92" x2="10" y2="92" stroke="#6978FF" stroke-width="4"/>
            <text x="41%" y="41%" text-anchor="middle" stroke-width="2px" dy=".3em" :fill="textColor"
                  font-size="30">{{ content.wind_mph }}
            </text>
        </svg>
    </div>
</template>

<script>
import {windMixin} from "@/mixins/windMixin";

export default {
    name: "WindSpeedContent",
    mixins: [windMixin],
    props: {
        content: {
            type: Object,
            required: true
        }
    },
}

</script>

<style scoped>

</style>