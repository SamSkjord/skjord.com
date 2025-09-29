<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<header id="header" class="app-header">
		<div class="brand">
			<RouterLink to="/" class="brand-logo">
				<span class="brand-img">
					<span class="brand-img-text text-theme">S</span>
				</span>
				<span class="brand-text">Skjord</span>
			</RouterLink>
		</div>
	</header>
</template>
