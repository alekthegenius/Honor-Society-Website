<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error-container">
    <h1>{page.status} {page.error ? page.error.message : ''}</h1>
    <h2 style="font-size: 1rem">
        Hmm. Well that didn't work. Send me a message, and I'll fix the issue.
    </h2>

    <a href="/">Return Home</a>
</div>

<style lang="scss">
    .error-container {
        display: flexbox;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
</style>



