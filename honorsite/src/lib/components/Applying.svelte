<script lang="ts">
    import GradeTable from "./GradeTable.svelte";
    import SigmaApp from "$lib/assets/applications/ETAHonorSocietyApplication.pdf"
</script>



<div class="applying-description">
    <h1>Applying for Membership</h1>
    <p>To apply for membership, download and complete the application. You may apply for more than one honor society.<br>
    Mail completed applications to: Amy Brunsting, 2582 Country Ledge Drive, New Braunfels, TX 78132</p>

    <div class="application-links">
        <a href={SigmaApp} download="Eta Sigma Alpha Honor Society Application">Eta Sigma Alpha Application</a>
        <a href={SigmaApp} download="Eta Sigma Alpha Honor Society Application">Eta Sigma Alpha Application</a>
        <a href={SigmaApp} download="Eta Sigma Alpha Honor Society Application">Eta Sigma Alpha Application</a>
    </div>
</div>

<div class="flex-grid-container">
    <h1>Membership Requirements</h1>
    <div class="grid-table">
        <GradeTable />
    </div>
</div>



<style>
    .flex-grid-container {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow-y: scroll;
        padding: 2rem;

        background-color: rgb(139, 100, 223);
    }

    .applying-description {
        background-color: rgb(74, 196, 155);
        margin: 0;
        padding: 2rem;

        & p {
            font-size: 1.2rem;
            line-height: 2rem;
            color: white;
        }

    }

    .application-links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1rem;
    }

    .application-links a {
        text-decoration: none;
        color: #2A2B2A;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 1rem;
        border: 2px #2A2B2A solid;
        border-radius: 10px;
        transition: background-color 0.3s, color 0.3s;

    }

    @media all and (hover: hover) {
        .application-links a:hover {
            color: white;
            background-color: #2A2B2A;
        }
    }

    h1 {
        color: white;
    }


    .grid-table {
        height: 100%;
        min-width: 600px;
    }

    @media screen and (max-width: 800px) {
        .application-links {
            flex-direction: column;
            height: 250px;
        }
    }

</style>
