<template>
    <div class="close-button">
        <div class="close-button__icn"></div>
    </div>
</template>

<script>
    export default {
        name: 'CloseButton'
    };
</script>

<style lang="scss">
    .close-button {
        $block: &;
        position: relative;
        width: 28px;
        height: 28px;
        border: 1px solid #fff;
        border-radius: 50%;

        &:hover {

            #{$block}__icn {
                transform: translate3d(-50%, -50%, 0) scale(1.4);
            }
        }

        &__icn {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            width: 100%;
            height: 100%;
            transform: translate3d(-50%, -50%, 0) scale(1);
            transition: transform .26s ease;

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 40%;
                height: 1px;
                background-color: white;
            }

            &:before {
                transform: translate3d(-50%, -50%, 0) rotate(45deg);
            }

            &:after {
                transform: translate3d(-50%, -50%, 0) rotate(-45deg);
            }
        }
    }
</style>
