import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import './Root.scss';
import { Header } from '../../components/Header/Header';
//-----------------
//Containers
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Project } from '../Project/Project';
import { Contact } from '../Contact/Contact';

@observer export class Root extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <Header
                        img="./assets/img/logo.png" />
                    <div className="cuerpo">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/project" component={Project} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </section>
            </Router>
        )
    }
}