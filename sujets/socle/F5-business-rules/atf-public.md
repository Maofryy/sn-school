# F5 — Tests publics (suite « F5 – Public »)

Livrés dans le kit ([kit/src/fluent/tests/public.now.ts](kit/src/fluent/tests/public.now.ts)), rouges au départ. Au moins un cas nominal et une erreur évidente par exigence.

| ID | Exigence | Cas | Étapes ATF |
|---|---|---|---|
| PUB-01 | E1 | Aucune demande approuvée → 0 | Run Server Side Script |
| PUB-02 | E1 | 2 demandes approuvées (1 + 2) qui chevauchent + 1 brouillon → 3 | Run Server Side Script |
| PUB-03 | E2 | Fin avant début → insertion refusée | Record Insert (échec attendu) |
| PUB-04 | E2 | Durée > max_loan_days → refusée | Record Insert (échec attendu) |
| PUB-05 | E2 | Demande valide → insérée | Record Insert |
| PUB-06 | E3 | Demandeur avec manager → approver = manager | Record Insert + Record Validation |
| PUB-07 | E3 | Demandeur sans manager → groupe Gestionnaires matériel | Record Insert + Record Validation |
| PUB-08 | E4 | Stock suffisant → approved | Record Update + Record Validation |
| PUB-09 | E4 | Stock insuffisant → refus, state reste submitted | Record Update (échec attendu) + Record Validation |
| PUB-10 | E5 | Approbation → reserved_quantity + n ; retour → − n | Record Update + Record Validation |

