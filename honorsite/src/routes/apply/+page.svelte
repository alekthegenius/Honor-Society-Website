<script lang="ts">
    import Applying from "$lib/components/Applying.svelte";

</script>

<div class="apply-title">
    <h1>
        Apply to Eta Sigma Alpha!
    </h1>
</div>

<div class="contact-form">
    <form>
        
    </form>
</div>

<Applying />

<style>
    :root {
        --apply-background-color: #FF8F66;
        --text-color: #F8F4E3;
    }
    h1 {
        text-align: center;
        color: var(--text-color);
    }

    .apply-title {
        background-color: var(--apply-background-color);
        margin: 0;
        padding: 1rem;
    }
</style>