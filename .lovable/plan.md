# Corriger navigation, cohérence visuelle et domaines

## Objectif
Rendre la languette gauche aussi fiable que celle de droite, aligner Catalogue et Classement sur le langage visuel d’Actualités, puis republier la version actuelle avec des redirections vérifiées vers `https://lovanet.fr`.

## Modifications
1. **Languette gauche du menu complet**
   - Donner au bouton gauche une zone tactile fiable et prioritaire, sans changer son aspect de languette verticale.
   - À l’ouverture, déplier explicitement la section « Menu complet » afin qu’un clic affiche immédiatement les cartes de navigation, même si son état avait été mémorisé replié.
   - Conserver la fermeture et le déplacement actuels du panneau.

2. **Catalogue et Classement**
   - Appliquer le conteneur monochrome et les surfaces `theme-panel-surface`, bordures et boutons verre utilisés sur Actualités.
   - Neutraliser les anciens aplats bleu/ambre trop marqués, tout en conservant les contenus, filtres, lecteurs, classement et interactions existants.
   - Remplacer sur Classement les boutons/badges et panneaux anciens par les mêmes traitements translucides cohérents.

3. **Domaines et cache**
   - Conserver `lovanet.fr` comme origine canonique.
   - Vérifier les redirections HTTP des domaines configurés et incrémenter la version de purge du cache applicatif pour évacuer les anciens assets.
   - Publier la version corrigée après contrôle de sécurité. Les adresses valides `lovanet-fr.lovable.app`, `animemomentsofficiel.fr`, `www.animemomentsofficiel.fr` et `www.lovanet.fr` redirigent déjà en HTTP 302 vers `https://lovanet.fr/` ; `www.lovanet-fr.lovable.app` n’est pas une adresse Lovable valide (certificat absent), donc la forme correcte est sans `www`.

## Vérification
- Tester au navigateur le clic de la languette gauche et l’affichage immédiat du menu complet.
- Contrôler Catalogue et Classement sur desktop et mobile.
- Revérifier les codes HTTP, destinations et assets des domaines, puis lancer la publication.
