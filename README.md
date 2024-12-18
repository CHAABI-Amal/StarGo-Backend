
# StarGo-Backend🚀<br>

Le backend de l'application **StarGo** permet la gestion des utilisateurs, des activités physiques, et de la gamification via une API REST construite avec **NestJS**. Ce serveur<br>
supporte les fonctionnalités essentielles comme l'authentification, le suivi des objectifs et le calcul des points pour encourager l'engagement des utilisateurs.

---

## 🛠 **Technologies Utilisées**<br>
- *Node.js* + *NestJS* : Framework pour l'API REST.<br>
- *MongoDB / PostgreSQL* : Bases de données.<br>
- *JWT* : Gestion de l'authentification sécurisée.<br>
- *Firebase* : Notifications push.<br>
- *Google Maps API / Mapbox** : Services pour le suivi GPS.<br>

---

## 📂 Architecture<br>

L'architecture suit une structure modulaire :<br>

```bash
src/
|-- auth/                # Module d'authentification (JWT)
|-- users/               # Gestion des utilisateurs
|-- activities/          # Suivi des objectifs et des activités
|-- gamification/        # Calcul des points et gestion des badges
|-- database/            # Configuration PostgreSQL/MongoDB
`-- main.ts              # Point d'entrée principal
```

---

## ⚙️ **Fonctionnalités Principales**<br>
- *Authentification** : Inscription et connexion des utilisateurs avec JWT.<br>
- *Gestion des Objectifs** : Définition et enregistrement des objectifs (distance ou calories).<br>
- *Suivi des Activités** : Calcul des distances parcourues et des calories brûlées en temps réel.<br>
- *Gamification** :<br>
   - Calcul des points.<br>
   - Déblocage de badges pour atteindre des objectifs.<br>
- *Notifications Push** : Motiver les utilisateurs via Firebase.<br>

---

## 👤 *Auteur**<br>
*Amal CHAABI**<br>
📧 Contact : [chaabiamal2002@gmail.com](mailto:chaabiamal2002@gmail.com)<br>
🔗 GitHub : [CHAABI-Amal](https://github.com/CHAABI-Amal)<br>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

