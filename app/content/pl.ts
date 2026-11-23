// Polish copy (served at /pl/). Same shape as en.ts, checked by the Content
// type. No prices on the site: formats give typical durations only.
import type { Content, Entry, Pillar } from "./en";

export const pl: Content = {
  locale: "pl",
  meta: {
    title: "Pristis Management — przegląd systemów AI, ratowanie projektów IT, fractional CTO",
    description:
      "Niezależne wsparcie dla prezesów i liderów technologii: ocena jakości i kosztu systemów AI przed skalowaniem, ratowanie zagrożonych projektów IT oraz przywództwo technologiczne jako fractional lub interim CTO. Wyłącznie B2B.",
    ogTitle: "Pristis Management — AI gotowe do wdrożenia, projekty IT z powrotem na torach",
    ogLocale: "pl_PL",
    privacyTitle: "Prywatność",
    privacyDescription: "Jak PRISTIS Paweł Bajorek (Pristis Management) przetwarza dane osobowe.",
  },

  nav: [
    { href: "#services", label: "Usługi" },
    { href: "#start", label: "Jak zacząć" },
    { href: "#results", label: "Wyniki" },
    { href: "#ai", label: "AI" },
    { href: "#leadership", label: "Przywództwo" },
    { href: "#about", label: "O mnie" },
  ],

  hero: {
    eyebrow: "Doradztwo dla prezesów i liderów technologii",
    title: "Sprawdź, czy Twój system AI jest gotowy do wdrożenia.",
    accent: "Poprowadź trudny projekt IT do końca.",
    lead: "Pomagam zarządom i liderom technologii ocenić jakość oraz koszt systemów AI, ratować zagrożone projekty i prowadzić zespoły jako fractional CTO. Ponad 20 lat budowania organizacji inżynierskich – i pracujesz bezpośrednio ze mną.",
    primary: "Porozmawiajmy o projekcie (30 min)",
    secondary: "Zobacz wszystkie usługi",
    entriesTitle: "Najczęściej zaczynamy od",
    entries: [
      {
        id: "ai-health-check",
        offer: "Przegląd systemu AI",
        note: "Po pilotażu AI",
        result: "Jakość, koszt i lista poprawek w 2 tygodnie",
        icon: "pulse",
      },
      {
        id: "project-rescue",
        offer: "Ratowanie projektu IT",
        note: "Opóźnienie lub przekroczony budżet",
        result: "Diagnoza i plan 30/60/90 dni w 2 tygodnie",
        icon: "lifebuoy",
      },
      {
        id: "fractional-cto",
        offer: "Fractional CTO",
        note: "Luka w przywództwie technologicznym",
        result: "Doświadczony lider kilka dni w miesiącu",
        icon: "compass",
      },
    ],
  },

  facts: [
    { value: "20+", label: "lat w IT i przywództwie technologicznym" },
    { value: "300+", label: "inżynierów w zespołach, którymi kierowałem" },
    { value: "$100M+", label: "budżetów IT, którymi zarządzałem" },
    { value: "10", label: "transformacji chmurowych (GCP, AWS)" },
  ],

  industries: ["Bankowość", "Technologie lotnicze", "Energetyka", "Logistyka", "Ochrona zdrowia", "Sektor publiczny"],

  problems: {
    kicker: "Z czym zgłaszają się klienci",
    title: "Pytania, które słyszę najczęściej",
    items: [
      {
        q: "„Zrobiliśmy pilotaż AI. Skąd mamy wiedzieć, czy odpowiedzi są wystarczająco dobre?”",
        a: "Bez zbioru testowego i miar jakości nikt tego nie wie. Dlatego praca z AI zaczyna się od ewaluacji – wtedy zarząd decyduje na podstawie faktów, a nie efektownego demo.",
      },
      {
        q: "„Nasi programiści korzystają z asystentów AI. Czy to się naprawdę opłaca?”",
        a: "Często nikt tego nie mierzy. Jasne zasady bezpieczeństwa i jakości kodu oraz kilka uczciwych miar pokazują, gdzie zysk jest realny, a gdzie to tylko wrażenie.",
      },
      {
        q: "„Potrzebujemy CTO, ale nie na pełen etat. Da się tak?”",
        a: "Tak. Fractional CTO pracuje kilka dni w miesiącu nad strategią, architekturą, zespołem i dostarczaniem, a interim CTO wypełnia lukę do czasu zatrudnienia stałej osoby.",
      },
      {
        q: "„Pracujemy zwinnie, a każda większa zmiana angażuje pięć zespołów i mimo to się opóźnia. Dlaczego?”",
        a: "Zwykle winna jest struktura i zależności między zespołami, a nie ludzie – i to, że nikt nie koordynuje pracy między nimi. Da się to zdiagnozować i naprawić krok po kroku.",
      },
    ],
  },

  pillars: {
    kicker: "Usługi",
    title: "Dwa filary,",
    accent: "jeden partner.",
    lead: "Wszystko, co robię, sprowadza się do dwóch rzeczy: żeby AI działało w praktyce i żeby organizacja technologiczna dowoziła. Każda usługa niżej ma jasne miejsce: o czym pozwala zdecydować i co następuje po niej.",
    cta: "Porozmawiajmy o Twojej sytuacji",
    items: [
      {
        id: "pillar-ai",
        number: "01",
        title: "AI w praktyce",
        tagline: "Najpierw dowody, potem skala.",
        lead: "AI, które działa na Twoich danych i w Twoich procesach, z jakością i kosztem zmierzonymi, zanim ktokolwiek zdecyduje o skalowaniu.",
        icon: "spark",
        services: [
          {
            title: "Strategia AI i wybór zastosowań",
            text: "Warsztat decyzyjny dla zarządu: priorytety, ryzyka i kolejne decyzje. W razie potrzeby strategia z planem, właścicielami i finansowaniem – a dla każdego zastosowania wariant buduj / kup / odłóż, z punktem odniesienia i ryzykiem.",
            format: "warsztat · 1–2 dni · strategia 3–4 tygodnie",
          },
          {
            title: "Budowa aplikacji AI",
            text: "Projektuję architekturę i prowadzę budowę: asystenci na wiedzy firmy (RAG), agenci korzystający z Twoich narzędzi, wybór modelu. Kto implementuje, kto utrzymuje system i jak przekazujemy kod – ustalamy na początku.",
            format: "6–12 tygodni · projekt",
          },
          {
            title: "Gotowość produkcyjna (LLMOps)",
            text: "Kolejny etap po przeglądzie systemu AI: kryteria odbioru, zabezpieczenia i ochrona przed prompt injection, monitoring, procedury operacyjne i wskazany właściciel systemu.",
            format: "3–6 tygodni",
          },
          {
            title: "AI dla zespołów inżynierskich",
            text: "Zasady bezpiecznego korzystania z asystentów i agentów do programowania oraz mierzone wdrożenie: czas od zmiany do wdrożenia, poprawki po review i regresje – względem poziomu wyjściowego.",
            format: "4–8 tygodni",
          },
        ],
        note: "Ład w obszarze AI dopasowujemy do zastosowania: polityka korzystania z AI, rejestr systemów AI i wstępna kwalifikacja ryzyka według AI Act. Ocena prawna pozostaje po stronie Twoich prawników.",
      },
      {
        id: "pillar-leadership",
        number: "02",
        title: "Przywództwo technologiczne",
        tagline: "Doświadczony lider tam, gdzie go brakuje.",
        lead: "Organizacja technologiczna, która dowozi przewidywalnie: jasny kierunek, solidna architektura, silni liderzy i projekty, które się kończą – jako fractional CTO kilka dni w miesiącu albo jako interim CTO na okres przejściowy.",
        icon: "compass",
        services: [
          {
            title: "Interim CTO",
            text: "Na czas wakatu lub zmiany: mandat, dostępność, rytm pracy i przekazanie roli stałemu liderowi ustalamy przed startem.",
            format: "określony czas",
          },
          {
            title: "Audyt technologii i architektury",
            text: "Dla firm bez nagłego kryzysu: co działa, co blokuje rozwój, gdzie jest dług technologiczny. Dostajesz rejestr ryzyk i plan zmian. Test penetracyjny bezpieczeństwa to osobna usługa.",
            format: "3–5 tygodni",
          },
          {
            title: "Dostarczanie i zarządzanie projektami",
            text: "Przewidywalna realizacja projektów: krótka diagnoza z wynikiem na piśmie, a potem zmiany wdrażane przez 2–4 miesiące – priorytety, ład portfelowy, działające PMO i dopasowana metoda (PRINCE2, praktyki PMI, agile albo połączenie).",
            format: "diagnoza 2–3 tygodnie · zmiany 2–4 miesiące",
          },
          {
            title: "Procesy inżynierskie i projektowanie organizacji",
            text: "Zwykle po audycie albo w ramach roli CTO: struktura zespołów pod szybki przepływ, mniej zależności, CI/CD i zarządzanie wydaniami. Mierzone przepływem, liczbą przekazań i czasem do produkcji.",
            format: "2–4 miesiące",
          },
          {
            title: "Rozwój liderów i rekrutacja",
            text: "Mentoring jeden na jeden dla CTO i VP of Engineering, program dla menedżerów inżynierii oraz pomoc w rekrutacji na kluczowe role: projekt procesu, udział w ocenie kandydatów i plan sukcesji.",
            format: "1:1 co miesiąc · grupa 3–6 miesięcy",
          },
        ],
        note: "Ratowanie projektu IT, fractional CTO i Scaled Agile realizuję jako formy współpracy z określonym startem – zobacz niżej.",
      },
    ] as Pillar[],
  },

  entries: {
    kicker: "Jak zacząć",
    title: "Zacznij od jednego konkretnego kroku,",
    accent: "a potem rozwijajmy współpracę.",
    lead: "Każda forma współpracy ma określony rezultat, potrzebne dane i jasny sposób przekazania wyniku. Terminy są typowe i liczą się od chwili, gdy mamy dostęp do ludzi i danych.",
    leadsTo: "Prowadzi do filaru",
    cta: "Zapytaj o to",
    groups: [
      {
        id: "ai",
        pillar: "AI w praktyce",
        icon: "spark",
        items: [
          {
            id: "ai-health-check",
            title: "Przegląd systemu AI",
            time: "2 tygodnie",
            text: "Dla CTO i właścicieli produktu po pilotażu. Jeden system lub proces, próbka testowa z realnych przypadków: jakość odpowiedzi, koszt zapytania, czas odpowiedzi, bezpieczeństwo i monitoring. Dostajesz listę poprawek uszeregowaną według wpływu i rekomendację kolejnego kroku.",
            icon: "pulse",
          },
          {
            id: "ai-sprint",
            title: "AI Sprint",
            time: "5 dni",
            text: "Jeden proces, uzgodniona próbka danych i ograniczony prototyp z wynikiem testu, żeby decyzja „budujemy czy nie” opierała się na dowodach. Potrzebny jest sponsor, dostęp do danych, zatwierdzone środowisko i brak złożonej integracji; bez danych zaczynamy od diagnozy.",
            icon: "bolt",
          },
          {
            id: "ai-coding-pilot",
            title: "Pilotaż asystentów AI dla programistów",
            time: "4–6 tygodni",
            text: "Zasady bezpieczeństwa i jakości kodu, a potem pilotaż na porównywalnej pracy: czas od zmiany do wdrożenia, poprawki po review i regresje, zmierzone względem poziomu wyjściowego. Widzisz, czy zysk jest realny.",
            icon: "chart",
          },
        ] as Entry[],
      },
      {
        id: "leadership",
        pillar: "Przywództwo technologiczne",
        icon: "compass",
        items: [
          {
            id: "project-rescue",
            title: "Ratowanie projektu IT",
            time: "2 tygodnie",
            text: "Dla prezesa, CIO lub sponsora opóźnionego albo przekraczającego budżet projektu. Niezależna diagnoza i plan naprawczy 30/60/90 dni, którego obronisz przed zarządem. Prowadzenie naprawy to osobny, kolejny etap.",
            icon: "lifebuoy",
          },
          {
            id: "fractional-cto",
            title: "Fractional CTO",
            time: "od 2 dni w miesiącu",
            text: "Doświadczone przywództwo technologiczne bez zatrudniania na etat: architektura, priorytety, zespół i dostarczanie, decydowane razem z Tobą w stałym rytmie. Szerszy mandat wymaga więcej czasu w miesiącu, ustalonego na początku.",
            icon: "compass",
          },
          {
            id: "scaled-agile",
            title: "Scaled Agile (SAFe®)",
            time: "pierwszy ART w 8–12 tygodni",
            text: "Dla kilku zespołów pracujących nad jednym produktem. Po ocenie gotowości, mandatu i dostępności zespołów: strumienie wartości i uruchomienie pierwszego Agile Release Train (ART) z pierwszym PI Planning.",
            icon: "train",
          },
        ] as Entry[],
      },
    ],
    shared: {
      title: "Dla obu filarów",
      items: [
        {
          id: "due-diligence",
          title: "Techniczne due diligence, także AI",
          time: "2–4 tygodnie",
          text: "Dla funduszy VC i PE: technologia, architektura, zespół, zależność od dostawców i koszty – oraz to, czy AI w spółce to realna przewaga, czy nakładka na cudzy model. Rejestr ryzyk i podsumowanie dla komitetu inwestycyjnego; zakres zależy od dostępu do danych.",
          icon: "search",
        },
        {
          id: "cost-optimisation",
          title: "Optymalizacja kosztów chmury i AI",
          time: "3–6 tygodni",
          text: "Przegląd rachunków za chmurę i modele AI, z oszczędnościami, które da się wdrożyć i zmierzyć. Jeśli wynagrodzenie zależy od oszczędności, najpierw uzgadniamy punkt wyjścia, wolumeny, rabaty, koszty zmiany, okres pomiaru i jakość.",
          icon: "chart",
        },
        {
          id: "rd-review",
          title: "Techniczny przegląd B+R",
          time: "1–2 tygodnie",
          text: "Wspieram zespoły IT i R&D w odtworzeniu i udokumentowaniu przebiegu prac nad oprogramowaniem. Otrzymasz karty projektów, wykaz źródeł dowodów oraz listę luk do uzupełnienia. Materiał przekazujemy Tobie i Twojemu doradcy podatkowemu do odrębnej oceny rozliczenia.",
          icon: "coins",
          link: { href: "#ai-rd", label: "Jak to działa" },
        },
      ] as Entry[],
    },
  },

  aiExpertise: {
    kicker: "Za filarem 01",
    title: "Obie strony AI:",
    accent: "sala zarządu i budowa.",
    lead: "Projekty AI upadają w dwóch miejscach: w sali zarządu, gdy oczekiwania buduje się na demo, i przy budowie, gdy nikt nie mierzy jakości i kosztów. Pracuję po obu stronach.",
    items: [
      {
        title: "W sali zarządu",
        text: "Wykształcenie z matematyki stosowanej: rozumiem, jak uczą się modele, dlaczego się mylą i gdzie są ich granice – i tłumaczę to zarządom prostym językiem.",
        points: [
          "Warsztaty dla zarządów bez szumu marketingowego",
          "Uzasadnienie biznesowe z uczciwą opcją „nie róbcie tego”",
          "Wpływ na role i ludzi, nie tylko na procesy",
          "Polityka korzystania z AI i wstępna kwalifikacja ryzyka według AI Act",
        ],
        icon: "compass",
      },
      {
        title: "Przy budowie",
        text: "Praktyczne doświadczenie w dostarczaniu systemów AI i uczenia maszynowego – od pierwszego prototypu po produkcję.",
        points: [
          "Rozwiązanie AI do wyważenia samolotów (weight & balance) – od koncepcji po wdrożenie",
          "Produkty uczenia maszynowego do sprzedaży usług lotniczych, z globalnym partnerem technologicznym",
          "Praktyka z RAG, agentami i ewaluacją na współczesnych modelach bazowych",
          "Koszt, czas odpowiedzi i bezpieczeństwo wbudowane od pierwszego prototypu",
        ],
        icon: "spark",
      },
    ],
  },

  aiPrinciples: {
    kicker: "Jak podchodzę do AI",
    title: "Mniej szumu,",
    accent: "więcej dowodów.",
    items: [
      {
        title: "Zacznij od problemu, nie od modelu",
        text: "Najpierw proces i miara, która ma znaczenie, potem technologia. Czasem najlepsza odpowiedź to prostsze narzędzie – albo w ogóle bez AI.",
      },
      {
        title: "Najpierw ewaluacja, potem skala",
        text: "Bez zbioru testowego i kryteriów jakości nie ma decyzji o wdrożeniu. Ewaluacja jest wbudowana od pierwszego prototypu, a nie dodana na końcu.",
      },
      {
        title: "Znaj koszt każdej odpowiedzi",
        text: "Koszt i czas odpowiedzi są częścią architektury, a nie niespodzianką na fakturze: właściwy model do zadania, cache i monitoring zużycia.",
      },
      {
        title: "Człowiek w pętli",
        text: "AI ma wspierać osąd doświadczonych ludzi, a nie po cichu go zastępować. Jasna odpowiedzialność, informacja zwrotna i możliwość korygowania systemu.",
      },
    ],
  },

  aiRd: {
    kicker: "AI i ulga B+R",
    title: "Rozwój AI, który może kwalifikować się",
    accent: "do ulgi B+R.",
    text: [
      "Twórcze i systematyczne prace rozwojowe nad oprogramowaniem i AI mogą spełniać definicję prac rozwojowych w rozumieniu prawa podatkowego. Każdy projekt ocenia się indywidualnie; rutynowe zmiany i utrzymanie się nie kwalifikują. Planuję takie projekty tak, żeby od pierwszego dnia prace techniczne były dokumentowane w sposób, jakiego wymaga ulga B+R.",
      "Podział ról jest jasny. Ja opisuję problem techniczny, niepewność i przebieg prac oraz wskazuję dokumenty i luki. Licencjonowany doradca podatkowy ocenia skutki podatkowe, koszty kwalifikowane i sposób rozliczenia.",
    ],
    points: [
      "Kwalifikowane koszty osobowe prac B+R mogą być odliczone w 200%, pozostałe kwalifikowane koszty w 100% (stawki standardowe)",
      "Można przejrzeć wcześniejsze lata podatkowe, które nie uległy przedawnieniu – każdy oceniany osobno",
      "Dokumentacja prowadzona na bieżąco, a nie odtwarzana po fakcie",
    ],
    cta: "Poproś o techniczny przegląd B+R",
    ctaSubject: "Techniczny przegląd B+R",
  },

  results: {
    kicker: "Wybrane wyniki",
    title: "Liczby z dotychczasowej pracy",
    note: "Wyniki z moich wcześniejszych ról w branży oprogramowania, bankowości, technologii lotniczych i logistyce – osiągnięte przez zespoły i programy, którymi kierowałem lub w których pracowałem.",
    items: [
      {
        value: "−80%",
        title: "zasobów potrzebnych do wyważenia samolotu",
        text: "Rozwiązanie oparte na AI dla linii lotniczych, wymyślone i zbudowane od zera.",
      },
      {
        value: "20 → 150+",
        title: "inżynierów w 3 lata",
        text: "Zbudowałem organizację inżynierską stojącą za platformą automatów paczkowych wdrożoną w 8 krajach.",
      },
      {
        value: "−50%",
        title: "czasu cyklu dostarczania oprogramowania",
        text: "Nowy ład portfelowy i zautomatyzowany proces zatwierdzania zmian.",
      },
      {
        value: "−30%",
        title: "problemów produkcyjnych",
        text: "Przebudowa zespołów i bezpośrednie zaangażowanie inżynierów w problemy klientów.",
      },
      {
        value: "ML",
        title: "nowy produkt dla lotnictwa",
        text: "Inteligentna sprzedaż usług dodatkowych linii lotniczych, zbudowana z globalnym partnerem technologicznym.",
      },
      {
        value: "10",
        title: "transformacji chmurowych",
        text: "Przeniesienie usług do GCP i AWS w globalnych bankach i w technologiach lotniczych.",
      },
    ],
  },

  steps: {
    kicker: "Jak pracuję",
    title: "Krótkie etapy, jasne zobowiązania",
    items: [
      {
        when: "Tydzień 0",
        title: "Rozmowa wstępna",
        text: "30 minut, bezpłatnie. Sprawdzamy, gdzie jesteś, czego potrzebujesz i czy jestem właściwą osobą, żeby pomóc.",
      },
      {
        when: "Tygodnie 1–3",
        title: "Diagnoza",
        text: "Przegląd technologii, zespołu i procesów. Na piśmie: co zrobimy, jaki będzie rezultat i jak go zmierzymy.",
      },
      {
        when: "Tygodnie 4–12",
        title: "Realizacja",
        text: "Pracuję z Twoim zespołem, a nie obok niego. Krótkie cykle i regularne przeglądy wyników z zarządem.",
      },
      {
        when: "Na koniec",
        title: "Przekazanie",
        text: "Twój zespół przejmuje stery: dokumentacja, miary i instrukcje operacyjne. Pozostaję dostępny, gdy będę potrzebny.",
      },
    ],
  },

  models: {
    kicker: "Formy współpracy",
    items: [
      { title: "Projekt o określonym zakresie", text: "Zakres i rezultat uzgodnione z góry." },
      { title: "Stałe wsparcie", text: "Kilka dni w miesiącu, np. jako fractional CTO." },
      { title: "Powiązanie z wynikiem", text: "Przy optymalizacji kosztów: wynagrodzenie powiązane z oszczędnościami mierzonymi względem uzgodnionego punktu wyjścia." },
      { title: "Interim", text: "Rola lidera na określony czas, z mandatem i dostępnością ustalonymi na początku." },
    ],
  },

  leadership: {
    kicker: "Za filarem 02",
    title: "Przywództwo w praktyce:",
    accent: "ludzie, struktura, dostarczanie.",
    lead: "Organizacje technologiczne zwalniają z dwóch powodów: struktura przestaje pasować do wielkości firmy, a dostarczanie traci rytm. Naprawiałem jedno i drugie – od środka.",
    items: [
      {
        title: "Organizacja i ludzie",
        text: "Budowa i prowadzenie organizacji inżynierskich – od kilku zespołów po ponad 300 inżynierów w kilku krajach.",
        points: [
          "Organizacja inżynierska rozbudowana z 20 do ponad 150 osób w 3 lata",
          "Struktura zespołów i architektura kształtowane razem",
          "Liderzy rozwijani wewnątrz, z jasnymi poziomami decyzji",
          "Szczera informacja zwrotna na co dzień, nie raz w roku",
        ],
        icon: "compass",
      },
      {
        title: "Dostarczanie",
        text: "Duże programy w bankowości, technologiach lotniczych i energetyce – prowadzone metodą, która pasuje, a nie tą, która jest modna.",
        points: [
          "Czas dostarczania oprogramowania skrócony o połowę",
          "Scaled Agile wdrożony w kilku organizacjach",
          "PMP®, PRINCE2® i Scrum, dopasowane do firmy",
          "Ład portfelowy, na którym zarząd może polegać",
        ],
        icon: "layers",
      },
    ],
  },

  orgPrinciples: {
    kicker: "Jak buduję organizacje",
    title: "Cztery zasady,",
    accent: "jeden system.",
    items: [
      {
        title: "Projektuj zespoły pod przepływ",
        text: "Struktura zespołów wyznacza tempo dostarczania bardziej niż jakakolwiek metodyka.",
      },
      {
        title: "Zarządzaj systemem, nie ludźmi",
        text: "Lider tworzy warunki do dobrej pracy, zamiast kontrolować każdy krok.",
      },
      {
        title: "Szczerość buduje zaufanie",
        text: "Jasna, uczciwa informacja zwrotna to forma szacunku – dla ludzi i dla wyników.",
      },
      {
        title: "Strategia jest prosta, liczy się wykonanie",
        text: "Kierunek mieści się na jednej stronie. Różnicę robi konsekwencja w działaniu.",
      },
    ],
  },

  bookshelf: {
    kicker: "Biblioteczka",
    title: "Książki, które ukształtowały moją pracę",
    items: [
      {
        title: "Winning",
        author: "Jack Welch, Suzy Welch",
        text: "Szczerość, właściwi ludzie na właściwych miejscach i konsekwentne wykonanie.",
      },
      {
        title: "Management 3.0",
        author: "Jurgen Appelo",
        text: "Zarządzanie systemem, a nie ludźmi – i realna odpowiedzialność zespołów.",
      },
      {
        title: "Team Topologies",
        author: "Matthew Skelton, Manuel Pais",
        text: "Zespoły projektowane pod szybki przepływ, ze strukturą i architekturą kształtowanymi razem.",
      },
      {
        title: "Quo vAIdis",
        author: "Andrzej Dragan",
        text: "Jak uczą się maszyny, co naprawdę potrafią i co to oznacza dla ludzi.",
      },
      {
        title: "AI Engineering",
        author: "Chip Huyen",
        text: "Budowa produkcyjnych aplikacji na modelach bazowych – z ewaluacją na pierwszym miejscu.",
      },
    ],
  },

  about: {
    kicker: "O mnie",
    name: "Paweł Bajorek",
    role: "Założyciel, Pristis Management",
    text: [
      "Od ponad 20 lat buduję oprogramowanie i zespoły, które je tworzą. Zaczynałem jako programista i architekt w dużym software house, potem prowadziłem programy w dwóch globalnych bankach i w globalnej firmie technologicznej dla lotnictwa. Jako Software Engineering Director w globalnej firmie technologicznej z branży energetycznej kierowałem organizacją liczącą ponad 300 inżynierów.",
      "Wykształcenie matematyczne pozwala mi rozumieć AI od środka – jak uczą się sieci neuronowe, dlaczego się mylą i gdzie są ich granice. Łączę to z praktyczną wiedzą o budowie systemów produkcyjnych na modelach bazowych: wyszukiwanie w wiedzy firmy, agenci, ewaluacja, dostrajanie oraz kontrola kosztów i czasu odpowiedzi. W technologiach lotniczych pracowałem z globalnym partnerem technologicznym nad produktami opartymi na uczeniu maszynowym i kierowałem stworzeniem rozwiązania AI do wyważania samolotów.",
      "Moje podejście do przywództwa jest proste. Właściwi ludzie na właściwych miejscach, szczerość wobec nich i strategia na tyle jasna, żeby każdy mógł według niej działać. Potem zarządzanie systemem, a nie ludźmi: realna odpowiedzialność zespołów z jasnymi granicami decyzji i organizacja zaprojektowana tak, żeby praca płynęła szybko – ze strukturą zespołów i architekturą kształtowanymi razem i bez zespołów obciążonych ponad miarę.",
      "Zarządzanie projektami to jedna z moich mocnych stron: mam certyfikaty PRINCE2 i Scrum, w 2011 roku zdobyłem PMP®, a Scaled Agile wdrażałem w kilku organizacjach. Nie bronię jednej metody – wybieram i dopasowuję tę, która pasuje do firmy.",
      "Jestem matematykiem (AGH) i mam MBA. Z każdym klientem pracuję osobiście – bez przekazywania projektu juniorom i bez prezentacji, które niczego nie zmieniają.",
    ],
    credentialsTitle: "Wykształcenie i certyfikaty",
    credentials: [
      "MBA — Uniwersytet WSB",
      "Magister matematyki stosowanej — AGH",
      "PMP® — Project Management Institute (zdobyty w 2011)",
      "PRINCE2® Practitioner",
      "Professional Scrum Master I",
      "ITIL® Foundation",
      "ESG: analiza podwójnej istotności (ESRS)",
    ],
    nameNote:
      "Skąd nazwa? Po łacinie pristis oznaczała szybki okręt wojenny. Tak nazywał się też jeden ze statków Eneasza w „Eneidzie” Wergiliusza. Tak widzę swoją rolę: pomóc Ci wyznaczyć kurs i sprawnie poprowadzić zmianę do celu.",
    linkedin: "Profil na LinkedIn",
  },

  faq: {
    kicker: "FAQ",
    title: "Najczęstsze pytania",
    items: [
      {
        q: "Kiedy warto się zgłosić?",
        a: "Gdy masz już zespół techniczny i stoisz przed konkretną decyzją: czy rozwijać pilotaż AI, jak odzyskać kontrolę nad projektem albo jak wypełnić lukę w przywództwie technologicznym. Pracuję wyłącznie z firmami (B2B), od startupów po duże organizacje.",
      },
      {
        q: "Jak ustalamy koszt współpracy?",
        a: "Po pierwszej rozmowie proponuję na piśmie zakres i wycenę dopasowane do Twojej sytuacji. Formy współpracy mają określony zakres i rezultat, więc z góry wiesz, co dostajesz.",
      },
      {
        q: "Tylko doradzasz, czy pomagasz też budować systemy AI?",
        a: "Jedno i drugie. Projektuję architekturę, ustalam kryteria jakości i prowadzę budowę razem z Twoim zespołem. Kto pisze kod, kto utrzymuje system i jak go przekazujemy – ustalamy przed startem.",
      },
      {
        q: "Jakiego modelu AI powinniśmy używać?",
        a: "To zależy od zadania i Twoich wymagań co do jakości, kosztu, czasu odpowiedzi i danych. Wybieram na podstawie testów na Twoich przypadkach, a nie publicznych rankingów – i często różne zadania dostają różne modele.",
      },
      {
        q: "A bezpieczeństwo danych w projektach AI?",
        a: "To pierwszy temat w każdym projekcie: wybór modeli i miejsca przetwarzania danych, zasady dostępu, poufność i to, jak dostawca modelu może korzystać z danych. Pomagam wdrożyć techniczne środki wynikające z RODO i AI Act oraz udokumentować role; ocenę prawną uzgadniamy z Twoimi prawnikami.",
      },
      {
        q: "Czy pracujesz z klientami spoza Polski?",
        a: "Tak. Większość kariery spędziłem w międzynarodowych, rozproszonych zespołach. Pracuję zdalnie i na miejscu.",
      },
    ],
  },

  contact: {
    title: "Porozmawiajmy o Twoim projekcie.",
    text: "Napisz kilka zdań o swojej sytuacji: o czym musisz zdecydować i do kiedy. Odpowiem i zaproponuję termin 30-minutowej rozmowy.",
    subject: "Rozmowa 30 min",
    button: "Napisz w sprawie rozmowy",
    copy: "Kopiuj adres",
    copied: "Skopiowano",
    topic: "Temat:",
    hint: "Przycisk otwiera Twój program pocztowy. Jeśli nic się nie dzieje, skopiuj adres powyżej.",
    privacy: "Jak przetwarzam Twoje dane",
  },

  calc: {
    numberLocale: "pl-PL",
    title: "Symulacja ulgi B+R",
    intro: "Przykładowy efekt podatkowy ulgi B+R za jeden rok podatkowy.",
    staffLabel: "Kwalifikowane koszty osobowe prac B+R (jeden rok, pełne złote, np. 500 000)",
    staffHint:
      "Wynagrodzenia pracowników oraz wynagrodzenia z umów zlecenia i o dzieło, wraz ze składkami finansowanymi przez płatnika – w proporcji do czasu poświęconego na B+R. Odliczane w 200%.",
    otherLabel: "Pozostałe kwalifikowane koszty (jeden rok, pełne złote, np. 100 000)",
    otherHint:
      "Np. materiały, specjalistyczny sprzęt, odpisy amortyzacyjne, patenty oraz ekspertyzy i usługi kupione od jednostek naukowych, takich jak uczelnie czy instytuty badawcze. Odliczane w 100%.",
    regime: "Forma opodatkowania",
    rates: { cit19: "CIT 19%", cit9: "CIT 9%", pit19: "PIT liniowy 19%" },
    cit9Note:
      "CIT 9% dotyczy małych podatników (przychody ze sprzedaży do 2 mln euro w poprzednim roku) i spółek w pierwszym roku działalności, i tylko dopóki przychody w bieżącym roku podatkowym nie przekroczą równowartości 2 mln euro. Obejmuje dochody inne niż z zysków kapitałowych, przy spełnieniu dalszych warunków ustawowych.",
    effect: "Szacowane zmniejszenie podatku przy pełnym odliczeniu i odpowiednim dochodzie",
    costs: "Wpisane koszty kwalifikowane:",
    deduction: "Dodatkowe odliczenie od podstawy opodatkowania:",
    invalid: "Popraw zaznaczoną kwotę, aby zobaczyć wynik.",
    cit9Link: "Informacje o CIT na podatki.gov.pl",
    disclaimer:
      "Symulacja za jeden rok podatkowy dla typowego podatnika bez statusu centrum badawczo-rozwojowego (CBR); nie jest to porada podatkowa. Zakłada, że koszty są kwalifikowane i że dochód wystarcza na całe odliczenie – w CIT dochód ze źródeł innych niż zyski kapitałowe, w PIT dochód z działalności gospodarczej. Niewykorzystaną część można odliczyć w kolejnych sześciu latach podatkowych. To, czy prace i koszty się kwalifikują, zależy od charakteru prac, ich dokumentacji i sytuacji podatnika, i ocenia to licencjonowany doradca podatkowy. Skala podatkowa PIT nie jest uwzględniona.",
    errors: {
      empty: "Wpisz kwotę (0, jeśli brak).",
      negative: "Kwota nie może być ujemna.",
      mixed: "Używaj jednego separatora tysięcy w całej kwocie, np. 1 234 567 lub 1.234.567 (pełne złote, bez groszy).",
      format: "Podaj kwotę w pełnych złotych, np. 500 000.",
      max: "Kwoty powyżej 1 mld zł nie są obsługiwane.",
    },
  },

  ui: {
    bookCall: "Porozmawiajmy",
    skip: "Przejdź do treści",
    menu: "Menu",
    close: "Zamknij",
    contact: "Kontakt",
    mainMenu: "Menu główne",
    footerMenu: "Stopka",
    privacy: "Prywatność",
    backHome: "Wróć na stronę główną",
    home: "Pristis Management — na górę strony",
    workedWith: "Doświadczenie w",
    heroCaption: "Ponad 20 lat w technologii",
    timeNote:
      "Czasy realizacji to typowy czas projektu liczony od uzyskania dostępu do ludzi i danych; zależą od zakresu, gotowości zespołu i dostępności sponsora po Twojej stronie.",
    heroAlt: "Paweł Bajorek, założyciel Pristis Management",
    switchLabel: "EN",
    switchTitle: "English version",
  },
};
