import React from 'react';
import classnames from 'classnames';
import './index.scss';

class KoroSection extends React.Component {
    render() {
        return (
            <div>
                <section className={classnames(['section-koro', 'hel-tram', {'koro-wave-top': this.props.top === true}, {'koro-pulse-bottom': this.props.bottom === true}, 'koro-size-x3'])}>
                    <div className="section-koro__content">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}

export default KoroSection
