const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sviolet : 'rgb(156, 82, 139)',
        prim1: 'rgb(227, 181, 164)',
        prim2: 'rgb(149, 239, 174)',
        nftbg: 'rgba(255, 255, 255, 0.10)',
        back: 'rgb(29, 30, 44)'
      },
    },
  },
  plugins: [

    //hide scrollbar
    plugin(function({ addComponents }) {
      const components = {
        // ...
        '.hideScroll::-webkit-scrollbar': {
            width: '12px',
        },
        '.hideScroll::-webkit-scrollbar-track': {
          background: 'rgb(33, 37, 41)',
          border: '2px solid theme(\'colors.prim2\')',
          "border-radius": '20px',
        },
        '.hideScroll::-webkit-scrollbar-thumb': {
            "background-color": 'theme(\'colors.prim2\')',
            // "border-radius": '50% / 10%',
            border: '4px solid theme(\'colors.back\')'
        },
      }

      addComponents(components)
    }),

    //splotch
    plugin(function({ addComponents }) {
      const components = {
        '.splotch': {
          backgroundImage: "url(/right-bg-decor.png)",
          backgroundPosition: 'bottom right'
        },
        '.splotch-mobile': {
          backgroundImage: "url(/right-bg-decor-mob.png)",
          backgroundPosition: 'bottom right'
        }
      }

      addComponents(components)
    }),

    //no
    plugin(function({ addComponents }) {
      const components = {
        '.text-overflow-none': {
          'text-overflow': "initial",
          'white-space': 'normal',
          overflow: 'visible'
        },
        '.text-overflow-trunc': {
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
          overflow: 'hidden'
        }
      }

      addComponents(components)
    })
  ]
}