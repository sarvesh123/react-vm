import React, {Component} from 'react';

class Candidate extends Component {
    render() {
        const {candidate} = this.props;
        return (
            <li>
                {candidate.value}&nbsp;
                <a href={'/candidates/update/' + candidate.key}>Update</a>
            </li>
        )
    }
}
export default Candidate