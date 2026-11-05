# La Graine et les Saveurs : infos à demander au restaurant

Ce qui manque pour finaliser le site, et où le mettre une fois reçu.

| # | À demander | Pourquoi | Où le mettre |
|---|---|---|---|
| 1 | **La carte complète et les prix en salle** (photo de la carte ou de la story « Menu ») | Les prix affichés viennent d'Uber Eats et de Deliveroo, souvent plus chers qu'en salle. Les tajines n'y figurent pas | `data/carte.json` (prix) et `locales/*.json → carte.items` (noms, descriptions) |
| 2 | **Les bons horaires** (story « Horaires ») | Relevés sur Rankeat, non confirmés. Ils servent au statut « Ouvert / Fermé » en direct et aux heures de réservation | `data/horaires.json → week` |
| 3 | **L'offre -10 %** : toujours valable ? conditions, dates | Le bandeau est prêt mais éteint | `data/annonces.json → offre-10` (passer `active` à `true`) |
| 4 | **Le menu et les horaires du Ramadan** | La section Ramadan s'affiche seule du 25 janvier au 9 mars 2027. Le menu et les horaires actuels sont provisoires | `data/saisons.json`, `data/horaires.json → periods`, `locales/*.json → ramadan` |
| 5 | **Un portable pour WhatsApp** | Le 09 78 81 28 24 est une ligne fixe, sans WhatsApp | `data/site.json → whatsapp` (format 336XXXXXXXX) |
| 6 | **L'adresse e-mail** qui reçoit les réservations | Pour activer l'envoi automatique des demandes (Resend) | Vercel : `BOOKING_NOTIFY_EMAIL`, `RESEND_API_KEY`, `RESEND_FROM` |
| 7 | **Des photos des plats et de la salle** : tajines, sandwichs, pâtisseries, thé à la menthe, façade, salle pleine | Seules 6 photos existent : 9 plats sont illustrés par un dessin au trait en attendant | Déposer dans `assets/a-photographier/`, puis `scripts/media.mjs` et `data/carte.json → image` |
| 8 | **Le logo d'origine** (fichier vectoriel, PDF ou PNG haute définition) | Le logo actuel est redessiné à partir de la photo de profil Instagram | Remplacer `public/logo.svg` et `components/logo-paths.json` |
| 9 | **SIRET, raison sociale, nom du responsable** | Obligatoire pour les mentions légales | `data/site.json → legal` |
| 10 | **Validation du nom arabe** « الحبّة والنّكهات » et des textes en arabe | Traduction proposée, à faire relire | `data/site.json → nameAr`, `locales/ar.json` |
| 11 | **Avis clients** de la story « Vos retours », avec l'accord des auteurs | La section « Vos retours » n'affiche que la note Google tant qu'il n'y en a pas | `data/avis.json` |
| 12 | **Le texte « Le couscous maison »** : la semoule est-elle bien roulée à la main ? quels légumes ? | Description écrite d'après les photos et les fiches de livraison | `locales/*.json → house` |
| 13 | **Moyens de paiement** acceptés au restaurant (carte, espèces, titres-restaurant) | Non mentionnés pour l'instant dans la FAQ | `locales/*.json → faq` |
| 14 | **Le nom de domaine** souhaité (ex. lagraineetlessaveurs.fr) | Pour remplacer l'adresse vercel.app, et pour l'envoi des e-mails | Vercel → Domains, puis `data/site.json → url`, relancer `npm run affichette` |

Après chaque modification : `git push` redéploie le site automatiquement.
