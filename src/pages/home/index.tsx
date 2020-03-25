import React from 'react';
// import styles from './index.css';
import { useIntl, Link } from 'umi';
export default function() {
    // console.log('home')
    return (
        <div>
            <div />
            <ul>
                <li>
                    To get started, edit <code>src/pages/index.js</code> and
                    save to reload.
                </li>
                <li>
                    <Link to="/sanguo">三国志战略版武将</Link>
                </li>
            </ul>
        </div>
    );
}
