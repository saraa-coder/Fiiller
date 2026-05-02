/**
 * Kelime Lab - Vocabulario con Frases de Ejemplo
 */

const allWords = [
    {word:"yapmak",correct:"hacer",sentence:"Her gün ödev yapıyorum.",translation:"Hago la tarea todos los días."},
    {word:"demek",correct:"decir",sentence:"Bu cümle ne demek?",translation:"¿Qué significa esta frase?"},
    {word:"söylemek",correct:"decir",sentence:"Öğretmene bir şey söylüyorum.",translation:"Le digo algo al profesor."},
    {word:"almak",correct:"coger / comprar",sentence:"Marketten su alıyorum.",translation:"Compro agua en el supermercado."},
    {word:"gelmek",correct:"venir",sentence:"Annem eve geliyor.",translation:"Mi madre viene a casa."},
    {word:"vermek",correct:"dar",sentence:"Kitabı arkadaşıma veriyorum.",translation:"Le doy el libro a mi amigo."},
    {word:"görmek",correct:"ver",sentence:"Onu okulda görüyorum.",translation:"Lo/la veo en la escuela."},
    {word:"gitmek",correct:"ir",sentence:"Her sabah işe gidiyorum.",translation:"Voy al trabajo cada mañana."},
    {word:"çalışmak",correct:"trabajar / estudiar",sentence:"Akşam evde çalışıyorum.",translation:"Estudio en casa por la tarde."},
    {word:"istemek",correct:"querer",sentence:"Bir çay istiyorum.",translation:"Quiero un té."},
    {word:"bilmek",correct:"saber",sentence:"Cevabı ahora biliyorum.",translation:"Ahora sé la respuesta."},
    {word:"anlamak",correct:"entender",sentence:"Bu konuyu anlıyorum.",translation:"Entiendo este tema."},
    {word:"bakmak",correct:"mirar",sentence:"Pencereden dışarı bakıyorum.",translation:"Miro hacia afuera por la ventana."},
    {word:"kalmak",correct:"quedarse / permanecer",sentence:"Bu gece evde kalıyorum.",translation:"Me quedo en casa esta noche."},
    {word:"konuşmak",correct:"hablar / conversar",sentence:"Arkadaşımla konuşuyorum.",translation:"Hablo con mi amigo."},
    {word:"yazmak",correct:"escribir",sentence:"Deftere yazı yazıyorum.",translation:"Escribo en el cuaderno."},
    {word:"yaşamak",correct:"vivir",sentence:"Ailemle burada yaşıyorum.",translation:"Vivo aquí con mi familia."},
    {word:"getirmek",correct:"traer",sentence:"Marketten ekmek getiriyorum.",translation:"Traigo pan del supermercado."},
    {word:"kullanmak",correct:"usar / utilizar",sentence:"Bilgisayar kullanıyorum.",translation:"Uso el ordenador."},
    {word:"girmek",correct:"entrar",sentence:"Sınıfa şimdi giriyorum.",translation:"Entro en la clase ahora."},
    {word:"düşünmek",correct:"pensar",sentence:"Bunu biraz düşünüyorum.",translation:"Estoy pensando un poco en esto."},
    {word:"başlamak",correct:"empezar",sentence:"Ders ahora başlıyor.",translation:"La clase empieza ahora."},
    {word:"sormak",correct:"preguntar",sentence:"Öğretmene bir soru soruyorum.",translation:"Hago una pregunta al profesor."},
    {word:"okumak",correct:"leer",sentence:"Kitap okuyorum.",translation:"Estoy leyendo un libro."},
    {word:"içmek",correct:"beber",sentence:"Bir kahve içiyorum.",translation:"Estoy bebiendo un café."},
    {word:"dinlemek",correct:"escuchar",sentence:"Müzik dinliyorum.",translation:"Estoy escuchando música."},
    {word:"uyumak",correct:"dormir",sentence:"Çocuk uyuyor.",translation:"El niño está durmiendo."},
    {word:"yürümek",correct:"andar / caminar",sentence:"Parkta yürüyorum.",translation:"Camino en el parque."},
    {word:"koşmak",correct:"correr",sentence:"Sabah koşuyorum.",translation:"Corro por la mañana."},
    {word:"kalkmak",correct:"levantarse",sentence:"Sabah erken kalkıyorum.",translation:"Me levanto temprano por la mañana."},
    {word:"durmak",correct:"parar / detenerse",sentence:"Otobüs burada duruyor.",translation:"El autobús para aquí."},
    {word:"öğrenmek",correct:"aprender",sentence:"Türkçe öğreniyorum.",translation:"Estoy aprendiendo turco."},
    {word:"öğretmek",correct:"enseñar",sentence:"Öğretmen bize Türkçe öğretiyor.",translation:"El profesor nos enseña turco."},
    {word:"gülmek",correct:"reír",sentence:"Arkadaşım gülüyor.",translation:"Mi amigo se está riendo."},
    {word:"kesmek",correct:"cortar",sentence:"Ekmek kesiyorum.",translation:"Corto pan."},
    {word:"kapamak",correct:"cerrar",sentence:"Kapıyı kapıyorum.",translation:"Cierro la puerta."},
    {word:"açmak",correct:"abrir",sentence:"Pencereyi açıyorum.",translation:"Abro la ventana."},
    {word:"beklemek",correct:"esperar",sentence:"Otobüsü bekliyorum.",translation:"Espero el autobús."},
    {word:"götürmek",correct:"llevar",sentence:"Çantayı okula götürüyorum.",translation:"Llevo la mochila a la escuela."},
    {word:"aramak",correct:"buscar / llamar",sentence:"Arkadaşımı arıyorum.",translation:"Llamo a mi amigo."},
    {word:"ayrılmak",correct:"separarse / irse",sentence:"İşten ahora ayrılıyorum.",translation:"Salgo del trabajo ahora."},
    {word:"benzemek",correct:"parecerse",sentence:"Kardeşim sana benziyor.",translation:"Mi hermano se parece a ti."},
    {word:"bitmek",correct:"terminar / acabarse",sentence:"Film ahora bitiyor.",translation:"La película termina ahora."},
    {word:"çabalamak",correct:"esforzarse",sentence:"Çok çabalıyorum.",translation:"Me esfuerzo mucho."},
    {word:"çekmek",correct:"tirar / sacar foto",sentence:"Fotoğraf çekiyorum.",translation:"Estoy sacando una foto."},
    {word:"çevirmek",correct:"traducir / girar",sentence:"Metni Türkçeye çeviriyorum.",translation:"Estoy traduciendo el texto al turco."},
    {word:"çizmek",correct:"dibujar",sentence:"Bir resim çiziyorum.",translation:"Estoy dibujando un dibujo."},
    {word:"dinlenmek",correct:"descansar",sentence:"Evde dinleniyorum.",translation:"Estoy descansando en casa."},
    {word:"doğmak",correct:"nacer",sentence:"Güneş doğuyor.",translation:"El sol está saliendo."},
    {word:"donmak",correct:"helarse / congelarse",sentence:"Su kışın donuyor.",translation:"El agua se congela en invierno."},
    {word:"dönmek",correct:"regresar / girar",sentence:"Eve dönüyorum.",translation:"Vuelvo a casa."},
    {word:"düşmek",correct:"caer",sentence:"Top yere düşüyor.",translation:"La pelota cae al suelo."},
    {word:"düzeltmek",correct:"corregir",sentence:"Hatayı düzeltiyorum.",translation:"Estoy corrigiendo el error."},
    {word:"ezberlemek",correct:"memorizar",sentence:"Kelimeleri ezberliyorum.",translation:"Memorizo las palabras."},
    {word:"gelişmek",correct:"progresar / desarrollarse",sentence:"Türkçem gelişiyor.",translation:"Mi turco está mejorando."},
    {word:"gezmek",correct:"pasear",sentence:"Şehirde geziyorum.",translation:"Paseo por la ciudad."},
    {word:"göndermek",correct:"enviar",sentence:"Sana mensaje gönderiyorum.",translation:"Te envío un mensaje."},
    {word:"hatırlamak",correct:"recordar",sentence:"Seni hatırlıyorum.",translation:"Te recuerdo."},
    {word:"hazırlamak",correct:"preparar",sentence:"Yemek hazırlıyorum.",translation:"Estoy preparando comida."},
    {word:"hoşlanmak",correct:"gustar / disfrutar",sentence:"Müzikten hoşlanıyorum.",translation:"Me gusta la música."},
    {word:"inanmak",correct:"creer",sentence:"Sana inanıyorum.",translation:"Te creo."},
    {word:"inmek",correct:"bajar / descender",sentence:"Otobüsten iniyorum.",translation:"Me bajo del autobús."},
    {word:"itmek",correct:"empujar",sentence:"Kapıyı itiyorum.",translation:"Empujo la puerta."},
    {word:"izlemek",correct:"ver / mirar",sentence:"Film izliyorum.",translation:"Estoy viendo una película."},
    {word:"kaldırmak",correct:"levantar",sentence:"Elimi kaldırıyorum.",translation:"Levanto la mano."},
    {word:"kazanmak",correct:"ganar",sentence:"Para kazanıyorum.",translation:"Gano dinero."},
    {word:"kırmak",correct:"romper",sentence:"Bardağı kırıyorum.",translation:"Rompo el vaso."},
    {word:"kızmak",correct:"enojarse",sentence:"Öğretmen kızıyor.",translation:"El profesor se enfada."},
    {word:"korkmak",correct:"tener miedo",sentence:"Köpekten korkuyorum.",translation:"Tengo miedo del perro."},
    {word:"kucaklamak",correct:"abrazar",sentence:"Annemi kucaklıyorum.",translation:"Abrazo a mi madre."},
    {word:"pişirmek",correct:"cocinar",sentence:"Akşam yemek pişiriyorum.",translation:"Cocino la cena."},
    {word:"sanmak",correct:"creer / suponer",sentence:"Onu evde sanıyorum.",translation:"Pienso que está en casa."},
    {word:"satmak",correct:"vender",sentence:"Kitap satıyorum.",translation:"Vendo libros."},
    {word:"seçmek",correct:"escoger",sentence:"Bir renk seçiyorum.",translation:"Elijo un color."},
    {word:"seslenmek",correct:"llamar / vociferar",sentence:"Arkadaşıma sesleniyorum.",translation:"Llamo a mi amigo."},
    {word:"sevmek",correct:"amar / gustar",sentence:"Kedileri seviyorum.",translation:"Me gustan los gatos."},
    {word:"silmek",correct:"borrar / limpiar",sentence:"Masayı siliyorum.",translation:"Estoy limpiando la mesa."},
    {word:"söndürmek",correct:"apagar",sentence:"Işığı söndürüyorum.",translation:"Apago la luz."},
    {word:"sürmek",correct:"conducir / arrastrar",sentence:"Araba sürüyorum.",translation:"Conduzco un coche."},
    {word:"şişirmek",correct:"inflar",sentence:"Balonu şişiriyorum.",translation:"Estoy inflando el globo."},
    {word:"tatmak",correct:"probar / degustar",sentence:"Yemeği tadıyorum.",translation:"Estoy probando la comida."},
    {word:"tekrarlamak",correct:"repetir",sentence:"Kelimeleri tekrarlıyorum.",translation:"Repito las palabras."},
    {word:"temizlemek",correct:"limpiar",sentence:"Odayı temizliyorum.",translation:"Limpio la habitación."},
    {word:"terlemek",correct:"sudar / transpirar",sentence:"Spor yaparken terliyorum.",translation:"Sudo mientras hago deporte."},
    {word:"tutmak",correct:"sostener",sentence:"Çantayı tutuyorum.",translation:"Sostengo la bolsa."},
    {word:"uçmak",correct:"volar",sentence:"Uçak uçuyor.",translation:"El avión está volando."},
    {word:"unutmak",correct:"olvidar",sentence:"İsmi unutuyorum.",translation:"Olvido el nombre."},
    {word:"uyanmak",correct:"despertar",sentence:"Sabah erken uyanıyorum.",translation:"Me despierto temprano por la mañana."},
    {word:"varmak",correct:"llegar",sentence:"Okula geç varıyorum.",translation:"Llego tarde a la escuela."},
    {word:"yağmak",correct:"llover / nevar",sentence:"Yağmur yağıyor.",translation:"Está lloviendo."},
    {word:"ezberlemek_siir",word:"ezberlemek",correct:"memorizar",sentence:"Şiiri ezberliyorum.",translation:"Memorizo el poema."},
    {word:"yanmak",correct:"arder / quemar",sentence:"Işık yanıyor.",translation:"La luz está encendida."},
    {word:"yaratmak",correct:"crear",sentence:"Yeni bir şey yaratıyorum.",translation:"Creo algo nuevo."},
    {word:"oynamak",correct:"jugar",sentence:"Parkta oynuyorum.",translation:"Juego en el parque."},
    {word:"sevinmek",correct:"alegrarse / disfrutar",sentence:"Hediye için seviniyorum.",translation:"Me alegro por el regalo."},
    {word:"saklamak",correct:"guardar / esconder",sentence:"Parayı saklıyorum.",translation:"Guardo el dinero."},
    {word:"alışmak",correct:"acostumbrarse",sentence:"Yeni okula alışıyorum.",translation:"Me estoy acostumbrando a la nueva escuela."},
    {word:"karar vermek",correct:"decidir",sentence:"Şimdi karar veriyorum.",translation:"Estoy tomando una decisión ahora."},
    {word:"duymak",correct:"oír / sentir",sentence:"Seni iyi duyuyorum.",translation:"Te oigo bien."},
    {word:"yardım etmek",correct:"ayudar",sentence:"Arkadaşıma yardım ediyorum.",translation:"Estoy ayudando a mi amigo."},
    {word:"teşekkür etmek",correct:"dar las gracias",sentence:"Öğretmene teşekkür ediyorum.",translation:"Doy las gracias al profesor."},
    {word:"rica etmek",correct:"pedir por favor",sentence:"Sana rica ediyorum.",translation:"Te lo pido por favor."},
    {word:"kabul etmek",correct:"aceptar",sentence:"Öneriyi kabul ediyorum.",translation:"Acepto la propuesta."},
    {word:"reddetmek",correct:"rechazar",sentence:"Teklifi reddediyorum.",translation:"Rechazo la oferta."},
    {word:"ziyaret etmek",correct:"visitar",sentence:"Arkadaşımı ziyaret ediyorum.",translation:"Estoy visitando a mi amigo."},
    {word:"davet etmek",correct:"invitar",sentence:"Seni yemeğe davet ediyorum.",translation:"Te invito a cenar."},
    {word:"kontrol etmek",correct:"revisar / controlar",sentence:"Ödevi kontrol ediyorum.",translation:"Estoy revisando la tarea."},
    {word:"tercih etmek",correct:"preferir",sentence:"Çayı tercih ediyorum.",translation:"Prefiero el té."},
    {word:"fark etmek",correct:"darse cuenta",sentence:"Hatayı fark ediyorum.",translation:"Me doy cuenta del error."},
    {word:"talep etmek",correct:"solicitar",sentence:"Bilgi talep ediyorum.",translation:"Solicito información."},
    {word:"iptal etmek",correct:"cancelar",sentence:"Randevuyu iptal ediyorum.",translation:"Estoy cancelando la cita."},
    {word:"şikayet etmek",correct:"quejarse",sentence:"Komşudan şikayet ediyorum.",translation:"Me quejo del vecino."},
    {word:"hareket etmek",correct:"moverse",sentence:"Şimdi hareket ediyorum.",translation:"Me estoy moviendo ahora."},
    {word:"takip etmek",correct:"seguir",sentence:"Arkadaşımı takip ediyorum.",translation:"Sigo a mi amigo."},
    {word:"not etmek",correct:"anotar",sentence:"Önemli bilgiyi not ediyorum.",translation:"Apunto la información importante."}
];

let pool = []; 
let activeQueue = []; 
let current = null;
let lastWord = null;
let locked = false;
let gameMode = 'tr-es'; 
let currentRoundMode = 'tr-es'; 
let isMuted = false;

const BLOCK_SIZE = 25; 
const MASTERY_THRESHOLD = 5;
let score = 0;
let progress = {};

// --- FUNCIONES DE AUDIO ---

function hablarTurco(texto) {
    if (isMuted) return;
    window.speechSynthesis.cancel();
    const mensaje = new SpeechSynthesisUtterance(texto);
    const voces = window.speechSynthesis.getVoices();
    const vozEmel = voces.find(v => v.name.includes('Emel'));
    const vozTurcaGral = voces.find(v => v.lang.includes('tr'));
    if (vozEmel) mensaje.voice = vozEmel;
    else if (vozTurcaGral) mensaje.voice = vozTurcaGral;
    mensaje.lang = 'tr-TR';
    mensaje.rate = 0.75; 
    window.speechSynthesis.speak(mensaje);
}

function setupMuteButton() {
    if (document.getElementById('mute-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'mute-btn';
    btn.innerHTML = '🔊';
    btn.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000; font-size:25px; background:rgba(255,255,255,0.3); border:2px solid white; border-radius:50%; cursor:pointer; width:50px; height:50px; display:flex; align-items:center; justify-content:center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);";
    btn.onclick = toggleMute;
    document.body.appendChild(btn);
}

function toggleMute() {
    isMuted = !isMuted;
    const btn = document.getElementById('mute-btn');
    if (btn) btn.innerHTML = isMuted ? "🔇" : "🔊";
    if (isMuted) window.speechSynthesis.cancel();
}

window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };

// --- LÓGICA DEL JUEGO ---

function showMenu() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = '';
}

function setMode(mode, e) {
    gameMode = mode;
    document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
        btn.style.opacity = "0.5";
        btn.style.transform = "scale(0.95)";
    });
    if (e && e.currentTarget) {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.border = "2px solid white";
    }
    score = parseInt(localStorage.getItem(`verbs_score_${mode}`)) || 0;
    progress = JSON.parse(localStorage.getItem(`verbs_progress_${mode}`)) || {};
    const resumeBtn = document.getElementById('resume-button');
    if (resumeBtn) resumeBtn.style.display = (score > 0 || Object.keys(progress).length > 0) ? 'block' : 'none';
}

function resetAndStart() {
    localStorage.removeItem(`verbs_score_${gameMode}`);
    localStorage.removeItem(`verbs_progress_${gameMode}`);
    score = 0;
    progress = {};
    startGame();
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    
    if (!document.getElementById('sentence-container')) {
        const sCont = document.createElement('div');
        sCont.id = 'sentence-container';
        sCont.style.cssText = "margin-top: 25px; text-align: center; min-height: 60px; font-style: italic; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; width: 100%;";
        document.getElementById('game-container').appendChild(sCont);
    }

    initBlocks();
    updateUI();
    loadQuestion();
}

function initBlocks() {
    let available = allWords.filter(item => (progress[item.word] || 0) < MASTERY_THRESHOLD);
    available.sort(() => Math.random() - 0.5);
    activeQueue = available.slice(0, BLOCK_SIZE);
    pool = available.slice(BLOCK_SIZE);
}

function updateUI() {
    let total = allWords.length;
    let percent = Math.round((score / total) * 100);
    document.getElementById("score").textContent = score + " tamamlanan";
    document.getElementById("percent").textContent = "%" + percent;
}

function loadQuestion() {
    if (activeQueue.length === 0 && pool.length === 0) {
        document.getElementById("word").textContent = "TEBRİKLER! 🎉";
        document.getElementById("options").innerHTML = "";
        if(document.getElementById('sentence-container')) document.getElementById('sentence-container').innerHTML = "";
        return;
    }
    
    locked = false;
    let selectedItem;
    if (activeQueue.length > 1) {
        do {
            selectedItem = activeQueue[Math.floor(Math.random() * activeQueue.length)];
        } while (selectedItem.word === lastWord);
    } else {
        selectedItem = activeQueue[0];
    }
    
    current = selectedItem;
    lastWord = current.word;
    if (document.getElementById('sentence-container')) document.getElementById('sentence-container').innerHTML = "";

    if (gameMode === 'mixed') currentRoundMode = Math.random() > 0.5 ? 'tr-es' : 'es-tr'; 
    else currentRoundMode = gameMode;

    const wordElement = document.getElementById("word");
    const optionsContainer = document.getElementById("options");

    if (currentRoundMode === 'tr-es') {
        wordElement.textContent = current.word;
        hablarTurco(current.word);
    } else {
        wordElement.textContent = current.correct;
    }
    
    wordElement.classList.remove("word-mastered"); 
    optionsContainer.classList.remove("has-mastered");
    renderDots(current.word); 

    let correctText = (currentRoundMode === 'tr-es') ? current.correct : current.word;
    let opts = new Set([correctText]);
    while(opts.size < 4) {
        let randomItem = allWords[Math.floor(Math.random() * allWords.length)];
        let randomOpt = (currentRoundMode === 'tr-es') ? randomItem.correct : randomItem.word;
        opts.add(randomOpt);
    }

    optionsContainer.innerHTML = "";
    [...opts].sort(() => Math.random() - 0.5).forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = (e) => handleAnswer(opt, correctText, e.target);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, correct, btn) {
    if (locked) return;
    locked = true;
    const sCont = document.getElementById('sentence-container');
    let masteredThisTurn = false;

    if (sCont) {
        sCont.innerHTML = `<p style="color: #10b981; font-weight: 600; margin-bottom: 5px;">${current.sentence}</p>
                           <p style="color: #cbd5e1; font-size: 0.95rem;">${current.translation}</p>`;
        
        if (currentRoundMode === 'tr-es') {
            // Si las opciones son en español, ya escuchamos el verbo al cargar la pregunta.
            // Leemos directamente la frase.
            hablarTurco(current.sentence);
        } else {
            // Si las opciones son en turco, leemos el verbo (la respuesta correcta) y luego la frase.
            hablarTurco(current.word);
            setTimeout(() => {
                hablarTurco(current.sentence);
            }, 1200);
        }
    }

    document.querySelectorAll(".option").forEach(b => { 
        if (b.textContent === correct) b.classList.add("correct"); 
    });

    if (selected === correct) {
        const wordKey = current.word;
        progress[wordKey] = (progress[wordKey] || 0) + 1;
        if (progress[wordKey] >= MASTERY_THRESHOLD) {
            masteredThisTurn = true;
            score++;
            document.getElementById("word").classList.add("word-mastered");
        }
    } else {
        btn.classList.add("wrong");
        const wordKey = current.word;
        if(progress[wordKey] > 0) progress[wordKey] -= 1;
    }

    localStorage.setItem(`verbs_score_${gameMode}`, score);
    localStorage.setItem(`verbs_progress_${gameMode}`, JSON.stringify(progress));
    updateUI();
    renderDots(current.word, masteredThisTurn);

    setTimeout(() => {
        if (masteredThisTurn) {
            activeQueue = activeQueue.filter(x => x.word !== current.word);
            if (pool.length > 0) activeQueue.push(pool.shift());
        }
        loadQuestion();
    }, 4000); 
}

function renderDots(wordKey, mastered = false) {
    let container = document.getElementById("dots");
    if (!container) return;
    container.innerHTML = "";
    let val = progress[wordKey] || 0;
    for (let i = 0; i < MASTERY_THRESHOLD; i++) {
        let d = document.createElement("div");
        d.className = "dot" + (i < val ? " active" : "") + (mastered ? " mastered" : "");
        container.appendChild(d);
    }
}

window.onload = () => {
    setupMuteButton();
    const firstBtn = document.querySelector('#mode-selector button');
    if(firstBtn) setMode('tr-es', { currentTarget: firstBtn });
}