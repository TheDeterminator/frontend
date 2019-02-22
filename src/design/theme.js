const system = {
  color: {
    primaryColor: '#1363A8',
    primaryDark: '#0F5080',
    primaryBgShading: '#F5F8FA',
    secondaryColor: '#4195D2',
    secondaryBgShading: '#7F969F',
    accent: '#ED5D28',
    emphasis: '#03100D',
    darkText: '#595959',
    lightText: '#FFFFFF'
  },

  fontSizing: { // Based on CSS default font-resizing of 62.5%
    xs: '1.3rem', // base size for mobile view
    s: '1.6rem', // base size for text
    sm: '1.8rem', // base size for menu and button text
    m: '2rem', // base heading/sub-heading size
    ml: '3rem', // base headline size
    l: '4rem', // for big emphasis
    xl: '5rem', // ultra large
    xxl: '6rem' // site banner headline
  },

  breakpoints: [
    '(max-width: 500px)',
    '(max-width: 800px)',
    '(max-width: 1430px)'
  ],
  // for media queries -- express them as @media ${system.breakpoints[0]} {styles here}
  // in the arr, the first is for mobile, second is for portrait tablet, third is for desktop

}

export default system