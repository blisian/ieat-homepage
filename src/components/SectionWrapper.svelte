<script>
	let { children } = $props();
</script>

<section class={"flex flex-col"}>
	<div class="flex flex-col flex-1 mx-auto w-full">
		{@render children()}
	</div>
</section>