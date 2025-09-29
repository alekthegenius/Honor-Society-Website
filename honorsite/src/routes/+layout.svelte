<script lang="ts">
	import favicon from '$lib/assets/favicon/favicon.ico'
	
	import Footer from '$lib/components/Footer.svelte';

	import { MediaQuery } from 'svelte/reactivity';

	import { slide } from 'svelte/transition';

	import logo from '$lib/assets/logo.png?enhanced';

	import { Menu, Mouse } from '@lucide/svelte';


	let { children } = $props();

	let dropdownOpen = $state(false);

	let dropdownHovered = $state(false);

	let media = new MediaQuery('(max-width: 1030px)');
	let isMobile = $derived(media.current);

	let touchMedia = new MediaQuery('(hover: none)');
	let isTouch = $derived(touchMedia.current);


	function toggleDropdown(event: MouseEvent | null = null) {
		if (event) {
			event.stopPropagation();
		}
		dropdownOpen = !dropdownOpen;
	}

	function closeDropdown() {
		dropdownOpen = false;
		dropdownHovered = false;
	}


	
</script>


<svelte:head>
	<title>Faith Honor Society</title>
	<link rel="icon" type="image/x-icon" href={favicon}>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Faith Honor Society is a national homeschool honor society that recognizes achievements, encourages scholarship, and empowers leaders among the homeschool community.">
	<meta name="theme-color" content="#2a2b2a">

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
</svelte:head>

<header style="box-shadow: {dropdownOpen ? 'none' : '0 5px 5px rgba(0, 0, 0, 0.326)'};">
	<div class="header-inner">
		<a href="/" class="header-logo" style="text-decoration: none;">
			<enhanced:img class="logo" src="{logo}" alt="Faith Honor Society Logo" />
			<h1 class="regular-title">Faith Honor Society</h1>
			<h1 class="minimized-title">FHS</h1>
		</a>

		<div class="desktop-urls">
			<a href="https://www.faith-homeschool.com/index.htm">Home</a>
			<a href="https://www.faith-homeschool.com/join.htm">Join FAITH</a>
			<a href="https://www.faith-homeschool.com/signup2.htm">Extracurriculars</a>
			<a href="https://www.faith-homeschool.com/tascs.htm">Teen Volunteers</a>
			<a href="https://www.faith-homeschool.com/linksnew.htm">Helpful Links</a>
		</div>
		
		{#if isMobile || isTouch}
		<button class="dropdown-menu-button"
			onclick={toggleDropdown}
			aria-label="Toggle Menu">
			<Menu />
		</button>
		{:else}
		<button class={dropdownOpen == false ? "dropdown-menu-button" : "dropdown-menu-button active"}
			onclick={toggleDropdown}
			onmouseenter={() => { dropdownHovered = true; }}
			onmouseleave={() => { dropdownHovered = false; }}
			aria-label="Toggle Menu">
			<Menu />
		</button>
		{/if}

	</div>

	{#if !isMobile && (dropdownHovered || dropdownOpen)}
		<div transition:slide class="dropdown-menu-container" style="position: relative; z-index: 3; display: block;" role="menu" tabindex="0" onmouseenter={() => { dropdownHovered = true; }} onmouseleave={() => { dropdownHovered = false; }}>
			<div class="dropdown-menu">
				<a class="dropdown-menu-item" href="/" onclick={closeDropdown}>Honor Society Home</a>
				<a class="dropdown-menu-item" href="/apply" onclick={closeDropdown}>Apply Now</a>
				<a class="dropdown-menu-item" href="/events" onclick={closeDropdown}>View Events</a>
				<a class="dropdown-menu-item" href="/team" onclick={closeDropdown}>Meet The Team</a>
				<a class="dropdown-menu-item" href="/photos" onclick={closeDropdown}>See Our Favorite Pics</a>

			</div>
		</div>
	{:else if isMobile && dropdownOpen}
		<div transition:slide class="dropdown-menu-container" style="position: relative; z-index: 3; display: block;">
			<div class="dropdown-menu">

				<a class="dropdown-menu-item" href="/" onclick={closeDropdown}>Honor Society Home</a>
				<a class="dropdown-menu-item" href="/apply" onclick={closeDropdown}>Apply Now</a>
				<a class="dropdown-menu-item" href="/events" onclick={closeDropdown}>View Events</a>
				<a class="dropdown-menu-item" href="/team" onclick={closeDropdown}>Meet The Team</a>
				<a class="dropdown-menu-item" href="/photos" onclick={closeDropdown}>See Our Favorite Pics</a>
				<div style="height: 2px; background-color: rgba(255, 255, 255, 0.5);"></div>
				<a class="dropdown-menu-item" href="https://www.faith-homeschool.com/index.htm" onclick={closeDropdown}>FAITH Home</a>
				<a class="dropdown-menu-item" href="https://www.faith-homeschool.com/join.htm" onclick={closeDropdown}>Join FAITH</a>
				<a class="dropdown-menu-item" href="https://www.faith-homeschool.com/signup2.htm" onclick={closeDropdown}>Extracurriculars</a>
				<a class="dropdown-menu-item" href="https://www.faith-homeschool.com/tascs.htm" onclick={closeDropdown}>Teen Volunteers</a>
				<a class="dropdown-menu-item" href="https://www.faith-homeschool.com/linksnew.htm" onclick={closeDropdown}>Helpful Links</a>
				
			</div>
		</div>
	{/if}
	
</header>

{@render children?.()}

<Footer />


<style lang="scss">

	:global(*) {
		box-sizing: border-box;
	}	

	header {
		background-color: #2a2b2aea;
		width: 100%;
		height: 5rem;
		position: sticky;
		display: block;
		top: 0;
		margin: 0;
		z-index: 2;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.dropdown-menu-button {
		display: flex;
		align-items: center;
		color: #F8F4E3;
		transition: background-color 0.3s;
  		height: 100%;    
		padding: 0 1.5rem;
		
		justify-content: center;

	}

	@media all and (hover: hover) {
		.dropdown-menu-button:hover {
			cursor: pointer;
			background-color: rgba(248, 244, 227, 0.1);
		}
	}

	.dropdown-menu-button.active {
		background-color: rgba(248, 244, 227, 0.1);
	}
	

	.header-inner {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		
	}

	.header-logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 0 0 1.5rem;
		height: 100%
	}

	.desktop-urls {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		height: 100%;
	}

	.desktop-urls a {
		display: flex;
		align-items: center;
		color: #F8F4E3;
		text-decoration: none;
		padding:  0 1rem;
		transition: background-color 0.3s;
  		height: 100%;    
		font-size: 1.1rem;
	}

	@media all and (hover: hover) {
		.desktop-urls a:hover {
			background-color: rgba(248, 244, 227, 0.2);
		}
	}

	.regular-title {
		display: block;
	}

	.minimized-title {
		display: none;
	}

	header h1 {
		color: #F8F4E3;
		text-align: center;
		font-family: 'Times New Roman', Times, serif;
		font-weight: normal;
		font-size: 1.3rem;
		text-wrap-mode: nowrap;
		margin: 0 0 0 8px;
	}

	.logo  {
		width: auto;
		max-height: 50px;
		margin-top: 5px;
	}
	
	.dropdown-menu {
        position: relative;
        top: 0;
        left: 0;
        background-color: #996c24d2;
        box-shadow: 0 8px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        min-width: 200px;
    }

    .dropdown-menu-item {
        text-decoration: none;
        background: none;
        border: none;
        color: #F8F4E3;
        padding: 12px 16px;
        text-align: left;
        width: 100%;
        cursor: pointer;
        font-size: 1.2rem;
        transition: background-color 0.3s, color 0.3s;
    }

    @media all and (hover: hover) {
        .dropdown-menu-item:hover {
            background-color: #F8F4E3;
            color: #2a2b2e;
        }
    }

	@media screen and (max-width: 1030px) {
		.desktop-urls {
			display: none;
		}

	}

	@media screen and (max-width: 340px) {
		.regular-title {
			display: none;
		}

		.minimized-title {
			display: block;
		}
		
		
	}


	@media screen and (max-width: 235px) {
		.regular-title {
			display: none;
		}

		.minimized-title {
			display: none;
		}

		.header-logo {
			display: none;
		}
	}

	
</style>

