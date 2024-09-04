<script lang="ts">
	import { T } from '@threlte/core';
	import {
		Environment,
		OrbitControls
		// Sky,
	} from '@threlte/extras';
	// import { MeshStandardMaterial, SphereGeometry } from 'three';
	// import FreeMercHovercar from '$lib/models/free_merc_hovercar.svelte';
	import Fujifilm from '$lib/models/fujifilm.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[10, 1, 0]} zoom={2} fov={50}>
	<OrbitControls autoRotate enableDamping autoRotateSpeed={0.3} />
</T.PerspectiveCamera>
<!-- <Sky /> -->

<!-- <T.Mesh position={[0, 1, 0]}>
	<T.SphereGeometry />
	<T.MeshStandardMaterial color="gray" roughness={0} metalness={2} />
</T.Mesh> -->

<!-- <T.GridHelper /> -->

<Fujifilm position={[0, 1, 0]} scale={20} />
<!-- <FreeMercHovercar position={[0, 1, 0]} scale={2} /> -->

<Environment path="/" format="hdr" isBackground={false} files="smallroom.hdr" />
