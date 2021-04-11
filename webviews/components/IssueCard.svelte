<script>
	import { project } from "../stores/project";

	export let issue;
</script>

<div class="card">
	<div class="header">
		<div class="status" style="background: {issue.status.color}" />
		<span>{issue.title}</span>
	</div>

	<div class="details">
		<span class="id">
			{$project.short_name}-{issue.ownId}
		</span>

		<div class="user">
			<span>{issue.reporter.username}</span>
			<img
				src={issue.reporter.profile.avatar}
				alt={issue.reporter.username}
				height="20px"
				width="20px"
			/>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-flow: column;
		padding: 0.5rem 0.5rem;
		cursor: pointer;
	}

	.card:hover {
		background: var(--vscode-list-hoverBackground);
	}

	.card .header {
		display: flex;
		flex-flow: row;
	}

	.card .header .status {
		height: 10px;
		width: 10px;
		border-radius: 10px;
		margin: auto 0;
		margin-right: 0.5rem;
	}

	.card .details {
		display: flex;
		flex-flow: row;
		margin-top: 0.5rem;
	}

	.card .details .id {
		margin-right: 0.2rem;
	}

	.card .details .user {
		display: flex;
		margin-inline-start: auto;
	}

	.card .details .user span {
		margin: auto 0;
		margin-right: 0.2rem;
		font-size: 10px;
	}

	.card .details .user img {
		border-radius: 40px;
		margin: auto 0;
	}
</style>
