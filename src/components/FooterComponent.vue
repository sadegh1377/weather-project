<template>
    <div id="FooterComponent" class="footer-component d-flex justify-space-between">
        <div class="location-detail d-flex justify-space-between mx-5 mt-1" v-show="location">
            <div class="">
                <v-icon size="small" color="white">mdi-crosshairs-gps</v-icon>
                <span class="footer-text white--text ml-1">
                        Weather station
                    </span>
            </div>
            <div>
                    <span class="footer-text footer-title">
                        Latitude
                    </span>
                <span class="footer-text white--text ml-1">
                       {{ location?.lat }}
                    </span>
            </div>
            <div>
                    <span class="footer-text footer-title">
                        Longitude
                    </span>
                <span class="footer-text white--text ml-1">
                       {{ location?.lon }}
                    </span>
            </div>
            <div>
                     <span class="footer-text footer-title">
                        Measurement time
                    </span>
                <span class="footer-text white--text ml-1">
                       {{ time }}
                    </span>
            </div>
        </div>
        <div class="theme-container d-flex mt-1">
            <v-icon size="small" color="grey" class="mt-2 mr-3">mdi-white-balance-sunny</v-icon>
            <input type="checkbox" v-model="isDarkMode" @change="changeTheme()" id="switch"/><label
            for="switch">Toggle</label>
            <v-icon size="small" color="grey" class="mt-2 ml-3 mr-5">mdi-brightness-3</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",
    props: {
        location: {
            type: Object,
        }
    },
    data() {
        return {
            isDarkMode: false
        }
    },
    computed: {
        time() {
            if (this.location) {
                let date = new Date(this.location.localtime_epoch * 1000)
                return date.toLocaleTimeString('en-GB')
            } else {
                return null
            }
        }
    },
    methods: {
        changeTheme() {
            if (this.isDarkMode) {
                this.$vuetify.theme.dark = true
                localStorage.removeItem('theme')
                localStorage.setItem("theme", 'darkMode')
            } else {
                localStorage.removeItem('theme')
                localStorage.setItem("theme", 'lightMode')
                this.$vuetify.theme.dark = false
            }
        }
    },
    created() {
        let theme = localStorage.getItem("theme")
        if (theme) {
            if (theme === 'darkMode') {
                this.$vuetify.theme.dark = true
                this.isDarkMode = true;
            } else {
                this.$vuetify.theme.dark = false
                this.isDarkMode = false;
            }
        }
    }
}

</script>

<style scoped>
.footer-component {
    width: 100%;
}

.location-detail {
    column-gap: 20px;
}

.footer-text {
    font-size: 11px;
}

.footer-title {
    color: #9A9BA8;
}


.theme-container {
    height: 22px;
}

input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    margin-top: 8px;
    text-indent: -9999px;
    width: 30px;
    height: 14px;
    background: #DFFC2F;
    display: inline-block;
    border-radius: 100px;
    position: relative;
}

label:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 11px;
    height: 11px;
    background: #4D5262;
    border-radius: 90px;
    transition: 0.3s;
}

input:checked + label {
    background: #DFFC2F;
}

input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
}

label:active:after {
    width: 15px;
}

</style>