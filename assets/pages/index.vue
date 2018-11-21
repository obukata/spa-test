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
			<section class="section panel-section">
				<div class="style--card-column">
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card01.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card02.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card03.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card04.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card05.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card06.jpg" alt=""></router-link>
					</div>
					<div class="panel-card">
						<router-link to="/"><img src="/assets/images/common/img_card07.jpg" alt=""></router-link>
					</div>
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
