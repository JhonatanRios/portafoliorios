import { observable, computed, action } from "mobx";
class Store {
    
    constructor () {
        window.addEventListener('devicemotion', this.handleDeviceMotion, true);
    }

    @action handleDeviceMotion = (event: DeviceMotionEvent) => {
        const { acceleration, accelerationIncludingGravity, interval, rotationRate } = event;
        if (accelerationIncludingGravity) {
            this.accelerationIncludingGravity = accelerationIncludingGravity;
        }
    };

    @observable accelerationIncludingGravity: DeviceAcceleration | undefined;
    
    @observable proyect = [
        {
            img: "./assets/img/noche.png",
            nombre: "Noche Lunar",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/dark.png",
            nombre: "Dark angel",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/noche.png",
            nombre: "Noche Lunar",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/dark.png",
            nombre: "Dark angel",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/noche.png",
            nombre: "Noche Lunar",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/dark.png",
            nombre: "Dark angel",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/noche.png",
            nombre: "Noche Lunar",
            catego: "Postfotografía",
        },
        {
            img: "./assets/img/dark.png",
            nombre: "Dark angel",
            catego: "Postfotografía",
        },
    ];

    @observable men: string = "./assets/img/men.png";
    @observable logo: string = "./assets/img/logo.png";
}
export const store = new Store();