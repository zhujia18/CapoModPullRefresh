/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * Special thanks to Askvortsov
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Application from 'flarum/common/Application';

// import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PullToRefresh from 'pulltorefreshjs';
// import { faSyncAlt} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

app.initializers.add('capomod/pullrefresh', () => {
  extend(Application.prototype, 'mount', () => {
    componentDidMount()
    {
        PullToRefresh.init({
            mainElement: 'body',
            onRefresh() {
              alert("你好，我是一个警告框！");
                window.location.reload();
            },
            iconArrow: ReactDOMServer.renderToString(
                // <FontAwesomeIcon icon={faSyncAlt} />
            ),
            iconRefreshing: ReactDOMServer.renderToString(
                // <FontAwesomeIcon icon={faSyncAlt} spin={true} />
            ),
        });
    }

    componentWillUnmount()
    {
        PullToRefresh.destroyAll();
    }




  });
});
