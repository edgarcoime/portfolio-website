<script lang="ts">
import About from "$lib/components/about.svelte";
import Footer from "$lib/components/footer.svelte";
import Header from "$lib/components/header.svelte";
import Navbar from "$lib/components/navbar.svelte";
import Skills from "$lib/components/skills.svelte";
import Testimonial from "$lib/components/testimonial.svelte";
import Work from "$lib/components/work.svelte";

console.log("Hello world!");
</script>

<div>
  <Navbar />
  <Header />
  <About />
  <Work />
  <Skills />
  <Testimonial />
  <Footer />
</div>