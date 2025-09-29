<script lang="ts">
    import EventCard from "$lib/components/EventCard.svelte";

    let { events = [] } = $props();
    console.log(events);
</script>

<div class="events">
    
    <div class="events-content">

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
        background-image: url("$lib/assets/background-72250_1920.jpg");
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