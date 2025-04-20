<script>
	let imageWidth = $state(200);
  let sizes = $derived.by(() => {
    let sizesItems = [];
    sizesItems.push(`(min-width: 800px) ${imageWidth}px`);
    sizesItems.push(['96vw'])
    return sizesItems.join(",\n")
  })
</script>

<div class="wrapper">
	<h1>Responsive Image Sizes</h1>
	<input
		bind:value={imageWidth}
		type="range"
		id="imageWidth"
		name="imageWidth"
		min="200"
		max="1920"
	/>
	<h2 class="imageWidthValue">{imageWidth}</h2>
	<div class="images">
		<picture>
			<source
				srcset="https://placehold.co/400 400w,
						  https://placehold.co/600 600w,
						  https://placehold.co/800 800w,
						  https://placehold.co/1000 1000w,
						  https://placehold.co/1200 1200w,
						  https://placehold.co/1600 1600w,
						  https://placehold.co/1920 1920w"
        sizes={sizes}
			/>
        <!--
      sizes="(min-width: 800px) 200px, 98vw"
      sizes="(min-width: 800px) 200, 100vw"
      -->
			<img
				alt=""
				style:width={`${imageWidth}px`}
				width="400"
				height="300"
				src="https://placehold.co/400"
			/>
		</picture>
		<!-- <img
			alt=""
			style:width={`${imageWidth}px`}
			width="400"
			height="300"
			src="https://placehold.co/400"
			srcset="
            https://placehold.co/400 400w,
            https://placehold.co/600 600w,
            https://placehold.co/1000 1000w,
            https://placehold.co/1600 1600w
      "
			sizes="
        100vw
      "
		/> -->
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
  .images{
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
	img {
		max-width: 100%;
		width: 200px;
		height: auto;
	}
</style>
