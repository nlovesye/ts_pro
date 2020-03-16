import React from 'react';
// import styles from './index.css';
import { useIntl } from 'umi';
export default function() {
  // console.log('home')
  return (
    <div>
      <div />
      <ul>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to
          reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {useIntl().formatMessage({ id: 'TEST' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
