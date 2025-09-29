<script lang="ts">
    import UpcomingEvents from "$lib/components/UpcomingEvents.svelte";

    let { data } = $props();
</script>

<div class="apply-title">
    <h1>
        View Our Upcoming Events!
    </h1>
</div>


<UpcomingEvents events={data.events} />



<style lang="scss">
    $apply-background-color: #4fbeae;
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