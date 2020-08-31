function getTabbableElementsQuery() {
	return [
		"a[href]:not([inert])",
		"area[href]:not([inert])",
		"input:not([disabled]):not([inert])",
		"select:not([disabled]):not([inert])",
		"textarea:not([disabled]):not([inert])",
		"button:not([disabled]):not([inert])",
		"iframe:not([inert])",
		"audio:not([inert])",
		"video:not([inert])",
		"[contenteditable]:not([inert])",
		"[tabindex]:not([inert])",
	].join(",");
}

export default {
	getTabbableElementsQuery
}