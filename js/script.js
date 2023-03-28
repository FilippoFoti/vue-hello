const {createApp} = Vue;

createApp({
    data() {
        return {
            message: "Benvenuto, questa è la pagina ufficiale di VueJs by ",
            colorTitle: "Boolean",
            imgSrc: "img/pexels-realtoughcandycom-11035366.jpg",
            imgAlt: "VueJs",
            code:"img/Immagine 2023-03-28 133839.png",
            codeAlt:"Tag Script",
            hidden: "hidden",
        }
    },
    methods: {
        handleClick() {
            if(this.hidden === "") {
                this.hidden = "hidden";
            } else {
                this.hidden = "";
            }
        }
    }
}).mount("#app");