/*
 * @copyright Copyright (c) 2022 Grigorii Shartsev <grigorii.shartsev@nextcloud.com>
 *
 * @author Grigorii Shartsev <grigorii.shartsev@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const {
	contextBridge,
	ipcRenderer,
} = require('electron')

/**
 * @typedef TALK_DESKTOP
 * @property {Function} login - login with web-view
 * @property {Function} logout - logout and return to accounts
 * @property {typeof import('./app/webRequestInterceptor').enableWebRequestInterceptor} enableWebRequestInterceptor
 * @property {typeof import('./app/webRequestInterceptor').disableWebRequestInterceptor} disableWebRequestInterceptor
 */

/** @type {TALK_DESKTOP} */
const TALK_DESKTOP = {
	enableWebRequestInterceptor: (...args) => ipcRenderer.invoke('app:enableWebRequestInterceptor', ...args),
	disableWebRequestInterceptor: (...args) => ipcRenderer.invoke('app:disableWebRequestInterceptor', ...args),
	login: (server) => ipcRenderer.invoke('accounts:openLoginView', server),
	logout: () => ipcRenderer.invoke('accounts:logout'),
}

// Set global window.TALK_DESKTOP
contextBridge.exposeInMainWorld('TALK_DESKTOP', TALK_DESKTOP)
