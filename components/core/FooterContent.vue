<template>
    <div class="footer-content">
        <div class="footer-content__container container">

            <div v-if="filteredLinks && filteredLinks.length"
                 class="footer-content__links">

                <div v-for="link in filteredLinks"
                     :key="link.id"
                     class="footer-content__section">
                    <n-link :to="link.url"
                       class="footer-content__section-link">
                        {{ link.name }}
                    </n-link>

                    <ul v-if="subLinksCollection[link.id] && subLinksCollection[link.id].length"
                        class="footer-content__subsections">
                        <li v-for="subLink in subLinksCollection[link.id]"
                            :key="subLink.id"
                            class="footer-content__subsection">
                            <n-link :to="subLink.url"
                               class="footer-content__subsection-link">
                                {{ subLink.name }}
                            </n-link>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterContent',

        data() {
            return {
                links: [
                    {
                        id: 1,
                        name: 'Раздел 1',
                        url: '#',
                        subLinks: [
                            {
                                id: 3,
                                name: 'Подраздел 1',
                                url: '#'
                            },
                            {
                                id: 4,
                                name: 'Подраздел 2',
                                url: '#'
                            },
                            {
                                id: 5,
                                name: 'Подраздел 3',
                                url: '#'
                            },
                        ]
                    },
                    {
                        name: 'Раздел 2',
                        id: 2,
                        url: '#',
                        subLinks: [
                            {
                                id: 6,
                                name: 'Подраздел 1',
                                url: '#'
                            },
                            {
                                id: 7,
                                name: 'Подраздел 2',
                                url: '#'
                            },
                            {
                                id: 8,
                                name: 'Подраздел 3',
                                url: '#'
                            },
                        ]
                    },
                ]
            };
        },

        computed: {
            filteredLinks() {
                if (!this.links?.length) return [];
                return this.links.filter(link => !!link?.url && !!link?.name);
            },

            subLinksCollection() {
                if (!this.filteredLinks?.length) return {};

                return this.filteredLinks.reduce((subLinksAcc, link) => {
                    if (!link?.subLinks?.length) return subLinksAcc;

                    const filteredSubLinks = link.subLinks.filter(subLink => !!subLink?.url && !!subLink.name);
                    if (!filteredSubLinks.length) return subLinksAcc;

                    subLinksAcc[link.id] = filteredSubLinks;
                    return subLinksAcc;
                }, {});
            }
        }
    };
</script>

<style lang="scss">
    .footer-content {
        padding: 25px 80px;
        color: #fff;
        background-color: #333;

        &__links {
            display: flex;
        }

        &__section {
            margin-right: 50px;
            padding: 0;
            font-size: 18px;
            line-height: 1.57;
            white-space: nowrap;
        }

        &__section-link {
            display: block;
            font-weight: bold;

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }

        &__subsections {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        &__subsection {
            font-size: 14px;
            color: #b4b4b4;

            &:not(:first-child) {
                margin-top: .31em;
            }
        }
    }
</style>
