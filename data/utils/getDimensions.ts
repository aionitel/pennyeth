export const getChartWidth = () => {
  if (typeof window !== 'undefined' && window.outerWidth <= 899) { // 400 around mobile phone width
    return 380
  } else if (typeof window !== 'undefined' && window.outerWidth <= 1800 ) { // laptops and small screens
    return 1100
  } else if (typeof window !== 'undefined' && window.outerWidth <= 9999) { // large monitors and displays
    return 1496
  }
}

export const getChartHeight = () => {
  if (typeof window !== 'undefined' && screen.width <= 899) {
    return 250
  } else if (typeof window !== 'undefined' && screen.width <= 900 ) {
    return 300
  } else if (typeof window !== 'undefined' && screen.width <= 9999) {
    return 340
  }
}