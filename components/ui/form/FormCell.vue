<template>
    <div class="form-cell">
        <label class="form-cell__label">
            <span v-if="label"
                  :class="['form-cell__label-text', {'_empty': isShowLabel}]">
                {{ label }}
            </span>

            <div class="form-cell__input">
                <form-input :disabled="disabled"
                            :required="required"
                            :name="name"
                            :type="type"
                            :value="value"
                            @input="onInput"
                            @focus="isFocused = true"
                            @blur="isFocused = false"
                />
            </div>
        </label>
    </div>
</template>

<script>
    import FormInput from './FormInput';
    export default {
        name: 'FormCell',
        components: {FormInput},
        props: {
            value: {
                type: [String, Number]
            },
            label: {
                type: String
            },
            name: {
                type: String,
            },
            type: {
                type: String,
                default: 'text'
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
                inputValue: '',
                isFocused: false,
            };
        },

        computed: {
            isEmptyValue() {
                return !this.inputValue?.length;
            },
            isShowLabel() {
                return this.isEmptyValue && !this.isFocused;
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
        },

        methods: {
            onInput(val) {
                this.inputValue = val;
            }
        }
    };
</script>

<style lang="scss">
    .form-cell {

        &__label-text {
            display: block;
            text-align: center;
            margin-bottom: 14px;
            line-height: 100%;
            opacity: .5;
        }
    }
</style>
