import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import "./Home.scss"

interface Props {
}

interface State {
}

@observer export class Home extends React.Component<Props, State> {
    shadowStyle: any = null;
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if (store.accelerationIncludingGravity) {

            this.shadowStyle = {
                // @ts-ignore
                transform: `translate3d(${store.accelerationIncludingGravity.x * 8}px, ${store.accelerationIncludingGravity.y * 5 + 30}px, 0) rotateY(${-store.accelerationIncludingGravity.x * 3}deg)`
            };
            const imageStyle = {
                // @ts-ignore
                transform: `translate3d(${store.accelerationIncludingGravity.x * 2}px, ${store.accelerationIncludingGravity.y * -2 - 10}px, 0) rotateY(${-store.accelerationIncludingGravity.x * 3}deg)`
            }
        }

        return (
            <section className="homePadre">
                <section className="landing">
                    <div className="cont-logo">
                        <img src={store.logo} alt="" className="logo" style={this.shadowStyle} />
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
                        <img src={store.men} alt="" className="men" />
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