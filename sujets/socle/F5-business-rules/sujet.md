# F5 — Business Rules & GlideRecord

1 jour · 100 XP · validation par 2 pairs

## Contexte

L'équipe IT d'une entreprise prête du matériel (PC portables, écrans, casques) à ses collaborateurs.
Une application « Prêt de matériel » existe déjà : tables, formulaires et données de test sont en place.
Il manque toute la logique métier. Vous devez l'écrire côté serveur.

## Avant de commencer

Prérequis : Node 20+ et une PDI (developer.servicenow.com).

1. Installez le kit depuis la racine du repo :

   ```bash
   npm install                                   # une fois pour tout le repo
   npx now-sdk auth --add https://devXXXXX.service-now.com --type basic --alias ma-pdi
   npx now-sdk auth --use ma-pdi                 # si vous avez déjà d'autres instances
   cd sujets/socle/F5-business-rules/kit
   npm run deploy
   npm run deploy                                # 1re installation seulement : attribue le rôle de l'app aux utilisateurs de test
   ```

2. Sur votre PDI, passez à `true` les propriétés système `sn_atf.runner.enabled` et `sn_atf.schedule.enabled`
   (exécution des tests ATF) :
   `https://devXXXXX.service-now.com/sys_properties_list.do?sysparm_query=nameINsn_atf.runner.enabled,sn_atf.schedule.enabled`

3. Vérifiez que tout est en place : la suite publique doit tourner et être **rouge** (rien n'est encore codé).

   ```bash
   npx now-sdk cicd testsuite run --test-suite-name "F5 – Public"
   ```

## Ce qui est fourni (kit)

- L'app scopée « SN School F5 – Prêt de matériel » (scope `x_1606601_f5`).
- La table **Matériel** : `name`, `category`, `stock_total` (entier), `max_loan_days` (entier ; vide ou 0 = sans limite), `reserved_quantity` (entier, lecture seule).
- La table **Demande de prêt** : `number`, `requested_for` (→ sys_user, par défaut l'utilisateur courant), `item` (→ Matériel), `quantity`, `start_date`, `end_date`, `state` (draft, submitted, approved, rejected, returned, cancelled), `approver` (→ sys_user), `assignment_group` (→ sys_user_group).
- La propriété système `x_1606601_f5.default_group` : nom du groupe « Gestionnaires matériel ».
- Des utilisateurs de test (avec et sans manager), 3 matériels, quelques demandes.
- La suite ATF « F5 – Public », rouge au départ.

## Ce que vous devez livrer

**E1 — Script Include `LoanStockUtils`** (non appelable côté client).
`getReservedQuantity(itemId, startDate, endDate, excludeLoanId)` renvoie la somme des quantités des demandes
**approuvées** sur ce matériel dont la période chevauche [startDate, endDate], bornes incluses.
La demande `excludeLoanId` (optionnelle) n'est pas comptée.

**E2 — Valider la demande.** À la création et à la modification, refusez l'enregistrement avec un message
d'erreur clair si :
- la quantité est inférieure à 1 ;
- la date de fin est antérieure à la date de début ;
- la durée (en jours, bornes incluses) dépasse le `max_loan_days` du matériel, quand il est défini.

**E3 — Désigner l'approbateur.** À la création : `approver` = manager de `requested_for`.
Sans manager : `assignment_group` = groupe nommé dans la propriété `x_1606601_f5.default_group`.

**E4 — Contrôler le stock à l'approbation.** Quand une demande passe à `approved`, refusez si sa quantité
plus la quantité déjà réservée sur la période dépasse `stock_total`. Utilisez E1.

**E5 — Tenir à jour `reserved_quantity`.** Quand une demande entre dans l'état `approved` ou en sort,
recalculez `reserved_quantity` du matériel : somme des quantités des demandes approuvées dont
`end_date` ≥ aujourd'hui.

## Contraintes

- Tout dans le scope de l'app, rien en global.
- Aucun sys_id en dur.
- Les calculs vivent dans le Script Include ; les scripts de Business Rules restent courts.
- Les règles s'appliquent quel que soit l'utilisateur, pas seulement un admin.

## Vous auto-évaluer

Lancez la suite « F5 – Public » (depuis ATF, ou `npx now-sdk cicd testsuite run --test-suite-name "F5 – Public"`) : tout doit être vert.
Le vert public est nécessaire, pas suffisant : la correction va plus loin
(cas limites, autres utilisateurs, volume, bonnes pratiques).

## Rendu

L'export de l'app (update set ou Studio), plus 3 lignes qui expliquent vos choix de types de Business Rules.

## Pour aller plus loin (facultatif)

- Messages traduisibles via `gs.getMessage`.
- Gérer le changement de matériel sur une demande déjà approuvée (deux matériels à recalculer).
