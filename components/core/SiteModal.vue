<template>
    <transition name="modal">

        <div v-if="active"
             class="modal">

            <div class="modal__overlay"
                 @click="$modal.close()">
            </div>

            <transition name="inner">
                <div v-if="!!component"
                     class="modal__content">
                    <div class="modal__close"
                         @click="$modal.close()">
                        <close-button/>
                    </div>

                    <component :is="component"
                               v-bind="props || {}">
                    </component>
                </div>
            </transition>
        </div>

    </transition>
</template>

<script>
    import {scrollbarWidth} from '../../assets/js/helper';
    import CloseButton from '../ui/CloseButton';

    export default {
        name: 'SiteModal',
        components: {CloseButton},
        data() {
            return {
                active: false,
                component: null,
                props: null,
                timing: 600
            };
        },

        beforeMount() {
            this.$modal.event.$on('open', this.onOpen);
            this.$modal.event.$on('close', this.onClose);
        },

        beforeDestroy() {
            this.$modal.event.$off('open', this.onOpen);
            this.$modal.event.$off('close', this.onClose);
        },

        methods: {
            onOpen(component, props) {
                this.lockBody();
                this.active = true;
                this.component = null;
                this.props = Object.assign({}, props);

                setTimeout(() => {
                    this.component = component;
                }, 100);
            },

            onClose() {
                this.component = null;

                setTimeout(() => {
                    this.active = false;
                    this.unlockBody();
                    this.props = {};
                }, 1);
            },

            lockBody() {
                document.body.classList.add('_locked');
                document.body.style.height = '100%';
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollbarWidth()}px`;
                document.documentElement.style.height = '100%';
            },

            unlockBody() {
                document.documentElement.style.height = '';
                document.body.style.height = '';
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                document.body.classList.remove('_locked');
            }
        }
    };
</script>

<style lang="scss">
    .modal {
        $block: &;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &.modal-enter-active,
        &.modal-leave-active {
            transition: all .6s ease;

            #{$block}__overlay {
                transition: opacity .6s ease;
            }

            #{$block}__close {
                transform: translate3d(0, 0, 0) scale(1);
                transition: all .4s ease .2s;
            }
        }

        &.modal-enter,
        &.modal-leave-to {
            transition: all .4s ease;

            #{$block}__overlay {
                opacity: 0;
                transition: opacity .4s ease;
            }

            #{$block}__close {
                transform: translate3d(0, 0, 0) scale(0);
                transition: all .2s ease;
            }
        }

        &__overlay {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            transform-origin: 100% 0;
            opacity: 1;
            transition: opacity .6s ease;
            background-color: rgba(#000, .5);
        }

        &__content {
            position: relative;
            z-index: 2;

            &.inner-enter-active,
            &.inner-active {
                transition: all .6s ease;
            }

            &.inner-enter,
            &.inner-leave-active {
                opacity: 0;
                transform: translate3d(0, 1.2rem, 0);
                transition: all .4s ease;
            }
        }

        &__close {
            position: absolute;
            top: -38px;
            right: -38px;
            z-index: 3;
            cursor: pointer;
        }
    }
</style>
