<header class="header js-header">
    <div class="header__left">
        <button class="mobile-button header__mobile-button js-mobile-button" aria-expanded="false" aria-controls="mobile-nav-menu">
            <span class="mobile-button__span"></span>
        </button>
        <a class="logo header__logo" href="#">
            <img class="logo__img header__img" src="/images/logo.svg" alt="Домо хорошо" />
        </a>
    </div>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item">
                <a href="#" class="nav__link">Кухни</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Шкафы</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">О нас</a>
            </li>
            <li class="nav__item">
                <a href="#" class="nav__link">Акции</a>
            </li>
        </ul>
    </nav>
    <div class="header__contacts">
        <a class="link" href="<?= $CONTACTS['phone_number']['link']; ?>">
            <svg class="link__icon" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.6667 16.7414V18.7414C19.6674 18.9271 19.6294 19.1109 19.555 19.281C19.4806 19.4511 19.3715 19.6038 19.2347 19.7293C19.0979 19.8548 18.9364 19.9504 18.7605 20.0099C18.5846 20.0694 18.3983 20.0915 18.2133 20.0747C16.1619 19.8518 14.1913 19.1508 12.46 18.0281C10.8492 17.0045 9.48356 15.6389 8.46001 14.0281C7.33333 12.2889 6.63217 10.3087 6.41334 8.24808C6.39668 8.06372 6.41859 7.87792 6.47767 7.70249C6.53676 7.52707 6.63172 7.36587 6.75652 7.22916C6.88131 7.09244 7.03321 6.98322 7.20253 6.90842C7.37186 6.83363 7.5549 6.79492 7.74001 6.79474H9.74001C10.0635 6.79156 10.3772 6.90613 10.6225 7.1171C10.8678 7.32807 11.0281 7.62104 11.0733 7.94141C11.1578 8.58145 11.3143 9.20989 11.54 9.81474C11.6297 10.0534 11.6491 10.3127 11.5959 10.562C11.5428 10.8113 11.4192 11.0401 11.24 11.2214L10.3933 12.0681C11.3424 13.7371 12.7243 15.119 14.3933 16.0681L15.24 15.2214C15.4213 15.0422 15.6501 14.9186 15.8994 14.8655C16.1487 14.8123 16.4081 14.8317 16.6467 14.9214C17.2515 15.1471 17.88 15.3037 18.52 15.3881C18.8439 15.4338 19.1396 15.5969 19.351 15.8464C19.5624 16.0959 19.6748 16.4145 19.6667 16.7414Z"
                    fill="currentColor" />
            </svg>
            <?= $CONTACTS['phone_number']['value']; ?>
        </a>
        <a class="button" role="button">Связаться в WhatsApp</a>
    </div>
    <div class="mobile-contacts">
        <a class="mobile-contacts__ws" href=" https://wa.me/78122505994">
            <img class="mobile-contacts__img" src="/images/ws.svg" alt="WhatsApp" />
        </a>
        <a class="mobile-contacts__phone" href="tel:78122505994">
            <img class="mobile-contacts__img" src="/images/phone.svg" alt="Трубка" />
        </a>
    </div>
</header>