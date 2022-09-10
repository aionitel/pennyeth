export const getChartWidth = () => {
  if (typeof window !== 'undefined' && window.outerHeight <= 899) { // 400 around mobile phone width
    return 380
  } else if (typeof window !== 'undefined' && window.outerHeight <= 900 ) { // laptops and small screens
    return 1125
  } else if (typeof window !== 'undefined' && window.outerWidth <= 1920) { // large monitors and displays
    return 1496
  }
}

export const getChartHeight = () => {
  if (typeof window !== 'undefined' && screen.height <= 899) {
    return 150
  } else if (typeof window !== 'undefined' && screen.height <= 900 ) {
    return 300
  } else if (typeof window !== 'undefined' && screen.height <= 1100) {
    return 340
  }
}