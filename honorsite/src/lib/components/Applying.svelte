<script lang="ts">
    import { onMount } from "svelte";
    import GradeTable from "./GradeTable.svelte";
    import SigmaApp from "$lib/assets/applications/ETAHonorSocietyApplication.pdf"

</script>



<div class="applying-description">
    <div class="flex-section">
        <h1>Applying for Membership</h1>
        <p>To apply for membership, download and complete the application. You may apply for more than one honor society.</p>
        <p>Mail completed applications to: <span style="text-decoration: underline;">Amy Brunsting, 2582 Country Ledge Drive, New Braunfels, TX 78132</span></p>
    </div>
    
    <div class="flex-section">
        <h1>Application Links</h1>
        <div class="application-links">
            <a href={SigmaApp} download="Eta Sigma Alpha Honor Society Application">Eta Sigma Alpha Honor Society</a>
            <a href="https://www.mathhonorsociety.com/apply-renew-senior-upgrade">Mu Eta Sigma Math Honor Society</a>
            <a href="https://etasigmaalpha.com/nhsshs-application/">National Home School Science Honor Society</a>
        </div>

    </div>
</div>

<div class="flex-grid-container">
    <h1>Membership Requirements</h1>
    
    <div class="overflow-table-container">
        <div class="grid-table">
            <GradeTable />
        </div>
    </div>
</div>



<style>
    .flex-grid-container {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow-y: none;
        padding: 2rem;
        background-color: rgb(139, 100, 223);
        
    }

    .flex-section {
        max-width: 45%;

        & h1 {
            text-align: center;
            width: 100%;
        }
    }


    
    .overflow-table-container {
        overflow-y: scroll;
    }

    .applying-description {
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: space-around;
        
        background-color: rgb(74, 196, 155);
        padding: 2rem;


    }


    p {
        font-size: 1.2rem;
        color: #F8F4E3;
        padding: 0;
    }


    
    

    .application-links {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .application-links a {
        text-decoration: none;
        display: flex;
        align-items: center;
        text-align: center;
        width: 100%;
        color: white;
        margin: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 1rem;
        border: 2px #F8F4E3 solid;
        border-radius: 10px;
        transition: background-color 0.3s, color 0.3s;
    }

    @media all and (hover: hover) {
        .application-links a:hover {
            color: #2A2B2A;
            background-color: #F8F4E3;
        }
    }

    h1 {
        color: #F8F4E3;
    }

    .flex-grid-container h1 {
        padding: 1rem 2rem;
        background-color: #2A2B2A;
        border-left: rgb(247, 45, 193) solid 5px;
        border-bottom: rgb(247, 45, 193) solid 5px;
    }


    .grid-table {
        height: 100%;
        min-width: 800px;
    }


    
    @media screen and (max-width: 1030px) {
        .application-links {
            flex-direction: column;
            align-items: center;

            
        }

        .applying-description {
            flex-direction: column;
        }

        .application-links a {
            margin: 10px;
            width: 100%;
        }

        

        .flex-section {
            max-width: 100%;

        }

        .flex-section h1 {
            text-align: left;
        }
    }

    @media screen and (max-width: 865px) {
        .flex-grid-container {
            padding: 1rem;
        }
    }


</style>
