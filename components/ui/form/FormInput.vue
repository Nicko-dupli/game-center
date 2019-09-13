<template>
    <input v-model="inputValue"
           :required="required"
           :name="name"
           :type="type"
           :class="['form-input']"
           v-on="inputListeners"
    />
</template>

<script>
    export default {
        name: 'FormInput',

        inheritAttrs: false,

        props: {
            value: {
                type: [String, Number]
            },
            name: {
                type: String,
            },
            type: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
        },

        data() {
            return {
                inputValue: ''
            };
        },

        computed: {
            inputListeners: function () {
                const vm = this;

                return Object.assign({},
                    this.$listeners,
                    {
                        input: function (event) {
                            vm.$emit('input', event.target.value);
                        },
                        focus: function () {
                            vm.$emit('focus');
                        },
                        blur: function () {
                            vm.$emit('blur');
                        },
                    }
                );
            }
        },

        watch: {
            value(val) {
                this.inputValue = val;
            }
        },

        mounted() {
            if (this.value) {
                this.inputValue = this.value;
            }
        }
    };
</script>

<style lang="scss">
    .form-input {
        display: block;
        width: 100%;
        background: none;
        border: 1px solid rgba(black, .4);
        border-radius: 4px;
        -webkit-appearance: none;
        font-size: 14px;
        padding: .8em 0;
        line-height: 1;
        outline: none;
        text-align: center;
    }
</style>
