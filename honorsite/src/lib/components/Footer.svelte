<script lang="ts">
    
    import Fa from 'svelte-fa'
    import { faFacebook } from '@fortawesome/free-brands-svg-icons'
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

</script>

<div class="footer">
    <div>
        <h1>Contact</h1>
        <div class="contact-container">

            <a href="mailto:faith_home_school@yahoo.com" class="full-email"><span class="icon"><Fa icon={faEnvelope} /></span>faith_home_school@yahoo.com</a>
            <a href="mailto:faith_home_school@yahoo.com" class="short-email"><div class="icon" style="text-align: center;"><Fa icon={faEnvelope} /></div>faith_home_school@yahoo.com</a>
            <a href="https://www.facebook.com/groups/1215840325094819/"><span class="icon"><Fa icon={faFacebook} /></span>FAITH Home School Group</a>
            
        </div>
    </div>
   


    <div class="footer-description">
        <h1>Faith Homeschool</h1>
        <h2>New Braunfels, Texas</h2>

        <p>FAITH is a Christian home school support group made up of families from New Braunfels, Canyon Lake, Seguin, San Marcos, and Schertz.</p>
    </div>
</div>

<style>
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #2A2B2A;
        padding: 2rem;

    }

    h1 {
        color: #F8F4E3;
        margin: 0 0 0 0;
        font-size: 1.5rem;
        font-family: 'Times New Roman', Times, serif;
    }


    h2 {
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        padding: 0;
        font-size: 1.1rem;
        margin: 0 0 0.5rem 0;
    }
    
    .icon {
        margin-right: 10px;
    }

    p {
        text-align: right;
        max-width: 400px;
        font-size: 1rem;
        color: #F8F4E3;
        font-family: 'Times New Roman', Times, serif;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #F8F4E3;
        font-size: 1rem;
        padding: 1rem 1.5rem;
        border: 1px solid white;
        border-radius: 10px;
        margin-bottom: 1rem;
        transition: background-color 0.3s, color 0.3s;
        font-family: 'Times New Roman', Times, serif;
        
    }

    .short-email {
        display: none;
    }

    @media screen and (hover: hover) {
        a:hover {
            background-color: #F8F4E3;
            color: #2A2B2A;
        }
    }


    .footer-description {
        display: block;
        text-align: end;
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-top: 1rem;
    }

    @media screen and (max-width: 1030px) {
        .footer {
            flex-direction: column;
        }

        .contact-container {
            align-items: center;
            margin-bottom: 2rem;
        }

        h1, h2, p {
            text-align: center;
        }

        p {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 375px) {
        .full-email {
            display: none;
        }

        .short-email {
            display: block;
        }
    }

    
</style>