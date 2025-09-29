<script lang="ts">
    import ElishaPortrait from '$lib/assets/headshots/ElishaHeadshot.jpg?enhanced'
    import NoahPortrait from '$lib/assets/headshots/NoahHeadshot.jpg?enhanced'
    import AlekPortrait from '$lib/assets/headshots/AlekHeadshot.jpg?enhanced'
</script>

<div class="officer-title">
    <h1>
        Our Leadership Team
    </h1>

</div>

 <div class="officer-container">
    <div class="officer-card">
        <h1>President</h1>
        <h2>Levi Burroughs</h2>
    </div>
    <div class="officer-card">
        <h1>Vice President</h1>
        <enhanced:img class="officer-image" src={ElishaPortrait} alt="Elisha Headshot Image" />
        <h2>Elisha Lee</h2>
    </div>
    <div class="officer-card">
        <h1>Communications Officer</h1>
        <enhanced:img class="officer-image" src={NoahPortrait} alt="Noah Headshot Image" />
        <h2>Noah Weaver</h2>
    </div>
    <div class="officer-card">
        <h1>Chapter Secretary</h1>

        <h2>Micah Moss</h2>
    </div>
    <div class="officer-card">
        <h1>Photographer</h1>
        <h2>Mary Warnick</h2>
    </div>
    <div class="officer-card">
        <h1>Web Master</h1>
        <enhanced:img class="officer-image" src={AlekPortrait} alt="Alek Headshot Image" />
        <h2>Alek Vasek</h2>
    </div>
    

</div>







<style lang="scss">
    $header-background-color: #F8F4E3;
    $primary-color: #2A2B2A;
    $secondary-color: #4f525a;

    
    h1 {
        text-align: center;
        color: $primary-color;
    }

    h2 {
        color: $secondary-color;
    }

    .officer-title {
        background-color: $header-background-color;
        margin: 0;
        padding: 1rem;
    }

    .officer-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1.5rem 2rem;
        background-color: #FF8F66;
    }

    .officer-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex-shrink: 0;
        flex-grow: 1;
        margin: 1rem;
        flex-basis: 300px;
        padding: 1rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #F8F4E3;

        h1 {
            color: $primary-color;
            font-style: italic;
        }
    }

    .officer-image {
        width: 100%;
        height: auto;
    }

</style>