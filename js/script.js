const input = document.getElementById("hidden-terminal-input");
const currentInput = document.getElementById("current-input");
const terminalOutput = document.getElementById("terminal-output");

// Definisi command aktif
const commands = {
  list: ["list", "daftar", "isi"],
  help: ["help", "bantuan"],
  info: ["info"],
  social: ["social"],
  greeting: ["halo", "hai", "hi", "hay"],
  muhfhri: ["muhfhri"],
  instagram: ["instagram"],
  youtube: ["youtube"],
  github: ["github"],
  su: ["su"],
  kill: ["kill"],
};

// Mapping sosial media ke URL
const socialLinks = {
  instagram: "https://www.instagram.com/muhfhri._",
  youtube: "https://www.youtube.com/@flixpseal",
  github: "https://github.com/muhfhri",
};

input.addEventListener("input", (e) => {
  currentInput.textContent = e.target.value;
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();

    if (command) {
      const cmdLine = document.createElement("div");
      cmdLine.classList.add("terminal-line");
      cmdLine.innerHTML = `<span class="prompt">user@linux:~$</span> <span class="command-text">${command}</span>`;
      terminalOutput.appendChild(cmdLine);

      let matched = false;

      // Jalankan perintah sosial media
      if (socialLinks[command]) {
        window.open(socialLinks[command], "_blank");
        const line = document.createElement("div");
        line.classList.add("terminal-line");
        line.textContent = `Membuka ${command}...`;
        terminalOutput.appendChild(line);
        matched = true;
      }

      // Jalankan perintah utama
      for (const key in commands) {
        if (commands[key].includes(command)) {
          matched = true;

if (key === "list") {
  const line = document.createElement("div");
  line.classList.add("terminal-line");

  // Gabungkan semua command dan sosial media ke satu array
  let allCommands = [];

  for (const k in commands) {
    allCommands.push(commands[k][0]); // ambil nama command utama
  }
  for (const social in socialLinks) {
    allCommands.push(social);
  }

  // Hapus duplikat dengan Set
  allCommands = [...new Set(allCommands)];

  line.textContent = allCommands.join(" | ");
  terminalOutput.appendChild(line);
}

          if (key === "info") {
            const line = document.createElement("div");
            line.classList.add("terminal-line");
            line.textContent = "versi 1 experimental, mungkin masih memiliki bug";
            terminalOutput.appendChild(line);
          }
          
          if (key === "help") {
            const line = document.createElement("div");
            line.classList.add("terminal-line");
            line.textContent = "Gunakan {list} untuk melihat daftar list di terminal";
            terminalOutput.appendChild(line);
          }
          
          // Tambahkan setelah const command = input.value.trim().toLowerCase();
if (command === "kill") {
    matched = true;

    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                font-family: Arial, sans-serif;
                background-color: #fafafa;
                color: #444;
                text-align: center;
                user-select: none;
            ">
                <div style="margin-bottom: 20px;">
                    <svg width="80" height="80" viewBox="0 0 48 48">
                        <path fill="#9e9e9e" d="M40 6H8c-1.1 0-2 .9-2 2v32c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM18 14c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 1 1 0-4zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 1 1 0-4zM24 36c-5.5 0-10-4.5-10-10h4c0 3.3 2.7 6 6 6s6-2.7 6-6h4c0 5.5-4.5 10-10 10z"/>
                    </svg>
                </div>

                <h1 style="
                    font-size: 32px;
                    margin-bottom: 10px;
                    font-weight: 600;
                ">Aw, Snap!</h1>

                <p style="
                    font-size: 16px;
                    max-width: 420px;
                    line-height: 1.5;
                    color: #666;
                ">
                    Something went wrong while displaying this webpage.
                </p>

                <button style="
                    margin-top: 25px;
                    padding: 10px 24px;
                    background-color: #1a73e8;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                " onclick="location.reload()">
                    Reload
                </button>
            </div>
        `;

        // Hapus semua script agar bener-bener "mati"
        const scripts = document.querySelectorAll("script");
        scripts.forEach(s => s.remove());

        document.body.style.overflow = "hidden";
    }, 350);
}
          
          if (key === "su") {
            const line = document.createElement("div");
            line.classList.add("terminal-line");
            line.textContent = "Bro benar benar ingin menjalankan su di website🥶";
            terminalOutput.appendChild(line);
          }

          if (key === "social") {
            const line = document.createElement("div");
            line.classList.add("terminal-line");
            line.textContent = "Sosial media: Instagram, YouTube, GitHub, LinkedIn. Ketik nama sosial media untuk membuka.";
            terminalOutput.appendChild(line);
          }

          if (key === "greeting" || key === "muhfhri") {
            const line = document.createElement("div");
            line.classList.add("terminal-line");
            line.textContent = "Halo👋 Perkenalkan nama Saya Muhammad Fachri Al Husein, kamu bisa memanggil saya Fachri, usia saya saat ini 18 Tahun, ada yang ingin kamu ketahui?";
            terminalOutput.appendChild(line);
          }
        }
      }

      // Command khusus: clear
      if (command === "clear") {
        terminalOutput.innerHTML = "";
        matched = true;
      }

      // Kalau tidak ada yang cocok
      if (!matched) {
        const errLine = document.createElement("div");
        errLine.classList.add("terminal-line");
        errLine.textContent = `bash: ${command}: command not found`;
        terminalOutput.appendChild(errLine);
      }
    }

    input.value = "";
    currentInput.textContent = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// Fokus input saat klik terminal
document.querySelector(".terminal-window").addEventListener("click", () => {
  input.focus();
});

