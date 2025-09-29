import { defineStore } from "pinia";

export const useAppSidebarMenuStore = defineStore("appSidebarMenu", () => {
	return [{
		'text': '',
		'is_header': true
	}, {
		'url': '/',
		'icon': '',
		'text': ''
	}]
});