import React from 'react';

const Part2 = (props) => {
    // constructor() {
    //     super();
    //     this.state = {
    //     }
    // }

    return (
        <div className="button-container">
            <button className="previous" onClick={(e) => props.prevButton()}> Previous </button>
            <button className="next" onClick={(e) => props.nextButton()}> Next </button>
        </div>
    )
}

export default Part2
