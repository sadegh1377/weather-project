<template>
    <div id="ForecastCard" class="forecast-card card rounded text-center">
        <p class="date d-inline mr-2">{{ nameOfDay }}</p>
        <p class="date d-inline">{{ dateOfDay }}</p>
        <img class="weather-icon mx-auto" :src="day.day.condition.icon" alt="weather_icon">
        <div class="temp d-flex justify-space-between mx-3">
            <p class="d-inline">
                {{ day.day.maxtemp_c }}{{ `${String.fromCharCode(176)}` }}
            </p>
            <p class="vertical-divider d-inline font-weight-bold">|</p>
            <p class="d-inline">
                {{ day.day.mintemp_c }}{{ `${String.fromCharCode(176)}` }}
            </p>
        </div>
        <v-divider class="horizontal-divider mx-3"/>
        <div class="d-flex justify-space-between mx-2">
            <p class="d-inline">
                <v-icon size="small">mdi-water-outline</v-icon>
                <span class="number">{{ day.day.avghumidity }}%</span>
            </p>
            <p class="d-inline">
                <v-icon size="small">mdi-weather-windy</v-icon>
                <span class="number">{{ day.day.maxwind_kph}}kmh</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ForecastCard",
    props: {
        day: {
            type: Object,
            required: true
        }
    },
    computed: {
        nameOfDay() {
            let date = new Date(this.day.date_epoch * 1000)
            return date.toLocaleDateString('en-EN', {weekday: 'long'})
        },
        dateOfDay() {
            let date = new Date(this.day.date_epoch * 1000)
            return date.toLocaleDateString('en-EN', {month: 'numeric', day: 'numeric'})
        }
    }
}

</script>

<style scoped>
.forecast-card {
    width: 120px;
    height: 100px;
}

.date {
    font-size: 12px;
    color: #97979f;
    padding-bottom: 0;
    margin-bottom: 0;
}

.weather-icon {
    display: block;
    width: 30px;
    height: 30px;
    margin-top: -5px;
}

.vertical-divider {
    color: #97979f;
}

.temp {
    height: 30px;
    margin-top: -2px;
}

.horizontal-divider {
    margin-top: -3px;
}

.number {
    font-size: 11px;
    margin-left: 2px;
}

</style>