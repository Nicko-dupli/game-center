<template>
    <div>
        <main class="main">
            <header class="header">
                <header-content/>
            </header>

            <div class="page">
                <nuxt/>
            </div>

            <footer class="footer">
                <footer-content/>
            </footer>

            <site-modal/>
        </main>
    </div>
</template>

<script>
    import FooterContent from '../components/core/FooterContent';
    import HeaderContent from '../components/core/header/HeaderContent';
    import SiteModal from '../components/core/SiteModal';

    export default {
        components: {SiteModal, HeaderContent, FooterContent}
    };
</script>

<style lang="scss">
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        flex-grow: 1;
    }

    .header {
        height: $header-height;
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
    }

    .page {
        padding-top: $header-height;
        width: 100%;
        flex-grow: 1;
    }

    .footer {
        position: relative;
        z-index: 1;
        margin-top: 88px;
    }
</style>
