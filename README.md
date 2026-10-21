# SN School

Cursus de formation des consultants techniques ServiceNow. Chaque sujet est un petit projet :
vous le réalisez sur votre PDI, vous vous auto-évaluez avec des tests ATF publics, puis une correction
plus exigeante tourne sur l'instance de correction et vous présentez votre travail à vos pairs.

- Carte des cursus : `constellation.yaml` (et la carte FigJam partagée par l'équipe formation)
- Un sujet = un dossier `sujets/<branche>/<ID>-<nom>/` : `sujet.md` (énoncé), `kit/` (app de départ),
  `atf-public.md` (tests publics), `revue-pairs.md` (ce qui sera discuté en revue)

## Installer un kit sur votre PDI

Prérequis : Node 20+ et une PDI (developer.servicenow.com).

```bash
npm install                                   # une fois, à la racine du repo
npx now-sdk auth --add https://devXXXXX.service-now.com --type basic --alias ma-pdi
npm run deployer -- F5 --auth ma-pdi          # installe le kit du sujet F5 sur votre PDI
```

Le script adapte le scope de l'app au préfixe vendeur de votre PDI. Ne lancez pas `npm run deploy` directement
dans `kit/` : votre PDI refuserait une app d'un autre préfixe.

Sur la PDI, passez à `true` les propriétés système `sn_atf.runner.enabled` et `sn_atf.schedule.enabled`.

## Déroulé d'un sujet

1. Lisez `sujet.md`, installez le kit.
2. Travaillez sur votre PDI jusqu'à ce que la suite ATF publique soit verte :
   `npx now-sdk cicd testsuite run --test-suite-name "<ID> – Public" --auth ma-pdi` depuis le dossier `kit/`.
3. Prévenez votre correcteur et créez-lui un compte `admin` temporaire sur votre PDI.
4. Il y installe la suite de correction et la lance. Vous recevez le rapport complet : tests bloquants et points à discuter.
5. Revue par les pairs, rapport à l'appui. Leur validation crédite l'XP du sujet.

Seul l'XP verrouille la progression : les liens de la carte sont des conseils.
