// Polish copy (served at /pl/). Same shape as en.ts, checked by the Content
// type. No prices on the site: formats give typical durations only.
import type { Content, Entry, Pillar } from "./en";

export const pl: Content = {
  locale: "pl",
  meta: {
    title: "Pristis Management — AI w praktyce i przywództwo technologiczne",
    description:
      "Doradztwo i mentoring dla liderów technologii w dwóch obszarach: AI w praktyce (strategia, RAG, agenci AI, ewaluacja, wdrożenia produkcyjne) i przywództwo technologiczne (interim i fractional CTO, audyty, ratowanie projektów, Scaled Agile, projektowanie organizacji). Techniczne wsparcie ulgi B+R.",
    ogTitle: "Pristis Management — organizacje inżynierskie, które się skalują",
    ogLocale: "pl_PL",
    privacyTitle: "Prywatność",
    privacyDescription: "Jak PRISTIS Paweł Bajorek (Pristis Management) przetwarza dane osobowe.",
  },

  nav: [
    { href: "#services", label: "Usługi" },
    { href: "#start", label: "Jak zacząć" },
    { href: "#ai", label: "AI" },
    { href: "#leadership", label: "Przywództwo" },
    { href: "#results", label: "Wyniki" },
    { href: "#about", label: "O mnie" },
  ],

  hero: {
    eyebrow: "Doradztwo i mentoring dla liderów technologii",
    title: "Zbuduj organizację inżynierską,",
    accent: "która się skaluje.",
    lead: "Praktyczny partner dla liderów technologii w dwóch obszarach: AI w praktyce – od strategii na poziomie zarządu po systemy działające produkcyjnie – oraz przywództwo technologiczne – od interim CTO po zespoły i projekty, które dowożą. Ponad 20 lat budowania organizacji inżynierskich.",
    primary: "Umów 30-minutową rozmowę",
    secondary: "Zobacz dwa filary",
    entriesTitle: "Od czego zaczynasz?",
    entries: [
      { id: "ai", offer: "AI w praktyce", note: "Chcesz, żeby AI działało nie tylko na demo", icon: "spark" },
      {
        id: "leadership",
        offer: "Przywództwo technologiczne",
        note: "Potrzebujesz lidera technologii albo projektu z powrotem na torach",
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
    lead: "Wszystko, co robię, sprowadza się do dwóch rzeczy: żeby AI działało w praktyce i żeby organizacja technologiczna dowoziła. Węższe usługi opisane niżej to sposoby wejścia do tych dwóch filarów.",
    cta: "Porozmawiajmy o Twojej sytuacji",
    items: [
      {
        id: "pillar-ai",
        number: "01",
        title: "AI w praktyce",
        tagline: "Od sali zarządu do produkcji.",
        lead: "Od zrozumienia AI na poziomie zarządu po systemy działające produkcyjnie – na Twoich danych, w Twoich procesach i przy kosztach pod kontrolą.",
        icon: "spark",
        services: [
          {
            title: "Strategia AI i warsztaty dla zarządów",
            text: "Co AI potrafi, a czego nie: jak uczą się modele, gdzie się mylą i jakie niesie to ryzyka. Decyzje zarządu oparte na zrozumieniu, a nie na modzie.",
            format: "warsztat · 1–2 dni",
          },
          {
            title: "Wybór zastosowań: budować, kupić czy odpuścić",
            text: "Wybór zastosowań z realnym zwrotem – łącznie z uczciwym „nie róbcie tego”, gdy AI się nie opłaca.",
            format: "3–4 tygodnie",
          },
          {
            title: "Budowa aplikacji AI",
            text: "Architektura i techniczne prowadzenie budowy: asystenci na wiedzy firmy (RAG), agenci korzystający z Twoich narzędzi, wybór modelu, prompting, wyszukiwanie lub dostrajanie.",
            format: "6–12 tygodni · projekt",
          },
          {
            title: "Ewaluacja i jakość AI",
            text: "Zbiory testowe, kryteria jakości i miary powiązane z wynikami biznesowymi – żeby decyzja o skalowaniu opierała się na dowodach, a nie na udanym demo.",
            format: "2–4 tygodnie",
          },
          {
            title: "Gotowość produkcyjna (LLMOps)",
            text: "Zabezpieczenia, ochrona przed prompt injection, monitoring, pętle informacji zwrotnej oraz koszt i czas każdej odpowiedzi.",
            format: "3–6 tygodni",
          },
          {
            title: "AI dla zespołów inżynierskich",
            text: "Wdrożenie asystentów i agentów do programowania, zasady bezpieczeństwa i pomiar rzeczywistego wzrostu produktywności.",
            format: "4–8 tygodni",
          },
        ],
        note: "Ład w obszarze AI – polityka korzystania z AI, rejestr systemów AI i przygotowanie do AI Act – jest częścią każdego projektu AI.",
      },
      {
        id: "pillar-leadership",
        number: "02",
        title: "Przywództwo technologiczne",
        tagline: "Doświadczony lider technologii wtedy, gdy go potrzebujesz.",
        lead: "Organizacja technologiczna, która dowozi przewidywalnie: jasny kierunek, solidna architektura, silni liderzy i projekty, które kończą się sukcesem – z doświadczonym przywództwem dokładnie tam, gdzie go brakuje.",
        icon: "compass",
        services: [
          {
            title: "Interim i fractional CTO",
            text: "Przywództwo technologiczne na określony czas lub kilka dni w miesiącu: strategia, architektura, zespół i dostarczanie.",
            format: "od 2 dni w miesiącu",
          },
          {
            title: "Audyt technologii i architektury",
            text: "Jasny obraz Twoich systemów: co działa, co blokuje rozwój, gdzie jest dług technologiczny i ryzyka bezpieczeństwa oraz co naprawić najpierw.",
            format: "3–5 tygodni",
          },
          {
            title: "Dostarczanie i portfel projektów",
            text: "Przewidywalne dostarczanie w całym portfelu: priorytety, ład projektowy, działające PMO i raportowanie, na którym zarząd może polegać.",
            format: "diagnoza · 2–4 miesiące",
          },
          {
            title: "Procesy inżynierskie i DevOps",
            text: "Droga kodu od pomysłu do produkcji: CI/CD, jakość, zarządzanie wydaniami i produktywność programistów, dopasowane do tempa, którego potrzebuje firma.",
            format: "2–4 miesiące",
          },
          {
            title: "Mentoring i rozwój liderów",
            text: "Mentoring jeden na jeden dla CTO i VP of Engineering oraz program dla menedżerów inżynierii: delegowanie z jasnymi poziomami decyzji, szczera informacja zwrotna i samoorganizujące się zespoły.",
            format: "1:1 co miesiąc · grupa 3–6 miesięcy",
          },
          {
            title: "Rekrutacja i sukcesja na kluczowe role",
            text: "Procesy rekrutacji liderów i inżynierów, przeglądy talentów i plany sukcesji, żeby organizacja nie zależała od kilku osób.",
            format: "projekt · stałe wsparcie",
          },
        ],
        note: "Ratowanie projektów, zarządzanie projektami, Scaled Agile i projektowanie organizacji realizuję jako skoncentrowane zlecenia – zobacz punkty wejścia poniżej.",
      },
    ] as Pillar[],
  },

  entries: {
    kicker: "Jak zacząć",
    title: "Zacznij od jednego konkretnego kroku,",
    accent: "a potem rozwijajmy współpracę.",
    lead: "Każdy filar ma jasne punkty wejścia: krótki pakiet z określonym rezultatem albo skoncentrowane zlecenie. Wielu klientów zaczyna od jednego z nich, a potem przechodzi na stałe wsparcie.",
    leadsTo: "Prowadzi do filaru",
    cta: "Zapytaj o to",
    groups: [
      {
        id: "ai",
        pillar: "AI w praktyce",
        icon: "spark",
        items: [
          {
            id: "ai-sprint",
            title: "AI Sprint",
            time: "5 dni",
            text: "Warsztat z zarządem, wybór jednego procesu i działający prototyp AI na Twoich danych – ze zbiorem testowym, żeby decyzja „budujemy czy nie” opierała się na dowodach.",
            icon: "bolt",
          },
          {
            id: "ai-health-check",
            title: "Przegląd systemu AI",
            time: "2 tygodnie",
            text: "Przegląd aplikacji AI, która już działa: jakość odpowiedzi, koszt zapytania, czas odpowiedzi, bezpieczeństwo i monitoring. Lista poprawek uszeregowana według wpływu.",
            icon: "pulse",
          },
          {
            id: "ai-due-diligence",
            title: "AI due diligence",
            time: "2 tygodnie",
            text: "Dla inwestorów: czy AI w spółce to realna przewaga, czy nakładka na cudzy model? Technologia, dane, koszty i ryzyko regulacyjne.",
            icon: "search",
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
            text: "Projekt jest opóźniony, przekracza budżet, a zespół jest wyczerpany? Niezależna diagnoza i plan naprawczy, którego obronisz przed zarządem.",
            icon: "lifebuoy",
          },
          {
            id: "tech-due-diligence",
            title: "Techniczne due diligence",
            time: "2–4 tygodnie",
            text: "Niezależna ocena technologii, architektury, zespołu i ryzyk spółki przed inwestycją – dla funduszy VC i PE.",
            icon: "search",
          },
          {
            id: "project-management",
            title: "Zarządzanie projektami i metodyki",
            time: "diagnoza 2–3 tygodnie",
            text: "PRINCE2, praktyki PMI, agile albo dopasowane połączenie – wybrane pod Twoją firmę. PMO, ład portfelowy i coaching kierowników projektów.",
            icon: "layers",
          },
          {
            id: "scaled-agile",
            title: "Scaled Agile (SAFe®)",
            time: "pierwszy pociąg w 8–12 tygodni",
            text: "Agile ponad pojedynczym zespołem: ocena gotowości, strumienie wartości, Agile Release Trains i pierwsze PI Planning.",
            icon: "train",
          },
          {
            id: "org-design",
            title: "Projektowanie organizacji pod szybki przepływ",
            time: "diagnoza 3–4 tygodnie",
            text: "Struktura zespołów, która przyspiesza dostarczanie: zespoły produktowe i platformowe, mniej przekazań, zmiana etapami, bez „wielkiego wybuchu”.",
            icon: "flow",
          },
        ] as Entry[],
      },
    ],
    shared: {
      title: "Dla obu filarów",
      items: [
        {
          id: "cost-optimisation",
          title: "Optymalizacja kosztów chmury i AI",
          time: "3–6 tygodni",
          text: "Przegląd rachunków za chmurę i modele AI, z oszczędnościami, które da się wdrożyć i zmierzyć.",
          icon: "chart",
        },
        {
          id: "rd-review",
          title: "Techniczny przegląd B+R",
          time: "1–2 tygodnie",
          text: "Prace nad oprogramowaniem i AI, które mogą kwalifikować się do ulgi B+R – zidentyfikowane i udokumentowane. Kwalifikowalność ocenia licencjonowany doradca podatkowy.",
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
          "Polityka AI i gotowość na AI Act od początku",
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
      "W firmach działających w Polsce stworzenie naprawdę nowego rozwiązania opartego na AI może spełniać definicję prac rozwojowych w rozumieniu prawa podatkowego. Rutynowe wdrożenie czy typowa zmiana w oprogramowaniu – nie. Planuję takie projekty tak, żeby od pierwszego dnia prace techniczne były dokumentowane w sposób, jakiego wymaga ulga B+R.",
      "To, czy ulga przysługuje, zależy od charakteru prac, ich dokumentacji i Twojej sytuacji podatkowej. Kwalifikowalność ocenia i doradza w rozliczeniu licencjonowany doradca podatkowy; ja zapewniam analizę techniczną i dowody.",
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
      { title: "Powiązanie z wynikiem", text: "Przy optymalizacji kosztów: wynagrodzenie powiązane z osiągniętymi oszczędnościami." },
      { title: "Interim", text: "Pełne zaangażowanie na określony czas." },
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
        q: "Jak ustalamy koszt współpracy?",
        a: "Po pierwszej rozmowie proponuję na piśmie zakres i wycenę dopasowane do Twojej sytuacji. Pakiety mają określony zakres, więc z góry wiesz, co dostajesz.",
      },
      {
        q: "Czy pracujesz z małymi firmami?",
        a: "Tak. Pracuję ze startupami, małymi i średnimi firmami oraz dużymi organizacjami i dopasowuję zakres do wielkości firmy.",
      },
      {
        q: "Tylko doradzasz, czy pomagasz też budować systemy AI?",
        a: "Jedno i drugie. Projektuję architekturę, prowadzę zespół i nadzoruję budowę oraz testy – od pierwszego prototypu po system działający produkcyjnie, z ewaluacją i monitoringiem.",
      },
      {
        q: "Jakiego modelu AI powinniśmy używać?",
        a: "To zależy od zadania i Twoich wymagań co do jakości, kosztu, czasu odpowiedzi i danych. Wybieram na podstawie testów na Twoich przypadkach, a nie publicznych rankingów – i często różne zadania dostają różne modele.",
      },
      {
        q: "A bezpieczeństwo danych w projektach AI?",
        a: "To pierwszy temat w każdym projekcie: wybór modeli i miejsca przetwarzania danych, zasady dostępu, polityka korzystania z AI oraz zgodność z RODO i AI Act.",
      },
      {
        q: "Czy pracujesz z klientami spoza Polski?",
        a: "Tak. Większość kariery spędziłem w międzynarodowych, rozproszonych zespołach. Pracuję zdalnie i na miejscu.",
      },
    ],
  },

  contact: {
    title: "Porozmawiajmy o Twoim wyzwaniu.",
    text: "Napisz kilka zdań o swojej sytuacji. Odpowiem i zaproponuję termin 30-minutowej rozmowy.",
    subject: "Rozmowa wstępna",
    button: "Napisz do mnie",
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
    effect: "Możliwy efekt podatkowy za ten rok",
    deduction: "Dodatkowe odliczenie od podstawy opodatkowania:",
    disclaimer:
      "Symulacja za jeden rok podatkowy dla typowego podatnika bez statusu centrum badawczo-rozwojowego (CBR); nie jest to porada podatkowa. Zakłada, że koszty są kwalifikowane i że dochód wystarcza na całe odliczenie – w CIT dochód ze źródeł innych niż zyski kapitałowe, w PIT dochód z działalności gospodarczej. Niewykorzystaną część można odliczyć w kolejnych sześciu latach podatkowych. To, czy prace i koszty się kwalifikują, zależy od charakteru prac, ich dokumentacji i sytuacji podatnika, i ocenia to licencjonowany doradca podatkowy. Skala podatkowa PIT nie jest uwzględniona.",
    errors: {
      empty: "Wpisz kwotę (0, jeśli brak).",
      negative: "Kwota nie może być ujemna.",
      mixed: "Używaj jednego separatora tysięcy w całej kwocie, np. 1 234 567 lub 1.234.567 (pełne złote, bez groszy).",
      format: "Wpisz kwotę w pełnych złotych, np. 500000 lub 500 000.",
      max: "Kwoty powyżej 1 mld zł nie są obsługiwane.",
    },
  },

  ui: {
    bookCall: "Umów rozmowę",
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
      "Czasy realizacji są typowe i zależą od zakresu, gotowości zespołu i dostępności sponsora po Twojej stronie.",
    heroAlt: "Paweł Bajorek, założyciel Pristis Management",
    switchLabel: "EN",
    switchTitle: "English version",
  },
};
