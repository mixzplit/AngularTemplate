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
                                            'data-target="#components-links-module-AppModule-8a427585c872a84b7065e313498d381ed65d0ae9519d864eb744a62b4efe2c83d7d45ee418af3ba4a0d25377067907affc32de0e6b26bb893888628dc1f341be"' : 'data-target="#xs-components-links-module-AppModule-8a427585c872a84b7065e313498d381ed65d0ae9519d864eb744a62b4efe2c83d7d45ee418af3ba4a0d25377067907affc32de0e6b26bb893888628dc1f341be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8a427585c872a84b7065e313498d381ed65d0ae9519d864eb744a62b4efe2c83d7d45ee418af3ba4a0d25377067907affc32de0e6b26bb893888628dc1f341be"' :
                                            'id="xs-components-links-module-AppModule-8a427585c872a84b7065e313498d381ed65d0ae9519d864eb744a62b4efe2c83d7d45ee418af3ba4a0d25377067907affc32de0e6b26bb893888628dc1f341be"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
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
                                            'data-target="#components-links-module-DashboardModule-4435ee7c6793da3f9bf4af4cf4f09308efc510dcdb5e4b82c4a28fa9303890c843cdd832808a2a1d39a1adb3acde4678ea930ecd508f8efb41f9ccd5b165b220"' : 'data-target="#xs-components-links-module-DashboardModule-4435ee7c6793da3f9bf4af4cf4f09308efc510dcdb5e4b82c4a28fa9303890c843cdd832808a2a1d39a1adb3acde4678ea930ecd508f8efb41f9ccd5b165b220"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-4435ee7c6793da3f9bf4af4cf4f09308efc510dcdb5e4b82c4a28fa9303890c843cdd832808a2a1d39a1adb3acde4678ea930ecd508f8efb41f9ccd5b165b220"' :
                                            'id="xs-components-links-module-DashboardModule-4435ee7c6793da3f9bf4af4cf4f09308efc510dcdb5e4b82c4a28fa9303890c843cdd832808a2a1d39a1adb3acde4678ea930ecd508f8efb41f9ccd5b165b220"' }>
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
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-55ecd05027495b4236bec8a75951bd20b0d440d37f7f0096cd81c829fcdf4a5a3c2bd6ade326f2293eae9b018996c86ffa0d31f0df08f4c4b676a3ca1f3a909d"' : 'data-target="#xs-components-links-module-LayoutModule-55ecd05027495b4236bec8a75951bd20b0d440d37f7f0096cd81c829fcdf4a5a3c2bd6ade326f2293eae9b018996c86ffa0d31f0df08f4c4b676a3ca1f3a909d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-55ecd05027495b4236bec8a75951bd20b0d440d37f7f0096cd81c829fcdf4a5a3c2bd6ade326f2293eae9b018996c86ffa0d31f0df08f4c4b676a3ca1f3a909d"' :
                                            'id="xs-components-links-module-LayoutModule-55ecd05027495b4236bec8a75951bd20b0d440d37f7f0096cd81c829fcdf4a5a3c2bd6ade326f2293eae9b018996c86ffa0d31f0df08f4c4b676a3ca1f3a909d"' }>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
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
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
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