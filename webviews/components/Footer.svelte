<script>
	import { back } from "../utils/history";
</script>

<nav>
	<button on:click|preventDefault={back}>Back</button>
</nav>

<style>
	nav {
		margin-block-start: auto;
	}
</style>
