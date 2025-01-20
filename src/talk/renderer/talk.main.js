/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import '../../shared/assets/global.styles.css'
import '@talk/css/icons.css'
import './assets/styles.css'
import './assets/overrides.css'

import 'regenerator-runtime' // TODO: Why isn't it added on bundling
import { setupWebPage } from '../../shared/setupWebPage.js'
import { createTalkDesktopApp } from './desktop.app.ts'

// Initially open the welcome page, if not specified
await setupWebPage({
	routeHash: '#/apps/spreed',
})

await createTalkDesktopApp()
