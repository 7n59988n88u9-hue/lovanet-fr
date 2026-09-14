# Retirer YouTube, TikTok et les lecteurs vidéo

## Résultat attendu
- Supprimer les pages YouTube, YouTube Manga, TikTok, Prime Vidéo et Lecteurs vidéo.
- Retirer tous leurs accès des menus, raccourcis et redirections.
- Retirer les lecteurs YouTube, TikTok et bandes-annonces intégrés des pages conservées, sans supprimer les autres contenus.
- Arrêter les synchronisations automatiques YouTube/TikTok, y compris le doublon de `youtube-anime-sync` et l’analyse IA des miniatures.

## Mise en œuvre
- Nettoyer les routes et la navigation, puis rediriger les anciennes adresses retirées vers le portail.
- Remplacer les zones de lecture des pages Catalogue, Actualités, À venir, Magasin et Portail par leurs visuels statiques existants.
- Retirer les déclenchements côté navigateur et désactiver les tâches planifiées YouTube/TikTok dans le backend.
- Conserver les éléments non liés à la lecture vidéo, notamment la musique, les images et les animations décoratives.

## Vérification
- Vérifier qu’aucun menu ni page accessible ne propose YouTube, TikTok, Prime Vidéo ou un lecteur vidéo.
- Vérifier que les anciennes adresses reviennent au portail.
- Confirmer que les tâches automatiques YouTube/TikTok ne sont plus actives et que le site fonctionne sans erreur.
