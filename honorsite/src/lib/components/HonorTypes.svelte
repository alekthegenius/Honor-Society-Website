<h1>View the Honor Societies We Offer</h1>
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

<style>
    h1 {
        text-align: center;
        color: #8e52d2;
        padding: 1rem;
    }

    h2 {
        color: white;

    }

    p {
        color: white;
    }

    .honor-type-description {
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-direction: row;
        padding: 1.5rem;

        
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