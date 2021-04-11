<script>
	import { push } from "../utils/history";
</script>

<input name="username" placeholder="Username" />
<input type="password" name="password" placeholder="Password" />
<button on:click|preventDefault={() => push({ page: "home" })}>Login</button>
