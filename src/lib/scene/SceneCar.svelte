<script lang="ts">
	import { T } from '@threlte/core';
	import { Environment, OrbitControls } from '@threlte/extras';
	import FreeMercHovercar from '$lib/models/free_merc_hovercar.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[10, 1, 0]} zoom={2} fov={50}>
	<OrbitControls autoRotate enableDamping autoRotateSpeed={0.3} enableZoom={false} />
</T.PerspectiveCamera>
<FreeMercHovercar position={[0, 1, 0]} scale={2} />

<Environment path="/hdr/" format="hdr" isBackground={false} files="metro_noord_1k.hdr" />
<!-- <Environment path="/" format="hdr" isBackground={false} files="smallroom.hdr" /> -->
