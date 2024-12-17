<section class="catalog section" id="catalog">
    <div class="tabs" data-default-value="kitchens" role="tabpanel">
        <div class="tabs-triggers catalog__tabs-triggers" role="tablist" aria-orientation="horizontal">
            <button
                class="tabs-triggers__btn"
                id="kitchens-btn"
                data-value="kitchens"
                type="button"
                role="tab"
                aria-controls="kitchens-tab"
                aria-selected="true">
                Кухни
            </button>
            <button
                class="tabs-triggers__btn"
                id="wardrobes-btn"
                data-value="wardrobes"
                type="button"
                role="tab"
                aria-controls="wardrobes-tab"
                aria-selected="false">
                Шкафы
            </button>
            <div class="tabs-indicator">
                <div class="tabs-indicator__slide"></div>
            </div>
        </div>
        <div class="tabs-content">
            <div
                class="tabs-content__panel js-tab-panel"
                id="kitchens-tab"
                tabindex="0"
                data-value="kitchens"
                aria-labelledby="kitchens-btn"
                role="tabpanel">
                <div class="catalog__grid js-catalog-grid">
                    <? foreach ($catalog['kitchens'] as $kitchen) : ?>
                        <article class="card" style="display: none;">
                            <div class="swiper card__swiper">
                                <button class="card__swiper-prev">
                                    <img src="/assets/images/chevron.svg" alt="Стрелка влево" />
                                </button>
                                <button class="card__swiper-next">
                                    <img src="/assets/images/chevron.svg" alt="Стрелка вправо" />
                                </button>
                                <div class="swiper-wrapper">
                                    <? foreach (explode(';', $kitchen['images']) as $image) : ?>
                                        <div class="swiper-slide card__swiper-slide">
                                            <a href="/assets/images/kitchens/<?= $image; ?>" data-fancybox="name-<?= $kitchen['name']; ?>" data-caption="<?= $kitchen['name']; ?>">
                                                <img class="card__img" loading="lazy" src="/assets/images/kitchens/<?= $image; ?>" alt="Кухня" />
                                            </a>
                                            <div class="loader card__img-loader"></div>
                                        </div>
                                    <? endforeach; ?>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="card-footer__content">
                                    <div class="card-footer__heading">
                                        <div class="card-meta">
                                            <p class="card-meta__type">Кухня</p>
                                            <h3 class="card-meta__title"><?= $kitchen['name']; ?></h3>
                                        </div>
                                        <div class="card-prices">
                                            <div class="card-prices__price">от <?= $kitchen['price']; ?> ₽</div>
                                            <div class="card-prices__discount">от <?= $kitchen['discount']; ?> ₽</div>
                                        </div>
                                    </div>
                                    <ul class="card-disc card-footer__disc">
                                        <li class="divider card-disc__divider"></li>
                                        <? foreach (explode(';', $kitchen['material']) as $material) : ?>
                                            <? $materials = explode(':', $material); ?>
                                            <li class="card-disc__item">
                                                <span class="card-disc__propery"><?= $materials[0]; ?></span><span class="card-disc__value"><?= $materials[1]; ?></span>
                                            </li>
                                        <? endforeach; ?>
                                        <? if (isset($kitchen['size']) && strlen($kitchen['size']) != 0) : ?>
                                            <li class="card-disc__item">
                                                <span class="card-disc__propery">Габариты, см</span><span class="card-disc__value"><?= $kitchen['size'] ?></span>
                                            </li>
                                        <? endif; ?>
                                        <li class="card-disc__item">
                                            <span class="card-disc__propery">Рассрочка 0-0-12</span><span class="card-disc__value">от <?= round((int)str_replace(' ', '', $kitchen['price']) / 12, -1); ?> ₽/мес</span>
                                        </li>
                                    </ul>
                                </div>
                                <button class="button card-footer__button" data-trigger="popup-calc" data-target="Кухня">Запросить расчёт</button>
                                <p class="card-footer__sub">Цена за данную комплектацию</p>
                            </div>
                        </article>
                    <? endforeach; ?>
                </div>
                <button class="button button--full catalog__button js-catalog-button"><img src="/assets/images/plus-circle.svg" alt="Плюсик" /> <span class="js-btn-catalog-content">Показать ещё</span></button>
            </div>
            <div
                class="tabs-content__panel js-tab-panel"
                id="wardrobes-tab"
                tabindex="0"
                data-value="wardrobes"
                aria-labelledby="wardrobes-btn"
                role="tabpanel">
                <div class="catalog__grid js-catalog-grid">
                    <? foreach ($catalog['wardrobes'] as $wardrobe) : ?>
                        <article class="card" style="display: none;">
                            <div class="swiper card__swiper">
                                <button class="card__swiper-prev">
                                    <img src="/assets/images/chevron.svg" alt="Стрелка влево" />
                                </button>
                                <button class="card__swiper-next">
                                    <img src="/assets/images/chevron.svg" alt="Стрелка вправо" />
                                </button>
                                <div class="swiper-wrapper">
                                    <? foreach (explode(';', $wardrobe['images']) as $image) : ?>
                                        <div class="swiper-slide card__swiper-slide">
                                            <a href="/assets/images/wardrobes/<?= $image; ?>" data-fancybox="name-<?= $wardrobe['name']; ?>" data-caption="<?= $wardrobe['name']; ?>">
                                                <img class="card__img" loading="lazy" src="/assets/images/wardrobes/<?= $image; ?>" alt="Шкаф" />
                                            </a>
                                            <div class="loader card__img-loader"></div>
                                        </div>
                                    <? endforeach; ?>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="card-footer__content">
                                    <div class="card-footer__heading">
                                        <div class="card-meta">
                                            <p class="card-meta__type">Шкаф</p>
                                            <h3 class="card-meta__title"><?= $wardrobe['name']; ?></h3>
                                        </div>
                                        <div class="card-prices">
                                            <div class="card-prices__price">от <?= $wardrobe['price']; ?> ₽</div>
                                            <div class="card-prices__discount">от <?= $wardrobe['discount']; ?> ₽</div>
                                        </div>
                                    </div>
                                    <ul class="card-disc card-footer__disc">
                                        <li class="divider card-disc__divider"></li>
                                        <? foreach (explode(';', $wardrobe['material']) as $material) : ?>
                                            <? $materials = explode(':', $material); ?>
                                            <li class="card-disc__item">
                                                <span class="card-disc__propery"><?= $materials[0]; ?></span><span class="card-disc__value"><?= $materials[1]; ?></span>
                                            </li>
                                        <? endforeach; ?>
                                        <li class="card-disc__item">
                                            <span class="card-disc__propery">Рассрочка 0-0-12</span><span class="card-disc__value">от <?= round((int)str_replace(' ', '', $kitchen['price']) / 12, -1); ?> ₽/мес</span>
                                        </li>
                                    </ul>
                                </div>
                                <button class="button card-footer__button" data-trigger="popup-calc" data-target="Шкаф">Запросить расчёт</button>
                                <p class="card-footer__sub">Цена за данную комплектацию</p>
                            </div>
                        </article>
                    <? endforeach; ?>
                </div>
                <button class="button button--full catalog__button js-catalog-button"><img src="/assets/images/plus-circle.svg" alt="Плюсик" /> <span class="js-btn-catalog-content">Показать ещё</span></button>
            </div>
        </div>
    </div>
</section>