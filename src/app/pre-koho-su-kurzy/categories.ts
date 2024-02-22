export type CategoryItem = {
    id: string;
    title: string;
    description: string;
}

export const categories: CategoryItem[] = [
    {
        id: "studenti-nemeckeho-jazyka",
        title: "Online kurzy nemčiny pre študentov nemeckého jazyka ktorí chcú zlepšiť svoju komunikáciu",
        description: "Si študentom nemeckého jazyka a chceš zlepšiť svoju komunikáciu? Tieto kurzy sú pre teba. Zlepši si svoju hovorenú nemčinu z pohodlia vášho domova. Interaktívne Zoom kurzy, ktoré ťa priblížia k plynulosti. Hodiny si organizuješ podľa seba a svojho voľného času."
    }
]


export const getCategoryById = (id: string) => {
    return categories.find(category => category.id === id);
}