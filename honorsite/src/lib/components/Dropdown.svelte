<script lang="ts">
    let { isMobile = false } = $props();
</script>

<div class="dropdown-menu">
    <!-- Dropdown menu content goes here -->
    {#if isMobile}
        <a class="dropdown-menu-item" href="/">Home</a>
        <a class="dropdown-menu-item" href="/apply">Apply Now</a>
        <a class="dropdown-menu-item" href="/events">View Events</a>
        <a class="dropdown-menu-item" href="/team">Meet The Team</a>
        <a class="dropdown-menu-item" href="/photos">See Our Favorite Pics</a>
        <div style="height: 2px; background-color: rgba(255, 255, 255, 0.5);"></div>
        <a class="dropdown-menu-item" href="https://www.faith-homeschool.com/index.htm">FAITH Home</a>
        <a class="dropdown-menu-item" href="https://www.faith-homeschool.com/join.htm">Join FAITH</a>
        <a class="dropdown-menu-item" href="https://www.faith-homeschool.com/signup2.htm">Extracurriculars</a>
        <a class="dropdown-menu-item" href="https://www.faith-homeschool.com/tascs.htm">Teen Volunteers</a>
        <a class="dropdown-menu-item" href="https://www.faith-homeschool.com/linksnew.htm">Helpful Links</a>
    {:else}
        <a class="dropdown-menu-item" href="/">Home</a>
        <a class="dropdown-menu-item" href="/apply">Apply Now</a>
        <a class="dropdown-menu-item" href="/events">View Events</a>
        <a class="dropdown-menu-item" href="/team">Meet The Team</a>
        <a class="dropdown-menu-item" href="/photos">See Our Favorite Pics</a>
    {/if}

</div>


<style lang="scss">
    .dropdown-menu {
        position:relative;
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
</style>