# 💙 LOVIA Web

> Plateforme de matchmaking nouvelle génération basée sur la compatibilité, les intentions et des relations sérieuses.

---

## 🚀 À propos du projet

LOVIA est une application conçue pour transformer la manière dont les relations se construisent à l’ère numérique.

Contrairement aux applications de rencontre traditionnelles basées sur le swipe, LOVIA met l’accent sur :
- des profils approfondis
- des intentions claires
- une compatibilité réelle

🎯 Objectif : favoriser des connexions significatives et durables.

---

## 🧠 Fonctionnalités principales

### 🔐 Authentification
- Inscription avec email et mot de passe
- Connexion sécurisée
- Gestion de session
- (À venir) Réinitialisation de mot de passe

---

### 🧾 Onboarding intelligent (Système des 4 piliers)

#### 🟦 Pilier A — Intentions & Statut
- Statut marital (célibataire, divorcé, etc.)
- Intentions :
  - Marriage-first
  - Long-term
  - Casual
- Indicateur de transparence

---

#### 🟩 Pilier B — Stabilité & Vie
- Type d’activité (employé, entrepreneur, etc.)
- Niveau de stabilité
- Note vocale de présentation

---

#### 🟨 Pilier C — Localisation précise
- Pays
- Ville
- Commune
- Quartier
- Avenue

📍 Permet un matching basé sur la proximité réelle

---

#### 🟥 Pilier D — Préférences & attentes
- Attributs personnels (religion, lifestyle, etc.)
- Exigences / non-négociables
- Objectifs relationnels

---

### 🏠 Dashboard (Découverte)
- Profils recommandés
- Score de compatibilité (%)
- Distance entre utilisateurs
- Badge d’intention
- Interface sans swipe

---

### ❤️ Système de Match — Rule of 3
- Maximum 3 matchs actifs
- Blocage automatique si limite atteinte
- Matching basé sur compatibilité

🎯 Moins de bruit, plus de qualité

---

### 💬 Messagerie
- Chat en temps réel (UI)
- Messages texte
- (À venir) messages vocaux

⏱️ Règle des 48h :
- Pas de message → match supprimé
- Slot libéré automatiquement

---

### 👤 Profil utilisateur
- Profil complet basé sur les 4 piliers
- Galerie photo
- Lecture de note vocale
- Modification des informations

---

### ⚙️ Paramètres
- Gestion du compte
- Confidentialité
- Déconnexion

---

## 🧠 Logique produit

LOVIA repose sur 3 principes clés :

1. 🎯 Compatibilité avant interaction  
2. 🧭 Intentions claires dès le départ  
3. ⚖️ Limitation des distractions (Rule of 3)  

---

## 🏗️ Architecture Frontend

```bash
src/
├── components/
│   ├── ui/
│   ├── layout/
│
├── pages/
│   ├── auth/
│   ├── onboarding/
│   ├── app/
│
├── routes/
├── services/
├── hooks/
├── store/
├── types/
├── utils/
├── assets/
├── App.tsx
└── main.tsx
