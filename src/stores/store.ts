import { observable, computed, action } from "mobx";
class Store {
    
    constructor () {

    }

    @action handleDeviceMotion = (event: DeviceMotionEvent) => {
        const { acceleration, accelerationIncludingGravity, interval, rotationRate } = event;
        console.log('entro evento');
        if (accelerationIncludingGravity) {
            this.accelerationIncludingGravityOH = accelerationIncludingGravity;
            this.imageStyle = {
                // @ts-ignore
                transform: `translate3d(${accelerationIncludingGravity.x * 2}px, ${accelerationIncludingGravity.y * -2 - 10}px, 0) rotateY(${-accelerationIncludingGravity.x * 3}deg)`
            }
        }
    };

    @observable accelerationIncludingGravityOH: DeviceAcceleration | undefined;
    @observable imageStyle: any;
    
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