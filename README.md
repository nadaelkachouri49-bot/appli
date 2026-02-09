# CYBERGUIDE PRO - PLATEFORME DE VEILLE CYBERSÉCURITÉ

## DESCRIPTION

CyberGuide Pro est une plateforme web professionnelle conçue pour faciliter la veille en cybersécurité au sein de l'entreprise Bioplants. Interface sophistiquée avec design sombre, optimisée pour un usage quotidien.

## CARACTÉRISTIQUES PRINCIPALES

### Architecture Technique
- HTML5 sémantique et structuré
- CSS3 avec système de design avancé
- JavaScript ES6+ modulaire
- Aucune dépendance externe (hors CDN fonts et icons)
- LocalStorage pour persistance des données

### Design Professionnel
- Thème sombre avec palette noir/cyan/vert
- Glassmorphism et effets backdrop-filter
- Animations GPU-accelerated 60 FPS
- Responsive design (Desktop, Tablet, Mobile)
- Typographie professionnelle (Inter, JetBrains Mono, Roboto)

### Performance
- Chargement instantané
- Code optimisé et minifiable
- Transitions fluides
- Auto-save intelligent

## STRUCTURE DE LA PLATEFORME

### Section 1: Accès Rapide
Liens directs vers les trois outils principaux:
- Feedly (Agrégateur RSS de veille)
- Outlook (Messagerie professionnelle)
- Perplexity AI (Moteur de recherche intelligent)

Fonctionnalités:
- Ouverture dans nouvel onglet
- Cartes interactives avec effets hover
- Badges catégorie
- Animations fluides

### Section 2: Sources Fiables
16 sources cybersécurité organisées par catégorie:

**Organismes Officiels France:**
- ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)
- CERT-FR (Centre gouvernemental de veille)

**Organismes Officiels USA:**
- CISA (Cybersecurity and Infrastructure Security Agency)
- NVD - NIST (National Vulnerability Database)

**Frameworks et Bases de données:**
- MITRE ATT&CK (Framework d'attaques)
- CVE Database (Common Vulnerabilities and Exposures)

**Médias Spécialisés:**
- Krebs on Security
- The Hacker News
- BleepingComputer
- Threatpost
- Dark Reading
- SecurityWeek
- ZDNet Security
- Ars Technica Security

**Blogs Experts:**
- SANS ISC (Internet Storm Center)
- Schneier on Security

Fonctionnalités par source:
- Bouton "Ouvrir" (ouverture nouvel onglet)
- Bouton "Copier" (copie URL dans presse-papier)
- Catégorisation visuelle
- Compteur de copies

### Section 3: Mots-clés de Veille
16 termes de recherche pour Feedly:
- ransomware
- phishing attack
- data breach
- zero-day vulnerability
- cybersecurity threat
- malware analysis
- security incident
- CVE vulnerability
- APT attack
- social engineering
- DDoS attack
- supply chain attack
- credential theft
- cyber espionage
- security patch
- threat intelligence

Fonctionnalités:
- Copie individuelle par clic
- Bouton "Copier tous les mots-clés"
- Effet hover avec remplissage
- Notification de confirmation

### Section 4: Template Newsletter
Éditeur de prompt complet avec le template Bioplants.

**Barre d'outils:**
- Statistiques temps réel (caractères, mots, lignes)
- Bouton Formater (nettoie espaces et lignes)
- Bouton Effacer (avec confirmation)
- Bouton Restaurer (version originale)

**Zone d'édition:**
- Textarea grande taille (560px minimum)
- Police monospace pour lisibilité
- Redimensionnable verticalement
- Coloration syntaxique préservée

**Actions:**
- Sauvegarder (sauvegarde manuelle)
- Copier le prompt (copie intégrale pour IA)

**Automatisations:**
- Auto-save après 2 secondes d'inactivité
- Persistance LocalStorage
- Restauration automatique au chargement
- Statistiques actualisées en temps réel

## INSTALLATION

### Prérequis
Navigateur web moderne (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Étapes
1. Télécharger les 3 fichiers
2. Placer dans le même répertoire
3. Ouvrir index.html dans le navigateur

Structure requise:
```
repertoire/
├── index.html
├── style.css
└── script.js
```

Aucune installation serveur requise.
Aucune configuration nécessaire.

## UTILISATION

### Workflow Type

**Étape 1: Consultation des outils**
Cliquer sur Feedly pour accéder aux flux de veille RSS

**Étape 2: Recherche ciblée**
Copier un mot-clé pertinent et l'utiliser dans Feedly ou Perplexity

**Étape 3: Consultation sources**
Parcourir les sites fiables pour actualités et alertes

**Étape 4: Rédaction newsletter**
- Copier le prompt complet
- Ouvrir ChatGPT, Claude ou Perplexity
- Coller le prompt + article trouvé
- Générer la newsletter

**Étape 5: Diffusion**
Ouvrir Outlook et envoyer à l'équipe

### Fonctionnalités Avancées

**Copie intelligente:**
Chaque copie (mot-clé, URL, prompt) incrémente le compteur global.

**Sauvegarde automatique:**
Le prompt est automatiquement sauvegardé toutes les 2 secondes après modification.

**Persistance des données:**
Toutes les données sont conservées dans le navigateur via LocalStorage.

**Notifications:**
Confirmation visuelle pour chaque action (copie, sauvegarde, etc.).

## PERSONNALISATION

### Modification des Couleurs
Fichier: style.css
Section: CSS Variables (lignes 15-60)

```css
:root {
    --color-primary: #00d4ff;      /* Couleur primaire */
    --color-secondary: #00ff99;    /* Couleur secondaire */
    --color-background: #000000;   /* Fond principal */
}
```

### Ajout de Sources
Fichier: script.js
Constante: CYBERSECURITY_SOURCES

```javascript
const CYBERSECURITY_SOURCES = [
    { 
        name: 'Nom Source', 
        url: 'https://url.com', 
        category: 'Catégorie' 
    },
    // Ajouter ici
];
```

### Ajout de Mots-clés
Fichier: script.js
Constante: INTELLIGENCE_KEYWORDS

```javascript
const INTELLIGENCE_KEYWORDS = [
    'nouveau-mot-clé',
    // Ajouter ici
];
```

### Modification du Prompt
Fichier: script.js
Constante: ORIGINAL_PROMPT

Modifier le contenu entre les backticks pour changer le template par défaut.

## TECHNOLOGIES

### Frontend
- HTML5 (structure sémantique)
- CSS3 (variables, Grid, Flexbox, animations)
- JavaScript ES6+ (modules, async/await)

### Bibliothèques Externes (CDN)
- Font Awesome 6.5.1 (icônes vectorielles)
- Google Fonts (Inter, JetBrains Mono, Roboto)

### APIs Navigateur
- Clipboard API (copie presse-papier)
- LocalStorage API (persistance données)
- Intl API (formatage date/heure)

## COMPATIBILITÉ

### Navigateurs Supportés
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+
- Microsoft Edge 90+

### Résolutions Testées
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024
- Mobile: 375x667, 414x896

### Systèmes d'Exploitation
- Windows 10/11
- macOS 11+
- Linux (distributions récentes)
- iOS 14+
- Android 10+

## ARCHITECTURE DU CODE

### HTML (index.html)
Structure sémantique en 4 sections principales:
- Header (branding + statistiques)
- Section Accès Rapide (3 cartes)
- Section Sources (grid 16 items)
- Section Mots-clés (grid flexible)
- Section Prompt (éditeur complet)
- Footer (copyright)
- Container notifications

### CSS (style.css)
Organisation modulaire:
- Variables CSS (design system complet)
- Reset et base styles
- Background effects
- Layout components (header, sections, footer)
- Card components
- Editor components
- Responsive breakpoints
- Animations et transitions

### JavaScript (script.js)
Architecture fonctionnelle:
- Configuration globale
- Constantes de données
- État application (AppState)
- Utilitaires (Utils)
- Générateurs de contenu
- Gestionnaires d'événements
- Système de notification
- Auto-save intelligent
- Exports globaux

## SÉCURITÉ

### Bonnes Pratiques Implémentées
- Aucune évaluation de code dynamique (eval)
- Validation des entrées utilisateur
- Sanitization des données affichées
- Liens externes avec rel="noopener noreferrer"
- Stockage local uniquement (pas de transmission réseau)
- Aucune donnée sensible stockée

### Recommandations
- Utiliser sur poste de travail sécurisé
- Ne pas partager le fichier avec données sensibles
- Vider le LocalStorage si utilisation partagée

## MAINTENANCE

### Mise à Jour des Sources
Modifier le tableau CYBERSECURITY_SOURCES dans script.js.
Relancer la page pour voir les changements.

### Mise à Jour des Mots-clés
Modifier le tableau INTELLIGENCE_KEYWORDS dans script.js.
Relancer la page pour voir les changements.

### Mise à Jour du Prompt
Modifier la constante ORIGINAL_PROMPT dans script.js.
Utiliser le bouton "Restaurer" dans l'interface.

## DÉPANNAGE

### Le prompt ne se sauvegarde pas
Vérifier que le LocalStorage est activé dans le navigateur.
Vérifier l'espace disponible (quota LocalStorage).

### Les notifications n'apparaissent pas
Vérifier la console navigateur (F12) pour erreurs JavaScript.
Vérifier que le conteneur notifications est présent dans le DOM.

### Les styles ne s'appliquent pas
Vérifier que style.css est dans le même répertoire.
Vider le cache navigateur (Ctrl+F5).

### Les fonctions de copie ne marchent pas
Vérifier que le site est servi en HTTPS ou localhost.
L'API Clipboard nécessite un contexte sécurisé.

## SUPPORT

Pour toute question technique:
1. Consulter ce fichier README
2. Vérifier la console navigateur (F12)
3. Tester dans un autre navigateur
4. Vider le cache et recharger

## VERSIONS

### Version 1.0.0 (Actuelle)
- Interface complète 4 sections
- 16 sources cybersécurité
- 16 mots-clés de veille
- Éditeur prompt avec auto-save
- Design professionnel noir/cyan
- Responsive complet
- Système de notifications

## LICENCE

Usage interne Bioplants PME.
Tous droits réservés.

## CRÉDITS

Développé pour le département Cybersécurité de Bioplants.
Design system inspiré des meilleures pratiques 2024.
Icônes: Font Awesome
Typographie: Google Fonts

---

CyberGuide Pro - Plateforme Professionnelle de Veille Cybersécurité
Version 1.0.0 - 2024