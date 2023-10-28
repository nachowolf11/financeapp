export const lastMonthMovements = ( movements, period ) => {
    const actualMonth = new Date().getMonth();
    return period === 'Current Month' ? (movements.filter( movement => new Date(movement.creation_date).getMonth() == actualMonth)) : movements
}