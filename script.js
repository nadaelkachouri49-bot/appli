/* ================================================================
   CYBERGUIDE PRO - PROFESSIONAL JAVASCRIPT
   High-utility script for cybersecurity intelligence platform
================================================================ */

'use strict';

// === APPLICATION CONFIGURATION ===
const CONFIG = {
    APP_NAME: 'CyberGuide Pro',
    VERSION: '1.0.0',
    AUTO_SAVE_INTERVAL: 2000,
    NOTIFICATION_DURATION: 3500,
    STORAGE_PREFIX: 'cyberguide_'
};

// === ORIGINAL PROMPT TEMPLATE ===
const ORIGINAL_PROMPT = `TU ES :
Un rédacteur interne chargé de la prévention en cybersécurité au sein de l'entreprise Bioplants (PME).
Tu produis une newsletter interne diffusée via la messagerie professionnelle.

POSITIONNEMENT ÉDITORIAL :
Cette newsletter est une INFORMATION INTERNE À DESTINATION DES ÉQUIPES.
Elle adopte un ton presse interne :
- factuel
- actuel
- clair
- rapide à lire
L'article partagé est le cœur de l'information.
La newsletter sert à contextualiser et à donner envie de lire.

CONTEXTE GÉNÉRAL :
- Une campagne de phishing simulée a déjà été réalisée.
- Une réunion formative a déjà eu lieu.
- Les thèmes déjà abordés sont :
  phishing, ransomware, vol d'identifiants, intrusion, zero-day.
- Les équipes ont déjà été sensibilisées.

RÈGLE MAJEURE DE PERTINENCE (OBLIGATOIRE) :
- Tu NE mentionnes les actions déjà menées (campagne, réunion, sensibilisation)
  QUE SI l'article traite d'une attaque ou d'un scénario en lien direct
  avec ces sujets.
- Dans ce cas :
  → Faire un rappel bref et naturel.
  → Montrer que le sujet fait écho à ce qui a déjà été vu.
  → Renforcer la compréhension, sans refaire la prévention.
- SI l'article traite d'un autre sujet (nouvelle menace, autre vecteur,
  autre type d'attaque ou autre angle) :
  → NE PAS mentionner les actions passées.
  → Ne pas forcer le lien.
  → Rester centré sur l'information actuelle.
- La règle absolue :
  → Tout ce qui est écrit doit être utile, logique et adapté au thème.
  → Aucune mention automatique ou décorative.

OBJECTIF RÉEL :
Partager une actualité cyber récente.
Expliquer brièvement pourquoi elle concerne une PME comme Bioplants.
Centraliser l'attention sur l'article partagé.
Inviter clairement à la lecture pour comprendre le sujet plus en profondeur.

STYLE OBLIGATOIRE :
- Style presse interne / information équipe.
- Ton neutre, professionnel, fluide.
- Texte dynamique, direct.
- UN SEUL PARAGRAPHE pour le contenu principal.
- Phrases courtes.
- Aucun ton alarmiste.
- Aucune injonction.
- Aucun rappel de gestes simples.

INTERDICTIONS ABSOLUES (NE JAMAIS UTILISER) :
concrètement
globalement
en effet
cependant
toutefois
notamment
par ailleurs
ainsi
afin de
dans ce contexte
il est important de
il convient de
cela permet de
dans le cadre de
en résumé
en conclusion

VERBES À BANNIR :
permettre
viser
optimiser
améliorer
garantir
assurer
faciliter
s'inscrire dans
contribuer à

MOTS "RAPPORT / DOSSIER" INTERDITS :
démarche
objectif
enjeu
stratégie
processus
cadre
mise en place
analyse
approche
structuré

SI UN MOT FAIT "DOCUMENT ACADÉMIQUE" → TU LE SUPPRIMES.

OBLIGATION SUR LE TITRE :
- Tu dois proposer UN TITRE.
- Le titre doit être :
  → pertinent,
  → informatif,
  → directement lié à l'article partagé,
  → style presse interne.
- Pas de jargon.
- Pas d'emoji.
- Pas de titre vague.

STRUCTURE OBLIGATOIRE DU RENDU :
Le rendu doit être un EMAIL.
Le contenu de la newsletter doit être clairement identifiable à l'intérieur du mail.
Le texte ne doit pas remplacer l'article, mais servir d'introduction.

FORME FINALE À RESPECTER :

Subject :
[TITRE DE LA NEWSLETTER – OBLIGATOIRE, PERTINENT]

To :
Équipe Bioplants

Corps de l'email :

Bonjour à toutes et à tous,

[CONTENU DE LA NEWSLETTER — UN SEUL PARAGRAPHE]
→ Ce paragraphe :
- situe brièvement l'actualité cyber,
- explique pourquoi elle peut concerner une PME comme Bioplants,
- fait un lien avec les actions passées UNIQUEMENT si c'est pertinent,
- reste volontairement non détaillé,
- renvoie clairement vers l'article pour comprendre le sujet.

À lire cette semaine :
[TITRE DE L'ARTICLE À INSÉRER]
Source : [SOURCE – site officiel ou média spécialisé]

Phrase de fin neutre, type information interne,
orientée vers la lecture de l'article.

Signature :
[Nom]
[Fonction]

ADN BIOPLANTS À FAIRE RESSENTIR (SANS LE DIRE) :
PME
Réalisme terrain
Responsabilité collective
Information partagée
Continuité de l'activité

RÈGLE FINALE :
Si un lien est forcé → le texte est faux.
Si une action passée est mentionnée sans rapport → le texte est faux.
Si tout est cohérent, pertinent et centré sur l'article → le texte est validé.`;

// === TRUSTED CYBERSECURITY SOURCES ===
const CYBERSECURITY_SOURCES = [
    { name: 'ANSSI', url: 'https://www.ssi.gouv.fr', category: 'Officiel FR' },
    { name: 'CERT-FR', url: 'https://www.cert.ssi.gouv.fr', category: 'Officiel FR' },
    { name: 'CISA', url: 'https://www.cisa.gov', category: 'Officiel US' },
    { name: 'MITRE ATT&CK', url: 'https://attack.mitre.org', category: 'Framework' },
    { name: 'CVE Database', url: 'https://cve.mitre.org', category: 'Database' },
    { name: 'NVD - NIST', url: 'https://nvd.nist.gov', category: 'Database' },
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com', category: 'Blog Expert' },
    { name: 'The Hacker News', url: 'https://thehackernews.com', category: 'Actualités' },
    { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com', category: 'Actualités' },
    { name: 'SANS ISC', url: 'https://isc.sans.edu', category: 'Analysis' },
    { name: 'Schneier on Security', url: 'https://www.schneier.com', category: 'Blog Expert' },
    { name: 'Threatpost', url: 'https://threatpost.com', category: 'Actualités' },
    { name: 'Dark Reading', url: 'https://www.darkreading.com', category: 'Actualités' },
    { name: 'SecurityWeek', url: 'https://www.securityweek.com', category: 'Actualités' },
    { name: 'ZDNet Security', url: 'https://www.zdnet.com/topic/security/', category: 'Actualités' },
    { name: 'Ars Technica Security', url: 'https://arstechnica.com/security/', category: 'Actualités' }
];

// === INTELLIGENCE KEYWORDS ===
const INTELLIGENCE_KEYWORDS = [
    'ransomware',
    'phishing attack',
    'data breach',
    'zero-day vulnerability',
    'cybersecurity threat',
    'malware analysis',
    'security incident',
    'CVE vulnerability',
    'APT attack',
    'social engineering',
    'DDoS attack',
    'supply chain attack',
    'credential theft',
    'cyber espionage',
    'security patch',
    'threat intelligence'
];

// === APPLICATION STATE ===
const AppState = {
    copyCount: 0,
    autoSaveTimer: null,
    
    init() {
        this.copyCount = this.getStoredCopyCount();
        this.updateCopyCounter();
    },
    
    incrementCopyCount() {
        this.copyCount++;
        this.updateCopyCounter();
        this.storeCopyCount();
    },
    
    updateCopyCounter() {
        const counter = document.getElementById('copyCounter');
        if (counter) {
            counter.textContent = this.copyCount;
        }
    },
    
    getStoredCopyCount() {
        const stored = localStorage.getItem(CONFIG.STORAGE_PREFIX + 'copy_count');
        return stored ? parseInt(stored, 10) : 0;
    },
    
    storeCopyCount() {
        localStorage.setItem(CONFIG.STORAGE_PREFIX + 'copy_count', this.copyCount.toString());
    }
};

// === UTILITIES ===
const Utils = {
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            console.error('Clipboard copy failed:', error);
            return false;
        }
    },
    
    formatTime(date) {
        return new Intl.DateTimeFormat('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date);
    },
    
    showNotification(message) {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, CONFIG.NOTIFICATION_DURATION);
    }
};

// === CLOCK UPDATE ===
function initializeClock() {
    function updateClock() {
        const now = new Date();
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = Utils.formatTime(now);
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// === GENERATE SOURCES ===
function generateSources() {
    const grid = document.getElementById('sourcesGrid');
    if (!grid) return;
    
    const html = CYBERSECURITY_SOURCES.map(source => `
        <div class="source-item">
            <div class="source-header">
                <div class="source-name">${source.name}</div>
                <div class="source-category">${source.category}</div>
            </div>
            <div class="source-url">${source.url}</div>
            <div class="source-actions">
                <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-btn">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Ouvrir</span>
                </a>
                <button class="source-btn" onclick="copySourceURL('${source.url}')">
                    <i class="fas fa-copy"></i>
                    <span>Copier</span>
                </button>
            </div>
        </div>
    `).join('');
    
    grid.innerHTML = html;
}

async function copySourceURL(url) {
    const success = await Utils.copyToClipboard(url);
    if (success) {
        AppState.incrementCopyCount();
        Utils.showNotification('URL copiée dans le presse-papier');
    }
}

// === GENERATE KEYWORDS ===
function generateKeywords() {
    const grid = document.getElementById('keywordsGrid');
    if (!grid) return;
    
    const html = INTELLIGENCE_KEYWORDS.map(keyword => `
        <div class="keyword-tag" onclick="copyKeyword('${keyword}')">
            <span>${keyword}</span>
        </div>
    `).join('');
    
    grid.innerHTML = html;
}

async function copyKeyword(keyword) {
    const success = await Utils.copyToClipboard(keyword);
    if (success) {
        AppState.incrementCopyCount();
        Utils.showNotification(`Mot-clé "${keyword}" copié`);
    }
}

// === COPY ALL KEYWORDS ===
function setupCopyAllKeywords() {
    const button = document.getElementById('copyAllKeywordsBtn');
    if (!button) return;
    
    button.addEventListener('click', async () => {
        const allKeywords = INTELLIGENCE_KEYWORDS.join(', ');
        const success = await Utils.copyToClipboard(allKeywords);
        if (success) {
            AppState.incrementCopyCount();
            Utils.showNotification('Tous les mots-clés ont été copiés');
        }
    });
}

// === PROMPT EDITOR ===
function initializePromptEditor() {
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    // Load saved or original prompt
    const savedPrompt = localStorage.getItem(CONFIG.STORAGE_PREFIX + 'prompt');
    editor.value = savedPrompt || ORIGINAL_PROMPT;
    
    // Update statistics
    updateEditorStats();
    
    // Auto-save on input
    editor.addEventListener('input', () => {
        updateEditorStats();
        scheduleAutoSave();
    });
}

function updateEditorStats() {
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    const text = editor.value;
    const characters = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    
    document.getElementById('charCount').textContent = characters;
    document.getElementById('wordCount').textContent = words;
    document.getElementById('lineCount').textContent = lines;
}

function scheduleAutoSave() {
    clearTimeout(AppState.autoSaveTimer);
    AppState.autoSaveTimer = setTimeout(() => {
        const editor = document.getElementById('promptEditor');
        if (editor) {
            localStorage.setItem(CONFIG.STORAGE_PREFIX + 'prompt', editor.value);
            console.log('Prompt auto-saved');
        }
    }, CONFIG.AUTO_SAVE_INTERVAL);
}

// === PROMPT ACTIONS ===
async function copyPrompt() {
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    const success = await Utils.copyToClipboard(editor.value);
    if (success) {
        AppState.incrementCopyCount();
        Utils.showNotification('Prompt copié - Prêt à être utilisé dans votre IA');
    }
}

function savePrompt() {
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    localStorage.setItem(CONFIG.STORAGE_PREFIX + 'prompt', editor.value);
    Utils.showNotification('Prompt sauvegardé avec succès');
}

function formatPrompt() {
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    let text = editor.value;
    
    // Remove multiple spaces
    text = text.replace(/[ \t]+/g, ' ');
    
    // Remove multiple blank lines
    text = text.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Trim
    text = text.trim();
    
    editor.value = text;
    updateEditorStats();
    Utils.showNotification('Prompt formaté');
}

function clearPrompt() {
    if (!confirm('Confirmer la suppression du contenu actuel ?')) return;
    
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    editor.value = '';
    updateEditorStats();
    Utils.showNotification('Contenu effacé');
}

function resetPrompt() {
    if (!confirm('Restaurer le prompt original ? Les modifications actuelles seront perdues.')) return;
    
    const editor = document.getElementById('promptEditor');
    if (!editor) return;
    
    editor.value = ORIGINAL_PROMPT;
    localStorage.removeItem(CONFIG.STORAGE_PREFIX + 'prompt');
    updateEditorStats();
    Utils.showNotification('Prompt restauré à la version originale');
}

// === APPLICATION INITIALIZATION ===
function initializeApplication() {
    console.log(`${CONFIG.APP_NAME} v${CONFIG.VERSION} - Initialization started`);
    
    // Initialize state
    AppState.init();
    
    // Initialize components
    initializeClock();
    generateSources();
    generateKeywords();
    setupCopyAllKeywords();
    initializePromptEditor();
    
    console.log('Application initialized successfully');
}

// === GLOBAL EXPORTS ===
window.copySourceURL = copySourceURL;
window.copyKeyword = copyKeyword;
window.copyPrompt = copyPrompt;
window.savePrompt = savePrompt;
window.formatPrompt = formatPrompt;
window.clearPrompt = clearPrompt;
window.resetPrompt = resetPrompt;

// === START APPLICATION ===
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApplication);
} else {
    initializeApplication();
}