export interface ChurrasItem {
    id: number,
    date: string,
    description: string,
    guestsAmount: number,
    totalAmount: number 
}

export interface ChurrasItemDetails extends ChurrasItem {
    guests: {
        name: string,
        amount: number
    }[]
}
