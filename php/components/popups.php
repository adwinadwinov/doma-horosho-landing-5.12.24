<div class="popups-bg"></div>
<div class="popups-container">
    <div class="popup calc-popup" data-popup="popup-calc">
        <button class="close-btn popup__close"></button>
        <div class="popup-header">
            <h2 class="popup__title">Запросить расчет</h2>
        </div>
        <div class="popup-body">
            <form class="calc-popup__form js-form">
                <input type="hidden" name="id" />
                <div class="calc-popup__inputs">
                    <input class="calc-popup__input" name="name" placeholder="Ваше имя" type="text" data-required />
                    <input class="calc-popup__input" name="phone" placeholder="Контактный телефон" type="tel" data-required />
                </div>
                <div class="calc-popup__cbs">
                    <p class="popup__sub-title">Где с вами связаться?</p>
                    <div class="callback-kind js-callback-kind">
                        <button class="callback-kind__btn callback-kind__btn--active js-callback-kind__btn" role="checkbox" data-callback-type="ws">
                            <svg class="callback-kind__img" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                                <path
                                    d="M12.04 2.46148C6.57999 2.46148 2.12999 6.91148 2.12999 12.3715C2.12999 14.1215 2.58999 15.8215 3.44999 17.3215L2.04999 22.4615L7.29999 21.0815C8.74999 21.8715 10.38 22.2915 12.04 22.2915C17.5 22.2915 21.95 17.8415 21.95 12.3815C21.95 9.73148 20.92 7.24148 19.05 5.37148C18.1331 4.44559 17.041 3.71145 15.8375 3.21184C14.634 2.71224 13.3431 2.45716 12.04 2.46148ZM12.05 4.13148C14.25 4.13148 16.31 4.99148 17.87 6.55148C18.6354 7.317 19.2422 8.22599 19.6558 9.2264C20.0693 10.2268 20.2814 11.299 20.28 12.3815C20.28 16.9215 16.58 20.6115 12.04 20.6115C10.56 20.6115 9.10999 20.2215 7.84999 19.4615L7.54999 19.2915L4.42999 20.1115L5.25999 17.0715L5.05999 16.7515C4.23453 15.4399 3.79766 13.9212 3.79999 12.3715C3.80999 7.83148 7.49999 4.13148 12.05 4.13148ZM8.52999 7.79148C8.36999 7.79148 8.09999 7.85148 7.86999 8.10148C7.64999 8.35148 6.99999 8.96148 6.99999 10.1715C6.99999 11.3915 7.88999 12.5615 7.99999 12.7315C8.13999 12.9015 9.75999 15.4015 12.25 16.4615C12.84 16.7315 13.3 16.8815 13.66 16.9915C14.25 17.1815 14.79 17.1515 15.22 17.0915C15.7 17.0215 16.68 16.4915 16.89 15.9115C17.1 15.3315 17.1 14.8415 17.04 14.7315C16.97 14.6315 16.81 14.5715 16.56 14.4615C16.31 14.3215 15.09 13.7215 14.87 13.6415C14.64 13.5615 14.5 13.5215 14.31 13.7615C14.15 14.0115 13.67 14.5715 13.53 14.7315C13.38 14.9015 13.24 14.9215 13 14.8015C12.74 14.6715 11.94 14.4115 11 13.5715C10.26 12.9115 9.76999 12.1015 9.61999 11.8515C9.49999 11.6115 9.60999 11.4615 9.72999 11.3515C9.83999 11.2415 9.99999 11.0615 10.1 10.9115C10.23 10.7715 10.27 10.6615 10.35 10.5015C10.43 10.3315 10.39 10.1915 10.33 10.0715C10.27 9.96148 9.76999 8.72148 9.55999 8.23148C9.35999 7.75148 9.15999 7.81148 8.99999 7.80148C8.85999 7.80148 8.69999 7.79148 8.52999 7.79148Z"
                                    fill="currentColor" />
                            </svg>
                            <p class="callback-kind__text">В WhatsApp</p>
                        </button>
                        <button class="callback-kind__btn js-callback-kind__btn" role="checkbox" data-callback-type="telegram">
                            <svg class="callback-kind__img" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                                <path
                                    d="M21.936 5.63145L18.906 19.8165C18.68 20.8155 18.1 21.0405 17.262 20.5895L12.717 17.2375L10.492 19.3645C10.267 19.5905 10.041 19.8165 9.525 19.8165L9.88 15.1415L18.358 7.43745C18.712 7.08245 18.261 6.95345 17.81 7.24445L7.269 13.8845L2.723 12.4985C1.724 12.1765 1.724 11.4985 2.949 11.0485L20.614 4.18145C21.484 3.92345 22.226 4.37545 21.936 5.63145Z"
                                    fill="currentColor" />
                            </svg>
                            <p class="callback-kind__text">В Telegram</p>
                        </button>
                        <button class="callback-kind__btn js-callback-kind__btn" role="checkbox" data-callback-type="phone">
                            <svg
                                class="callback-kind__img"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8045 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3714 15.9359 8.06404 13.6286 6.61998 10.79L8.46998 8.94001C8.89998 8.51001 9.10998 7.91001 9.03998 7.30001L8.74998 4.78001C8.6935 4.2921 8.45944 3.84204 8.09244 3.51561C7.72544 3.18918 7.25115 3.00921 6.75998 3.01001H5.02998C3.89998 3.01001 2.95998 3.95001 3.02998 5.08001C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                                    fill="#768A71" />
                            </svg>
                            <p class="callback-kind__text">По телефону</p>
                        </button>
                    </div>
                </div>
                <button class="button button--full popup__button" type="submit">Отправить заявку</button>
            </form>
        </div>
        <div class="popup-footer">
            <p class="calc-popup__sub">Нажимая кнопку "Оставить заявку", вы соглашаетесь с Политикой конфиденциальности</p>
        </div>
    </div>
    <div class="popup calc-popup" data-popup="popup-request">
        <button class="close-btn popup__close"></button>
        <div class="popup-header">
            <h2 class="popup__title">Оставить заявку</h2>
        </div>
        <div class="popup-body">
            <form class="calc-popup__form js-form">
                <input type="hidden" name="id" />
                <div class="calc-popup__inputs">
                    <input class="calc-popup__input" name="name" placeholder="Ваше имя" type="text" data-required />
                    <input class="calc-popup__input" name="phone" placeholder="Контактный телефон" type="tel" data-required />
                </div>
                <div class="calc-popup__cbs">
                    <p class="popup__sub-title">Где с вами связаться?</p>
                    <div class="callback-kind">
                        <button class="callback-kind__btn callback-kind__btn--active" role="checkbox">
                            <svg class="callback-kind__img" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                                <path
                                    d="M12.04 2.46148C6.57999 2.46148 2.12999 6.91148 2.12999 12.3715C2.12999 14.1215 2.58999 15.8215 3.44999 17.3215L2.04999 22.4615L7.29999 21.0815C8.74999 21.8715 10.38 22.2915 12.04 22.2915C17.5 22.2915 21.95 17.8415 21.95 12.3815C21.95 9.73148 20.92 7.24148 19.05 5.37148C18.1331 4.44559 17.041 3.71145 15.8375 3.21184C14.634 2.71224 13.3431 2.45716 12.04 2.46148ZM12.05 4.13148C14.25 4.13148 16.31 4.99148 17.87 6.55148C18.6354 7.317 19.2422 8.22599 19.6558 9.2264C20.0693 10.2268 20.2814 11.299 20.28 12.3815C20.28 16.9215 16.58 20.6115 12.04 20.6115C10.56 20.6115 9.10999 20.2215 7.84999 19.4615L7.54999 19.2915L4.42999 20.1115L5.25999 17.0715L5.05999 16.7515C4.23453 15.4399 3.79766 13.9212 3.79999 12.3715C3.80999 7.83148 7.49999 4.13148 12.05 4.13148ZM8.52999 7.79148C8.36999 7.79148 8.09999 7.85148 7.86999 8.10148C7.64999 8.35148 6.99999 8.96148 6.99999 10.1715C6.99999 11.3915 7.88999 12.5615 7.99999 12.7315C8.13999 12.9015 9.75999 15.4015 12.25 16.4615C12.84 16.7315 13.3 16.8815 13.66 16.9915C14.25 17.1815 14.79 17.1515 15.22 17.0915C15.7 17.0215 16.68 16.4915 16.89 15.9115C17.1 15.3315 17.1 14.8415 17.04 14.7315C16.97 14.6315 16.81 14.5715 16.56 14.4615C16.31 14.3215 15.09 13.7215 14.87 13.6415C14.64 13.5615 14.5 13.5215 14.31 13.7615C14.15 14.0115 13.67 14.5715 13.53 14.7315C13.38 14.9015 13.24 14.9215 13 14.8015C12.74 14.6715 11.94 14.4115 11 13.5715C10.26 12.9115 9.76999 12.1015 9.61999 11.8515C9.49999 11.6115 9.60999 11.4615 9.72999 11.3515C9.83999 11.2415 9.99999 11.0615 10.1 10.9115C10.23 10.7715 10.27 10.6615 10.35 10.5015C10.43 10.3315 10.39 10.1915 10.33 10.0715C10.27 9.96148 9.76999 8.72148 9.55999 8.23148C9.35999 7.75148 9.15999 7.81148 8.99999 7.80148C8.85999 7.80148 8.69999 7.79148 8.52999 7.79148Z"
                                    fill="currentColor" />
                            </svg>
                            <p class="callback-kind__text">В WhatsApp</p>
                        </button>
                        <button class="callback-kind__btn" role="checkbox">
                            <svg class="callback-kind__img" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                                <path
                                    d="M21.936 5.63145L18.906 19.8165C18.68 20.8155 18.1 21.0405 17.262 20.5895L12.717 17.2375L10.492 19.3645C10.267 19.5905 10.041 19.8165 9.525 19.8165L9.88 15.1415L18.358 7.43745C18.712 7.08245 18.261 6.95345 17.81 7.24445L7.269 13.8845L2.723 12.4985C1.724 12.1765 1.724 11.4985 2.949 11.0485L20.614 4.18145C21.484 3.92345 22.226 4.37545 21.936 5.63145Z"
                                    fill="currentColor" />
                            </svg>
                            <p class="callback-kind__text">В Telegram</p>
                        </button>
                        <button class="callback-kind__btn" role="checkbox">
                            <svg
                                class="callback-kind__img"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8045 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3714 15.9359 8.06404 13.6286 6.61998 10.79L8.46998 8.94001C8.89998 8.51001 9.10998 7.91001 9.03998 7.30001L8.74998 4.78001C8.6935 4.2921 8.45944 3.84204 8.09244 3.51561C7.72544 3.18918 7.25115 3.00921 6.75998 3.01001H5.02998C3.89998 3.01001 2.95998 3.95001 3.02998 5.08001C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                                    fill="#768A71" />
                            </svg>
                            <p class="callback-kind__text">По телефону</p>
                        </button>
                    </div>
                </div>
                <button class="button button--full popup__button" type="submit">Отправить заявку</button>
            </form>
        </div>
        <div class="popup-footer">
            <p class="calc-popup__sub">Нажимая кнопку "Оставить заявку", вы соглашаетесь с Политикой конфиденциальности</p>
        </div>
    </div>
    <div class="popup success-popup">
        <button class="close-btn popup__close"></button>
        <div class="popup-header">
            <h2 class="popup__title">Ваша заявка принята</h2>
        </div>
        <div class="popup-body">
            <div class="popup__text">Наш менеджер скоро свяжется с вами для уточнения деталей.</div>
        </div>
        <div class="popup-footer">
            <button class="button button--full popup__button">Ок, понятно</button>
        </div>
    </div>
</div>
<div style="width: 100%; max-width: fit-content; display: none; padding: 0; background-color: transparent" id="video-popup">
    <video controls autoplay style="width: auto; max-height: 500px; padding: 0; border-radius: 2rem;">
        Ваш браузер не поддерживает видео.
    </video>
</div>