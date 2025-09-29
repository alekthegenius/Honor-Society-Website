<div style="padding: 2rem; background-color: #F8F4E3;">
    <h1>We Offer 3 Unique Honor Societies</h1>
    <div class="honor-type-description">
        <a href="https://etasigmaalpha.com/" class="column">
            <h2>Eta Sigma Alpha</h2>
            <p>For excellence in overall scholarship</p>
        </a>

        <a href="https://www.mathhonorsociety.com/" class="column"> 
            <h2>Mu Eta Sigma</h2>
            <p>For excellence in math</p>
        </a>

        <a href="https://nhsshs.org/" class="column">
            <h2>National Home School Science</h2>
            <p>For excellence in science</p>
        </a>
    </div>
</div>


<style lang="scss">
    h1 {
        display: flex;
        justify-self: center;
        text-align: center;
        color: #F8F4E3;
        padding: 1rem 2rem;
        background-color: #2A2B2A;
        border-left: #8e52d2 solid 5px;
        border-bottom: #8e52d2 solid 5px;
        margin-bottom: 2rem;
    }

    h2 {
        color: #F8F4E3;

    }

    p {
        color: #F8F4E3;
    }

    .honor-type-description {
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-direction: row;

        
    }

    .column {
        padding: 0rem 0.5rem;
        border-radius: 5px;
        background-color: #8e52d2;
        width: 25%;
        transition: background-color 0.5s;
        text-decoration: none;
    }

    @media all and (hover: hover) {
        .column:hover {
            background-color: #ff80f0;
            animation: rubberBand; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 1s; /* don't forget to set a duration! */
        }
    }

    @media screen and (max-width: 1030px){
        .honor-type-description {
            flex-direction: column;
        }
        .column {
            width: 100%;
            margin-bottom: 1rem;
        }

    }

</style>