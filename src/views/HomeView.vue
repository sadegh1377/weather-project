<template>
    <div class="home-container primary rounded mx-auto my-5 pt-5 ">
        <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            class="mx-16"
            hide-no-data
            hide-details
            label="Enter your City name..."
            @change="getCityWeather"
            solo
        ></v-autocomplete>
        <h3 v-if="currentWeather !== null" class="mx-10 mt-5 white--text">{{ isDay }}</h3>
        <div v-if="currentWeather === null" class="text-center white--text text-h4 my-16 py-16"> Nothing to show</div>
        <div v-else class="weather-container d-flex flex-wrap justify-center mx-10 mt-5">
            <DetailsCard class=""
                         cardTitle="Temperature"
                         :unit="`${String.fromCharCode(176)}C`"
                         :content="currentWeather"/>
            <DetailsCard class=""
                         cardTitle="Wind speed"
                         unit="km/h"
                         :content="currentWeather"/>
            <DetailsCard class=""
                         cardTitle="Wind direction"
                         unit=""
                         :content="currentWeather"/>
            <DetailsCard class=""
                         cardTitle="Pressure"
                         unit="Millibar"
                         :content="currentWeather"/>
            <DetailsCard class=""
                         cardTitle="Precipitation"
                         unit="mm"
                         :content="currentWeather"/>
            <DetailsCard class=""
                         cardTitle="Humidity"
                         unit="%"
                         :content="currentWeather"/>
        </div>
        <div class="forecast-container secondary mt-5" v-if="currentWeather !== null">
            <h5 class="white--text ml-8 pt-2">Week forecast</h5>
            <div class="d-flex forecast-card-container flex-wrap justify-center mx-5 pt-1 pb-4">
                <ForecastCard v-for="(day,index) in forecastDays" :key="index" :day="day"/>
            </div>
        </div>
        <div class="footer-container rounded-b pb-2">
            <FooterComponent :location="location"/>
        </div>
    </div>
</template>

<script>
import DetailsCard from "@/components/DetailsCard.vue";
import ForecastCard from "@/components/ForecastCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: 'HomeView',
    components: {FooterComponent, ForecastCard, DetailsCard},
    data() {
        return {
            loading: false,
            items: [],
            search: null,
            select: null,
            states: [],
            content: null,
            currentWeather: null,
            forecastDays: null,
            location: null
        }
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val)
        },
    },
    computed: {
        isDay() {
            return this.currentWeather.is_day ? "Today" : "Tonight"
        }
    },
    methods: {
        querySelections(value) {
            this.loading = true
            this.items = []
            // Simulated ajax query
            setTimeout(() => {
                this.$http.get(`search.json?&q=${value}`).then((res) => {
                    res.data.forEach((city) => {
                        this.items.push(city.name)
                    })
                    // console.log(this.items)
                }).catch((err) => {
                    console.log(err)
                })
                this.loading = false
            }, 1000)
        },
        getCityWeather() {
            this.currentWeather = null
            if (this.select !== null) {
                this.$http.get(`forecast.json?&q=${this.select}&days=8`).then((res) => {
                    this.location = res.data.location
                    this.currentWeather = res.data.current
                    res.data.forecast.forecastday.shift()
                    this.forecastDays = res.data.forecast.forecastday
                    console.log(this.forecastDays)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    },
}
</script>
<style scoped>
.home-container {
    max-width: 1024px;
//min-width: 617px;
}

.weather-container {
    gap: 20px;
}

.forecast-container {
    width: 100%;
    height: 100%;
}

.forecast-card-container {
    gap: 20px;
}

.footer-container {
    width: 100%;
    background-color: #23252D;
}
</style>