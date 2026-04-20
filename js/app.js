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
      
      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <table class="mx-auto text-center border border-[#555] text-sm">
          <tr><td class="px-3 py-2"><b>Class:</b></td><td class="px-3 py-2">Game Developer</td></tr>
          <tr><td class="px-3 py-2"><b>Main Engine:</b></td><td class="px-3 py-2">Unity</td></tr>
          <tr><td class="px-3 py-2"><b>Programming:</b></td><td class="px-3 py-2">C# · .NET</td></tr>
          <tr><td class="px-3 py-2"><b>Origin:</b></td><td class="px-3 py-2">Universidad Americana (UAM), Nicaragua</td></tr>
          <tr><td class="px-3 py-2"><b>Progression:</b></td><td class="px-3 py-2">f(x) = random spikes of motivation</td></tr>
          <tr><td class="px-3 py-2"><b>Art Tools:</b></td><td class="px-3 py-2">Piskel · Beginner Blender</td></tr>
        </table>

        <div class="flex justify-center">
          <img src="assets/bonfire.gif" 
              alt="Bonfire" 
              class="rounded-xl border-2 border-[#555555] shadow-xl max-w-[420px]">
        </div>
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
          <div class="tooltip">
            Main game engine used for all my projects
          </div>
        </div>
        <div class="inventory-item">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#">
          <span>C#</span>
          <div class="tooltip">
            Primary programming language for for Unity development and other projects
          </div>
        </div>
        <div class="inventory-item">
          <img src="assets/my-character-sprite.png" alt="Piskel" onerror="this.style.display='none'">
          <span>Piskel</span>
          <div class="tooltip">
            Tool used to create all pixel art sprites and animations
          </div>
        </div>
        <div class="inventory-item">
          <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="Blender">
          <span>Blender</span>
          <div class="tooltip">
            Beginner 3D modeling and asset creation
          </div>
        </div>
        <div class="inventory-item">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git">
          <span>Git</span>
          <div class="tooltip">
            Version control for all my projects
          </div>
        </div>
        <div class="inventory-item">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub">
          <span>GitHub</span>
          <div class="tooltip">
            Hosting and showcasing all my code repositories
          </div>
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

      <!-- Project 1 -->
      <div class="project-card p-6 rounded-xl border border-[#444]">
        <img src="assets/maze-solver2.gif" 
             alt="Maze Solver & Algorithms Visualizer"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Maze Solver & Algorithms Visualizer</h3>
        <p class="text-[#bbbbbb]">This is a maze solver visualizer. It doesn't just find the exit; it shows you exactly how much the algorithm struggled to get there. It’s a project built to visualize pathfinding logic in real-time.</p>
        
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more + Tools used</summary>
          <div class="mt-4 pl-2 text-sm space-y-3">
            <p class="text-[#aaaaaa]">A Unity tool for learning and visualizing pathfinding algorithms like BFS and DFS in real-time.</p>
            <div class="mt-5">
              <p class="text-[#d97706] text-xs uppercase tracking-widest mb-3">Tools & Technologies</p>
              <ul class="space-y-1.5 text-[#cccccc]">
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Unity</strong> — Game Engine</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>C#</strong> + <strong>.NET</strong> — Programming</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Piskel</strong> — Pixel Art</span>
                </li>
              </ul>
            </div>
          </div>
        </details>

        <a href="https://github.com/Pocoloco115/maze-solving-algorithms.git" 
           target="_blank"
           class="inline-flex items-center gap-3 mt-6 px-8 py-3.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#d97706] hover:text-[#f5a66b] font-bold rounded-xl transition-all hover:scale-105">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
               width="26" 
               alt="GitHub">
          <span>VIEW REPOSITORY</span>
        </a>
      </div>

      <!-- Project 2 -->
      <div class="project-card p-6 rounded-xl border border-[#444]">
        <img src="assets/procedural-map-preview.gif" 
             alt="Procedural Map Generator"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Procedural Map Generator</h3>
        <p class="text-[#bbbbbb]">Interactive tool to generate procedural maps in Unity with a real-time menu to adjust parameters like size, density, noise, etc.</p>
        
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more + Tools used</summary>
          <div class="mt-4 pl-2 text-sm space-y-3">
            <p class="text-[#aaaaaa]">This is an interactive procedural map generator made in Unity. You can change parameters in real time and see the map being generated instantly.</p>
            <div class="mt-5">
              <p class="text-[#d97706] text-xs uppercase tracking-widest mb-3">Tools & Technologies</p>
              <ul class="space-y-1.5 text-[#cccccc]">
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Unity</strong> — Game Engine</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>C#</strong> + <strong>.NET</strong> — Programming</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Piskel</strong> — Pixel Art</span>
                </li>
              </ul>
            </div>
          </div>
        </details>

        <a href="https://github.com/Pocoloco115/procedural-map-generator.git" 
           target="_blank"
           class="inline-flex items-center gap-3 mt-6 px-8 py-3.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#d97706] hover:text-[#f5a66b] font-bold rounded-xl transition-all hover:scale-105">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" 
               width="26" 
               alt="GitHub">
          <span>VIEW REPOSITORY</span>
        </a>
      </div>

      <!-- Project 3 -->
      <div class="project-card p-6 rounded-xl border border-[#444]">
        <img src="assets/jaguarcin-preview.gif" 
             alt="Jaguarcin"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Jaguarcin</h3>
        <p class="text-[#bbbbbb]">2D platformer with fluid mechanics: double jump, dash, and wall climbing. University project currently in beta.</p>
        
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more + Tools used</summary>
          <div class="mt-4 pl-2 text-sm space-y-3">
            <p class="text-[#aaaaaa]">Currently in development with a playable beta version.</p>
            <div class="mt-5">
              <p class="text-[#d97706] text-xs uppercase tracking-widest mb-3">Tools & Technologies</p>
              <ul class="space-y-1.5 text-[#cccccc]">
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Unity</strong> — Game Engine</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>C#</strong> + <strong>.NET</strong> — Programming</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Piskel</strong> — Pixel Art</span>
                </li>
              </ul>
            </div>
          </div>
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

      <!-- Project 4 -->
      <div class="project-card p-6 rounded-xl border border-[#444]">
        <img src="assets/goats-fps-preview.gif" 
             alt="A Game About Killing Goats"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">A Game About Killing Goats</h3>
        <p class="text-[#bbbbbb]">Chaotic FPS where your only goal is to massacre goats in a coliseum using a pistol.</p>
        
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more + Tools used</summary>
          <div class="mt-4 pl-2 text-sm space-y-3">
            <p class="text-[#aaaaaa]">Currently in development with a playable beta version.</p>
            <div class="mt-5">
              <p class="text-[#d97706] text-xs uppercase tracking-widest mb-3">Tools & Technologies</p>
              <ul class="space-y-1.5 text-[#cccccc]">
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Unity</strong> — Game Engine</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>C#</strong> + <strong>.NET</strong> — Programming</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Piskel</strong> — Pixel Art</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Blender</strong> — 3D Modeling</span>
                </li>
              </ul>
            </div>
          </div>
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

      <!-- Project 5 -->
      <div class="project-card p-6 rounded-xl border border-[#444]">
        <img src="assets/snake-gameplay2.gif" 
             alt="Classic Snake Game"
             class="w-full rounded-xl border-2 border-[#555555] shadow-xl">
        <h3 class="text-2xl font-bold mb-3">Classic Snake Game</h3>
        <p class="text-[#bbbbbb]">It’s the classic snake game, not a reinvention, not a cinematic universe, not a battle royale, just a snake, made by me.</p>
        
        <details class="mt-4 text-sm">
          <summary class="cursor-pointer text-[#d97706] hover:text-[#f5a66b]">Read more + Tools used</summary>
          <div class="mt-4 pl-2 text-sm space-y-3">
            <p class="text-[#aaaaaa]">This is my second Snake game ever, but the first one I built using Unity with C# and pixel art sprites.</p>
            <div class="mt-5">
              <p class="text-[#d97706] text-xs uppercase tracking-widest mb-3">Tools & Technologies</p>
              <ul class="space-y-1.5 text-[#cccccc]">
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Unity</strong> — Game Engine</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>C#</strong> + <strong>.NET</strong> — Programming</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-[#d97706] mt-1">▸</span>
                  <span><strong>Piskel</strong> — Pixel Art</span>
                </li>
              </ul>
            </div>
          </div>
        </details>

        <a href="https://github.com/Pocoloco115/SnakeWithUnity.git" 
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
      <h2 class="text-3xl font-bold text-center tracking-widest uppercase">▸ Contact Me</h2>

      <div class="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        
        <div class="flex flex-col items-start gap-10 w-full max-w-md">
          
          <div class="w-full bg-[#2a2a2a] border border-[#555] rounded-xl p-5 flex items-center gap-4">
            <div class="flex-1">
              <p class="text-[#d97706] text-xs uppercase tracking-widest justify-center items-center mb-1">My Email</p>
              <p id="email-text" class="font-mono text-[#cccccc] justify-center items-center select-all break-all text-sm">
                wtorres935115@gmail.com
              </p>
            </div>
            <button onclick="copyEmail()" class="px-4 py-3 bg-[#1f1f1f] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] text-[#cccccc] rounded-lg transition-all active:scale-95 hover:scale-105 text-xs">
              Copy
            </button>
            <a href="mailto:wtorres935115@gmail.com" class="px-4 py-3 bg-[#1f1f1f] hover:bg-[#3a3a3a] border border-[#d97706] hover:border-[#f5a66b] rounded-lg transition-all active:scale-95 hover:scale-105 flex items-center">
              <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" width="18" alt="Email">
            </a>
          </div>

          <a href="https://www.linkedin.com/in/william-alberto-torres-moreira-389779402/" target="_blank" class="w-full inline-flex items-center gap-3 px-8 py-3.5 bg-[#2a2a2a] border border-[#d97706] text-[#d97706] font-bold rounded-xl transition-all hover:scale-105 justify-center">
            <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" width="26" alt="LinkedIn">
            <span>VIEW MY LINKEDIN</span>
          </a>

          <a href="https://www.instagram.com/not_w.__/?hl=es" target="_blank" class="w-full inline-flex items-center gap-3 px-8 py-3.5 bg-[#2a2a2a] border border-[#d97706] text-[#d97706] font-bold rounded-xl transition-all hover:scale-105 justify-center">
            <img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" width="26" alt="Instagram">
            <span>VIEW MY INSTAGRAM</span>
          </a>

          <a href="assets/William_Torres_CV.pdf" download class="w-full inline-flex items-center gap-3 px-8 py-3.5 bg-[#2a2a2a] border border-[#d97706] text-[#d97706] font-bold rounded-xl transition-all hover:scale-105 justify-center">
            <span class="text-xl">↓</span>
            <span>DOWNLOAD MY CV (PDF)</span>
          </a>
        </div>

        <div class="w-full max-w-[390px] md:max-w-[390px]">
          <img src="assets/PLAYER.gif" 
              alt="Contact Illustration" 
              class="rounded-2xl">
        </div>

      </div>
    </div>

  `,

  4: `
    <div class="space-y-10">
      <h2 class="text-3xl font-bold text-center tracking-widest">▸ MOOD LATELY</h2>
      
      <div class="flex justify-center">
        <img src="assets/game-dev-side.gif" 
            alt="Mood Lately" 
            class="rounded-2xl border-2 border-[#555555] shadow-2xl max-w-[600px] w-full">
      </div>
    </div>
  `,
};
function copyEmail() {
  const email = "wtorres935115@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.querySelector('button[onclick="copyEmail()"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Copied!';
    btn.style.borderColor = '#22c55e';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.borderColor = '';
    }, 2000);
  });
}
function switchTab(n) {
  document.getElementById('content').innerHTML = sections[n];
  document.querySelectorAll('.tab-button').forEach((btn, i) => {
    btn.classList.toggle('active', i === n);
  });
}
window.onload = () => switchTab(0);