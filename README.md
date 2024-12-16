<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
 
# StarGo-Backend 🚀

Le backend de l’application **StarGo** permet la gestion des utilisateurs, des activités physiques, et de la gamification via une API REST construite avec **NestJS**. Ce serveur supporte les fonctionnalités essentielles comme l'authentification, le suivi des objectifs et le calcul des points pour encourager l’engagement des utilisateurs.

---

## 🛠 **Technologies Utilisées**
- **Node.js** + **NestJS** : Framework pour l'API REST.
- **MongoDB / PostgreSQL** : Bases de données.
- **JWT** : Gestion de l’authentification sécurisée.
- **Firebase** : Notifications push.
- **Google Maps API / Mapbox** : Services pour le suivi GPS.

---

## 📂 **Architecture**
L’architecture suit une structure modulaire :

```bash
src/
│── auth/                # Module d'authentification (JWT)
│── users/               # Gestion des utilisateurs
│── activities/          # Suivi des objectifs et des activités
│── gamification/        # Calcul des points et gestion des badges
│── database/            # Configuration PostgreSQL/MongoDB
└── main.ts              # Point d’entrée principal
⚙️ Fonctionnalités Principales
Authentification : Inscription et connexion des utilisateurs avec JWT.
Gestion des Objectifs : Définition et enregistrement des objectifs (distance ou calories).
Suivi des Activités : Calcul des distances parcourues et des calories brûlées en temps réel.
Gamification :
Calcul des points.
Déblocage de badges pour atteindre des objectifs.
Notifications Push : Motiver les utilisateurs via Firebase.
👤 Auteur
Amal CHAABI
📧 Contact : chaabiamal2002@gmail.com
🔗 GitHub : CHAABI-Amal

