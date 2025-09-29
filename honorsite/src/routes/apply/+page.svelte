<script lang="ts">
    import Applying from "$lib/components/Applying.svelte";
    import ApplyContactForm from "$lib/components/ApplyContactForm.svelte";

</script>

<div class="apply-title">
    <h1>
        Apply Now!
    </h1>
</div>

<ApplyContactForm />

<Applying />

<style lang="scss">
    $apply-background-color: #FF8F66;
    $text-color: #F8F4E3;

    
    h1 {
        text-align: center;
        color: $text-color;
    }

    .apply-title {
        background-color: $apply-background-color;
        margin: 0;
        padding: 1rem;
    }
</style>