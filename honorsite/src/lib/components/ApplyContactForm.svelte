<script lang="ts">

</script>

<div class="apply-form">
    <h2>Questions? Feel Free to Contact Us!</h2>
    <form action="mailto:faith_home_school@yahoo.com" method="GET" enctype="text/plain">
        Name:<br>
        <input type="text" name="subject" placeholder="John Doe"><br>
        Message:<br>
        <textarea name="body" placeholder="Hey there! I just had a question regarding..."></textarea><br>
        <input type="submit" value="Send">
    </form>
</div>

<style lang="scss">
    .apply-form {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    h2 {
        font-size: 2rem;
    }

    form {
        font-size: 1.5rem;
    }
    input, textarea {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.25rem;
    }
</style>