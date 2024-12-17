<?php
require_once 'access.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$callback = $_POST['callback'];
$target = $_POST['target'];
$source = 'Лэндинг';

$utms = json_decode($_POST['utms'], true);

$pipeline_id = 8611066; // Воронка
$user_amo = 11676286; // Ответственный

$link = 'https://' . $subdomain . '.amocrm.ru/api/v4/leads/complex';
$headers = [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $access_token
];

try {
    // Данные для отправки
    $data = [
        [
            "name" => $name . ' | Заявка с лэндинга',
            "responsible_user_id" => (int)$user_amo,
            "pipeline_id" => (int)$pipeline_id,
            "_embedded" => [
                "contacts" => [
                    [
                        "first_name" => $name,
                        "custom_fields_values" => [
                            [
                                "field_id" => 685361,
                                "values" => [
                                    [
                                        "enum_id" => 724639,
                                        "value" => $phone
                                    ]
                                ],
                            ],
                            [
                                "field_id" => 739067,
                                "values" => [
                                    [
                                        "value" => $callback
                                    ]
                                ]
                            ]

                        ]
                    ]
                ],
            ],
            "custom_fields_values" => [
                [
                    "field_id" => 735401,
                    "values" => [
                        [
                            "value" => $target
                        ]
                    ]

                ],
                [
                    "field_id" => 738213,
                    "values" => [
                        [
                            "value" => $source
                        ]
                    ]

                ],
                [
                    "field_code" => 'UTM_SOURCE',
                    "values" => [
                        [
                            "value" => $utms['utm_source']
                        ]
                    ]
                ],
                [
                    "field_code" => 'UTM_CONTENT',
                    "values" => [
                        [
                            "value" => $utms['utm_content']
                        ]
                    ]
                ],
                [
                    "field_code" => 'UTM_MEDIUM',
                    "values" => [
                        [
                            "value" => $utms['utm_medium']
                        ]
                    ]
                ],
                [
                    "field_code" => 'UTM_CAMPAIGN',
                    "values" => [
                        [
                            "value" => $utms['utm_campaign']
                        ]
                    ]
                ],
                [
                    "field_code" => 'UTM_TERM',
                    "values" => [
                        [
                            "value" => $utms['utm_term']
                        ]
                    ]
                ],
                [
                    "field_code" => 'UTM_REFERRER',
                    "values" => [
                        [
                            "value" => $utms['utm_referrer']
                        ]
                    ]
                ],
            ]
        ]
    ];

    $curl = curl_init(); //Сохраняем дескриптор сеанса cURL
    /** Устанавливаем необходимые опции для сеанса cURL  */
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-oAuth-client/1.0');
    curl_setopt($curl, CURLOPT_URL, $link);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
    $out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
    $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    /** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
    $code = (int)$code;
    $errors = [
        400 => 'Bad request',
        401 => 'Unauthorized',
        403 => 'Forbidden',
        404 => 'Not found',
        500 => 'Internal server error',
        502 => 'Bad gateway',
        503 => 'Service unavailable',
    ];

    if ($code < 200 || $code > 204) {
        throw new Exception($errors[$code] ?? 'Undefined error', $code);
    }

    // Успешный ответ
    echo json_encode([
        'status' => 'success',
        'message' => 'Данные успешно отправлены в amoCRM.',
        'response' => json_decode($out, true) // Декодируем и передаем ответ API
    ]);
} catch (Exception $e) {
    // Обработка ошибок
    http_response_code($e->getCode() ?: 500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
