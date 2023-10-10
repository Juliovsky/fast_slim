<template>
  <div class="form__group field" :class="{ err: v$.inputValue.$error }">
    <input
      v-if="type === 'number'"
      class="form__field"
      @input="detectValue"
      :placeholder="label"
      v-maska="'+1 (###) ###-####'"
      v-model="state.inputValue"
      :name="label"
      :id="label"
      required
    />
    <input
      v-else
      :type="type"
      class="form__field"
      @input="detectValue"
      :placeholder="label"
      v-model="state.inputValue"
      :name="label"
      :id="label"
      required
    />
    <label for="name" class="form__label">{{ label }}</label>
    <span
      class="err-mess subtext"
      v-if="v$.inputValue.$error && type !== 'number'"
      >{{ v$.inputValue.$errors[0].$message }}</span
    >
    <span
      class="err-mess subtext"
      v-else-if="
        v$.inputValue.$error &&
        type === 'number' &&
        state.inputValue.length !== 0
      "
      >Phone number is invalid</span
    >
    <span
      class="err-mess subtext"
      v-if="
        v$.inputValue.$error &&
        type === 'number' &&
        state.inputValue.length === 0
      "
    >
      Value is required
    </span>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import { maska } from "maska";

export default {
  props: ["label", "value", "rules", "type"],

  setup(props) {
    const inputValue = ref(props.value);
    const state = reactive({
      inputValue: "",
    });
    let rules;
    if (!!props.rules) {
      if (props.rules === "required") {
        rules = {
          inputValue: { required },
        };
      } else if (props.rules === "required|email") {
        rules = {
          inputValue: { required, email },
        };
      } else if (props.rules === "required|length") {
        rules = {
          inputValue: { minLength: minLength(17) },
        };
      }
    } else {
      rules = {
        inputValue: { required: false },
      };
    }
    const v$ = useVuelidate(rules, state);

    return { inputValue, state, v$ };
  },
  methods: {
    detectValue() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("inputValue", this.state.inputValue);
      }
    },
  },
  directives: { maska },
};
</script>
<style scoped lang="scss">
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  background-color: transparent;
  z-index: 1;
  max-height: 100%;
  border: none !important;
}

.form__field {
  width: 100%;
  border: 0;
  border-bottom: 1px solid white !important;
  color: white;
  outline: 0;
  font-size: 15px;
  font-weight: 300 !important;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  border-radius: 1px;
  min-height: 100%;
  border-top-color: transparent;
  box-sizing: content-box;
  z-index: 999;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-style: normal;
    font-weight: 500 !important;
    line-height: normal;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: white;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
.err-mess {
  color: red;
  margin-top: 10px;
  display: block;
}
.err input {
  border-bottom: 1px solid red !important;
}
</style>
