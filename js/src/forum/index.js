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
import PullToRefresh from 'pulltorefreshjs';

app.initializers.add('capomod/pullrefresh', () => {
  PullToRefresh.init({
    mainElement: 'body',
    triggerElement: 'body',
    onRefresh() {
      window.location.reload();
    },
    instructionsPullToRefresh: '<span style="color: var(--control-color);font-size: 13px;">下拉将要刷新</span>',
    instructionsReleaseToRefresh: '<span style="color: var(--control-color);font-size: 13px;">松开将会刷新</span>',
    instructionsRefreshing: '<span style="color: var(--control-color);font-size: 13px;">正在刷新</span>',
    iconArrow: '<i class="fa-solid fa-arrow-up" style="color: var(--control-color);font-size: 13px;"></i>',
    iconRefreshing: '<i class="fa-solid fa-spinner" style="color: var(--control-color);font-size: 13px;"></i>',
    distThreshold: 95,
    distMax: 115,
    distReload: 100,
    distIgnore: 0,
  });
});
