
export const formatDecimal = (number: number, minimumFractionDigits = 1, maximumFractionDigits = 1) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number)
}
