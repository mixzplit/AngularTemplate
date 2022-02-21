'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ssp2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' : 'data-target="#xs-components-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' :
                                            'id="xs-components-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' : 'data-target="#xs-injectables-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' :
                                        'id="xs-injectables-links-module-AppModule-2d991e63ccd4d392c82264092e553b0aa1689306e6971b55d37351fef5124cb50f7991d0bd291eaddc6a94283b04e2433605908e3433618aad0961e1c7b92776"' }>
                                        <li class="link">
                                            <a href="injectables/SocketsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocketsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CierrePedidosModule.html" data-type="entity-link" >CierrePedidosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CierrePedidosModule-be714c302bad47d6588f57f8d19cb483280b39a8ce44deeb4d3c71666730ebb3f90c46c106d0e8bb8f3423f143dc95f3937b88f220a6697f4bdfc7e724d5890e"' : 'data-target="#xs-components-links-module-CierrePedidosModule-be714c302bad47d6588f57f8d19cb483280b39a8ce44deeb4d3c71666730ebb3f90c46c106d0e8bb8f3423f143dc95f3937b88f220a6697f4bdfc7e724d5890e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CierrePedidosModule-be714c302bad47d6588f57f8d19cb483280b39a8ce44deeb4d3c71666730ebb3f90c46c106d0e8bb8f3423f143dc95f3937b88f220a6697f4bdfc7e724d5890e"' :
                                            'id="xs-components-links-module-CierrePedidosModule-be714c302bad47d6588f57f8d19cb483280b39a8ce44deeb4d3c71666730ebb3f90c46c106d0e8bb8f3423f143dc95f3937b88f220a6697f4bdfc7e724d5890e"' }>
                                            <li class="link">
                                                <a href="components/CierrePedidosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CierrePedidosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CierrePedidosRoutingModule.html" data-type="entity-link" >CierrePedidosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-eda008ee984ffa8494ab493d42a237318dd7e06d55711f518dffd77158948a7ef1476a110fdbca968d6cfb08403765bd8a14014f072d31073c1ffbb338b90ac8"' : 'data-target="#xs-components-links-module-DashboardModule-eda008ee984ffa8494ab493d42a237318dd7e06d55711f518dffd77158948a7ef1476a110fdbca968d6cfb08403765bd8a14014f072d31073c1ffbb338b90ac8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-eda008ee984ffa8494ab493d42a237318dd7e06d55711f518dffd77158948a7ef1476a110fdbca968d6cfb08403765bd8a14014f072d31073c1ffbb338b90ac8"' :
                                            'id="xs-components-links-module-DashboardModule-eda008ee984ffa8494ab493d42a237318dd7e06d55711f518dffd77158948a7ef1476a110fdbca968d6cfb08403765bd8a14014f072d31073c1ffbb338b90ac8"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentosModule.html" data-type="entity-link" >DocumentosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocumentosModule-f3daa7f35045f17bfb56d59856c7212774145aaa5e4d17cdfa872b09392f35cd5f158e08038127ef17c6e249a23c34ef84cf131cb0de2c4552dcd61586edec84"' : 'data-target="#xs-components-links-module-DocumentosModule-f3daa7f35045f17bfb56d59856c7212774145aaa5e4d17cdfa872b09392f35cd5f158e08038127ef17c6e249a23c34ef84cf131cb0de2c4552dcd61586edec84"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocumentosModule-f3daa7f35045f17bfb56d59856c7212774145aaa5e4d17cdfa872b09392f35cd5f158e08038127ef17c6e249a23c34ef84cf131cb0de2c4552dcd61586edec84"' :
                                            'id="xs-components-links-module-DocumentosModule-f3daa7f35045f17bfb56d59856c7212774145aaa5e4d17cdfa872b09392f35cd5f158e08038127ef17c6e249a23c34ef84cf131cb0de2c4552dcd61586edec84"' }>
                                            <li class="link">
                                                <a href="components/DocumentosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentosRoutingModule.html" data-type="entity-link" >DocumentosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-8084726b26a1894100ebd0f9325d61d05d0b5da3e149d96d57c212114bbbeea797693a7dc465c15f46cbab69c39662d173c827ca5dbfa533d5f75fb3dbc3dd62"' : 'data-target="#xs-components-links-module-LayoutModule-8084726b26a1894100ebd0f9325d61d05d0b5da3e149d96d57c212114bbbeea797693a7dc465c15f46cbab69c39662d173c827ca5dbfa533d5f75fb3dbc3dd62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-8084726b26a1894100ebd0f9325d61d05d0b5da3e149d96d57c212114bbbeea797693a7dc465c15f46cbab69c39662d173c827ca5dbfa533d5f75fb3dbc3dd62"' :
                                            'id="xs-components-links-module-LayoutModule-8084726b26a1894100ebd0f9325d61d05d0b5da3e149d96d57c212114bbbeea797693a7dc465c15f46cbab69c39662d173c827ca5dbfa533d5f75fb3dbc3dd62"' }>
                                            <li class="link">
                                                <a href="components/FullLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OffersModule.html" data-type="entity-link" >OffersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OffersModule-2176ce44561767e0ce3a2050a69090492fa95c313b083b44d10b62320055e01da0db3c7f60665d0c02634238f5e5a0b520c83862ab4a265bba70ef2d8f5cd0a8"' : 'data-target="#xs-components-links-module-OffersModule-2176ce44561767e0ce3a2050a69090492fa95c313b083b44d10b62320055e01da0db3c7f60665d0c02634238f5e5a0b520c83862ab4a265bba70ef2d8f5cd0a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OffersModule-2176ce44561767e0ce3a2050a69090492fa95c313b083b44d10b62320055e01da0db3c7f60665d0c02634238f5e5a0b520c83862ab4a265bba70ef2d8f5cd0a8"' :
                                            'id="xs-components-links-module-OffersModule-2176ce44561767e0ce3a2050a69090492fa95c313b083b44d10b62320055e01da0db3c7f60665d0c02634238f5e5a0b520c83862ab4a265bba70ef2d8f5cd0a8"' }>
                                            <li class="link">
                                                <a href="components/OffersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OffersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OffersRoutingModule.html" data-type="entity-link" >OffersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-1bf8ebb87fc028a0317f361a178f0650988fd850316d1d94117b265e1d0c9316d39b3dd35d3412576a2f3ed35a57077a803c23d78f7c8e0b7cf50de7fbfce3a9"' : 'data-target="#xs-components-links-module-PageNotFoundModule-1bf8ebb87fc028a0317f361a178f0650988fd850316d1d94117b265e1d0c9316d39b3dd35d3412576a2f3ed35a57077a803c23d78f7c8e0b7cf50de7fbfce3a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-1bf8ebb87fc028a0317f361a178f0650988fd850316d1d94117b265e1d0c9316d39b3dd35d3412576a2f3ed35a57077a803c23d78f7c8e0b7cf50de7fbfce3a9"' :
                                            'id="xs-components-links-module-PageNotFoundModule-1bf8ebb87fc028a0317f361a178f0650988fd850316d1d94117b265e1d0c9316d39b3dd35d3412576a2f3ed35a57077a803c23d78f7c8e0b7cf50de7fbfce3a9"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-8da2c04faa1377ead70be83ab511e8b9419e3a3e4ebda2e55bde72067a408e531401d633fa420a4d51a4175ee354b0b6d2b2d961dd799233586e6b94bd0fc114"' : 'data-target="#xs-components-links-module-ProductsModule-8da2c04faa1377ead70be83ab511e8b9419e3a3e4ebda2e55bde72067a408e531401d633fa420a4d51a4175ee354b0b6d2b2d961dd799233586e6b94bd0fc114"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-8da2c04faa1377ead70be83ab511e8b9419e3a3e4ebda2e55bde72067a408e531401d633fa420a4d51a4175ee354b0b6d2b2d961dd799233586e6b94bd0fc114"' :
                                            'id="xs-components-links-module-ProductsModule-8da2c04faa1377ead70be83ab511e8b9419e3a3e4ebda2e55bde72067a408e531401d633fa420a4d51a4175ee354b0b6d2b2d961dd799233586e6b94bd0fc114"' }>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsRoutingModule.html" data-type="entity-link" >ProductsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-d99e2642a5fd60deb244679379da6e8465610247cf8374ed60c654059547e9f5ec410b6fb032d20ca785679568a740e2d2ab163d712b76f5d3c17d3e668f248b"' : 'data-target="#xs-components-links-module-ProfileModule-d99e2642a5fd60deb244679379da6e8465610247cf8374ed60c654059547e9f5ec410b6fb032d20ca785679568a740e2d2ab163d712b76f5d3c17d3e668f248b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-d99e2642a5fd60deb244679379da6e8465610247cf8374ed60c654059547e9f5ec410b6fb032d20ca785679568a740e2d2ab163d712b76f5d3c17d3e668f248b"' :
                                            'id="xs-components-links-module-ProfileModule-d99e2642a5fd60deb244679379da6e8465610247cf8374ed60c654059547e9f5ec410b6fb032d20ca785679568a740e2d2ab163d712b76f5d3c17d3e668f248b"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c7c5c293eeea5962f214808b72bf01959ea1acb10a0c300ed2001096a9d0613d34348fd87fa36a0daf5b6027411298f368b4019b2bf4bfa15391b176f3801836"' : 'data-target="#xs-components-links-module-SharedModule-c7c5c293eeea5962f214808b72bf01959ea1acb10a0c300ed2001096a9d0613d34348fd87fa36a0daf5b6027411298f368b4019b2bf4bfa15391b176f3801836"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c7c5c293eeea5962f214808b72bf01959ea1acb10a0c300ed2001096a9d0613d34348fd87fa36a0daf5b6027411298f368b4019b2bf4bfa15391b176f3801836"' :
                                            'id="xs-components-links-module-SharedModule-c7c5c293eeea5962f214808b72bf01959ea1acb10a0c300ed2001096a9d0613d34348fd87fa36a0daf5b6027411298f368b4019b2bf4bfa15391b176f3801836"' }>
                                            <li class="link">
                                                <a href="components/DatepickerPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerPopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputTextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EstadoModel.html" data-type="entity-link" >EstadoModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Offer.html" data-type="entity-link" >Offer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioModel.html" data-type="entity-link" >UsuarioModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CierrePedidosService.html" data-type="entity-link" >CierrePedidosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OffersService.html" data-type="entity-link" >OffersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocketsService.html" data-type="entity-link" >SocketsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CierrePedidos.html" data-type="entity-link" >CierrePedidos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});