<header>
	<a href="/">Home</a>
	<nav>
		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="sass">

@import nord/src/sass/nord.scss

header
    margin: 1rem
    padding: 1rem
    background: $nord1
    display: flex
    flex-wrap: wrap
    justify-content: space-between

ul
    margin: 0
    list-style-type: none
    display: flex
    gap: 1rem

a
    text-decoration: none
    color: inherit

</style>
