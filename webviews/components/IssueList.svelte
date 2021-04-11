<script>
	import IssueCard from "./IssueCard.svelte";

	export let issues = [];
</script>

<div class="list">
	{#each issues as issue}
		<IssueCard {issue} />
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-flow: column;
	}
</style>
