export const convertToBrl = function(float: number){
    if(!!!float) return null
    return float.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}