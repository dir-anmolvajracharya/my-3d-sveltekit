<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Shapes from './Shapes.svelte';
	import SceneCamera from '$lib/scene/SceneCamera.svelte';
	import SceneCar from '$lib/scene/SceneCar.svelte';

	export let variation: 'default' | 'withCamera' | 'withCar' = 'default';
</script>

<Canvas shadows>
	{#if variation === 'default'}
		<Shapes />
	{:else if variation === 'withCamera'}
		<SceneCamera />
	{:else if variation === 'withCar'}
		<SceneCar />
	{/if}
</Canvas>
