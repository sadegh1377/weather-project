export const windMixin= {
    computed: {
        textColor() {
            return this.$vuetify.theme.dark ? '#ffffff' : '#212121'
        }
    }
}