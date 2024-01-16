import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                main: '#ffffff',
                primary: '#6978FF',
                secondary: '#707FFE',
                card: '#ffffff'
            },
            dark: {
                main: '#64676f',
                primary: '#323642',
                secondary: '#3a3e4c',
                card: '#484C5E'
            }
        },
    },
});
