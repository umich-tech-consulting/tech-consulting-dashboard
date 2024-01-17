/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'neutral': {
        1: '#fafafa',
        2: '#eeeeee',
        3: '#e0e0e0',
        4: '#bdbdbd',
        5: '#9e9e9e',
        6: '#757575',
        7: '#616161',
        8: '#424242',
        9: '#212121',
        10: '#0E0E0E',
      },
      'blue': {
        1: '#E1F5FF',
        2: '#B3E5FF',
        3: '#7FD5FF',
        4: '#48C4FF',
        5: '#17B7FF',
        6: '#00AAFF',
        7: '#009CF6',
        8: '#0488E1',
        9: '#0477CC',
        10: '#0D57AA',
      },
      'red': {
        1: '#FFEBEE',
        2: '#FFCDD2',
        3: '#F69999',
        4: '#EE7071',
        5: '#F94D4C',
        6: '#FF3B30',
        7: '#F02F30',
        8: '#DE232A',
        9: '#D11922',
        10: '#C30014',
        11: '#A30011'
      },
      'yellow': {
        1: '#FFF9E0',
        2: '#FFEDB0',
        3: '#FFE27D',
        4: '#FFD844',
        5: '#FFCD05',
        6: '#FFC400',
        7: '#FFB600',
        8: '#FFA200',
        9: '#FF9000',
        10: '#FF6F00'
      },
      'green': {
        1:"#34C759",
        '2*':"#34C759",
      },
      'base': {
        light: '#F6F8FC'
      }
    },
    extend: {
      top: {
        '74px': "74px",
      },
      left: {
        '240px': "240px",
      },
      width: {
        '270px': "270px",
      },
      height: {
        '74px': "74px",
      },
      boxShadow: {
        'light': '0px 0px 4px 0px #E0E0E0',
        'blue': '0px 0px 4px 0px #48C4FF',
        'dark': '0px 0px 4px 0px #424242',
        'yellow': '0px 0px 4px 0px #FFCD05',
      },
    },
  },
  plugins: [],
}

