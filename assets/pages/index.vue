<template>
	<div class="main-body">
		<h1 class="main-title style--font-en style--font-black">{{ msg }}</h1>
		<p class="main-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
			Incidunt quo reiciendis nostrum cumque omnis.<br>
			Ullam blanditiis doloribus autem fugit necessitatibus,<br>
			officia provident molestias,<br>
			earum reiciendis dolor maxime dolore quam tenetur.
		</p>
		<article class="article">
			<section class="section contents-section">
				<div class="contents-body section-body">
					<h2 class="contents-title section-title style--font-en style--font-black">Contents</h2>
					<ul class="contents-list style--column style--font-en style--font-bold">
						<li class="contents-item"><router-link to="/">top</router-link></li>
						<li class="contents-item"><router-link to="/about">about</router-link></li>
						<li class="contents-item"><router-link to="/contact">contact</router-link></li>
					</ul>
				</div>
			</section>
		</article>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Vue Lab.'
			}
		}
	}
</script>
