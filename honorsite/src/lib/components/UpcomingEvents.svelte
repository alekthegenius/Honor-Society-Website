<script lang="ts">
    import EventBackground from "$lib/assets/background-72250_1920.jpg";
    import EventCard from "$lib/components/EventCard.svelte";

    let { events = [] } = $props();
    console.log(events);
</script>

<div class="events">
    
    <div class="events-content" style="background-image: url({EventBackground});">

        {#each events as event }
            <EventCard event={event} clickable={false}  />
        {/each}
    </div>
</div>


<style lang="scss">
    .events {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        overflow-y: scroll;
    }

    .events-content {
        background-position: right top;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 1.4rem;
    }



    @media screen and (max-width: 300px) {
        h1 {
            font-size: 2rem;
        }
    }



    
</style>