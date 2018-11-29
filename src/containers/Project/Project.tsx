import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

interface Props {
}

interface State {
}

@observer export class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section className="project">
                <section className="projectPadre">
                    
                </section>
            </section>
        )
    }
}