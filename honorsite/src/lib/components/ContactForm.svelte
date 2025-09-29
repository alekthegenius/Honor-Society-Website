<script lang="ts">
    let to = "faith_home_school@yahoo.com";
    let subject = $state("");
    let body = $state("");

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        const encSubj = encodeURIComponent(subject);
        const encBody = encodeURIComponent(body);

        // Make sure you also encode newlines, etc., depending on what you want
        // e.g. replace "\n" with "%0A" or leave it to encodeURIComponent

        const mailtoLink = `mailto:${to}?subject=${encSubj}&body=${encBody}`;
        window.location.href = mailtoLink;
    }

    
</script>

<div class="apply-form">
    <h2>Questions? Feel Free to Contact Us!</h2>
    <form onsubmit={handleSubmit} action="mailto:{to}" method="GET" enctype="text/plain">
        <span>Name</span>
        <input type="text" name="subject" placeholder="John Doe" bind:value={subject}><br>
        <span>Message</span>
        <textarea name="body" placeholder="Hey there! I just had a question regarding..." bind:value={body}></textarea><br>
        <input class="submit-button" type="submit" value="Send">
    </form>
</div>

<div class="horizontal-divider"></div>

<style lang="scss">
    $apply-primary-color: #2A2B2A;
    $text-secondary-color: #F8F4E3;

    .apply-form {
        display: flex;
        width: 100%;
        background-color: $apply-primary-color;
        color: #F8F4E3;
        flex-direction: column;
        padding: 0rem 2rem 2rem 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    form {
        font-size: 1.5rem;


    }

    input, textarea {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.25rem;
        background-color: $apply-primary-color;
        color: #F8F4E3;
        border: none;
        padding: 1rem;
        width: 100%;
        transition: background-color 0.5s, color 0.5s;
        margin-bottom: 25px;
        margin-top: 15px;
    }



    input:focus, textarea:focus {
        outline: none;
    }

    
    textarea {
        resize: none;
        border: #F8F4E3 solid 1px;
    }

    input::placeholder, textarea::placeholder {
        color: color-mix(in srgb, $text-secondary-color 30%, transparent 70%);
        font-style: italic;
    }

    input {
        border: #F8F4E3 solid 1px;
    }

    .submit-button {
        text-align: left;
        margin-top: 0px;
        margin-bottom: 10px;
    }

    span {
        display: block;
        padding: 0;
        margin: 0;
    }

    .horizontal-divider {
        width: 100%;
        height: 1px;
        background-color: #F8F4E3;
    }

    @media all and (hover: hover) {


        input:hover, textarea:hover {
            background-color: #f8f4e34a;
        }

        .submit-button:hover {
            background-color: #F8F4E3;
            color: #2A2B2A;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 1035px) {
        .apply-form {
            padding: 0rem 1rem 2rem 1em;
        }
    }

</style>