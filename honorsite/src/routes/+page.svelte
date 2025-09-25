<script lang="ts">
    import Events from "$lib/components/HomepageEvents.svelte";

	import headerImage from '$lib/assets/header-background-image.jpg?enhanced';

    import Applying from "$lib/components/Applying.svelte";

    export let data;
    const { events } = data;

    let shortenedEvents = events.slice(0, 2);
</script>



<div class="top-section">
	<enhanced:img class="top-section-img" src="{headerImage}" alt="Header Image" />
	<div class="top-section-text">
		<div class="top-section-first-section">
			<h1 class="regular-title">Faith Honor Society</h1>
            <h1 class="minimized-title">FHS</h1>
			<p>Recognizing Achievement, Encouraging Scholarship, Empowering Leaders</p>
		</div>

		<div class="top-section-second-section">
			<a href="https://www.faith-homeschool.com/honor.htm" class="top-section-join-button">Apply Now</a>
            <a href="https://www.faith-homeschool.com/honor.htm" class="top-section-join-button">View Group Events</a>
            <a href="https://www.faith-homeschool.com/honor.htm" class="top-section-join-button">Meet the Officers</a>
		</div>
	</div>

    
</div>

<div class="bible-section">
    <p>By wisdom a house is built, and by understanding it is established; by knowledge the rooms are filled with all precious and pleasant riches.</p>
    <span> ~ Proverbs 24:3-4</span>
</div>

<div class="double-column">
    <div class="aside">
        <h1>National Homeschool Honor Society</h1>
        <p>
            Eta Sigma Alpha is the national home school honor society. It recognizes achievements, encourages scholarship, and empowers leaders among the homeschool community. From volunteer opportunities, to elevating your academic resume, Eta Sigma Alpha is the place for you to nurture your talents and celebrate each others accomplishments in fellowship.
        </p>
    </div>
    
    <div class="aside">
        <Events events={ shortenedEvents }/>
    </div>

</div>

<Applying />

<style>

    .double-column {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        padding: 2rem;
        padding-bottom: 2rem;
        background-color: #FF8F66;

        & h1 {
            color: white;
            font-family: 'Times New Roman', Times, serif;
            font-size: 2.5rem;
        }
        
        & p {
            color: white;
            font-family: 'Times New Roman', Times, serif;
            font-size: 1.2rem;
        }
    }

    .aside {
        height: 100%;
        max-width: 45%;
        align-items: center;
    }

    
    .top-section {
		position: relative;
        margin-top: -5rem;
		width: 100%;
		height: 800px;
		z-index: 1;
	}
	.top-section-img {

		width: 100%;
		height: 100%;
		object-fit: cover;

	}

	.top-section-text {
		position: absolute;
		top: 5rem;
		left: 0;
		height: calc(100% - 5rem);
		width: 100%;
		display: flex;
		justify-content: start;
		align-items: center;
		flex-shrink: 3;
        
	}

	.top-section-text h1 {
		color: #d18924;
		text-align: left;
        width: 100%;
		font-family: 'Times New Roman', Times, serif;
        line-height: 3rem;
		font-weight: bold;
		font-size: 3.5rem;
		margin: 0 0 1rem 0;
		text-wrap-mode: wrap;

	}


	.top-section-text p {
		color: #5a5959;
		text-align: left;
        width: 100%;
		font-family: 'Times New Roman', Times, serif;
		font-weight: normal;
		font-size: 1.8rem;
		text-wrap-mode: wrap;
		margin: 0.5rem 0;
        line-height: 2rem;
	}


    .top-section-second-section a {
        color: #F8F4E3;
        text-decoration: none;
        font-size: 2rem;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
        margin: 1rem 0;
        width: 60%;
        border: #F8F4E3 2px solid;
        border-radius: 10px;
        transition: background-color 0.3s, color 0.3s, transform 0.3s;

    }

    @media all and (hover: hover) {
        .top-section-second-section a:hover {
            background-color: #F8F4E3;
            color: #5F9EA0;
            transform: scale(1.1);
        }
    }

	.top-section-first-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
        padding: 1.5rem;
        box-sizing: border-box;
		background-color: #ffffffc9;

	}

	.top-section-second-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 100%;
        padding: 1rem;
        box-sizing: border-box;
		background-color: #ff8f66a9;
	}

    .bible-section {
        width: 100%;
        background-color: #2a2b2e;
        color: #F8F4E3;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.2rem;
        padding: 1.8rem 1rem;
        box-sizing: border-box;

        & span {
            font-style: italic;
            margin: 0;
        }

        & p {
            margin: 0;
            padding-bottom: 1rem;
        }
    }

    .minimized-title {
        display: none;
    }

    


    

    @media screen and (max-width: 1030px) {

		.top-section-text {
			justify-content: center;
			text-align: center;
			flex-direction: column;
		}

		.top-section-first-section {
			width: 100%;
			height: 50%;
		}

		.top-section-second-section {
			width: 100%;
			height: 50%;
		}

		.top-section-text h1 {
			font-size: 3rem;
            text-align: center;
		}

		.top-section-text p {
			font-size: 1.5rem;
            text-align: center;
		}

        .top-section-second-section a {
            font-size: 1.6rem;
            width: 80%;
            margin: .75rem 0;
            padding: 1rem 0.75rem;
        }


        .double-column {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .aside {
            max-width: 70%;
            
        }

        .aside p {
            margin-bottom: 2rem;
        }

        
	}

    @media screen and (max-width: 700px) {

        .aside {
            max-width: 100%;            
        }
        
    }

    @media screen and (max-width: 315px) {
        .regular-title {
            display: none;
            
        }

        .minimized-title {
            display: block;
        }    


        
    }


</style>