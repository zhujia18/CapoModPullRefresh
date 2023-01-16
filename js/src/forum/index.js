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

import ReactDOMServer from 'react-dom/server';
import PullToRefresh from 'pulltorefreshjs';

app.initializers.add('capomod/pullrefresh', () => {
  extend(Application.prototype, 'mount', () => {
    PullToRefresh.init({
      mainElement: 'body',
      onRefresh() {
        alert('Jasper')
          window.location.reload();
      },
      iconArrow: ReactDOMServer.renderToString(
          // <FontAwesomeIcon icon={faSyncAlt} />
      ),
      iconRefreshing: ReactDOMServer.renderToString(
          // <FontAwesomeIcon icon={faSyncAlt} spin={true} />
      ),
  });
  });
});
