import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
   
    new Vue ({
        el: "#app",
        data: {
            countries: [],
            selectedCountry: null,
            newCountry: { name: "", capital: "", flag: "" }
        },
        mounted: function(){
            this.fetchCountries()
        },
        methods: {
            fetchCountries: function () {
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                    .then(countries =>  this.countries = countries);
            },

            savedCountry: function () {
                this.countries.push(this.newCountry)
                this.newCountry = { name: "", capital: "", flag: ""}
            }
        }
    })
    
})