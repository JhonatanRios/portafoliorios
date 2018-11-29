import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';


interface Props {
}

interface State {
}

@observer export class About extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className="about">
                <section className="aboutPadre">
                <h1>about</h1>
                </section>
            </section>
        )
    }
}