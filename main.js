
        const DATA = {
            calendar: [
                { id: 1, short: "THA", name: "GP de Tailandia", venue: "Chang Circuit", flag: "th", date: "01 Mar", status: "Terminado" },
                { id: 2, short: "ARG", name: "GP de Argentina", venue: "Termas de Río Hondo", flag: "ar", date: "15 Mar", status: "Terminado" },
                { id: 3, short: "USA", name: "GP de las Américas", venue: "Austin", flag: "us", date: "29 Mar", status: "Terminado" },
                { id: 4, short: "ESP", name: "GP de España", venue: "Jerez", flag: "es", date: "26 Abr", status: "Terminado" },
                { id: 5, short: "FRA", name: "GP de Francia", venue: "Le Mans", flag: "fr", date: "10 May", status: "Siguiente" },
                { id: 6, short: "GBR", name: "GP de Gran Bretaña", venue: "Silverstone", flag: "gb", date: "24 May", status: "Pendiente" },
                { id: 7, short: "ARA", name: "GP de Aragón", venue: "MotorLand", flag: "es", date: "07 Jun", status: "Pendiente" },
                { id: 8, short: "ITA", name: "GP de Italia", venue: "Mugello", flag: "it", date: "21 Jun", status: "Pendiente" },
                { id: 9, short: "NED", flag: "nl", name: "GP de Países Bajos", venue: "Assen", date: "28 Jun", status: "Pendiente" },
                { id: 10, short: "GER", flag: "de", name: "GP de Alemania", venue: "Sachsenring", date: "12 Jul", status: "Pendiente" },
                { id: 11, short: "CZE", flag: "cz", name: "GP de Chequia", venue: "Brno", date: "16 Ago", status: "Pendiente" },
                { id: 12, short: "AUT", flag: "at", name: "GP de Austria", venue: "Red Bull Ring", date: "23 Ago", status: "Pendiente" },
                { id: 13, short: "HUN", flag: "hu", name: "GP de Hungría", venue: "Balaton Park", date: "06 Sep", status: "Pendiente" },
                { id: 14, short: "CAT", flag: "es", name: "GP de Cataluña", venue: "Montmeló", date: "20 Sep", status: "Pendiente" },
                { id: 15, short: "RSM", flag: "sm", name: "GP de San Marino", venue: "Misano", date: "27 Sep", status: "Pendiente" },
                { id: 16, short: "JPN", flag: "jp", name: "GP de Japón", venue: "Motegi", date: "04 Oct", status: "Pendiente" },
                { id: 17, short: "INA", flag: "id", name: "GP de Indonesia", venue: "Mandalika", date: "18 Oct", status: "Pendiente" },
                { id: 18, short: "AUS", flag: "au", name: "GP de Australia", venue: "Phillip Island", date: "25 Oct", status: "Pendiente" },
                { id: 19, short: "MAL", flag: "my", name: "GP de Malasia", venue: "Sepang", date: "01 Nov", status: "Pendiente" },
                { id: 20, short: "POR", flag: "pt", name: "GP de Portugal", venue: "Portimão", date: "08 Nov", status: "Pendiente" },
                { id: 21, short: "VAL", flag: "es", name: "GP de Valencia", venue: "Ricardo Tormo", date: "22 Nov", status: "Pendiente" },
                { id: 22, short: "KAZ", flag: "kz", name: "GP de Kazajistán", venue: "Sokol Circuit", date: "Pendiente", status: "Pendiente" }
            ],
            teams: [
                { id: "ducati-lenovo", name: "Ducati Lenovo Team", color: "bg-red-600", bike: "Desmosedici GP26", riders: ["Francesco Bagnaia", "Marc Márquez"] },
                { id: "redbull-ktm", name: "Red Bull KTM Factory", color: "bg-orange-600", bike: "KTM RC16", riders: ["Brad Binder", "Pedro Acosta"] },
                { id: "aprilia-racing", name: "Aprilia Racing", color: "bg-black", bike: "Aprilia RS-GP", riders: ["Jorge Martín", "Marco Bezzecchi"] },
                { id: "monster-yamaha", name: "Monster Energy Yamaha", color: "bg-blue-900", bike: "Yamaha YZR-M1", riders: ["Fabio Quartararo", "Alex Rins"] },
                { id: "castrol-honda", name: "Castrol Honda Team", color: "bg-red-500", bike: "Honda RC213V", riders: ["Luca Marini", "Joan Mir"] },
                { id: "pramac-yamaha", name: "Prima Pramac Yamaha", color: "bg-purple-600", bike: "Yamaha YZR-M1", riders: ["Miguel Oliveira", "Jack Miller"] },
                { id: "gresini-racing", name: "Gresini Racing Ducati", color: "bg-sky-400", bike: "Desmosedici GP25", riders: ["Alex Márquez", "Fermin Aldeguer"] },
                { id: "vr46-racing", name: "Pertamina Enduro VR46", color: "bg-yellow-400", bike: "Desmosedici GP25", riders: ["Fabio Di Giannantonio", "Franco Morbidelli"] },
                { id: "trackhouse-aprilia", name: "Trackhouse Racing", color: "bg-blue-600", bike: "Aprilia RS-GP", riders: ["Raul Fernández", "Ai Ogura"] },
                { id: "tech3-gasgas", name: "Red Bull GASGAS Tech3", color: "bg-red-700", bike: "KTM RC16", riders: ["Maverick Viñales", "Enea Bastianini"] },
                { id: "lcr-honda", name: "LCR Honda", color: "bg-green-600", bike: "Honda RC213V", riders: ["Johann Zarco", "Somkiat Chantra"] }
            ],
            standings: [
                { rank: 1, name: "M. Bezzecchi", teamId: "aprilia-racing", flag: "it", points: [25, 31, 25, 20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total: 101 },
                { rank: 2, name: "Jorge Martín", teamId: "aprilia-racing", flag: "es", points: [18, 27, 32, 13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total:90 },
                { rank: 3, name: "Fabio Di Giannantonio", teamId: "vr46-racing", flag: "it", points: [12, 25, 13, 16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total: 71 },
                { rank: 4, name: "Pedro Acosta", teamId: "redbull-ktm", flag: "es", points: [32, 10, 18, 6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total: 66 },
                { rank: 5, name: "Marc Márquez", teamId: "ducati-lenovo", flag: "es", points: [9, 25, 11, "pellejazo",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], total: 57 }
            ]
        };

        function showTab(id) {
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            event.currentTarget.classList.add('active');
        }

        function initRanking() {
            const header = document.getElementById('ranking-header');
            const body = document.getElementById('ranking-body');
            const top10 = document.getElementById('top10-list');
            
            const pilotTh = header.cells[0];
            const totalTh = header.cells[header.cells.length - 1];
            header.innerHTML = '';
            header.appendChild(pilotTh);
            
            DATA.calendar.forEach(race => {
                const th = document.createElement('th');
                th.className = "p-3 text-center border-l border-white/5 font-mono text-[9px] min-w-[50px]";
                th.innerText = race.short;
                header.appendChild(th);
            });
            header.appendChild(totalTh);

            body.innerHTML = ''; // Limpiar cuerpo antes de renderizar
            top10.innerHTML = ''; // Limpiar Dashboard antes de renderizar

            DATA.standings.forEach((p, idx) => {
                const pointsCells = p.points.map(pt => `
                    <td class="p-3 text-center border-l border-white/5 ${pt > 0 ? 'text-white font-black' : 'text-slate-700'}">
                        ${pt || '-'}
                    </td>
                `).join('');

                body.innerHTML += `
                    <tr>
                        <td class="p-4 sticky-col">
                            <div class="flex items-center gap-3">
                                <span class="text-[10px] font-black text-slate-500 w-4">#${p.rank}</span>
                                <div class="w-8 h-5 rounded overflow-hidden border border-white/10 flag-ring">
                                    <img src="https://flagcdn.com/w80/${p.flag}.png" class="w-full h-full object-cover">
                                </div>
                                <p class="font-black uppercase text-[10px] truncate">${p.name}</p>
                            </div>
                        </td>
                        ${pointsCells}
                        <td class="p-4 text-center bg-red-600/20 text-red-500 font-black italic sticky right-0 z-20 backdrop-blur-md border-l border-white/10">${p.total}</td>
                    </tr>
                `;

                if(idx < 10) {
                    const team = DATA.teams.find(t => t.id === p.teamId) || {color: 'bg-slate-700', name: 'N/A'};
                    top10.innerHTML += `
                        <div class="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div class="h-1 ${team.color}"></div>
                            <div class="p-4 space-y-3">
                                <div class="flex justify-between">
                                    <div class="w-10 h-6 rounded border border-white/10 overflow-hidden">
                                        <img src="https://flagcdn.com/w80/${p.flag}.png" class="w-full h-full object-cover">
                                    </div>
                                    <span class="text-[9px] font-black text-slate-500 italic">POS ${p.rank}</span>
                                </div>
                                <div>
                                    <h4 class="font-black uppercase text-xs truncate italic">${p.name}</h4>
                                    <div class="flex justify-between items-center mt-1">
                                        <span class="text-[8px] text-slate-400 font-bold uppercase truncate pr-2">${team.name}</span>
                                        <span class="text-xl font-black italic text-white leading-none">${p.total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
            });
        }

        function initCalendar() {
            const container = document.getElementById('rounds-list');
            container.innerHTML = '';
            DATA.calendar.forEach(race => {
                const isNext = race.status === 'Siguiente';
                const statusColor = isNext ? 'text-red-500' : (race.status === 'Terminado' ? 'text-green-500' : 'text-slate-500');
                const borderColor = isNext ? 'border-red-600/40 bg-red-600/5 shadow-red-900/20 shadow-xl' : 'border-white/5';

                container.innerHTML += `
                <div class="bg-slate-900/60 p-5 rounded-3xl border ${borderColor} flex flex-col group hover:border-white/20 transition-all">
                    <div class="flex justify-between items-start mb-4">
                        <div class="w-10 h-6 rounded shadow-lg overflow-hidden border border-white/10">
                            <img src="https://flagcdn.com/w80/${race.flag}.png" class="w-full h-full object-cover">
                        </div>
                        <span class="text-[8px] font-black uppercase tracking-widest ${statusColor}">${race.status}</span>
                    </div>
                    <p class="text-[10px] font-bold text-slate-500 uppercase mb-1">${race.date}</p>
                    <h3 class="text-lg font-black italic uppercase leading-tight group-hover:text-red-500 transition-colors">${race.name}</h3>
                    <p class="text-[10px] text-slate-400 mt-1 uppercase font-medium truncate">${race.venue}</p>
                </div>`;
            });
        }

        function initTeams() {
            const container = document.getElementById('teams-list');
            container.innerHTML = '';
            DATA.teams.forEach(team => {
                const riders = team.riders.map(r => `
                    <div class="bg-slate-950 p-3 rounded-2xl border border-white/5 text-[10px] font-black uppercase text-center text-slate-300 group-hover:border-white/20 transition-all">
                        ${r}
                    </div>
                `).join('');
                
                container.innerHTML += `
                <div class="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden group hover:border-red-600/30 transition-all duration-500 shadow-xl">
                    <div class="h-1.5 ${team.color}"></div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <h3 class="text-xl font-black italic uppercase leading-tight text-white">${team.name}</h3>
                                <p class="text-[10px] font-mono font-bold text-red-500 mt-1 uppercase tracking-widest">${team.bike}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">${riders}</div>
                    </div>
                </div>`;
            });
        }

function startTimer() {
    const now = new Date();
    
    const months = {
        "Ene": 0, "Feb": 1, "Mar": 2, "Abr": 3, "May": 4, "Jun": 5,
        "Jul": 6, "Ago": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dic": 11
    };

    // 1. Buscamos la carrera que realmente es la siguiente
    let nextRace = DATA.calendar.find(race => {
        if (!race.date || race.date === "Pendiente") return false;
        
        const [day, monthName] = race.date.split(" ");
        // Creamos la fecha de la carrera (asumiendo inicio a las 14:00)
        const raceDate = new Date(2026, months[monthName], parseInt(day), 14, 0, 0);
        
        // La carrera se considera "pasada" 2 horas después de su inicio
        const raceEndTime = raceDate.getTime() + (2 * 60 * 60 * 1000);
        
        return raceEndTime > now.getTime();
    });

    if (!nextRace) {
        document.getElementById('countdown').innerHTML = "Temporada Finalizada";
        return;
    }

    // 2. ACTUALIZACIÓN DINÁMICA DE TEXTOS (Cabecera del Dashboard)
    // Buscamos los elementos por su estructura para cambiar el nombre del GP y Circuito
    const dashboard = document.getElementById('dashboard');
    if (dashboard) {
        const titleEl = dashboard.querySelector('h2');
        const venueEl = dashboard.querySelector('p');
        if (titleEl) titleEl.innerText = nextRace.name;
        if (venueEl) venueEl.innerText = `${nextRace.venue} | ${nextRace.date}`;
    }

    // 3. Configurar el objetivo del contador
    const [d, mName] = nextRace.date.split(" ");
    const target = new Date(2026, months[mName], parseInt(d), 14, 0, 0).getTime();

    // Limpiar cualquier intervalo previo para evitar duplicados
    if (window.raceInterval) clearInterval(window.raceInterval);

    window.raceInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const diff = target - currentTime;
        const el = document.getElementById('countdown');

        if (!el) return;

        // Si estamos en el margen de la carrera (0 a -2 horas)
        if (diff <= 0 && diff > -(2 * 60 * 60 * 1000)) {
            el.innerHTML = "<span class='text-green-500 animate-pulse'>¡EN CARRERA!</span>";
            return;
        } 
        
        // Si la carrera ya terminó por más de 2 horas, saltamos a la siguiente
        if (diff <= -(2 * 60 * 60 * 1000)) {
            clearInterval(window.raceInterval);
            startTimer(); 
            return;
        }

        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        el.innerHTML = `${days}d : ${hours}h : ${minutes}m : <span class="text-red-600">${seconds}s</span>`;
    }, 1000);
}

        window.onload = () => {
            initRanking();
            initCalendar();
            initTeams();
            startTimer();
        };
    