<script lang="ts">
    let { event = {} } = $props();

     let datetime = new Date(event.datetime);

    // Extract formatted date and time
    let date = datetime.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    let time = datetime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

</script>

<div class="events">
    
    <div class="events-content">
        <h1>{event.title}</h1>

        <div class="event-subtitle">
            <h2>{date}</h2>
            <h2>{time}</h2>
        </div>

        <p>{event.body}</p>
        <div class="event-location">
            <h3>{event.location}</h3>
        </div>

        
    </div>
</div>


<style lang="scss">
    .events {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        
        &:hover {
            cursor: pointer;
        }
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

    


    p {
        max-width: 100%;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
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