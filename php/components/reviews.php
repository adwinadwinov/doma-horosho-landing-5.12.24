<? 
$REVIEWS = [
    [
        'video_src' => '/assets/videos/review-1.MOV',
        'cover' => '/assets/images/cover-1.png',
        'autor' => 'Евгений',
        'kitchen' => 'Кухня за 242 тыс.'
    ],
    [
        'video_src' => '/assets/videos/review-2.MOV',
        'cover' => '/assets/images/cover-2.png',
        'autor' => 'Оксана',
        'kitchen' => 'Кухня в хрущевке'
    ],
    [
        'video_src' => '/assets/videos/review-3.MOV',
        'cover' => '/assets/images/cover-3.png',
        'autor' => 'Евгений',
        'kitchen' => 'Кухня за 210 тыс.'
    ],
    [
        'video_src' => '/assets/videos/review-4.mov',
        'cover' => '/assets/images/cover-4.png',
        'autor' => 'Евгений',
        'kitchen' => 'Столешница из гранита'
    ],
    [
        'video_src' => '/assets/videos/review-5.mov',
        'cover' => '/assets/images/cover-5.png',
        'autor' => 'Евгений',
        'kitchen' => 'Недавний проект'
    ]
]
?>

<section class="reviews section">
    <div class="reviews__header">
        <h2 class="reviews__title h2">Обзоры проектов</h2>
    </div>
    <div class="reviews__swiper-wrapper">
        <button class="reviews__swiper-prev">
            <img src="/assets/images/chevron.svg" alt="Стрелка вправо" />
        </button>
        <button class="reviews__swiper-next">
            <img src="/assets/images/chevron.svg" alt="Стрелка вправо" />
        </button>
        <div class="reviews__swiper swiper">
            <div class="swiper-wrapper">
                <? foreach ($REVIEWS as $review) : ?>
                    <a
                    role="button"
                    class="review-card swiper-slide"
                    data-video-src="<?= $review['video_src']; ?>"
                    data-fancybox
                    data-src="#video-popup"
                    href="javascript:;">
                    <img class="review-card__preview" loading="lazy" src="<?= $review['cover']; ?>" alt="Обложка" />
                    <div class="review-card__hover">
                        <div class="review-card__gradient"></div>
                        <div class="review-card__meta">
                            <p class="review-card__autor"><?= $review['autor']; ?></p>
                            <p class="review-card__kitchen"><?= $review['kitchen']; ?></p>
                        </div>
                    </div>
                    <div class="play review-card__play">
                        <img class="play__img" src="/assets/images/play.svg" alt="Включить отзыв" />
                    </div>
                </a>
                <? endforeach; ?>
            </div>
        </div>
    </div>
</section>