<script lang="ts">
    let { event = {}, clickable=true } = $props();
    let datetime = new Date(event.datetime);

    let date: String = $state("");
    let time: String = $state("");

    let noDate: Boolean = $state(false);

    if (isNaN(datetime.getTime())) {
        date = event.datetime;
        time = ""
        noDate = true;
    } else {
        // Extract formatted date and time
        noDate = false;
        date = datetime.toLocaleDateString([], {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        time = datetime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

   



</script>

{#if clickable}
<a href="/events" class="events" >
    
    <div class={noDate ? "events-content nodate" : "events-content"}>
        <h1>{event.title}</h1>

        <div class="event-subtitle">
            {#if noDate}
            <h2 style="text-align: center; width: 100%;">{date}</h2>
            {:else}
            <h2>{date}</h2>
            <h2>{time}</h2>
            {/if}
        </div>

        <p>{event.body}</p>
        <div class="event-location">
            <h3>{event.location}</h3>
        </div>

        
    </div>
</a>
{:else}
<div class="events" >
    
    <div class={noDate ? "events-content nodate" : "events-content"}>
        <h1>{event.title}</h1>

        <div class="event-subtitle">
            {#if noDate}
            <h2 style="text-align: center; width: 100%;">{date}</h2>
            {:else}
            <h2>{date}</h2>
            <h2>{time}</h2>
            {/if}
        </div>

        <p>{event.body}</p>
        <div class="event-location">
            <h3>{event.location}</h3>
        </div>

        
    </div>
</div>
{/if}



<style lang="scss">
    .events {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }

    

    .events-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 1rem;
        background-color: #e5446c;
        border-radius: 10px;
        padding: 1.5rem 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .events-content.nodate {
        background-color: #e46a42;
    }

    .event-subtitle {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


    h1 {
        text-align: center;
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        margin: 0;
        margin-bottom: .5rem;
    }

    h2 {
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        margin: 0;
        margin-top: .5rem;
    }

    h3 {
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        margin: 0;
        margin-top: .5rem;
    }

    .event-location {
        text-align: center;
    }

    


    a p {
        max-width: 100%;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 1.5rem;
    }

    div p {
        max-width: 100%;
        text-align: center;
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        margin-top: 1.5rem;
    }



    @media screen and (max-width: 450px) {
        .event-subtitle {
            flex-direction: column;
        }

        .event-subtitle {
            text-align: center;
        }


    }
    
</style>