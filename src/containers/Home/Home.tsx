import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import "./Home.scss"
import {action} from "mobx";

interface Props {
}

interface State {
    accelerationIncludingGravityOH: DeviceAcceleration | undefined;
    imageStyle: any;
}

@observer export class Home extends React.Component<Props, State> {
    shadowStyle: any = null;
    constructor(props: Props) {
        super(props);
        this.state = {
            accelerationIncludingGravityOH: undefined,
            imageStyle: undefined
        };
    }

    componentDidMount() {
        window.addEventListener('devicemotion', this.handleDeviceMotion);
    }

    handleDeviceMotion = (event: DeviceMotionEvent) => {
        const { acceleration, accelerationIncludingGravity, interval, rotationRate } = event;
        if (accelerationIncludingGravity) {
            const _imageStyle = {
                // @ts-ignore
                filter: `blur(${Math.abs(accelerationIncludingGravity.x)}px)`
            };
            this.setState({accelerationIncludingGravityOH: accelerationIncludingGravity, imageStyle: _imageStyle})
        }
    };

    render() {


        return (
            <section className="homePadre">
                <section className="landing">
                    <div className="cont-logo">
                        <img src={store.logo} alt="" className="logo"/>
                    </div>
                </section>
                <section className="aboutmeHome">
                    <div className="cont-description">
                        <div className="description">
                            <h1>Acerca de Mi</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem non unde facilis impedit vitae illo corrupti quam placeat eveniet. Inventore, atque aut. Odit illo recusandae sed rem deserunt? Harum, perferendis!</p>
                        </div>
                    </div>
                    <div className="cont-myImage">
                        <img src={store.men} alt="" className="men" style={this.state.imageStyle}/>
                    </div>
                </section>
                <section className="viewProjects">
                    <div className="cont-projects">
                        <div className="cont-projectTitle">
                            <div className="projectTitle">
                                <h1>PRO<br /><span>-</span>YEC<br /><span>--</span>TOS</h1>
                            </div>
                        </div>
                        <div className="Projects">
                            {store.proyect.map((proy: any) => {
                                return (
                                    <div className="otherProject">
                                        <img src={proy.img} alt="" />
                                        <h2>{proy.nombre}</h2>
                                        <h3>{proy.catego}</h3>
                                        <button>

                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}