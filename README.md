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
npx now-sdk auth --use ma-pdi
cd sujets/socle/F5-business-rules/kit         # le kit du sujet choisi
npm run deploy                                # installe l'app sur votre PDI
```

Sur la PDI, passez à `true` les propriétés système `sn_atf.runner.enabled` et `sn_atf.schedule.enabled`.

## Déroulé d'un sujet

1. Lisez `sujet.md`, installez le kit.
2. Travaillez sur votre PDI jusqu'à ce que la suite ATF publique soit verte :
   `npx now-sdk cicd testsuite run --test-suite-name "<ID> – Public"` depuis le dossier `kit/`.
3. Rendez l'export de votre app (update set ou Studio).
4. La correction complète tourne sur l'instance de correction. Vous recevez son rapport : tests bloquants et points à discuter.
5. Revue par les pairs, rapport à l'appui. Leur validation crédite l'XP du sujet.

Seul l'XP verrouille la progression : les liens de la carte sont des conseils.
