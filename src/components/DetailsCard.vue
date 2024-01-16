<template>
    <div class="details-card rounded elevation-3">
        <v-card
            class="mx-auto card"
            height="100%"
            outlined
        >
            <div>
                <div class="d-flex justify-space-between mx-3 mt-2">
                    <div class="font-weight-bold">
                        {{ cardTitle }}
                    </div>
                    <div class="grey--text">
                        {{ unit }}
                    </div>
                </div>
            </div>
            <div class="d-flex align-center justify-center">
                <TemperatureContent v-if="cardTitle === 'Temperature'" :content="content"/>
                <WindSpeedContent v-if="cardTitle === 'Wind speed'" :content="content"/>
                <WindDirectionContent v-if="cardTitle === 'Wind direction'" :content="content.wind_dir"/>
                <PressureContent v-if="cardTitle === 'Pressure'" :content="content.pressure_mb"/>
                <PrecipitationContent v-if="cardTitle === 'Precipitation'" :content="content.precip_mm"/>
                <HumidityContent v-if="cardTitle === 'Humidity'" :content="content.humidity"/>
            </div>

            <div class="d-flex justify-space-between mx-3 mt-3" v-if="cardTitle === 'Temperature'">
                <p class="footer">
                    <span class="vertical-line mr-1">
                        <svg width="6" height="15" viewBox="0 0 6 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L3 22" stroke="black" stroke-width="6" stroke-linecap="round"/>
                        </svg>

                    </span>
                    visibility <span class="font-weight-bold">{{ ` ${content.vis_km} ` }}km</span>
                </p>
                <p class="footer">
                    <span class="vertical-line mr-1">
                        <svg width="6" height="15" viewBox="0 0 6 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L3 22" stroke="black" stroke-width="6" stroke-linecap="round"/>
                        </svg>
                    </span>feels like <span class="font-weight-bold">
                    {{ `${content.feelslike_c}${String.fromCharCode(176)}` }}</span>
                </p>
            </div>
        </v-card>
    </div>
</template>

<script>
import TemperatureContent from "@/components/TemperatureContent.vue";
import WindSpeedContent from "@/components/WindSpeedContent.vue";
import WindDirectionContent from "@/components/WindDirectionContent.vue";
import PressureContent from "@/components/PressureContent.vue";
import HumidityContent from "@/components/HumidityContent.vue";
import PrecipitationContent from "@/components/PrecipitationContent.vue";

export default {
    components: {
        PrecipitationContent,
        HumidityContent, PressureContent, WindDirectionContent, WindSpeedContent, TemperatureContent
    },
    props: {
        cardTitle: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        content: {
            type: [String, Number, Object],
            required: true

        }
    },
    name: "DetailsCard"
}

</script>

<style scoped>
.details-card {
    width: 300px;
    height: 200px;
}

.vertical-line {
    font-weight: 900;
}

span svg {
    vertical-align: -2px;
}

.footer {
    font-size: 13px;
}
</style>