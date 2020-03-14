import React from 'react';

export default props => {
    console.log('Authentication', props)
    if (true) {
        return props.children
    }
    return <div>hello test</div>;
};
