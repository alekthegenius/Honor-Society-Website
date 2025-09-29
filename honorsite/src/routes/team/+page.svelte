<script lang="ts">
    import ElishaPortrait from '$lib/assets/headshots/ElishaHeadshot.jpg?enhanced'
</script>

<div class="officer-title">
    <h1>
        Meet Our Officers
    </h1>

</div>

 <div class="officer-container">
    <div class="officer-card">
        <h1>President</h1>
        <h2>Levi Burroughs</h2>
    </div>
    <div class="officer-card">
        <h1>Vice President</h1>
        <enhanced:img class="top-section-img" src={ElishaPortrait} alt="Header Image" />
        <h2>Elisha Lee</h2>
    </div>
    <div class="officer-card">
        <h1>Communications Officer</h1>
        <image></image>
        <h2>Noah Weaver</h2>
    </div>
    <div class="officer-card">
        <h1>Chapter Secretary</h1>
        <image></image>
        <h2>Micah Moss</h2>
    </div>
    <div class="officer-card">
        <h1>Web Master</h1>
        <image></image>
        <h2>Alek Vasek</h2>
    </div>
</div>







<style lang="scss">
    $apply-background-color: rgb(93, 189, 215);
    $primary-color: #2a2b2e;
    $secondary-color: #4f525a;

    
    h1 {
        text-align: center;
        color: $primary-color;
    }

    h2 {
        color: $secondary-color;
    }

    .officer-title {
        background-color: $apply-background-color;
        margin: 0;
        padding: 1rem;
    }

    .officer-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1.5rem 2rem;
    }

    .officer-card {
        text-align: center;
        flex-shrink: 0;
        flex-grow: 1;
        margin: 1rem;
        flex-basis: 300px;
        padding: 1rem 2rem;
        border: solid 1px $primary-color;
        border-radius: 10px;
    }

</style>