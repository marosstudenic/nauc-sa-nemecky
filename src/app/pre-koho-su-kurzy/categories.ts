export type CategoryItem = {
    id: string;
    title: string;
    description: string;
}

export const categories: CategoryItem[] = [
    {
        id: "studenti-nemeckeho-jazyka",
        title: "Online kurzy nemčiny pre študentov nemeckého jazyka, ktorí chcú zlepšiť svoju komunikáciu",
        description: "Si študentom nemeckého jazyka a chceš zlepšiť svoju komunikáciu? Tieto kurzy sú pre teba. Zlepši si svoju hovorenú nemčinu z pohodlia vášho domova. Interaktívne Zoom kurzy, ktoré ťa priblížia k plynulosti. Hodiny si organizuješ podľa seba a svojho voľného času."
    },
    {
        id: "zaciatocnici",
        title: "Začiatočnícke kurzy nemčiny online",
        description: "Nový vo svete nemčiny? Naše začiatočnícke kurzy sú ideálne pre tých, ktorí sa chcú naučiť základy a postaviť pevný základ. Prvý krok k plynulej nemčine začína tu, s flexibilnými časmi a prispôsobeným tempom učenia."
    },
    {
        id: "pokrocili",
        title: "Online kurzy nemčiny pre pokročilých",
        description: "Ovládaš základy, ale chceš posunúť svoje schopnosti na ďalšiu úroveň? Naše kurzy pre pokročilých sú navrhnuté tak, aby ťa vyzvali a zlepšili tvoje jazykové zručnosti vo všetkých oblastiach. Ponorte sa hlbšie do gramatiky, slovnej zásoby a komunikácie."
    },
    {
        id: "business-nemcina",
        title: "Business nemčina pre profesionálov",
        description: "Potrebuješ nemčinu pre svoju kariéru? Naše špecializované kurzy business nemčiny sú určené pre profesionálov, ktorí chcú zlepšiť svoju obchodnú komunikáciu. Zlepši svoje prezentačné zručnosti, odbornú terminológiu a schopnosť komunikovať s klientmi a kolegami."
    },
    {
        id: "priprava-na-testy",
        title: "Príprava na testy z nemčiny",
        description: "Chystáš sa na Goethe-Zertifikat, TestDaF alebo iný certifikačný test z nemčiny? Naše kurzy prípravy na testy sú navrhnuté tak, aby ti poskytli všetky potrebné zručnosti a stratégie pre úspech. S personalizovanou prípravou a skúšobnými testami zvýšiš svoje šance na vynikajúci výsledok."
    },
    {
        id: "tematicke-kurzy",
        title: "Tematické kurzy nemčiny",
        description: "Zaujímajú ťa špecifické témy alebo oblasti nemčiny? Ponúkame kurzy zamerané na rôzne témy ako história, kultúra, cestovanie a ďalšie, ktoré ti umožnia naučiť sa nemčinu zábavným a interaktívnym spôsobom, zatiaľ čo rozširuješ svoje vedomosti o nemecky hovoriacich krajinách."
    }
]



export const getCategoryById = (id: string) => {
    return categories.find(category => category.id === id);
}