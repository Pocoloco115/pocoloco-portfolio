const sections = {
  0: `
    <div class="space-y-8">
      <h2 class="text-3xl font-bold text-center tracking-widest">▸ LORE</h2>
      <p class="text-center text-lg max-w-2xl mx-auto">Hi, I am William Torres, an aspiring video game developer.
       As you can see, I am a video game and Unity enthusiast. 
       I enjoy developing my own projects, implementing mechanics, 
       and doing some pixel art. I also love C# and .NET. 
       You can find some other projects on my GitHub profile, 
       not necessarily related to game development, but to demonstrate my skills in C#, 
       so you can judge my knowledge for yourself. So, without further ado, 
       I hope you enjoy reviewing this portfolio :).</p>
      
      <table class="mx-auto text-center border border-[#555] text-sm">
        <tr><td class="p-3"><b>Class:</b></td><td class="p-3">Game Developer</td></tr>
        <tr><td class="p-3"><b>Main Engine:</b></td><td class="p-3">Unity</td></tr>
        <tr><td class="p-3"><b>Programming:</b></td><td class="p-3">C# · .NET</td></tr>
        <tr><td class="p-3"><b>Origin:</b></td><td class="p-3">Universidad Americana (UAM), Nicaragua</td></tr>
        <tr><td class="p-3"><b>Progression:</b></td><td class="p-3">f(x) = random spikes of motivation</td></tr>
        <tr><td class="p-3"><b>Art Tools:</b></td><td class="p-3">Piskel · Beginner Blender</td></tr>
      </table>

      <div class="flex justify-center">
        <img src="assets/bonfire.gif" 
             alt="Bonfire" 
             class="rounded-xl border-2 border-[#555555] shadow-xl max-w-[600px]">
      </div>
    </div>
  `,

  1: `
    <div class="space-y-10">
      <h2 class="text-3xl font-bold text-center tracking-widest text-[#eeeeee]">▸ EQUIPMENT</h2>
      
      <div class="inventory-grid">
        <div class="inventory-item">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg" alt="Unity">
          <span>Unity</span>
        </div>
        <div class="inventory-item">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#">
          <span>C#</span>
        </div>
        <div class="inventory-item">
          <img src="assets/my-character-sprite.png" alt="Piskel" onerror="this.style.display='none'">
          <span>Piskel</span>
        </div>
        <div class="inventory-item">
          <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="Blender">
          <span>Blender</span>
        </div>
        <div class="inventory-item">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git">
          <span>Git</span>
        </div>
        <div class="inventory-item">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub">
          <span>GitHub</span>
        </div>
      </div>

      <div class="flex justify-center pt-4">
        <img src="assets/inventory.png" 
             alt="Inventory" 
             class="rounded-xl border-2 border-[#555555] shadow-xl max-w-[400px] opacity-90">
      </div>
    </div>
  `,

  2: `
    <div class="space-y-10">
      <h2 class="text-3xl font-bold text-center tracking-widest">▸ QUESTS</h2>
      
      <div class="project-card p-6 rounded-xl">
        <img src="assets/procedural-map-preview.gif" 
             alt="Procedural Map Generator"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Procedural Map Generator</h3>
        <p class="text-[#bbbbbb]">Interactive tool to generate procedural maps in Unity with a real-time menu to adjust parameters like size, density, noise, etc.</p>
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more...</summary>
          <p class="mt-3 text-[#aaaaaa]">You can try different parameters and see the map generated instantly.</p>
        </details>
        <a href="https://github.com/Pocoloco115/ProceduralMapGenerator.git" 
           target="_blank"
          class="inline-flex items-center gap-3 mt-6 px-8 py-3.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#d97706] hover:text-[#f5a66b] font-bold rounded-xl transition-all hover:scale-105">
          
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
              width="26" 
              alt="GitHub">
          
          <span>VIEW REPOSITORY</span>
        </a>
      </div>

      <div class="project-card p-6 rounded-xl">
        <img src="assets/jaguarcin-preview.gif" 
             alt="Jaguarcin"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Jaguarcin</h3>
        <p class="text-[#bbbbbb]">2D platformer with fluid mechanics: double jump, dash, and wall climbing. University project currently in beta.</p>
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more...</summary>
          <p class="mt-3 text-[#aaaaaa]">Currently in development with a playable beta version.</p>
        </details>
        <a href="https://github.com/Pocoloco115/UAM-Game.git" 
          target="_blank"
          class="inline-flex items-center gap-3 mt-6 px-8 py-3.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#d97706] hover:text-[#f5a66b] font-bold rounded-xl transition-all hover:scale-105">
          
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
              width="26" 
              alt="GitHub">
          
          <span>VIEW REPOSITORY</span>
        </a>
      </div>

      <div class="project-card p-6 rounded-xl">
        <img src="assets/goats-fps-preview.gif" 
             alt="A Game About Killing Goats"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">A Game About Killing Goats</h3>
        <p class="text-[#bbbbbb]">Chaotic FPS where your only goal is to massacre goats in a coliseum using a pistol.</p>
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more...</summary>
          <p class="mt-3 text-[#aaaaaa]">Currently in development with a playable beta version. The final version is planned to be released on Steam, assuming the goats allow it.</p>
        </details>
        <a href="https://github.com/Pocoloco115/AGameAboutKillingGoats.git" 
           target="_blank"
           class="inline-flex items-center gap-3 mt-6 px-8 py-3.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#d97706] hover:text-[#f5a66b] font-bold rounded-xl transition-all hover:scale-105">
          
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
              width="26" 
              alt="GitHub">
          
          <span>VIEW REPOSITORY</span>
        </a>
      </div>
    </div>
  `,

  3: `
    <div class="space-y-10">
      <h2 class="text-3xl font-bold text-center tracking-widest">▸ MENTAL STATE</h2>
      
      <div class="flex justify-center">
        <img src="assets/game-dev-side.gif" 
            alt="Mental State" 
            class="rounded-2xl border-2 border-[#555555] shadow-2xl max-w-[600px] w-full">
      </div>
    </div>
  `,
};

function switchTab(n) {
  document.getElementById('content').innerHTML = sections[n];
  document.querySelectorAll('.tab-button').forEach((btn, i) => {
    btn.classList.toggle('active', i === n);
  });
}

window.onload = () => switchTab(0);