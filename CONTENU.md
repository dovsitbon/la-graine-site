# La Graine et les Saveurs : contenu du site, pour validation

Tous les textes en français, arabe et anglais, et la carte avec les prix. Les points **À VALIDER** sont des hypothèses à confirmer avec le restaurant.
Fichier généré par `npm run contenu` à partir de `locales/*.json` et `data/*.json` : modifiez ces fichiers, pas celui-ci.

## À valider en priorité

- **Nom en arabe** proposé : « الحبّة والنّكهات » (traduction littérale « la graine et les saveurs »). Sur le site arabe, le nom reste écrit en français, comme sur l'enseigne.
- **Prix** : relevés sur Uber Eats et Deliveroo le 5 novembre 2026 (le plus bas des deux). Les prix en salle peuvent être différents.
- **Tajines** : absents des applications de livraison. Une ligne « Tajine du jour, prix en salle » est prévue en attendant.
- **Le couscous maison** : « semoule travaillée à la main », légumes (carottes, courgettes, navets, potiron, pois chiches, raisins) déduits des photos et des descriptions Uber Eats/Deliveroo.
- **Horaires** : relevés sur Rankeat, à comparer avec la story « Horaires ».
- **Ramadan** : horaires (17 h 30 – 23 h 30, mercredi → dimanche) et menu ftour (chorba, dattes et lait, couscous ou grillade, pâtisseries, thé) inventés pour la maquette.
- **Offre -10 %** : prête dans `data/annonces.json` mais désactivée tant qu'elle n'est pas confirmée.

## Carte et prix

### Couscous · الكسكس · Couscous

_Semoule cuite à la vapeur, sauce aux légumes, pois chiches et raisins._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Couscous aux légumes | Sans viande : semoule, légumes et pois chiches | 13,60 € | كسكس بالخضار | Vegetable couscous |
| Couscous poulet | Un quart de poulet mijoté dans la sauce | 16,25 € | كسكس بالدجاج | Chicken couscous |
| Couscous merguez | Deux merguez grillées, légumes, pois chiches et raisins | 17,90 € | كسكس بالمرقاز | Merguez couscous |
| Couscous mouton | Collier d'agneau cuit dans la sauce du couscous | 19,30 € | كسكس بلحم الخروف | Lamb couscous |
| Couscous brochettes | Deux brochettes de gigot d'agneau | 20,70 € | كسكس بالأسياخ | Skewer couscous |
| Couscous trois viandes | Une côte d'agneau, une merguez et une brochette d'agneau | 21,40 € | كسكس بثلاثة لحوم | Three-meat couscous |

### Tajines · الطواجن · Tagines

_Cuits doucement, servis dans leur plat. Demandez celui du jour._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Tajine du jour | Selon le marché : demandez-le en salle ou par téléphone | prix en salle | طاجين اليوم | Tagine of the day |

### Grillades · المشويات · Grills

_Agneau et poulet, grillés ou rôtis. Avec des frites ou en complément d'un couscous._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Brochette d'agneau (la pièce) | À l'unité, autant que vous voulez | 4,50 € | سيخ لحم خروف | Lamb skewer |
| Côte d'agneau (la pièce) | Grillée, à l'unité | 4,95 € | ضلع خروف | Lamb chop |
| Merguez grillées | Les trois | 6,50 € | مرقاز مشوي | Grilled merguez |
| Poulet rôti entier | Cuit à la rôtissoire, à partager | 17,15 € | دجاجة محمّرة كاملة | Whole roast chicken |
| Demi-poulet rôti | Cuit à la rôtissoire | 8,60 € | نصف دجاجة محمّرة | Half roast chicken |

### Sandwichs · السندويتشات · Sandwiches

_En baguette, avec des frites. Pratique à emporter._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Croquettes de poulet | Maison, à la façon espagnole, par cinq | 7,90 € | كروكيت الدجاج | Chicken croquettes |
| Sandwich merguez frites | Baguette, deux merguez, frites | 8,60 € | سندويتش مرقاز وبطاطا | Merguez and fries sandwich |
| Sandwich poulet frites | Baguette, poulet, frites | 8,60 € | سندويتش دجاج وبطاطا | Chicken and fries sandwich |
| Barquette de frites | Dorées et croustillantes | 3,25 € | بطاطا مقلية | Fries |

### Desserts · الحلويات · Desserts

_Petits gâteaux du Maghreb et douceurs maison._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Petits gâteaux du Maghreb | Corne de gazelle, makroud et griouch, quatre pièces | 7,80 € | حلويات مغاربية | North African pastries |
| Fondant chocolat cacahuète (la pièce) | Petit gâteau nappé de chocolat | 1,40 € | حلوى الشوكولاتة والفول السوداني | Chocolate peanut square |
| Thé ou café gourmand | Avec brownies, bouchées chocolat cacahuète et un cookie | 9,50 € | أتاي أو قهوة مع الحلويات | Tea or coffee with sweets |

### Boissons · المشروبات · Drinks

_Thé à la menthe, cherbette et boissons fraîches._

| Plat (fr) | Description | Prix | عربي | English |
|---|---|---|---|---|
| Cherbette | Citronnade maison, lait et fleur d'oranger | 5,40 € | شربات | Cherbette |
| Thé à la menthe | Sucré, à la menthe fraîche | 2,00 € | أتاي بالنعناع | Mint tea |
| Café | Servi en tasse | 2,90 € | قهوة | Coffee |
| Diabolo menthe | Limonade et sirop de menthe | 3,64 € | ديابولو بالنعناع | Mint diabolo |
| Menthe à l'eau | Eau et sirop de menthe | 3,25 € | ماء بشراب النعناع | Mint cordial |
| Sodas | Coca-Cola, Fanta, Ice Tea | 2,90 € | مشروبات غازية | Soft drinks |
| Eau plate |  | 3,25 € | ماء معدني | Still water |
| Eau gazeuse | Perrier ou San Pellegrino | 3,60 € | ماء فوّار | Sparkling water |

## Horaires (data/horaires.json)

- Lundi : fermé
- Mardi : fermé
- Mercredi : 11:00 – 14:30, 18:00 – 23:30
- Jeudi : 11:00 – 14:30, 18:00 – 23:30
- Vendredi : 18:00 – 23:30
- Samedi : 11:00 – 14:30, 18:00 – 23:30
- Dimanche : 11:00 – 23:30

## Bandeau d'annonces (data/annonces.json)

- **offre-10** (2026-11-01 → 2026-12-31) · désactivée
  - fr : -10 % sur le couscous, sur place, en mentionnant le site.
  - ar : خصم 10٪ على الكسكس في المطعم عند ذكر الموقع.
  - en : 10% off couscous when you dine in and mention the website.
- **ramadan-2027** (2027-01-25 → 2027-03-09)
  - fr : Ramadan : menu ftour tous les soirs d'ouverture, horaires adaptés. Pensez à réserver.
  - ar : رمضان: قائمة الفطور كل مساء، بمواعيد خاصة. يُنصح بالحجز.
  - en : Ramadan: ftour menu every evening we're open, special hours. Booking recommended.
- **fetes-2026** (2026-12-20 → 2027-01-01)
  - fr : Fermé le 25 décembre et le 1er janvier. Réservez vos tables de fin d'année.
  - ar : مغلق يومي 25 ديسمبر و1 يناير. احجزوا طاولاتكم لنهاية السنة.
  - en : Closed on 25 December and 1 January. Book your end-of-year tables now.
- **reserver** (par défaut)
  - fr : Fermé lundi et mardi. Le week-end, la salle se remplit vite : réservez votre table.
  - ar : مغلق يومي الإثنين والثلاثاء. في عطلة نهاية الأسبوع تمتلئ القاعة بسرعة: احجزوا طاولتكم.
  - en : Closed Monday and Tuesday. Weekends fill up fast, so book your table.

## Tous les textes du site

### meta

- `meta.title`
  - fr : Couscous maison à Amiens, restaurant halal | La Graine et les Saveurs
  - ar : كسكس منزلي في أميان، مطعم حلال | La Graine et les Saveurs
  - en : Homemade couscous in Amiens, halal restaurant | La Graine et les Saveurs
- `meta.description`
  - fr : Couscous maison, grillades, cuisine marocaine et algérienne, halal et sans alcool, rue Saint-Jacques à Amiens. Sur place, à emporter, en livraison.
  - ar : كسكس منزلي ومشويات ومطبخ مغربي وجزائري، حلال ودون كحول، شارع سان جاك في أميان. في المطعم أو للأخذ أو بالتوصيل.
  - en : Homemade couscous, grills, Moroccan and Algerian cooking, halal and alcohol-free, on rue Saint-Jacques in Amiens. Dine in, takeaway or delivery.
- `meta.ogAlt`
  - fr : Couscous au mouton servi dans une assiette bleue, La Graine et les Saveurs à Amiens
  - ar : كسكس بلحم الخروف في صحن أزرق، مطعم La Graine et les Saveurs في أميان
  - en : Lamb couscous served on a blue plate at La Graine et les Saveurs, Amiens

### nav

- `nav.skip`
  - fr : Aller au contenu
  - ar : الانتقال إلى المحتوى
  - en : Skip to content
- `nav.menu`
  - fr : Menu
  - ar : القائمة
  - en : Menu
- `nav.close`
  - fr : Fermer
  - ar : إغلاق
  - en : Close
- `nav.home`
  - fr : La Graine et les Saveurs, accueil
  - ar : La Graine et les Saveurs، الصفحة الرئيسية
  - en : La Graine et les Saveurs, home
- `nav.carte`
  - fr : La carte
  - ar : قائمة الطعام
  - en : Menu
- `nav.book`
  - fr : Réserver
  - ar : الحجز
  - en : Book
- `nav.order`
  - fr : À emporter & livraison
  - ar : للأخذ والتوصيل
  - en : Takeaway & delivery
- `nav.groups`
  - fr : Groupes
  - ar : المجموعات
  - en : Groups
- `nav.infos`
  - fr : Infos
  - ar : معلومات
  - en : Visit
- `nav.instagram`
  - fr : Instagram de La Graine et les Saveurs
  - ar : حساب La Graine et les Saveurs على إنستغرام
  - en : La Graine et les Saveurs on Instagram
- `nav.call`
  - fr : Appeler
  - ar : اتصال
  - en : Call
- `nav.lang`
  - fr : Langue
  - ar : اللغة
  - en : Language
- `nav.bookCta`
  - fr : Réserver
  - ar : احجز
  - en : Book a table

### intro

- `intro.skip`
  - fr : Passer
  - ar : تخطٍّ
  - en : Skip

### announce

- `announce.close`
  - fr : Fermer l'annonce
  - ar : إغلاق الإعلان
  - en : Close announcement

### hero

- `hero.eyebrow`
  - fr : Couscous maison · Halal · Amiens centre
  - ar : كسكس منزلي · حلال · وسط أميان
  - en : Homemade couscous · Halal · Central Amiens
- `hero.title`
  - fr : Le couscous comme à la maison
  - ar : كسكس كما يُطهى في البيت
  - en : Couscous the way it's made at home
- `hero.lead`
  - fr : Semoule à la vapeur, légumes mijotés, agneau, merguez et brochettes. Au 7 rue Saint-Jacques.
  - ar : سميد على البخار، خضار مطهوّة على مهل، لحم خروف ومرقاز وأسياخ. في 7 شارع سان جاك.
  - en : Steamed semolina, slow-cooked vegetables, lamb, merguez and skewers. At 7 rue Saint-Jacques.
- `hero.ctaBook`
  - fr : Réserver une table
  - ar : احجز طاولة
  - en : Book a table
- `hero.ctaMenu`
  - fr : Voir la carte
  - ar : اطّلع على القائمة
  - en : See the menu
- `hero.rating`
  - fr : {value}/5 sur Google
  - ar : {value}/5 على Google
  - en : {value}/5 on Google
- `hero.ratingCount`
  - fr : {count} avis
  - ar : {count} تقييمًا
  - en : {count} reviews
- `hero.imageAlt`
  - fr : Couscous au mouton, légumes et pois chiches, servi dans une assiette tunisienne bleue
  - ar : كسكس بلحم الخروف والخضار والحمّص في صحن تونسي أزرق
  - en : Lamb couscous with vegetables and chickpeas on a blue Tunisian plate

### tiles

- `tiles.title`
  - fr : Ce qu'on vient manger
  - ar : ما يأتي الناس من أجله
  - en : What people come for
- `tiles.couscous`
  - fr : Couscous
  - ar : الكسكس
  - en : Couscous
- `tiles.tajines`
  - fr : Tajines
  - ar : الطواجن
  - en : Tagines
- `tiles.grillades`
  - fr : Grillades
  - ar : المشويات
  - en : Grills
- `tiles.sandwichs`
  - fr : Sandwichs
  - ar : السندويتشات
  - en : Sandwiches
- `tiles.patisseries`
  - fr : Pâtisseries
  - ar : الحلويات
  - en : Pastries
- `tiles.the`
  - fr : Thé à la menthe
  - ar : أتاي بالنعناع
  - en : Mint tea

### services

- `services.title`
  - fr : Comme vous voulez
  - ar : كما يناسبكم
  - en : However suits you
- `services.surPlace.title`
  - fr : Sur place
  - ar : في المطعم
  - en : Dine in
- `services.surPlace.text`
  - fr : En salle, en famille, entre amis
  - ar : مع العائلة أو الأصدقاء
  - en : With family, with friends
- `services.emporter.title`
  - fr : À emporter
  - ar : للأخذ
  - en : Takeaway
- `services.emporter.text`
  - fr : Appelez, on prépare, vous passez
  - ar : اتصلوا، نحضّر، وتمرّون
  - en : Call, we cook, you collect
- `services.livraison.title`
  - fr : Livraison
  - ar : التوصيل
  - en : Delivery
- `services.livraison.text`
  - fr : Uber Eats et Deliveroo
  - ar : Uber Eats وDeliveroo
  - en : Uber Eats and Deliveroo
- `services.tgtg.title`
  - fr : Too Good To Go
  - ar : Too Good To Go
  - en : Too Good To Go
- `services.tgtg.text`
  - fr : Paniers surprise en fin de service
  - ar : سلال مفاجأة في آخر الخدمة
  - en : Surprise bags at the end of service

### carte

- `carte.eyebrow`
  - fr : La carte
  - ar : قائمة الطعام
  - en : The menu
- `carte.title`
  - fr : Couscous, grillades et douceurs
  - ar : كسكس ومشويات وحلويات
  - en : Couscous, grills and sweet things
- `carte.lead`
  - fr : Tout est halal. On ne sert pas d'alcool : la cherbette maison fait très bien l'affaire.
  - ar : كل شيء حلال. لا نقدّم الكحول، والشربات المنزلية تفي بالغرض.
  - en : Everything is halal. We don't serve alcohol: the homemade cherbette does the job nicely.
- `carte.halal`
  - fr : Viandes halal
  - ar : لحوم حلال
  - en : Halal meat
- `carte.noAlcohol`
  - fr : Sans alcool
  - ar : دون كحول
  - en : Alcohol-free
- `carte.tabsLabel`
  - fr : Catégories de la carte
  - ar : أقسام القائمة
  - en : Menu sections
- `carte.categories.couscous`
  - fr : Couscous
  - ar : الكسكس
  - en : Couscous
- `carte.categories.tajines`
  - fr : Tajines
  - ar : الطواجن
  - en : Tagines
- `carte.categories.grillades`
  - fr : Grillades
  - ar : المشويات
  - en : Grills
- `carte.categories.sandwichs`
  - fr : Sandwichs
  - ar : السندويتشات
  - en : Sandwiches
- `carte.categories.desserts`
  - fr : Desserts
  - ar : الحلويات
  - en : Desserts
- `carte.categories.boissons`
  - fr : Boissons
  - ar : المشروبات
  - en : Drinks
- `carte.intro.couscous`
  - fr : Semoule cuite à la vapeur, sauce aux légumes, pois chiches et raisins.
  - ar : سميد مطهو على البخار، مرق بالخضار، حمّص وزبيب.
  - en : Steamed semolina, vegetable broth, chickpeas and raisins.
- `carte.intro.tajines`
  - fr : Cuits doucement, servis dans leur plat. Demandez celui du jour.
  - ar : مطهوّة على نار هادئة وتُقدَّم في آنيتها. اسألوا عن طاجين اليوم.
  - en : Slow-cooked and served in the pot. Ask for today's.
- `carte.intro.grillades`
  - fr : Agneau et poulet, grillés ou rôtis. Avec des frites ou en complément d'un couscous.
  - ar : لحم خروف ودجاج، مشوي أو محمّر. مع البطاطا المقلية أو إلى جانب الكسكس.
  - en : Lamb and chicken, grilled or roasted. With fries, or on the side of a couscous.
- `carte.intro.sandwichs`
  - fr : En baguette, avec des frites. Pratique à emporter.
  - ar : في الخبز الفرنسي مع البطاطا المقلية. عملية للأخذ.
  - en : In a baguette, with fries. Easy to take away.
- `carte.intro.desserts`
  - fr : Petits gâteaux du Maghreb et douceurs maison.
  - ar : حلويات مغاربية وحلويات منزلية.
  - en : North African pastries and homemade treats.
- `carte.intro.boissons`
  - fr : Thé à la menthe, cherbette et boissons fraîches.
  - ar : أتاي بالنعناع وشربات ومشروبات باردة.
  - en : Mint tea, cherbette and cold drinks.
- `carte.priceInRoom`
  - fr : Prix en salle
  - ar : السعر في المطعم
  - en : Price at the restaurant
- `carte.unit`
  - fr : la pièce
  - ar : للقطعة
  - en : each
- `carte.veg`
  - fr : Sans viande
  - ar : دون لحم
  - en : Meat-free
- `carte.signature`
  - fr : Spécialité maison
  - ar : تخصّص البيت
  - en : House speciality
- `carte.checked`
  - fr : Prix relevés le {date}, à titre indicatif. La carte du jour fait foi.
  - ar : الأسعار مسجّلة بتاريخ {date} للاسترشاد. المعتمد هو قائمة المطعم.
  - en : Prices checked on {date}, for guidance. The menu at the restaurant takes precedence.
- `carte.seeAll`
  - fr : Voir toute la carte
  - ar : القائمة كاملة
  - en : See the full menu

### house

- `house.eyebrow`
  - fr : Le couscous maison
  - ar : كسكس البيت
  - en : Our couscous
- `house.title`
  - fr : Une graine légère, une sauce qui a pris son temps
  - ar : حبّات خفيفة ومرق أخذ وقته
  - en : Light grains, and a broth that took its time
- `house.paragraphs.0`
  - fr : La semoule est cuite à la vapeur, puis travaillée à la main pour rester légère, grain par grain.
  - ar : يُطهى السميد على البخار، ثم يُفرك باليد ليبقى خفيفًا، حبّةً حبّة.
  - en : The semolina is steamed, then worked by hand so it stays light, grain by grain.
- `house.paragraphs.1`
  - fr : La sauce mijote avec les carottes, les courgettes, les navets, le potiron, les pois chiches et les raisins.
  - ar : ويُطهى المرق على مهل مع الجزر والكوسة واللفت والقرع والحمّص والزبيب.
  - en : The broth simmers with carrots, courgettes, turnips, pumpkin, chickpeas and raisins.
- `house.paragraphs.2`
  - fr : Pour la viande, choisissez : collier d'agneau fondant, merguez, brochettes de gigot ou poulet. Ou les trois viandes, pour les grandes faims.
  - ar : ثم اختاروا اللحم: رقبة خروف طريّة، أو مرقاز، أو أسياخ من فخذ الخروف، أو دجاج. أو اللحوم الثلاثة لمن كان جائعًا.
  - en : Then pick your meat: tender lamb neck, merguez, leg-of-lamb skewers or chicken. Or all three, if you're hungry.
- `house.cta`
  - fr : Voir les couscous
  - ar : أطباق الكسكس
  - en : See the couscous
- `house.imageAlt`
  - fr : Assiette de couscous aux légumes, potiron et carottes, tenue au-dessus de la table
  - ar : صحن كسكس بالخضار والقرع والجزر، مرفوع فوق المائدة
  - en : A plate of vegetable couscous with pumpkin and carrots, held above the table

### order

- `order.eyebrow`
  - fr : À emporter & livraison
  - ar : للأخذ والتوصيل
  - en : Takeaway & delivery
- `order.title`
  - fr : Le couscous chez vous
  - ar : الكسكس في بيتكم
  - en : Couscous at home
- `order.takeaway.title`
  - fr : À emporter
  - ar : للأخذ
  - en : Takeaway
- `order.takeaway.text`
  - fr : Appelez-nous : on vous dit quand passer, c'est prêt à votre arrivée.
  - ar : اتصلوا بنا: نخبركم متى تمرّون، ويكون الطلب جاهزًا عند وصولكم.
  - en : Give us a call: we'll tell you when to come by and it'll be ready.
- `order.takeaway.cta`
  - fr : Appeler pour commander
  - ar : اتصل للطلب
  - en : Call to order
- `order.delivery.title`
  - fr : Livraison
  - ar : التوصيل
  - en : Delivery
- `order.delivery.text`
  - fr : Commandez sur votre application habituelle, dans Amiens.
  - ar : اطلبوا عبر تطبيقكم المعتاد داخل أميان.
  - en : Order on your usual app, anywhere in Amiens.
- `order.tgtg.title`
  - fr : Too Good To Go
  - ar : Too Good To Go
  - en : Too Good To Go
- `order.tgtg.text`
  - fr : En fin de service, un panier surprise à petit prix. Cherchez La Graine et les Saveurs dans l'application.
  - ar : في آخر الخدمة، سلّة مفاجأة بسعر زهيد. ابحثوا عن La Graine et les Saveurs في التطبيق.
  - en : At the end of service, a surprise bag at a small price. Look for La Graine et les Saveurs in the app.
- `order.tgtg.cta`
  - fr : Ouvrir Too Good To Go
  - ar : فتح Too Good To Go
  - en : Open Too Good To Go

### groups

- `groups.eyebrow`
  - fr : Groupes
  - ar : المجموعات
  - en : Groups
- `groups.title`
  - fr : Une grande table pour les grandes occasions
  - ar : مائدة كبيرة للمناسبات الكبيرة
  - en : A long table for big occasions
- `groups.lead`
  - fr : Repas de famille, anniversaire, déjeuner d'équipe : dites-nous combien vous êtes, on prépare la salle et les plats.
  - ar : عشاء عائلي، عيد ميلاد، غداء مع الزملاء: أخبرونا بعددكم ونجهّز لكم القاعة والأطباق.
  - en : Family meals, birthdays, team lunches: tell us how many you are and we'll get the room and the food ready.
- `groups.points.0`
  - fr : Repas de famille
  - ar : الولائم العائلية
  - en : Family meals
- `groups.points.1`
  - fr : Anniversaires
  - ar : أعياد الميلاد
  - en : Birthdays
- `groups.points.2`
  - fr : Entreprises et associations
  - ar : الشركات والجمعيات
  - en : Companies and associations
- `groups.cta`
  - fr : Demander pour un groupe
  - ar : طلب حجز لمجموعة
  - en : Ask about a group
- `groups.imageAlt`
  - fr : Table dressée avec couscous, poulet rôti et cherbette, devant le mur bleu de la salle
  - ar : مائدة عليها كسكس ودجاج محمّر وشربات أمام الجدار الأزرق للقاعة
  - en : Table laid with couscous, roast chicken and cherbette, in front of the blue wall

### ramadan

- `ramadan.eyebrow`
  - fr : Ramadan
  - ar : رمضان
  - en : Ramadan
- `ramadan.title`
  - fr : Le ftour à La Graine et les Saveurs
  - ar : الفطور في La Graine et les Saveurs
  - en : Ftour at La Graine et les Saveurs
- `ramadan.lead`
  - fr : Chaque soir d'ouverture, on vous attend pour rompre le jeûne : soupe, dattes, plat, douceurs et thé.
  - ar : كل مساء نفتح فيه، ننتظركم للإفطار: شوربة وتمر وطبق رئيسي وحلويات وأتاي.
  - en : Every evening we're open, come and break your fast with us: soup, dates, a main, sweets and tea.
- `ramadan.soon`
  - fr : À partir du {date}
  - ar : ابتداءً من {date}
  - en : From {date}
- `ramadan.menuTitle`
  - fr : Le menu ftour
  - ar : قائمة الفطور
  - en : The ftour menu
- `ramadan.menu.0`
  - fr : Chorba
  - ar : الشوربة
  - en : Chorba
- `ramadan.menu.1`
  - fr : Dattes et lait
  - ar : التمر والحليب
  - en : Dates and milk
- `ramadan.menu.2`
  - fr : Couscous ou grillade
  - ar : كسكس أو مشويات
  - en : Couscous or grill
- `ramadan.menu.3`
  - fr : Pâtisseries orientales
  - ar : حلويات شرقية
  - en : North African pastries
- `ramadan.menu.4`
  - fr : Thé à la menthe
  - ar : أتاي بالنعناع
  - en : Mint tea
- `ramadan.price`
  - fr : Prix sur place
  - ar : السعر في المطعم
  - en : Price at the restaurant
- `ramadan.hoursTitle`
  - fr : Horaires pendant le Ramadan
  - ar : مواعيد شهر رمضان
  - en : Ramadan opening hours
- `ramadan.cta`
  - fr : Réserver pour le ftour
  - ar : احجز للفطور
  - en : Book for ftour

### reviews

- `reviews.eyebrow`
  - fr : Vos retours
  - ar : آراؤكم
  - en : Your feedback
- `reviews.title`
  - fr : Ce que vous en dites
  - ar : ما تقولونه عنّا
  - en : What you say about us
- `reviews.rating`
  - fr : {value} sur 5
  - ar : {value} من 5
  - en : {value} out of 5
- `reviews.count`
  - fr : {count} avis Google
  - ar : {count} تقييمًا على Google
  - en : {count} Google reviews
- `reviews.checked`
  - fr : Note relevée le {date}
  - ar : التقييم مسجّل بتاريخ {date}
  - en : Rating checked on {date}
- `reviews.ranking`
  - fr : {rank}e sur {of} restaurants d'Amiens selon {source}
  - ar : المرتبة {rank} من بين {of} مطعمًا في أميان حسب {source}
  - en : No. {rank} of {of} restaurants in Amiens on {source}
- `reviews.cta`
  - fr : Lire les avis sur Google
  - ar : اقرأ التقييمات على Google
  - en : Read the reviews on Google
- `reviews.leave`
  - fr : Laisser un avis
  - ar : اترك تقييمًا
  - en : Leave a review

### infos

- `infos.eyebrow`
  - fr : Infos pratiques
  - ar : معلومات عملية
  - en : Visit
- `infos.title`
  - fr : Au centre d'Amiens, rue Saint-Jacques
  - ar : وسط أميان، شارع سان جاك
  - en : In central Amiens, on rue Saint-Jacques
- `infos.address`
  - fr : Adresse
  - ar : العنوان
  - en : Address
- `infos.hours`
  - fr : Horaires
  - ar : مواعيد العمل
  - en : Opening hours
- `infos.phone`
  - fr : Téléphone
  - ar : الهاتف
  - en : Phone
- `infos.access`
  - fr : Venir
  - ar : الوصول
  - en : Getting here
- `infos.accessText`
  - fr : En plein centre, à quelques minutes à pied de la cathédrale et du quartier Saint-Leu.
  - ar : في قلب المدينة، على بُعد دقائق مشيًا من الكاتدرائية وحيّ سان لو.
  - en : Right in the centre, a few minutes' walk from the cathedral and the Saint-Leu quarter.
- `infos.accessibility`
  - fr : Accessibilité
  - ar : إمكانية الوصول
  - en : Accessibility
- `infos.accessibilityText`
  - fr : Salle accessible en fauteuil roulant.
  - ar : القاعة مهيّأة للكراسي المتحركة.
  - en : The dining room is wheelchair accessible.
- `infos.days.0`
  - fr : Lundi
  - ar : الإثنين
  - en : Monday
- `infos.days.1`
  - fr : Mardi
  - ar : الثلاثاء
  - en : Tuesday
- `infos.days.2`
  - fr : Mercredi
  - ar : الأربعاء
  - en : Wednesday
- `infos.days.3`
  - fr : Jeudi
  - ar : الخميس
  - en : Thursday
- `infos.days.4`
  - fr : Vendredi
  - ar : الجمعة
  - en : Friday
- `infos.days.5`
  - fr : Samedi
  - ar : السبت
  - en : Saturday
- `infos.days.6`
  - fr : Dimanche
  - ar : الأحد
  - en : Sunday
- `infos.closed`
  - fr : Fermé
  - ar : مغلق
  - en : Closed
- `infos.directions`
  - fr : Itinéraire
  - ar : الاتجاهات
  - en : Directions
- `infos.mapTitle`
  - fr : Plan d'accès : 7 rue Saint-Jacques, Amiens
  - ar : خريطة الوصول: 7 شارع سان جاك، أميان
  - en : Map: 7 rue Saint-Jacques, Amiens
- `infos.hoursNote`
  - fr : Horaires susceptibles de changer pendant les fêtes et le Ramadan : le bandeau en haut de page vous prévient.
  - ar : قد تتغيّر المواعيد في الأعياد وفي رمضان، وسيُعلمكم الشريط أعلى الصفحة بذلك.
  - en : Hours may change over the holidays and during Ramadan: the banner at the top of the page will tell you.

### faq

- `faq.eyebrow`
  - fr : Questions fréquentes
  - ar : أسئلة متكررة
  - en : FAQ
- `faq.title`
  - fr : Bon à savoir
  - ar : معلومات تهمّكم
  - en : Good to know
- `faq.items.0.q`
  - fr : La viande est-elle halal ?
  - ar : هل اللحم حلال؟
  - en : Is the meat halal?
- `faq.items.0.a`
  - fr : Oui, toutes nos viandes sont halal : agneau, poulet et merguez. Et nous ne servons pas d'alcool.
  - ar : نعم، كل لحومنا حلال: الخروف والدجاج والمرقاز. ولا نقدّم الكحول.
  - en : Yes, all our meat is halal: lamb, chicken and merguez. And we don't serve alcohol.
- `faq.items.1.q`
  - fr : Faut-il réserver ?
  - ar : هل يجب الحجز؟
  - en : Do I need to book?
- `faq.items.1.a`
  - fr : C'est conseillé, surtout le vendredi soir et le week-end. Réservez en ligne ou appelez-nous au 09 78 81 28 24.
  - ar : يُنصح به، خاصة مساء الجمعة وفي عطلة نهاية الأسبوع. احجزوا عبر الموقع أو اتصلوا بنا على 09 78 81 28 24.
  - en : It's a good idea, especially on Friday evenings and at weekends. Book online or call us on +33 9 78 81 28 24.
- `faq.items.2.q`
  - fr : Accueillez-vous les groupes ?
  - ar : هل تستقبلون المجموعات؟
  - en : Do you take groups?
- `faq.items.2.a`
  - fr : Oui, pour les repas de famille, les anniversaires ou les sorties d'entreprise. Envoyez une demande de groupe avec le nombre de personnes, on vous rappelle pour organiser la table.
  - ar : نعم، للولائم العائلية وأعياد الميلاد ولقاءات الشركات. أرسلوا طلب مجموعة مع عدد الأشخاص، ونتصل بكم لتنظيم المائدة.
  - en : Yes, for family meals, birthdays or work outings. Send a group request with the number of people and we'll call you back to arrange the table.
- `faq.items.3.q`
  - fr : Livrez-vous à domicile ?
  - ar : هل توصلون إلى البيت؟
  - en : Do you deliver?
- `faq.items.3.a`
  - fr : Oui, via Uber Eats et Deliveroo, dans Amiens. Pour emporter, appelez-nous et passez chercher votre commande.
  - ar : نعم، عبر Uber Eats وDeliveroo داخل أميان. وللأخذ، اتصلوا بنا ثم مرّوا لاستلام طلبكم.
  - en : Yes, through Uber Eats and Deliveroo, within Amiens. For takeaway, call us and come and collect your order.
- `faq.items.4.q`
  - fr : Comment fonctionne Too Good To Go ?
  - ar : كيف يعمل Too Good To Go؟
  - en : How does Too Good To Go work?
- `faq.items.4.a`
  - fr : En fin de service, nous proposons des paniers surprise avec ce qui reste du jour, à petit prix. Réservez votre panier dans l'application Too Good To Go, puis venez le chercher à l'heure indiquée.
  - ar : في آخر الخدمة نعرض سلال مفاجأة بما تبقّى من اليوم بسعر زهيد. احجزوا سلّتكم في تطبيق Too Good To Go ثم تعالوا لاستلامها في الموعد المحدد.
  - en : At the end of service we offer surprise bags with what's left of the day, at a small price. Reserve yours in the Too Good To Go app, then collect it at the time shown.
- `faq.items.5.q`
  - fr : Quels moyens de paiement acceptez-vous ?
  - ar : كيف يتم الدفع؟
  - en : How can I pay?
- `faq.items.5.a`
  - fr : Vous réglez sur place, au restaurant : il n'y a pas de paiement en ligne. En livraison, Uber Eats accepte aussi les titres-restaurant.
  - ar : الدفع في المطعم، ولا يوجد دفع عبر الإنترنت. وفي التوصيل، يقبل Uber Eats أيضًا قسائم الوجبات.
  - en : You pay at the restaurant: there's no online payment. For delivery, Uber Eats also accepts meal vouchers.
- `faq.items.6.q`
  - fr : Avez-vous des plats sans viande ?
  - ar : هل لديكم أطباق دون لحم؟
  - en : Do you have meat-free dishes?
- `faq.items.6.a`
  - fr : Oui : le couscous aux légumes, les frites et plusieurs douceurs. Dites-nous si vous avez une allergie, on vous indique ce qui convient.
  - ar : نعم: الكسكس بالخضار والبطاطا المقلية وعدة حلويات. أخبرونا بأي حساسية غذائية لنرشدكم إلى ما يناسبكم.
  - en : Yes: the vegetable couscous, fries and several sweets. Tell us about any allergy and we'll point you to what suits you.

### book

- `book.eyebrow`
  - fr : Réservation
  - ar : الحجز
  - en : Booking
- `book.title`
  - fr : Réserver une table
  - ar : احجز طاولة
  - en : Book a table
- `book.lead`
  - fr : Choisissez le jour et l'heure. On vous confirme par e-mail ou par téléphone.
  - ar : اختاروا اليوم والساعة، ونؤكّد لكم بالبريد الإلكتروني أو بالهاتف.
  - en : Pick the day and time. We'll confirm by email or phone.
- `book.groupTitle`
  - fr : Demande pour un groupe
  - ar : طلب حجز لمجموعة
  - en : Group request
- `book.groupLead`
  - fr : Indiquez la date, le nombre de personnes et l'occasion : on vous rappelle pour organiser la table et le menu.
  - ar : أخبرونا بالتاريخ وعدد الأشخاص والمناسبة، ونتصل بكم لتنظيم المائدة والقائمة.
  - en : Give us the date, the number of people and the occasion: we'll call you back to arrange the table and the menu.
- `book.tabs.table`
  - fr : Une table
  - ar : طاولة
  - en : A table
- `book.tabs.group`
  - fr : Un groupe
  - ar : مجموعة
  - en : A group
- `book.date`
  - fr : Date
  - ar : التاريخ
  - en : Date
- `book.chooseDate`
  - fr : Choisir une date
  - ar : اختر التاريخ
  - en : Choose a date
- `book.time`
  - fr : Heure d'arrivée
  - ar : ساعة الوصول
  - en : Arrival time
- `book.chooseTime`
  - fr : Choisir l'heure
  - ar : اختر الساعة
  - en : Choose a time
- `book.noTimes`
  - fr : Plus de créneau ce jour-là. Choisissez un autre jour.
  - ar : لم يعد هناك موعد متاح في هذا اليوم. اختاروا يومًا آخر.
  - en : No times left that day. Please choose another day.
- `book.guests`
  - fr : Nombre de personnes
  - ar : عدد الأشخاص
  - en : Number of people
- `book.group`
  - fr : C'est un groupe ?
  - ar : هل هي مجموعة؟
  - en : Is it a group?
- `book.yes`
  - fr : Oui
  - ar : نعم
  - en : Yes
- `book.no`
  - fr : Non
  - ar : لا
  - en : No
- `book.groupHint`
  - fr : À partir de {n} personnes, on vous rappelle pour organiser la table.
  - ar : ابتداءً من {n} أشخاص، نتصل بكم لتنظيم المائدة.
  - en : From {n} people, we'll call you back to arrange the table.
- `book.occasion`
  - fr : Occasion
  - ar : المناسبة
  - en : Occasion
- `book.occasions.family`
  - fr : Repas de famille
  - ar : وليمة عائلية
  - en : Family meal
- `book.occasions.birthday`
  - fr : Anniversaire
  - ar : عيد ميلاد
  - en : Birthday
- `book.occasions.company`
  - fr : Entreprise
  - ar : شركة
  - en : Company
- `book.occasions.other`
  - fr : Autre
  - ar : أخرى
  - en : Other
- `book.request`
  - fr : Demande particulière
  - ar : طلب خاص
  - en : Special request
- `book.requestPh`
  - fr : Allergie, poussette, table au calme…
  - ar : حساسية غذائية، عربة أطفال، طاولة هادئة…
  - en : Allergy, pushchair, a quiet table…
- `book.name`
  - fr : Nom
  - ar : الاسم
  - en : Name
- `book.phone`
  - fr : Téléphone
  - ar : الهاتف
  - en : Phone
- `book.email`
  - fr : E-mail
  - ar : البريد الإلكتروني
  - en : Email
- `book.submit`
  - fr : Envoyer la demande
  - ar : إرسال الطلب
  - en : Send request
- `book.submitGroup`
  - fr : Envoyer la demande de groupe
  - ar : إرسال طلب المجموعة
  - en : Send group request
- `book.sending`
  - fr : Envoi…
  - ar : جارٍ الإرسال…
  - en : Sending…
- `book.privacy`
  - fr : Vos coordonnées servent seulement à confirmer cette réservation.
  - ar : تُستخدم بياناتكم فقط لتأكيد هذا الحجز.
  - en : Your details are only used to confirm this booking.
- `book.errors.date`
  - fr : Choisissez une date
  - ar : اختاروا التاريخ
  - en : Choose a date
- `book.errors.time`
  - fr : Choisissez une heure
  - ar : اختاروا الساعة
  - en : Choose a time
- `book.errors.name`
  - fr : Indiquez votre nom
  - ar : اكتبوا اسمكم
  - en : Enter your name
- `book.errors.phone`
  - fr : Numéro de téléphone invalide
  - ar : رقم الهاتف غير صحيح
  - en : Invalid phone number
- `book.errors.email`
  - fr : Adresse e-mail invalide
  - ar : البريد الإلكتروني غير صحيح
  - en : Invalid email address
- `book.errors.server`
  - fr : La demande n'a pas pu partir. Appelez-nous, c'est encore plus rapide.
  - ar : تعذّر إرسال الطلب. اتصلوا بنا، فهذا أسرع.
  - en : Your request couldn't be sent. Give us a call, it's even quicker.
- `book.done.title`
  - fr : Demande bien reçue
  - ar : وصلنا طلبكم
  - en : Request received
- `book.done.text`
  - fr : Merci {name}. Nous revenons vers vous très vite pour confirmer votre table du {when}.
  - ar : شكرًا {name}. سنتواصل معكم قريبًا لتأكيد طاولتكم يوم {when}.
  - en : Thank you, {name}. We'll get back to you shortly to confirm your table on {when}.
- `book.done.mail`
  - fr : Un récapitulatif vous a été envoyé par e-mail.
  - ar : أرسلنا إليكم ملخّصًا بالبريد الإلكتروني.
  - en : A summary has been sent to your email.
- `book.done.notSent`
  - fr : Notre boîte mail n'est pas encore branchée : pour être sûr d'avoir votre table, appelez-nous en indiquant ce créneau.
  - ar : بريدنا الإلكتروني غير مفعّل بعد: لضمان طاولتكم، اتصلوا بنا واذكروا هذا الموعد.
  - en : Our mailbox isn't connected yet: to be sure of your table, please call us with this time.
- `book.done.again`
  - fr : Faire une autre demande
  - ar : طلب آخر
  - en : Make another request
- `book.callInstead`
  - fr : Vous préférez appeler ?
  - ar : تفضّلون الاتصال؟
  - en : Rather call?
- `book.mail.subject`
  - fr : Demande de réservation
  - ar : طلب حجز
  - en : Booking request
- `book.mail.title`
  - fr : Nouvelle demande de réservation
  - ar : طلب حجز جديد
  - en : New booking request
- `book.mail.when`
  - fr : Date et heure
  - ar : التاريخ والساعة
  - en : Date and time
- `book.mail.guests`
  - fr : Personnes
  - ar : عدد الأشخاص
  - en : Guests
- `book.mail.group`
  - fr : Groupe
  - ar : مجموعة
  - en : Group
- `book.mail.yes`
  - fr : oui
  - ar : نعم
  - en : yes
- `book.mail.no`
  - fr : non
  - ar : لا
  - en : no
- `book.mail.name`
  - fr : Nom
  - ar : الاسم
  - en : Name
- `book.mail.phone`
  - fr : Téléphone
  - ar : الهاتف
  - en : Phone
- `book.mail.email`
  - fr : E-mail
  - ar : البريد الإلكتروني
  - en : Email
- `book.mail.request`
  - fr : Demande particulière
  - ar : طلب خاص
  - en : Special request
- `book.mail.lang`
  - fr : Langue du client
  - ar : لغة الزبون
  - en : Customer language
- `book.mail.confirmSubject`
  - fr : Votre demande de réservation à La Graine et les Saveurs
  - ar : طلب حجزكم في La Graine et les Saveurs
  - en : Your booking request at La Graine et les Saveurs
- `book.mail.confirmIntro`
  - fr : Bonjour {name}, ⏎  ⏎ Nous avons bien reçu votre demande de réservation. Nous vous confirmons la table au plus vite.
  - ar : مرحبًا {name}، ⏎  ⏎ وصلنا طلب حجزكم، وسنؤكّد لكم الطاولة في أقرب وقت.
  - en : Hello {name}, ⏎  ⏎ We've received your booking request. We'll confirm your table as soon as possible.
- `book.mail.confirmOutro`
  - fr : À très bientôt, ⏎ La Graine et les Saveurs ⏎ 7 rue Saint-Jacques, 80000 Amiens · 09 78 81 28 24
  - ar : إلى اللقاء قريبًا، ⏎ La Graine et les Saveurs ⏎ 7 rue Saint-Jacques, 80000 Amiens · 09 78 81 28 24
  - en : See you soon, ⏎ La Graine et les Saveurs ⏎ 7 rue Saint-Jacques, 80000 Amiens · +33 9 78 81 28 24

### status

- `status.open`
  - fr : Ouvert maintenant
  - ar : مفتوح الآن
  - en : Open now
- `status.closed`
  - fr : Fermé
  - ar : مغلق
  - en : Closed
- `status.until`
  - fr : jusqu'à {time}
  - ar : حتى {time}
  - en : until {time}
- `status.opens`
  - fr : ouvre {day} à {time}
  - ar : يفتح {day} على الساعة {time}
  - en : opens {day} at {time}
- `status.today`
  - fr : aujourd'hui
  - ar : اليوم
  - en : today
- `status.tomorrow`
  - fr : demain
  - ar : غدًا
  - en : tomorrow

### footer

- `footer.tagline`
  - fr : Couscous maison, cuisine marocaine et algérienne. Halal, sans alcool, au centre d'Amiens.
  - ar : كسكس منزلي، مطبخ مغربي وجزائري. حلال ودون كحول، وسط أميان.
  - en : Homemade couscous, Moroccan and Algerian cooking. Halal, alcohol-free, in central Amiens.
- `footer.delivery`
  - fr : Livraison
  - ar : التوصيل
  - en : Delivery
- `footer.menu`
  - fr : La carte
  - ar : قائمة الطعام
  - en : Menu
- `footer.legal`
  - fr : Mentions légales
  - ar : الإشعار القانوني
  - en : Legal notice
- `footer.rights`
  - fr : © {year} La Graine et les Saveurs
  - ar : © {year} La Graine et les Saveurs
  - en : © {year} La Graine et les Saveurs

### pages

- `pages.carte.metaTitle`
  - fr : La carte et les prix | La Graine et les Saveurs, Amiens
  - ar : قائمة الطعام والأسعار | La Graine et les Saveurs، أميان
  - en : Menu and prices | La Graine et les Saveurs, Amiens
- `pages.carte.metaDescription`
  - fr : Toute la carte de La Graine et les Saveurs à Amiens, avec les prix : couscous merguez, mouton, brochettes, trois viandes, tajines, grillades, sandwichs, pâtisseries orientales, cherbette.
  - ar : قائمة La Graine et les Saveurs في أميان كاملة بالأسعار: كسكس بالمرقاز وبالخروف وبالأسياخ وبثلاثة لحوم، طواجن، مشويات، سندويتشات، حلويات مغاربية، شربات.
  - en : The full menu of La Graine et les Saveurs in Amiens, with prices: merguez, lamb, skewer and three-meat couscous, tagines, grills, sandwiches, North African pastries, cherbette.
- `pages.carte.title`
  - fr : La carte
  - ar : قائمة الطعام
  - en : The menu
- `pages.legal.metaTitle`
  - fr : Mentions légales | La Graine et les Saveurs
  - ar : الإشعار القانوني | La Graine et les Saveurs
  - en : Legal notice | La Graine et les Saveurs
- `pages.legal.title`
  - fr : Mentions légales
  - ar : الإشعار القانوني
  - en : Legal notice
- `pages.legal.editor`
  - fr : Éditeur du site
  - ar : ناشر الموقع
  - en : Publisher
- `pages.legal.editorText`
  - fr : La Graine et les Saveurs, restaurant, 7 rue Saint-Jacques, 80000 Amiens. Téléphone : 09 78 81 28 24.
  - ar : La Graine et les Saveurs، مطعم، 7 rue Saint-Jacques، 80000 Amiens، فرنسا. الهاتف: 09 78 81 28 24.
  - en : La Graine et les Saveurs, restaurant, 7 rue Saint-Jacques, 80000 Amiens, France. Phone: +33 9 78 81 28 24.
- `pages.legal.company`
  - fr : Raison sociale
  - ar : الاسم التجاري
  - en : Company name
- `pages.legal.siret`
  - fr : SIRET
  - ar : رقم SIRET
  - en : SIRET
- `pages.legal.pending`
  - fr : en cours de renseignement
  - ar : قيد الإدخال
  - en : to be completed
- `pages.legal.host`
  - fr : Hébergeur
  - ar : الاستضافة
  - en : Hosting
- `pages.legal.data`
  - fr : Données personnelles
  - ar : البيانات الشخصية
  - en : Personal data
- `pages.legal.dataText`
  - fr : Les informations du formulaire de réservation (nom, téléphone, e-mail, demande) servent uniquement à traiter votre réservation. Elles ne sont ni revendues ni utilisées à des fins publicitaires. Vous pouvez demander leur suppression en appelant le restaurant.
  - ar : تُستخدم بيانات استمارة الحجز (الاسم، الهاتف، البريد، الطلب) فقط لمعالجة حجزكم، ولا تُباع ولا تُستعمل لأغراض إعلانية. يمكنكم طلب حذفها بالاتصال بالمطعم.
  - en : The details from the booking form (name, phone, email, request) are only used to handle your booking. They are never sold or used for advertising. You can ask for them to be deleted by calling the restaurant.
- `pages.legal.cookies`
  - fr : Cookies
  - ar : ملفات تعريف الارتباط
  - en : Cookies
- `pages.legal.cookiesText`
  - fr : Le site n'utilise pas de cookie publicitaire ni de mesure d'audience. Un cookie technique retient seulement la langue choisie.
  - ar : لا يستخدم الموقع ملفات تعريف ارتباط إعلانية أو لقياس الزيارات. ملف تقني واحد يحفظ اللغة المختارة فقط.
  - en : This site uses no advertising or analytics cookies. One technical cookie only remembers your language.
- `pages.legal.photos`
  - fr : Photos
  - ar : الصور
  - en : Photos
- `pages.legal.photosText`
  - fr : Photos : La Graine et les Saveurs. Toute reproduction est interdite sans autorisation.
  - ar : الصور: La Graine et les Saveurs. يُمنع نسخها دون إذن.
  - en : Photos: La Graine et les Saveurs. No reproduction without permission.

### alt


## Textes alternatifs des photos

- `couscous-mouton-assiette-bleue` · fr : Couscous au mouton, légumes et pois chiches, dans une assiette tunisienne bleue · ar : كسكس بلحم الخروف والخضار والحمّص في صحن تونسي أزرق · en : Lamb couscous with vegetables and chickpeas on a blue Tunisian plate
- `table-vue-du-dessus` · fr : Table vue du dessus : couscous, poulet rôti, brochettes, merguez et cherbette · ar : مائدة من الأعلى: كسكس ودجاج محمّر وأسياخ ومرقاز وشربات · en : Table seen from above: couscous, roast chicken, skewers, merguez and cherbette
- `couscous-mouton` · fr : Couscous au mouton dans une assiette bleue et blanche · ar : كسكس بلحم الخروف في صحن أزرق وأبيض · en : Lamb couscous on a blue and white plate
- `couscous-legumes` · fr : Couscous aux légumes, potiron et carottes · ar : كسكس بالخضار والقرع والجزر · en : Vegetable couscous with pumpkin and carrots
- `table-couscous-grillades` · fr : Couscous et grillades partagés sur une table en bois · ar : كسكس ومشويات على مائدة خشبية · en : Couscous and grills shared on a wooden table
- `merguez-grillees` · fr : Merguez grillées · ar : مرقاز مشوي · en : Grilled merguez
- `brochettes-agneau` · fr : Brochettes d'agneau grillées · ar : أسياخ لحم خروف مشوية · en : Grilled lamb skewers
- `cotes-agneau` · fr : Côtes d'agneau grillées · ar : أضلاع خروف مشوية · en : Grilled lamb chops
- `poulet-roti` · fr : Poulet rôti découpé sur un plat en métal · ar : دجاج محمّر مقطّع في طبق معدني · en : Roast chicken, carved, on a metal platter
- `cherbette` · fr : Verre de cherbette, citronnade au lait et à la fleur d'oranger · ar : كأس شربات: عصير ليمون بالحليب وماء الزهر · en : A glass of cherbette, lemonade with milk and orange blossom
- `table-dressee-mur-bleu` · fr : Table dressée devant le mur bleu de la salle · ar : مائدة معدّة أمام الجدار الأزرق للقاعة · en : Table laid in front of the blue wall of the dining room
- `salle-mur-bleu` · fr : La salle du restaurant, mur bleu, tapis rouge et tables en bois · ar : قاعة المطعم: جدار أزرق وزربية حمراء وطاولات خشبية · en : The dining room: blue wall, red rug and wooden tables
