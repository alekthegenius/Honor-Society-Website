<div class="officer-section">
    <h1 class="title-header">Our Leaders</h1>

    <div class="officer-card-section">
        <div class="officer-card">
            <h1>President</h1>
            <h2>Levi Burroughs</h2>
        </div>

        <div class="officer-card">
            <h1>Vice President</h1>
            <h2>Elisha Lee</h2>
        </div>

        <div class="officer-card">
            <h1>Communications <br> Officer</h1>
            <h2>Noah Weaver</h2>
        </div>
    </div>

    <a href="/team">Meet the Team</a>
</div>



<style lang="scss">
    $bg-color:rgb(93, 189, 215);
    $secondary-color: #F8F4E3;
    $header-style: rgb(76, 250, 183) solid 5px;
    
    .officer-section {
        background-color: $bg-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: #F8F4E3;
        padding: 2rem;
    }

    .officer-card-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        
    }

    
    .title-header {
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        background-color: #2A2B2A;
        border-left: $header-style;
        border-bottom: $header-style;
    }

    h1 {
        margin: 0 0 1rem 0;
    }

    h2 {
        margin: 0;
    }


    .officer-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 25%;
        padding: 0.5rem;
        border: 1px solid $secondary-color;
        border-radius: 5px;
        height: 150px;
        margin-bottom: 2rem;

        transition: background-color 0.25s, color 0.25s, border 0.25s;
    }

    a {
        text-decoration: none;
        padding: 0.5rem 1rem;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.2rem;
        color: $secondary-color;
        background-color: $bg-color;
        border-radius: 10px;
        border: 1px solid $secondary-color;

        transition: background-color 0.25s, color 0.25s, border 0.25s;

        
    }

    @media screen and (hover: hover) {
        .officer-card:hover {
            background-color: $secondary-color;
            color: $bg-color;
            border: 1px solid $bg-color;
        }

        a:hover {
            background-color: $secondary-color;
            color: $bg-color;
            border: 1px solid $bg-color;
        }
    }

    @media screen and (max-width: 1030px) {
        .officer-card-section {
            flex-direction: column;
            align-items: center;
        }
        .officer-card {
            width: 100%;

        }

    }
</style>

