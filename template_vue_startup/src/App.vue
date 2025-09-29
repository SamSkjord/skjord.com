<script setup lang="ts">
import { onMounted } from 'vue';
import AppHeader from '@/components/app/Header.vue';

onMounted(() => {
	document.body.classList.add('app-init');
});
</script>

<template>
	<div class="app">
		<app-header />
		<main class="app-content">
			<router-view />
		</main>
	</div>
</template>
