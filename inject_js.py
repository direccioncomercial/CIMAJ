with open('index.html', 'r') as f:
    content = f.read()

# I will find the `modalData` variable and inject our new script below it or at the end of the script tag.
js_code = """
        // === DATOS DE MIEMBROS DEL EQUIPO ===
        const teamMembers = [
            {
                id: 'carlos',
                name: 'Dr. Carlos Cisneros V.',
                role: 'CEO & Director',
                img: 'https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/foto%20charlie.jpg'
            },
            {
                id: 'luis',
                name: 'Abg. Luis Miguel Oña',
                role: 'Der. Penal y Constitucional',
                img: 'https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/luismi.png'
            },
            {
                id: 'vivi',
                name: 'Viviana Echeverría',
                role: 'Mediadora Certificada',
                img: 'https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/vivi.jpg'
            }
        ];

        function renderTeamCards() {
            const containers = document.querySelectorAll('.team-cards-container');
            if (containers.length === 0) return;

            let html = '';
            teamMembers.forEach(member => {
                html += `
                    <!-- ${member.name.split(' ')[0]} -->
                    <div onclick="openInfoModal('${member.id}')" class="glass-panel cursor-pointer hover:border-[#C5A059]/50 transition-all duration-300 rounded-xl overflow-hidden shadow-lg group">
                        <div class="aspect-[3/4] overflow-hidden relative">
                            <img src="${member.img}" alt="${member.name.split(' ')[0]}" class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-white/0 group-hover:bg-black/20 transition-all duration-500 z-10 pointer-events-none"></div>
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent z-20 pointer-events-none"></div>
                        </div>
                        <div class="p-6 relative z-30 -mt-16 flex flex-col items-start">
                            <h4 class="text-xl text-white font-serif font-bold">${member.name}</h4>
                            <p class="text-gold text-xs uppercase tracking-widest font-bold mb-3 mt-1">${member.role}</p>
                            <p class="text-slate-300 text-sm font-light">Clic para ver perfil <i class="fa-solid fa-arrow-right ml-1 text-xs"></i></p>
                        </div>
                    </div>`;
            });

            containers.forEach(container => {
                container.innerHTML = html;
            });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', renderTeamCards);
"""

# Let's insert it before the closing </script> tag at the bottom
new_content = content.replace("</script>\n</body>", js_code + "\n    </script>\n</body>")

with open('index.html', 'w') as f:
    f.write(new_content)

print("JS injected")
