import React, {Component} from 'react'

export class CourseIconComponent extends Component {
    render() {
        const {src, caption} = this.props
        return (
            <figure>
                <img src={src} alt={caption} />
                <figcaption>{caption}</figcaption>
            </figure>
        )
    }
}

export default CourseIconComponent
 
