<script lang="ts">
    import EventCard from "$lib/components/EventCard.svelte";

    let { events = [] } = $props();
    console.log(events);
</script>

<div class="events">
    
    <div class="events-content">
        <h1>Upcoming Events</h1>

        {#each events as event }
            <EventCard { event } />
        {/each}
    </div>
</div>


<style>
    .events {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        overflow-y: scroll;
    }

    .events-content {
        margin-top: 1rem;
        background-image: url("$lib/assets/background-72250_1920.jpg");
        background-position: right top;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 15px;
        padding: 1.4rem;
    }

    h1 {
        text-align: center;
        color: #2A2B2A;
        background-color: #f8f4e3;
        padding: 0.75rem 0.5rem;
        border-radius: 10px;
        font-size: 2.5rem;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 300px) {
        h1 {
            font-size: 2rem;
        }
    }



    
</style>