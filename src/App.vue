<template>
  <div id="app" class="mt-5">
      <Banner title="Examples">
        Base: 2 <br />
        Binary number: 110 <br />
        Decimal result: 6 <br />
        Equation: 0x2^0 + 1x2^1 + 1x2^2 = 6 <br />
        <br />
        Base: 16 <br />
        Hex number: 1AB <br />
        Decimal result: 427 <br />
        Equation: 1x16^2 + 10x16^1 + 11x16^0 = 427 <br />
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
            <Button :disabled="calculateIsDisabled" text="Calculate" :event="calculate" />
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
    }
  },

  computed: {
    calculateIsDisabled() {
      return (!this.base && !this.number)
    },

    numbers() {
      return this.number.split('')
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
      if (BASE_HEX) this.updateNumbersToHex()

      for (let i = 0; i < this.numbers.length; i++) {
        const { power, exponent } = this.exponentials()[i]
        const number = this.numbers[i]

        this.result += parseInt(number) * power
        this.equation += `${number}x${this.base}^${exponent}`
        
        if (i < this.numbers.length - 1) this.equation += ' + '
        else this.equation += ` = ${this.result}`
      }
      
      this.clearValues()
    },

    exponentials() {
      const exponentials = []

      for (let i = this.numbers.length - 1; i >= 0; i--) {
        exponentials.push({ power: Math.pow(this.base, i), exponent: i })
      }
  
      return exponentials
    },

    updateNumbersToHex() {
      for (let i = 0; i < this.numbers.length; i++) {
        let number = this.numbers[i].toUpperCase()
        const hasHexValue = Object
          .entries(this.hexValues)
          .find(([key]) => key === number)
        
        if (hasHexValue) this.numbers[i] = this.hexValues[number]
      }
    },

    clearValues() {
      this.number = ''
      this.base = ''
    }
  }
}
</script>
