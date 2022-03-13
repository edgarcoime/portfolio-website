<script lang="ts">
  const links = ["home", "about", "work", "skills", "contact"];
</script>

<nav class="app__navbar w-full flex justify-between items-center p-10 bg-gray-50 backdrop-blur-sm border border-solid border-gray-50 fixed z-10">
  <div class="app__navbar-logo flex justify-start items-center">
    <img src="/logo192.png" alt="edgar coime logo" class="w-14 md:w-20"/>
  </div>
  <ul class="app_navbar-links flex flex-1 justify-center items-center">
    <!-- LINKS -->
    {#each links as link}
      <li class="mx-4 flex-col">
        <a href={`#${link}`}>
          <div class="p-6 cursor-pointer bg-transparent rounded-full group hover:bg-gray-100">
            <p class="text-lg text-gray-400 uppercase font-medium group-hover:text-slate-700 transition-all">{link}</p>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</nav>