<script setup lang="ts">
import { slideToggle } from '@/composables/slideToggle.js';
import { useAppOptionStore } from '@/stores/app-option';
import { RouterLink } from 'vue-router';

const appOption = useAppOptionStore();
const notificationData = [];

function toggleAppSidebarCollapsed() {
	if (!appOption.appSidebarHide) {
		if (appOption.appSidebarCollapsed) {
			appOption.appSidebarToggled = !appOption.appSidebarToggled;
		} else if (appOption.appSidebarToggled) {
			appOption.appSidebarToggled = !appOption.appSidebarToggled;
		}
		appOption.appSidebarCollapsed = !appOption.appSidebarCollapsed;
	}
}
function toggleAppSidebarMobileToggled() {
	if (!(appOption.appTopNav && appOption.appSidebarHide)) {
		appOption.appSidebarMobileToggled = !appOption.appSidebarMobileToggled;
	} else {
		slideToggle(document.querySelector('.app-top-nav'));
		window.scrollTo(0, 0);
	}
}
function toggleAppHeaderSearch(event) {
	event.preventDefault();
	
	appOption.appHeaderSearchToggled = !appOption.appHeaderSearchToggled;
}
function checkForm(event) {
	event.preventDefault();
	this.$router.push({ path: '/extra/search' })
}
</script>
<template>
	<div id="header" class="app-header">
		
		
		<!-- BEGIN brand -->
		<div class="brand">
			<RouterLink to="/" class="brand-logo">
				<span class="brand-img">
					<span class="brand-img-text text-theme">S</span>
				</span>
				<span class="brand-text">Skjord</span>
				
			</RouterLink>
		</div>

	
		
	</div>
</template>


