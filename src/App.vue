<template>
  <div id="app" class="mt-5">
      <Banner title="Examples">
        <div class="columns">
          <div class="column">
            Base: 2 <br />
            Binary number: 110 <br />
            Equation: 0x2^0 + 1x2^1 + 1x2^2 <br />
            Decimal result: 6
            <br />
            <br />
            Base: 2 <br />
            Binary number: 11,001 <br />
            Equation: 1x2^1 + 1x2^0 + 0x1/(2^0) + 0x1/(2^1) + 1x1/(2^2) <br />
            Decimal result: 3.125
          </div>
          <div class="column">
            Base: 16 <br />
            Hex number: 1A,B <br />
            Equation: 1x16^2 + 10x16^1 + 11x16^0 <br />
            Decimal result: 427 <br />
            <br />
            <br />
            Base: 16 <br />
            Hex number: 1AB <br />
            Equation: 1x16^1 + 10x16^0 + 11x1/(16^1) <br />
            Decimal result: 26.6875 <br />
          </div>
        </div>
      </Banner>
      <div class="columns is-mobile is-centered">
        <div class="column is-half mt-5">
        <div class="field">
          <div class="field-body m-2">
            <Input
              type="number"
              placeholder="Base"
              v-model="base"
            />
          </div>
          <div class="field-body m-2">
            <Input
              type="text"
              placeholder="Number"
              v-model="number"
            />
          </div>
          <div class="field-body m-2">
            <Button :disabled="calculateIsDisabled" text="Calculate" :event="calculate" v-if="!calcAgain"/>
            <Button text="Clear" :event="clear" v-if="calcAgain" />
          </div>
        </div>

        <BoxResult :result="result" :equation="equation" v-if="result"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Button, Banner, BoxResult } from './components'

const BASE_HEX = 16
export default {
  name: 'App',

  components: {
    Input,
    Button,
    Banner,
    BoxResult,
  },

  data() {
    return {
      base: '',
      number: '',
      result: 0,
      equation: '',
      calcAgain: false,
    }
  },

  computed: {
    calculateIsDisabled() {
      return !this.base || !this.number
    },

    numbers() {
      if (this.number.includes(',')) {
        const [left, right] = this.number.trim().split(',')

        return {
          int: this.number.trim(),
          float: {
            left: left.split(''),
            right: right.split(''),
          }
        }
      }
      
      return { int: this.number.trim().split('') }
    },

    hexValues() {
      return {
        'A': '10',
        'B': '11',
        'C': '12',
        'D': '13',
        'E': '14',
        'F': '15',
      }
    }
  },

  methods: {
    calculate() {
      const { float, int } = this.numbers

      if (BASE_HEX && float) {
        this.updateNumbersToHex('float.left')
        this.updateNumbersToHex('float.right')
      } else if (BASE_HEX) this.updateNumbersToHex('int') 

      this.converter(float ? float.left : int)
      if (float) this.converterFloat(this.numbers.float.right)
        
      this.calcAgain = true
    },

    exponentials(numbers) {
      const exponentials = []

      for (let i = numbers.length - 1; i >= 0; i--)
        exponentials.push({ power: Math.pow(this.base, i), exponent: i })
  
      return exponentials
    },
    
    converter(numbers) {
      for (let i = 0; i < numbers.length; i++) {
        const { power, exponent } = this.exponentials(numbers)[i]
        const number = numbers[i]

        this.result += parseInt(number) * power
        this.equation += `${number}x${this.base}^${exponent}`
        
        if (i < numbers.length - 1) this.equation += ' + '
      }
    },

    updateNumbersToHex(type) {
      const numbers = this.deepGet(this.numbers, type)
      for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i].toUpperCase()
        const hasHexValue = Object
          .entries(this.hexValues)
          .find(([key]) => key === number)
        
        if (hasHexValue && type.includes('float')) {
          const [float, side] = type.split('.')
          this.numbers[float][side][i] = this.hexValues[number]
        } else if (hasHexValue) this.numbers[type][i] = this.hexValues[number]
      }
    },

    converterFloat(numbers) {
      this.equation += ' + '
      for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]

        this.result += parseInt(number) * 1/Math.pow(this.base, i + 1) 
        this.equation += `${number}x1/(${this.base}^${i + 1})`

        if (i < numbers.length - 1) this.equation += ' + '
      }
    },

    clear() {
      this.base = ''
      this.number = ''
      this.result = 0
      this.equation = ''
      this.calcAgain = false
    },

    deepGet(obj, paths) {
      let current = obj; 
      
      paths.split('.').forEach(function(path){ current = current[path]; })

      return current
    }
  }
}
</script>
