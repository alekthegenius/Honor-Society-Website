<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error-container">
    <h1>{page.status} {page.error ? page.error.message : ''}</h1>
    <h2>
        Hmm... Well that didn't work. Send me a message and I'll fix the issue.
    </h2>

    <a href="/">Return Home</a>
</div>

<style lang="scss">
    .error-container {
        background-color: rgb(255, 63, 63);
        display: flexbox;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 1rem;
    }

    h1, h2, a {
        color: white;
    }

    h2 {
        font-size: 1.25rem;
    }

    a {
        font-size: 1.25rem;
    }
</style>



