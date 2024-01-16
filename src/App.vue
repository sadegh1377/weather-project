<template>
    <v-app>
        <div class="app main">
            <router-view/>
        </div>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

.app {
    font-family: 'Inter', sans-serif;
    height: 100%;
    background-color: white;
}

.v-application--wrap {
    max-width: unset !important;
}
</style>
